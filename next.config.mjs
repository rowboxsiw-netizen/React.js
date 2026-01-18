
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  // Optimization: Pre-bundle heavy dependencies
  optimizePackageImports: ['lucide-react', 'framer-motion'],
  // Experimental: Bundle size reduction
  bundlePagesRouterDependencies: true,
};

export default nextConfig;
