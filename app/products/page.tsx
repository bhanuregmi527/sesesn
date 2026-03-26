import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import ProductsPage from '@/components/pages/ProductsPage';

export const metadata: Metadata = buildSEO({
  title: 'What We Do',
  description: 'Manufacturing advanced bioplastic solutions from raw pellets to customized compounds.',
  path: '/products',
});

export default function Page() {
  return <ProductsPage />;
}
