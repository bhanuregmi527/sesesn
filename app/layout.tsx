import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: {
    default: 'SESESN | Bioplastic Solutions',
    template: '%s | SESESN',
  },
  description:
    'SESESN develops bio-based, biodegradable, and compostable Bioplastic solutions for premium eco-conscious brands.',
  metadataBase: new URL('https://sesesn.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SESESN | Bioplastic Solutions',
    description:
      'Bio-based, biodegradable, and compostable Bioplastic solutions for premium eco-conscious brands.',
    url: 'https://sesesn.com',
    siteName: 'SESESN',
    type: 'website',
    images: [
      {
        url: '/og-sesesn.jpg',
        width: 1200,
        height: 630,
        alt: 'SESESN eco packaging preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SESESN | Bioplastic Solutions',
    description:
      'Bio-based, biodegradable, and compostable Bioplastic solutions for premium eco-conscious brands.',
    images: ['/og-sesesn.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-sand text-slate-900 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(149,213,178,0.18),transparent_38%),linear-gradient(180deg,#f8f9fa_0%,#ffffff_100%)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
