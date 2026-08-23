import { BrandMark } from "@/components/landing/brand-mark";
import { SocialLinks } from "@/components/landing/social-links";
import { Separator } from "@/components/ui/separator";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BrandMark className="h-36 w-36 sm:h-40 sm:w-40" />
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
            <SocialLinks className="mt-3 -ml-1.5" />
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-muted-foreground hover:text-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <Separator className="mx-auto mt-8 max-w-6xl" />
      <p className="mx-auto mt-6 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. {site.established}.
      </p>
    </footer>
  );
}
