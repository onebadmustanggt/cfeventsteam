import { ContactForm } from "@/components/landing/contact-form";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              Contact
            </a>
          </h2>
          <div className="mt-4 rounded-3xl border border-border bg-card p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
