import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages for this repo is served from https://<org>.github.io/JCIE_Website/
  basePath: '/JCIE_Website',
  // Ensure exported HTML references JS/CSS under /JCIE_Website/_next instead of /_next
  assetPrefix: '/JCIE_Website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
