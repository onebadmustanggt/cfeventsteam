import { Minus, Plus } from "lucide-react";

import { InstagramIcon } from "@/components/landing/social-icons";
import { LookChrome } from "@/components/looks/look-chrome";
import { LookContactForm } from "@/components/looks/look-contact-form";
import { aboutCopy, awards, events, faqs, services, site } from "@/lib/site";

export function EditorialSite() {
  return (
    <LookChrome look="editorial">
      <section className="px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Grovetown · Augusta · the CSRA
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl">
            Fun with a <em className="italic text-primary">purpose</em>.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            {site.bio}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="border border-foreground px-6 py-2.5 text-xs tracking-[0.2em] uppercase"
            >
              See upcoming events
            </a>
            <a href="#contact" className="text-xs tracking-[0.2em] uppercase underline underline-offset-8">
              Become a vendor
            </a>
          </div>
        </div>
        <aside className="mx-auto mt-20 max-w-3xl border-y border-foreground/20 py-10 text-center">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Follow along</p>
          <h2 className="mt-3 text-3xl">Recaps live on Instagram.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            Vendor lists, festival flyers, and day-of photos post first at {site.instagram.handle}.
            Facebook is {site.facebook.name}. TikTok is {site.tiktok.handle}.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-8"
          >
            <InstagramIcon className="size-4" />
            {site.instagram.handle}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            {site.location} · {site.email}
          </p>
        </aside>
      </section>

      <section id="events" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            On the calendar
          </p>
          <h2 className="mt-3 text-center text-4xl">Upcoming Events</h2>
          <div className="mt-14 space-y-16">
            {events.map((event) => (
              <article
                key={event.slug}
                className="grid gap-8 border-t border-foreground/20 pt-10 md:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <div>
                  <p className="text-xs tracking-[0.18em] uppercase">{event.dateLabel}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{event.timeLabel}</p>
                  <p className="mt-6 text-[11px] tracking-[0.16em] text-primary uppercase">
                    {event.status}
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl leading-tight">{event.title}</h3>
                  <p className="mt-1 italic text-muted-foreground">{event.subtitle}</p>
                  <p className="mt-2 text-sm">{event.place}</p>
                  <p className="mt-5 leading-8">{event.blurb}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                    {event.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={event.cta.href} className="mt-6 inline-block text-sm underline underline-offset-8">
                    {event.cta.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Who we are</p>
          <h2 className="mt-3 text-4xl leading-tight">{aboutCopy.heading}</h2>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-8">
            {aboutCopy.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-editorial first-letter:text-6xl first-letter:leading-[0.8]" : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-16 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Awards & nominations
          </p>
          <h3 className="mt-3 text-3xl">Voted in by the CSRA.</h3>
          <p className="mt-4 leading-8">{awards.intro}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 border-t border-foreground/20 pt-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p>
              {awards.communityVotes.source}
              <span className="ml-3 text-sm text-muted-foreground">{awards.communityVotes.year}</span>
            </p>
            <p className="mt-1 text-sm italic">{awards.communityVotes.note}</p>
            <p className="mt-6 text-[11px] tracking-[0.2em] uppercase">Platinum</p>
            <p className="mt-2 leading-7">{awards.communityVotes.platinum.join(" · ")}</p>
            <p className="mt-6 text-[11px] tracking-[0.2em] uppercase">Gold</p>
            <p className="mt-2 leading-7">{awards.communityVotes.gold.join(" · ")}</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {awards.bestOfGeorgia.source}
            </p>
            <p className="mt-2 text-2xl">{awards.bestOfGeorgia.title}</p>
            <p className="mt-3 text-sm leading-7">{awards.bestOfGeorgia.intro}</p>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase">{awards.bestOfGeorgia.howToTitle}</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm leading-7">
              {awards.bestOfGeorgia.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm italic">{awards.bestOfGeorgia.thanks}</p>
            <a
              href={awards.bestOfGeorgia.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm underline underline-offset-8"
            >
              {awards.bestOfGeorgia.cta}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Services</p>
          <h2 className="mt-3 text-4xl">From concept through event day.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
            Planning, vendor coordination, promotion, and on-site management for community events
            across the CSRA.
          </p>
          <dl className="mt-12 divide-y divide-foreground/15 border-y border-foreground/15">
            {services.map((service) => (
              <div key={service.title} className="grid gap-2 py-6 md:grid-cols-[18rem_minmax(0,1fr)]">
                <dt className="text-lg leading-snug">{service.title}</dt>
                <dd className="text-sm leading-7 text-muted-foreground">{service.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="faq" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">FAQ</p>
          <h2 className="mt-3 text-4xl">Frequently asked questions</h2>
          <div className="mt-10">
            {faqs.map((item) => (
              <details key={item.q} name="faq" className="group border-b border-foreground/20">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <Plus className="mt-1 size-4 shrink-0 group-open:hidden" />
                  <Minus className="mt-1 hidden size-4 shrink-0 group-open:block" />
                </summary>
                <p className="pb-5 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="text-4xl">Contact</h2>
          <div className="mt-8">
            <LookContactForm look="editorial" />
          </div>
        </div>
      </section>
    </LookChrome>
  );
}
