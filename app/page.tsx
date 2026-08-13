import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CredibilityStrip from '@/components/CredibilityStrip';
import AboutPreview from '@/components/AboutPreview';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseMe from '@/components/WhyChooseMe';
import FeaturedPortfolio from '@/components/FeaturedPortfolio';
import ProcessSection from '@/components/ProcessSection';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqAccordion from '@/components/FaqAccordion';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
  description: 'Professional Squarespace Web Design and SEO Services to help small businesses, consultants, and brands convert visitors into clients.',
  alternates: {
    canonical: 'https://shohan.allservix.com/',
  },
  openGraph: {
    title: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
    description: 'Professional Squarespace Web Design and SEO Services to help small businesses, consultants, and brands convert visitors into clients.',
    url: 'https://shohan.allservix.com/',
    siteName: 'Md. Shohan Islam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
    description: 'Professional Squarespace Web Design and SEO Services to help small businesses, consultants, and brands convert visitors into clients.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <JsonLd />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <CredibilityStrip />
        <AboutPreview />
        <ServicesSection />
        <WhyChooseMe />
        <FeaturedPortfolio />
        <ProcessSection />
        <FeaturedCaseStudy />
        <TestimonialsSection />
        <FaqAccordion />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
