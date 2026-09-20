"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "START" },
  { href: "/about", label: "JETT" },
  { href: "/media", label: "MEDIA" },
  { href: "/community", label: "FANS" },
  { href: "/buy", label: "BUY" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 panel-bevel border-x-0 border-t-0 shadow-[0_1px_24px_rgba(55,230,255,0.08)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xs sm:text-sm text-chrome tracking-widest"
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
                  className={`scanline-btn panel-bevel px-3 py-1.5 rounded-sm transition-colors ${
                    active ? "text-jett-cyan" : "text-jett-ice"
                  } hover:text-jett-cyan`}
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
