/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  basePath: "/kountry-readme",//Home or root (/)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
