import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';

export const metadata: Metadata = buildSEO({
  title: 'Sustainability',
  description: 'Understand compostability vs. biodegradability and our approach to life cycle assessment.',
  path: '/sustainability',
});

export default function Page() {
  return (
    <section className="eco-shell py-20 lg:py-28">
      <div className="max-w-3xl">
        <p className="section-badge">Sustainability</p>
        <h1 className="section-title mt-5">Compostability, biodegradability, and life cycle assessment.</h1>
        <p className="section-copy mt-5">
          These terms are often used interchangeably, but they describe different material outcomes. We prefer clear
          definitions so the right material is matched to the right end-of-life pathway.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {[
          {
            title: 'Compostability',
            copy: 'A material that can break down in a composting environment under specified conditions, leaving no harmful residue.',
          },
          {
            title: 'Biodegradability',
            copy: 'A material capable of being broken down by microorganisms over time, depending on the surrounding environment.',
          },
        ].map((item) => (
          <div key={item.title} className="glass-panel rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-forest">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] bg-forest p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Life Cycle Assessment</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-snug">Evaluate impact from raw material to end-of-life.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
          LCA helps compare environmental effects across sourcing, manufacturing, distribution, use, and disposal. It is
          one of the most useful ways to understand whether a material transition is genuinely beneficial.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {['Raw material sourcing', 'Processing energy', 'Application performance', 'End-of-life route'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          ['Compostable', 'Best for controlled composting systems with defined collection pathways.'],
          ['Biodegradable', 'Depends on the environmental context and timeframe involved.'],
          ['Our stance', 'Use the term that matches the real material behavior and disposal route.'],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest/60">{title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
