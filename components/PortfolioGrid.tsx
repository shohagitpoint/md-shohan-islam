'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layout, CheckCircle2, Filter, Maximize2, X, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  industry: string;
  category: string;
  tags: string[];
  imageRef: string;
  desc: string;
  services: string[];
  caseStudyHref: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Red Oak Financial Group',
    industry: 'Financial & Professional Services',
    category: 'Squarespace Web Design',
    tags: ['Squarespace Web Design', 'Squarespace SEO'],
    imageRef: 'red-oak-financial-group-squarespace-website.webp',
    desc: 'Custom Squarespace website design and structure for financial planning and wealth management services, focusing on trust, clear user flow, and professional service presentation.',
    services: ['Squarespace Web Design', 'SEO Structure', 'Responsive UX'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '02',
    title: 'Rick Smith Golf',
    industry: 'Sports & Personal Brand',
    category: 'Squarespace Web Design',
    tags: ['Squarespace Web Design', 'Squarespace SEO'],
    imageRef: 'rick-smith-golf-squarespace-website.webp',
    desc: 'Professional website for legendary golf instructor Rick Smith, highlighting academy programs, media features, and instruction philosophy.',
    services: ['Squarespace Web Design', 'Personal Branding', 'Media Showcase'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '03',
    title: 'Brilliant Event Planning',
    industry: 'Luxury Event Planning',
    category: 'Custom Code',
    tags: ['Custom Code', 'Squarespace Web Design'],
    imageRef: 'brilliant-event-planning-squarespace-website.webp',
    desc: 'Elegant Squarespace website design tailored for luxury wedding and event planning, featuring rich visual galleries and custom inquiry pathways.',
    services: ['Squarespace Web Design', 'Custom CSS', 'Gallery Layouts'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '04',
    title: 'Reflections Perfection',
    industry: 'Auto Detailing & Services',
    category: 'Squarespace Web Design',
    tags: ['Squarespace Web Design', 'Local SEO'],
    imageRef: 'reflections-perfection-squarespace-website.webp',
    desc: 'Clean, responsive Squarespace website built for auto detailing services with clear package displays, booking pathways, and service showcases.',
    services: ['Squarespace Web Design', 'Local SEO', 'Service Packages'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '05',
    title: 'KAN Consultancy',
    industry: 'Business Consulting',
    category: 'Squarespace Redesign',
    tags: ['Squarespace Redesign', 'Custom Code'],
    imageRef: 'kan-consultancy-squarespace-website.webp',
    desc: 'Professional business consultancy website redesign focusing on strategic corporate positioning, service clarity, and lead contact pathways.',
    services: ['Squarespace Redesign', 'Information Architecture', 'Custom Styling'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '06',
    title: 'Next Gen Wash Pros',
    industry: 'Exterior Cleaning / Local Service',
    category: 'Local SEO',
    tags: ['Local SEO', 'Squarespace Web Design'],
    imageRef: 'next-gen-wash-pros-squarespace-website.webp',
    desc: 'High-clarity Squarespace local business website designed for pressure washing and exterior maintenance services with local search optimization.',
    services: ['Squarespace Web Design', 'Local SEO', 'Lead Generation'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '07',
    title: 'Peter Cowell',
    industry: 'Executive Coaching & Personal Brand',
    category: 'Squarespace SEO',
    tags: ['Squarespace SEO', 'Squarespace Web Design'],
    imageRef: 'peter-cowell-squarespace-website.webp',
    desc: 'High-impact Squarespace personal brand website for executive coach and consultant Peter Cowell, featuring custom design and search optimization.',
    services: ['Squarespace Web Design', 'Squarespace SEO', 'Personal Branding'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '08',
    title: 'Apex Legal Partners',
    industry: 'Corporate & Commercial Law',
    category: 'Squarespace Web Design',
    tags: ['Squarespace Web Design', 'Custom Code'],
    imageRef: 'apex-legal.webp',
    desc: 'Bespoke Squarespace website for corporate law firm Apex Legal, featuring practice area breakdowns, attorney bio cards, and secure consultation intake.',
    services: ['Squarespace Web Design', 'Custom Styling', 'SEO Architecture'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '09',
    title: 'Luminary Architecture Studio',
    industry: 'Modern Architecture & Design',
    category: 'Custom Code',
    tags: ['Custom Code', 'Squarespace Web Design'],
    imageRef: 'luminary-architecture.webp',
    desc: 'Minimalist editorial Squarespace website for luxury architectural studio, featuring full-bleed project portfolios and custom grid interactions.',
    services: ['Squarespace Web Design', 'Custom CSS', 'Portfolio Showcase'],
    caseStudyHref: '/case-studies',
  },
  {
    id: '10',
    title: 'Verdant Botanical Skincare',
    industry: 'E-commerce & Beauty',
    category: 'Squarespace Redesign',
    tags: ['Squarespace Redesign', 'Squarespace Web Design'],
    imageRef: 'verdant-skincare.webp',
    desc: 'High-converting Squarespace e-commerce redesign for botanical skincare brand, featuring custom product layout, subscription pathways, and brand story.',
    services: ['Squarespace Redesign', 'E-commerce Setup', 'Mobile UX'],
    caseStudyHref: '/case-studies',
  },
];

const categories = [
  'All',
  'Squarespace Web Design',
  'Squarespace Redesign',
  'Squarespace SEO',
  'Custom Code',
  'Local SEO',
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory) || p.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#111827] uppercase tracking-wider">
            <Filter className="w-4 h-4 text-[#0F766E]" />
            <span>Filter Projects ({filteredProjects.length}):</span>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Portfolio category filter">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-1 ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-sm'
                      : 'bg-[#FBFBFB] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111827] border border-[#E5E7EB]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              className="bg-[#FBFBFB] border border-[#E5E7EB] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#0F766E]/40 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                {/* Real Image Frame with Lightbox trigger */}
                <div 
                  className="relative w-full h-[220px] bg-[#F1F5F9] border-b border-[#E5E7EB] overflow-hidden group/img cursor-pointer"
                  onClick={() => setSelectedImage(proj)}
                  title="Click to view full image preview"
                >
                  <Image
                    src={`/images/${proj.imageRef}`}
                    alt={`${proj.title} Squarespace Website - Md. Shohan Islam`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="text-[10px] font-semibold text-[#0F766E] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#0F766E]/20 shadow-2xs">
                      {proj.category}
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
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#0F766E]">
                      {proj.industry}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#0F766E] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className="pt-2 border-t border-[#E5E7EB]/60 space-y-1.5">
                    <div className="text-[11px] font-semibold text-[#111827] uppercase tracking-wider">
                      Services Provided:
                    </div>
                    <ul className="space-y-1">
                      {proj.services.map((srv, idx) => (
                        <li key={idx} className="flex items-center text-xs text-[#4B5563]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] mr-1.5 shrink-0" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  href={proj.caseStudyHref}
                  className="inline-flex items-center text-xs font-semibold text-[#0F766E] hover:text-[#0D655E] group/link transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
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
              <div className="space-y-1 max-w-xl">
                <p className="text-xs text-[#4B5563]">{selectedImage.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedImage.services.map((srv, idx) => (
                    <span key={idx} className="text-[10px] font-medium text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
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
