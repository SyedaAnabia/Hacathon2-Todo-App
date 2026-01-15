/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static exports
  basePath: '/2-try', // GitHub Pages subdirectory path
  trailingSlash: true, // Optional: adds trailing slashes to URLs
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  },
  images: {
    unoptimized: true, // Required for GitHub Pages
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'your-backend-domain.com',
      },
    ],
  },
};

module.exports = nextConfig;