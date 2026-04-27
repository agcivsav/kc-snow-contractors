import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
