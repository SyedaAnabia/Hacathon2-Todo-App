/** @type {import('next').NextConfig} */
const nextConfig = {};

// Only apply these settings in production for GitHub Pages
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'; // Required for static exports in production
  nextConfig.basePath = '/Hackthon2-phase2'; // GitHub Pages subdirectory path
  nextConfig.assetPrefix = '/Hackthon2-phase2/'; // Prefix for asset paths (note the trailing slash)
  nextConfig.trailingSlash = true; // Important for GitHub Pages
}

nextConfig.env = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || (process.env.NODE_ENV === 'production'
    ? 'https://fakharuddin1.github.io/Hackthon2-phase2/api' // Production API URL
    : 'http://localhost:8000/api'), // Local development API URL
};

nextConfig.images = {
  ...(process.env.NODE_ENV === 'production' && {unoptimized: true}), // Required for GitHub Pages
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
    },
    {
      protocol: 'https',
      hostname: 'your-backend-domain.com',
    },
    {
      protocol: 'https',
      hostname: 'fakharuddin1.github.io',
    }
  ],
};

module.exports = nextConfig;