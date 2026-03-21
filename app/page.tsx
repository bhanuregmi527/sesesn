import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import HomePage from '@/components/pages/HomePage';

export const metadata: Metadata = buildSEO({
  title: 'SESESN | Bio-plastic Solutions',
  description:
    'Premium bio-plastic solutions for brands that want bio-based, biodegradable, and compostable materials.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
