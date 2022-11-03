/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.publicdomainpictures.net",
        pathname: "/pictures/**",
      },
      {
        protocol: "https",
        hostname: "www.publicdomainpictures.net",
        pathname: "/pictures/**",
      },
    ],
  },
};

module.exports = nextConfig;
