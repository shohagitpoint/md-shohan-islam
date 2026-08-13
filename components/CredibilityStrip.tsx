import React from 'react';
import { Shield, Search, Smartphone, Gauge } from 'lucide-react';

export default function CredibilityStrip() {
  const highlights = [
    {
      icon: Shield,
      title: 'Squarespace Specialist',
      desc: 'Expert custom layout & structural setup',
    },
    {
      icon: Search,
      title: 'SEO-Aware Architecture',
      desc: 'Structured headings, schemas & metadata',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      desc: 'Flawless across desktop, tablet & mobile',
    },
    {
      icon: Gauge,
      title: 'Performance Minded',
      desc: 'Fast loading & smooth user experience',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E5E7EB] py-8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3.5 p-3 rounded-lg border border-transparent hover:border-[#E5E7EB] hover:bg-[#FBFBFB] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-0.5">
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
