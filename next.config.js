/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'a0.muscache.com', 'upload.wikimedia.org'],
  },
  env: {
    api_key: process.env.API_KEY,
  },
};

module.exports = nextConfig;
