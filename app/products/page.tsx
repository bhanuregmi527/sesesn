import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';
import ProductsPage from '@/components/pages/ProductsPage';

export const metadata: Metadata = buildSEO({
  title: 'Bio-plastic Products',
  description: 'Explore SESESN’s catalog of water-soluble and water-resistant bio-plastic solutions.',
  path: '/products',
});

export default function Page() {
  return <ProductsPage />;
}
