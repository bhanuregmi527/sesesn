import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import AboutPage from '@/components/pages/AboutPage';

export const metadata: Metadata = buildSEO({
  title: 'About SESESN',
  description: 'The Name Behind the Mission and the story behind SESESN.',
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
