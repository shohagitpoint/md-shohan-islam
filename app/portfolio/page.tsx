import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import PortfolioGrid from '@/components/PortfolioGrid';
import {
  ArrowRight,
  Compass,
  Layers,
  Palette,
  Zap,
  CheckCircle2,
  Code2,
  Search,
  RefreshCw,
  Wrench,
  MapPin,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  LayoutGrid,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design Portfolio | Md. Shohan Islam',
  description:
    'Explore Squarespace website design, redesign and SEO portfolio work by Md. Shohan Islam, including responsive layouts, custom solutions and SEO-aware website experiences.',
  alternates: {
    canonical: 'https://shohan.allservix.com/portfolio',
  },
  openGraph: {
    title: 'Squarespace Web Design Portfolio | Md. Shohan Islam',
    description:
      'Explore Squarespace website design, redesign and SEO portfolio work by Md. Shohan Islam, including responsive layouts, custom solutions and SEO-aware website experiences.',
    url: 'https://shohan.allservix.com/portfolio',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design Portfolio | Md. Shohan Islam',
    description:
      'Explore Squarespace website design, redesign and SEO portfolio work by Md. Shohan Islam, including responsive layouts, custom solutions and SEO-aware website experiences.',
  },
};

export default function PortfolioPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://shohan.allservix.com/portfolio#webpage',
        url: 'https://shohan.allservix.com/portfolio',
        name: 'Squarespace Web Design Portfolio | Md. Shohan Islam',
        description:
          'Explore Squarespace website design, redesign and SEO portfolio work by Md. Shohan Islam, including responsive layouts, custom solutions and SEO-aware website experiences.',
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
              name: 'Portfolio',
              item: 'https://shohan.allservix.com/portfolio',
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        name: 'Squarespace Web Design Portfolio Demonstrations',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Portfolio Demonstration 01 - Professional Services Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio Demonstration 02 - Coach / Consultant Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Portfolio Demonstration 03 - Local Business Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Portfolio Demonstration 04 - Personal Brand Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Portfolio Demonstration 05 - Small Business Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Portfolio Demonstration 06 - Service-Based Business Website',
            url: 'https://shohan.allservix.com/portfolio',
          },
        ],
      },
    ],
  };

  const coreServices = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Custom website design tailored to your brand identity, business objectives, and customer journey.',
      icon: LayoutGrid,
    },
    {
      title: 'Squarespace Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Transform outdated Squarespace layouts into modern, high-performing visual experiences.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Comprehensive on-page and technical SEO structure to grow organic search rankings.',
      icon: Search,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Tailored CSS and JavaScript enhancements for unique layouts and interactive components.',
      icon: Code2,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Fast troubleshooting for visual glitches, broken scripts, and mobile display issues.',
      icon: Wrench,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Proactive site maintenance, page updates, security audits, and continuous performance tuning.',
      icon: ShieldCheck,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Location-targeted SEO strategies to establish dominance in local Google search results.',
      icon: MapPin,
    },
  ];

  const designApproach = [
    {
      number: '01',
      title: 'Strategy',
      desc: 'Aligning business objectives with visitor search intent, content architecture, and clear conversion paths before design begins.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Structure',
      desc: 'Building logical heading hierarchies, clean internal linking maps, and responsive layout grids that look flawless on all viewports.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'Design',
      desc: 'Crafting clean visual typography, sophisticated neutral color palettes, custom iconography, and high-impact hero layouts.',
      icon: Palette,
    },
    {
      number: '04',
      title: 'Optimization',
      desc: 'Auditing page speed, image compressions, metadata tags, structured schema markup, and accessible WCAG 2.1 AA compliance.',
      icon: Zap,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'In-depth consultation to map brand identity, content inventory, technical requirements, and target audience expectations.',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Creating custom wireframes, responsive visual mockups, typography pairings, and layout structures in Squarespace.',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Developing clean custom CSS/JS snippets, configuring native Squarespace blocks, and establishing technical SEO fundamentals.',
    },
    {
      step: '04',
      title: 'Optimize',
      desc: 'Rigorous cross-device testing, speed optimization, metadata verification, and launch checks prior to going live.',
    },
  ];

  const faqs = [
    {
      q: 'What type of Squarespace websites do you design?',
      a: 'I specialize in service-based business websites, professional consultant platforms, local service providers, small business sites, and personal brand portfolios built on Squarespace 7.1 and Fluid Engine.',
    },
    {
      q: 'Can I see Squarespace redesign examples?',
      a: 'Yes. The portfolio grid highlights strategic redesign demonstrations showing how outdated layouts, confusing navigation, and poor mobile rendering are overhauled into modern, accessible websites.',
    },
    {
      q: 'Do your projects include SEO?',
      a: 'Every website design and redesign project incorporates foundational SEO practices—including clean URL structures, proper H1-H3 heading tags, optimized alt text, meta titles, descriptions, and structured schema markup.',
    },
    {
      q: 'Can you customize Squarespace with CSS?',
      a: 'Absolutely. I write clean, lightweight custom CSS and JavaScript to create unique visual section styling, smooth interaction states, and custom feature layouts beyond default Squarespace block limitations.',
    },
    {
      q: 'Do you work with existing websites?',
      a: 'Yes. Whether you need a complete Squarespace redesign, custom code additions, bug fixes, or dedicated SEO improvements on an existing site, I offer specialized services tailored to your current setup.',
    },
    {
      q: 'Can you improve mobile responsiveness?',
      a: 'Yes. Mobile responsiveness is a non-negotiable priority. Every section is manually adjusted for fluid layouts, touch target sizing (44px+), readable font sizing, and fast load times across smartphone devices.',
    },
    {
      q: 'Can you create websites for local businesses?',
      a: 'Yes. Local business websites benefit from integrated Local SEO structure, Google Business Profile alignment, NAP (Name, Address, Phone) consistency, and localized service area page layouts.',
    },
    {
      q: 'How can I start a project?',
      a: 'Getting started is straightforward. Click "Start Your Project" or visit the contact page to share your project scope, website goals, and timeline for a detailed consultation.',
    },
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
        <Breadcrumb items={[{ label: 'Portfolio' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Squarespace Portfolio & Design Showcase</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                Squarespace Web Design Portfolio
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Welcome to the official Squarespace web design and SEO portfolio of Md. Shohan Islam. This curated portfolio demonstrates professional website design, comprehensive website redesigns, responsive user experience architecture, SEO-aware page layouts, and maintainable custom code integration. Every project concept is engineered to balance aesthetic clarity, effortless content navigation, accessible WCAG 2.1 AA standards, and search engine visibility across competitive service industries.
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
                  <span>View Services</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO FILTER & GRID SECTION */}
        <PortfolioGrid />

        {/* DESIGN APPROACH SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                METHODOLOGY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                How Every Project Is Approached
              </h2>
              <p className="text-base text-[#4B5563]">
                Successful Squarespace website builds combine disciplined UX strategy with robust technical SEO standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designApproach.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-2xl space-y-4 hover:border-[#0F766E]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0F766E] bg-white border border-[#E5E7EB] px-2.5 py-1 rounded">
                        {item.number}
                      </span>
                      <IconComponent className="w-5 h-5 text-[#0F766E]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES SHOWCASE LINKING SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                CORE EXPERTISE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Connecting Portfolio Work To Core Services
              </h2>
              <p className="text-base text-[#4B5563]">
                Explore specialized Squarespace design, redesign, bug fixing, custom code, and search engine optimization services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, idx) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3 flex flex-col justify-between hover:border-[#0F766E] transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#111827] group-hover:text-[#0F766E] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E7EB]">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] group/link"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY THE PORTFOLIO MATTERS EDITORIAL SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                EDITORIAL PERSPECTIVE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Why Good Portfolio Work Matters
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                A strong website portfolio is more than a display of pretty web pages. It provides clear evidence of practical problem-solving, structural discipline, and execution standards. In web design, every layout choice directly impacts how visitors interact with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Clear Information Hierarchy</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Guiding visitor focus effortlessly through structured headings, scannable content blocks, and intentional typographic scales.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Responsive UX Architecture</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Ensuring seamless navigation, readable font sizes, and fluid layouts across smartphones, tablets, and desktop displays.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Conversion-Focused Flow</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Placing strategic calls to action, contact triggers, and service highlights where users naturally expect to find them.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>SEO-Aware Page Structure</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Embedding key search terms naturally into heading tags, alt text, URL slugs, metadata, and structured JSON-LD schemas.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Performance & Speed</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Optimizing visual assets, minimizing heavy third-party plugins, and ensuring swift rendering speeds on mobile connections.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Maintainable Customization</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Implementing well-commented custom CSS/JS so site owners can easily manage and update content without breaking layouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WORKING PROCESS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Four Steps To A Strategic Squarespace Site
              </h2>
              <p className="text-base text-[#4B5563]">
                A predictable, transparent web design process from initial discovery to final SEO optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3 relative"
                >
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] border border-[#0F766E]/20 px-2.5 py-1 rounded">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0F766E] text-white font-semibold text-sm rounded-lg hover:bg-[#0D655E] transition-colors"
              >
                <span>Discuss Your Project With Md. Shohan Islam</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Portfolio & Project Questions
              </h2>
              <p className="text-base text-[#4B5563]">
                Common questions about Squarespace website design, redesigns, custom code, and project workflows.
              </p>
            </div>

            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden transition-colors hover:border-[#0F766E]/40"
                >
                  <summary className="flex items-center justify-between font-heading font-bold text-base text-[#111827] cursor-pointer list-none select-none">
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-[#0F766E]">
                      ↓
                    </span>
                  </summary>
                  <div className="mt-3 text-xs text-[#4B5563] leading-relaxed pt-2 border-t border-[#E5E7EB]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-20 bg-[#FBFBFB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xs">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20 inline-block">
                READY TO ELEVATE YOUR WEBSITE?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Have a Website Project in Mind?
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Whether you need a brand-new custom Squarespace site, a modern website redesign, custom code features, or on-page SEO optimization, let’s bring your project vision to life.
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
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] hover:text-[#0F766E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>Contact Me</span>
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
