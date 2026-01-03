/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  images: {
    deviceSizes: [640, 1200, 1920, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/genre/:slug",
        destination: "/genre/:slug/1",
        permanent: true,
      },
      {
        source: "/popular",
        destination: "/popular/1",
        permanent: true,
      },
      {
        source: "/top-rated",
        destination: "/top-rated/1",
        permanent: true,
      },
      {
        source: "/upcoming",
        destination: "/upcoming/1",
        permanent: true,
      },
      // Wildcard path matching
    ];
  },
};

export default nextConfig;
