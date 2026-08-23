import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      overflow="visible"
      role="img"
      aria-label={site.name}
      className={cn("h-28 w-28 shrink-0 text-foreground sm:h-32 sm:w-32", className)}
    >
      <title>{site.name}</title>
      <path
        d="M115.63 11.37 A90 90 0 0 1 189.12 112.53"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M84.37 188.63 A90 90 0 0 1 10.88 87.47"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <text
        x="100"
        y="74"
        fill="currentColor"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 36,
        }}
      >
        The
      </text>
      <text
        x="100"
        y="104"
        fill="currentColor"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
          fontSize: 27,
          fontWeight: 700,
          letterSpacing: "0.06em",
        }}
      >
        CF EVENTS
      </text>
      <text
        x="100"
        y="126"
        fill="currentColor"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
          fontSize: 12,
          fontWeight: 400,
          letterSpacing: "0.62em",
        }}
      >
        TEAM
      </text>
      <text
        x="100"
        y="160"
        fill="currentColor"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
          fontSize: 8,
          fontWeight: 500,
          letterSpacing: "0.32em",
        }}
      >
        {site.established}
      </text>
    </svg>
  );
}
