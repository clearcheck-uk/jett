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
        JETT is a meme coin on Solana. No utility. Just JETT.
      </p>

      {!live && (
        <div className="panel-bevel p-6 sm:p-8 mb-6">
          <p className="hud-label mb-4">SAVE FILE NOT FOUND</p>
          <p className="font-body text-jett-chrome leading-relaxed">
            JETT has not launched yet. There is currently no official
            contract address or trading link. Do not buy or interact with
            any token claiming to be JETT until the official contract
            address is published here.
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
