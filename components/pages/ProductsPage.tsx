"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FlaskConical, Layers3, Package, TimerReset } from 'lucide-react';

const featureIcons = [FlaskConical, Layers3, TimerReset, Package];

const showcaseProducts = [
  {
    title: 'SESESN Compostable Carry Bag',
    image: '/products/product-1.jpeg',
    description: 'Premium eco-friendly packaging format with a clean finish for everyday brand applications.',
  },
  {
    title: 'SESESN Compostable Garbage Bag',
    image: '/products/product-2.jpeg',
    description: 'Designed for responsible use-cases where visual quality and sustainable material story both matter.',
  },
  {
    title: 'SESESN Bioplastic Stretch Film',
    image: '/products/product-3.jpeg',
    description: 'Flexible and durable presentation option for modern retail and packaging environments.',
  },
  {
    title: 'SESESN Biodegradable Shopping Bag',
    image: '/products/product-4.jpeg',
    description: 'Application-ready product style that supports premium appearance with earth-conscious intent.',
  },
  {
    title: 'SESESN Compostable Mailer Bag',
    image: '/products/product-5.jpeg',
    description: 'Showcase-ready sustainable product variant aligned with the SESESN circular material vision.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">Products</p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold tracking-snug text-forest">Product Gallery</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {showcaseProducts.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
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
