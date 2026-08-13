import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CaseStudyCard, { CaseStudyData } from '@/components/CaseStudyCard';
import {
  ArrowRight,
  Target,
  FileCheck2,
  CheckCircle2,
  TrendingUp,
  Layout,
  Search,
  Code2,
  RefreshCw,
  Wrench,
  ShieldCheck,
  MapPin,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design Case Studies | Md. Shohan Islam',
  description:
    'Explore detailed Squarespace web design case studies covering website strategy, redesign, SEO structure, custom code, UX improvements and performance considerations.',
  alternates: {
    canonical: 'https://shohan.allservix.com/case-studies',
  },
  openGraph: {
    title: 'Squarespace Web Design Case Studies | Md. Shohan Islam',
    description:
      'Explore detailed Squarespace web design case studies covering website strategy, redesign, SEO structure, custom code, UX improvements and performance considerations.',
    url: 'https://shohan.allservix.com/case-studies',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design Case Studies | Md. Shohan Islam',
    description:
      'Explore detailed Squarespace web design case studies covering website strategy, redesign, SEO structure, custom code, UX improvements and performance considerations.',
  },
};

export default function CaseStudiesPage() {
  const caseStudiesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://shohan.allservix.com/case-studies#webpage',
        url: 'https://shohan.allservix.com/case-studies',
        name: 'Squarespace Web Design Case Studies | Md. Shohan Islam',
        description:
          'Explore detailed Squarespace web design case studies covering website strategy, redesign, SEO structure, custom code, UX improvements and performance considerations.',
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
              name: 'Case Studies',
              item: 'https://shohan.allservix.com/case-studies',
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        name: 'Squarespace Web Design Case Studies',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Case Study Demonstration 01 - Professional Services Website',
            url: 'https://shohan.allservix.com/case-studies',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case Study Demonstration 02 - Coach & Consultant Website',
            url: 'https://shohan.allservix.com/case-studies',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Case Study Demonstration 03 - Local Service Business Website',
            url: 'https://shohan.allservix.com/case-studies',
          },
        ],
      },
    ],
  };

  const caseStudyGrid: CaseStudyData[] = [
    {
      id: '01',
      title: 'Red Oak Financial Group — Squarespace Web Design',
      industry: 'Financial & Wealth Management Services',
      imageRef: 'red-oak-financial-group-squarespace-website.jpg',
      challenge:
        'The client required a clean, trustworthy website presence on Squarespace to present financial planning and wealth management services to prospective B2B and private clients.',
      goals:
        'Establish a professional digital identity, structure complex financial offerings into easy-to-digest service pages, and implement proper on-page SEO.',
      strategy:
        'Organized content into a clear page hierarchy, prioritized high-value service offerings, and optimized site layout for desktop and mobile devices.',
      designDecisions:
        'Styled with high-contrast typography, clean neutral background space, structured CTA buttons, and dedicated service sections.',
      seoDecisions:
        'Configured semantic heading structures (H1, H2, H3), meta titles, meta descriptions, canonical tags, and structured schema data.',
      technicalImplementation:
        'Integrated custom CSS refinements for mobile layout spacing, touch-friendly navigation, and secure contact form integrations in Squarespace 7.1.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Squarespace SEO', 'Responsive UX'],
    },
    {
      id: '02',
      title: 'Rick Smith Golf — Personal Brand & Academy Website',
      industry: 'Sports & Personal Branding',
      imageRef: 'rick-smith-golf-squarespace-website.jpg',
      challenge:
        'Present world-renowned golf instructor Rick Smith’s academies, instructional media, and brand philosophy in an organized, mobile-friendly web layout.',
      goals:
        'Showcase academy programs, highlight media features, streamline inquiry pathways, and maintain a high standard of visual presentation.',
      strategy:
        'Built an integrated website structure uniting academy program descriptions, media highlights, and brand storytelling.',
      designDecisions:
        'Responsive Squarespace layout with structured content sections, clear visual hierarchy, and readable typography across all device screens.',
      seoDecisions:
        'On-page SEO setup including title tags, meta descriptions, semantic headings, and clean URL structures.',
      technicalImplementation:
        'Squarespace custom styling and fluid container layout adjustments for video and media displays.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Personal Branding', 'Squarespace SEO'],
    },
    {
      id: '03',
      title: 'Brilliant Event Planning — Luxury Wedding & Event Planning',
      industry: 'Luxury Event & Wedding Planning',
      imageRef: 'brilliant-event-planning-squarespace-website.jpg',
      challenge:
        'A high-end wedding planning firm needed an elegant Squarespace website reflecting their luxury brand aesthetic and portfolio of bespoke events.',
      goals:
        'Display high-resolution event galleries, streamline consultation inquiries, and rank organically for luxury wedding keywords.',
      strategy:
        'Structured photo galleries by event type, integrated custom CSS styling for refined brand aesthetics, and optimized on-page SEO metadata.',
      designDecisions:
        'Used generous negative space, sophisticated typography pairing, subtle color palettes, and structured gallery grids.',
      seoDecisions:
        'Targeted location-specific and luxury event planning search queries with optimized meta tags, H2 headings, and schema markup.',
      technicalImplementation:
        'Custom Squarespace CSS for gallery layout enhancements and custom form styling.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Custom CSS Styling', 'Luxury Branding'],
    },
    {
      id: '04',
      title: 'Reflections Perfection — Local Mobile Car Detailing',
      industry: 'Automotive & Local Services',
      imageRef: 'reflections-perfection-squarespace-website.jpg',
      challenge:
        'A local mobile auto detailing business in Franklin, TN needed a high-converting website to attract nearby vehicle owners and highlight service packages.',
      goals:
        'Build a mobile-first site highlighting detailing packages, Google reviews, and a clear online booking / contact pathway.',
      strategy:
        'Focused on Local SEO optimization, package transparency, service area listing, and prominent mobile CTA buttons.',
      designDecisions:
        'Bold high-contrast color scheme, distinct package cards, customer review highlights, and touch-optimized action buttons.',
      seoDecisions:
        'Local SEO optimization targeting Franklin, TN auto detailing keywords, LocalBusiness JSON-LD schema, and keyword-rich headings.',
      technicalImplementation:
        'Custom contact and quote request forms, mobile click-to-call integration, and fast image loading.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Local SEO', 'Conversion UX'],
    },
    {
      id: '05',
      title: 'KAN Consultancy — Strategic Management & Corporate Advisory',
      industry: 'Corporate Strategy & Business Advisory',
      imageRef: 'kan-consultancy-squarespace-website.jpg',
      challenge:
        'A corporate advisory firm required a professional web presence to communicate executive services, methodology, and corporate consultation packages.',
      goals:
        'Establish executive credibility, articulate service frameworks clearly, and provide structured inquiry options.',
      strategy:
        'Designed a clean B2B site architecture highlighting corporate practice areas, methodology steps, and client engagement models.',
      designDecisions:
        'Authoritative dark slate palette with clean white content sections, structured service matrices, and crisp typography.',
      seoDecisions:
        'Semantic heading structure, technical SEO optimization, structured organization schema, and clean page metadata.',
      technicalImplementation:
        'Squarespace 7.1 layout optimization with custom responsive adjustments for B2B mobile readers.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Redesign', 'Information Architecture', 'Custom Styling'],
    },
    {
      id: '06',
      title: 'Next Gen Wash Pros — Soft Wash & Pressure Washing',
      industry: 'Exterior Maintenance & Local Service',
      imageRef: 'next-gen-wash-pros-squarespace-website.jpg',
      challenge:
        'An exterior cleaning company needed a high-visibility website for soft washing and pressure washing services in their local service area.',
      goals:
        'Generate local residential and commercial leads, feature before-and-after project highlights, and rank for local cleaning searches.',
      strategy:
        'Created dedicated service pages for roof cleaning, house washing, and concrete sealing paired with local service area keyword targeting.',
      designDecisions:
        'Clean green and neutral aesthetic emphasizing fresh, professional exterior maintenance results.',
      seoDecisions:
        'Local keyword targeting, Geo-targeted meta tags, semantic H2/H3 headings, and clear service schema.',
      technicalImplementation:
        'Fast-loading responsive layout with instant online estimate request buttons.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Local SEO', 'Lead Generation'],
    },
    {
      id: '07',
      title: 'Peter Cowell — Executive Coaching & Personal Brand',
      industry: 'Executive Coaching & Personal Brand',
      imageRef: 'peter-cowell-squarespace-website.jpg',
      challenge:
        'An executive coach and consultant required a sleek personal brand website to present coaching programs, speaking topics, and published insights.',
      goals:
        'Position the client as a thought leader, organize coaching tiers, and capture high-value prospective executive leads.',
      strategy:
        'Crafted a personal brand architecture combining bio, speaking topics, coaching philosophy, and client contact flows.',
      designDecisions:
        'Refined dark green and gold visual accents, generous editorial typography spacing, and clear CTA callouts.',
      seoDecisions:
        'Personal brand SEO targeting executive coaching keywords, Person schema markup, and optimized page headers.',
      technicalImplementation:
        'Custom newsletter signup integration, mobile-optimized media layouts, and streamlined contact pathways.',
      outcome:
        'Outcome metrics are not publicly disclosed.',
      services: ['Squarespace Web Design', 'Squarespace SEO', 'Personal Branding'],
    },
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Analyzing client business goals, target audience search intent, existing site analytics, and competitive industry landscapes.',
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Defining site architecture, page sitemaps, key call-to-action paths, and primary/secondary keyword targeting strategy.',
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Crafting responsive wireframes, typography pairings, accessible color contrast ratios, and custom Squarespace visual layouts.',
    },
    {
      step: '04',
      title: 'Optimize',
      desc: 'Auditing page speed, image compressions, metadata tags, structured schema markup, and mobile touch interactions.',
    },
    {
      step: '05',
      title: 'Refine',
      desc: 'Rigorous cross-browser testing, accessibility validation, final quality assurance checks, and client hand-off documentation.',
    },
  ];

  const relatedServices = [
    { title: 'Squarespace Web Design', href: '/services/squarespace-web-design', icon: Layout },
    { title: 'Squarespace Website Redesign', href: '/services/squarespace-redesign', icon: RefreshCw },
    { title: 'Squarespace SEO', href: '/services/squarespace-seo', icon: Search },
    { title: 'Squarespace Custom Code', href: '/services/squarespace-custom-code', icon: Code2 },
    { title: 'Squarespace Bug Fixing', href: '/services/squarespace-bug-fixing', icon: Wrench },
    { title: 'Squarespace Website Maintenance', href: '/services/squarespace-maintenance', icon: ShieldCheck },
    { title: 'Local SEO', href: '/services/local-seo', icon: MapPin },
  ];

  const faqs = [
    {
      q: 'What is a website case study?',
      a: 'A website case study provides an in-depth breakdown of a web design project—explaining the initial business challenge, strategic approach, design decisions, technical implementation, and resulting outcomes.',
    },
    {
      q: 'What information is included in these case studies?',
      a: 'Each case study details the client industry background, core project challenge, strategic goals, typography and UI choices, SEO structure, custom CSS/JS implementations, and project takeaways.',
    },
    {
      q: 'Do case studies show real client results?',
      a: 'To maintain total transparency, demonstration case studies explicitly mark outcome metrics until verified client data is published. I never fabricate metrics or client statistics.',
    },
    {
      q: 'Can I request a similar website for my business?',
      a: 'Yes! If a specific case study aligns with your industry or business goals, we can use a similar strategic framework tailored specifically to your brand and audience.',
    },
    {
      q: 'Do you provide Squarespace redesigns as well as new builds?',
      a: 'Yes. Whether you are starting from scratch or need to overhaul an existing Squarespace site that isn’t converting, I offer complete design and redesign solutions.',
    },
    {
      q: 'Do your case study builds include SEO?',
      a: 'Every project includes fundamental technical and on-page SEO—including heading hierarchy, meta descriptions, image alt tags, canonical tags, and structured schemas.',
    },
    {
      q: 'Can you customize Squarespace beyond default templates?',
      a: 'Yes. I write custom CSS and JavaScript to implement tailored layouts, hover effects, interactive tabs, and unique UI components while maintaining core Squarespace ease-of-use.',
    },
    {
      q: 'How do I discuss my upcoming project?',
      a: 'You can reach out through the contact form or schedule a project consultation to share your site requirements, timeline, and goals.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Case Studies' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Strategy, Design & Optimization Studies</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                Squarespace Web Design Case Studies
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Welcome to the case study hub of Md. Shohan Islam. High-performing websites are the product of deliberate strategy, intuitive design execution, and technical search engine optimization. These detailed case studies reveal the underlying methodology behind successful Squarespace website projects—demonstrating how business challenges are analyzed, user experience pathways are structured, custom CSS enhancements are authored, and technical SEO foundations are established to deliver sustainable long-term value.
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
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] hover:text-[#0F766E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EDITORIAL CASE STUDY */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                FEATURED ANALYSIS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Featured Case Study Breakdown
              </h2>
              <p className="text-base text-[#4B5563]">
                An in-depth editorial examination of how strategy, custom code, and search engine optimization converge.
              </p>
            </div>

            {/* Featured Case Study Box */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#0F766E] bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                    Demonstration Case Study
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111827] mt-3">
                    B2B Professional Services Website Transformation
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Industry: Professional Services | Platform: Squarespace 7.1 & Fluid Engine
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Request A Consultation</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 6 Editorial Steps Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-2 p-5 bg-[#FBFBFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <Target className="w-4 h-4 text-[#0F766E]" />
                    <span>01. The Challenge</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    An established B2B consultancy operated on an obsolete 5-year-old site with broken mobile blocks, slow load speeds, and missing meta tags resulting in stagnant organic leads.
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#FBFBFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <FileCheck2 className="w-4 h-4 text-[#0F766E]" />
                    <span>02. The Strategy</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Mapped primary buyer intent keywords, simplified the navigation menu to 4 primary items, and established direct conversion pathways to the consultation booking form.
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#FBFBFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <Layout className="w-4 h-4 text-[#0F766E]" />
                    <span>03. The Design</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Designed an elegant neutral palette with high-contrast text, custom icon badges, clear section hierarchy, and fluid mobile screen responsiveness.
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#FBFBFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <Search className="w-4 h-4 text-[#0F766E]" />
                    <span>04. The SEO Foundation</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Structured H1-H3 heading trees, optimized page slug URLs, implemented compressed webp image assets, and injected structured JSON-LD ProfessionalService schemas.
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#FBFBFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <Code2 className="w-4 h-4 text-[#0F766E]" />
                    <span>05. Technical Implementation</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Authored clean, lightweight CSS snippets for custom button hover states, rounded card borders, and accessible accordion FAQs without third-party dependencies.
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#F0FDFA] rounded-xl border border-[#0F766E]/30">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                    <TrendingUp className="w-4 h-4 text-[#0F766E]" />
                    <span>06. The Outcome</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed italic">
                    Outcome metrics will be added after verified project data is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY GRID SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                DEMONSTRATION CASE STUDIES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Detailed Project Case Studies
              </h2>
              <p className="text-base text-[#4B5563]">
                Explore how specific project challenges were addressed through structured web design, redesign, and local SEO execution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudyGrid.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                METHODOLOGY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                How I Approach Website Projects
              </h2>
              <p className="text-base text-[#4B5563]">
                A disciplined 5-step engineering process designed to eliminate guesswork and deliver predictable quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {methodologySteps.map((m) => (
                <div
                  key={m.step}
                  className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                      Step {m.step}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#111827]">
                      {m.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO & PERFORMANCE AUDIT FACTORS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                QUALITY STANDARDS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Technical Audit & Quality Standards Evaluated
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Every Squarespace website build or redesign is subjected to strict technical criteria to ensure optimal rendering, search visibility, and maintainability over time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#111827]">
                  Information & SEO Architecture
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Evaluating logical sitemap grouping, clean URL slug patterns, heading hierarchy (H1-H3), internal linking strategies, and structured JSON-LD schemas.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#111827]">
                  Responsive UX & Accessibility
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Testing touch target dimensions (44px+ minimum), WCAG 2.1 AA text contrast compliance, keyboard navigation focus indicators, and fluid viewport layouts.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#111827]">
                  Performance & Clean Custom Code
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Optimizing webp visual asset compression, minimizing external script requests, and authoring modular, error-free CSS and JavaScript snippets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES SHOWCASE */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Services Featured In Case Studies
              </h2>
              <p className="text-base text-[#4B5563]">
                Explore the core Squarespace design and SEO services applied across these case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((srv, idx) => {
                const IconComp = srv.icon;
                return (
                  <Link
                    key={idx}
                    href={srv.href}
                    className="bg-white border border-[#E5E7EB] p-5 rounded-xl space-y-3 hover:border-[#0F766E] transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0F766E] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="font-heading font-bold text-sm text-[#111827] group-hover:text-[#0F766E] transition-colors">
                        {srv.title}
                      </div>
                    </div>
                    <div className="inline-flex items-center text-xs font-semibold text-[#0F766E]">
                      <span>View Service Details</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
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
                Case Study Questions
              </h2>
              <p className="text-base text-[#4B5563]">
                Common questions regarding project methodologies, case study documentation, and results verification.
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
                START A STRATEGIC BUILD
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Let&apos;s Build a Better Website
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Ready to transform your online presence with a strategic Squarespace website design, custom code enhancements, and search-optimized page architecture? Let&apos;s discuss your project goals.
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
