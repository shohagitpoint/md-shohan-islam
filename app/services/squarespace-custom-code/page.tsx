import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  Code2,
  FileCode2,
  Smartphone,
  Navigation,
  Sparkles,
  MousePointerClick,
  SlidersHorizontal,
  Palette,
  Search,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
  Sliders,
  Wrench,
  Layout,
  RefreshCw,
  Compass,
  FileCheck,
  MapPin,
  Check,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Custom Code Services | Md. Shohan Islam',
  description:
    'Customize your Squarespace website with clean CSS, JavaScript and front-end code solutions for design improvements, functionality and responsive experiences.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-custom-code',
  },
  openGraph: {
    title: 'Squarespace Custom Code Services | Md. Shohan Islam',
    description:
      'Custom CSS and JavaScript solutions for Squarespace websites that need more flexibility, functionality or visual refinement.',
    url: 'https://shohan.allservix.com/services/squarespace-custom-code',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Custom Code Services | Md. Shohan Islam',
    description:
      'Custom CSS and JavaScript solutions for Squarespace websites that need more flexibility, functionality or visual refinement.',
  },
};

export default function SquarespaceCustomCodePage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-custom-code/#service',
        name: 'Squarespace Custom Code Services',
        serviceType: 'Squarespace Custom CSS & JavaScript Development',
        description:
          'Targeted custom CSS, JavaScript, and front-end code customizations for Squarespace websites to achieve custom visual styling, responsive UI adjustments, and tailored interactions.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-custom-code',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const customizableSolutions = [
    {
      num: '01',
      title: 'Custom CSS',
      desc: 'Refine typography scales, spacing margins, borders, button hover states, and custom visual accents.',
      icon: Palette,
    },
    {
      num: '02',
      title: 'Responsive Styling',
      desc: 'Adjust specific section layouts across desktop monitors, tablet viewports, and mobile phone displays.',
      icon: Smartphone,
    },
    {
      num: '03',
      title: 'Custom Navigation',
      desc: 'Tailor navigation bars, dropdown menus, and mobile header interactions for improved browsing fluidity.',
      icon: Navigation,
    },
    {
      num: '04',
      title: 'Interactive Elements',
      desc: 'Add lightweight front-end JavaScript behavior, toggle components, or specialized UI micro-interactions.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Form Styling',
      desc: 'Improve the visual presentation, input fields, and submission buttons of supported Squarespace forms.',
      icon: FileCheck,
    },
    {
      num: '06',
      title: 'Button & CTA Styling',
      desc: 'Create distinct visual treatments, subtle animations, and prominent styling for key conversion triggers.',
      icon: MousePointerClick,
    },
    {
      num: '07',
      title: 'Section Customization',
      desc: 'Style specific Squarespace section layouts beyond standard built-in style panel controls.',
      icon: SlidersHorizontal,
    },
    {
      num: '08',
      title: 'Front-End Troubleshooting',
      desc: 'Inspect, isolate, and resolve existing code-related visual glitches, style overrides, or script issues.',
      icon: Wrench,
    },
  ];

  const scenarios = [
    'You need a visual treatment or custom design detail unavailable in standard editor panels.',
    'A specific page section requires precise responsive adjustment for tablet or mobile devices.',
    'A key button or conversion element requires custom hover states or visual styling.',
    'A front-end component requires specialized interactive behavior via lightweight JavaScript.',
    'An existing page layout needs subtle CSS refinements to match brand style guides.',
    'An existing custom code snippet is causing display bugs or style conflicts that need fixing.',
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Review the design requirement, target section, and existing Squarespace page structure.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Inspect',
      desc: 'Analyze page DOM elements, existing CSS stylesheets, and script dependencies.',
      icon: Terminal,
    },
    {
      step: '03',
      title: 'Implement',
      desc: 'Write clean, scoped custom CSS or JavaScript snippets tailored specifically to the requirement.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Test',
      desc: 'Test styling and interactions across desktop browsers, mobile devices, and screen sizes.',
      icon: Smartphone,
    },
    {
      step: '05',
      title: 'Review',
      desc: 'Confirm the custom code functions as expected and matches visual requirements before delivery.',
      icon: CheckCircle2,
    },
  ];

  const qualityPillars = [
    {
      title: 'Minimal Changes',
      desc: 'Code is written strictly for the required element, avoiding heavy global overrides or unnecessary code bloat.',
    },
    {
      title: 'Responsive Behavior',
      desc: 'Custom styles use media queries to ensure layout adjustments scale gracefully across mobile and desktop displays.',
    },
    {
      title: 'Accessibility Awareness',
      desc: 'Interactive elements maintain visible focus indicators and readable contrast levels for screen readers and keyboard users.',
    },
    {
      title: 'Performance Consideration',
      desc: 'Snippets are lightweight and efficient to minimize page loading impact and avoid rendering delays.',
    },
  ];

  const faqs = [
    {
      q: 'What type of custom code can you add to Squarespace?',
      a: 'I write custom CSS for visual styling (fonts, spacing, layout adjustments, buttons) and front-end JavaScript for specialized interactive components, animations, and UI behaviors supported by Squarespace.',
    },
    {
      q: 'Can you add custom CSS to my Squarespace website?',
      a: 'Yes. Custom CSS can be added securely through Squarespace\'s built-in Custom CSS panel to refine styling without modifying core platform code.',
    },
    {
      q: 'Can you add JavaScript to Squarespace?',
      a: 'Yes. Custom JavaScript can be added via Code Injection (available on Squarespace Business and Commerce plans) to implement front-end interactions and specialized UI features.',
    },
    {
      q: 'Can custom code improve mobile responsiveness?',
      a: 'Yes. Targeted CSS media queries allow specific section elements to reorder, resize, or adjust spacing specifically for smartphone and tablet screens.',
    },
    {
      q: 'Can you customize Squarespace buttons?',
      a: 'Yes. Custom CSS can modify button border-radii, background gradients, hover animations, padding, icon placements, and shadow effects.',
    },
    {
      q: 'Can you customize fonts and spacing with CSS?',
      a: 'Yes. Custom CSS allows fine-tuning of font weights, line-heights, letter-spacing, and element margins beyond what standard style panels offer.',
    },
    {
      q: 'Can you fix existing custom CSS or JavaScript?',
      a: 'Yes. I can audit existing code snippets on your website, resolve style conflicts, remove deprecated code, and fix mobile rendering errors.',
    },
    {
      q: 'Can custom code affect website performance?',
      a: 'Poorly written code can impact performance. I write lightweight, scoped code to ensure your website remains fast and responsive.',
    },
    {
      q: 'Can you add any feature to Squarespace?',
      a: 'Custom code expands front-end possibilities significantly, but certain server-side database features remain bounded by Squarespace platform architecture. Requirements are evaluated during discovery.',
    },
    {
      q: 'Will custom code remain after a Squarespace update?',
      a: 'CSS added via standard Custom CSS panels generally remains intact during platform updates. Code is written safely to maintain long-term stability.',
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
      desc: 'Refresh an existing website with improved user experience and modern layouts.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Optimize page structure, metadata, and technical foundations for search engines.',
      icon: Search,
    },
    {
      title: 'Squarespace Bug Fixing',
      href: '/services/squarespace-bug-fixing',
      desc: 'Investigate and resolve layout errors, CSS conflicts, and mobile display issues.',
      icon: Wrench,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your website updated, secure, and running smoothly with ongoing support.',
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
            { label: 'Squarespace Custom Code' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE CUSTOM CODE
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Extend Your Squarespace Website With Clean, Purposeful Custom Code
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  When Squarespace&apos;s built-in tools are not enough, I can use custom CSS and JavaScript to refine your website&apos;s appearance, interactions and front-end experience while keeping usability and maintainability in mind.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                  >
                    <span>Request Custom Development</span>
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
                  <span>Custom CSS • JavaScript • Responsive UI • Front-End Refinement</span>
                </div>
              </div>

              {/* Code Interface Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl shadow-sm overflow-hidden text-white">
                  {/* Terminal Header */}
                  <div className="bg-[#0F172A] border-b border-[#334155] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#0F766E]" />
                      <span>custom-styles.css</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  {/* Code Snippet Demonstration Area */}
                  <div className="p-5 font-mono text-xs space-y-2 text-[#E2E8F0] bg-[#0F172A]/80">
                    <div><span className="text-[#64748B]">&#47;&#47; Scoped Squarespace Custom CSS Concept</span></div>
                    <div>
                      <span className="text-[#38BDF8]">.sqs-block-button-element</span> &#123;
                    </div>
                    <div className="pl-4 text-[#93C5FD]">
                      background-color: <span className="text-[#F43F5E]">#0F766E</span>;
                    </div>
                    <div className="pl-4 text-[#93C5FD]">
                      transition: <span className="text-[#F59E0B]">all 0.2s ease-in-out</span>;
                    </div>
                    <div className="pl-4 text-[#93C5FD]">
                      border-radius: <span className="text-[#F59E0B]">8px</span>;
                    </div>
                    <div>&#125;</div>

                    <div className="pt-2"><span className="text-[#64748B]">&#47;&#47; Responsive Adjustments</span></div>
                    <div>
                      <span className="text-[#F43F5E]">@media</span> (<span className="text-[#38BDF8]">max-width</span>: <span className="text-[#F59E0B]">767px</span>) &#123;
                    </div>
                    <div className="pl-4 text-[#38BDF8]">
                      .custom-section-grid &#123;
                    </div>
                    <div className="pl-8 text-[#93C5FD]">
                      grid-template-columns: <span className="text-[#F59E0B]">1fr</span>;
                    </div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>

                    <div className="pt-3 border-t border-[#334155] text-[10px] text-[#94A3B8] text-center italic font-sans">
                      [Image Asset: <code className="bg-[#1E293B] px-1 border border-[#334155] rounded">squarespace-custom-code-services.jpg</code> — Alt: Squarespace custom code development interface demonstration]
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
                WHY CUSTOM CODE?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                More Flexibility Without Losing The Simplicity Of Squarespace
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Squarespace offers an intuitive, user-friendly platform for managing business content. However, native style panels and section layouts can sometimes feel restrictive when implementing precise brand guidelines or tailored user interfaces.
                </p>
                <p>
                  Custom CSS and front-end JavaScript provide the exact layer of flexibility needed to bridge that gap. With targeted CSS, you can adjust typography scales, refine section padding, create unique button hover states, and enforce responsive layout behavior on mobile devices.
                </p>
                <p>
                  When specific front-end behavior is required, clean JavaScript can introduce lightweight UI interactions without relying on heavy third-party plugins. By scoping code carefully to specific elements, you retain Squarespace&apos;s easy backend content management while achieving a tailored visual presentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I CAN CUSTOMIZE SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SOLUTIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Squarespace Custom Code Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizableSolutions.map((item) => {
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

        {/* CUSTOM CODE PHILOSOPHY SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                THE APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Code Should Solve A Problem, Not Create One
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  Adding custom code to a website should always be done with intention. Excessively long or poorly structured stylesheets can create style conflicts, slow down page loading times, and make future content updates difficult for site owners.
                </p>
                <p>
                  My approach focuses on writing clean, minimal, and modular CSS and JavaScript. Custom styles are carefully targeted to specific block classes or section IDs to prevent unintended side effects on other pages.
                </p>
                <p>
                  Every snippet is tested for mobile responsiveness, keyboard accessibility, and cross-browser stability before launch. The goal is to provide visual refinement while preserving a stable, maintainable website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHEN CUSTOM CODE MAKES SENSE SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                USE CASES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                When Custom Code Makes Sense
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenarios.map((text, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 flex items-start space-x-3"
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

        {/* CUSTOM CODE PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  THE PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Careful Custom Code Process
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Request Custom Development</span>
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

        {/* CODE QUALITY SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                CODE QUALITY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Built With Usability And Maintainability In Mind
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E] mb-1">
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

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SQUARESPACE CUSTOM CODE FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Squarespace Custom Code
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

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FBFBFB] to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                HAVE A CUSTOM REQUIREMENT?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Have A Squarespace Feature You Can&apos;t Quite Achieve?
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Tell me what you are trying to build or customize. I can review the requirement and identify whether custom code is the right solution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Request Custom Development</span>
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
