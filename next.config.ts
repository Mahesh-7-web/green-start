import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/green-start",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
