import type { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rpmequipmentleasing.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/how-it-works/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contractor-program/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/equipment/skid-steer/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/equipment/compact-wheel-loader/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/rent-skid-steer-kansas-city/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/rent-wheel-loader-kansas-city/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/spring-equipment-rental/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/summer-equipment-rental/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/fall-equipment-rental/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/off-season-equipment-rental-kansas-city/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/quote/', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/contact/', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
