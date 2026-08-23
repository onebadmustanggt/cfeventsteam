"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/landing/brand-mark";
import { SiteTicker } from "@/components/landing/site-ticker";
import { SocialLinks } from "@/components/landing/social-links";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-28 max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:min-h-32 sm:px-6">
        <a href="#top" className="min-w-0" onClick={closeMenu}>
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navLinks
            .filter((link) => link.label !== "Contact")
            .map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <SocialLinks className="hidden sm:flex" />
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden h-9 px-3.5 sm:inline-flex",
            )}
          >
            Get in touch
          </a>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-muted px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navLinks
              .filter((link) => link.label !== "Contact")
              .map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2.5 text-sm hover:bg-background"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialLinks className="mt-3" />
          <a
            href="#contact"
            onClick={closeMenu}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-3 inline-flex h-10 w-full",
            )}
          >
            Get in touch
          </a>
        </div>
      ) : null}
      <SiteTicker />
    </header>
  );
}
