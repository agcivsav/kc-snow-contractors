"use client";

import { useState } from "react";
import Link from "next/link";
import { QuoteRequestForm } from "./QuoteRequestForm";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Get a Quote</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-2">Get a Quote</h1>
          <p className="text-gray-400">Fill out the form below. We respond same day.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-extrabold text-gray-900 mb-3">
                      Quote Request Received
                    </h2>
                    <p className="text-gray-600 text-sm">
                      We&apos;ll get back to you same day (usually within the hour during
                      business hours). We&apos;ll confirm availability and send over
                      pricing.
                    </p>
                    <Link
                      href="/"
                      className="btn-primary text-sm inline-block mt-6 min-h-[44px] leading-[44px] px-6"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <QuoteRequestForm onSuccess={() => setSubmitted(true)} />
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3 text-yellow-400">Fast Response</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We reply to quote requests same day — usually within the hour on
                  business days.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">What You&apos;ll Get</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Availability confirmation",
                    "Daily / weekly / monthly pricing",
                    "Delivery cost estimate",
                    "Equipment specs & fit assessment",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0 inline-block mt-1" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Need Multiple Units?</h3>
                <p className="text-sm text-gray-600">
                  We run a large fleet. Contractor programs and multi-unit discounts
                  available.
                </p>
                <Link
                  href="/contractor-program"
                  className="text-yellow-600 font-semibold text-xs mt-2 inline-block hover:underline"
                >
                  Contractor Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
