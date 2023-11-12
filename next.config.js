/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.dtnews24.com",
      "mblogthumb-phinf.pstatic.net",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
