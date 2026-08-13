import React from 'react';
import { Compass, PenTool, SlidersHorizontal, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand your business, audience, goals and website requirements.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Plan the structure, visual direction and user experience around your objectives.',
      icon: PenTool,
    },
    {
      step: '03',
      title: 'SEO & Optimization',
      desc: 'Refine content structure, technical SEO, responsiveness and performance.',
      icon: SlidersHorizontal,
    },
    {
      step: '04',
      title: 'Launch & Support',
      desc: 'Prepare the website for launch and provide ongoing support when required.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
            HOW I WORK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
            A Clear Process From First Conversation To Launch
          </h2>
          <p className="text-lg text-[#4B5563]">
            A structured four-step web design workflow ensuring transparency, quality, and search readiness at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                      Step {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#FBFBFB] border border-[#E5E7EB] text-[#0F766E] flex items-center justify-center">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-semibold text-[#0F766E]">
                  Phase {idx + 1} Milestone
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
