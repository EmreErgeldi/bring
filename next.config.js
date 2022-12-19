/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["market-product-images-cdn.getirapi.com", "getir.com", "cdn.getir.com"],
  },
};

module.exports = nextConfig;
