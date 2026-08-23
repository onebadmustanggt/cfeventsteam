import { HeroPhotos } from "@/components/landing/hero-photos";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 size-[28rem] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.1_70_/_0.4),transparent_68%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-primary">
            Grovetown · Augusta · The CSRA
          </p>
          <h1 className="font-heading mt-4 max-w-xl text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Fun with a{" "}
            <em className="italic text-primary">purpose</em>.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.bio}
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
              render={<a href="#contact" />}
            >
              Become a vendor
            </Button>
          </div>
        </div>

        <HeroPhotos />
      </div>
    </section>
  );
}
