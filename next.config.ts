import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['vidsave.ru'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  swcMinify: true,
};

export default nextConfig;
