import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.prod.website-files.com"],
  },
};

export default nextConfig;
