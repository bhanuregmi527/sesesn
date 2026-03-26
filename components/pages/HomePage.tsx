"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CountUp({ end, suffix = '', decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        const duration = 1200;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = window.setInterval(() => {
          current += increment;
          if (current >= end) {
            window.clearInterval(timer);
            setValue(end);
            return;
          }
          setValue(current);
        }, duration / steps);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, started]);

  return (
    <div ref={ref} className="text-4xl font-semibold tracking-snug text-forest sm:text-5xl">
      {value.toFixed(decimals)}
      {suffix}
    </div>
  );
}

const slides = [
  {
    label: 'Green bags',
    quote: 'Our product protect products and the planet at the same time',
    image: "url('/slide1.jpeg')",
  },
  {
    label: 'I Am Not Plastic bag',
    quote: 'Your brand our product save the nature',
    image: "url('/slide2.jpeg')",
  },
  {
    label: 'Earth illustration',
    quote: 'Save Earth Save Environment Save Nature',
    image: "url('/slide3.jpeg')",
  },
];

const principles = [
  {
    title: 'Bio-based origin',
    description: 'Formulated to reduce dependency on fossil-based polymers without compromising brand performance.',
    icon: Leaf,
  },
  {
    title: 'Biodegradable by design',
    description: 'Material pathways are engineered to break down under defined conditions with scientific clarity.',
    icon: Recycle,
  },
  {
    title: 'Premium product feel',
    description: 'A clean, industrial finish that keeps packaging elegant, credible, and modern.',
    icon: ShieldCheck,
  },
];

const impact = [
  { label: 'Material concepts', value: 24, suffix: '+' },
  { label: 'Brand pilots', value: 48, suffix: '+' },
  { label: 'Waste reduction targets', value: 92, suffix: '%' },
  { label: 'Sectors supported', value: 4, suffix: '+' },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-[calc(100svh-5rem)] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,213,178,0.24),transparent_45%)]" />

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="relative min-h-full overflow-hidden">
            {slides.map((slide, index) => {
              const active = index === activeSlide;

              return (
                <motion.div
                  key={slide.label}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.05 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: slide.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-pine via-forest/25 to-transparent" />
                  <div className="absolute bottom-12 left-1/2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 px-2 sm:bottom-14 sm:px-0 lg:bottom-16">
                    <div className="rounded-[1.6rem] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md lg:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">{slide.label}</p>
                      <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold tracking-snug">{slide.quote}</h2>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${index === activeSlide ? 'w-8 bg-sage' : 'w-2.5 bg-white/50'}`}
                  aria-label={`Go to ${slide.label}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-24 left-4 z-10 max-w-3xl text-white sm:bottom-28 lg:left-8"
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary bg-forest text-white hover:bg-moss">
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-secondary border-forest/15 bg-white text-forest hover:bg-sand">
              Start an inquiry
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="eco-shell pb-8 pt-8 lg:pb-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200/70 lg:p-10">
          <p className="section-badge">The Pillars</p>
          <h2 className="section-title mt-5">The SESESN declaration.</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Save Earth',
                description: 'Reducing fossil fuel reliance through bio-based material choices.',
              },
              {
                title: 'Save Environment',
                description: 'Preventing microplastics with materials designed for responsible end-of-life pathways.',
              },
              {
                title: 'Save Nature',
                description: 'Supporting renewable feedstocks and a more regenerative material future.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-sand p-6">
                <h3 className="text-2xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eco-shell py-12 lg:py-16">
        <div className="grid gap-8 rounded-[2rem] bg-forest px-6 py-10 text-white sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Our Name, Our Promise</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug sm:text-4xl">SESESN is the foundation of everything we do.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              Our name is not a tagline. It is the standard we use when developing materials, shaping partnerships, and
              building trust with brands that want to move responsibly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impact.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/6 p-5">
                <CountUp end={item.value} suffix={item.suffix} />
                <p className="mt-3 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">Why SESESN</p>
          <h2 className="section-title mt-5">Why &quot;SESESN&quot;?</h2>
          <p className="section-copy mt-5">
            In an industry crowded with greenwashing, we chose a name that leaves no room for ambiguity. Save Earth.
            Save Environment. Save Nature. These are our non-negotiable pillars:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Earth</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We reduce reliance on fossil fuels, lowering the carbon footprint of plastic production.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Environment</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Our materials are designed to prevent microplastics pollution and protect ecosystems.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Nature</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                By using renewable, often waste-based feedstocks, we work with nature, not against it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="eco-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="section-badge">What we offer</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-snug text-forest">Designed for brands, converters, and product teams.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Material guidance for product selection',
                'Application-oriented technical discussions',
                'Responsible sustainability storytelling',
                'Premium visual identity support',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-sand p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">Save Earth philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug text-forest">Better materials should feel as premium as the brands they serve.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              SESESN exists to make the transition to sustainable packaging look and feel intentional, scientific, and
              future-ready.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
              Learn our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
