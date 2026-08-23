import { Badge } from "@/components/ui/badge";
import { aboutCopy, awards } from "@/lib/site";

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

        <div className="mt-16 max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Awards & nominations
          </p>
          <h3 className="font-heading mt-3 text-2xl tracking-tight sm:text-3xl">
            Voted in by the CSRA.
          </h3>
          <p className="mt-4 leading-relaxed text-foreground/85">{awards.intro}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">{awards.communityVotes.source}</p>
              <Badge variant="secondary">{awards.communityVotes.year}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {awards.communityVotes.note}
            </p>
            <p className="mt-5 text-xs font-medium tracking-[0.16em] text-primary uppercase">
              Platinum
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {awards.communityVotes.platinum.map((category) => (
                <li
                  key={category}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  {category}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Gold
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {awards.communityVotes.gold.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-primary-foreground/70">
              {awards.bestOfGeorgia.source}
            </p>
            <p className="font-heading mt-3 text-2xl leading-tight">
              {awards.bestOfGeorgia.title}
            </p>
            <p className="mt-3 text-sm text-primary-foreground/80">
              {awards.bestOfGeorgia.intro}
            </p>
            <p className="mt-5 text-xs font-medium tracking-[0.16em] uppercase text-primary-foreground/70">
              {awards.bestOfGeorgia.howToTitle}
            </p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm text-primary-foreground/90">
              {awards.bestOfGeorgia.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-primary-foreground/80">
              {awards.bestOfGeorgia.thanks}
            </p>
            <a
              href={awards.bestOfGeorgia.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-6 text-sm font-medium underline underline-offset-4"
            >
              {awards.bestOfGeorgia.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
