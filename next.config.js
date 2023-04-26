/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true,
    distDir: 'dist',
    images: {
      loader: 'akamai',
      path: '',
    },
    async redirects() {
      return [
        {
          source: '/events/eventimg',
          destination: '/eventimg',
          permanent: true,
        },
        {
          source: '/events/eventTWOimg,
          destination: '/eventTWOimg',
          permanent: true,
        },
        {
          source: '/events/eventTHREEimg/,
          destination: '/eventTHREEimg',
          permanent: true,
        },
        {
          source: '/events/eventFOURimg/,
          destination: '/eventFOURimg',
          permanent: true,
        },
        {
          source: '/events/eventTWOimg,
          destination: '/',
          permanent: true,
        },
      ]
    },
} 
  module.exports = nextConfig