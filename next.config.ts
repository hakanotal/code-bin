import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/code-bin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
