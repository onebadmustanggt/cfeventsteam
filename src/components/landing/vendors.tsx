import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const vendorNotes = [
  {
    title: "Small on purpose",
    body: "Spring Collective takes 4 to 6 vendors so the shopping stays personal. Summer Collective stays intimate too — not a giant outdoor lot.",
  },
  {
    title: "What we look for",
    body: "Wellness, coaching, skincare, nutrition, self-care, jewelry, handmade goods, and treats. Alignment matters more than a long inventory list.",
  },
  {
    title: "What you get",
    body: "Indoor setup, one 6 ft table, a downtown Broad Street room, and a guest list that came for you — not for a free inflatable.",
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
            Vendor fees for the indoor collectives have been $25. Selection is
            curated. Email with the event name in the subject line so it does not
            get lost.
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
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-11 px-5"
            nativeButton={false}
            render={
              <a
                href={`mailto:${site.email}?subject=Vendor%20inquiry`}
              />
            }
          >
            Email {site.email}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-5"
            nativeButton={false}
            render={
              <a
                href={`mailto:${site.vendorEmail}?subject=Vendor%20inquiry`}
              />
            }
          >
            Vendor desk · {site.vendorEmail}
          </Button>
        </div>
      </div>
    </section>
  );
}
