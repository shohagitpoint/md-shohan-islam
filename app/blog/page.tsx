import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import BlogFilterGrid from '@/components/BlogFilterGrid';
import { BLOG_POSTS } from '@/lib/blog-data';
import { ArrowRight, BookOpen, Search, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design & SEO Blog | Md. Shohan Islam',
  description:
    'Practical Squarespace web design, SEO, redesign, performance and website strategy insights from Md. Shohan Islam.',
  alternates: {
    canonical: 'https://shohan.allservix.com/blog',
  },
  openGraph: {
    title: 'Squarespace Web Design & SEO Blog | Md. Shohan Islam',
    description:
      'Practical Squarespace web design, SEO, redesign, performance and website strategy insights from Md. Shohan Islam.',
    url: 'https://shohan.allservix.com/blog',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design & SEO Blog | Md. Shohan Islam',
    description:
      'Practical Squarespace web design, SEO, redesign, performance and website strategy insights from Md. Shohan Islam.',
  },
};

export default function BlogHubPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://shohan.allservix.com/blog#webpage',
        url: 'https://shohan.allservix.com/blog',
        name: 'Squarespace Web Design & SEO Blog | Md. Shohan Islam',
        description:
          'Practical Squarespace web design, SEO, redesign, performance and website strategy insights from Md. Shohan Islam.',
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
              name: 'Blog',
              item: 'https://shohan.allservix.com/blog',
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        itemListElement: BLOG_POSTS.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://shohan.allservix.com/blog/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  const coreServicesLinks = [
    { title: 'Squarespace Web Design', href: '/services/squarespace-web-design' },
    { title: 'Squarespace Redesign', href: '/services/squarespace-redesign' },
    { title: 'Squarespace SEO', href: '/services/squarespace-seo' },
    { title: 'Squarespace Custom Code', href: '/services/squarespace-custom-code' },
    { title: 'Squarespace Bug Fixing', href: '/services/squarespace-bug-fixing' },
    { title: 'Squarespace Website Maintenance', href: '/services/squarespace-maintenance' },
    { title: 'Local SEO', href: '/services/local-seo' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Blog' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>SQUARESPACE WEB DESIGN &amp; SEO INSIGHTS</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                Squarespace Web Design &amp; SEO Insights
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Welcome to the official Squarespace web design, redesign, and search engine optimization resource hub by Md. Shohan Islam. Here you will find actionable articles, technical optimization walkthroughs, performance enhancement strategies, custom code tutorials, and strategic advice tailored specifically for businesses and creators operating on Squarespace. Every guide is written to help you make informed decisions about your online presence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F766E] text-white font-semibold text-sm rounded-lg hover:bg-[#0D655E] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] hover:text-[#0F766E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BLOG FILTER & GRID SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <BlogFilterGrid />
          </div>
        </section>

        {/* RELATED SERVICES SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                PROFESSIONAL SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Connect Insights with Direct Execution
              </h2>
              <p className="text-base text-[#4B5563]">
                Looking to implement these strategies directly on your Squarespace website? Explore specialized web design, redesign, SEO, custom code, and maintenance services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreServicesLinks.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.href}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] p-4 rounded-xl hover:border-[#0F766E] transition-all group flex items-center justify-between"
                >
                  <span className="text-xs font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors">
                    {srv.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0F766E] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED NAVIGATION FOOTER */}
        <section className="py-12 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white border border-[#E5E7EB] rounded-2xl">
              <div className="space-y-1">
                <div className="text-sm font-bold text-[#111827]">Explore Additional Work &amp; Case Studies</div>
                <p className="text-xs text-[#4B5563]">
                  Review live Squarespace site showcases, client project case studies, or developer background details.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <Link href="/portfolio" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg">
                  Portfolio
                </Link>
                <Link href="/case-studies" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg">
                  Case Studies
                </Link>
                <Link href="/testimonials" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg">
                  Testimonials
                </Link>
                <Link href="/about" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg">
                  About
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xs">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20 inline-block">
                PROJECT CONSULTATION
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Ready to Optimize Your Squarespace Website?
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Discuss your website design, redesign, custom code, or SEO requirements with Md. Shohan Islam today. Let&apos;s build a high-performing site for your business.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F766E] text-white font-semibold text-sm rounded-lg hover:bg-[#0D655E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] hover:text-[#0F766E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
