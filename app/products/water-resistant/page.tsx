import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Droplets, Shield } from 'lucide-react';
import { buildSEO } from '@/components/SEO';

export const metadata: Metadata = buildSEO({
  title: 'Water-Resistant Bioplastic',
  description: 'Barrier-oriented Bioplastic designed for moisture-sensitive and premium retail applications.',
  path: '/products/water-resistant',
});

export default function Page() {
  return (
    <section className="eco-shell py-20 lg:py-28">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-badge">Water-Resistant Bioplastic</p>
          <h1 className="section-title mt-5">Improved moisture tolerance for retail and food-facing applications.</h1>
          <p className="section-copy mt-5">
            Water resistance matters when product appearance, structure, and handling need to hold up in real-world
            environments. This solution balances barrier performance with a refined, low-plastic visual language.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Primary behavior', 'Improved resistance to moisture exposure'],
              ['Ideal formats', 'Retail bags, garment packaging, F&B wraps'],
              ['Handling', 'Maintains better form in humid conditions'],
              ['Storytelling', 'Premium sustainable positioning'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/55">{label}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] bg-forest p-8 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-forest">
            <Shield className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-snug">Technical focus</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            <p>• Designed to reduce sensitivity to short-term moisture exposure.</p>
            <p>• Suitable where product form and packaging presentation matter.</p>
            <p>• Supports brand needs for cleaner shelf presence and handling.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage">Barrier note</p>
            <p className="mt-2 text-sm leading-7 text-white/78">
              Final barrier profile can be tuned to application severity and intended shelf-life.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-10 rounded-[2rem] bg-sand p-8 shadow-sm">
        <div className="flex items-center gap-3 text-forest">
          <Droplets className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Recommended applications</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Retail carry bags', 'Garment packaging', 'Food and beverage wraps'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
