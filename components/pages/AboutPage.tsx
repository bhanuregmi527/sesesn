"use client";

import { motion } from 'framer-motion';
import { Compass, Globe2, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';

const values = [
  {
    title: 'Vision',
    description: 'A world where premium materials can protect products and the planet at the same time.',
    icon: Globe2,
  },
  {
    title: 'Mission',
    description: 'To accelerate adoption of bio-plastic alternatives through clarity, science, and design.',
    icon: Compass,
  },
  {
    title: 'Save Earth philosophy',
    description: 'Every material decision should respect nature, support circularity, and reduce waste impact.',
    icon: Leaf,
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Research begins',
    description: 'The team explores bio-based polymer pathways and real-world application constraints.',
  },
  {
    year: '2021',
    title: 'Pilot validation',
    description: 'Initial tests align material behavior with packaging, retail, and industrial use cases.',
  },
  {
    year: '2024',
    title: 'Market-ready direction',
    description: 'SESESN refines a premium sustainability narrative built for brands, converters, and partners.',
  },
  {
    year: 'Today',
    title: 'Scale with credibility',
    description: 'Focus remains on measurable impact, technical honesty, and accessible partner support.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">About SESESN</p>
          <h1 className="section-title mt-5">The Save Earth philosophy behind our bio-plastic solutions.</h1>
          <p className="section-copy mt-5">
            SESESN stands for Save Earth Save Environment Save Nature. It is both our purpose and our design filter:
            make materials that work well, look refined, and move responsibly through the world.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {values.map(({ title, description, icon: Icon }) => (
            <motion.article key={title} whileHover={{ y: -6 }} className="glass-panel rounded-3xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/35 text-forest">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-forest">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="eco-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-forest p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">What we believe</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug">Environmental responsibility should feel premium, not restrictive.</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/75">
              <p>
                We believe eco-conscious material choices should be accessible to teams that care about product quality,
                customer experience, and measurable outcomes.
              </p>
              <p>
                Our work bridges science and storytelling so sustainability claims remain honest, useful, and specific.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <div className="flex items-center gap-3 text-forest">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/40">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/50">Commitment timeline</p>
                <h2 className="mt-1 text-3xl font-semibold tracking-snug">A steady path toward responsible materials.</h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[6rem_1fr]">
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-forest/60">{item.year}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-sand p-5">
              <div className="flex items-start gap-3">
                <HeartHandshake className="mt-1 h-5 w-5 text-forest" />
                <div>
                  <p className="text-sm font-semibold text-forest">Partnership mindset</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We collaborate with manufacturers, brands, and product teams to find the right balance between function,
                    compliance, and sustainability messaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Scientific rigor', 'We discuss application conditions, barrier needs, and disposal pathways clearly.'],
            ['Design integrity', 'Eco-packaging should maintain a refined visual language.'],
            ['Measured progress', 'We value credible targets and practical transition milestones.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-forest/60">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
