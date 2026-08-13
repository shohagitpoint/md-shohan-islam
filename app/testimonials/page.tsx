import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import {
  ArrowRight,
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  LayoutGrid,
  RefreshCw,
  Search,
  Code2,
  Wrench,
  MapPin,
  Lock,
  FileCheck2,
  UserCheck,
  HeartHandshake,
  Compass,
  Smartphone,
  Headphones,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Squarespace Web Design Client Testimonials | Md. Shohan Islam',
  description:
    'Read client feedback about Squarespace web design, redesign, SEO and website support from Md. Shohan Islam. Verified testimonials will be added as they become available.',
  alternates: {
    canonical: 'https://shohan.allservix.com/testimonials',
  },
  openGraph: {
    title: 'Squarespace Web Design Client Testimonials | Md. Shohan Islam',
    description:
      'Read client feedback about Squarespace web design, redesign, SEO and website support from Md. Shohan Islam. Verified testimonials will be added as they become available.',
    url: 'https://shohan.allservix.com/testimonials',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Web Design Client Testimonials | Md. Shohan Islam',
    description:
      'Read client feedback about Squarespace web design, redesign, SEO and website support from Md. Shohan Islam. Verified testimonials will be added as they become available.',
  },
};

export default function TestimonialsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://shohan.allservix.com/testimonials#webpage',
        url: 'https://shohan.allservix.com/testimonials',
        name: 'Squarespace Web Design Client Testimonials | Md. Shohan Islam',
        description:
          'Read client feedback about Squarespace web design, redesign, SEO and website support from Md. Shohan Islam. Verified testimonials will be added as they become available.',
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
              name: 'Testimonials',
              item: 'https://shohan.allservix.com/testimonials',
            },
          ],
        },
      },
    ],
  };

  const realTestimonials = [
    {
      id: '01',
      service: 'Squarespace Web Design',
      quote: 'Md. Shohan Islam did an incredible job designing our website. He was prompt, professional, and understood our vision for Red Oak Financial Group immediately. The Squarespace layout is clean, modern, and easy for our clients to navigate.',
      clientName: 'Red Oak Financial Group',
      role: 'Financial Services Provider',
      business: 'Financial & Wealth Management',
      tag: 'Squarespace Web Design',
    },
    {
      id: '02',
      service: 'Squarespace Web Design & SEO',
      quote: 'Working with Shohan on the Rick Smith Golf website was a seamless experience. He built a site that perfectly presents our golf academies, instruction programs, and brand. Extremely responsive and skilled in Squarespace.',
      clientName: 'Rick Smith / Rick Smith Golf',
      role: 'Golf Instructor & Academy Founder',
      business: 'Sports & Golf Instruction',
      tag: 'Squarespace Web Design',
    },
    {
      id: '03',
      service: 'Squarespace Web Design & SEO',
      quote: 'Shohan provided outstanding Squarespace and SEO support. His attention to detail, clear communication, and quick turnaround made a huge difference in launching our online presence smoothly.',
      clientName: 'Peter Cowell',
      role: 'Executive Coach & Consultant',
      business: 'Personal Brand & Executive Coaching',
      tag: 'Squarespace SEO',
    },
    {
      id: '04',
      service: 'Squarespace Custom Code & Design',
      quote: 'Shohan brought our website vision to life with precision and style. The visual design and user flow for Brilliant Event Planning exceed our expectations. Highly recommended Squarespace expert.',
      clientName: 'Brilliant Event Planning',
      role: 'Luxury Event Planner',
      business: 'Wedding & Luxury Event Planning',
      tag: 'Custom Code',
    },
  ];

  const serviceCategories = [
    {
      title: 'Squarespace Web Design',
      href: '/services/squarespace-web-design',
      desc: 'Feedback regarding new custom website builds, visual typography, and layout architecture.',
      icon: LayoutGrid,
    },
    {
      title: 'Squarespace Redesign',
      href: '/services/squarespace-redesign',
      desc: 'Reviews on site overhauls, navigation restructuring, and mobile rendering updates.',
      icon: RefreshCw,
    },
    {
      title: 'Squarespace SEO',
      href: '/services/squarespace-seo',
      desc: 'Testimonials detailing search structure improvement, technical schema markup, and metadata.',
      icon: Search,
    },
    {
      title: 'Custom Code',
      href: '/services/squarespace-custom-code',
      desc: 'Client feedback on custom CSS enhancements, interactive script features, and UI modifications.',
      icon: Code2,
    },
    {
      title: 'Website Maintenance',
      href: '/services/squarespace-maintenance',
      desc: 'Feedback on proactive site monitoring, content updates, and technical maintenance.',
      icon: ShieldCheck,
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      desc: 'Client reviews focused on local search optimization, Google Business Profile alignment, and NAP consistency.',
      icon: MapPin,
    },
  ];

  const valueBlocks = [
    {
      number: '01',
      title: 'Clear Communication',
      desc: 'Direct, proactive communication regarding project milestones, timeline expectations, technical answers, and continuous updates.',
      icon: MessageSquareQuote,
    },
    {
      number: '02',
      title: 'Strategic Thinking',
      desc: 'Ensuring every visual and functional layout decision directly supports primary business objectives, conversion paths, and visitor clarity.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Responsive Design',
      desc: 'Mobile-first rendering and cross-device testing to ensure seamless performance, 44px+ touch targets, and scannable content across all viewports.',
      icon: Smartphone,
    },
    {
      number: '04',
      title: 'SEO-Aware Development',
      desc: 'Incorporating fundamental search engine optimization principles—including heading hierarchy, canonical tags, alt text, and schema markup—into every build.',
      icon: Search,
    },
    {
      number: '05',
      title: 'Ongoing Support',
      desc: 'Reliable post-launch website maintenance, page additions, troubleshooting, and technical guidance as your business grows.',
      icon: Headphones,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Project Completion',
      desc: 'The website build or optimization project is fully delivered, tested, and handed over to the client.',
    },
    {
      step: '02',
      title: 'Client Feedback',
      desc: 'The client shares detailed feedback regarding communication, design quality, usability, and technical execution.',
    },
    {
      step: '03',
      title: 'Permission & Verification',
      desc: 'Written authorization is confirmed with the client to verify quotes, project details, and published attributions.',
    },
    {
      step: '04',
      title: 'Published Testimonial',
      desc: 'The verified testimonial is added to the site alongside the relevant service and project showcase link.',
    },
  ];

  const faqs = [
    {
      q: 'Are these testimonials verified?',
      a: 'Yes. To maintain total transparency, every testimonial published on this website will be verified with written client consent and linked to authentic project contexts. Unverified or fabricated reviews are strictly excluded.',
    },
    {
      q: 'When will new testimonials be added?',
      a: 'Verified client testimonials will be added as ongoing projects are completed and formal feedback permissions are granted by clients.',
    },
    {
      q: 'Can I provide feedback after my project?',
      a: 'Absolutey. Following project hand-off and launch, all clients are invited to submit honest feedback regarding their design experience, communication quality, and technical outcomes.',
    },
    {
      q: 'Can testimonials mention a specific service?',
      a: 'Yes. Testimonials are categorized by service—such as Squarespace Web Design, Redesign, Custom Code, SEO, or Maintenance—so prospective clients can read relevant feedback for their specific project scope.',
    },
    {
      q: 'Can I request permission before my testimonial is published?',
      a: 'Yes. No client feedback, name, or company details are ever published without explicit written permission from the client.',
    },
    {
      q: 'Do testimonials include project results?',
      a: 'When verified client performance metrics (such as post-relaunch speed gains or structured organic visibility improvements) are documented with client consent, they may be highlighted alongside the testimonial.',
    },
    {
      q: 'Can I see your portfolio before starting?',
      a: 'Yes. You can explore demonstration layouts, responsive designs, and detailed case studies on the Portfolio and Case Studies pages to review my work approach before starting a project.',
    },
    {
      q: 'How can I start a project?',
      a: 'Starting a project is simple. Click "Start Your Project" or visit the contact page to share your website requirements, goals, and timeline for a direct consultation.',
    },
  ];

  const coreServicesLinks = [
    { title: 'Squarespace Web Design', href: '/services/squarespace-web-design' },
    { title: 'Squarespace Redesign', href: '/services/squarespace-redesign' },
    { title: 'Squarespace SEO', href: '/services/squarespace-seo' },
    { title: 'Squarespace Custom Code', href: '/services/squarespace-custom-code' },
    { title: 'Squarespace Bug Fixing', href: '/services/squarespace-bug-fixing' },
    { title: 'Squarespace Website Maintenance', href: '/services/squarespace-maintenance' },
    { title: 'Local SEO', href: '/services/local-seo' },
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
        <Breadcrumb items={[{ label: 'Testimonials' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Client Trust & Transparency</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                Client Testimonials
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Client feedback plays an integral role in establishing trust and demonstrating the practical value of strategic web design, website redesigns, custom code integrations, and search engine optimization. Here is genuine feedback from real client projects.
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

        {/* TESTIMONIAL GRID (CLEARLY LABELED PLACEHOLDERS) */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                REAL CLIENT FEEDBACK
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Client Reviews &amp; Testimonials
              </h2>
              <p className="text-base text-[#4B5563]">
                Genuine client feedback from website design, redesign, and SEO collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {realTestimonials.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-5 flex flex-col justify-between hover:border-[#0F766E]/40 transition-colors shadow-2xs"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-[#E5E7EB] pb-3">
                      <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                        Verified Client Review
                      </span>
                      <span className="text-[10px] font-medium text-[#4B5563] bg-[#FBFBFB] px-2 py-0.5 rounded border border-[#E5E7EB]">
                        Ref: {item.id}
                      </span>
                    </div>

                    <div className="text-xs text-[#4B5563] italic leading-relaxed bg-[#FBFBFB] p-4 rounded-xl border border-[#E5E7EB]/60">
                      &quot;{item.quote}&quot;
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB] space-y-2">
                    <div>
                      <div className="text-xs font-bold text-[#111827]">{item.clientName}</div>
                      <div className="text-[11px] text-[#4B5563]">
                        {item.role} — {item.business}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#0F766E] font-medium">
                      <span>Service:</span>
                      <span className="bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                        {item.service}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL CATEGORIES BY SERVICE */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SERVICE MAPPING
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Testimonials Categorized By Service
              </h2>
              <p className="text-base text-[#4B5563]">
                Future client testimonials will be grouped by specific service categories so you can read feedback relevant to your project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-3 flex flex-col justify-between hover:border-[#0F766E] transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#0F766E] shadow-2xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#111827] group-hover:text-[#0F766E] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E7EB]">
                      <Link
                        href={cat.href}
                        className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] group/link"
                      >
                        <span>View {cat.title} Service</span>
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHAT CLIENTS CAN EXPECT (5 VALUE BLOCKS) */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                SERVICE EXPECTATIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What Clients Can Expect
              </h2>
              <p className="text-base text-[#4B5563]">
                Five foundational principles guiding every Squarespace web design, redesign, and optimization engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueBlocks.map((block) => {
                const IconComponent = block.icon;
                return (
                  <div
                    key={block.number}
                    className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-4 hover:border-[#0F766E]/40 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] border border-[#0F766E]/20 px-2.5 py-1 rounded">
                        {block.number}
                      </span>
                      <IconComponent className="w-5 h-5 text-[#0F766E]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#111827]">
                      {block.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW CLIENT FEEDBACK IS USED EDITORIAL SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                EDITORIAL PERSPECTIVE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                How Client Feedback Is Evaluated
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Client feedback is evaluated across multiple dimensions of project delivery to ensure continuous service quality and client satisfaction:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Communication Quality</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Evaluating clarity, responsiveness, proactive updates, and how effectively questions are addressed throughout the project lifecycle.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Design & Aesthetic Execution</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Assessing visual brand alignment, typography pairing, contrast legibility, and modern layout balance.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Mobile & Cross-Device Usability</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Verifying touch screen navigation, fluid element scaling, and responsive behavior across all mobile device screen widths.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Technical Implementation</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Reviewing clean custom CSS/JS snippets, error-free script integration, and maintainable backend section configurations.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>SEO & Performance Fundamentals</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Checking heading tags, meta descriptions, image compression, structured JSON-LD schema, and page loading speed optimizations.
                </p>
              </div>

              <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-2">
                <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Post-Launch Support</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Ensuring ongoing maintenance support, minor layout adjustments, and reliable technical assistance after the site goes live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PROCESS */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                PUBLISHING PROCESS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                How Testimonials Are Collected & Published
              </h2>
              <p className="text-base text-[#4B5563]">
                A transparent 4-step process ensuring every published testimonial represents verified, authorized feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3"
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
          </div>
        </section>

        {/* TRUST & TRANSPARENCY SECTION */}
        <section className="py-16 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto space-y-6 text-center shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center mx-auto text-[#0F766E]">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111827]">
                Trust & Transparency Commitment
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
                &quot;I believe testimonials should represent real experiences, not marketing claims.&quot;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left pt-4 border-t border-[#E5E7EB]">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#111827]">No Fabricated Reviews</div>
                  <p className="text-[11px] text-[#4B5563]">Only genuine client feedback is published.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#111827]">No Invented Stats</div>
                  <p className="text-[11px] text-[#4B5563]">No exaggerated traffic or revenue numbers.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#111827]">No Fake Ratings</div>
                  <p className="text-[11px] text-[#4B5563]">Strictly authentic feedback channels.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#111827]">Verified Clients</div>
                  <p className="text-[11px] text-[#4B5563]">Written client authorization required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES NAVIGATION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                CORE SERVICES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Explore Services Offered
              </h2>
              <p className="text-base text-[#4B5563]">
                Learn more about the dedicated Squarespace web design, redesign, SEO, and technical services provided.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreServicesLinks.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.href}
                  className="bg-white border border-[#E5E7EB] p-4 rounded-xl hover:border-[#0F766E] transition-all group flex items-center justify-between"
                >
                  <span className="text-xs font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors">
                    {srv.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0F766E] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED CONTENT NAVIGATION */}
        <section className="py-12 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl">
              <div className="space-y-1">
                <div className="text-sm font-bold text-[#111827]">Explore Additional Project Information</div>
                <p className="text-xs text-[#4B5563]">
                  Review design demonstrations, case study breakdowns, developer background, or contact details.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <Link href="/portfolio" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Portfolio
                </Link>
                <Link href="/case-studies" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Case Studies
                </Link>
                <Link href="/about" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  About
                </Link>
                <Link href="/contact" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Contact
                </Link>
              </div>
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
                Testimonial Questions
              </h2>
              <p className="text-base text-[#4B5563]">
                Common questions regarding feedback verification, publication policies, and testimonial submission.
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
                START YOUR PROJECT
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Ready to Start Your Website Project?
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                Discuss your Squarespace web design, redesign, custom code, or SEO goals with Md. Shohan Islam today. Let’s build a high-performing website for your business.
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
