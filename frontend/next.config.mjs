/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not use `output: 'export'` while using `app/api/**/route` — static export
  // has no server runtime, so /api/* returns 404 on Netlify and elsewhere.
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/compact-wheel-loader",
        destination: "/inventory/compact-wheel-loader/",
        permanent: true,
      },
      {
        source: "/images/521G.png",
        destination: "/images/521g-snow.jpg",
        permanent: true,
      },
      {
        source: "/images/case521G.png",
        destination: "/images/case521g.jpg",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
