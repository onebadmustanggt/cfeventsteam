import { Minus, Plus } from "lucide-react";

import { InstagramIcon } from "@/components/landing/social-icons";
import { LookChrome } from "@/components/looks/look-chrome";
import { LookContactForm } from "@/components/looks/look-contact-form";
import { aboutCopy, awards, events, faqs, services, site } from "@/lib/site";

export function HipSite() {
  return (
    <LookChrome look="hip">
      <section className="overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="inline-block -rotate-2 bg-primary px-3 py-1 text-xs font-extrabold tracking-[0.18em] text-primary-foreground uppercase">
            Grovetown · Augusta · the CSRA
          </p>
          <h1 className="font-hip mt-6 max-w-4xl text-5xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-7xl lg:text-8xl">
            Fun with a{" "}
            <span className="text-primary">purpose</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.bio}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#events"
              className="inline-flex h-12 items-center justify-center bg-primary px-6 text-sm font-extrabold tracking-[0.16em] text-primary-foreground uppercase"
            >
              See upcoming events
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center border-2 border-foreground px-6 text-sm font-extrabold tracking-[0.16em] uppercase"
            >
              Become a vendor
            </a>
          </div>
        </div>
        <aside className="mx-auto mt-16 max-w-6xl border-2 border-primary bg-primary px-6 py-8 text-primary-foreground sm:px-8">
          <p className="text-xs font-extrabold tracking-[0.18em] uppercase">Follow along</p>
          <h2 className="font-hip mt-3 text-4xl font-extrabold uppercase leading-none">
            Recaps live on Instagram.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/85">
            Vendor lists, festival flyers, and day-of photos post first at {site.instagram.handle}.
            Facebook is {site.facebook.name}. TikTok is {site.tiktok.handle}.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-12 items-center gap-2 bg-background px-5 text-sm font-extrabold tracking-[0.16em] text-foreground uppercase"
          >
            <InstagramIcon className="size-4" />
            {site.instagram.handle}
          </a>
          <p className="mt-4 text-xs text-primary-foreground/70">
            {site.location} · {site.email}
          </p>
        </aside>
      </section>

      <section id="events" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-primary uppercase">
            On the calendar
          </p>
          <h2 className="font-hip mt-3 text-4xl font-extrabold tracking-tight uppercase sm:text-6xl">
            Upcoming Events
          </h2>
          <div className="mt-10 space-y-6">
            {events.map((event) => (
              <article
                key={event.slug}
                className="border-2 border-foreground p-6 sm:grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-10 sm:p-8"
              >
                <div>
                  <p className="inline-block bg-accent px-2 py-1 text-[11px] font-extrabold tracking-[0.14em] text-accent-foreground uppercase">
                    {event.status}
                  </p>
                  <h3 className="font-hip mt-4 text-3xl font-extrabold uppercase leading-none">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm">{event.subtitle}</p>
                  <p className="mt-4 text-sm font-bold">
                    {event.dateLabel}
                    <span className="block font-normal text-muted-foreground">{event.timeLabel}</span>
                    <span className="block font-normal text-muted-foreground">{event.place}</span>
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-muted-foreground">{event.blurb}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {event.details.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">/</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={event.cta.href}
                    className="mt-6 inline-flex h-11 items-center bg-primary px-5 text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase"
                  >
                    {event.cta.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-primary-foreground/70">
            Who we are
          </p>
          <h2 className="font-hip mt-3 max-w-4xl text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            {aboutCopy.heading}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-primary-foreground/90">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-16 text-xs font-extrabold tracking-[0.2em] uppercase text-primary-foreground/70">
            Awards & nominations
          </p>
          <h3 className="font-hip mt-3 text-3xl font-extrabold uppercase">Voted in by the CSRA.</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-primary-foreground/90">{awards.intro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="border-2 border-primary-foreground/30 p-6 lg:col-span-2">
              <p className="font-bold">
                {awards.communityVotes.source} · {awards.communityVotes.year}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/75">{awards.communityVotes.note}</p>
              <p className="mt-5 text-xs font-extrabold tracking-[0.16em] uppercase">Platinum</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {awards.communityVotes.platinum.map((category) => (
                  <li key={category} className="bg-background px-3 py-1 text-sm text-foreground">
                    {category}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-extrabold tracking-[0.16em] uppercase">Gold</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {awards.communityVotes.gold.map((category) => (
                  <li key={category} className="border border-primary-foreground/40 px-3 py-1 text-sm">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col border-2 border-primary-foreground/30 bg-background p-6 text-foreground">
              <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-muted-foreground">
                {awards.bestOfGeorgia.source}
              </p>
              <p className="font-hip mt-3 text-2xl font-extrabold uppercase leading-none">
                {awards.bestOfGeorgia.title}
              </p>
              <p className="mt-3 text-sm">{awards.bestOfGeorgia.intro}</p>
              <p className="mt-5 text-xs font-extrabold tracking-[0.16em] uppercase">
                {awards.bestOfGeorgia.howToTitle}
              </p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm">
                {awards.bestOfGeorgia.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm">{awards.bestOfGeorgia.thanks}</p>
              <a
                href={awards.bestOfGeorgia.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 text-sm font-extrabold uppercase underline underline-offset-4"
              >
                {awards.bestOfGeorgia.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-primary uppercase">Services</p>
          <h2 className="font-hip mt-3 text-4xl font-extrabold uppercase sm:text-5xl">
            From concept through event day.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Planning, vendor coordination, promotion, and on-site management for community
            events across the CSRA.
          </p>
          <ol className="mt-12 divide-y-2 divide-foreground border-y-2 border-foreground">
            {services.map((service, index) => (
              <li key={service.title} className="grid gap-3 py-5 sm:grid-cols-[4rem_minmax(0,1fr)]">
                <span className="font-hip text-2xl font-extrabold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold uppercase tracking-wide">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-primary uppercase">FAQ</p>
          <h2 className="font-hip mt-3 text-4xl font-extrabold uppercase sm:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            {faqs.map((item) => (
              <details key={item.q} name="faq" className="group border-b-2 border-foreground">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left font-bold uppercase [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <Plus className="mt-0.5 size-4 shrink-0 group-open:hidden" />
                  <Minus className="mt-0.5 hidden size-4 shrink-0 group-open:block" />
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-hip text-4xl font-extrabold uppercase sm:text-5xl">Contact</h2>
          <div className="mt-4 max-w-xl border-2 border-foreground p-5 sm:p-8">
            <LookContactForm look="hip" />
          </div>
        </div>
      </section>
    </LookChrome>
  );
}
