'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/equipment/compact-wheel-loader', label: 'Wheel Loader' },
    { href: '/equipment/skid-steer', label: 'Skid Steer' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contractor-program', label: 'Contractor Program' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="RPM Equipment Leasing"
              width={360}
              height={120}
              priority
              className="h-14 w-auto py-2 px-1"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/quote" className="btn-primary text-xs py-2 px-4">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-700 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-2 py-2 text-sm text-gray-300 hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/quote" className="block mt-2 btn-primary text-center text-xs py-2">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
