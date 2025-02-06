import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.prod.website-files.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
