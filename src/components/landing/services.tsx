import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Services
          </p>
          <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
            From concept through event day.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Volunteer-led planning, vendor coordination, promotion, and on-site
            management for community events across the CSRA.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading mt-3 text-xl leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
