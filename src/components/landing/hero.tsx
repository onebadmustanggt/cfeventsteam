import { InstagramIcon } from "@/components/landing/instagram-icon";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 size-[28rem] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.08_85_/_0.45),transparent_68%)]"
      />
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Augusta · Grovetown · the CSRA
          </p>
          <h1 className="font-heading mt-4 max-w-xl text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Markets and nights that feel{" "}
            <em className="italic text-primary">intentional</em>.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are The CF Events Team — also known as the Canterbury Farms Vendor
            Events Team. We host small indoor collectives, ticketed story nights,
            and community gatherings so local makers have a room that treats them
            like more than a booth number.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11 px-5" nativeButton={false} render={<a href="#events" />}>
              See upcoming events
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              nativeButton={false}
              render={<a href="#vendors" />}
            >
              Become a vendor
            </Button>
          </div>
        </div>

        <aside className="rounded-3xl bg-primary px-6 py-8 text-primary-foreground sm:px-8">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground/70">
            Follow along
          </p>
          <h2 className="font-heading mt-3 text-3xl leading-tight">
            The latest lives on Instagram.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
            Vendor spotlights, market recaps, and ticket drops land first at{" "}
            {site.instagram.handle}. Instagram does not let us pull the feed onto
            this site, so the real photos stay there.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-6 h-11 px-5"
            nativeButton={false}
            render={
              <a href={site.instagram.url} target="_blank" rel="noreferrer" />
            }
          >
            <InstagramIcon className="size-4" />
            {site.instagram.handle}
          </Button>
          <p className="mt-4 text-xs text-primary-foreground/65">
            Facebook page: The CF Events Team · Email {site.email}
          </p>
        </aside>
      </div>
    </section>
  );
}
