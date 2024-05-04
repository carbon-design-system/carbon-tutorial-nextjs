// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://us-south.ml.cloud.ibm.com/:path*', // Updated destination
      },
    ];
  },
};
