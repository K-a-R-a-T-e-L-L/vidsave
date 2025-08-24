import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['vidsave.ru'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
