import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import AboutPage from '@/components/pages/AboutPage';

export const metadata: Metadata = buildSEO({
  title: 'About SESESN',
  description: 'Our vision, mission, and Save Earth philosophy behind premium bio-plastic solutions.',
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
