'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Squarespace Web Design',
    details: '',
    company: '',
    website: '',
    budget: 'Flexible',
    timeline: 'Within 1 Month',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send inquiry. Please try again or email directly.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Network error occurred. Please try again.');
    }
  };

  return (
    <div id="contact-form" className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 shadow-2xs space-y-6">
      <div className="space-y-2 border-b border-[#E5E7EB] pb-4">
        <h2 className="font-heading font-bold text-2xl text-[#111827]">
          Project Inquiry Form
        </h2>
        <p className="text-xs text-[#4B5563]">
          Fill out the details below to receive a personalized project consultation and strategy proposal.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-[#F0FDFA] border border-[#0F766E]/30 rounded-xl p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-[#111827]">
            Inquiry Received Successfully!
          </h3>
          <p className="text-xs text-[#4B5563] leading-relaxed max-w-md mx-auto">
            Thank you, <span className="font-semibold text-[#111827]">{formData.name}</span>. Your project details regarding <span className="font-semibold text-[#111827]">{formData.service}</span> have been received. Md. Shohan Islam will review your requirements and follow up via email shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                service: 'Squarespace Web Design',
                details: '',
                company: '',
                website: '',
                budget: 'Flexible',
                timeline: 'Within 1 Month',
              });
            }}
            className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:underline pt-2"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3 text-red-800 text-xs">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Submission Issue</p>
                <p className="mt-0.5 text-red-700">{errorMessage || 'Unable to submit inquiry. Please try again or email directly to shohagitpoint@gmail.com.'}</p>
              </div>
            </div>
          )}

          {/* REQUIRED FIELDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-xs font-bold text-[#111827]">
                Your Name <span className="text-[#0F766E]">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-xs font-bold text-[#111827]">
                Email Address <span className="text-[#0F766E]">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sarah@example.com"
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div className="space-y-2">
            <label htmlFor="contact-service" className="block text-xs font-bold text-[#111827]">
              Service Needed <span className="text-[#0F766E]">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
            >
              <option value="Squarespace Web Design">Squarespace Web Design</option>
              <option value="Squarespace Website Redesign">Squarespace Website Redesign</option>
              <option value="Squarespace SEO">Squarespace SEO</option>
              <option value="Squarespace Custom Code">Squarespace Custom Code</option>
              <option value="Squarespace Bug Fixing">Squarespace Bug Fixing</option>
              <option value="Squarespace Website Maintenance">Squarespace Website Maintenance</option>
              <option value="Local SEO">Local SEO</option>
              <option value="Not Sure Yet">Not Sure Yet / Multiple Services</option>
            </select>
          </div>

          {/* OPTIONAL FIELDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E5E7EB]/60">
            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="contact-company" className="block text-xs font-semibold text-[#4B5563]">
                Business / Company Name <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Studio"
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              />
            </div>

            {/* Current Website */}
            <div className="space-y-2">
              <label htmlFor="contact-website" className="block text-xs font-semibold text-[#4B5563]">
                Current Website URL <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="url"
                id="contact-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Budget */}
            <div className="space-y-2">
              <label htmlFor="contact-budget" className="block text-xs font-semibold text-[#4B5563]">
                Estimated Budget Range <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              >
                <option value="Flexible">Flexible / Open to Discussion</option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label htmlFor="contact-timeline" className="block text-xs font-semibold text-[#4B5563]">
                Desired Timeline <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <select
                id="contact-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
              >
                <option value="Immediate / ASAP">Immediate / ASAP</option>
                <option value="Within 2 Weeks">Within 2 Weeks</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
              </select>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <label htmlFor="contact-details" className="block text-xs font-bold text-[#111827]">
              Project Details &amp; Goals <span className="text-[#0F766E]">*</span>
            </label>
            <textarea
              id="contact-details"
              name="details"
              required
              rows={5}
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe your current website challenge, required pages, design preferences, or specific SEO goals..."
              className="w-full px-4 py-2.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all resize-y"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0F766E] text-white font-semibold text-xs rounded-lg hover:bg-[#0D655E] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <span>Sending Enquiry...</span>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
