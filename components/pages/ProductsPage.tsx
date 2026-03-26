"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { FlaskConical, Layers3, Package, TimerReset } from 'lucide-react';

const featureIcons = [FlaskConical, Layers3, TimerReset, Package];

const products = [
  {
    title: 'Water-Soluble Bio-plastic',
    badge: 'Short-life precision',
    href: '/products/water-soluble',
    description:
      'For applications that need clean dissolution behavior after use, while keeping packaging and handling refined before deployment.',
    specs: [
      { label: 'Use window', value: 'Short cycle' },
      { label: 'Primary fit', value: 'Inserts, pouches, sachets' },
      { label: 'Design focus', value: 'Controlled release' },
      { label: 'Finish', value: 'Smooth premium film' },
    ],
  },
  {
    title: 'Water-Resistant Bio-plastic',
    badge: 'Moisture guard',
    href: '/products/water-resistant',
    description:
      'Engineered for applications that need better moisture tolerance and surface integrity without reverting to conventional plastic aesthetics.',
    specs: [
      { label: 'Barrier goal', value: 'Improved resistance' },
      { label: 'Primary fit', value: 'Retail, garments, F&B' },
      { label: 'Design focus', value: 'Form retention' },
      { label: 'Finish', value: 'Clean matte or gloss' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">Products</p>
          <h1 className="section-title mt-5">What We Do</h1>
          <p className="section-copy mt-5">
            Manufacturing advanced bioplastic solutions from raw pellets to customized compounds.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.href}
              title={product.title}
              badge={product.badge}
              href={product.href}
              description={product.description}
              specs={product.specs}
            />
          ))}
        </div>
      </section>

      <section className="eco-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-sand p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">Applications</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug text-forest">Real-world applications that return to the earth and enrich soil.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Packaging', 'Packaging that returns to the earth.'],
                ['Agriculture', 'Agricultural films that enrich soil.'],
                ['Retail', 'Premium formats for consumer-facing brands.'],
                ['Food & beverage', 'Defined-use solutions with clear material performance.'],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-forest">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] bg-forest p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Our Commitment</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug">Supporting the transition to a circular economy.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              We prioritize performance clarity, responsible end-of-life pathways, and premium tactile quality across the
              portfolio.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Raw pellets to customized compounds',
                'Application-led technical development',
                'Circular economy transition support',
                'Premium bioplastic product strategy',
              ].map((label, index) => {
                const Icon = featureIcons[index];

                return (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/90 text-forest">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium text-white/85">{label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
