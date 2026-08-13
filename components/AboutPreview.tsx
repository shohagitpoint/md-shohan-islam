import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait / Graphic Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Professional Frame */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm space-y-4">
                
                {/* Real Professional Headshot Image */}
                <div className="aspect-4/5 bg-[#F1F5F9] rounded-xl border border-[#E5E7EB] overflow-hidden relative shadow-xs group">
                  <Image
                    src="/images/md-shohan-islam-squarespace-web-designer.jpg"
                    alt="Md. Shohan Islam, Squarespace Web Designer and SEO Expert"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-xs font-mono font-semibold text-[#0F766E] bg-white/95 backdrop-blur-xs border border-[#0F766E]/20 px-2.5 py-1 rounded-md shadow-2xs">
                      Md. Shohan Islam
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-[#4B5563]">
                    Md. Shohan Islam — Squarespace Web Designer and SEO Expert
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                ABOUT SHOHAN
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827] leading-tight">
                A Web Designer Who Thinks Beyond Just The Visuals
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
              <p>
                A successful website should do more than look polished. It should communicate your value clearly, create confidence in your business and guide visitors toward the right next step.
              </p>
              <p>
                I combine Squarespace design with practical SEO, usability and performance considerations to create websites that are designed with both people and long-term business goals in mind.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Tailored Squarespace Layouts',
                'SEO-Friendly Page Architecture',
                'Mobile & Touch Optimization',
                'Clear & Transparent Communication',
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-[#111827] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
              >
                <span>More About Me</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
