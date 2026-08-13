const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}, status: ${res.statusCode}`));
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

const projects = [
  {
    filename: 'red-oak-financial-group-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'redoakfinancial.com',
    brandName: 'RED OAK FINANCIAL',
    tagline: 'Private Wealth Management & Advisory',
    headline: 'Tailored Wealth Strategies for Enterprise',
    subtext: 'Custom Squarespace 7.1 Platform | Financial Services SEO',
    badgeText: '+185% Lead Conversion',
    themeColor: '#0F766E',
    navItems: ['Services', 'Wealth Planning', 'Our Team', 'Insights', 'Contact']
  },
  {
    filename: 'rick-smith-golf-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'ricksmithgolf.com',
    brandName: 'RICK SMITH GOLF ACADEMY',
    tagline: 'PGA Master Instruction & Coaching',
    headline: 'Elevate Your Swing with World-Class Coaching',
    subtext: 'Squarespace Booking Engine & Video Analysis Portal',
    badgeText: '3x Online Bookings',
    themeColor: '#15803D',
    navItems: ['Coaching', 'Golf Clinics', 'Video Analysis', 'Locations', 'Book Session']
  },
  {
    filename: 'brilliant-event-planning-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'brillianteventplanning.com',
    brandName: 'BRILLIANT EVENT PLANNING',
    tagline: 'Luxury Weddings & Unforgettable Events',
    headline: 'Bespoke Event Design & Destination Weddings',
    subtext: 'Editorial Portfolio & Interactive Inquiry Workflow',
    badgeText: '2.4M Annual Impressions',
    themeColor: '#D97706',
    navItems: ['Portfolio', 'The Experience', 'Press', 'Journal', 'Inquire']
  },
  {
    filename: 'reflections-perfection-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'reflectionsperfection.com',
    brandName: 'REFLECTIONS PERFECTION',
    tagline: 'Precision Auto Detailing & Ceramic Protection',
    headline: 'Showroom Shine & Paint Protection Film',
    subtext: 'Squarespace Service Packages & Instant Scheduling',
    badgeText: '+210% Local Inquiries',
    themeColor: '#2563EB',
    navItems: ['Ceramic Coating', 'Paint Protection', 'Detailing', 'Packages', 'Reserve']
  },
  {
    filename: 'kan-consultancy-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'kanconsultancy.com',
    brandName: 'KAN CONSULTANCY GROUP',
    tagline: 'Executive Strategy & Corporate Growth',
    headline: 'Transforming Ambition into Market Leadership',
    subtext: 'Corporate Squarespace Redesign & Global SEO Strategy',
    badgeText: '#1 Rank for Advisory',
    themeColor: '#4F46E5',
    navItems: ['Solutions', 'Industries', 'Case Studies', 'Leadership', 'Contact']
  },
  {
    filename: 'next-gen-wash-pros-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'nextgenwashpros.com',
    brandName: 'NEXT GEN WASH PROS',
    tagline: 'Commercial & Residential Power Washing',
    headline: 'Renew Your Property Exterior with Precision',
    subtext: 'Custom Quote Calculator & Real-Time Booking',
    badgeText: '4.9 Rating (180+ Reviews)',
    themeColor: '#0284C7',
    navItems: ['House Wash', 'Roof Cleaning', 'Commercial', 'Reviews', 'Instant Quote']
  },
  {
    filename: 'peter-cowell-squarespace-website.jpg',
    photoUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&auto=format&fit=crop&q=80',
    urlDomain: 'petercowell.com',
    brandName: 'PETER COWELL LANDSCAPE ARCHITECT',
    tagline: 'Award-Winning Residential & Estate Design',
    headline: 'Crafting Timeless Living Outdoor Sanctuaries',
    subtext: 'High-Definition Portfolio Showcase & Architectural Journal',
    badgeText: 'Architectural Digest Featured',
    themeColor: '#16A34A',
    navItems: ['Gardens', 'Estates', 'Philosophy', 'Awards', 'Consultation']
  }
];

function buildUiOverlaySvg({ width, height, urlDomain, brandName, tagline, headline, subtext, badgeText, themeColor, navItems }) {
  const browserHeaderHeight = 44;
  const navHeight = 56;
  
  const navLinksXml = navItems.map((item, idx) => {
    const isCta = idx === navItems.length - 1;
    const safeItem = escapeXml(item);
    if (isCta) {
      return `
        <rect x="${720 + idx * 85}" y="12" width="105" height="32" rx="6" fill="${themeColor}"/>
        <text x="${772 + idx * 85}" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">${safeItem}</text>
      `;
    }
    return `
      <text x="${680 + idx * 80}" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#E2E8F0">${safeItem}</text>
    `;
  }).join('');

  const safeUrlDomain = escapeXml(urlDomain);
  const safeBrandName = escapeXml(brandName);
  const safeTagline = escapeXml(tagline);
  const safeHeadline = escapeXml(headline);
  const safeSubtext = escapeXml(subtext);
  const safeBadgeText = escapeXml(badgeText);

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A" stop-opacity="0.82"/>
        <stop offset="60%" stop-color="#0F172A" stop-opacity="0.65"/>
        <stop offset="100%" stop-color="#020617" stop-opacity="0.85"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
      </filter>
    </defs>

    <!-- Dark gradient overlay over photo -->
    <rect width="${width}" height="${height}" fill="url(#overlayGrad)" />

    <!-- Browser Window Bar (Top) -->
    <rect width="${width}" height="${browserHeaderHeight}" fill="#1E293B" />
    <!-- Window buttons -->
    <circle cx="20" cy="22" r="5.5" fill="#EF4444" />
    <circle cx="36" cy="22" r="5.5" fill="#F59E0B" />
    <circle cx="52" cy="22" r="5.5" fill="#10B981" />

    <!-- URL Bar -->
    <rect x="180" y="9" width="840" height="26" rx="13" fill="#0F172A" opacity="0.9" />
    <text x="600" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94A3B8" text-anchor="middle">
      https://${safeUrlDomain}
    </text>

    <!-- Website Header Navigation Bar -->
    <g transform="translate(0, ${browserHeaderHeight})">
      <rect width="${width}" height="${navHeight}" fill="#0F172A" opacity="0.85" />
      <line x1="0" y1="${navHeight}" x2="${width}" y2="${navHeight}" stroke="#334155" stroke-width="1"/>

      <!-- Brand Logo & Name -->
      <circle cx="48" cy="28" r="14" fill="${themeColor}" />
      <text x="48" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">S</text>
      <text x="72" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">${safeBrandName}</text>

      <!-- Navigation Links -->
      ${navLinksXml}
    </g>

    <!-- Website Hero Content -->
    <g transform="translate(60, 160)">
      <!-- Badge tag -->
      <rect x="0" y="0" width="220" height="28" rx="14" fill="${themeColor}" fill-opacity="0.9" />
      <text x="110" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">SQUARESPACE 7.1 WEBSITE</text>

      <!-- Main Headline -->
      <text x="0" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" filter="url(#shadow)">
        ${safeHeadline}
      </text>

      <!-- Subtext -->
      <text x="0" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#CBD5E1">
        ${safeTagline} — ${safeSubtext}
      </text>

      <!-- CTA Buttons -->
      <rect x="0" y="130" width="160" height="44" rx="8" fill="${themeColor}" />
      <text x="80" y="157" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">Explore Website</text>

      <rect x="175" y="130" width="160" height="44" rx="8" fill="#1E293B" stroke="#475569" stroke-width="1" />
      <text x="255" y="157" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0" text-anchor="middle">View Case Study</text>
    </g>

    <!-- Bottom Metric Card Badge (Floating in lower right) -->
    <g transform="translate(${width - 320}, ${height - 110})">
      <rect width="260" height="60" rx="12" fill="#0F172A" fill-opacity="0.92" stroke="#334155" stroke-width="1.5" filter="url(#shadow)" />
      <circle cx="36" cy="30" r="16" fill="${themeColor}" fill-opacity="0.2" />
      <text x="36" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="${themeColor}" text-anchor="middle">✓</text>
      
      <text x="64" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#94A3B8">RESULT DELIVERED</text>
      <text x="64" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#F8FAFC">${safeBadgeText}</text>
    </g>

    <!-- Squarespace Design Watermark tag -->
    <g transform="translate(${width - 240}, ${browserHeaderHeight + navHeight + 20})">
      <rect width="180" height="32" rx="6" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1" />
      <text x="90" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#38BDF8" text-anchor="middle">Design by Md. Shohan Islam</text>
    </g>

  </svg>
  `;
}

async function processProject(proj) {
  console.log(`Processing ${proj.filename}...`);
  const targetPath = path.join(__dirname, '../public/images', proj.filename);

  try {
    const photoBuffer = await fetchBuffer(proj.photoUrl);
    
    // Resize photo to 1200x750
    const width = 1200;
    const height = 750;

    const resizedPhoto = await sharp(photoBuffer)
      .resize(width, height, { fit: 'cover', position: 'center' })
      .toBuffer();

    const overlaySvg = buildUiOverlaySvg({
      width,
      height,
      ...proj
    });

    const overlayBuffer = Buffer.from(overlaySvg);

    // Composite overlay onto background photo
    await sharp(resizedPhoto)
      .composite([{ input: overlayBuffer, top: 0, left: 0 }])
      .jpeg({ quality: 92 })
      .toFile(targetPath);

    console.log(`✓ Successfully saved: ${proj.filename}`);
  } catch (err) {
    console.error(`X Error processing ${proj.filename}:`, err);
  }
}

async function main() {
  console.log('Starting dummy project images generation...');
  for (const proj of projects) {
    await processProject(proj);
  }
  console.log('All dummy project images updated successfully!');
}

main();
