import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  FileText,
  ImageIcon,
  Layout,
  Smartphone,
  Code2,
  Link2,
  Search,
  CheckCircle2,
  Sparkles,
  Wrench,
  Clock,
  Layers,
  Check,
  HelpCircle,
  Building,
  UserCheck,
  Briefcase,
  Store,
  TrendingUp,
  AlertTriangle,
  Info,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Website Maintenance Services | Md. Shohan Islam',
  description:
    'Keep your Squarespace website updated, secure and performing well with ongoing maintenance, content updates, technical fixes and SEO-aware improvements.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-maintenance',
  },
  openGraph: {
    title: 'Squarespace Website Maintenance Services | Md. Shohan Islam',
    description:
      'Keep your Squarespace website updated, secure and performing well with ongoing maintenance and technical updates.',
    url: 'https://shohan.allservix.com/services/squarespace-maintenance',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Website Maintenance Services | Md. Shohan Islam',
    description:
      'Keep your Squarespace website updated, secure and performing well with ongoing maintenance and technical updates.',
  },
};

export default function SquarespaceMaintenancePage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-maintenance/#service',
        name: 'Squarespace Website Maintenance Services',
        serviceType: 'Squarespace Website Maintenance & Technical Support',
        description:
          'Reliable ongoing and one-time Squarespace website maintenance services covering content updates, image optimization, layout refinements, mobile checks, broken link fixes, and SEO-aware maintenance.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-maintenance',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const whatsIncluded = [
    {
      num: '01',
      title: 'Content & Text Updates',
      desc: 'Keep service details, team bios, pricing tables, announcement bars, and contact copy accurate and up-to-date.',
      icon: FileText,
    },
    {
      num: '02',
      title: 'Image & Media Updates',
      desc: 'Replace outdated banners, compress new portfolio photography, update gallery blocks, and ensure proper alt text.',
      icon: ImageIcon,
    },
    {
      num: '03',
      title: 'Layout Adjustments',
      desc: 'Refine section arrangements, page spacing, column alignment, and structural presentation as offerings evolve.',
      icon: Layout,
    },
    {
      num: '04',
      title: 'Mobile Responsiveness Checks',
      desc: 'Verify that new content and layout adjustments translate smoothly to tablet viewports and mobile screens.',
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'CSS & JavaScript Updates',
      desc: 'Maintain existing custom stylesheets and front-end scripts to prevent rendering issues after Squarespace updates.',
      icon: Code2,
    },
    {
      num: '06',
      title: 'Broken Link & Error Checks',
      desc: 'Identify dead links, broken form triggers, outdated redirection rules, and missing media files.',
      icon: Link2,
    },
    {
      num: '07',
      title: 'SEO & Metadata Maintenance',
      desc: 'Ensure new pages include title tags, meta descriptions, clean H1-H3 heading hierarchies, and canonical settings.',
      icon: Search,
    },
    {
      num: '08',
      title: 'General Website Improvements',
      desc: 'Implement small design tweaks, new section additions, button updates, and general user experience polish.',
      icon: RefreshCw,
    },
  ];

  const whoNeedsMaintenance = [
    {
      title: 'Small Businesses',
      desc: 'Businesses needing regular updates for operating hours, location details, service menus, and seasonal offers.',
      icon: Store,
    },
    {
      title: 'Professional Services',
      desc: 'Law firms, financial advisors, and agencies needing accurate case studies, credentials, and contact pathways.',
      icon: Briefcase,
    },
    {
      title: 'Coaches & Consultants',
      desc: 'Solopreneurs regularly updating booking links, workshop schedules, lead magnets, and client testimonials.',
      icon: UserCheck,
    },
    {
      title: 'Personal Brands',
      desc: 'Speakers, authors, and creators sharing updated press features, media kits, podcast links, and speaking calendars.',
      icon: Sparkles,
    },
    {
      title: 'E-commerce Businesses',
      desc: 'Online stores launching new product lines, updating inventory categories, and refining promotional banners.',
      icon: Building,
    },
    {
      title: 'Growing Companies',
      desc: 'Expanding teams adding career listings, new service divisions, case studies, and corporate announcements.',
      icon: TrendingUp,
    },
  ];

  const commonProblems = [
    {
      title: 'Outdated Content & Copy',
      desc: 'Old pricing, deprecated services, or former team members listed on active pages create visitor confusion.',
    },
    {
      title: 'Broken Links & 404 Pages',
      desc: 'Changed URL slugs or deleted pages leading to dead links that harm user experience and indexing.',
    },
    {
      title: 'Inconsistent Page Layouts',
      desc: 'Sections added over time without consistent spacing rules, typography scales, or margin alignment.',
    },
    {
      title: 'Mobile Rendering Glitches',
      desc: 'Newly published text or images breaking out of mobile containers or causing awkward line wraps.',
    },
    {
      title: 'Outdated Custom Scripts',
      desc: 'Legacy code snippets or third-party widgets causing console errors or slow page loading times.',
    },
    {
      title: 'Missing SEO Metadata',
      desc: 'New pages published without customized title tags, meta descriptions, or structured heading hierarchies.',
    },
    {
      title: 'Unoptimized Image Uploads',
      desc: 'Heavy raw photo files uploaded directly without compression, slowing down overall page performance.',
    },
    {
      title: 'Pending Design Tweaks',
      desc: 'Small visual adjustments—like updating button styles or footer menus—that stay delayed due to time constraints.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Review',
      desc: 'Submit your requested updates, new content assets, or reported website issues for evaluation.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Prioritize',
      desc: 'Organize task requirements logically, confirming scope and implementation details before starting.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Update',
      desc: 'Implement content edits, layout adjustments, image compression, and code refinements directly in Squarespace.',
      icon: Wrench,
    },
    {
      step: '04',
      title: 'Test',
      desc: 'Verify desktop displays, mobile viewports, link integrity, and form triggers to ensure clean execution.',
      icon: Smartphone,
    },
    {
      step: '05',
      title: 'Report',
      desc: 'Confirm completed updates and deliver clear summaries of actions taken on your website.',
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: 'What does Squarespace maintenance include?',
      a: 'Squarespace website maintenance includes content updates, text edits, image optimization, layout refinements, mobile responsiveness adjustments, broken link checks, custom CSS/JS updates, and basic SEO metadata maintenance.',
    },
    {
      q: 'Can you update existing websites?',
      a: 'Yes. I can work directly inside your existing Squarespace 7.0 or 7.1 account to perform regular updates, fix formatting issues, and maintain your site without disrupting live availability.',
    },
    {
      q: 'Can you make small design changes during maintenance?',
      a: 'Yes. Maintenance requests often include adding new section layouts, updating call-to-action buttons, adjusting color palettes, or tweaking typography scales.',
    },
    {
      q: 'Can you fix mobile display issues as part of maintenance?',
      a: 'Yes. Mobile layout checks are integral to ongoing maintenance, ensuring new images, text blocks, and galleries display legibly on smartphones and tablets.',
    },
    {
      q: 'Can you update SEO metadata?',
      a: 'Yes. Maintenance tasks can include auditing and updating page title tags, meta descriptions, H1-H3 heading tags, and image alt text across active pages.',
    },
    {
      q: 'Can you fix broken links on my website?',
      a: 'Yes. I inspect internal and external link targets to fix broken URLs and implement 301 redirects where page paths have changed.',
    },
    {
      q: 'Can you work with existing custom CSS on my site?',
      a: 'Yes. I can review, clean up, and update existing custom CSS in your site\'s Custom CSS panel to ensure custom styling remains clean and bug-free.',
    },
    {
      q: 'Do you offer one-time website maintenance?',
      a: 'Yes. One-time maintenance is ideal if you have a accumulated batch of updates, seasonal changes, or formatting cleanups that need a single focused pass.',
    },
    {
      q: 'Do you offer ongoing website support?',
      a: 'Yes. Ongoing maintenance plans provide peace of mind with regular site checks, scheduled content publishing, and priority turnaround for updates.',
    },
    {
      q: 'How do I request website maintenance?',
      a: 'You can submit your required list of updates or website tasks through the contact page. I will review the scope and provide a clear project plan.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Build a custom Squarespace website tailored around your brand and business objectives.',
      icon: Layout,
    },
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Refresh an outdated website with improved user experience and modern layouts.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Optimize page structure, metadata, and technical foundations for search engines.',
      icon: Search,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Extend your website with clean CSS and JavaScript tailored specifically for your brand.',
      icon: Code2,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Investigate and resolve layout errors, CSS conflicts, and mobile display issues.',
      icon: Wrench,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Enhance geographic search presence to connect with prospective local clients.',
      icon: MapPin,
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
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Squarespace Website Maintenance' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE WEBSITE MAINTENANCE
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Squarespace Website Maintenance Services
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  Keep your Squarespace website accurate, secure and visually consistent with reliable ongoing support, content edits, technical checks, and SEO-aware updates tailored to your business goals.
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

                <div className="pt-2 text-xs font-semibold text-[#4B5563] flex items-center gap-2 border-t border-[#E5E7EB]">
                  <Sparkles className="w-4 h-4 text-[#0F766E]" />
                  <span>Content Updates • Mobile Checks • Broken Link Fixes • SEO Maintenance</span>
                </div>
              </div>

              {/* Maintenance Status Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#FBFBFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-md px-3 py-1 text-[11px] font-mono text-[#4B5563] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                      <span>site-health-dashboard</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  <div className="p-6 bg-[#FBFBFB] space-y-4">
                    <div className="text-center pb-2 border-b border-[#E5E7EB]">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Maintenance Check Overview
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Content & Copy Accuracy</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Verified</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Mobile Layout Scaling</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Checked</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Internal Links & 301 Redirects</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Active</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Image Assets & SEO Meta</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Optimized</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1 border-t border-[#E5E7EB]">
                      [Image Asset: <code className="bg-white px-1 border rounded">squarespace-website-maintenance.jpg</code> — Alt: Squarespace website maintenance and content update interface]
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHY MAINTENANCE MATTERS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Keep Your Website Accurate, Functional And Trustworthy
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  A business website is rarely static. As your company evolves, your services, pricing structures, team members, and promotional highlights change. Leaving outdated information or broken elements on your website can quietly undermine credibility with prospective clients.
                </p>
                <p>
                  Regular Squarespace maintenance ensures your online presence reflects your current business focus. Beyond updating copy and replacing imagery, maintenance addresses subtle layout inconsistencies, broken links, mobile view adjustments, and meta details that contribute to overall site health.
                </p>
                <p>
                  Partnering with an experienced Squarespace designer for ongoing website care saves valuable time, prevents technical debt, and ensures that every visitor experiences a clean, professional, and reliable website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SERVICE SCOPE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What&apos;s Included In Website Maintenance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatsIncluded.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3 hover:border-[#0F766E]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-[#111827]">
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

        {/* WHO NEEDS MAINTENANCE SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHO I HELP
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Who Needs Squarespace Website Maintenance?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoNeedsMaintenance.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#111827]">
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

        {/* COMMON MAINTENANCE PROBLEMS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                COMMON ISSUES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Common Maintenance Issues We Can Resolve
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonProblems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-2"
                >
                  <div className="flex items-center gap-1.5 text-[#D97706] mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold">Issue 0{idx + 1}</span>
                  </div>
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

        {/* MAINTENANCE APPROACH SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  THE PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Structured Maintenance Approach
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#0F766E]/40 transition-colors shadow-xs"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                          Step {item.step}
                        </span>
                        <Icon className="w-4 h-4 text-[#0F766E]" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ONE-TIME VS ONGOING COMPARISON SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SUPPORT OPTIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Ongoing Support vs. One-Time Maintenance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* One Time Card */}
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4">
                <div className="border-b border-[#E5E7EB] pb-3">
                  <span className="text-xs font-mono font-bold text-[#4B5563] bg-white px-2.5 py-1 rounded border border-[#E5E7EB]">
                    ONE-TIME CLEANUP
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#111827] mt-2">
                    Project-Based Maintenance
                  </h3>
                </div>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Best when you have an accumulated list of text edits, new team additions, seasonal page adjustments, or formatting fixes that need a single focused pass.
                </p>
                <ul className="space-y-2 text-xs text-[#111827]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Single-scope content & page updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Broken link audit & 301 redirect fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>One-time mobile scaling pass</span>
                  </li>
                </ul>
              </div>

              {/* Ongoing Card */}
              <div className="bg-[#F0FDFA] border border-[#0F766E]/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="border-b border-[#0F766E]/20 pb-3">
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                    ONGOING CARE
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#111827] mt-2">
                    Retainer Support & Management
                  </h3>
                </div>
                <p className="text-sm text-[#115E59] leading-relaxed">
                  Best for active businesses requiring regular content publishing, continuous layout adjustments, SEO maintenance, and priority technical response.
                </p>
                <ul className="space-y-2 text-xs text-[#115E59]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Scheduled monthly content updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Continuous metadata & SEO maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Priority task turnaround & ongoing monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO & CUSTOM CODE INTEGRATION SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SEO Block */}
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  SEO MAINTENANCE
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  SEO-Aware Website Maintenance
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Maintenance is not strictly visual. When new pages or blog posts are published during maintenance passes, title tags, meta descriptions, heading structures (H1/H2), image alt text, and internal link pathways are verified to keep your SEO baseline strong.
                </p>
                <Link
                  href="/services/squarespace-seo"
                  className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:text-[#0D655E] pt-2"
                >
                  <span>Learn about Squarespace SEO Services →</span>
                </Link>
              </div>

              {/* Custom Code Block */}
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  CODE SUPPORT
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  Custom Code & Style Support
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  If your website relies on custom CSS or JavaScript injections, maintenance includes inspecting and maintaining those custom snippets so they continue to render properly across mobile devices and browser updates without breaking page layouts.
                </p>
                <Link
                  href="/services/squarespace-custom-code"
                  className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:text-[#0D655E] pt-2"
                >
                  <span>Learn about Custom Code Services →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                RELATED SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Other Squarespace Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((item, idx) => {
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
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SQUARESPACE MAINTENANCE FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Website Maintenance
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0F766E]/40 transition-colors [&[open]]:border-[#0F766E]/50 [&[open]]:shadow-xs"
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

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                KEEP YOUR SITE IN TOP SHAPE
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Keep Your Squarespace Website Running Smoothly
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Send me your list of required website updates or describe your ongoing support needs. We can establish a practical maintenance plan for your site.
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
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Contact Me
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
