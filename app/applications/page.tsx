import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';

export const metadata: Metadata = buildSEO({
  title: 'Applications',
  description: 'Explore how SESESN bio-plastics support retail, agriculture, garments, and food & beverage.',
  path: '/applications',
});

export default function Page() {
  return (
    <section className="eco-shell py-20 lg:py-28">
      <div className="max-w-3xl">
        <p className="section-badge">Applications</p>
        <h1 className="section-title mt-5">Where our bio-plastics fit in the real world.</h1>
        <p className="section-copy mt-5">
          We focus on categories where performance, presentation, and material responsibility intersect.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {[
          ['Retail', 'Carry bags, point-of-sale packaging, and shelf-ready formats.'],
          ['Agriculture', 'Short-use wraps, liners, and controlled field applications.'],
          ['Garments', 'Protective packaging and clean presentation for apparel logistics.'],
          ['F&B', 'Food-facing wraps and packaging where material clarity matters.'],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-forest">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
