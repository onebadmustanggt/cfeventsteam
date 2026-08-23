import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Is this a big outdoor vendor market?",
    a: "Usually no. The Collectives at 720 Broad Street are small indoor markets — a handful of tables, curated on purpose. Some Canterbury Farms Vendor Events happen outdoors in the Grovetown area; those are listed separately on Instagram.",
  },
  {
    q: "How do I get a table?",
    a: `Email ${site.email} with the event name in the subject line, what you sell, and a link to your shop or Instagram. Spring Collective has been $25 for one indoor 6 ft table, with only 4–6 vendors selected.`,
  },
  {
    q: "Where do I buy tickets for Secret Garden?",
    a: "Tickets are $10, 40 spots, on Vagaro. The link is on this page under The Secret Garden Gathering. Dress in whimsical garden attire; children over 10 are welcome.",
  },
  {
    q: "Where should I follow for last-minute changes?",
    a: `Instagram ${site.instagram.handle} is the live photo channel. Facebook and Messenger: ${site.facebook.name}. TikTok: ${site.tiktok.handle}. Weather, lineup, and ticket updates go there first.`,
  },
  {
    q: "Are you the Florida or Minnesota Canterbury Farms?",
    a: "No. We are The CF Events Team in the CSRA — Augusta and Grovetown, Georgia. Other farms with similar names are not us.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Questions
          </p>
          <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
            Before you drive downtown.
          </h2>
        </div>
        <Accordion multiple={false} className="border-t">
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
