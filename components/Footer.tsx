import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] text-sm text-[#4B5563]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Profile */}
          <div className="space-y-4">
            <div>
              <Link href="/" className="font-heading font-bold text-lg text-[#111827] block">
                Md. Shohan Islam
              </Link>
              <div className="text-xs text-[#0F766E] font-medium mt-0.5">
                Squarespace Web Designer &amp; SEO Expert
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#4B5563]">
              Professional Squarespace web design, SEO and website optimization services for businesses and personal brands.
            </p>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#111827]">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#0F766E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0F766E] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0F766E] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#0F766E] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#0F766E] transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#0F766E] transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#0F766E] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0F766E] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services Links */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#111827]">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/squarespace-web-design" className="hover:text-[#0F766E] transition-colors">
                  Squarespace Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/squarespace-redesign" className="hover:text-[#0F766E] transition-colors">
                  Squarespace Redesign
                </Link>
              </li>
              <li>
                <Link href="/services/squarespace-seo" className="hover:text-[#0F766E] transition-colors">
                  Squarespace SEO
                </Link>
              </li>
              <li>
                <Link href="/services/squarespace-custom-code" className="hover:text-[#0F766E] transition-colors">
                  Custom Code
                </Link>
              </li>
              <li>
                <Link href="/services/squarespace-bug-fixing" className="hover:text-[#0F766E] transition-colors">
                  Bug Fixing
                </Link>
              </li>
              <li>
                <Link href="/services/squarespace-maintenance" className="hover:text-[#0F766E] transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="hover:text-[#0F766E] transition-colors">
                  Local SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Work Together & Social Placeholders */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#111827]">
              Let&apos;s Work Together
            </div>
            <div className="space-y-2 text-xs">
              <p>Ready to discuss your project?</p>
              <Link
                href="/contact"
                className="inline-block bg-[#0F766E] hover:bg-[#0D655E] text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Start Your Project
              </Link>
            </div>
            <div className="pt-2 space-y-1 text-xs">
              <div className="text-[11px] font-semibold text-[#111827] uppercase tracking-wider">Direct Contact</div>
              <p className="text-[#4B5563]">
                Email: <a href="mailto:shohanitpoint@gmail.com" className="text-[#0F766E] hover:underline">shohanitpoint@gmail.com</a>
              </p>
              <p className="text-[#4B5563]">
                WhatsApp: <a href="https://wa.me/8801831178807" target="_blank" rel="noopener noreferrer" className="text-[#0F766E] hover:underline">+8801831178807</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center text-xs text-[#4B5563] gap-4">
          <div>
            © 2026 Md. Shohan Islam. All rights reserved.
          </div>
          <div>
            <Link href="/privacy-policy" className="hover:text-[#0F766E] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
