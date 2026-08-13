import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const faqs = [
    {
      q: 'What does a Squarespace web design project include?',
      a: 'A standard custom Squarespace project includes initial discovery, custom layout architecture, responsive styling for desktop and mobile, content formatting, fundamental on-page SEO setup, and pre-launch testing to ensure your site functions smoothly.',
    },
    {
      q: 'Can you redesign my existing Squarespace website?',
      a: 'Yes. A redesign focuses on modernizing your visual presentation, streamlining page navigation, improving user experience, and restructuring page elements to better support your current business goals.',
    },
    {
      q: 'Can you help with Squarespace SEO?',
      a: 'Yes. I provide practical Squarespace SEO services including structured heading hierarchies, meta titles and descriptions, image alt text optimization, URL slug refinement, and XML sitemap configuration for indexing.',
    },
    {
      q: 'Can you add custom CSS or JavaScript?',
      a: 'Yes. When built-in Squarespace options are limited, I implement clean, lightweight custom CSS and JavaScript to achieve specific visual layouts or custom interactive features without causing layout conflicts.',
    },
    {
      q: 'Can you fix problems on an existing Squarespace website?',
      a: 'Yes. I offer Squarespace bug fixing to resolve broken mobile layouts, custom code conflicts, alignment glitches, and navigation bugs on existing Squarespace 7.0 and 7.1 websites.',
    },
    {
      q: 'How long does a Squarespace website project take?',
      a: 'Project timelines vary based on overall scope, the number of unique pages, custom feature requirements, content readiness, and review turnaround times. Timeline details are discussed during initial project planning.',
    },
    {
      q: 'Do you provide ongoing Squarespace maintenance?',
      a: 'Yes. I offer maintenance support to assist with routine content updates, layout adjustments, speed checks, and ongoing site refinements so your website stays up to date.',
    },
    {
      q: 'How do I get started?',
      a: 'You can get started by filling out the project contact form with details about your business, current website (if any), timeline, and goals. I will review your requirements and follow up with recommended next steps.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
            Common Questions About Squarespace Web Design
          </h2>
          <p className="text-base text-[#4B5563]">
            Clear answers to help you understand the process, services, and working approach.
          </p>
        </div>

        {/* Semantic Accessible Accordion using <details> and <summary> */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0F766E]/40 transition-colors [&[open]]:bg-white [&[open]]:border-[#0F766E]/50 [&[open]]:shadow-xs"
            >
              <summary className="flex items-center justify-between font-heading font-bold text-base text-[#111827] cursor-pointer list-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded p-1">
                <span className="pr-4">{faq.q}</span>
                <span className="ml-2 w-6 h-6 rounded-full bg-[#F0FDFA] border border-[#0F766E]/30 text-[#0F766E] flex items-center justify-center text-sm font-bold shrink-0 group-open:rotate-180 transition-transform duration-200">
                  ↓
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-sm text-[#4B5563] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
