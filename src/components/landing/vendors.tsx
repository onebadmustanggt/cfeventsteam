import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const vendorNotes = [
  {
    title: "We coordinate the table",
    body: "Vendor coordination, promotion, setup, and day-of operations are what we do. You bring the goods; we bring the room and the crowd.",
  },
  {
    title: "What we look for",
    body: "Local businesses that fit the gathering — makers, food, wellness, and community partners. Alignment matters more than a long inventory list.",
  },
  {
    title: "Where we host",
    body: "Canterbury Farms neighborhood events in Grovetown, indoor collectives downtown, food truck nights, poolside pop-ups, and seasonal festivals across the CSRA.",
  },
];

export function Vendors() {
  return (
    <section id="vendors" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            For makers
          </p>
          <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
            Apply for a table.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Indoor collectives have been $25 for a 6 ft table, with a small curated
            lineup. Put the event name in the subject line so it does not get lost.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {vendorNotes.map((note) => (
            <div key={note.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-xl">{note.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {note.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button
            size="lg"
            className="h-11 px-5"
            nativeButton={false}
            render={
              <a href={`mailto:${site.email}?subject=Vendor%20inquiry`} />
            }
          >
            Email {site.email}
          </Button>
        </div>
      </div>
    </section>
  );
}
