import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  BookOpen,
  List,
  CheckCircle2,
  Share2,
  Sparkles,
  ArrowLeft,
  Search,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Md. Shohan Islam',
    };
  }

  const canonicalUrl = `https://shohan.allservix.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Md. Shohan Islam`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Md. Shohan Islam`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: 'Md. Shohan Islam',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: ['Md. Shohan Islam'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Md. Shohan Islam`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://shohan.allservix.com/blog/${post.slug}`;

  // Get 3 related articles (excluding current article)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Generate Article Schema JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
          url: canonicalUrl,
          name: post.title,
        },
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.updatedDate || post.date,
        mainEntityOfPage: canonicalUrl,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
          url: 'https://shohan.allservix.com/about',
        },
        publisher: {
          '@type': 'Person',
          name: 'Md. Shohan Islam',
          url: 'https://shohan.allservix.com',
        },
        articleSection: post.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://shohan.allservix.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://shohan.allservix.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        {/* ARTICLE HEADER & HERO */}
        <header className="py-12 md:py-16 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-[#0F766E] font-semibold hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Blog Hub</span>
                </Link>
                <span className="text-[#E5E7EB]">|</span>
                <span className="font-semibold text-[#0F766E] bg-[#F0FDFA] px-3 py-0.5 rounded-full border border-[#0F766E]/20">
                  {post.category}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15]">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author & Meta Row */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4 text-xs text-[#4B5563]">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#0F766E]/30 shrink-0 shadow-2xs">
                    <Image
                      src="/images/md-shohan-islam-squarespace-web-designer.jpg"
                      alt="Md. Shohan Islam"
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#111827]">{post.author.name}</div>
                    <div className="text-[11px] text-[#4B5563]">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0F766E]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0F766E]" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN ARTICLE CONTENT CONTAINER */}
        <section className="py-12 md:py-20 bg-[#FBFBFB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* SIDEBAR TABLE OF CONTENTS (DESKTOP sticky & MOBILE top block) */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
                    <List className="w-4 h-4 text-[#0F766E]" />
                    <h2 className="font-heading font-bold text-sm text-[#111827] uppercase tracking-wider">
                      On This Page
                    </h2>
                  </div>

                  <nav aria-label="Table of Contents">
                    <ul className="space-y-2 text-xs">
                      {post.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block text-[#4B5563] hover:text-[#0F766E] hover:translate-x-1 transition-all py-1 border-b border-[#E5E7EB]/40 last:border-0"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* DIRECT SERVICE PROMPT CARD */}
                <div className="bg-[#F0FDFA] border border-[#0F766E]/30 p-6 rounded-2xl space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                    Need Implementation Help?
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#111827]">
                    Work directly with Md. Shohan Islam
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Get custom website design, redesign, SEO, or code solutions tailored for your business.
                  </p>
                  <Link
                    href={post.relatedService}
                    className="inline-flex items-center text-xs font-bold text-[#0F766E] hover:underline pt-1"
                  >
                    <span>View {post.relatedServiceName}</span>
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </aside>

              {/* ARTICLE BODY (720px - 800px max width for ideal typography) */}
              <article className="lg:col-span-8 bg-white border border-[#E5E7EB] p-6 sm:p-10 lg:p-12 rounded-2xl space-y-10 shadow-2xs">
                
                {/* Introduction Section */}
                <section id="introduction" className="space-y-4 border-b border-[#E5E7EB] pb-8">
                  {post.introduction.map((paragraph, index) => (
                    <p key={index} className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>

                {/* Article Sections */}
                {post.sections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-28 border-b border-[#E5E7EB] pb-8 last:border-0">
                    <h2 className="font-heading font-bold text-2xl text-[#111827] tracking-tight">
                      {sec.title}
                    </h2>

                    {sec.content.map((p, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {sec.quote && (
                      <blockquote className="my-6 p-5 bg-[#FBFBFB] border-l-4 border-[#0F766E] text-xs sm:text-sm text-[#111827] italic font-medium rounded-r-xl">
                        &quot;{sec.quote}&quot;
                      </blockquote>
                    )}

                    {sec.bullets && (
                      <ul className="space-y-2.5 pt-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {/* Optional Article FAQs */}
                {post.faqs && post.faqs.length > 0 && (
                  <section id="article-faq" className="space-y-6 pt-4 border-t border-[#E5E7EB]">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                        ARTICLE FAQ
                      </span>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111827]">
                        Frequently Asked Questions
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {post.faqs.map((faq, fIdx) => (
                        <details
                          key={fIdx}
                          className="group bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden"
                        >
                          <summary className="flex items-center justify-between font-heading font-bold text-sm text-[#111827] cursor-pointer list-none select-none">
                            <span>{faq.q}</span>
                            <span className="ml-2 text-[#0F766E] transition-transform duration-200 group-open:rotate-180">
                              ↓
                            </span>
                          </summary>
                          <p className="mt-2 text-xs text-[#4B5563] leading-relaxed pt-2 border-t border-[#E5E7EB]">
                            {faq.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* CONTEXTUAL RELATED SERVICE CALLOUT */}
                <div className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#0F766E]" />
                    <span>Related Professional Service</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#111827]">
                      Explore {post.relatedServiceName}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Transform your website with professional design, speed enhancements, and strategic search engine optimization delivered directly by Md. Shohan Islam.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={post.relatedService}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0F766E] text-white font-semibold text-xs rounded-lg hover:bg-[#0D655E] transition-all"
                    >
                      <span>Explore {post.relatedServiceName} Service</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-[#111827] font-semibold text-xs rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB] transition-all"
                    >
                      <span>Get Project Quote</span>
                    </Link>
                  </div>
                </div>

              </article>

            </div>
          </div>
        </section>

        {/* REUSABLE RELATED ARTICLES COMPONENT */}
        <section className="py-16 bg-white border-t border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[#0F766E] uppercase">
                  MORE READS
                </span>
                <h2 className="font-heading font-bold text-2xl text-[#111827]">
                  Related Articles &amp; Insights
                </h2>
              </div>
              <Link href="/blog" className="text-xs font-bold text-[#0F766E] hover:underline hidden sm:inline-block">
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.slug}
                  className="bg-[#FBFBFB] border border-[#E5E7EB] p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-[#0F766E] transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-[#E5E7EB] pb-2">
                      <span className="font-semibold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded text-[10px] border border-[#0F766E]/20">
                        {rel.category}
                      </span>
                      <span className="text-[10px] text-[#4B5563]">{rel.readTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-[#111827] group-hover:text-[#0F766E] transition-colors leading-snug">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>

                    <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#0F766E] group-hover:text-[#0D655E]"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 bg-[#FBFBFB] border-t border-[#E5E7EB]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xs">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111827]">
                Ready to Work With Md. Shohan Islam?
              </h2>
              <p className="text-sm text-[#4B5563] max-w-lg mx-auto">
                Discuss your Squarespace website design, redesign, SEO, or custom code requirements today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F766E] text-white font-semibold text-sm rounded-lg hover:bg-[#0D655E] transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] font-semibold text-sm rounded-lg border border-[#E5E7EB] hover:bg-[#FBFBFB]"
                >
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
