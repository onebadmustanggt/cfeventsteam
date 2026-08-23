import { ContactForm } from "@/components/landing/contact-form";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Contact
          </p>
          <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
            Write us before the room fills up.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Guests, vendors, and partners come through the same inbox. Use the
            form, or email and message us directly.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              Email ·{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              Instagram ·{" "}
              <a
                className="underline underline-offset-4"
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.instagram.handle}
              </a>
            </li>
            <li>
              TikTok ·{" "}
              <a
                className="underline underline-offset-4"
                href={site.tiktok.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.tiktok.handle}
              </a>
            </li>
            <li>
              Facebook / Messenger ·{" "}
              <a
                className="underline underline-offset-4"
                href={site.facebook.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.facebook.name}
              </a>
            </li>
            <li>Home · {site.location}</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
