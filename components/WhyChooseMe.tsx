import React from 'react';
import { Target, Search, Code, MessageCircle } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      num: '01',
      title: 'Strategic Design',
      desc: 'Every page is designed around a clear purpose, audience and business objective.',
      icon: Target,
    },
    {
      num: '02',
      title: 'SEO-Aware Development',
      desc: 'Important SEO considerations are built into page structure, content and technical implementation.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Clean Customization',
      desc: 'Use custom CSS and JavaScript where they genuinely improve the website rather than adding unnecessary complexity.',
      icon: Code,
    },
    {
      num: '04',
      title: 'Clear Communication',
      desc: 'Keep the project process straightforward, collaborative and easy to understand.',
      icon: MessageCircle,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
            WHY WORK WITH ME
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
            Design, SEO And User Experience Working Together
          </h2>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#4B5563]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
