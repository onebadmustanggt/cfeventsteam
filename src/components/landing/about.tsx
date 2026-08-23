import { offerings, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-y border-border/80 bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground/70">
          Who we are
        </p>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          A CSRA events team that would rather host twelve people well than two hundred in a parking lot.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          Downtown we partner with {site.venue.name} at {site.venue.street}.
          Outdoor and neighborhood markets also go out under Canterbury Farms
          Vendor Events. Same team, same standard: curated tables, local makers,
          and a room people want to linger in.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {offerings.map((item, index) => (
            <div key={item.title}>
              <p className="font-mono text-xs tracking-widest text-primary-foreground/55">
                0{index + 1}
              </p>
              <h3 className="font-heading mt-3 text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
