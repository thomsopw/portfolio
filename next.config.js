/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '9o1m1qwswpzfcjmm.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

