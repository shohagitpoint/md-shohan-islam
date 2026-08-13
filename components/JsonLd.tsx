import React from 'react';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://shohan.allservix.com/#person',
        name: 'Md. Shohan Islam',
        jobTitle: 'Squarespace Web Designer & SEO Expert',
        description: 'Professional Squarespace Web Designer and SEO Expert specializing in custom web design, website redesign, custom CSS/JS, and search engine optimization.',
        knowsAbout: [
          'Squarespace Web Design',
          'Squarespace SEO',
          'Website Redesign',
          'Custom Code Integration',
          'Local SEO',
          'User Experience Design',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://shohan.allservix.com/#website',
        url: 'https://shohan.allservix.com',
        name: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
        description: 'Professional Squarespace web design, website redesign and SEO services by Md. Shohan Islam.',
        publisher: {
          '@id': 'https://shohan.allservix.com/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://shohan.allservix.com/#service',
        name: 'Md. Shohan Islam | Squarespace Web Design & SEO Services',
        alternateName: 'ShohagITpoint',
        description: 'Custom Squarespace website design, redesign, SEO optimization, and maintenance services for businesses and brands by Md. Shohan Islam.',
        provider: {
          '@id': 'https://shohan.allservix.com/#person',
        },
        areaServed: ['USA', 'UK', 'Canada', 'Australia'],
        serviceType: [
          'Squarespace Web Design',
          'Squarespace Website Redesign',
          'Squarespace SEO',
          'Squarespace Custom Code',
          'Squarespace Bug Fixing',
          'Squarespace Website Maintenance',
          'Local SEO',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
