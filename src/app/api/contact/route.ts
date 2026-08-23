import { NextResponse } from "next/server";

import { site } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 500;
const IDENTITIES = {
  vendor: "Vendor",
  creator: "Content Creator",
  sponsor: "Potential Sponsor",
} as const;
const REASONS = {
  "apply-vendor": "I'd like to apply to be a vendor",
  collaborate: "I'd like to collaborate",
  sponsorship: "Event Sponsorship",
} as const;

type Identity = keyof typeof IDENTITIES;
type Reason = keyof typeof REASONS;

function isIdentity(value: string): value is Identity {
  return value in IDENTITIES;
}

function isReason(value: string): value is Reason {
  return value in REASONS;
}

async function deliverMessage({
  name,
  email,
  identity,
  reason,
  message,
}: {
  name: string;
  email: string;
  identity: Identity;
  reason: Reason;
  message: string;
}) {
  const identityLabel = IDENTITIES[identity];
  const reasonLabel = REASONS[reason];
  const subject = `Website contact — ${reasonLabel}`;
  const text = [
    `${name} wrote from the CF Events Team website.`,
    "",
    `Email: ${email}`,
    `I'm a: ${identityLabel}`,
    `I'm writing because: ${reasonLabel}`,
    "",
    message,
  ].join("\n");

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: subject,
        _template: "box",
        _captcha: "false",
        identity: identityLabel,
        reason: reasonLabel,
        message: text,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`FormSubmit responded ${response.status}`);
  }

  const result = (await response.json()) as { success?: string | boolean };
  if (result.success === false || result.success === "false") {
    throw new Error("FormSubmit did not accept the message.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      identity?: unknown;
      reason?: unknown;
      message?: unknown;
    };

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();
    const identity = String(body.identity ?? "");
    const reason = String(body.reason ?? "");

    if (!name) {
      return NextResponse.json(
        { error: "Tell us your name so we know who to write back." },
        { status: 400 },
      );
    }
    if (!email) {
      return NextResponse.json(
        { error: "Add an email so we can reply." },
        { status: 400 },
      );
    }
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "That email doesn’t look right." },
        { status: 400 },
      );
    }
    if (!isIdentity(identity)) {
      return NextResponse.json(
        { error: "Let us know if you are a vendor, content creator, or potential sponsor." },
        { status: 400 },
      );
    }
    if (!isReason(reason)) {
      return NextResponse.json(
        { error: "Tell us if you want to vend, collaborate, or talk sponsorship." },
        { status: 400 },
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: "A short note helps — which event, and what you need." },
        { status: 400 },
      );
    }
    if (message.length > MESSAGE_MAX) {
      return NextResponse.json(
        { error: `Keep your message to ${MESSAGE_MAX} characters.` },
        { status: 400 },
      );
    }

    await deliverMessage({ name, email, identity, reason, message });

    return NextResponse.json({ ok: true, identity, reason });
  } catch {
    return NextResponse.json(
      { error: "Something didn’t send. Try again or email us." },
      { status: 400 },
    );
  }
}
