import React from 'react';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: '01',
      quote: 'Md. Shohan Islam did an incredible job designing our website. He was prompt, professional, and understood our vision for Red Oak Financial Group immediately. The Squarespace layout is clean, modern, and easy for our clients to navigate.',
      clientName: 'Red Oak Financial Group',
      role: 'Financial Services',
      company: 'Squarespace Web Design',
    },
    {
      id: '02',
      quote: 'Working with Shohan on the Rick Smith Golf website was a seamless experience. He built a site that perfectly presents our golf academies, instruction programs, and brand. Extremely responsive and skilled in Squarespace.',
      clientName: 'Rick Smith',
      role: 'Golf Instructor & Founder',
      company: 'Rick Smith Golf',
    },
    {
      id: '03',
      quote: 'Shohan provided outstanding Squarespace and SEO support. His attention to detail, clear communication, and quick turnaround made a huge difference in launching our online presence smoothly.',
      clientName: 'Peter Cowell',
      role: 'Executive Coaching & Consulting',
      company: 'Personal Brand Website',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
              CLIENT FEEDBACK
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
              What Clients Say
            </h2>
            <p className="text-base text-[#4B5563]">
              Authentic feedback and reflections from project collaborations.
            </p>
          </div>
          <div>
            <Link
              href="/testimonials"
              className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-xs relative"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#0F766E]/30" aria-hidden="true" />
                <p className="text-sm text-[#4B5563] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F0FDFA] border border-[#0F766E]/20 text-[#0F766E] font-semibold text-xs flex items-center justify-center shrink-0">
                  {item.id}
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-[#111827]">
                    {item.clientName}
                  </div>
                  <div className="text-[11px] text-[#4B5563]">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
