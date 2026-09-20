"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Single implementation of the token/contract display used on both the
// homepage and /buy, reading directly from src/lib/site.ts so the two
// pages can never show different addresses. Update the address in one
// place (site.contractAddress) and both surfaces update together.
export function TokenPanel({
  variant = "full",
}: {
  variant?: "compact" | "full";
}) {
  const [copied, setCopied] = useState(false);
  const live = site.launchStatus === "live" && Boolean(site.contractAddress);
  const compact = variant === "compact";

  async function handleCopy() {
    if (!site.contractAddress) return;
    try {
      await navigator.clipboard.writeText(site.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable in this context — nothing safe to fall
      // back to, the address is still selectable/readable as text.
    }
  }

  const copyBtn = (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!live}
      className={`shrink-0 font-display text-[9px] tracking-widest px-3 py-2 border transition-colors ${
        live
          ? "text-jett-cyan border-jett-cyan hover:bg-jett-cyan/10"
          : "text-jett-chrome-dim border-jett-chrome-dim opacity-40 cursor-not-allowed"
      }`}
    >
      {copied ? "COPIED" : "COPY"}
    </button>
  );

  const buyBtn =
    live && site.tradingUrl ? (
      <a
        href={site.tradingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="scanline-btn shrink-0 text-center px-5 py-2.5 font-display text-[10px] sm:text-xs text-jett-ice tracking-widest"
      >
        BUY {site.ticker}
      </a>
    ) : (
      <button
        type="button"
        disabled
        className="shrink-0 text-center px-5 py-2.5 font-display text-[10px] sm:text-xs text-jett-chrome-dim tracking-widest border border-jett-chrome-dim cursor-not-allowed whitespace-nowrap"
      >
        BUY {site.ticker} — NOT LIVE YET
      </button>
    );

  const address = (
    <p
      className={`font-body break-all ${
        compact ? "text-xs sm:text-sm" : "text-sm"
      } ${live ? "text-jett-chrome" : "text-jett-chrome-dim italic"}`}
    >
      {site.contractAddress ?? "TBD — NOT LAUNCHED"}
    </p>
  );

  if (compact) {
    return (
      <div className="panel-bevel panel-glow panel-frame p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        <div className="flex items-center gap-6 lg:flex-col lg:items-start lg:gap-1 shrink-0">
          <p className="hud-label">{site.ticker}</p>
          <p className="hud-label">{site.network.toUpperCase()}</p>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-body text-[10px] tracking-widest text-jett-chrome-dim mb-1">
            CONTRACT ADDRESS
          </p>
          {address}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {copyBtn}
          {buyBtn}
        </div>
      </div>
    );
  }

  return (
    <div className="panel-bevel panel-glow panel-frame p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <p className="hud-label">{site.ticker}</p>
        <p className="hud-label">{site.network.toUpperCase()}</p>
      </div>

      <p className="font-body text-[10px] tracking-widest text-jett-chrome-dim mb-2">
        CONTRACT ADDRESS
      </p>
      <div className="flex items-center gap-2 mb-5">
        <div className="flex-1 min-w-0">{address}</div>
        {copyBtn}
      </div>

      <div className="[&>*]:block [&>*]:w-full">{buyBtn}</div>
    </div>
  );
}
