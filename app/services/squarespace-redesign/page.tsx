import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  RefreshCw,
  Layout,
  Smartphone,
  Search,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Navigation,
  Sparkles,
  MousePointerClick,
  Palette,
  Layers,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  Compass,
  FileCheck,
  ShieldCheck,
  Check,
  HelpCircle,
  Wrench,
  MapPin,
  Code2,
  ArrowRightLeft,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Website Redesign Services | Md. Shohan Islam',
  description:
    'Refresh your Squarespace website with a strategic redesign focused on better UX, responsive design, clearer content, SEO-aware structure and stronger conversion paths.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-redesign',
  },
  openGraph: {
    title: 'Squarespace Website Redesign Services | Md. Shohan Islam',
    description:
      'Improve an outdated Squarespace website with a cleaner design, better user experience and SEO-aware structure.',
    url: 'https://shohan.allservix.com/services/squarespace-redesign',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Website Redesign Services | Md. Shohan Islam',
    description:
      'Improve an outdated Squarespace website with a cleaner design, better user experience and SEO-aware structure.',
  },
};

export default function SquarespaceRedesignPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-redesign/#service',
        name: 'Squarespace Website Redesign Services',
        serviceType: 'Squarespace Website Redesign',
        description:
          'Strategic Squarespace website redesign service focusing on user experience, mobile responsiveness, visual architecture, and SEO preservation.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-redesign',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const problemItems = [
    {
      num: '01',
      title: 'Outdated Visual Design',
      desc: 'The visual styling no longer matches your current brand identity, giving visitors a stale or unprofessional impression.',
    },
    {
      num: '02',
      title: 'Difficult Navigation',
      desc: 'Overcrowded menus or unclear page categories make it frustrating for visitors to find essential service details.',
    },
    {
      num: '03',
      title: 'Poor Mobile Experience',
      desc: 'Layouts break or become awkward on smaller smartphone screens, causing high drop-off rates from mobile users.',
    },
    {
      num: '04',
      title: 'Unclear Calls To Action',
      desc: 'Buttons and contact triggers are hidden, poorly positioned, or ambiguous, leading to lower inquiry conversions.',
    },
    {
      num: '05',
      title: 'Inconsistent Branding',
      desc: 'Fonts, color schemes, and section styling vary across pages, diluting visual authority and brand recognition.',
    },
    {
      num: '06',
      title: 'Weak Content Hierarchy',
      desc: 'Key messaging is buried under long paragraphs without clear heading structures or scannable layout blocks.',
    },
    {
      num: '07',
      title: 'Slow Or Unoptimized Pages',
      desc: 'Uncompressed images, bloated custom code, or outdated gallery implementations slow down page performance.',
    },
    {
      num: '08',
      title: 'SEO Structure Needs Improvement',
      desc: 'Missing meta tags, unstructured headings, or duplicate URLs limit search engine indexing clarity.',
    },
  ];

  const includedServices = [
    {
      num: '01',
      title: 'Website Audit',
      desc: 'Review existing structure, UX, content organization, and visual consistency to identify improvement areas.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Information Architecture',
      desc: 'Improve navigation menus, logical page hierarchy, and content paths for effortless user browsing.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Visual Redesign',
      desc: 'Refine typography, spacing scales, color palettes, section layouts, and visual brand consistency.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Responsive Improvements',
      desc: 'Engineer fluid, tablet-ready, and mobile-first layouts so the website works smoothly across all screen sizes.',
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'Conversion Improvements',
      desc: 'Strengthen call-to-action placement, inquiry forms, and decision paths to encourage qualified contact.',
      icon: MousePointerClick,
    },
    {
      num: '06',
      title: 'SEO-Aware Redesign',
      desc: 'Protect existing indexation, maintain search metadata, and organize clean heading structures.',
      icon: ShieldCheck,
    },
    {
      num: '07',
      title: 'Content Structure',
      desc: 'Organize and format existing text and visual media for clearer communication and scannability.',
      icon: FileCheck,
    },
    {
      num: '08',
      title: 'Launch Review',
      desc: 'Conduct end-to-end testing of responsive layouts, forms, links, and speed considerations before going live.',
      icon: CheckCircle2,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      desc: 'Review the current website, evaluate user friction points, and identify core redesign opportunities.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Strategy',
      desc: 'Define page priorities, simplified navigation structure, and primary conversion pathways.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Redesign',
      desc: 'Develop the new visual direction, typography scale, color system, and responsive layouts.',
      icon: Palette,
    },
    {
      step: '04',
      title: 'Build & Optimize',
      desc: 'Implement redesign layout in Squarespace, applying responsive adjustments and SEO protection steps.',
      icon: SlidersHorizontal,
    },
    {
      step: '05',
      title: 'Review & Launch',
      desc: 'Test across mobile and desktop devices, verify link integrity, and launch the refreshed experience.',
      icon: RefreshCw,
    },
  ];

  const fitSituations = [
    'Your website no longer accurately represents your brand or current positioning.',
    'Your core business offerings, products, or target client focus have evolved.',
    'Your website is clunky, unresponsive, or difficult to navigate on mobile devices.',
    'Visitors struggle to find essential information or service details quickly.',
    'Your primary calls to action are vague or hidden within cluttered pages.',
    'Your existing website requires a cleaner, more structured SEO foundation.',
  ];

  const faqs = [
    {
      q: 'When should I redesign my Squarespace website?',
      a: 'A redesign is appropriate when your current site looks outdated, fails to represent your business accurately, delivers a poor mobile experience, or makes it difficult for visitors to find information and contact you.',
    },
    {
      q: 'Can you redesign my existing Squarespace website?',
      a: 'Yes. I can work directly inside your existing Squarespace 7.0 or 7.1 account to rebuild layouts, improve site navigation, and upgrade visual styling without disrupting your domain setup.',
    },
    {
      q: 'Will my existing content be preserved?',
      a: 'Yes. Important page text, images, and core service copy are carefully evaluated and restructured to ensure valuable business information is maintained and presented more clearly.',
    },
    {
      q: 'Can you improve the mobile version of my website?',
      a: 'Yes. Mobile optimization is a core focus of the redesign process. Pages are adjusted so layout elements, fonts, buttons, and navigation function seamlessly on smartphone screens.',
    },
    {
      q: 'Can a redesign improve my website\'s SEO?',
      a: 'A well-planned redesign strengthens on-page SEO foundations by organizing heading tags, improving page speed, setting up metadata, and establishing clean internal link structures.',
    },
    {
      q: 'Will my URLs change during a redesign?',
      a: 'Whenever possible, existing URL structures are preserved to protect search indexation. If page structures require URL updates, 301 redirects are planned to seamlessly pass traffic and search signals.',
    },
    {
      q: 'Can you improve my website without changing everything?',
      a: 'Yes. If only specific sections or pages need a refresh, the scope can be tailored to focus strictly on high-impact areas like the homepage, navigation, or service pages.',
    },
    {
      q: 'Can you redesign a Squarespace website using my existing branding?',
      a: 'Yes. I can work within your existing logo, color scheme, and visual brand assets while refining spacing, typography scales, and section layouts for a modern look.',
    },
    {
      q: 'Can you add custom CSS or JavaScript during a redesign?',
      a: 'Yes. Custom CSS or JavaScript can be applied when built-in Squarespace controls fall short, ensuring visual refinements match your design needs cleanly.',
    },
    {
      q: 'How long does a Squarespace redesign take?',
      a: 'Project timelines depend on site complexity, total page count, custom feature requirements, and client feedback turnaround. Scope and schedule are established before starting.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Build a completely custom Squarespace website tailored from the ground up for your brand.',
      icon: Layout,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Improve search visibility through practical on-page and technical optimization.',
      icon: Search,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Extend built-in features with lightweight custom CSS and JavaScript solutions.',
      icon: Code2,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Fix broken layouts, mobile display errors, and code conflicts quickly.',
      icon: Wrench,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your website refreshed, updated, and running securely over time.',
      icon: ShieldCheck,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Enhance local search visibility to connect with local prospective clients.',
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
            { label: 'Squarespace Website Redesign' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE WEBSITE REDESIGN
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Transform An Outdated Squarespace Website Into A Better Digital Experience
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  If your Squarespace website feels outdated, difficult to navigate or no longer reflects your business, I can help redesign it with clearer structure, responsive layouts, stronger user experience and SEO-aware improvements.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                  >
                    <span>Start Your Redesign</span>
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
                  <span>Design • UX • Mobile • SEO</span>
                </div>
              </div>

              {/* Before/After Style Browser Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-[#FBFBFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-md px-3 py-1 text-[11px] font-mono text-[#4B5563] flex items-center gap-1">
                      <span className="text-[#0F766E]">https://</span>
                      <span>yourbrand.com/redesign</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  {/* Visual Mockup split preview */}
                  <div className="p-6 bg-[#FBFBFB] space-y-4">
                    <div className="text-center pb-2 border-b border-[#E5E7EB]">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Redesign Concept Comparison
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Before Box */}
                      <div className="bg-white p-3 rounded-lg border border-[#EF4444]/30 space-y-2 text-center">
                        <span className="text-[9px] font-bold text-[#EF4444] uppercase tracking-wider block bg-[#FEF2F2] py-0.5 rounded">
                          BEFORE
                        </span>
                        <div className="space-y-1 text-[10px] text-[#6B7280]">
                          <div className="bg-[#F3F4F6] p-1 rounded font-mono line-through">Crowded Header</div>
                          <div className="bg-[#F3F4F6] p-1 rounded font-mono line-through">Outdated Font</div>
                          <div className="bg-[#F3F4F6] p-1 rounded font-mono line-through">Vague Calls to Action</div>
                          <div className="bg-[#F3F4F6] p-1 rounded font-mono line-through">Cluttered Mobile View</div>
                        </div>
                      </div>

                      {/* After Box */}
                      <div className="bg-white p-3 rounded-lg border border-[#0F766E]/40 space-y-2 text-center shadow-xs">
                        <span className="text-[9px] font-bold text-[#0F766E] uppercase tracking-wider block bg-[#F0FDFA] py-0.5 rounded">
                          AFTER
                        </span>
                        <div className="space-y-1 text-[10px] text-[#111827]">
                          <div className="bg-[#F0FDFA] p-1 rounded font-medium border border-[#0F766E]/20">Clean Navigation</div>
                          <div className="bg-[#F0FDFA] p-1 rounded font-medium border border-[#0F766E]/20">Modern Typography</div>
                          <div className="bg-[#F0FDFA] p-1 rounded font-medium border border-[#0F766E]/20">Clear Conversion Path</div>
                          <div className="bg-[#F0FDFA] p-1 rounded font-medium border border-[#0F766E]/20">Mobile-First Layout</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1 border-t border-[#E5E7EB]">
                      [Image Asset: <code className="bg-white px-1 border rounded">squarespace-redesign-service.jpg</code> — Alt: Squarespace website redesign before and after demonstration concept]
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                IS YOUR WEBSITE HOLDING YOU BACK?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Signs Your Squarespace Website May Need A Redesign
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problemItems.map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                      {item.num}
                    </span>
                    <AlertTriangle className="w-4 h-4 text-[#D97706]" />
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

        {/* REDESIGN PHILOSOPHY SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                THE REDESIGN APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Redesign The Experience, Not Just The Appearance
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  A successful website redesign goes beyond applying a new visual theme or changing background colors. True website improvement begins by evaluating your business objectives, understanding how prospective clients interact with your content, and identifying structural friction points that prevent conversions.
                </p>
                <p>
                  During a redesign, existing copy and media assets are thoroughly reviewed. Rather than discarding historical content blindly, valuable information is reorganized into simplified navigation menus and clearer page hierarchies. This ensures that visitors find essential service details naturally while mobile users enjoy a fluid experience.
                </p>
                <p>
                  Calls to action are strategically repositioned to guide decision-making, while existing search engine value is safeguarded through structured heading tags, URL preservation, and meta descriptions. The goal is a modernized, user-friendly Squarespace website that strengthens credibility and supports business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                REDESIGN SERVICE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What&apos;s Included In A Squarespace Redesign
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedServices.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 hover:border-[#0F766E]/40 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center">
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

        {/* BEFORE / AFTER COMPARISON SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHAT CAN CHANGE?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                From A Frustrating Website To A Clearer Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* BEFORE Card */}
              <div className="bg-[#FFF5F5] border border-[#FECDD3] rounded-xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-[#FECDD3] pb-3">
                  <h3 className="font-heading font-bold text-xl text-[#9F1239]">BEFORE REDESIGN</h3>
                  <span className="text-xs font-mono font-semibold text-[#9F1239] bg-white px-2.5 py-1 rounded border border-[#FECDD3]">
                    Friction Points
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-[#881337]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E11D48] font-bold">✕</span>
                    <span>Outdated, cluttered layout with inconsistent font choices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E11D48] font-bold">✕</span>
                    <span>Crowded page sections and confusing navigation paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E11D48] font-bold">✕</span>
                    <span>Weak content hierarchy making text difficult to scan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E11D48] font-bold">✕</span>
                    <span>Hidden or ambiguous calls to action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E11D48] font-bold">✕</span>
                    <span>Poor mobile presentation causing user drop-off</span>
                  </li>
                </ul>
              </div>

              {/* AFTER Card */}
              <div className="bg-[#F0FDFA] border border-[#0F766E]/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#0F766E]/20 pb-3">
                  <h3 className="font-heading font-bold text-xl text-[#0F766E]">AFTER REDESIGN</h3>
                  <span className="text-xs font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                    Refined Experience
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-[#115E59]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Clear page structure and purposeful section spacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Modern, cohesive visual system reflecting your current brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Strong typography hierarchy for effortless content reading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Simplified navigation and prominent, clear conversion buttons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Fully responsive layout engineered for mobile and tablet screens</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-xs text-[#4B5563] italic bg-[#FBFBFB] p-4 rounded-lg border border-[#E5E7EB]">
              Disclaimer: The before and after points above describe general design concepts and functional improvements, not guaranteed client conversion or financial outcomes.
            </div>
          </div>
        </section>

        {/* REDESIGN PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  THE PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Structured Squarespace Redesign Process
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Start Your Redesign</span>
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

        {/* SEO DURING REDESIGN SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SEO PROTECTION
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Redesign Your Website Without Ignoring SEO
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  One common concern during a website redesign is losing search visibility. Careless URL changes or removing established page content without planning can disrupt search engine indexation. A structured redesign prioritizes SEO preservation from the beginning.
                </p>
                <p>
                  Existing URLs, page titles, meta descriptions, and image alt text are cataloged before layout changes begin. Where possible, existing page slugs are maintained. If structural updates require new URLs, 301 redirects are planned to seamlessly pass traffic to new pages.
                </p>
                <p>
                  Additionally, heading structures (H1, H2, H3), contextual internal links, canonical tags, and XML sitemaps are verified upon launch. Careful planning minimizes search disruption while setting up a stronger foundation for long-term discovery.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/services/squarespace-seo"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Explore Squarespace SEO →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHO NEEDS A REDESIGN SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                IS REDESIGN RIGHT FOR YOU?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                A Redesign Can Make Sense If...
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fitSituations.map((text, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex items-start space-x-3 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F0FDFA] border border-[#0F766E]/30 text-[#0F766E] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-sm text-[#111827] leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
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

        {/* REDESIGN FAQ SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SQUARESPACE REDESIGN FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Squarespace Website Redesign
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
                READY FOR A CHANGE?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Let&apos;s Turn Your Existing Squarespace Website Into A Better Experience
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Tell me what is not working with your current website and what you would like to improve. We can identify the right redesign approach together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Start Your Redesign</span>
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
