import type { Metadata } from 'next';

const siteUrl = 'https://sesesn.com';

export type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildSEO({
  title,
  description,
  path = '/',
  image = '/og-sesesn.jpg',
  noIndex = false,
}: SEOProps): Metadata {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'SESESN',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export default function SEO() {
  return null;
}
