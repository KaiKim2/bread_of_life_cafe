/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "*.lhr.life",
    "localhost",
    "127.0.0.1",
    "::1",
    "192.168.*.*",
  ],
};

export default nextConfig;
