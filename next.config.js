/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placedog.net', 'unsplash.com', 'localhost:3000', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
