import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827]">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center py-20 px-5">
        <div className="text-center max-w-md space-y-6">
          <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
            404 ERROR
          </span>
          <h1 className="font-heading text-3xl font-bold text-[#111827]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            The page you are looking for does not exist or has been moved. Explore my core Squarespace web design and SEO services or return to the homepage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-xs"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-[#E5E7EB] text-[#111827] font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-[#E5E7EB] text-[#111827] font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
