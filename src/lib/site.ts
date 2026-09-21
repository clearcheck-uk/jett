// Central place for facts that change (links, ticker, launch state).
// Nothing here should be treated as live until manually verified and updated.

export const site = {
  name: "JETT",
  tagline: "just jett.",
  url: "https://starrly.uk",
  ticker: "$JETT",
  network: "Solana",

  // Verified on-chain 2026-09-21: real SPL mint, supply 1,000,000,000,
  // decimals 6, mint authority null (fixed supply), freeze authority null,
  // identity cross-confirmed via Solscan (name JETT, Raydium Launchpad
  // Authority, matching creator wallet, matching initial-buy tx).
  // Single source of truth: both the homepage and /buy read this value, so
  // there's no risk of the two pages showing different addresses.
  contractAddress: "59dGfsQBm7VLyAi4tVCqjgy4KMVR1BUfyuDntotYFray" as string | null,

  // The verified official trading link (DEX/swap page) once JETT is live.
  // Still null deliberately — not yet given a confirmed trading URL, and a
  // guessed Raydium URL pattern is exactly the kind of invented link this
  // field exists to prevent. Set this the moment the real link is confirmed.
  tradingUrl: null as string | null,

  // Internal note, not shown to visitors — /buy no longer explains launch
  // mechanics to customers, but this stays here for our own reference.
  launchPlatform: "Raydium LaunchLab", // Pump.fun is unavailable in the UK
  launchStatus: "live" as "not_launched" | "live",

  // Placeholders — leave null until the real, owned account exists.
  // Telegram/Discord deliberately excluded — not being used for JETT.
  social: {
    x: "https://x.com/TheJettCoin" as string | null,
    tiktok: null as string | null,
  },

  feeModel: "creator_fee" as "creator_fee" | "holder_rewards",
} as const;

export const riskWarningShort =
  "JETT is a speculative, high-risk digital asset. Don't buy unless you're prepared to lose all the money you put in.";
