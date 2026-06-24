/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not use `output: 'export'` while using `app/api/**/route` — static export
  // has no server runtime, so /api/* returns 404 on Netlify and elsewhere.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
