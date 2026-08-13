import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_URL } from '@/lib/constants';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Md. Shohan Islam | Squarespace Web Designer',
  description:
    'Get in touch with Md. Shohan Islam about Squarespace web design, redesign, SEO, custom code, maintenance or Local SEO services.',
  alternates: {
    canonical: 'https://shohan.allservix.com/contact',
  },
  openGraph: {
    title: 'Contact Md. Shohan Islam | Squarespace Web Designer',
    description:
      'Get in touch with Md. Shohan Islam about Squarespace web design, redesign, SEO, custom code, maintenance or Local SEO services.',
    url: 'https://shohan.allservix.com/contact',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Md. Shohan Islam | Squarespace Web Designer',
    description:
      'Get in touch with Md. Shohan Islam about Squarespace web design, redesign, SEO, custom code, maintenance or Local SEO services.',
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://shohan.allservix.com/contact#webpage',
        url: 'https://shohan.allservix.com/contact',
        name: 'Contact Md. Shohan Islam | Squarespace Web Designer',
        description:
          'Get in touch with Md. Shohan Islam about Squarespace web design, redesign, SEO, custom code, maintenance or Local SEO services.',
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
              name: 'Contact',
              item: 'https://shohan.allservix.com/contact',
            },
          ],
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#organization',
        name: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
        alternateName: 'ShohagITpoint',
        url: 'https://shohan.allservix.com',
        image: 'https://shohan.allservix.com/og-image.jpg',
        description:
          'Professional Squarespace web design, website redesign, custom code development, and search engine optimization services by Md. Shohan Islam (ShohagITpoint).',
        provider: {
          '@type': 'Person',
          name: 'Md. Shohan Islam',
          jobTitle: 'Squarespace Web Designer & SEO Expert',
        },
      },
    ],
  };

  const processSteps = [
    {
      step: '01',
      title: 'You Send Your Project Details',
      desc: 'Submit your website requirements, service needs, timeline, and current challenge using the inquiry form.',
    },
    {
      step: '02',
      title: 'I Review Your Requirements',
      desc: 'I analyze your current website or proposed scope, assessing UX structure, custom code requirements, and SEO opportunity.',
    },
    {
      step: '03',
      title: 'We Discuss the Best Approach',
      desc: 'We clarify specific design goals, technical options, timelines, and transparent pricing recommendations.',
    },
    {
      step: '04',
      title: 'We Decide on the Next Step',
      desc: 'Once alignment is reached on scope and milestones, project execution begins with structured updates.',
    },
  ];

  const faqs = [
    {
      q: 'What information should I provide when contacting?',
      a: 'To receive the most accurate proposal, please share details about your business, current website URL (if applicable), core services needed (design, redesign, SEO, custom code), target goals, and estimated timeline.',
    },
    {
      q: 'Do you work with existing Squarespace websites?',
      a: 'Yes. I regularly work with existing Squarespace websites to improve layout aesthetics, optimize page loading speed, resolve custom code bugs, and implement technical SEO updates.',
    },
    {
      q: 'Can you redesign an existing Squarespace site without losing SEO rankings?',
      a: 'Absolutey. Preserving organic search rankings is a priority during redesigns. I maintain core URL structures or map 301 redirects, preserve canonical tags, and audit XML sitemaps.',
    },
    {
      q: 'Do you provide Squarespace SEO services?',
      a: 'Yes. I offer comprehensive on-page and technical Squarespace SEO services, including keyword mapping, meta title and description optimization, heading tag hierarchy, image compression, and structured JSON-LD schema.',
    },
    {
      q: 'Can you fix custom CSS/JavaScript problems on Squarespace?',
      a: 'Yes. I troubleshoot broken custom CSS styling, script conflicts, mobile layout misalignments, and fluid engine glitches to ensure clean, error-free site performance.',
    },
    {
      q: 'Do you offer ongoing website maintenance?',
      a: 'Yes. Structured maintenance options are available for ongoing page additions, technical monitoring, content updates, and post-launch support.',
    },
    {
      q: 'Do you work with businesses outside your country?',
      a: 'Yes. I collaborate with business owners, agencies, and personal brands globally via email, WhatsApp, and structured asynchronous communication channels.',
    },
    {
      q: 'What happens after I submit the form?',
      a: 'I will personally review your project enquiry and respond via email (or WhatsApp if requested) with initial feedback, recommendations, and clear next steps.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Contact' }]} />

        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0F766E] uppercase bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                <MessageSquare className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>LET&apos;S WORK TOGETHER</span>
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                Start Your Website Project
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Whether you need a new custom Squarespace website design, an existing site redesign, custom code modifications, speed optimization, or specialized SEO services, I am here to help. Share your project goals, timelines, and current challenges below for a direct, personalized response.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F766E] text-white font-semibold text-sm rounded-lg hover:bg-[#0D655E] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>Send Project Enquiry</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] hover:text-[#0F766E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
                >
                  <span>View My Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM & WHATSAPP CONTAINER SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT SIDEBAR: DIRECT CONTACT & WHATSAPP CTA */}
              <aside className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xs">
                  <div className="space-y-2 border-b border-[#E5E7EB] pb-4">
                    <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                      DIRECT CHANNELS
                    </span>
                    <h2 className="font-heading font-bold text-xl text-[#111827]">
                      Get in Touch Directly
                    </h2>
                    <p className="text-xs text-[#4B5563]">
                      Prefer direct messaging or quick messaging for initial project inquiries?
                    </p>
                  </div>

                  {/* WHATSAPP CTA CARD */}
                  <div className="bg-[#F0FDFA] border border-[#0F766E]/30 p-5 rounded-xl space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0F766E] text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111827]">WhatsApp Direct Chat</div>
                        <div className="text-[11px] text-[#0F766E] font-medium">Instant Consultation Link</div>
                      </div>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Connect via WhatsApp for fast inquiries, quick project questions, or sharing reference websites.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0F766E] text-white font-semibold text-xs rounded-lg hover:bg-[#0D655E] transition-all shadow-2xs"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* PROJECT COMMITMENTS */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                      Communication Commitments
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#4B5563]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>Direct communication with Md. Shohan Islam personally.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>Clear, transparent scope and milestone timelines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>No hidden fees or unexpected upsells.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              {/* RIGHT MAIN COLUMN: INQUIRY FORM */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                TRANSPARENT PROCESS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                What Happens Next?
              </h2>
              <p className="text-base text-[#4B5563]">
                Four straightforward steps following your project inquiry submission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-3 hover:border-[#0F766E] transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-white border border-[#E5E7EB] px-2.5 py-1 rounded">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#111827]">
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

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Inquiry &amp; Working Process FAQs
              </h2>
              <p className="text-base text-[#4B5563]">
                Answers to common questions regarding project consultations, working scope, and response expectations.
              </p>
            </div>

            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-[#E5E7EB] rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden transition-colors hover:border-[#0F766E]/40"
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

        {/* RELATED CONTENT SECTION */}
        <section className="py-12 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl">
              <div className="space-y-1">
                <div className="text-sm font-bold text-[#111827]">Explore Services &amp; Work Examples</div>
                <p className="text-xs text-[#4B5563]">
                  Review live client demonstrations, case studies, client feedback, or detailed service breakdowns.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <Link href="/services" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Services
                </Link>
                <Link href="/portfolio" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Portfolio
                </Link>
                <Link href="/case-studies" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Case Studies
                </Link>
                <Link href="/testimonials" className="text-[#0F766E] hover:underline px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-lg">
                  Testimonials
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
