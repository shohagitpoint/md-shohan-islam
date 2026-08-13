import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Shield, Lock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Md. Shohan Islam',
  description:
    'Privacy policy for Md. Shohan Islam website outlining data collection, usage, cookies and visitor privacy rights.',
  alternates: {
    canonical: 'https://shohan.allservix.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Md. Shohan Islam',
    description:
      'Privacy policy for Md. Shohan Islam website outlining data collection, usage, cookies and visitor privacy rights.',
    url: 'https://shohan.allservix.com/privacy-policy',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Md. Shohan Islam',
    description:
      'Privacy policy for Md. Shohan Islam website outlining data collection, usage, cookies and visitor privacy rights.',
  },
};

export default function PrivacyPolicyPage() {
  const privacyJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://shohan.allservix.com/privacy-policy#webpage',
        url: 'https://shohan.allservix.com/privacy-policy',
        name: 'Privacy Policy | Md. Shohan Islam',
        description:
          'Privacy policy for Md. Shohan Islam website outlining data collection, usage, cookies and visitor privacy rights.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://shohan.allservix.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Privacy Policy',
              item: 'https://shohan.allservix.com/privacy-policy',
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        {/* PAGE HEADER */}
        <header className="py-12 md:py-16 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <Shield className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>LEGAL &amp; PRIVACY</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
                Privacy Policy
              </h1>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                This Privacy Policy outlines how Md. Shohan Islam collects, uses, and safeguards information provided by visitors and clients interacting with this website (https://shohan.allservix.com/).
              </p>

              <div className="text-xs text-[#4B5563] pt-2 border-t border-[#E5E7EB]">
                Last Updated: August 10, 2026
              </div>
            </div>
          </div>
        </header>

        {/* POLICY CONTENT */}
        <section className="py-12 md:py-20 bg-[#FBFBFB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto bg-white border border-[#E5E7EB] p-6 sm:p-10 rounded-2xl space-y-8 shadow-2xs text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              
              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  1. Information Collection
                </h2>
                <p>
                  When you submit a project inquiry or contact form on this website, you may voluntarily provide personal details including your name, email address, business name, website URL, and project requirements.
                </p>
                <p>
                  Standard, non-personally identifiable technical information (such as browser type, device category, referring URL, and page view timestamps) may be automatically recorded by web server log files or privacy-friendly analytics tools to monitor website health and performance.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  2. Use of Information
                </h2>
                <p>Information provided through contact forms is used solely to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>Respond to project inquiries, consultation requests, and service questions.</li>
                  <li>Prepare tailored project scopes, cost estimates, and website design proposals.</li>
                  <li>Communicate regarding ongoing website design, custom code development, or SEO projects.</li>
                </ul>
                <p>
                  Your information will never be sold, rented, leased, or traded to third parties for marketing purposes.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  3. Cookies &amp; Analytics
                </h2>
                <p>
                  This website may utilize essential functional cookies to ensure page loading performance, accessibility preference retention, and navigation routing.
                </p>
                <p>
                  You can control or disable cookie settings directly through your web browser preferences. Disabling non-essential cookies will not impair your ability to navigate the website or submit contact forms.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  4. Third-Party Infrastructure Services
                </h2>
                <p>
                  This website relies on secure web hosting and content delivery network (CDN) infrastructure (such as Cloud Run or Hostinger) to deliver fast, reliable global page rendering. These services process standard network logs strictly for infrastructure security, DDOS prevention, and server reliability.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  5. Data Retention &amp; Visitor Rights
                </h2>
                <p>
                  Contact inquiry records are retained for reasonable project record-keeping purposes. If you wish to request the deletion or correction of personal contact information submitted via this site, please submit a request through the contact form.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h2 className="font-heading font-bold text-lg text-[#111827]">
                  6. Contact Details
                </h2>
                <p>
                  If you have questions or concerns regarding this Privacy Policy or data privacy practices, please contact Md. Shohan Islam directly through the contact page:
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:underline"
                  >
                    <span>Go to Contact Page</span>
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
