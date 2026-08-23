const phrases = [
  "COMMUNITY",
  "LOCAL EVENTS",
  "SMALL BUSINESSES",
  "FAMILY FUN",
  "CSRA",
  "VENDOR MARKET",
] as const;

function Track({ copy }: { copy: number }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={copy > 0}>
      {Array.from({ length: 3 }, (_, set) =>
        phrases.map((phrase) => (
          <span
            key={`${copy}-${set}-${phrase}`}
            className="flex items-center gap-7 pr-7"
          >
            <span className="text-[11px] font-medium tracking-[0.22em] whitespace-nowrap">
              {phrase}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-primary" />
          </span>
        )),
      )}
    </div>
  );
}

export function SiteTicker() {
  return (
    <div className="overflow-hidden border-t border-border/70 bg-muted/55 py-2.5">
      <p className="sr-only">{phrases.join(" · ")}</p>
      <div className="animate-ticker flex w-max">
        <Track copy={0} />
        <Track copy={1} />
      </div>
    </div>
  );
}
