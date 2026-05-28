/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bikesetting',
  assetPrefix: '/bikesetting/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
