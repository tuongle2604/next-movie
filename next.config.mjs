/** @type {import('next').NextConfig} */

import { regions } from "./src/lib/regions.ts";

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const localePattern = regions
  .map((o) => `${escapeRegex(o.code)}(?:/|$)`)
  .join("|");

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
  async rewrites() {
    return [
      // rewrite no locale default to en
      {
        source: `/:path((?!${localePattern}).*)`,
        destination: "/en/:path",
      },
    ];
  },
  async redirects() {
    return [
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
