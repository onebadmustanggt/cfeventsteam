import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      role?: unknown;
      message?: unknown;
    };

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();
    const role = String(body.role ?? "guest");

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
    if (!message) {
      return NextResponse.json(
        { error: "A short note helps — which event, and what you need." },
        { status: 400 },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ ok: true, role });
  } catch {
    return NextResponse.json(
      { error: "Something didn’t send. Try again or email us." },
      { status: 400 },
    );
  }
}
