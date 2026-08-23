"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";
export type LookId = "hip" | "editorial" | "night";

const MESSAGE_MAX = 500;

const identities = [
  { value: "vendor", label: "Vendor" },
  { value: "creator", label: "Content Creator" },
  { value: "sponsor", label: "Potential Sponsor" },
] as const;

const reasons = [
  { value: "apply-vendor", label: "I'd like to apply to be a vendor" },
  { value: "collaborate", label: "I'd like to collaborate" },
  { value: "sponsorship", label: "Event Sponsorship" },
] as const;

type Identity = (typeof identities)[number]["value"];
type Reason = (typeof reasons)[number]["value"];

const looks = {
  hip: {
    field:
      "h-11 w-full border-2 border-foreground/80 bg-background px-3 text-base uppercase tracking-wide outline-none placeholder:text-muted-foreground focus-visible:border-primary disabled:opacity-50 md:text-sm",
    chipOn: "bg-primary px-3 py-1.5 text-sm font-extrabold text-primary-foreground",
    chipOff:
      "border-2 border-foreground/70 bg-background px-3 py-1.5 text-sm uppercase tracking-wide hover:bg-primary hover:text-primary-foreground",
    submit:
      "inline-flex h-12 items-center gap-2 bg-primary px-6 text-sm font-extrabold tracking-[0.18em] text-primary-foreground uppercase",
    success: "border-2 border-primary bg-primary/10 px-5 py-8 text-center",
    error: "border-2 border-destructive px-3 py-2 text-sm text-destructive",
  },
  editorial: {
    field:
      "h-11 w-full border-0 border-b border-foreground bg-transparent px-0 text-base outline-none placeholder:text-muted-foreground focus-visible:border-primary disabled:opacity-50 md:text-sm",
    chipOn: "border-b-2 border-primary pb-0.5 text-sm",
    chipOff: "border-b border-transparent pb-0.5 text-sm text-muted-foreground hover:text-foreground",
    submit:
      "inline-flex h-11 items-center gap-2 border border-foreground px-6 text-sm tracking-wide hover:bg-foreground hover:text-background",
    success: "border border-foreground/20 bg-muted px-5 py-8 text-center",
    error: "border-l-2 border-destructive pl-3 text-sm text-destructive",
  },
  night: {
    field:
      "h-11 w-full rounded-full border border-border bg-card/80 px-4 text-base outline-none placeholder:text-muted-foreground focus-visible:border-primary disabled:opacity-50 md:text-sm",
    chipOn: "rounded-full bg-primary px-4 py-1.5 text-sm text-primary-foreground",
    chipOff:
      "rounded-full border border-border bg-card px-4 py-1.5 text-sm hover:border-primary",
    submit:
      "inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground",
    success: "rounded-3xl border border-primary/30 bg-primary/10 px-5 py-8 text-center",
    error:
      "rounded-2xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive",
  },
} as const;

export function LookContactForm({ look }: { look: LookId }) {
  const ui = looks[look];
  const [identity, setIdentity] = useState<Identity | "">("");
  const [reason, setReason] = useState<Reason | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = message.trim();

    if (!name) {
      setStatus("error");
      setError("Tell us your name so we know who to write back.");
      return;
    }
    if (!email) {
      setStatus("error");
      setError("Add an email so we can reply.");
      return;
    }
    if (!identity) {
      setStatus("error");
      setError("Let us know if you are a vendor, content creator, or potential sponsor.");
      return;
    }
    if (!reason) {
      setStatus("error");
      setError("Tell us if you want to vend, collaborate, or talk sponsorship.");
      return;
    }
    if (!note) {
      setStatus("error");
      setError("A short note helps — which event, and what you need.");
      return;
    }
    if (note.length > MESSAGE_MAX) {
      setStatus("error");
      setError(`Keep your message to ${MESSAGE_MAX} characters.`);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, identity, reason, message: note }),
      });

      if (!response.ok) {
        setStatus("error");
        setError("Something didn’t send. Email us directly instead.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("We couldn’t reach the form just now. Email us directly instead.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={ui.success}>
        <CheckCircle2 className="mx-auto size-8 text-primary" />
        <p className="mt-3 text-2xl">We have your note.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          This page does not store messages yet. For a sure reply, write{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or message {site.facebook.name} on Facebook.
        </p>
      </div>
    );
  }

  const loading = status === "loading";
  const id = `${look}-contact`;

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {status === "error" ? (
        <p role="alert" className={ui.error}>
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${id}-name`} className="text-sm font-medium">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            disabled={loading}
            placeholder="Your name"
            className={ui.field}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${id}-email`} className="text-sm font-medium">
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            disabled={loading}
            placeholder="you@email.com"
            className={ui.field}
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I’m a</legend>
        <div className="flex flex-wrap gap-2">
          {identities.map((item) => (
            <button
              key={item.value}
              type="button"
              disabled={loading}
              aria-pressed={identity === item.value}
              onClick={() => setIdentity(item.value)}
              className={identity === item.value ? ui.chipOn : ui.chipOff}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I’m writing because</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((item) => (
            <button
              key={item.value}
              type="button"
              disabled={loading}
              aria-pressed={reason === item.value}
              onClick={() => setReason(item.value)}
              className={reason === item.value ? ui.chipOn : ui.chipOff}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <label htmlFor={`${id}-message`} className="text-sm font-medium">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          value={message}
          maxLength={MESSAGE_MAX}
          disabled={loading}
          placeholder="Which event, what you sell, or how we can work together."
          onChange={(event) => setMessage(event.target.value.slice(0, MESSAGE_MAX))}
          className={cn(ui.field, "h-auto min-h-32 resize-none py-2")}
        />
        <p className="text-right text-xs text-muted-foreground">
          {message.length}/{MESSAGE_MAX}
        </p>
      </div>

      <button type="submit" disabled={loading} className={ui.submit}>
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
