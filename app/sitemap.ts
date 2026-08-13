import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shohan.allservix.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/squarespace-web-design',
    '/services/squarespace-redesign',
    '/services/squarespace-seo',
    '/services/squarespace-custom-code',
    '/services/squarespace-bug-fixing',
    '/services/squarespace-maintenance',
    '/services/local-seo',
    '/portfolio',
    '/case-studies',
    '/testimonials',
    '/blog',
    '/contact',
    '/privacy-policy',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-10'),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date('2026-08-10'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
