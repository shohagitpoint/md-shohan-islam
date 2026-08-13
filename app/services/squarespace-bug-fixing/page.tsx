import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  Wrench,
  Bug,
  Layout,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Search,
  Code2,
  Sliders,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Compass,
  FileCheck,
  Info,
  Check,
  HelpCircle,
  MapPin,
  Terminal,
  Activity,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Bug Fixing Services | Md. Shohan Islam',
  description:
    'Get help fixing Squarespace website issues including layout problems, responsive bugs, CSS conflicts, JavaScript issues and front-end errors.',
  alternates: {
    canonical: 'https://shohan.allservix.com/services/squarespace-bug-fixing',
  },
  openGraph: {
    title: 'Squarespace Bug Fixing Services | Md. Shohan Islam',
    description:
      'Practical Squarespace troubleshooting for layout, CSS, JavaScript, responsive and front-end website issues.',
    url: 'https://shohan.allservix.com/services/squarespace-bug-fixing',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Bug Fixing Services | Md. Shohan Islam',
    description:
      'Practical Squarespace troubleshooting for layout, CSS, JavaScript, responsive and front-end website issues.',
  },
};

export default function SquarespaceBugFixingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://shohan.allservix.com/services/squarespace-bug-fixing/#service',
        name: 'Squarespace Bug Fixing Services',
        serviceType: 'Squarespace Technical Troubleshooting & Bug Fixing',
        description:
          'Specialized technical troubleshooting and bug fixing for Squarespace websites, resolving layout glitches, CSS style conflicts, JavaScript execution issues, and mobile responsiveness errors.',
        provider: {
          '@type': 'Person',
          '@id': 'https://shohan.allservix.com/#person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        url: 'https://shohan.allservix.com/services/squarespace-bug-fixing',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam - Squarespace Web Design & SEO Services',
        url: 'https://shohan.allservix.com',
      },
    ],
  };

  const commonProblems = [
    {
      num: '01',
      title: 'Layout Problems',
      desc: 'Page sections or content blocks overlapping, breaking out of containers, or displaying out of order.',
      icon: Layout,
    },
    {
      num: '02',
      title: 'Mobile Issues',
      desc: 'Desktop designs breaking on smartphone viewports, causing horizontal scrolling or cut-off text.',
      icon: Smartphone,
    },
    {
      num: '03',
      title: 'CSS Conflicts',
      desc: 'Legacy custom CSS overriding built-in Squarespace styles or causing unexpected visual glitching.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'JavaScript Issues',
      desc: 'Interactive elements, dropdown menus, lightboxes, or form triggers failing to execute correctly.',
      icon: Terminal,
    },
    {
      num: '05',
      title: 'Spacing Problems',
      desc: 'Irregular section gaps, padding misalignment, or unmanageable vertical whitespace on mobile.',
      icon: Sliders,
    },
    {
      num: '06',
      title: 'Typography Problems',
      desc: 'Font sizing, line-height, or font family rendering inconsistencies across specific pages.',
      icon: FileCheck,
    },
    {
      num: '07',
      title: 'Button & Navigation Issues',
      desc: 'Links failing to open, misaligned navigation items, or unresponsive mobile menu toggles.',
      icon: Activity,
    },
    {
      num: '08',
      title: 'Custom Code Conflicts',
      desc: 'Errors created by outdated plugins, previous custom injections, or third-party script tags.',
      icon: Wrench,
    },
  ];

  const whatsIncluded = [
    {
      title: 'Issue Review',
      desc: 'Understand the reported bug, affected page URLs, user device types, and expected behavior.',
      icon: Search,
    },
    {
      title: 'Code Inspection',
      desc: 'Examine browser developer console logs, page DOM structure, and custom CSS/JS injection panels.',
      icon: Terminal,
    },
    {
      title: 'CSS Troubleshooting',
      desc: 'Identify conflicting CSS selectors, specificity overrides, or broken media queries and apply clean fixes.',
      icon: Code2,
    },
    {
      title: 'JavaScript Troubleshooting',
      desc: 'Isolate script syntax errors, missing DOM references, or asynchronous loading conflicts.',
      icon: Wrench,
    },
    {
      title: 'Responsive Testing',
      desc: 'Test fixed layouts across multiple device sizes, tablet resolutions, and mobile browser viewports.',
      icon: Smartphone,
    },
    {
      title: 'Fix Verification',
      desc: 'Verify that the resolution operates consistently without introducing regression bugs elsewhere on the site.',
      icon: CheckCircle2,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Describe',
      desc: 'Detail what is not displaying or functioning correctly, including affected pages and device context.',
      icon: HelpCircle,
    },
    {
      step: '02',
      title: 'Reproduce',
      desc: 'Inspect the live page to observe and consistently reproduce the specific error or visual flaw.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Diagnose',
      desc: 'Analyze page styles, scripts, and layout settings to pinpoint the exact root cause of the bug.',
      icon: Terminal,
    },
    {
      step: '04',
      title: 'Fix',
      desc: 'Implement a surgical, targeted fix to correct the issue while keeping existing code clean.',
      icon: Wrench,
    },
    {
      step: '05',
      title: 'Verify',
      desc: 'Test the resolution across desktop, tablet, and smartphone browsers before concluding the work.',
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: 'What Squarespace issues can you fix?',
      a: 'I troubleshoot and resolve visual layout bugs, mobile display errors, CSS selector conflicts, JavaScript execution errors, spacing misalignments, navigation glitching, and custom code injection conflicts.',
    },
    {
      q: 'Can you fix Squarespace mobile layout problems?',
      a: 'Yes. Mobile layout errors are among the most common website issues. I write targeted CSS media queries to fix overlapping text, broken columns, and horizontal scrolling on phone screens.',
    },
    {
      q: 'Can you fix custom CSS problems?',
      a: 'Yes. If legacy custom CSS is causing unexpected style overrides or layout breakage, I can audit the stylesheet, clean up syntax errors, and isolate styles cleanly.',
    },
    {
      q: 'Can you troubleshoot JavaScript issues?',
      a: 'Yes. I inspect browser developer console logs to find script errors, event listener failures, or conflicts between custom JavaScript and Squarespace built-in scripts.',
    },
    {
      q: 'Can you fix spacing and alignment problems?',
      a: 'Yes. Padding and margin inconsistencies across sections or block elements can be adjusted via targeted CSS or native section settings.',
    },
    {
      q: 'Can you fix one specific issue without redesigning the site?',
      a: 'Yes. Bug fixing is delivered as a focused service designed to address isolated problems efficiently without requiring a broader redesign.',
    },
    {
      q: 'Can you troubleshoot code added by another developer?',
      a: 'Yes. I can review third-party code injections, custom CSS snippets, or plugin scripts added previously to identify syntax or logic errors.',
    },
    {
      q: 'Can you fix problems caused by third-party integrations?',
      a: 'I can inspect third-party embed codes, form scripts, or iframe widgets to verify integration settings and correct front-end styling conflicts.',
    },
    {
      q: 'How quickly can a Squarespace issue be fixed?',
      a: 'Timeline depends on the complexity of the issue, whether root causes stem from custom code or platform configuration, and account access availability.',
    },
    {
      q: 'Can every Squarespace problem be fixed?',
      a: 'Most front-end, layout, CSS, and script issues can be resolved. However, core platform infrastructure limitations or server outages must be handled by Squarespace official support. Issues are evaluated upfront.',
    },
  ];

  const relatedServices = [
    {
      title: 'Squarespace Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Extend your website with clean CSS and JavaScript tailored specifically for your brand.',
      icon: Code2,
    },
    {
      title: 'Squarespace Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Keep your website refreshed, updated, and running securely over time.',
      icon: ShieldCheck,
    },
    {
      title: 'Squarespace Website Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Modernize an outdated website with improved user experience and modern layouts.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Build a custom Squarespace website tailored around your brand and business objectives.',
      icon: Layout,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Optimize page structure, metadata, and technical foundations for search engines.',
      icon: Search,
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
            { label: 'Squarespace Bug Fixing' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded border border-[#0F766E]/20">
                  SQUARESPACE BUG FIXING
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15]">
                  Fix Squarespace Website Problems Without Rebuilding Everything
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  If something on your Squarespace website is not displaying, behaving or responding as expected, I can investigate the issue and work toward a focused solution without unnecessarily rebuilding the entire website.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                  >
                    <span>Get Help With A Website Issue</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
                  >
                    View Services
                  </Link>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#4B5563] flex items-center gap-2 border-t border-[#E5E7EB]">
                  <Sparkles className="w-4 h-4 text-[#0F766E]" />
                  <span>Troubleshooting • CSS • JavaScript • Responsive Issues</span>
                </div>
              </div>

              {/* Bug Fix Diagnostics Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-[#FBFBFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-md px-3 py-1 text-[11px] font-mono text-[#4B5563] flex items-center gap-1">
                      <Bug className="w-3 h-3 text-[#D97706]" />
                      <span>diagnostics-console</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  <div className="p-6 bg-[#FBFBFB] space-y-4">
                    <div className="text-center pb-2 border-b border-[#E5E7EB]">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-white px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Troubleshooting Diagnosis Pipeline
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="bg-white p-2.5 rounded border border-[#EF4444]/30 flex items-center justify-between text-[#991B1B]">
                        <span>[Error] Mobile Overflow Detected</span>
                        <span className="text-[10px] font-bold bg-[#FEF2F2] px-1.5 py-0.5 rounded border border-[#FECDD3]">Identified</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#F59E0B]/40 flex items-center justify-between text-[#92400E]">
                        <span>[CSS] Specifying Media Queries</span>
                        <span className="text-[10px] font-bold bg-[#FEF3C7] px-1.5 py-0.5 rounded border border-[#FDE68A]">Isolated</span>
                      </div>
                      <div className="bg-white p-2.5 rounded border border-[#0F766E]/40 flex items-center justify-between text-[#0F766E]">
                        <span>[Fix] Target Style Applied</span>
                        <span className="text-[10px] font-bold bg-[#F0FDFA] px-1.5 py-0.5 rounded border border-[#0F766E]/20">Resolved</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#4B5563] text-center italic pt-1 border-t border-[#E5E7EB]">
                      [Image Asset: <code className="bg-white px-1 border rounded">squarespace-bug-fixing-services.jpg</code> — Alt: Squarespace website bug fixing and layout troubleshooting diagnostic concept]
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMMON PROBLEMS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                ISSUES I INVESTIGATE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Squarespace Website Issues I Can Investigate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonProblems.map((item) => {
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

        {/* TROUBLESHOOTING APPROACH SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                TROUBLESHOOTING APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Find The Cause Before Changing The Code
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  When a website displays unexpected layout behavior or script errors, jumping straight into editing code without diagnosis can often create secondary bugs elsewhere on the site. Effective troubleshooting begins with systematically reproducing the reported issue.
                </p>
                <p>
                  By inspecting the page DOM structure using browser developer tools, analyzing loaded stylesheet rules, and reviewing custom injection panels, the precise source of style overrides or script errors can be isolated.
                </p>
                <p>
                  Once the root cause is identified—whether it stems from an unclosed CSS bracket, a missing media query, or a script loading conflict—a surgical, minimal fix is applied. The solution is then verified across mobile and desktop displays to ensure long-term stability.
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
                SERVICE SCOPE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What&apos;s Included In Bug Fixing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatsIncluded.map((item, idx) => {
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

        {/* BUG FIXING PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  THE PROCESS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                  A Structured Bug Fixing Process
                </h2>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
                >
                  <span>Report An Issue</span>
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

        {/* IMPORTANT EXPECTATIONS SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#0F766E]" />
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  SETTING CLEAR EXPECTATIONS
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Not Every Website Issue Has The Same Cause
              </h2>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-xl shadow-xs">
                <p>
                  Website errors vary widely in origin. Some visual flaws stem from straightforward CSS syntax bugs or misconfigured block margins, which can be resolved directly. Other issues may arise from third-party API changes, external domain DNS configurations, or core Squarespace platform updates.
                </p>
                <p>
                  If an issue stems from core Squarespace server architecture or native platform limitations beyond front-end customization, I will explain the constraints clearly and assist in contacting official Squarespace support with diagnostic details.
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
                SQUARESPACE BUG FIXING FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Questions About Squarespace Bug Fixing
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
                NEED TROUBLESHOOTING HELP?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Something On Your Squarespace Website Isn&apos;t Working?
              </h2>

              <p className="text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Describe the issue and what you have already tried. I can review the problem and determine the most practical next step.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm shadow-xs group"
                >
                  <span>Get Help With A Website Issue</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Explore Squarespace Services
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
