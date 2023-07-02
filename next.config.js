/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placedog.net', 'source.unsplash.com',  'image.assets.pressassociation.io', 'content.assets.pressassociation.io', 'localhost:3000', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
