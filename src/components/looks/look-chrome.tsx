"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/landing/brand-mark";
import { SocialLinks } from "@/components/landing/social-links";
import type { LookId } from "@/components/looks/look-contact-form";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const looks: Record<
  LookId,
  {
    name: string;
    shell: string;
    bar: string;
    header: string;
    nav: string;
    cta: string;
    menu: string;
    footer: string;
    socialLink: string;
  }
> = {
  hip: {
    name: "Young / hip",
    shell: "look-page look-hip font-sans",
    bar: "bg-primary px-4 py-2 text-[11px] font-extrabold tracking-[0.16em] text-primary-foreground uppercase",
    header: "border-b-2 border-primary bg-background",
    nav: "text-sm font-bold tracking-[0.12em] uppercase text-muted-foreground hover:text-primary",
    cta: "bg-primary px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase",
    menu: "border-t-2 border-primary bg-muted",
    footer: "border-t-2 border-primary bg-background",
    socialLink: "rounded-none text-foreground hover:bg-primary hover:text-primary-foreground",
  },
  editorial: {
    name: "Editorial",
    shell: "look-page look-editorial font-editorial",
    bar: "border-b border-foreground/15 bg-background px-4 py-2 text-[11px] tracking-[0.22em] text-muted-foreground uppercase",
    header: "border-b border-foreground/20 bg-background",
    nav: "text-sm tracking-wide text-muted-foreground hover:text-foreground",
    cta: "border border-foreground px-4 py-1.5 text-xs tracking-[0.18em] uppercase hover:bg-foreground hover:text-background",
    menu: "border-t border-foreground/15 bg-muted",
    footer: "border-t border-foreground/20 bg-background",
    socialLink: "rounded-none text-foreground hover:bg-muted",
  },
  night: {
    name: "Night market",
    shell: "look-page look-night font-sans",
    bar: "bg-primary/15 px-4 py-2 text-[11px] tracking-[0.18em] text-primary uppercase",
    header: "border-b border-border bg-background/90 backdrop-blur-md",
    nav: "text-sm text-muted-foreground hover:text-primary",
    cta: "rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground",
    menu: "border-t border-border bg-muted",
    footer: "border-t border-border bg-muted/40",
    socialLink: "rounded-full text-primary hover:bg-primary/15 hover:text-primary",
  },
};

const lookLinks: { id: LookId; href: string; label: string }[] = [
  { id: "hip", href: "/looks/hip", label: "Hip" },
  { id: "editorial", href: "/looks/editorial", label: "Editorial" },
  { id: "night", href: "/looks/night-market", label: "Night market" },
];

export function LookChrome({
  look,
  children,
}: {
  look: LookId;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const ui = looks[look];

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <div id="top" className={cn("flex min-h-full flex-1 flex-col", ui.shell)}>
      <div className="sticky top-0 z-50">
        <div className={ui.bar}>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
            <p>Design preview · {ui.name} · same information as the live site</p>
            <div className="flex flex-wrap gap-3">
              {lookLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={item.id === look ? "underline underline-offset-4" : "opacity-70 hover:opacity-100"}
                >
                  {item.label}
                </a>
              ))}
              <a href="/" className="opacity-70 hover:opacity-100">
                Live site
              </a>
            </div>
          </div>
        </div>
        <header className={ui.header}>
          <div className="mx-auto flex min-h-24 max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:min-h-28 sm:px-6">
            <a href="#top" className="min-w-0" onClick={closeMenu}>
              <BrandMark className="h-24 w-24 sm:h-28 sm:w-28" />
            </a>
            <nav className="hidden items-center gap-7 md:flex">
              {navLinks
                .filter((link) => link.href !== "#contact")
                .map((link) => (
                  <a key={link.href} href={link.href} className={ui.nav}>
                    {link.label}
                  </a>
                ))}
            </nav>
            <div className="flex items-center gap-2">
              <SocialLinks className="hidden sm:flex" linkClassName={ui.socialLink} />
              <a href="#contact" className={cn("hidden sm:inline-flex", ui.cta)}>
                Get in touch
              </a>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center md:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
          {mobileOpen ? (
            <div className={cn("px-4 py-4 md:hidden", ui.menu)}>
              <nav className="flex flex-col gap-1">
                {navLinks
                  .filter((link) => link.href !== "#contact")
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="px-2 py-2.5 text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
              </nav>
              <SocialLinks className="mt-3" linkClassName={ui.socialLink} />
              <a href="#contact" onClick={closeMenu} className={cn("mt-3 inline-flex", ui.cta)}>
                Get in touch
              </a>
            </div>
          ) : null}
        </header>
      </div>

      <main className="flex-1">{children}</main>

      <footer className={ui.footer}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <BrandMark className="h-32 w-32 sm:h-36 sm:w-36" />
          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-medium">On this page</p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium">Connect</p>
              <SocialLinks className="mt-3 -ml-1.5" linkClassName={ui.socialLink} />
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-muted-foreground hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {site.name}. {site.established}.
        </p>
      </footer>
    </div>
  );
}
