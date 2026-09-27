import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,

  allowedDevOrigins: ["192.168.1.30"],

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;