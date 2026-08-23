"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { InstagramIcon } from "@/components/landing/instagram-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={closeMenu}>
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[0.65rem] font-medium tracking-wide text-primary-foreground">
            CF
          </span>
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden sm:inline-flex",
            )}
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden h-9 px-3.5 sm:inline-flex",
            )}
          >
            Get in touch
          </a>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2.5 text-sm hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={closeMenu}
            className={cn(buttonVariants({ variant: "default" }), "mt-3 h-10 w-full")}
          >
            Get in touch
          </a>
        </div>
      ) : null}
    </header>
  );
}
