"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "What types of events does CF Events Team host?",
    a: "We create and manage community-focused events throughout the CSRA, including seasonal markets, vendor events, and other special events designed to bring local businesses and the community together.",
  },
  {
    q: "How can I become a vendor at one of your events?",
    a: "Vendor applications are available directly through our website. Visit the event you are interested in, review the vendor information, and complete the online application to be considered.",
  },
  {
    q: "Are your markets indoors or outdoors?",
    a: "It depends on the event. Some of our markets are completely indoors, while others offer a combination of indoor and outdoor shopping. Each event page will provide specific details about the location and setup.",
  },
  {
    q: "Do your events have food and entertainment?",
    a: "Many of our events feature food vendors, live music, and other entertainment in addition to shopping. Check the individual event page to see what is planned for that event.",
  },
  {
    q: "How do I know if there is an admission fee?",
    a: "The CF Events Team never charges an admission fee for the events we host. However, some events we participate in with community partners may have their own admission or ticket requirements. Any applicable fees will be clearly listed on the event page so you know what to expect before you arrive.",
  },
  {
    q: "Can my business sponsor one of your events?",
    a: "Absolutely! We offer sponsorship opportunities that give local businesses a chance to connect with our attendees and increase their visibility in the community. Contact us to learn more about available sponsorship options.",
  },
  {
    q: "Where can I find upcoming event dates and locations?",
    a: "Our upcoming events are listed right here on our website with dates, locations, times, and event details. You can also follow CF Events Team on social media for the most current announcements and updates.",
  },
  {
    q: "Who should I contact if I have a question about an event?",
    a: "Use the contact form on our website and let us know which event you are asking about. Our team will get back to you as soon as possible.",
  },
  {
    q: "Do you collaborate with other businesses or organizations?",
    a: "Yes! We love working with local businesses, organizations, community groups, and other event professionals. If you have an idea for a collaboration, partnership, or special event, reach out through our contact page and tell us what you have in mind.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          FAQ
        </p>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 border-t">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left text-base font-medium"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <Minus className="mt-0.5 size-4 shrink-0" />
                  ) : (
                    <Plus className="mt-0.5 size-4 shrink-0" />
                  )}
                </button>
                {isOpen ? (
                  <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
