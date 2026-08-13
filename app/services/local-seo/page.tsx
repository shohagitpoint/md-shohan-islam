import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  MapPin,
  Search,
  FileText,
  Link2,
  Code2,
  Globe,
  Compass,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  Layers,
  Layout,
  RefreshCw,
  Wrench,
  ShieldCheck,
  Check,
  HelpCircle,
  Info,
  ChevronRight,
  Target,
  BarChart2,
  Store,
  Briefcase,
  HeartPulse,
  Home,
  UserCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local SEO Services for Small Businesses | Md. Shohan Islam',
  description:
    'Improve your local search visibility with practical Local SEO services covering on-page optimization, location signals, Google Business Profile guidance and local website structure.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services for Small Businesses | Md. Shohan Islam',
    description:
      'Improve your local search visibility with practical Local SEO services covering on-page optimization, location signals and Google Business Profile guidance.',
    url: 'https://shohan.allservix.com/services/local-seo',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services for Small Businesses | Md. Shohan Islam',
    description:
      'Improve your local search visibility with practical Local SEO services covering on-page optimization, location signals and Google Business Profile guidance.',
  },
};

export default function LocalSeoPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/local-seo/#service',
        name: 'Local SEO Services for Small Businesses',
        serviceType: 'Local Search Engine Optimization',
        description:
          'Practical Local SEO services for small businesses and service providers, covering local keyword targeting, location page optimization, local schema markup, internal linking, and Google Business Profile alignment.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/local-seo',
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
      title: 'Local Keyword Research',
      desc: 'Identify explicit geographic search terms (city, neighborhood, service area) prospective local clients use to find services.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Location Page Optimization',
      desc: 'Structure dedicated location pages with unique, helpful localized information rather than repetitive thin template pages.',
      icon: MapPin,
    },
    {
      num: '03',
      title: 'Title & Meta Optimization',
      desc: 'Craft clear title tags and meta descriptions incorporating primary geographic indicators and specific core services.',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Local On-Page SEO',
      desc: 'Optimize heading tags (H1-H3), body copy, image alt tags, and NAP (Name, Address, Phone) footer clarity.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Internal Linking',
      desc: 'Build intuitive internal link connections between primary service pages, geographic pages, and case studies.',
      icon: Link2,
    },
    {
      num: '06',
      title: 'Local Business Schema',
      desc: 'Implement valid JSON-LD LocalBusiness structured data to help search engines parse business location details accurately.',
      icon: Layers,
    },
    {
      num: '07',
      title: 'Google Business Profile Guidance',
      desc: 'Align website landing page URLs, category information, address details, and primary services with your profile.',
      icon: Store,
    },
    {
      num: '08',
      title: 'Local Content Strategy',
      desc: 'Outline relevant local service guides, FAQs, and community-focused content that answers specific customer questions.',
      icon: Compass,
    },
  ];

  const whoIHelp = [
    {
      title: 'Local Service Businesses',
      desc: 'Plumbers, electricians, cleaners, and contractors serving defined geographic service areas.',
      icon: Home,
    },
    {
      title: 'Consultants',
      desc: 'Business consultants, advisors, and strategists targeting corporate clients in specific metropolitan regions.',
      icon: Briefcase,
    },
    {
      title: 'Professional Services',
      desc: 'Law firms, accountants, real estate agents, and insurance brokers operating local offices.',
      icon: Building2,
    },
    {
      title: 'Trades & Home Services',
      desc: 'Roofers, landscapers, painters, and remodelers showcasing localized project portfolios.',
      icon: Wrench,
    },
    {
      title: 'Health & Wellness Businesses',
      desc: 'Chiropractors, physical therapists, private clinics, and wellness studios serving local patients.',
      icon: HeartPulse,
    },
    {
      title: 'Small Local Companies',
      desc: 'Independent boutiques, specialty agencies, and brick-and-mortar storefronts establishing digital visibility.',
      icon: Store,
    },
    {
      title: 'Personal Brands Serving Local Areas',
      desc: 'Photographers, event planners, and local specialists building geographic authority in their region.',
      icon: UserCheck,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Analyze your current local search footprint, primary service offerings, target geographic regions, and existing website assets.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Local Keyword & Competitor Research',
      desc: 'Research localized search queries and evaluate how competing local providers structure their website pages.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Website Optimization',
      desc: 'Optimize page metadata, H1-H3 heading hierarchies, NAP consistency, and LocalBusiness JSON-LD schema markup.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Local Content & Structure',
      desc: 'Refine location page architecture, service-area breakdowns, and internal links between relevant site pages.',
      icon: Layers,
    },
    {
      step: '05',
      title: 'Measurement & Improvement',
      desc: 'Review search performance trends in Google Search Console and refine on-page elements over time based on real metrics.',
      icon: BarChart2,
    },
  ];

  const faqs = [
    {
      q: 'What is Local SEO?',
      a: 'Local SEO focuses on optimizing your website and online presence so your business becomes discoverable when people search for products or services in a specific geographic area (e.g., "Squarespace web designer in London" or "plumber in Austin, TX").',
    },
    {
      q: 'Does Local SEO guarantee top Google rankings?',
      a: 'No ethical SEO professional can guarantee specific rank positions on Google search results. Search algorithms evaluate hundreds of dynamic factors. My focus is implementing transparent, practical on-page optimization, clean site structure, and accurate local schema.',
    },
    {
      q: 'Do I need a Google Business Profile for Local SEO?',
      a: 'While a Google Business Profile is managed directly on Google\'s platform, aligning your website\'s landing pages, NAP information, and service structure with your profile significantly strengthens your overall local search signals.',
    },
    {
      q: 'Can you optimize my existing Squarespace website for Local SEO?',
      a: 'Yes. I work within your existing Squarespace site to optimize metadata, structure service and location pages, clean up heading hierarchies, and embed LocalBusiness structured data.',
    },
    {
      q: 'Do I need location pages on my website?',
      a: 'If your business serves multiple distinct physical locations or major service areas, dedicated, high-quality location pages can help visitors find specific information relevant to their area.',
    },
    {
      q: 'How many location pages should I create?',
      a: 'Quality is far more important than quantity. You should only create location pages for areas where you genuinely operate or have real client work, ensuring each page offers unique, useful content rather than duplicate text.',
    },
    {
      q: 'Can Local SEO help service-area businesses without a public physical address?',
      a: 'Yes. Service-area businesses (like mobile contractors or traveling consultants) can optimize their websites for specific service regions while configuring their Google Business Profile to show service areas rather than a physical storefront.',
    },
    {
      q: 'What keywords should local businesses target?',
      a: 'Local businesses should target intent-focused keywords combining core services with geographic modifiers (e.g., "[Service Name] in [City/Region]") alongside high-intent non-geographic queries.',
    },
    {
      q: 'How long does Local SEO take to show results?',
      a: 'SEO is a long-term strategy. Indexing updates and initial search engine recognition usually take several weeks or months depending on local market competition and current site authority.',
    },
    {
      q: 'How do I get started with Local SEO?',
      a: 'Contact me with details about your business, target location areas, and current website URL. I will review your site and discuss a practical optimization plan.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Optimize page structure, metadata, and technical foundations specifically for Squarespace websites.',
      icon: Search,
    },
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Build a custom Squarespace website tailored around your brand and business objectives.',
      icon: Layout,
    },
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Modernize an outdated website with improved user experience and modern layouts.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your website refreshed, updated, and running securely over time.',
      icon: ShieldCheck,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Extend your website with clean CSS and JavaScript tailored specifically for your brand.',
      icon: Code2,
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
            { label: 'Local SEO' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  LOCAL SEO SERVICES
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Local SEO Services for Small Businesses
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  Help local clients discover your services in geographic search results through clean on-page optimization, structured location pages, LocalBusiness schema, and Google Business Profile alignment.
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
                  <span>Geographic Keywords • Location Schema • On-Page SEO • GBP Alignment</span>
                </div>
              </div>

              {/* Local SEO Signals Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#FBFBFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-md px-3 py-1 text-[11px] font-mono text-[#4B5563] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                      <span>local-search-signals</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  <div className="p-6 bg-[#FBFBFB] space-y-4">
                    <div className="text-center pb-2 border-b border-[#E5E7EB]">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Local SEO Signals Architecture
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Local Keyword Intent</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Mapped</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">LocalBusiness JSON-LD</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Structured</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">Location Page Structure</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Optimized</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-medium text-[#111827]">GBP Landing Page Linking</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Aligned</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1 border-t border-[#E5E7EB]">
                      [Image Asset: <code className="bg-white px-1 border rounded">local-seo-services.jpg</code> — Alt: Local SEO website optimization and local search strategy interface]
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
                WHY LOCAL SEO MATTERS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Connect With Prospective Clients In Your Local Area
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  When potential clients look for specialized services in their immediate region, search engines rely heavily on local relevance signals to determine which websites to show. A business with unclear address signals, generic title tags, or poorly structured pages can miss out on qualified local inquiries.
                </p>
                <p>
                  Local SEO establishes clear geographical context for search engines. By optimizing website metadata, creating helpful location-specific pages, embedding LocalBusiness schema, and aligning on-page content with Google Business Profile information, your website clearly communicates who you serve and where you operate.
                </p>
                <p>
                  My approach focuses on solid, transparent on-page Local SEO principles—avoiding black-hat tactics, doorway page schemes, or deceptive claims—to build a stable digital foundation for your local business.
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
                What&apos;s Included In Local SEO Services
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

        {/* WHO I HELP SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                TARGET AUDIENCE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Who Can Benefit From Local SEO?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoIHelp.map((item, idx) => {
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

        {/* LOCAL SEO WEBSITE STRUCTURE SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SITE ARCHITECTURE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Local SEO Website Structure Architecture
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                A logical website architecture helps search engines parse the hierarchy between your primary brand offerings and regional service areas.
              </p>
            </div>

            {/* Architecture Visual Tree */}
            <div className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 space-y-6">
              <div className="flex justify-center">
                <div className="bg-white border-2 border-[#0F766E] text-[#0F766E] font-bold px-6 py-3 rounded-lg text-sm shadow-xs flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span>Homepage (Brand & Core Local Hub)</span>
                </div>
              </div>

              <div className="w-0.5 h-6 bg-[#0F766E]/40 mx-auto"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="space-y-4 bg-white border border-[#E5E7EB] p-5 rounded-xl">
                  <div className="font-heading font-bold text-sm text-[#111827] flex items-center gap-2 pb-2 border-b border-[#E5E7EB]">
                    <Briefcase className="w-4 h-4 text-[#0F766E]" />
                    <span>Main Service Pages</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#4B5563]">
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#0F766E]" />
                      <span>Primary Service A (e.g. Residential Design)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#0F766E]" />
                      <span>Primary Service B (e.g. Commercial Consulting)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 bg-white border border-[#E5E7EB] p-5 rounded-xl">
                  <div className="font-heading font-bold text-sm text-[#111827] flex items-center gap-2 pb-2 border-b border-[#E5E7EB]">
                    <MapPin className="w-4 h-4 text-[#0F766E]" />
                    <span>Location & Service Area Pages</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#4B5563]">
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#0F766E]" />
                      <span>City / Region Hub 1</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#0F766E]" />
                      <span>City / Region Hub 2</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-0.5 h-6 bg-[#0F766E]/40 mx-auto"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl text-center">
                  <span className="font-heading font-bold text-xs text-[#111827]">Supporting Content / Case Studies</span>
                  <p className="text-[11px] text-[#4B5563] mt-1">Local project showcases & local FAQs</p>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl text-center">
                  <span className="font-heading font-bold text-xs text-[#111827]">Contact & Conversion Pages</span>
                  <p className="text-[11px] text-[#4B5563] mt-1">Clear NAP details & localized inquiry forms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION PAGE STRATEGY SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                ETHICAL STRATEGY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                High-Quality Location Pages vs. Low-Quality Spam
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-xl shadow-xs">
                <p>
                  Some outdated SEO practices involve generating dozens of nearly identical &quot;doorway&quot; pages where only the city name is swapped out. Modern search engine algorithms penalize thin, programmatic duplicate pages because they offer no real value to human visitors.
                </p>
                <p>
                  My location page strategy focuses strictly on creating genuinely useful regional landing pages. Each location page highlights real project context, area-specific services, client testimonials from that region, local contact details, and relevant geographic directions.
                </p>
                <p>
                  By prioritizing quality over automated quantity, your website builds sustainable regional authority without risking indexing penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ON-PAGE LOCAL SEO DEEP DIVE */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                ON-PAGE ELEMENTS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Key On-Page Local SEO Factors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">Title Tags & Meta Descriptions</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Incorporating primary local service terms and geographic indicators cleanly within character limits.
                </p>
              </div>
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">Structured Heading Hierarchy</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Maintaining logical H1, H2, and H3 structures that naturally introduce regional service details.
                </p>
              </div>
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">NAP Footer Consistency</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Displaying standardized Name, Address, and Phone numbers in accessible HTML across every page footer.
                </p>
              </div>
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">Descriptive Alt Text</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Labeling project photos with relevant, descriptive text reflecting actual work performed in the area.
                </p>
              </div>
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">Internal Linking Networks</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Connecting regional service pages logically to main service categories and case studies.
                </p>
              </div>
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <h3 className="font-heading font-bold text-base text-[#111827]">Clear Contact Pathways</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Ensuring local visitors can easily find inquiry forms, click-to-call phone buttons, and email links.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEMA & GOOGLE BUSINESS PROFILE SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Schema Block */}
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  STRUCTURED DATA
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  LocalBusiness Schema Markup
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  JSON-LD LocalBusiness schema provides search engines with standardized machine-readable data about your business type, address, telephone number, geo-coordinates, operating hours, and service areas. Correct markup reduces ambiguity around your geographic location without making exaggerated ranking promises.
                </p>
              </div>

              {/* GBP Alignment Block */}
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  GOOGLE BUSINESS PROFILE
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  Google Business Profile Alignment
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Your website and Google Business Profile work together to reinforce local authority. I ensure your website landing pages match your business profile name, primary category, physical address or service area definitions, and official website link for consistent geographic signals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  THE PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Practical Local SEO Process
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
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#0F766E]/40 transition-colors"
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

        {/* LOCAL SEO VS GENERAL SEO COMPARISON */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                COMPARISON
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Local SEO vs. General SEO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                  LOCAL SEO
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  Geographic & Local Intent Focus
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Targets potential clients searching in specific cities or service areas. Focuses on local search signals, location pages, LocalBusiness schema, and Google Business Profile consistency.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-4">
                <span className="text-xs font-mono font-bold text-[#4B5563] bg-[#FBFBFB] px-2.5 py-1 rounded border border-[#E5E7EB]">
                  GENERAL SEO
                </span>
                <h3 className="font-heading font-bold text-xl text-[#111827]">
                  National & Non-Geographic Focus
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Targets broad, location-independent keywords across national or global audiences. Focuses on site-wide technical health, non-geographic content marketing, and broad domain authority.
                </p>
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
                Other Web Design & SEO Services
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
                LOCAL SEO FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Local SEO Services
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
                GROW YOUR LOCAL PRESENCE
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Ready to Improve Your Local Search Visibility?
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Share your website URL and target geographic service areas. We can evaluate your current local search setup and plan practical optimizations.
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
