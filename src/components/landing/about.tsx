import { aboutCopy, heartValues, offerings } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-y border-border/80 bg-muted/40 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Who we are
        </p>
        <h2 className="font-heading mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {aboutCopy.heading}
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85">
          {aboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="font-heading mt-8 max-w-3xl text-2xl italic text-primary">
          {aboutCopy.closing}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {heartValues.map((value) => (
            <li
              key={value}
              className="rounded-full border border-primary/20 bg-card px-3 py-1.5 text-sm text-primary"
            >
              {value}
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {offerings.map((item, index) => (
            <div key={item.title}>
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="font-heading mt-3 text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
