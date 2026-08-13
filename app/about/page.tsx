import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  Layout,
  Search,
  UserCheck,
  Zap,
  CheckCircle2,
  Compass,
  PenTool,
  SlidersHorizontal,
  Rocket,
  Code2,
  RefreshCw,
  Wrench,
  ShieldCheck,
  MapPin,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
  description:
    'Learn about Md. Shohan Islam, a Squarespace Web Designer and SEO Expert focused on creating professional, user-friendly and SEO-aware websites for growing businesses.',
  alternates: {
    canonical: 'https://shohan.allservix.com/about',
  },
  openGraph: {
    title: 'About Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
    description:
      'Learn about Md. Shohan Islam, a Squarespace Web Designer and SEO Expert focused on creating professional, user-friendly and SEO-aware websites for growing businesses.',
    url: 'https://shohan.allservix.com/about',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
    description:
      'Learn about Md. Shohan Islam, a Squarespace Web Designer and SEO Expert focused on creating professional, user-friendly and SEO-aware websites for growing businesses.',
  },
};

export default function AboutPage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://shohan.allservix.com/#person',
        name: 'Md. Shohan Islam',
        jobTitle: 'Squarespace Web Designer & SEO Expert',
        description:
          'Professional Squarespace Web Designer and SEO Expert specializing in custom web design, website redesign, custom CSS/JS, and search engine optimization.',
        url: 'https://shohan.allservix.com/about',
        knowsAbout: [
          'Squarespace Web Design',
          'Squarespace SEO',
          'Website Redesign',
          'Custom Code Integration',
          'Local SEO',
          'User Experience Design',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://shohan.allservix.com/#website',
        url: 'https://shohan.allservix.com',
        name: 'Md. Shohan Islam',
      },
    ],
  };

  const whatIDoItems = [
    {
      num: '01',
      title: 'Website Design',
      desc: 'Thoughtful page structure, clean typography, visual hierarchy, and strategic layouts designed to communicate your brand values clearly and engage visitors effectively.',
      icon: Layout,
    },
    {
      num: '02',
      title: 'SEO',
      desc: 'SEO-aware page architecture, structured heading hierarchy, semantic metadata, and technical optimizations built directly into the site from day one.',
      icon: Search,
    },
    {
      num: '03',
      title: 'User Experience',
      desc: 'Intuitive navigation paths, fast touch interactions, responsive layouts across mobile and desktop, and clear calls to action that guide visitors effortlessly.',
      icon: UserCheck,
    },
    {
      num: '04',
      title: 'Performance & Optimization',
      desc: 'Fast page load speeds, optimized media assets, clean custom code, and lightweight implementations that keep search engines and users happy.',
      icon: Zap,
    },
  ];

  const principles = [
    {
      num: '01',
      title: 'Clarity',
      desc: 'Visitors should immediately understand who you are, what you offer, and how your service solves their problem within seconds of landing on your page.',
    },
    {
      num: '02',
      title: 'Purpose',
      desc: 'Every element, button, section, and piece of copy on a website should serve a clear functional purpose that aligns with your primary business goals.',
    },
    {
      num: '03',
      title: 'Usability',
      desc: 'A website must function seamlessly across all modern browsers and device screen sizes, providing an effortless experience for every single visitor.',
    },
    {
      num: '04',
      title: 'Performance',
      desc: 'Visual craftsmanship should never come at the cost of page speed or technical reliability. Code and media must remain clean and optimized.',
    },
    {
      num: '05',
      title: 'Continuous Improvement',
      desc: 'A website is a living asset. It can evolve and adapt over time as your business grows, offerings expand, and customer expectations shift.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Understand your business objectives, target audience, brand identity, and website requirements through a clear initial conversation.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Map out website architecture, page content priorities, user navigation flows, and technical SEO structure before design begins.',
      icon: PenTool,
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Design and build the responsive Squarespace website, integrate custom CSS or JavaScript where needed, and configure search settings.',
      icon: SlidersHorizontal,
    },
    {
      step: '04',
      title: 'Refine',
      desc: 'Thoroughly review mobile responsiveness, test form submissions and links, refine final details, and prepare the site for launch.',
      icon: Rocket,
    },
  ];

  const serviceLinks = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Custom Squarespace websites built around your goals.',
      icon: Layout,
    },
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Modernize an existing website for better performance.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Practical on-page and technical SEO implementation.',
      icon: Search,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Clean CSS and JavaScript customizations.',
      icon: Code2,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Resolve responsive, code, or layout conflicts.',
      icon: Wrench,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Reliable ongoing site updates and support.',
      icon: ShieldCheck,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Enhance local visibility for service businesses.',
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumbs */}
        <Breadcrumb items={[{ label: 'About' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  ABOUT SHOHAN
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  A Squarespace Web Designer Focused On Better Websites And Better Experiences
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  I&apos;m Md. Shohan Islam, a Squarespace Web Designer and SEO Expert focused on helping businesses create professional websites that are clear, user-friendly and built with long-term growth in mind.
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
                    View My Work
                  </Link>
                </div>
              </div>

              {/* Professional Portrait Frame */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="aspect-4/5 rounded-2xl bg-[#F1F5F9] border border-[#E5E7EB] overflow-hidden shadow-sm group relative">
                    <Image
                      src="/images/md-shohan-islam-squarespace-web-designer.jpg"
                      alt="Md. Shohan Islam, Squarespace Web Designer and SEO Expert"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center justify-between w-[calc(100%-2rem)]">
                      <span className="text-xs font-mono font-semibold text-[#0F766E] bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md border border-[#0F766E]/20 shadow-2xs">
                        Md. Shohan Islam
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT STORY SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                MY APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Design Should Make Your Business Easier To Understand
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  A website is much more than a collection of attractive pages. For a business, a website is often the primary point of contact for potential clients, partners, and customers. If visitors cannot quickly comprehend what you offer or how to take the next step, even the most visual design fails to deliver real value.
                </p>
                <p>
                  I approach Squarespace web design with a focus on clarity and user intent. When visitors land on your website, they should immediately feel confident that they are in the right place. That means organizing content logically, ensuring typography is crisp and readable, and designing smooth navigation paths across desktop and mobile devices alike.
                </p>
                <p>
                  Search visibility and website performance are equally essential parts of the design equation. A great website must be easily discoverable by search engines and quick to load for users on any connection. By building SEO best practices into page structures, image formats, and code implementations from the start, I help businesses create websites that perform well over the long term.
                </p>
                <p>
                  Every business has different goals, audience expectations, and functional requirements. My goal is to listen carefully to what you need and deliver a clean, practical Squarespace website that represents your brand with professionalism and purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I DO SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHAT I DO
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                A Practical Approach To Squarespace Web Design
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatIDoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4 hover:border-[#0F766E]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY SQUARESPACE SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHY SQUARESPACE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Why I Work With Squarespace
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Squarespace offers an exceptional balance between visual design flexibility and long-term ease of maintenance. For many small businesses, consultants, service providers, and growing brands, it provides a reliable, secure platform that doesn&apos;t require complex server management or constant plugin updates.
                </p>
                <p>
                  With Squarespace 7.1 and Fluid Engine, it&apos;s possible to craft highly customized visual layouts while keeping the site manageable for business owners. When standard template settings aren&apos;t enough, clean custom CSS and JavaScript can be introduced to tailor specific design features precisely to your brand guidelines.
                </p>
                <p>
                  Squarespace also includes solid built-in SEO capabilities, structured page controls, responsive image formatting, and reliable hosting infrastructure. While no single platform is right for every single use case, Squarespace provides an effective, flexible solution for many businesses seeking a professional web presence without unnecessary technical overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MY WORKING PRINCIPLES SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                HOW I THINK
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                The Principles Behind My Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((item) => (
                <div
                  key={item.num}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] w-max px-2.5 py-1 rounded border border-[#0F766E]/20 mb-3">
                      {item.num} — {item.title}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#111827] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MY PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  MY PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Straightforward Way To Build A Better Website
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Step {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-[#0F766E]" aria-hidden="true" />
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

        {/* AREAS OF EXPERTISE SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                AREAS OF EXPERTISE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What I Can Help With
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:border-[#0F766E]/50 hover:bg-white hover:shadow-xs transition-all"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#111827] group-hover:text-[#0F766E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#0F766E]">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SELECTED CLIENT WORK & TARGET CLIENTS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SELECTED CLIENT WORK &amp; INDUSTRIES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Proven Experience Across Diverse Businesses
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Over years of dedicated Squarespace web design and SEO work, I have collaborated directly with small businesses, entrepreneurs, consultants, and specialized service providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1: Featured Project References */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
                <h3 className="font-heading font-bold text-lg text-[#111827] flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <span>Selected Client Websites</span>
                  <span className="text-xs font-mono text-[#0F766E] bg-[#F0FDFA] px-2.5 py-0.5 rounded border border-[#0F766E]/20">Verified Work</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#4B5563]">
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Red Oak Financial Group</span>
                    <span className="text-[#0F766E] font-medium">Financial Services</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Rick Smith Golf</span>
                    <span className="text-[#0F766E] font-medium">Sports &amp; Golf Instruction</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Brilliant Event Planning</span>
                    <span className="text-[#0F766E] font-medium">Luxury Events</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Reflections Perfection</span>
                    <span className="text-[#0F766E] font-medium">Auto Detailing</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">KAN Consultancy</span>
                    <span className="text-[#0F766E] font-medium">Management Consulting</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Next Gen Wash Pros</span>
                    <span className="text-[#0F766E] font-medium">Exterior Maintenance</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#111827]">Peter Cowell</span>
                    <span className="text-[#0F766E] font-medium">Executive Coaching</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Client Categories Served */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
                <h3 className="font-heading font-bold text-lg text-[#111827] border-b border-[#E5E7EB] pb-3">
                  Who I Regularly Work With
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  I design and optimize Squarespace sites tailored to the specific operational and lead-generation needs of:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Small Businesses',
                    'Entrepreneurs',
                    'Photographers',
                    'Salons',
                    'Law Firms',
                    'Therapists',
                    'Home Builders',
                    'Fitness Studios',
                    'Online Retailers',
                    'Coaches',
                    'Consultants',
                  ].map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-[#111827] bg-[#FBFBFB] border border-[#E5E7EB] px-3 py-1 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT PAGE CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                LET&apos;S WORK TOGETHER
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Have A Website Project In Mind?
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Whether you are starting from scratch, improving an existing Squarespace website or looking for help with SEO and optimization, let&apos;s talk about what you need.
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
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Explore Services
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
