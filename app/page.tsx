import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import HomePage from '@/components/pages/HomePage';

export const metadata: Metadata = buildSEO({
  title: 'SESESN | Save Earth Save Environment Save Nature',
  description:
    'SESESN builds premium Bioplastic experiences for brands that want to protect products and the planet at the same time.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
