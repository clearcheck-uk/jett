import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "the fans",
  description: "Official JETT community links.",
  alternates: { canonical: "/community" },
};

const channels = [
  { key: "x", label: "X / TWITTER" },
  { key: "telegram", label: "TELEGRAM" },
  { key: "discord", label: "DISCORD" },
  { key: "tiktok", label: "TIKTOK" },
] as const;

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="hud-label mb-4">PLAYER LOBBY</p>
      <h1 className="font-display text-chrome text-2xl sm:text-4xl mb-4">
        the fans
      </h1>
      <p className="font-body text-jett-chrome mb-12 max-w-xl leading-relaxed">
        Fans, meme makers, artists, Y2K enthusiasts, whoever&apos;s curious.
        No official links exist yet — this section fills in as real accounts
        go live.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {channels.map((c) => {
          const href = site.social[c.key];
          return (
            <div key={c.key} className="panel-bevel panel-frame p-5">
              <p className="hud-label mb-2">{c.label}</p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-jett-chrome hover:text-jett-cyan transition-colors"
                >
                  {href}
                </a>
              ) : (
                <p className="font-body text-sm text-jett-chrome-dim">
                  TBD
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="panel-bevel p-6 mt-8 border-l-4 border-l-jett-purple">
        <p className="font-body text-sm text-jett-chrome leading-relaxed">
          Only links published on this page are official. Any account
          claiming to represent JETT elsewhere should be treated as
          unverified until it&apos;s listed here.
        </p>
      </div>
    </div>
  );
}
