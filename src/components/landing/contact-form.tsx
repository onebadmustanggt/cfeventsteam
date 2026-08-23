"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const roles = [
  { value: "guest", label: "I want to attend" },
  { value: "vendor", label: "I want a table" },
  { value: "partner", label: "Venue or partnership" },
] as const;

const fieldClassName =
  "h-11 w-full rounded-lg border border-input bg-card px-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50 md:text-sm aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20";

export function ContactForm() {
  const [role, setRole] = useState<(typeof roles)[number]["value"]>("guest");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

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
    if (!message) {
      setStatus("error");
      setError("A short note helps — which event, and what you need.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, message }),
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
      <div
        role="status"
        className="rounded-2xl border border-primary/25 bg-primary/10 px-5 py-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-8 text-primary" />
        <p className="font-heading mt-3 text-2xl">We have your note.</p>
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

  const invalid = status === "error";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {invalid ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          We’ll point you to the right inbox. Nothing is stored on this demo form.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            disabled={status === "loading"}
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
            disabled={status === "loading"}
            placeholder="you@email.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I’m writing because</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((item) => (
            <button
              key={item.value}
              type="button"
              disabled={status === "loading"}
              onClick={() => setRole(item.value)}
              className={
                role === item.value
                  ? "rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground"
                  : "rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:bg-muted"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          name="message"
          disabled={status === "loading"}
          placeholder="Which event, what you sell, or how many tickets you need."
          className={cn(fieldClassName, "h-auto min-h-32 py-2")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 px-5")}
      >
        {status === "loading" ? (
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
