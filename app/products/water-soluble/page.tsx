import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FlaskConical, Waves } from 'lucide-react';
import { buildSEO } from '@/components/SEO';

export const metadata: Metadata = buildSEO({
  title: 'Water-Soluble Bioplastic',
  description: 'A defined-use Bioplastic solution for short-life applications and controlled dissolution scenarios.',
  path: '/products/water-soluble',
});

export default function Page() {
  return (
    <section className="eco-shell py-20 lg:py-28">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-badge">Water-Soluble Bioplastic</p>
          <h1 className="section-title mt-5">Controlled dissolution for short-life, purpose-built applications.</h1>
          <p className="section-copy mt-5">
            This solution is designed for use cases where material removal after use is part of the intended product
            journey. It supports premium presentation before disposal and is positioned for defined environmental routes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Primary behavior', 'Dissolves under specified water conditions'],
              ['Ideal formats', 'Inserts, sachets, liners, packaging aids'],
              ['Handling', 'Stable prior to intended use environment'],
              ['Storytelling', 'Clear use-case communication'],
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
            <Waves className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-snug">Technical focus</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            <p>• Intended for controlled contact with water under defined conditions.</p>
            <p>• Supports short-duration applications and product delivery workflows.</p>
            <p>• Best used where clarity of disposal behavior is part of the design intent.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage">Formulation note</p>
            <p className="mt-2 text-sm leading-7 text-white/78">
              Calibration can be aligned with required timing, thickness, and application constraints.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-10 rounded-[2rem] bg-sand p-8 shadow-sm">
        <div className="flex items-center gap-3 text-forest">
          <FlaskConical className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Recommended applications</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Packaging inserts', 'Disposable liners', 'Specialty short-use formats'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
