import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Md. Shohan Islam | Squarespace Web Designer & SEO Expert',
  description: 'Professional Squarespace Web Design and SEO Services to help small businesses, consultants, and brands convert visitors into clients.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-[#FBFBFB] text-[#111827] font-sans antialiased selection:bg-[#0F766E] selection:text-white" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

