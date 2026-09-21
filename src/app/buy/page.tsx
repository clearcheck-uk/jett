import type { Metadata } from "next";
import { site, riskWarningShort } from "@/lib/site";
import { TokenPanel } from "@/components/TokenPanel";

export const metadata: Metadata = {
  title: "buy",
  description: "JETT is a meme coin on Solana. No utility. Just JETT.",
  alternates: { canonical: "/buy" },
};

export default function BuyPage() {
  const live = site.launchStatus === "live" && Boolean(site.contractAddress);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="font-display text-chrome text-2xl sm:text-4xl mb-4">
        $JETT
      </h1>
      <p className="font-body text-jett-chrome mb-10">
        A meme coin on Solana. Just JETT.
      </p>

      <div className="panel-bevel panel-frame p-6 sm:p-8 mb-6">
        <p className="hud-label mb-4">WHAT IS JETT?</p>
        <p className="font-body text-jett-chrome leading-relaxed mb-3">
          JETT is a simple meme coin on Solana, built around one character,
          one identity, and a community.
        </p>
        <p className="font-body text-jett-chrome leading-relaxed">
          There&apos;s no complicated utility or big product behind it. JETT
          is a character-first internet meme — made to be shared, collected,
          memed, and taken wherever the community takes it. That&apos;s it.
          Just JETT.
        </p>
      </div>

      {live ? (
        <div className="panel-bevel panel-glow p-6 sm:p-8 mb-6">
          <p className="hud-label mb-3">$JETT IS LIVE</p>
          <p className="font-body text-jett-chrome leading-relaxed">
            JETT is live on Solana. Verify the contract address below before
            buying.
          </p>
        </div>
      ) : (
        <div className="panel-bevel p-6 sm:p-8 mb-6">
          <p className="hud-label mb-4">JETT IS LOADING</p>
          <p className="font-body text-jett-chrome leading-relaxed mb-3">
            $JETT is a community-first meme coin on Solana.
          </p>
          <p className="font-body text-jett-chrome leading-relaxed mb-3">
            The official token address will appear here when JETT goes
            live.
          </p>
          <p className="font-body text-jett-chrome leading-relaxed">
            Do not buy or interact with unofficial JETT tokens before the
            official address is published.
          </p>
        </div>
      )}

      <TokenPanel variant="full" />

      <div className="panel-bevel p-6 sm:p-8 mt-6">
        <p className="hud-label mb-4">ALWAYS VERIFY</p>
        <p className="font-body text-jett-chrome leading-relaxed">
          Always verify the contract address from this official website
          before buying. Never trust an address sent through a DM, a
          comment, a random website, or an unofficial account — the address
          shown above is the one to check against.
        </p>
      </div>

      <p className="mt-6 font-body text-xs text-jett-chrome-dim leading-relaxed">
        {riskWarningShort} JETT has no guaranteed value or returns.
      </p>
    </div>
  );
}
