'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen, Tag } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '@/lib/blog-data';

export default function BlogFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');

  const featuredPost = BLOG_POSTS[0]; // Featured article

  const filteredPosts =
    selectedCategory === 'All Articles'
      ? BLOG_POSTS.slice(1) // Exclude featured from grid if showing all, or keep all
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* CATEGORY FILTER SYSTEM */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111827]">
              Explore by Category
            </h2>
            <p className="text-xs text-[#4B5563]">
              Filter articles by strategic topic and technical specialization.
            </p>
          </div>
          <span className="text-xs font-mono text-[#0F766E] bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20 hidden sm:inline-block">
            {BLOG_POSTS.length} Published Insights
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-b border-[#E5E7EB] pb-6" role="tablist" aria-label="Blog category filters">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                  isActive
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827] hover:border-[#0F766E]/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED ARTICLE (Only shown when 'All Articles' is selected or matched category) */}
      {(selectedCategory === 'All Articles' || selectedCategory === featuredPost.category) && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold text-[#0F766E] uppercase tracking-wider">
              Featured Editorial Insight
            </span>
          </div>

          <article className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-[#0F766E] transition-all shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-semibold text-[#0F766E] bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
                  {featuredPost.category}
                </span>
                <span className="text-[#4B5563] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
                <span className="text-[#4B5563] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredPost.date}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] group-hover:text-[#0F766E] transition-colors leading-tight">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h3>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#E5E7EB]/80">
                <div className="text-xs font-medium text-[#111827]">
                  By {featuredPost.author.name} — <span className="text-[#4B5563]">{featuredPost.author.role}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#0F766E] group-hover:text-[#0D655E]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Featured Image Graphic Placeholder */}
            <div className="lg:col-span-5 bg-[#FBFBFB] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 h-full min-h-[220px] relative overflow-hidden group-hover:border-[#0F766E]/40 transition-colors">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                  Editorial Placeholder Graphic
                </div>
                <p className="text-[11px] text-[#4B5563]">
                  {featuredPost.featuredImageAlt}
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#0F766E] border-t border-[#E5E7EB] pt-3">
                <span>Article Ref: 01</span>
                <span>Verified Content</span>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111827]">
            {selectedCategory === 'All Articles' ? 'Recent Articles & Guides' : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs text-[#4B5563]">
            Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-12 text-center space-y-3">
            <Tag className="w-8 h-8 text-[#0F766E] mx-auto" />
            <p className="text-sm font-semibold text-[#111827]">No articles in this category yet.</p>
            <p className="text-xs text-[#4B5563]">
              Articles in this category are being prepared and will be published shortly.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All Articles')}
              className="text-xs font-bold text-[#0F766E] underline pt-2"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-[#0F766E] transition-all group shadow-2xs"
              >
                <div className="space-y-3">
                  {/* Article Card Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#E5E7EB] pb-3 text-xs">
                    <span className="font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-0.5 rounded border border-[#0F766E]/20 text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[#4B5563] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#0F766E] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Article Card Footer */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#4B5563] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-bold text-[#0F766E] group-hover:text-[#0D655E] text-xs"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
