"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const roles = [
  { value: "guest", label: "I want to attend" },
  { value: "vendor", label: "I want a table" },
  { value: "partner", label: "Venue or partnership" },
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<(typeof roles)[number]["value"]>("guest");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!name.trim()) {
      setStatus("error");
      setError("Tell us your name so we know who to write back.");
      return;
    }
    if (!email.trim()) {
      setStatus("error");
      setError("Add an email so we can reply.");
      return;
    }
    if (!message.trim()) {
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
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(data.error ?? "Something didn’t send. Try again or email us.");
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
          or the vendor desk at{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.vendorEmail}`}>
            {site.vendorEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  const invalid = status === "error";

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      action="#contact"
      className="space-y-4"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            disabled={status === "loading"}
            placeholder="Your name"
            aria-invalid={invalid && !name.trim()}
            className="h-11 bg-card px-3"
            onChange={(event) => {
              setName(event.target.value);
              if (status === "error") {
                setStatus("idle");
                setError("");
              }
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            disabled={status === "loading"}
            placeholder="you@email.com"
            aria-invalid={invalid && !email.trim()}
            className="h-11 bg-card px-3"
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") {
                setStatus("idle");
                setError("");
              }
            }}
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
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={message}
          disabled={status === "loading"}
          placeholder="Which event, what you sell, or how many tickets you need."
          aria-invalid={invalid && !message.trim()}
          className="min-h-32 bg-card"
          onChange={(event) => {
            setMessage(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setError("");
            }
          }}
        />
      </div>

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

      <Button type="submit" size="lg" disabled={status === "loading"} className="h-11 px-5">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
