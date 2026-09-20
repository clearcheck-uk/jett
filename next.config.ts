import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages — every image on this site already has
  // fixed dimensions, so nothing here depends on Next's server-side image
  // optimizer.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
