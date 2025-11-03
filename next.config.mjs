/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 1200, 1920, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

export default nextConfig;
