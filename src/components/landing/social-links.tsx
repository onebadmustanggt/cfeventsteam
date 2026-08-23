import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/landing/social-icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const socials = [
  { name: "Facebook", href: site.facebook.url, Icon: FacebookIcon },
  { name: "Instagram", href: site.instagram.url, Icon: InstagramIcon },
  { name: "TikTok", href: site.tiktok.url, Icon: TikTokIcon },
] as const;

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Icon className={cn("size-5", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
