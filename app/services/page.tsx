import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  Layout,
  RefreshCw,
  Search,
  Code2,
  Wrench,
  ShieldCheck,
  MapPin,
  HelpCircle,
  Target,
  SlidersHorizontal,
  Compass,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design & SEO Services | Md. Shohan Islam',
  description:
    'Explore Squarespace web design, redesign, SEO, custom code, bug fixing, maintenance and local SEO services from Md. Shohan Islam.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services',
  },
  openGraph: {
    title: 'Squarespace Web Design & SEO Services | Md. Shohan Islam',
    description:
      'Explore Squarespace web design, redesign, SEO, custom code, bug fixing, maintenance and local SEO services from Md. Shohan Islam.',
    url: 'https://shohan.allservix.com/services',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design & SEO Services | Md. Shohan Islam',
    description:
      'Explore Squarespace web design, redesign, SEO, custom code, bug fixing, maintenance and local SEO services from Md. Shohan Islam.',
  },
};

export default function ServicesPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        description:
          'Comprehensive Squarespace web design, website redesign, SEO optimization, custom code, bug fixing, and maintenance services.',
        url: 'https://shohan.allservix.com/services',
        provider: {
          '@type': 'Person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Squarespace Web Design & SEO Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace Web Design',
                url: 'https://shohan.allservix.com/services/squarespace-web-design',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace Website Redesign',
                url: 'https://shohan.allservix.com/services/squarespace-redesign',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace SEO',
                url: 'https://shohan.allservix.com/services/squarespace-seo',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace Custom Code',
                url: 'https://shohan.allservix.com/services/squarespace-custom-code',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace Bug Fixing',
                url: 'https://shohan.allservix.com/services/squarespace-bug-fixing',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Squarespace Website Maintenance',
                url: 'https://shohan.allservix.com/services/squarespace-maintenance',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Local SEO',
                url: 'https://shohan.allservix.com/services/local-seo',
              },
            },
          ],
        },
      },
    ],
  };

  const coreServices = [
    {
      num: '01',
      title: 'Squarespace Web Design',
      desc: 'Create a professional Squarespace website with thoughtful structure, responsive design, clear messaging and a user experience built around your business goals.',
      href: '/services/squarespace-web-design',
      cta: 'Explore Squarespace Web Design →',
      icon: Layout,
    },
    {
      num: '02',
      title: 'Squarespace Website Redesign',
      desc: 'Transform an outdated or underperforming Squarespace website with improved structure, visual design, mobile usability and clearer conversion paths.',
      href: '/services/squarespace-redesign',
      cta: 'Explore Squarespace Redesign →',
      icon: RefreshCw,
    },
    {
      num: '03',
      title: 'Squarespace SEO',
      desc: 'Improve your Squarespace website\'s search foundations through practical on-page SEO, content structure, metadata and technical optimization.',
      href: '/services/squarespace-seo',
      cta: 'Explore Squarespace SEO →',
      icon: Search,
    },
    {
      num: '04',
      title: 'Squarespace Custom Code',
      desc: 'Add carefully implemented CSS and JavaScript customizations when standard Squarespace functionality is not enough for your design or functionality requirements.',
      href: '/services/squarespace-custom-code',
      cta: 'Explore Custom Code →',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Squarespace Bug Fixing',
      desc: 'Resolve layout problems, responsive issues, styling conflicts and custom-code problems affecting an existing Squarespace website.',
      href: '/services/squarespace-bug-fixing',
      cta: 'Explore Bug Fixing →',
      icon: Wrench,
    },
    {
      num: '06',
      title: 'Squarespace Website Maintenance',
      desc: 'Keep your website updated, refined and reliable with ongoing Squarespace maintenance and support.',
      href: '/services/squarespace-maintenance',
      cta: 'Explore Maintenance →',
      icon: ShieldCheck,
    },
    {
      num: '07',
      title: 'Local SEO',
      desc: 'Improve local online visibility with practical SEO strategies designed to help service businesses reach relevant customers in their target locations.',
      href: '/services/local-seo',
      cta: 'Explore Local SEO →',
      icon: MapPin,
    },
  ];

  const selectionGuide = [
    {
      situation: 'I need a new website.',
      recommendation: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Best for businesses creating a brand-new website from scratch.',
    },
    {
      situation: 'My current website feels outdated.',
      recommendation: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Best for improving structure, visual design, and mobile experience.',
    },
    {
      situation: 'My website needs better search visibility.',
      recommendation: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Best for optimizing pages, metadata, and search indexing.',
    },
    {
      situation: 'I have a technical problem.',
      recommendation: 'Squarespace Bug Fixing / Custom Code',
      href: '/services/squarespace-bug-fixing',
      desc: 'Best for resolving layout glitches or adding tailored functionality.',
    },
    {
      situation: 'I need ongoing help.',
      recommendation: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Best for continuous content updates, security checks, and refinements.',
    },
  ];

  const valueBlocks = [
    {
      title: 'Design-led thinking',
      desc: 'Page structure, typography, and visual hierarchy designed around visitor engagement and clear messaging.',
    },
    {
      title: 'SEO-aware implementation',
      desc: 'Search considerations integrated into heading structure, meta tags, URL slugs, and technical setup.',
    },
    {
      title: 'Practical customization',
      desc: 'Clean CSS and JavaScript code implemented thoughtfully without creating long-term maintenance headaches.',
    },
    {
      title: 'Clear communication',
      desc: 'Straightforward project management, transparent expectations, and collaborative feedback throughout.',
    },
  ];

  const processPreview = [
    {
      step: '01',
      title: 'Tell Me About Your Project',
      desc: 'Share your goals, current website status, target audience, and primary requirements.',
    },
    {
      step: '02',
      title: 'Define The Right Approach',
      desc: 'Identify which service or combination of services matches your exact scope.',
    },
    {
      step: '03',
      title: 'Design And Build',
      desc: 'Execute page layouts, custom code, mobile responsiveness, and SEO setup.',
    },
    {
      step: '04',
      title: 'Refine And Launch',
      desc: 'Review site performance, complete final adjustments, and launch your updated site.',
    },
  ];

  const faqs = [
    {
      q: 'Can I hire you for only one service?',
      a: 'Yes. Whether you need a standalone Squarespace SEO audit, a quick custom code tweak, or a specific bug fix on an existing site, services can be provided independently based on your immediate needs.',
    },
    {
      q: 'Can you redesign an existing Squarespace website?',
      a: 'Yes. A redesign focuses on restructuring pages, modernizing layout aesthetics, improving mobile responsiveness, and streamlining conversion pathways on your existing Squarespace platform.',
    },
    {
      q: 'Can Squarespace SEO and web design be combined?',
      a: 'Yes. Combining custom web design with structured on-page SEO ensures your website is both visually engaging for visitors and properly organized for search engine crawlers right from launch.',
    },
    {
      q: 'Can you work with an existing Squarespace website?',
      a: 'Yes. I regularly work on existing Squarespace 7.0 and 7.1 sites to resolve visual bugs, update layouts, optimize speed, and improve search configurations.',
    },
    {
      q: 'Can you add custom CSS or JavaScript?',
      a: 'Yes. When built-in Squarespace options do not meet specific design requirements, I write lightweight, well-tested custom CSS and JavaScript snippets tailored to your site.',
    },
    {
      q: 'Can you help fix an existing Squarespace issue?',
      a: 'Yes. The bug-fixing service focuses on identifying and fixing broken mobile layouts, custom script conflicts, broken links, and styling glitches.',
    },
    {
      q: 'Do you offer ongoing maintenance?',
      a: 'Yes. Website maintenance services provide ongoing support for periodic content updates, structural additions, speed checks, and technical refinements.',
    },
    {
      q: 'Do you work with businesses outside your local area?',
      a: 'Yes. I work remotely with businesses, coaches, service providers, and brands across the USA, UK, Canada, Australia, and internationally.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumbs */}
        <Breadcrumb items={[{ label: 'Services' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                SERVICES
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                Squarespace Web Design And SEO Services For Growing Businesses
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                From complete Squarespace website design and redesigns to SEO, custom code and ongoing support, I provide focused services designed around your website, audience and business goals.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
                >
                  View My Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INTRODUCTION SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                HOW I CAN HELP
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Focused Services For Every Stage Of Your Website
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed">
                Every business approaches a website project from a different starting point. You might need a completely new site built from scratch, a fresh redesign for an outdated page layout, targeted search engine optimization to improve search rankings, custom code to unlock specific features, or quick bug fixes on an existing site. I provide modular, focused Squarespace services that can be used individually or combined to fit your precise requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES SECTION (EXACTLY 7 CORE SERVICES) */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                CORE SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Explore Squarespace Services
              </h2>
              <p className="text-base text-[#4B5563]">
                Tailored solutions designed to help your business present professionally online.
              </p>
            </div>

            {/* Grid for 7 Core Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0F766E]/50 hover:bg-white hover:shadow-xs transition-all duration-200 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                          Service {item.num}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-[#111827] mb-3 group-hover:text-[#0F766E] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] w-full justify-between"
                      >
                        <span>{item.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICE SELECTION GUIDE SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHICH SERVICE DO YOU NEED?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Not Sure Where To Start?
              </h2>
              <p className="text-base text-[#4B5563]">
                Match your current situation with the right service option.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionGuide.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded w-max border border-[#0F766E]/20">
                      Situation {idx + 1}
                    </div>
                    <div className="font-heading font-bold text-lg text-[#111827]">
                      &ldquo;{item.situation}&rdquo;
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:text-[#0D655E] gap-1.5 group"
                    >
                      <span>Recommended: {item.recommendation}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY WORK WITH ME SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHY CHOOSE MY SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                One Website, Multiple Areas Of Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueBlocks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3"
                >
                  <div className="text-xs font-mono font-bold text-[#0F766E] bg-white px-2 py-0.5 rounded border border-[#E5E7EB] w-max">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS PREVIEW SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  HOW IT WORKS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  From Idea To A More Effective Website
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processPreview.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 shadow-xs"
                >
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                    Step {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES FAQ ACCORDION SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SERVICE FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About My Services
              </h2>
              <p className="text-base text-[#4B5563]">
                Helpful answers regarding scope, process, and working arrangements.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0F766E]/40 transition-colors [&[open]]:bg-white [&[open]]:border-[#0F766E]/50 [&[open]]:shadow-xs"
                >
                  <summary className="flex items-center justify-between font-heading font-bold text-base text-[#111827] cursor-pointer list-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded p-1">
                    <span className="pr-4">{faq.q}</span>
                    <span className="ml-2 w-6 h-6 rounded-full bg-[#F0FDFA] border border-[#0F766E]/30 text-[#0F766E] flex items-center justify-center text-sm font-bold shrink-0 group-open:rotate-180 transition-transform duration-200">
                      ↓
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-sm text-[#4B5563] leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                READY TO GET STARTED?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Let&apos;s Find The Right Solution For Your Website
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Tell me what you need help with, what is currently working and what you would like to improve. We can then identify the most suitable next step.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  View Portfolio
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
