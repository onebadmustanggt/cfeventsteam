import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { Events } from "@/components/landing/events";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <Events />
        <About />
        <Services />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
