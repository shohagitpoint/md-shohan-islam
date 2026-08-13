import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  Search,
  FileText,
  Heading,
  Link2,
  Image as ImageIcon,
  Sliders,
  CheckCircle2,
  MapPin,
  Sparkles,
  Compass,
  FileCheck,
  ShieldCheck,
  Check,
  Layout,
  RefreshCw,
  Code2,
  Wrench,
  BarChart2,
  Globe,
  Database,
  Smartphone,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace SEO Services | Md. Shohan Islam',
  description:
    'Improve your Squarespace website\'s SEO foundations with on-page, technical and content-focused optimization from Md. Shohan Islam.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-seo',
  },
  openGraph: {
    title: 'Squarespace SEO Services | Md. Shohan Islam',
    description:
      'Practical SEO optimization for Squarespace websites, including on-page structure, metadata, internal linking and technical foundations.',
    url: 'https://shohan.allservix.com/services/squarespace-seo',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace SEO Services | Md. Shohan Islam',
    description:
      'Practical SEO optimization for Squarespace websites, including on-page structure, metadata, internal linking and technical foundations.',
  },
};

export default function SquarespaceSeoPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-seo/#service',
        name: 'Squarespace SEO Services',
        serviceType: 'Squarespace Search Engine Optimization',
        description:
          'Comprehensive on-page, technical, and structural SEO services for Squarespace websites to improve search crawlability and user experience.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-seo',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const seoAreas = [
    {
      num: '01',
      title: 'SEO Audit',
      desc: 'Identify technical, structural, and on-page opportunities to establish a clear optimization baseline.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Title Tags & Meta Descriptions',
      desc: 'Craft relevant, clear page title tags and meta descriptions aligned with user search intent.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Heading Structure',
      desc: 'Organize logical H1, H2, and H3 heading hierarchies so search engines and readers digest content easily.',
      icon: Heading,
    },
    {
      num: '04',
      title: 'URL Structure',
      desc: 'Review and refine page URL slugs for conciseness, relevance, and keyword clarity.',
      icon: Globe,
    },
    {
      num: '05',
      title: 'Internal Linking',
      desc: 'Connect related pages using helpful contextual anchor text to assist navigation and page discovery.',
      icon: Link2,
    },
    {
      num: '06',
      title: 'Image SEO',
      desc: 'Optimize image filenames, descriptive alt text, dimensions, and file sizes for fast loading and accessibility.',
      icon: ImageIcon,
    },
    {
      num: '07',
      title: 'Content Structure',
      desc: 'Format page sections and text layout to match search intent and improve overall scannability.',
      icon: FileCheck,
    },
    {
      num: '08',
      title: 'Technical SEO',
      desc: 'Verify crawlability, indexation settings, canonical tags, and XML sitemaps within Squarespace settings.',
      icon: Sliders,
    },
  ];

  const technicalAreas = [
    {
      title: 'Crawlability',
      desc: 'Ensure search engine bots can easily access and parse all core service and informational pages.',
      icon: Globe,
    },
    {
      title: 'Indexing',
      desc: 'Verify indexing configurations so important pages are indexed while duplicate tags are handled properly.',
      icon: Database,
    },
    {
      title: 'Canonical URLs',
      desc: 'Ensure accurate canonical tag references to prevent duplicate content issues across URL variations.',
      icon: Link2,
    },
    {
      title: 'XML Sitemap',
      desc: 'Confirm Squarespace auto-generated XML sitemaps accurately reflect your live page hierarchy.',
      icon: FileText,
    },
    {
      title: 'Robots.txt Configuration',
      desc: 'Review standard robots settings to allow appropriate crawling of public pages.',
      icon: ShieldCheck,
    },
    {
      title: 'Mobile Usability',
      desc: 'Test font legibility, button touch spacing, and fluid viewport scaling across smartphone devices.',
      icon: Smartphone,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      desc: 'Examine current page titles, metadata, heading hierarchies, URL structures, and technical signals.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Research',
      desc: 'Analyze business objectives, target audience requirements, and relevant search topic intent.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Optimize',
      desc: 'Implement on-page refinements, clean heading structures, descriptive meta tags, and image alt text.',
      icon: Sliders,
    },
    {
      step: '04',
      title: 'Connect',
      desc: 'Strengthen internal linking pathways to connect core service pages logically with supporting content.',
      icon: Link2,
    },
    {
      step: '05',
      title: 'Monitor & Improve',
      desc: 'Review search console indicators over time to identify ongoing content and structural opportunities.',
      icon: BarChart2,
    },
  ];

  const faqs = [
    {
      q: 'Is Squarespace good for SEO?',
      a: 'Yes. Squarespace provides built-in tools for meta titles, descriptions, clean URLs, SSL security, mobile responsiveness, and automatic XML sitemaps. When paired with structured content and proper heading hierarchy, Squarespace is well-suited for effective search optimization.',
    },
    {
      q: 'Can you do SEO for an existing Squarespace website?',
      a: 'Yes. I can audit and optimize your existing live Squarespace website directly within your account, refining meta tags, heading tags, internal linking, and image details without requiring a full redesign.',
    },
    {
      q: 'What does Squarespace SEO include?',
      a: 'Squarespace SEO includes on-page optimization (title tags, meta descriptions, H1-H3 headings, URL slugs), image optimization (alt text, file naming), contextual internal linking, content structuring, and technical verification.',
    },
    {
      q: 'Can you optimize my page titles and meta descriptions?',
      a: 'Yes. Every indexable page receives custom title tags and meta descriptions structured around page topic intent and concise brand messaging.',
    },
    {
      q: 'Can you improve my Squarespace website\'s headings?',
      a: 'Yes. I review and restructure heading tags so that each page contains exactly one H1 tag followed by logical H2 and H3 subheadings for clarity.',
    },
    {
      q: 'Can you improve internal linking?',
      a: 'Yes. Strategic internal links are added throughout service descriptions, case studies, and blog posts to help both visitors and search engines discover related content.',
    },
    {
      q: 'Can you optimize images for SEO?',
      a: 'Yes. Image file names are updated, descriptive alt text is added for accessibility and image search, and image sizes are checked for optimal loading.',
    },
    {
      q: 'Can you help with local SEO?',
      a: 'Yes. Local SEO adjustments include geographic keyword alignment, location-focused service page structuring, contact information consistency, and Google Business Profile integration.',
    },
    {
      q: 'How long does Squarespace SEO take?',
      a: 'Initial on-page and technical optimization is completed as a structured project. Search engines then gradually re-crawl and process changes over subsequent weeks.',
    },
    {
      q: 'Can you guarantee Google rankings?',
      a: 'No ethical SEO specialist can guarantee specific position #1 Google rankings. Search rankings depend on ongoing competition, domain authority, search algorithm updates, and external factors beyond anyone\'s direct control.',
    },
    {
      q: 'Do I need ongoing SEO?',
      a: 'While foundational SEO builds a strong baseline, ongoing content publishing, keyword monitoring, and periodic updates help maintain search visibility in competitive industries.',
    },
    {
      q: 'Can you audit my existing Squarespace website?',
      a: 'Yes. An initial SEO audit evaluates your site\'s current technical health, page structure, and metadata opportunities to establish an action plan.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Build a completely custom, responsive Squarespace website structured for conversion.',
      icon: Layout,
    },
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Modernize an outdated website with improved user experience and mobile layouts.',
      icon: RefreshCw,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Enhance geographic search presence to connect with prospective local clients.',
      icon: MapPin,
    },
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Add custom styling and interactive features using clean CSS and JavaScript.',
      icon: Code2,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your site updated, secure, and running smoothly with ongoing support.',
      icon: ShieldCheck,
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
            { label: 'Squarespace SEO' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE SEO
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Squarespace SEO Designed Around Your Website And Search Goals
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  I help improve Squarespace websites through practical SEO work covering page structure, metadata, content organization, internal linking, image optimization and technical foundations.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                  >
                    <span>Request An SEO Consultation</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
                  >
                    View My Services
                  </Link>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#4B5563] flex items-center gap-2 border-t border-[#E5E7EB]">
                  <Sparkles className="w-4 h-4 text-[#0F766E]" />
                  <span>On-Page SEO • Technical Foundations • Content Structure • Local SEO</span>
                </div>
              </div>

              {/* SEO Technical Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#FBFBFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-md px-3 py-1 text-[11px] font-mono text-[#4B5563] flex items-center gap-1">
                      <span className="text-[#0F766E]">seo-audit://</span>
                      <span>squarespace-structure</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#F0FDFA] via-white to-[#FBFBFB] space-y-4">
                    <div className="text-center pb-2 border-b border-[#E5E7EB]">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Technical SEO Framework
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-semibold text-[#111827]">Meta Title & Description</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Configured</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-semibold text-[#111827]">Heading Hierarchy (H1/H2/H3)</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Structured</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-semibold text-[#111827]">Contextual Internal Links</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Connected</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] flex items-center justify-between">
                        <span className="font-semibold text-[#111827]">Image Alt Text & Compression</span>
                        <span className="text-[10px] font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded">Optimized</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1 border-t border-[#E5E7EB]">
                      [Image Asset: <code className="bg-white px-1 border rounded">squarespace-seo-services.jpg</code> — Alt: Squarespace website SEO audit and technical structure visualization]
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEO INTRODUCTION SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHY SQUARESPACE SEO MATTERS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                SEO Starts With A Website Search Engines Can Understand
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Search engine optimization is not about tricking algorithms or stuffing pages with repetitive keywords. Effective SEO relies on creating a well-structured website that search engines can easily crawl, understand, and index while providing genuine value to human visitors.
                </p>
                <p>
                  Clear page titles and meta descriptions summarize page topics accurately in search results. Logical heading structures (a single H1 per page supported by organized H2 and H3 tags) establish clear content relationships. Contextual internal links help search crawlers discover deeper pages and guide users to relevant topics naturally.
                </p>
                <p>
                  Image optimization—including descriptive alt tags, proper file names, and appropriate image sizing—improves accessibility and page loading performance. Combined with fluid mobile usability and verified technical settings, foundational SEO creates a clean starting point for long-term search visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO SERVICE AREAS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHAT I OPTIMIZE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Squarespace SEO Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoAreas.map((item) => {
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

        {/* ON-PAGE SEO SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                ON-PAGE SEO
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Build Each Page Around A Clear Search Intent
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Every important page on your Squarespace website should serve a distinct purpose and align with what prospective clients are actively searching for. On-page SEO involves identifying the primary search topic for each page and structuring the title tag, meta description, H1 heading, and supporting subheadings naturally around that concept.
                </p>
                <p>
                  Instead of forcing keywords awkwardly into sentences, the focus remains on writing helpful, informative copy that answers visitor questions directly. Descriptive URL slugs, image alt attributes, and contextual internal links reinforce page context while keeping the reading experience clear and engaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SEO SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                TECHNICAL SEO
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Strong Technical Foundations Behind The Content
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {technicalAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center mb-2">
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

            <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-4 rounded-lg text-xs text-[#4B5563] italic max-w-3xl">
              Note: Technical SEO ensures search engine crawlers can access and interpret site content efficiently. Technical completeness supports search performance but operates alongside content relevance and domain authority.
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING / SITE ARCHITECTURE SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SITE ARCHITECTURE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Connect Related Pages With Purpose
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed">
                Internal linking creates a logical web of connection across your website. By connecting main hub pages down to specific service offerings, portfolio items, and contact steps, search engine crawlers can understand how topics relate to one another while users easily find deeper information.
              </p>

              {/* Site Architecture Map Box */}
              <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3 font-mono text-xs">
                <div className="text-[#0F766E] font-bold">Homepage (/)</div>
                <div className="pl-4 text-[#4B5563]">↳ Services Overview (/services)</div>
                <div className="pl-8 text-[#111827] font-semibold">↳ Individual Service Pages (/services/squarespace-seo, etc.)</div>
                <div className="pl-12 text-[#4B5563]">↳ Portfolio / Case Studies (/portfolio, /case-studies)</div>
                <div className="pl-16 text-[#0F766E] font-bold">↳ Direct Contact Pathway (/contact)</div>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                Using descriptive contextual anchor text within page paragraphs guides prospective clients naturally toward the next relevant step in their decision journey.
              </p>
            </div>
          </div>
        </section>

        {/* LOCAL SEO SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                LOCAL SEARCH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Squarespace SEO For Local Businesses
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  For service businesses catering to specific geographic locations, local SEO helps connect your website with prospective clients searching nearby. Local search optimization focuses on establishing geographic relevance across page headings, metadata, and service descriptions.
                </p>
                <p>
                  Aligning your website details with your Google Business Profile, ensuring consistent name, address, and contact information, and creating location-relevant content helps signal your primary service areas to search engines clearly.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/services/local-seo"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Explore Local SEO Services →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  MY SEO PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Practical Squarespace SEO Process
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Request Consultation</span>
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

        {/* SEO VS RANKINGS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#0F766E]" />
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  A REALISTIC APPROACH
                </span>
              </div>
              
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                SEO Is A Process, Not A Ranking Guarantee
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed bg-[#FBFBFB] border border-[#E5E7EB] p-6 sm:p-8 rounded-xl">
                <p>
                  Professional SEO strengthens your website&apos;s technical health, content structure, and search engine crawlability. However, search rankings are influenced by many external factors including industry competition, domain history, competitor activity, and search engine algorithm updates.
                </p>
                <p>
                  No ethical SEO specialist can promise or guarantee specific #1 rankings on Google. True optimization focuses on building a solid, search-friendly foundation, providing accurate business details, and creating helpful content that serves your target audience over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
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
                    className="group bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:border-[#0F766E]/50 hover:shadow-xs transition-all"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
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

        {/* SEO FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SQUARESPACE SEO FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Squarespace SEO
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0F766E]/40 transition-colors [&[open]]:border-[#0F766E]/50 [&[open]]:bg-white [&[open]]:shadow-xs"
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

        {/* FINAL SEO CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FBFBFB] to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                READY TO IMPROVE YOUR SEO?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Let&apos;s Identify The SEO Opportunities On Your Squarespace Website
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Tell me about your website, your target audience and what you want to improve. We can identify practical SEO priorities based on your current site and goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Request An SEO Consultation</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  View Squarespace Services
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
