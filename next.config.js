/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  basePath: "/Kountry-readme",
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
