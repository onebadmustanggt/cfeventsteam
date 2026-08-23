import { InstagramIcon } from "@/components/landing/instagram-icon";

import { Separator } from "@/components/ui/separator";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 font-medium">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[0.65rem] text-primary-foreground">
              CF
            </span>
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Curated vendor markets and community nights in Augusta and the CSRA.
            Home of {site.domain}.
          </p>
        </div>
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
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <InstagramIcon className="size-3.5" />
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>Facebook · The CF Events Team</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mx-auto mt-8 max-w-6xl" />
      <p className="mx-auto mt-6 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Event details are gathered from
        public listings. Instagram and Facebook feeds cannot be imported
        automatically — follow {site.instagram.handle} for photos and last-minute
        updates.
      </p>
    </footer>
  );
}
