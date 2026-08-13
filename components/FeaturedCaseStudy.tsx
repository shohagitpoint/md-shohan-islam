import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileCheck2, Target, CheckCircle2, TrendingUp } from 'lucide-react';

export default function FeaturedCaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-2 max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
            CASE STUDY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
            Thoughtful Design Backed By Practical Strategy
          </h2>
          <p className="text-base text-[#4B5563]">
            A breakdown of how custom Squarespace design and structured on-page SEO work together to solve business challenges.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 md:p-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-mono font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                Featured Case Study
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111827] mt-2">
                Professional Service Business Website Transformation
              </h3>
            </div>
            <div>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
              >
                <span>View Case Studies</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 4 Aspect Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            
            <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                <Target className="w-4 h-4 text-[#0F766E]" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                An outdated site layout with confusing navigation, slow page speeds, and lack of mobile responsiveness hurting conversion rates.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                <FileCheck2 className="w-4 h-4 text-[#0F766E]" />
                <span>The Approach</span>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Re-architected user flows, streamlined typography, implemented clean CSS customizations, and mapped primary keyword strategy.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                <span>The Solution</span>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                A modern Squarespace 7.1 build with accessible contrast, clean service pages, optimized asset loading, and structured schemas.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#0F766E]/30 bg-[#F0FDFA]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F766E]">
                <TrendingUp className="w-4 h-4 text-[#0F766E]" />
                <span>The Outcome</span>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed italic">
                [Measured client result placeholder — factual metrics will be added upon client verification].
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
