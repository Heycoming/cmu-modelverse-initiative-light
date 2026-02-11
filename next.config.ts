import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cmu-modelverse-initiative-light',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
