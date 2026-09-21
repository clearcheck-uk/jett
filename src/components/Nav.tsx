"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "START" },
  { href: "/buy", label: "BUY" },
  { href: "/about", label: "PLAYER" },
  { href: "/media", label: "MEDIA" },
  { href: "/community", label: "FANS" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 panel-bevel border-x-0 border-t-0 shadow-[0_1px_24px_rgba(55,230,255,0.08)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xs sm:text-sm text-chrome-bright tracking-widest"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-jett-cyan shadow-[0_0_8px_rgba(55,230,255,0.9)]"
            aria-hidden="true"
          />
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-body text-xs tracking-widest text-jett-chrome">
          {links.map((link) => {
            const active = pathname === link.href;
            if (link.href === "/buy") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`scanline-btn panel-glow bg-jett-cyan/10 px-4 py-2 rounded-sm font-display text-[11px] tracking-widest transition-colors ${
                    active ? "text-jett-cyan" : "text-jett-ice"
                  } hover:text-jett-cyan hover:bg-jett-cyan/20`}
                >
                  {site.ticker}
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-jett-cyan ${
                  active
                    ? "text-jett-cyan [text-shadow:0_0_10px_rgba(55,230,255,0.7)]"
                    : ""
                }`}
              >
                {active ? "> " : ""}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-body text-xs tracking-widest text-jett-chrome border border-jett-chrome-dim px-3 py-1.5"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-jett-chrome-dim px-4 py-3 flex flex-col gap-3 font-body text-xs tracking-widest text-jett-chrome">
          {links.map((link) => {
            const active = pathname === link.href;
            if (link.href === "/buy") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`scanline-btn panel-glow bg-jett-cyan/10 px-4 py-2 rounded-sm font-display text-[11px] tracking-widest w-fit ${
                    active ? "text-jett-cyan" : "text-jett-ice"
                  }`}
                >
                  {site.ticker}
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={active ? "text-jett-cyan" : ""}
              >
                {active ? "> " : ""}
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
