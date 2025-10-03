import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brbr.tn",
      },
    ],
  },
};

export default nextConfig;
