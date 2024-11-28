import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/code-bin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
