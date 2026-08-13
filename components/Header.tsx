'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const coreServices = [
    { title: 'Squarespace Web Design', href: '/services/squarespace-web-design', desc: 'Custom website design tailored to your brand' },
    { title: 'Squarespace Website Redesign', href: '/services/squarespace-redesign', desc: 'Modernize and optimize existing Squarespace sites' },
    { title: 'Squarespace SEO', href: '/services/squarespace-seo', desc: 'On-page and technical SEO for search visibility' },
    { title: 'Squarespace Custom Code', href: '/services/squarespace-custom-code', desc: 'CSS/JS enhancements for unique functionality' },
    { title: 'Squarespace Bug Fixing', href: '/services/squarespace-bug-fixing', desc: 'Fast troubleshooting for layout & code glitches' },
    { title: 'Squarespace Website Maintenance', href: '/services/squarespace-maintenance', desc: 'Ongoing updates, performance & security checks' },
    { title: 'Local SEO', href: '/services/local-seo', desc: 'Optimize visibility for local business searches' },
  ];

  return (
    <>
      {/* Accessibility Skip-to-content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F766E] focus:text-white focus:rounded-md font-medium text-sm shadow-md"
      >
        Skip to main content
      </a>

      {/* Sticky Header with backdrop blur */}
      <header className="sticky top-0 z-40 w-full bg-[#FBFBFB]/90 backdrop-blur-md border-b border-[#E5E7EB] transition-colors">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Descriptor */}
          <Link
            href="/"
            className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md p-1"
          >
            <span className="font-heading font-bold text-lg sm:text-xl text-[#111827] tracking-tight group-hover:text-[#0F766E] transition-colors">
              Md. Shohan Islam
            </span>
            <span className="hidden sm:inline text-[#E5E7EB]">|</span>
            <span className="text-xs sm:text-sm text-[#0F766E] font-medium tracking-normal">
              Squarespace Web Designer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4B5563]" aria-label="Main Navigation">
            <Link
              href="/"
              className="text-[#111827] font-semibold hover:text-[#0F766E] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#111827] transition-colors"
            >
              About
            </Link>

            {/* Accessible Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1 hover:text-[#111827] transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown Panel */}
              {isServicesOpen && (
                <div
                  className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 shadow-lg space-y-1">
                    <div className="px-3 py-1.5 text-xs font-semibold text-[#0F766E] uppercase tracking-wider border-b border-[#E5E7EB] mb-1">
                      Core Services
                    </div>
                    {coreServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        role="menuitem"
                        className="block px-3 py-2 rounded-lg hover:bg-[#F0FDFA] transition-colors group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-xs font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-[#4B5563] line-clamp-1">
                          {service.desc}
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#E5E7EB] mt-1">
                      <Link
                        href="/services"
                        className="block text-center text-xs font-medium text-[#0F766E] hover:underline py-1"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="hover:text-[#111827] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              className="hover:text-[#111827] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-[#111827] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#111827] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#111827] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-xs active:scale-[0.99]"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#111827] hover:bg-[#E5E7EB]/50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FBFBFB] overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-5 h-20 border-b border-[#E5E7EB]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading font-bold text-lg text-[#111827]"
            >
              Md. Shohan Islam
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#111827] rounded-lg hover:bg-[#E5E7EB]/50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 space-y-6 text-base font-medium text-[#111827]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3 text-[#0F766E]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#E5E7EB] pb-3">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-3 pl-4 space-y-3 text-sm text-[#4B5563] border-l-2 border-[#0F766E]">
                  {coreServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block hover:text-[#0F766E] py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#0F766E] font-semibold pt-1"
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              Case Studies
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              Testimonials
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-[#E5E7EB] pb-3"
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#0F766E] text-white py-3.5 rounded-lg text-base font-medium shadow-xs"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
