/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not use `output: 'export'` while using `app/api/**/route` — static export
  // has no server runtime, so /api/* returns 404 on Netlify and elsewhere.
  trailingSlash: true,
};

export default nextConfig;
