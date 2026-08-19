import React from 'react';
import Link from 'next/link';
import { Layout, RefreshCw, Search, Code2, Wrench, ShieldCheck, MapPin, MessageSquareText, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'Squarespace Web Design',
      desc: 'Custom Squarespace websites designed around your brand, audience and business goals.',
      href: '/services/squarespace-web-design',
      icon: Layout,
    },
    {
      num: '02',
      title: 'Squarespace Website Redesign',
      desc: 'Modernize an existing Squarespace website with improved structure, visual design and user experience.',
      href: '/services/squarespace-redesign',
      icon: RefreshCw,
    },
    {
      num: '03',
      title: 'Squarespace SEO',
      desc: 'Improve your website\'s search visibility with practical on-page and technical SEO.',
      href: '/services/squarespace-seo',
      icon: Search,
    },
    {
      num: '04',
      title: 'Squarespace Custom Code',
      desc: 'Extend Squarespace with carefully implemented custom CSS, JavaScript and styling.',
      href: '/services/squarespace-custom-code',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Squarespace Bug Fixing',
      desc: 'Resolve layout issues, responsive problems and custom-code conflicts.',
      href: '/services/squarespace-bug-fixing',
      icon: Wrench,
    },
    {
      num: '06',
      title: 'Squarespace Website Maintenance',
      desc: 'Keep your website updated, refined and running reliably with ongoing support.',
      href: '/services/squarespace-maintenance',
      icon: ShieldCheck,
    },
    {
      num: '07',
      title: 'Local SEO',
      desc: 'Improve local visibility and help service businesses connect with customers searching in their area.',
      href: '/services/local-seo',
      icon: MapPin,
    },
    {
      num: '08',
      title: 'Custom Consultation',
      desc: 'Need help deciding what your website needs? Discuss your project and identify the right next step.',
      href: '/contact',
      icon: MessageSquareText,
      isConsultation: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
            WHAT I DO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
            Squarespace Web Design and SEO Services Built Around Your Business Goals
          </h2>
          <p className="text-lg text-[#4B5563]">
            From new website design to redesigns, SEO and technical improvements, I provide focused Squarespace services tailored to the needs of your business.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.href + item.num}
                className={`flex flex-col justify-between p-6 rounded-xl border transition-all duration-200 group ${
                  item.isConsultation
                    ? 'bg-[#F0FDFA] border-[#0F766E]/30 hover:border-[#0F766E]'
                    : 'bg-[#FBFBFB] border-[#E5E7EB] hover:border-[#0F766E]/40 hover:bg-white hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center shadow-2xs group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-[#4B5563] font-semibold">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-2 group-hover:text-[#0F766E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-[#4B5563] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] pt-2 border-t border-[#E5E7EB] w-full justify-between"
                  >
                    <span>{item.isConsultation ? 'Book A Consultation' : 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
