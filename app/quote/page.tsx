'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    machine: '', startDate: '', endDate: '', deliveryNeeded: '',
    jobType: '', notes: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to email/CRM/Supabase
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Quote Request Received</h1>
          <p className="text-gray-600 mb-6">We'll get back to you same day (usually within the hour during business hours). We'll confirm availability and send over pricing.</p>
          <Link href="/" className="btn-primary text-sm">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
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
            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Company (optional)</label>
                      <input name="company" value={form.company} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Machine Needed *</label>
                    <select required name="machine" value={form.machine} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                      <option value="">Select a machine</option>
                      <option value="321f">CASE 321F Compact Wheel Loader</option>
                      <option value="sv280b">CASE SV280B Skid Steer</option>
                      <option value="both">Both (multiple units)</option>
                      <option value="unsure">Not sure — need advice</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Rental Start Date *</label>
                      <input required type="date" name="startDate" value={form.startDate} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Rental End Date *</label>
                      <input required type="date" name="endDate" value={form.endDate} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Needed?</label>
                      <select name="deliveryNeeded" value={form.deliveryNeeded} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                        <option value="">Select</option>
                        <option value="yes">Yes — deliver to my site</option>
                        <option value="no">No — I'll pick up</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Job Type</label>
                      <select name="jobType" value={form.jobType} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                        <option value="">Select</option>
                        <option value="snow">Snow Removal</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="construction">Construction / Site Work</option>
                        <option value="grading">Grading / Earthwork</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={4}
                      placeholder="Job site location, specific attachment needs, quantity, anything else..."
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3">
                    Submit Quote Request
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond same day during business hours.</p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3 text-yellow-400">Fast Response</h3>
                <p className="text-sm text-gray-300 leading-relaxed">We reply to quote requests same day — usually within the hour on business days.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">What You'll Get</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {['Availability confirmation', 'Daily / weekly / monthly pricing', 'Delivery cost estimate', 'Equipment specs & fit assessment'].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0 inline-block mt-1" />{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Need Multiple Units?</h3>
                <p className="text-sm text-gray-600">We run a large fleet. Contractor programs and multi-unit discounts available.</p>
                <Link href="/contractor-program" className="text-yellow-600 font-semibold text-xs mt-2 inline-block hover:underline">
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
