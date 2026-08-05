import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';
import { SanityLive } from '@/lib/sanity/live';
import { SITE_SETTINGS_QUERY } from '@/lib/sanity/queries';
import { safeSanityFetch } from '@/lib/sanity/safe-fetch';
import {
  defaultSiteSettings,
  type SiteSettingsData,
} from '@/components/site/site-settings-defaults';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Keep nav/footer (site settings) fresh after Sanity publishes
export const revalidate = 60;

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rpmequipmentleasing.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RPM Equipment Leasing | Heavy Equipment Rental – Kansas City',
    template: '%s | RPM Equipment Leasing',
  },
  description:
    "Kansas City's leading heavy equipment rental company. CASE 321F wheel loaders and CASE SV280B skid steers available for snow removal, construction, and off-season projects. Call for daily, weekly, and long-term rates.",
  keywords: [
    'equipment rental Kansas City',
    'skid steer rental Kansas City',
    'wheel loader rental Kansas City',
    'CASE equipment rental KC',
    'snow removal equipment rental',
    'off season equipment rental Kansas City',
    'contractor equipment rental KC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RPM Equipment Leasing',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { data } = await safeSanityFetch({
    query: SITE_SETTINGS_QUERY,
    stega: false,
  });
  const settings = (data as SiteSettingsData | null) ?? defaultSiteSettings;

  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell settings={settings}>{children}</SiteShell>
        <Toaster position="top-center" />
        <SanityLive />
      </body>
    </html>
  );
}
