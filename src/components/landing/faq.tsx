import { Minus, Plus } from "lucide-react";

import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          FAQ
        </p>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 border-t">
          {faqs.map((item) => (
            <details
              key={item.q}
              name="faq"
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus className="mt-0.5 size-4 shrink-0 group-open:hidden" />
                <Minus className="mt-0.5 hidden size-4 shrink-0 group-open:block" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
