import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/bruno-lambreht' : '',
  assetPrefix: isProd ? 'https://bruno-lambreht.github.io/bruno-lambreht/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
