import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 shrink-0 flex-col items-center justify-center rounded-full border border-primary/50 text-[0.55rem] font-medium tracking-wide text-primary">
        CF
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        {!compact ? (
          <span className="text-[0.65rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            The
          </span>
        ) : null}
        <span className="font-script text-[1.35rem] leading-none text-primary">
          CF Events Team
        </span>
        <span className="mt-1 text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
          {site.established}
        </span>
      </span>
    </span>
  );
}
