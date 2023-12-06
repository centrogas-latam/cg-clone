/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eihymsfhikncmipfrakl.supabase.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
