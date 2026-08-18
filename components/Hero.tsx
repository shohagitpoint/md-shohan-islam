import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 border-b border-[#E5E7EB] bg-gradient-to-b from-[#FBFBFB] via-white to-[#FBFBFB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 bg-[#F0FDFA] text-[#0F766E] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#0F766E]/20">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SQUARESPACE WEB DESIGNER &amp; SEO EXPERT</span>
            </div>

            {/* Main H1 Title (The single H1 on the page) */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-tight leading-[1.1]">
              Squarespace Websites Designed To Look Great And Work Harder
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              I design professional Squarespace websites that combine thoughtful design, responsive user experience and SEO best practices to help businesses build credibility and attract the right customers online.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0F766E] hover:bg-[#0D655E] text-white font-medium px-6 py-3.5 rounded-lg transition-colors text-base shadow-xs group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-white border border-[#E5E7EB] hover:bg-[#F0FDFA] hover:border-[#0F766E]/40 text-[#111827] font-medium px-6 py-3.5 rounded-lg transition-colors text-base"
              >
                View My Portfolio
              </Link>
            </div>

            {/* Supporting Line */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#4B5563] tracking-wide">
              <span>Custom Design</span>
              <span className="text-[#0F766E] font-bold">•</span>
              <span>Technical SEO</span>
              <span className="text-[#0F766E] font-bold">•</span>
              <span>Conversion Optimization</span>
            </div>

          </div>

          {/* Right Column: Portfolio Visual Preview Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Outer Container representing a desktop browser */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-xl overflow-hidden relative group">
                
                {/* Browser Header Bar */}
                <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                  </div>
                  <div className="bg-white border border-[#E5E7EB] rounded-full px-3 py-0.5 text-[11px] text-[#4B5563] font-mono truncate max-w-[220px] shadow-2xs">
                    🔒 https://petercowell.com
                  </div>
                  <div className="text-[10px] font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#0F766E]/20">
                    Live Preview
                  </div>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative w-full h-[280px] sm:h-[340px] bg-[#F1F5F9] overflow-hidden">
                  <Image
                    src="/images/hero-showcase.webp"
                    alt="Squarespace Web Design & SEO Showcase - Md. Shohan Islam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Demonstration Note Footer */}
                <div className="bg-[#FAFBFB] border-t border-[#E5E7EB] px-4 py-2.5 text-[11px] font-medium text-[#4B5563] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#0F766E] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Squarespace 7.1 Certified
                  </span>
                  <span className="text-[11px] text-[#6B7280]">
                    Clean &amp; Mobile Optimized
                  </span>
                </div>

              </div>

              {/* Floating Badge 1: SEO Performance (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xs border border-[#E5E7EB] rounded-xl p-3 shadow-lg flex items-center gap-3 hidden sm:flex z-10">
                <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">SEO &amp; Traffic Ready</div>
                  <div className="text-[10px] text-[#4B5563] font-medium">Built for Google Search</div>
                </div>
              </div>

              {/* Floating Badge 2: Conversion Focus (Top Right) */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs border border-[#E5E7EB] rounded-xl p-3 shadow-lg flex items-center gap-2.5 hidden sm:flex z-10">
                <div className="w-8 h-8 rounded-lg bg-[#0F766E] text-white flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">Conversion First</div>
                  <div className="text-[10px] text-[#0F766E] font-semibold">High Client Retention</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

