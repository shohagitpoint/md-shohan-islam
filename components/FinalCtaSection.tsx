import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FDFA]/40 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6 bg-white border border-[#0F766E]/20 p-8 sm:p-12 md:p-16 rounded-2xl shadow-sm">
          
          <div className="inline-flex items-center gap-2 bg-[#F0FDFA] text-[#0F766E] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#0F766E]/20">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>LET&apos;S WORK TOGETHER</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
            Ready To Build A Better Website?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Tell me what you&apos;re working on, what you want to improve and what you want your website to achieve. I&apos;ll help you identify the right next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-base shadow-xs group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/30 text-[#111827] font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              View My Work
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
