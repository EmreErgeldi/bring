/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["market-product-images-cdn.getirapi.com"],
  },
};

module.exports = nextConfig;
