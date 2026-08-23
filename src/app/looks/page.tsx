export const metadata = {
  title: "Look previews — The CF Events Team",
};

const looks = [
  {
    href: "/looks/hip",
    kicker: "Young / hip",
    title: "Zine energy",
    note: "Black, lime, hard edges, oversized type. Built to feel like a flyer you would actually keep.",
  },
  {
    href: "/looks/editorial",
    kicker: "Editorial",
    title: "Sunday magazine",
    note: "Warm paper, serif type, and a newspaper calendar. Quiet, grown, and easy to read.",
  },
  {
    href: "/looks/night-market",
    kicker: "Night market",
    title: "After dark on the lawn",
    note: "Indigo, gold glow, and soft pills. Same markets, dressed for evening.",
  },
];

export default function LooksIndexPage() {
  return (
    <div className="look-page flex min-h-full flex-1 flex-col bg-[#111] text-[#f4f1ea]">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c8ff3d]">Design previews</p>
        <h1 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Three other ways the same site could look.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#cfc8b8]">
          The live homepage is unchanged. These pages keep every word, event, award, service,
          FAQ, and contact field you already approved — only the clothes are different.
        </p>
        <a href="/" className="mt-5 text-sm text-[#c8ff3d] underline underline-offset-4">
          Back to the live site
        </a>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {looks.map((look) => (
            <li key={look.href}>
              <a
                href={look.href}
                className="flex h-full flex-col border border-[#2c2c24] p-5 transition-colors hover:border-[#c8ff3d]"
              >
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#c8ff3d]">{look.kicker}</p>
                <h2 className="mt-3 text-2xl leading-snug">{look.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#cfc8b8]">{look.note}</p>
                <span className="mt-auto pt-6 text-sm underline underline-offset-4">Open this look</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
