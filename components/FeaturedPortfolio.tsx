'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Maximize2, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  industry: string;
  services: string;
  imageRef: string;
  desc: string;
  href: string;
}

export default function FeaturedPortfolio() {
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '01',
      title: 'Red Oak Financial Group',
      industry: 'Financial & Professional Services',
      services: 'Squarespace Web Design & SEO',
      imageRef: 'red-oak-financial-group-squarespace-website.webp',
      desc: 'Custom Squarespace website design and structure for financial planning and wealth management, built for client trust and clear service navigation.',
      href: '/case-studies',
    },
    {
      id: '02',
      title: 'Rick Smith Golf',
      industry: 'Sports & Personal Brand',
      services: 'Squarespace Web Design & Personal Branding',
      imageRef: 'rick-smith-golf-squarespace-website.webp',
      desc: 'Professional website for world-renowned golf instructor Rick Smith, presenting golf academies, media features, and instruction philosophy.',
      href: '/portfolio',
    },
    {
      id: '03',
      title: 'Brilliant Event Planning',
      industry: 'Luxury Event & Wedding Planning',
      services: 'Squarespace Custom Code & Visual Design',
      imageRef: 'brilliant-event-planning-squarespace-website.webp',
      desc: 'Elegant website layout for luxury wedding and event planning, featuring custom CSS styling, gallery showcases, and inquiry flows.',
      href: '/portfolio',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
              SELECTED WORK
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
              A Selection Of Website Projects
            </h2>
            <p className="text-base text-[#4B5563]">
              Explore selected Squarespace website work and design examples.
            </p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0F766E]/40 transition-all duration-200 group"
            >
              <div>
                {/* Real Image Frame */}
                <div 
                  className="relative w-full h-[220px] bg-[#F1F5F9] border-b border-[#E5E7EB] overflow-hidden group/img cursor-pointer"
                  onClick={() => setSelectedImage(proj)}
                  title="Click to view high resolution image"
                >
                  <Image
                    src={`/images/${proj.imageRef}`}
                    alt={`${proj.title} Squarespace Website - Md. Shohan Islam`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-semibold text-[#0F766E] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#0F766E]/20 shadow-2xs">
                      Featured Work
                    </span>
                  </div>

                  {/* Zoom Overlay Indicator */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white gap-2 font-medium text-xs z-10">
                    <div className="bg-[#0F766E] p-2 rounded-full shadow-lg">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                    <span>Inspect Image</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-[#0F766E]">
                    {proj.industry}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#0F766E] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#E5E7EB]/40 pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedImage(proj)}
                  className="inline-flex items-center text-xs font-semibold text-[#4B5563] hover:text-[#0F766E] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 mr-1" />
                  <span>Expand Image</span>
                </button>

                <Link
                  href={proj.href}
                  className="inline-flex items-center text-xs font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-[#E5E7EB] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider">{selectedImage.industry}</span>
                <h3 className="font-heading text-lg font-bold text-[#111827]">{selectedImage.title} — High Resolution Preview</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-lg bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827] hover:bg-[#FBFBFB] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-900 overflow-hidden">
              <Image
                src={`/images/${selectedImage.imageRef}`}
                alt={`${selectedImage.title} Full Preview - Md. Shohan Islam`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-white border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-[#4B5563] max-w-xl">{selectedImage.desc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
              >
                <span>Request Similar Design</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
