"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { InstagramIcon } from "@/components/landing/instagram-icon";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
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
          <Button
            variant="ghost"
            size="icon"
            nativeButton={false}
            render={
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              />
            }
            className="hidden sm:inline-flex"
          >
            <InstagramIcon className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="hidden h-9 px-3.5 sm:inline-flex"
          >
            Get in touch
          </Button>

          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </DialogTrigger>
            <DialogContent className="max-w-sm" showCloseButton>
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription>Jump to a section of the page.</DialogDescription>
              </DialogHeader>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-sm hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button
                className="h-10 w-full"
                nativeButton={false}
                render={<a href="#contact" />}
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
