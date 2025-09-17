import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vidsave.ru',
        port: ''
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
