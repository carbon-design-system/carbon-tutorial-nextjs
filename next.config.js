/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/carbon-tutorial-nextjs' : '',
  assetPrefix: isProd ? '/carbon-tutorial-nextjs/' : '',
  // Add other necessary configurations here
};

module.exports = nextConfig;
