"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const MESSAGE_MAX = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const fieldClassName =
  "h-11 w-full rounded-lg border border-input bg-card px-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50 md:text-sm aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20";

function Chip({
  selected,
  disabled,
  onClick,
  children,
}: {
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={selected}
      onClick={onClick}
      className={
        selected
          ? "rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          : "rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:bg-muted"
      }
    >
      {children}
    </button>
  );
}

export function ContactForm() {
  const [identity, setIdentity] = useState<Identity | "">("");
  const [reason, setReason] = useState<Reason | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("success");
      document.getElementById("contact")?.scrollIntoView({ block: "start", behavior: "instant" });
      const url = new URL(window.location.href);
      url.searchParams.delete("sent");
      url.hash = "contact";
      window.history.replaceState({}, "", `${url.pathname}${url.hash}`);
    }
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setError("That email doesn’t look right.");
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

    const form = event.currentTarget;
    const frameName = "cf-contact-send";
    let frame = document.getElementById(frameName) as HTMLIFrameElement | null;
    if (!frame) {
      frame = document.createElement("iframe");
      frame.id = frameName;
      frame.name = frameName;
      frame.title = "Sending message";
      frame.className = "sr-only";
      frame.tabIndex = -1;
      frame.setAttribute("aria-hidden", "true");
      document.body.appendChild(frame);
    }

    form.target = frameName;
    form.action = `https://formsubmit.co/${site.email}`;
    form.method = "POST";
    form.submit();

    setStatus("loading");
    setError("");
    const finish = () => setStatus("success");
    frame.onload = finish;
    window.setTimeout(finish, 1200);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/25 bg-primary/10 px-5 py-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-8 text-primary" />
        <p className="font-heading mt-3 text-2xl">Thank You for Reaching Out</p>
        <p className="mt-3 text-base font-medium">Your message is on its way!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          A member of The CF Events Team will review your submission and respond
          to the email address you provided.
        </p>
      </div>
    );
  }

  const loading = status === "loading";
  const identityLabel = identities.find((item) => item.value === identity)?.label ?? "";
  const reasonLabel = reasons.find((item) => item.value === reason)?.label ?? "";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_subject" value={`Website contact — ${reasonLabel || "message"}`} />
      <input type="hidden" name="identity" value={identityLabel} />
      <input type="hidden" name="reason" value={reasonLabel} />

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            disabled={loading}
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            disabled={loading}
            placeholder="you@email.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I’m a</legend>
        <div className="flex flex-wrap gap-2">
          {identities.map((item) => (
            <Chip
              key={item.value}
              selected={identity === item.value}
              disabled={loading}
              onClick={() => setIdentity(item.value)}
            >
              {item.label}
            </Chip>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I’m writing because</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((item) => (
            <Chip
              key={item.value}
              selected={reason === item.value}
              disabled={loading}
              onClick={() => setReason(item.value)}
            >
              {item.label}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          maxLength={MESSAGE_MAX}
          disabled={loading}
          placeholder="Which event, what you sell, or how we can work together."
          onChange={(event) => setMessage(event.target.value.slice(0, MESSAGE_MAX))}
          className={cn(fieldClassName, "h-auto min-h-32 resize-none py-2")}
        />
        <p className="text-right text-xs text-muted-foreground">
          {message.length}/{MESSAGE_MAX}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 px-5")}
      >
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
