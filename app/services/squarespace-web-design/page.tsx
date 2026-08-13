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
  Layers,
  Smartphone,
  MousePointerClick,
  Target,
  Search,
  Zap,
  CheckCircle2,
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
  Building2,
  UserCheck,
  Palette,
  Sliders,
  Code2,
  Check,
  Compass,
  PenTool,
  SlidersHorizontal,
  FileSearch,
  Sparkles,
  RefreshCw,
  Wrench,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design Services | Md. Shohan Islam',
  description:
    'Professional Squarespace web design services by Md. Shohan Islam. Create a responsive, user-friendly website with thoughtful design, SEO-aware structure and clear conversion paths.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-web-design',
  },
  openGraph: {
    title: 'Squarespace Web Design Services | Md. Shohan Islam',
    description:
      'Professional Squarespace websites designed around your brand, audience and business goals.',
    url: 'https://shohan.allservix.com/services/squarespace-web-design',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design Services | Md. Shohan Islam',
    description:
      'Professional Squarespace websites designed around your brand, audience and business goals.',
  },
};

export default function SquarespaceWebDesignPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-web-design/#service',
        name: 'Squarespace Web Design Services',
        serviceType: 'Squarespace Web Design',
        description:
          'Custom, responsive Squarespace website design incorporating strategic layout architecture, clear user experience, and built-in SEO foundations.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-web-design',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const includedFeatures = [
    {
      num: '01',
      title: 'Strategic Page Structure',
      desc: 'Plan pages and navigation around your audience, content priorities and business objectives.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Custom Visual Direction',
      desc: 'Create a visual style that reflects your brand identity instead of relying on generic templates.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Responsive Design',
      desc: 'Ensure the website works fluidly across desktop monitors, tablet screens, and mobile phones.',
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'Clear User Experience',
      desc: 'Organize content and page hierarchy so visitors can find key information effortlessly.',
      icon: MousePointerClick,
    },
    {
      num: '05',
      title: 'Conversion-Focused Layouts',
      desc: 'Place calls to action and core messages where they naturally support visitor decision-making.',
      icon: Target,
    },
    {
      num: '06',
      title: 'SEO-Aware Structure',
      desc: 'Build pages with logical headings, internal links, metadata, and search-friendly markup.',
      icon: Search,
    },
    {
      num: '07',
      title: 'Performance Considerations',
      desc: 'Optimize images, layouts, and scripts to support a fast and responsive user experience.',
      icon: Zap,
    },
    {
      num: '08',
      title: 'Launch Preparation',
      desc: 'Review site settings, test form submissions and links across devices, and prepare for launch.',
      icon: CheckCircle2,
    },
  ];

  const clientTypes = [
    {
      title: 'Small Businesses',
      desc: 'Establish a credible online presence that clearly communicates services and captures customer inquiries.',
      icon: Building2,
    },
    {
      title: 'Professional Services',
      desc: 'Build client trust with structured service pages, clear credentials, and streamlined contact paths.',
      icon: Briefcase,
    },
    {
      title: 'Coaches & Consultants',
      desc: 'Showcase expertise, highlight advisory packages, and simplify appointment or consultation booking.',
      icon: GraduationCap,
    },
    {
      title: 'Entrepreneurs',
      desc: 'Turn new venture ideas into professionally designed websites ready to launch and test in the market.',
      icon: Rocket,
    },
    {
      title: 'Startups',
      desc: 'Present product value propositions clearly with modern, responsive layouts built for growth.',
      icon: Users,
    },
    {
      title: 'Personal Brands',
      desc: 'Highlight portfolio work, media appearances, and thought leadership with tailored personal websites.',
      icon: UserCheck,
    },
  ];

  const sqFeatures = [
    {
      title: 'Responsive Layouts',
      desc: 'Fluid Engine grid controls ensure custom page designs remain responsive across all screen sizes.',
    },
    {
      title: 'Visual Content Management',
      desc: 'Intuitive visual editor allowing site owners to update text, images, and blog content easily.',
    },
    {
      title: 'Built-in Editing Tools',
      desc: 'Integrated layout controls, styling blocks, and media managers streamline ongoing updates.',
    },
    {
      title: 'SEO Configuration Options',
      desc: 'Built-in fields for meta titles, descriptions, clean URLs, and automatic XML sitemap generation.',
    },
    {
      title: 'Custom CSS & JS Possibilities',
      desc: 'Ability to inject targeted custom styling and interactive scripts when built-in settings are limited.',
    },
    {
      title: 'Easy Ongoing Content Updates',
      desc: 'Simple backend management eliminates dependence on developers for everyday content edits.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand your business goals, target audience, brand assets, and primary website requirements.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Structure',
      desc: 'Define sitemap, page navigation, content priority hierarchy, and core user journey flows.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Develop the visual direction, color scheme, typography system, and responsive page layouts.',
      icon: PenTool,
    },
    {
      step: '04',
      title: 'Build & Optimize',
      desc: 'Implement the website on Squarespace, applying custom code, responsive tweaks, and SEO settings.',
      icon: SlidersHorizontal,
    },
    {
      step: '05',
      title: 'Review & Launch',
      desc: 'Test functionality across browsers and screen sizes, complete final refinements, and launch.',
      icon: Rocket,
    },
  ];

  const portfolioPreviews = [
    {
      id: '01',
      title: 'Red Oak Financial Group',
      industry: 'Financial & Wealth Advisory',
      type: 'Squarespace Web Design & SEO',
      desc: 'Custom Squarespace 7.1 build for financial planning, structured for client trust, service clarity, and appointment bookings.',
      href: '/case-studies',
      imageRef: 'red-oak-financial-group-squarespace-website.jpg',
    },
    {
      id: '02',
      title: 'Rick Smith Golf',
      industry: 'Sports & Personal Brand',
      type: 'Squarespace Design & Personal Branding',
      desc: 'High-impact website for world-renowned golf coach Rick Smith, showcasing instruction academies and media features.',
      href: '/portfolio',
      imageRef: 'rick-smith-golf-squarespace-website.jpg',
    },
    {
      id: '03',
      title: 'Brilliant Event Planning',
      industry: 'Luxury Weddings & Events',
      type: 'Squarespace Custom Code & Visual Design',
      desc: 'Editorial website layout for luxury wedding and event design with custom CSS styling and interactive inquiry workflows.',
      href: '/portfolio',
      imageRef: 'brilliant-event-planning-squarespace-website.jpg',
    },
  ];

  const valueProps = [
    {
      num: '01',
      title: 'Business-Focused Design',
      desc: 'Every layout decision is made to support your business objectives, brand positioning, and audience needs.',
    },
    {
      num: '02',
      title: 'SEO-Aware Structure',
      desc: 'Search best practices—from headings to metadata—are integrated directly into the design process.',
    },
    {
      num: '03',
      title: 'Responsive User Experience',
      desc: 'Websites are engineered to deliver a seamless, intuitive experience on desktop, tablet, and mobile devices.',
    },
    {
      num: '04',
      title: 'Clear Communication',
      desc: 'Direct, transparent collaboration with structured feedback cycles from initial discovery to website launch.',
    },
  ];

  const faqs = [
    {
      q: 'What does Squarespace web design include?',
      a: 'Squarespace web design includes sitemap planning, custom layout design, typography and color configuration, responsive mobile styling, content formatting, fundamental SEO setup (metadata, heading hierarchy), and launch testing.',
    },
    {
      q: 'Can you create a completely new Squarespace website?',
      a: 'Yes. I build completely new custom Squarespace websites tailored to your brand, target audience, and business goals, ensuring everything is set up properly from the start.',
    },
    {
      q: 'Can you work with my existing Squarespace template?',
      a: 'Yes. If you already have a Squarespace 7.0 or 7.1 website, I can work within your existing setup to restructure pages, refresh visual design, and improve usability.',
    },
    {
      q: 'Can you customize a Squarespace website?',
      a: 'Yes. While Squarespace provides robust built-in design controls, I use custom CSS and JavaScript when necessary to implement unique layout features, custom animations, or tailored elements.',
    },
    {
      q: 'Will my Squarespace website work on mobile devices?',
      a: 'Yes. Every website I design is built responsively and tested across mobile phones, tablets, and desktop displays to ensure optimal readability and touch navigation.',
    },
    {
      q: 'Can you help with the website content?',
      a: 'Yes. I help organize and structure your provided copy, images, and media assets to ensure they flow logically and align with clear conversion paths.',
    },
    {
      q: 'Can you optimize my Squarespace website for SEO?',
      a: 'Yes. Fundamental SEO setup—such as clean page titles, meta descriptions, image alt text, URL slugs, and heading structures—is integrated into every web design project.',
    },
    {
      q: 'Can you migrate an existing website to Squarespace?',
      a: 'Yes. Migration requirements depend on your current platform, content volume, and functionality. We can discuss your existing website during discovery to plan a smooth transition.',
    },
    {
      q: 'How long does a Squarespace web design project take?',
      a: 'Project timelines vary depending on overall scope, page count, custom feature requirements, content readiness, and feedback turnaround times. Specific timelines are established during project planning.',
    },
    {
      q: 'Can you provide ongoing website support?',
      a: 'Yes. I offer ongoing Squarespace website maintenance and support services for periodic updates, content additions, and technical refinements after launch.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Modernize an existing website with improved structure, visual design, and mobile usability.',
      icon: RefreshCw,
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
      desc: 'Extend built-in capabilities with tailored CSS and JavaScript customizations.',
      icon: Code2,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Resolve layout problems, mobile issues, and custom code conflicts.',
      icon: Wrench,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your website updated, refined, and running smoothly with ongoing support.',
      icon: ShieldCheck,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Enhance local search presence to connect with customers in target areas.',
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
            { label: 'Squarespace Web Design' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE WEB DESIGN
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Professional Squarespace Web Design For Your Business
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  I design professional Squarespace websites that combine clear messaging, thoughtful visual design, responsive user experience and SEO-aware structure to help your business make a stronger impression online.
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
                  <span>Design • User Experience • SEO • Performance</span>
                </div>
              </div>

              {/* Browser Window Website Mockup Frame */}
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
                      <span>yourbrand.com</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  {/* Mockup Screen Visual Container */}
                  <div className="p-6 bg-gradient-to-br from-[#F0FDFA] via-white to-[#FBFBFB] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <div className="font-heading font-bold text-sm text-[#111827]">BRAND LOGO</div>
                      <div className="flex space-x-2 text-[10px] font-medium text-[#4B5563]">
                        <span className="text-[#0F766E]">Home</span>
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    <div className="py-6 space-y-3 text-center border-b border-[#E5E7EB]/60">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2 py-0.5 rounded border border-[#0F766E]/20">
                        Demonstration Layout
                      </span>
                      <div className="font-heading font-bold text-base text-[#111827]">
                        Custom Squarespace Layout Demonstration
                      </div>
                      <div className="text-xs text-[#4B5563] max-w-xs mx-auto">
                        Clean page hierarchy, high-contrast typography, and structured content sections.
                      </div>
                      <div className="inline-block bg-[#0F766E] text-white text-[10px] font-medium px-4 py-1.5 rounded">
                        Call To Action
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] text-center space-y-1">
                        <Layout className="w-4 h-4 text-[#0F766E] mx-auto" />
                        <div className="font-semibold text-[#111827]">Responsive Grid</div>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#E5E7EB] text-center space-y-1">
                        <Search className="w-4 h-4 text-[#0F766E] mx-auto" />
                        <div className="font-semibold text-[#111827]">SEO Foundations</div>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1">
                      [Image Asset: <code className="bg-white px-1 border rounded">squarespace-web-design-service.jpg</code> — Alt: Professional Squarespace website design displayed on a desktop screen]
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
                A WEBSITE BUILT AROUND YOUR BUSINESS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Your Website Should Do More Than Look Good
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  First impressions happen rapidly online. When potential clients visit your website, they form an immediate judgment about your credibility, professionalism, and whether your offerings match their needs. A visually pleasing template alone is rarely enough if the underlying structure is confusing or difficult to navigate.
                </p>
                <p>
                  Effective Squarespace web design centers on clarity. Visitors must understand who you are, what service you provide, and how to contact or hire you without friction. Logical page architecture, clear typography, and well-placed calls to action guide users through your website naturally.
                </p>
                <p>
                  Mobile responsiveness and search visibility must also be part of the build from day one. With a significant portion of web traffic originating on mobile devices, ensuring smooth phone and tablet navigation is essential. Furthermore, structuring page headings, meta descriptions, and image assets properly lays the groundwork for search engine discovery.
                </p>
                <p>
                  Squarespace provides a versatile, reliable platform for small businesses, consultants, and service providers seeking a clean, maintainable web presence. My goal is to build a practical website tailored specifically around your brand and business objectives.
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
                WHAT&apos;S INCLUDED
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What You Get With A Squarespace Web Design Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3 hover:border-[#0F766E]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center">
                        <Icon className="w-4 h-4" aria-hidden="true" />
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

        {/* WHO THIS SERVICE IS FOR SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHO I WORK WITH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Squarespace Web Design For Different Types Of Businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientTypes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
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

        {/* CUSTOM VS TEMPLATE SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                DESIGN APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                A Website Designed Around Your Brand
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Off-the-shelf website templates offer a convenient starting point, but they rarely reflect the specific needs or positioning of an individual business. Relying solely on default template layouts often results in generic page flows, poor spacing hierarchy, and awkward content placement.
                </p>
                <p>
                  A customized Squarespace approach adapts the platform to your requirements. This involves refining typography pairings, establishing consistent spacing scales, styling color systems that match your brand identity, and configuring custom section layouts. When standard built-in controls reach their limits, clean custom CSS and JavaScript snippets can be introduced to tailor specific visual elements or interactive behaviors without adding unnecessary technical complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SQUARESPACE FEATURES SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHY SQUARESPACE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                A Practical Platform For Modern Business Websites
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {sqFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-2 shadow-xs"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                    <Check className="w-4 h-4" />
                    <span>0{idx + 1}</span>
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

            <div className="bg-white border border-[#E5E7EB] p-4 rounded-lg text-xs text-[#4B5563] italic max-w-3xl">
              Note: The right website platform depends on each project&apos;s specific requirements, functionality, and long-term business goals.
            </div>
          </div>
        </section>

        {/* THE PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  HOW THE PROJECT WORKS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Clear Squarespace Web Design Process
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
                        <span className="text-xs font-mono font-bold text-[#0F766E] bg-white px-2 py-0.5 rounded border border-[#0F766E]/20">
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

        {/* SEO & CONTENT SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SEO-AWARE DESIGN
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Built With Search Visibility In Mind
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  A well-designed website should be structured so that search engine crawlers can index content effectively. Integrating SEO considerations during design ensures that heading hierarchies (H1, H2, H3), meta titles, descriptions, and descriptive URL slugs are configured correctly from the start.
                </p>
                <p>
                  Additional technical factors—such as image alt tags, mobile usability, page loading speed, and structured data schema—help search engines understand your website&apos;s context. Please note that search engine rankings are influenced by many ongoing factors; foundational technical setup provides a solid starting point upon which long-term SEO strategy builds.
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

        {/* CUSTOMIZATION SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                WHEN STANDARD FEATURES AREN&apos;T ENOUGH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Extend Squarespace When Your Design Needs More
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed">
                While built-in Squarespace section blocks handle standard content well, certain brand guidelines call for specialized layout tweaks, custom font styling, refined hover states, or unique interactive components. When required, lightweight custom CSS and JavaScript are implemented cleanly to achieve these details without sacrificing page performance or stability.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/squarespace-custom-code"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Explore Squarespace Custom Code →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO PREVIEW SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  SELECTED WORK
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  See The Design Approach In Practice
                </h2>
              </div>
              <div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioPreviews.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0F766E]/40 transition-all duration-200 group shadow-xs"
                >
                  <div>
                    <div className="relative w-full h-[220px] bg-[#F1F5F9] border-b border-[#E5E7EB] overflow-hidden group/img">
                      <Image
                        src={`/images/${proj.imageRef}`}
                        alt={`${proj.title} Squarespace Website - Md. Shohan Islam`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                        <span className="text-[10px] font-semibold text-[#0F766E] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#0F766E]/20 shadow-2xs">
                          {proj.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <div className="text-xs font-semibold text-[#0F766E]">{proj.industry}</div>
                      <h3 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#0F766E] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={proj.href}
                      className="inline-flex items-center text-xs font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                WHY CHOOSE THIS SERVICE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                A Website Built Around Your Goals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((item) => (
                <div
                  key={item.num}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3"
                >
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#E5E7EB] w-max block">
                    {item.num}
                  </span>
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

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SQUARESPACE WEB DESIGN FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Common Questions About Squarespace Web Design
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

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                READY TO BUILD?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Let&apos;s Create A Squarespace Website That Works For Your Business
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Tell me about your business, your current website and what you want to improve. I&apos;ll help you identify the right approach for your Squarespace project.
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
                  View My Portfolio
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
