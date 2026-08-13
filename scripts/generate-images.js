const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function generateMacBookSvg(title, subtitle, headerBg, accentColor, heroContentSvg) {
  const isDark = headerBg === '#111827' || headerBg === '#0F172A' || headerBg === '#0284C7' || headerBg === '#166534';
  const textColor = isDark ? '#FFFFFF' : '#1E293B';
  const navColor = isDark ? '#E2E8F0' : '#64748B';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 625" width="100%" height="100%">
  <defs>
    <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="macbookBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="1000" height="625" fill="#F8FAFC"/>

  <!-- MacBook Group with Shadow -->
  <g filter="url(#shadow)" transform="translate(50, 25)">
    <!-- Display Bezel -->
    <rect x="50" y="20" width="800" height="510" rx="20" ry="20" fill="#0F172A" stroke="#334155" stroke-width="3"/>
    
    <!-- Camera Dot -->
    <circle cx="450" cy="32" r="4" fill="#334155"/>
    
    <!-- Screen Viewport -->
    <rect x="62" y="44" width="776" height="474" fill="#FFFFFF" rx="4" ry="4"/>
    
    <!-- Website Content Inside Screen -->
    <g transform="translate(62, 44)">
      <!-- Header Bar -->
      <rect x="0" y="0" width="776" height="48" fill="${headerBg}"/>
      <text x="32" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${textColor}">${title}</text>
      
      <!-- Nav Menu Items Mockup -->
      <g transform="translate(380, 28)" fill="${navColor}" font-family="system-ui, sans-serif" font-size="11" font-weight="500">
        <text x="0" y="0">HOME</text>
        <text x="50" y="0">ABOUT</text>
        <text x="110" y="0">SERVICES</text>
        <text x="180" y="0">PORTFOLIO</text>
        <text x="260" y="0">CONTACT</text>
      </g>
      <rect x="700" y="14" width="60" height="22" rx="4" fill="${accentColor}"/>
      <text x="730" y="29" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">CONTACT</text>

      <!-- Hero Section -->
      ${heroContentSvg}
    </g>

    <!-- MacBook Hinge & Base -->
    <path d="M 30,530 L 870,530 C 885,530 890,538 880,546 L 860,555 C 850,560 50,560 40,555 L 20,546 C 10,538 15,530 30,530 Z" fill="url(#macbookBody)"/>
    <rect x="400" y="530" width="100" height="6" rx="3" fill="#64748B"/>
    <text x="450" y="547" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#475569" text-anchor="middle">MacBook Pro</text>
  </g>
</svg>`;
}

// 1. Red Oak Financial Group
const redOakHero = `
  <rect x="0" y="48" width="776" height="426" fill="#F8FAFC"/>
  <rect x="0" y="48" width="776" height="260" fill="#1E293B" opacity="0.85"/>
  <text x="40" y="120" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#FFFFFF">Big Enough to Serve You.</text>
  <text x="40" y="155" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#FFFFFF">Small Enough to Know You.</text>
  <text x="40" y="190" font-family="system-ui, sans-serif" font-size="13" fill="#E2E8F0">Financial &amp; Wealth Management Services on Squarespace</text>
  
  <rect x="40" y="210" width="130" height="36" rx="4" fill="#DC2626"/>
  <text x="105" y="233" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">LEARN MORE</text>

  <rect x="40" y="320" width="400" height="120" fill="#FFFFFF" rx="8" stroke="#E2E8F0"/>
  <text x="60" y="350" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#111827">Red Oak Financial Group</text>
  <text x="60" y="375" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Retirement, wealth &amp; estate planning for individuals and families.</text>
  <rect x="60" y="390" width="120" height="28" rx="4" fill="#DC2626"/>
  <text x="120" y="408" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">OUR BROCHURE</text>

  <rect x="460" y="320" width="276" height="120" fill="#DC2626" rx="8"/>
  <text x="600" y="370" font-family="Georgia, serif" font-size="14" fill="#FFFFFF" text-anchor="middle">Integrating History &amp; Meaning Since</text>
  <text x="600" y="410" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#FFFFFF" text-anchor="middle">1978</text>
`;
fs.writeFileSync(path.join(dir, 'red-oak-financial-group-squarespace-website.jpg'), generateMacBookSvg('Red Oak Financial Group', 'Wealth Management', '#FFFFFF', '#DC2626', redOakHero));

// 2. Rick Smith Golf
const rickSmithHero = `
  <rect x="0" y="48" width="776" height="426" fill="#0F172A"/>
  <rect x="0" y="48" width="776" height="300" fill="#15803D" opacity="0.4"/>
  <circle cx="580" cy="220" r="140" fill="#166534" opacity="0.6"/>
  <circle cx="580" cy="180" r="50" fill="#38BDF8" opacity="0.8"/>
  <path d="M 500,280 C 500,230 660,230 660,280 Z" fill="#1E293B"/>

  <text x="50" y="140" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF">RICK SMITH GOLF</text>
  <text x="50" y="175" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#38BDF8">INSTRUCTOR TO GOLF’S GREATEST CHAMPIONS</text>
  <text x="50" y="200" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">Award-Winning Golf Course Architect &amp; PGA Master Professional</text>

  <rect x="50" y="230" width="160" height="36" rx="4" fill="#0284C7"/>
  <text x="130" y="253" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">EXPLORE ACADEMIES</text>

  <rect x="50" y="320" width="676" height="110" fill="#1E293B" rx="8" stroke="#334155"/>
  <text x="70" y="350" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">GOLF ACADEMIES &amp; LOCATIONS</text>
  <text x="70" y="375" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">BOYNE Highlands • Trump National Doral • Treetops Resort • National Instruction</text>
`;
fs.writeFileSync(path.join(dir, 'rick-smith-golf-squarespace-website.jpg'), generateMacBookSvg('Rick Smith Golf', 'Sports Branding', '#111827', '#0284C7', rickSmithHero));

// 3. Brilliant Event Planning
const eventHero = `
  <rect x="0" y="48" width="776" height="426" fill="#FAF5FF"/>
  <rect x="40" y="80" width="696" height="260" fill="#F3E8FF" rx="12" stroke="#E9D5FF"/>
  <path d="M 40,160 Q 388,60 736,160 L 736,340 L 40,340 Z" fill="#FBF7EE" opacity="0.9"/>
  <circle cx="200" cy="240" r="40" fill="#F472B6" opacity="0.5"/>
  <circle cx="580" cy="240" r="40" fill="#F472B6" opacity="0.5"/>
  
  <text x="388" y="160" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#4C1D95" text-anchor="middle">Brilliant Event Planning</text>
  <text x="388" y="190" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#6B21A8" text-anchor="middle">Luxury Wedding &amp; High-End Event Designers</text>
  
  <rect x="318" y="210" width="140" height="34" rx="17" fill="#7C3AED"/>
  <text x="388" y="232" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">START PLANNING</text>

  <rect x="40" y="360" width="696" height="80" fill="#FFFFFF" rx="8" stroke="#E9D5FF"/>
  <text x="60" y="395" font-family="Georgia, serif" font-size="13" font-weight="700" fill="#4C1D95">Featured In: Vogue Weddings • Martha Stewart • Harper’s Bazaar</text>
  <text x="60" y="418" font-family="system-ui, sans-serif" font-size="11" fill="#6B21A8">New York • Boston • Destination Weddings Worldwide</text>
`;
fs.writeFileSync(path.join(dir, 'brilliant-event-planning-squarespace-website.jpg'), generateMacBookSvg('Brilliant Event Planning', 'Luxury Wedding Planning', '#FFFFFF', '#7C3AED', eventHero));

// 4. Reflections Perfection
const detailingHero = `
  <rect x="0" y="48" width="776" height="426" fill="#0284C7"/>
  <rect x="0" y="48" width="776" height="280" fill="#0369A1"/>
  <circle cx="600" cy="180" r="100" fill="#38BDF8" opacity="0.3"/>
  <path d="M 400,280 L 776,120 L 776,280 Z" fill="#7DD3FC" opacity="0.25"/>

  <text x="40" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#FFFFFF">MOBILE CAR DETAILING IN FRANKLIN, TN</text>
  <text x="40" y="150" font-family="system-ui, sans-serif" font-size="13" fill="#E0F2FE">At-Your-Door Auto Detailing &amp; Ceramic Coating Service</text>
  
  <text x="40" y="180" font-family="system-ui, sans-serif" font-size="14" fill="#FDE047">★ ★ ★ ★ ★ 5-Star Rated on Google with Over 100 Reviews</text>

  <rect x="40" y="200" width="150" height="38" rx="4" fill="#0EA5E9"/>
  <text x="115" y="224" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">BOOK ONLINE NOW</text>

  <rect x="40" y="350" width="210" height="60" fill="#FFFFFF" rx="6"/>
  <text x="145" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369A1" text-anchor="middle">✓ FULL DETAILING</text>

  <rect x="280" y="350" width="210" height="60" fill="#FFFFFF" rx="6"/>
  <text x="385" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369A1" text-anchor="middle">✓ EXTERIOR DETAILING</text>

  <rect x="520" y="350" width="210" height="60" fill="#FFFFFF" rx="6"/>
  <text x="625" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369A1" text-anchor="middle">✓ INTERIOR DETAILING</text>
`;
fs.writeFileSync(path.join(dir, 'reflections-perfection-squarespace-website.jpg'), generateMacBookSvg('Reflections Perfection', 'Auto Detailing', '#0284C7', '#0EA5E9', detailingHero));

// 5. KAN Consultancy
const kanHero = `
  <rect x="0" y="48" width="776" height="426" fill="#F1F5F9"/>
  <rect x="40" y="80" width="696" height="260" fill="#1E293B" rx="8"/>
  <text x="80" y="150" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#FFFFFF">Strategic Management &amp; Corporate Advisory</text>
  <text x="80" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Transforming business operations, risk assessment, and executive growth.</text>
  
  <rect x="80" y="210" width="160" height="36" rx="4" fill="#0F766E"/>
  <text x="160" y="233" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">OUR SERVICES</text>

  <rect x="40" y="360" width="218" height="80" fill="#FFFFFF" rx="6" stroke="#CBD5E1"/>
  <text x="60" y="395" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0F172A">Business Strategy</text>
  
  <rect x="278" y="360" width="218" height="80" fill="#FFFFFF" rx="6" stroke="#CBD5E1"/>
  <text x="298" y="395" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0F172A">Operational Audit</text>

  <rect x="516" y="360" width="220" height="80" fill="#FFFFFF" rx="6" stroke="#CBD5E1"/>
  <text x="536" y="395" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0F172A">Executive Growth</text>
`;
fs.writeFileSync(path.join(dir, 'kan-consultancy-squarespace-website.jpg'), generateMacBookSvg('KAN Consultancy', 'Corporate Consulting', '#0F172A', '#0F766E', kanHero));

// 6. Next Gen Wash Pros
const washProsHero = `
  <rect x="0" y="48" width="776" height="426" fill="#F0FDF4"/>
  <rect x="40" y="80" width="696" height="260" fill="#15803D" rx="10"/>
  <text x="80" y="140" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#FFFFFF">NEXT GEN WASH PROS</text>
  <text x="80" y="175" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#BBF7D0">Professional Soft Wash &amp; Pressure Washing Services</text>
  
  <rect x="80" y="200" width="160" height="38" rx="4" fill="#EAB308"/>
  <text x="160" y="224" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803D" text-anchor="middle">FREE ESTIMATE</text>

  <rect x="40" y="360" width="696" height="70" fill="#FFFFFF" rx="6" stroke="#BBF7D0"/>
  <text x="60" y="400" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#166534">Roof Cleaning • House Washing • Concrete Sealing • Commercial Pressure Washing</text>
`;
fs.writeFileSync(path.join(dir, 'next-gen-wash-pros-squarespace-website.jpg'), generateMacBookSvg('Next Gen Wash Pros', 'Exterior Cleaning', '#166534', '#EAB308', washProsHero));

// 7. Peter Cowell
const peterCowellHero = `
  <rect x="0" y="48" width="776" height="426" fill="#052E16"/>
  <rect x="0" y="48" width="776" height="300" fill="#022C22"/>
  <circle cx="388" cy="220" r="120" fill="#FDE047" opacity="0.2"/>

  <text x="388" y="130" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">Peter Cowell</text>
  <text x="388" y="155" font-family="Georgia, serif" font-size="14" fill="#6EE7B7" text-anchor="middle">GARDEN DESIGN &amp; LANDSCAPE ARCHITECTURE</text>
  <text x="388" y="200" font-family="Georgia, serif" font-size="20" font-style="italic" fill="#FDE047" text-anchor="middle">Outdoor Lighting &amp; Luxury Landscapes</text>

  <rect x="318" y="230" width="140" height="34" rx="4" fill="#059669"/>
  <text x="388" y="252" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">SPEAK TO THE TEAM</text>

  <rect x="40" y="360" width="696" height="70" fill="#064E3B" rx="6"/>
  <text x="388" y="400" font-family="Georgia, serif" font-size="12" fill="#E6F4EA" text-anchor="middle">Bespoke Residential Gardens • Lighting Design • Planting Schemes • UK &amp; International</text>
`;
fs.writeFileSync(path.join(dir, 'peter-cowell-squarespace-website.jpg'), generateMacBookSvg('Peter Cowell Garden Design', 'Landscape Architecture', '#022C22', '#059669', peterCowellHero));

// 8. Md. Shohan Islam Professional Headshot SVG
const headshotSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="headshotBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="50%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="poloColor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#CBD5E1"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
  </defs>

  <!-- Clean Office Studio Background -->
  <rect width="800" height="1000" fill="url(#headshotBg)"/>
  
  <rect x="100" y="50" width="200" height="900" fill="#FFFFFF" opacity="0.5"/>
  <rect x="500" y="100" width="250" height="800" fill="#FFFFFF" opacity="0.6"/>

  <!-- Body / Sage Light Polo -->
  <path d="M 220,700 C 220,580 580,580 580,700 L 620,1000 L 180,1000 Z" fill="url(#poloColor)"/>
  <path d="M 330,620 L 400,690 L 470,620 L 440,590 L 400,620 L 360,590 Z" fill="#FFFFFF"/>
  <line x1="400" y1="690" x2="400" y2="760" stroke="#64748B" stroke-width="2"/>
  <circle cx="400" cy="715" r="4" fill="#94A3B8"/>

  <!-- Neck -->
  <rect x="350" y="480" width="100" height="130" fill="#E2A782" rx="10"/>

  <!-- Head -->
  <ellipse cx="400" cy="380" rx="130" ry="160" fill="#EBB28C"/>
  
  <!-- Short Trimmed Dark Hair -->
  <path d="M 270,360 C 260,240 540,240 530,360 C 520,220 280,220 270,360 Z" fill="#1E293B"/>
  
  <!-- Goatee -->
  <path d="M 370,480 Q 400,520 430,480 Q 400,500 370,480 Z" fill="#334155"/>

  <!-- Eyes & Eyebrows -->
  <path d="M 320,345 Q 345,335 370,345" stroke="#1E293B" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M 430,345 Q 455,335 480,345" stroke="#1E293B" stroke-width="6" fill="none" stroke-linecap="round"/>
  
  <ellipse cx="345" cy="365" rx="12" ry="10" fill="#1E293B"/>
  <ellipse cx="455" cy="365" rx="12" ry="10" fill="#1E293B"/>

  <!-- Nose & Warm Smile -->
  <path d="M 400,365 L 395,410 L 410,410" stroke="#C68A64" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 350,445 Q 400,475 450,445" stroke="#9A593A" stroke-width="5" fill="none" stroke-linecap="round"/>

  <!-- Rectangular Black Glasses -->
  <rect x="300" y="340" width="90" height="50" rx="8" fill="none" stroke="#0F172A" stroke-width="7"/>
  <rect x="410" y="340" width="90" height="50" rx="8" fill="none" stroke="#0F172A" stroke-width="7"/>
  <line x1="390" y1="360" x2="410" y2="360" stroke="#0F172A" stroke-width="7"/>
  <line x1="270" y1="355" x2="300" y2="355" stroke="#0F172A" stroke-width="6"/>
  <line x1="500" y1="355" x2="530" y2="355" stroke="#0F172A" stroke-width="6"/>

  <rect x="40" y="910" width="720" height="50" rx="8" fill="#FFFFFF" opacity="0.9"/>
  <text x="400" y="942" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F766E" text-anchor="middle">Md. Shohan Islam — Squarespace Web Designer &amp; SEO Expert</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'md-shohan-islam-squarespace-web-designer.jpg'), headshotSvg);
fs.writeFileSync(path.join(dir, 'md-shohag-islam-squarespace-web-designer.jpg'), headshotSvg);

console.log('Successfully created all portfolio project images and headshots in public/images/');
