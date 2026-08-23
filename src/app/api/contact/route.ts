import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 500;
const IDENTITIES = new Set(["vendor", "creator", "sponsor"]);
const REASONS = new Set(["apply-vendor", "collaborate", "sponsorship"]);

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
    if (!IDENTITIES.has(identity)) {
      return NextResponse.json(
        { error: "Let us know if you are a vendor, content creator, or potential sponsor." },
        { status: 400 },
      );
    }
    if (!REASONS.has(reason)) {
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

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ ok: true, identity, reason });
  } catch {
    return NextResponse.json(
      { error: "Something didn’t send. Try again or email us." },
      { status: 400 },
    );
  }
}
