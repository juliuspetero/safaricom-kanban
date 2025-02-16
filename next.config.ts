import type { NextConfig } from "next";
import withPWA from '@ducanh2912/next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  }
};

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// export default nextConfig;
export default withPWA({
  dest: 'public',
  register: true,
  // skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development'
  disable: false
})(nextConfig) ;
