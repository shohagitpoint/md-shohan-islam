import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Lightbulb, CheckCircle2, TrendingUp, ArrowRight, Layout } from 'lucide-react';

export interface CaseStudyData {
  id: string;
  title: string;
  industry: string;
  imageRef: string;
  challenge: string;
  goals: string;
  strategy: string;
  designDecisions: string;
  seoDecisions: string;
  technicalImplementation: string;
  outcome: string;
  services: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#0F766E]/40 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Visual Frame / Header */}
        <div className="bg-white p-6 border-b border-[#E5E7EB] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
              Client Case Study
            </span>
            <span className="text-[10px] font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
              Verified Project
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <h3 className="font-heading font-bold text-xl text-[#111827]">
              {caseStudy.title}
            </h3>
          </div>

          {/* Real Project Image Banner */}
          <div className="aspect-16/9 bg-[#F1F5F9] rounded-xl border border-[#E5E7EB] overflow-hidden relative group/caseimg">
            <Image
              src={`/images/${caseStudy.imageRef}`}
              alt={`${caseStudy.title} Squarespace Website Case Study - Md. Shohan Islam`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover group-hover/caseimg:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Breakdown Sections */}
        <div className="p-6 space-y-5">
          {/* Challenge & Goals */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
              <Target className="w-4 h-4 text-[#0F766E] shrink-0" />
              <span>The Challenge & Goals</span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">Challenge:</strong> {caseStudy.challenge}
            </p>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">Goals:</strong> {caseStudy.goals}
            </p>
          </div>

          {/* Strategy & Design */}
          <div className="space-y-2 pt-3 border-t border-[#E5E7EB]/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
              <Lightbulb className="w-4 h-4 text-[#0F766E] shrink-0" />
              <span>Strategy & Design Decisions</span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">Strategy:</strong> {caseStudy.strategy}
            </p>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">Design:</strong> {caseStudy.designDecisions}
            </p>
          </div>

          {/* SEO & Technical */}
          <div className="space-y-2 pt-3 border-t border-[#E5E7EB]/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
              <span>SEO & Technical Implementation</span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">SEO:</strong> {caseStudy.seoDecisions}
            </p>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              <strong className="text-[#111827] font-semibold">Technical:</strong> {caseStudy.technicalImplementation}
            </p>
          </div>

          {/* Outcome */}
          <div className="p-4 bg-white border border-[#0F766E]/30 rounded-xl space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F766E]">
              <TrendingUp className="w-4 h-4 text-[#0F766E]" />
              <span>Project Outcome</span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed italic">
              {caseStudy.outcome}
            </p>
          </div>

          {/* Services Provided */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[10px] font-semibold text-[#111827] uppercase tracking-wider">
              Services Applied:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-medium text-[#0F766E] bg-white border border-[#E5E7EB] px-2 py-0.5 rounded"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href="/contact"
          className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] group transition-colors"
        >
          <span>Discuss A Similar Project</span>
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
