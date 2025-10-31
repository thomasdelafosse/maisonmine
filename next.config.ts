import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WebGL renderers like @react-three/fiber can lose context in React Strict Mode due to double-mounts in dev
  // Disable Strict Mode to prevent Canvas mount/unmount cycles that cause context loss
  reactStrictMode: false,
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.prod.website-files.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
