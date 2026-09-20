import Link from "next/link";

// Hotspots are positioned as percentages of the JETT.png title-card image
// (1536x1024 native), matched by eye against the "NEW GAME / LOAD GAME /
// OPTIONS / EXIT" text baked into the artwork. The artwork itself is never
// modified — these are transparent, keyboard-accessible links laid over it.
// If a row drifts out of alignment on a real device, nudge its `top`/`left`
// here; everything is percentage-based so it scales with the image at any
// breakpoint.
const items = [
  {
    label: "NEW GAME",
    href: "/about",
    description: "meet JETT",
    top: 18.5,
    height: 5.3,
  },
  {
    label: "LOAD GAME",
    href: "/buy",
    description: "buy $JETT",
    top: 23.6,
    height: 5.1,
  },
  {
    label: "OPTIONS",
    href: "/community",
    description: "join the fans",
    top: 28.5,
    height: 5.1,
  },
  {
    label: "EXIT",
    href: "/media",
    description: "media",
    top: 33.4,
    height: 4.8,
  },
];

export function TitleMenu() {
  return (
    <div className="absolute inset-0" aria-hidden="false">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-label={`${item.label} — ${item.description}`}
          className="group absolute left-[0.5%] w-[17%] min-h-[32px] flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-jett-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-jett-black"
          style={{ top: `${item.top}%`, height: `${item.height}%` }}
        >
          <span
            className="absolute -left-4 opacity-0 text-jett-cyan text-xs transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 blink-caret"
            aria-hidden="true"
          >
            ▶
          </span>
          <span className="block w-full h-full rounded-sm bg-jett-cyan/0 shadow-[0_0_0_rgba(55,230,255,0)] transition-all duration-150 group-hover:bg-jett-cyan/10 group-hover:shadow-[0_0_18px_rgba(55,230,255,0.45)] group-focus-visible:bg-jett-cyan/15" />
        </Link>
      ))}
    </div>
  );
}
