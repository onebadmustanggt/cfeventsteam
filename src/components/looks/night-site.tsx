import { Minus, Plus } from "lucide-react";

import { InstagramIcon } from "@/components/landing/social-icons";
import { LookChrome } from "@/components/looks/look-chrome";
import { LookContactForm } from "@/components/looks/look-contact-form";
import { aboutCopy, awards, events, faqs, services, site } from "@/lib/site";

export function NightSite() {
  return (
    <LookChrome look="night">
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(228,195,122,0.28),transparent_68%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 bottom-0 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(90,70,180,0.45),transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Grovetown · Augusta · the CSRA
            </p>
            <h1 className="font-night mt-5 max-w-xl text-5xl leading-[1.05] font-bold sm:text-6xl">
              Fun with a <span className="text-primary">purpose</span>.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.bio}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#events"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                See upcoming events
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary/50 px-6 text-sm text-primary"
              >
                Become a vendor
              </a>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-primary/25 bg-card/80 p-7 shadow-[0_0_80px_rgba(228,195,122,0.08)] sm:p-9">
            <p className="text-xs tracking-[0.2em] text-primary uppercase">Follow along</p>
            <h2 className="font-night mt-3 text-3xl font-bold">Recaps live on Instagram.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Vendor lists, festival flyers, and day-of photos post first at {site.instagram.handle}.
              Facebook is {site.facebook.name}. TikTok is {site.tiktok.handle}.
            </p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              <InstagramIcon className="size-4" />
              {site.instagram.handle}
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              {site.location} · {site.email}
            </p>
          </aside>
        </div>
      </section>

      <section id="events" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">On the calendar</p>
          <h2 className="font-night mt-3 text-4xl font-bold sm:text-5xl">Upcoming Events</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.slug}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <p className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                  {event.status}
                </p>
                <h3 className="font-night mt-4 text-2xl font-bold leading-snug">{event.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{event.subtitle}</p>
                <p className="mt-4 text-sm">
                  {event.dateLabel}
                  <span className="block text-muted-foreground">{event.timeLabel}</span>
                  <span className="block text-muted-foreground">{event.place}</span>
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{event.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {event.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={event.cta.href}
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  {event.cta.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">Who we are</p>
          <h2 className="font-night mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            {aboutCopy.heading}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-16 text-xs tracking-[0.22em] text-primary uppercase">
            Awards & nominations
          </p>
          <h3 className="font-night mt-3 text-3xl font-bold">Voted in by the CSRA.</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{awards.intro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-border bg-card p-6 lg:col-span-2">
              <p className="font-medium">
                {awards.communityVotes.source}
                <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">
                  {awards.communityVotes.year}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{awards.communityVotes.note}</p>
              <p className="mt-5 text-xs tracking-[0.16em] text-primary uppercase">Platinum</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {awards.communityVotes.platinum.map((category) => (
                  <li key={category} className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">
                    {category}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs tracking-[0.16em] uppercase text-muted-foreground">Gold</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {awards.communityVotes.gold.map((category) => (
                  <li key={category} className="rounded-full border border-border px-3 py-1 text-sm">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-[1.5rem] bg-primary p-6 text-primary-foreground">
              <p className="text-xs tracking-[0.16em] uppercase text-primary-foreground/70">
                {awards.bestOfGeorgia.source}
              </p>
              <p className="font-night mt-3 text-2xl font-bold leading-tight">
                {awards.bestOfGeorgia.title}
              </p>
              <p className="mt-3 text-sm text-primary-foreground/80">{awards.bestOfGeorgia.intro}</p>
              <p className="mt-5 text-xs tracking-[0.16em] uppercase text-primary-foreground/70">
                {awards.bestOfGeorgia.howToTitle}
              </p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm">
                {awards.bestOfGeorgia.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-primary-foreground/80">{awards.bestOfGeorgia.thanks}</p>
              <a
                href={awards.bestOfGeorgia.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 text-sm font-semibold underline underline-offset-4"
              >
                {awards.bestOfGeorgia.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">Services</p>
          <h2 className="font-night mt-3 text-4xl font-bold sm:text-5xl">
            From concept through event day.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Planning, vendor coordination, promotion, and on-site management for community events
            across the CSRA.
          </p>
          <ul className="mt-12 columns-1 gap-4 sm:columns-2">
            {services.map((service) => (
              <li
                key={service.title}
                className="mb-4 break-inside-avoid rounded-[1.35rem] border border-border bg-card p-5"
              >
                <h3 className="font-night text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">FAQ</p>
          <h2 className="font-night mt-3 text-4xl font-bold">Frequently asked questions</h2>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-card">
            {faqs.map((item) => (
              <details key={item.q} name="faq" className="group border-b border-border last:border-b-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <Plus className="mt-0.5 size-4 shrink-0 group-open:hidden" />
                  <Minus className="mt-0.5 hidden size-4 shrink-0 group-open:block" />
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-xl">
          <h2 className="font-night text-4xl font-bold">Contact</h2>
          <div className="mt-5 rounded-[1.75rem] border border-border bg-card p-5 sm:p-8">
            <LookContactForm look="night" />
          </div>
        </div>
      </section>
    </LookChrome>
  );
}
