import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['*'],
    unoptimized: false,
  },
};

export default nextConfig;
