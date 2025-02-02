/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/sanity/:path*',
        destination: 'https://qi23uqs6.api.sanity.io/:path*',
      },
    ];
  },
}

module.exports = nextConfig