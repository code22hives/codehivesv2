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
} 
  module.exports = nextConfig