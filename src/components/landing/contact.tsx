import { ContactForm } from "@/components/landing/contact-form";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Contact
        </p>
        <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
          Write us before the room fills up.
        </h2>
        <div className="mt-8 max-w-xl rounded-3xl border border-border bg-card p-5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
