import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typedRoutes: true,

  poweredByHeader: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },

  typescript: {
    ignoreBuildErrors: false
  },

  logging: {
    fetches: {
      fullUrl: true
    }
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
