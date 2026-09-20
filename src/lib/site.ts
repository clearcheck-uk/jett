// Central place for facts that change (links, ticker, launch state).
// Nothing here should be treated as live until manually verified and updated.

export const site = {
  name: "JETT",
  tagline: "just jett.",
  url: "https://starrly.uk",
  ticker: "$JETT",
  network: "Solana",

  // TBD until the token actually exists on-chain. Never fill these with a
  // guess — a wrong contract address sent to real users means real stolen funds.
  // Single source of truth: both the homepage and /buy read this value, so
  // there's no risk of the two pages showing different addresses.
  contractAddress: null as string | null,

  // The verified official trading link (DEX/swap page) once JETT is live.
  // Never hardcode this ahead of an actual, confirmed launch destination.
  tradingUrl: null as string | null,

  // Internal note, not shown to visitors — /buy no longer explains launch
  // mechanics to customers, but this stays here for our own reference.
  launchPlatform: "Raydium LaunchLab", // Pump.fun is unavailable in the UK
  launchStatus: "not_launched" as "not_launched" | "live",

  // Placeholders — leave null until the real, owned account exists.
  social: {
    x: "https://x.com/TheJettCoin" as string | null,
    telegram: null as string | null,
    discord: null as string | null,
    tiktok: null as string | null,
  },

  feeModel: "creator_fee" as "creator_fee" | "holder_rewards",
} as const;

export const riskWarningShort =
  "JETT is a speculative, high-risk digital asset. Don't buy unless you're prepared to lose all the money you put in.";
