import { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

const withPWA = withPWAInit({
    dest: "public",
    disable: false
});

export default withPWA({
  ...nextConfig
});

