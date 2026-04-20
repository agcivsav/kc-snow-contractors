'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-gray-400">We're based in Kansas City. Reach out any time.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600 text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                    <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              )}
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">RPM Equipment Leasing</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-yellow-500 text-xs uppercase">Location</span>
                    <span>RPM Equipment Leasing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-yellow-500 text-xs uppercase">Area</span>
                    <span>Serving our local service area</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2 text-yellow-400">Need a Machine Fast?</h3>
                <p className="text-sm text-gray-300 mb-4">Skip the message — go straight to a quote request and we'll respond same day.</p>
                <Link href="/quote" className="btn-primary text-xs block text-center">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
