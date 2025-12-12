import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/spaeth-construction',
  assetPrefix: '/spaeth-construction',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
