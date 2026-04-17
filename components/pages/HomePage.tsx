"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

type Slide = {
  quote: string;
  image: string;
};

const slides: Slide[] = [
  {
    quote: 'Our product protect products and the planet at the same time',
    image: "url('/slide1.jpeg')",
  },
  {
    quote: 'Your brand our product save the nature',
    image: "url('/slide2.jpeg')",
  },
  {
    quote: 'Save Earth Save Environment Save Nature',
    image: "url('/slide3.jpeg')",
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
      <section className="relative h-[calc(100svh-4.5rem)] min-h-[520px] overflow-hidden">
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
                  key={index}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.05 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: slide.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-forest/40 to-transparent" />
                </motion.div>
              );
            })}

            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute bottom-14 left-4 right-4 sm:bottom-16 sm:left-6 sm:right-auto sm:max-w-xl lg:left-8"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-pine/95 via-transparent to-transparent p-5 shadow-glass">
                <div className="mt-3">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sage">SESESN</p>
                  <p className="mt-1 text-sm font-semibold tracking-snug text-sage">Collaboration Together</p>
                  <p className="text-sm font-semibold tracking-snug text-sage/90">for Better Future</p>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-snug text-white sm:text-2xl lg:text-3xl">
                  {slides[activeSlide]?.quote}
                </h2>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${index === activeSlide ? 'w-8 bg-sage' : 'w-2.5 bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        
      </section>

      <section className="py-14 lg:py-20">
        <div className="relative w-full overflow-hidden border border-white/10 bg-gradient-to-br from-forest via-pine to-forest text-white shadow-[0_30px_80px_rgba(21,50,40,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,227,189,0.28),transparent_60%)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />

          <div className="eco-shell relative grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sage/90">
                SESESN · Save Earth Save Environment Save Nature
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-snug sm:text-5xl lg:text-6xl">
                Bioplastic solutions for a cleaner material future.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                We design bio-based, biodegradable, and compostable materials for brands that want premium performance
                with credible environmental responsibility.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary bg-sage text-forest hover:bg-moss">
                  Explore products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20">
                  Start an inquiry
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Scientific formulation', 'Premium visual identity', 'Circular economy focus'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Bio-based polymers', 'Renewable feedstocks with defined performance.'],
                ['Compostable pathways', 'Engineered to return safely to the earth.'],
                ['Brand-ready finish', 'Premium tactile feel for modern packaging.'],
                ['Verified impact', 'Measured reductions in waste and footprint.'],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-xs leading-6 text-white/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">The Pillars</p>
          <h2 className="section-title mt-5">The SESESN declaration.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
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
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Earth</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We reduce reliance on fossil fuels, lowering the carbon footprint of plastic production.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Environment</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Our materials are designed to prevent microplastics pollution and protect ecosystems.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest">Save Nature</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                By using renewable, often waste-based feedstocks, we work with nature, not against it.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="eco-shell pb-10 lg:pb-12">
        <div className="max-w-3xl">
          <p className="section-badge">Our Commitment</p>
          <h2 className="section-title mt-5">Our Commitment.</h2>

          <div className="mt-8 space-y-4">
            <p className="section-copy">
              We are not just a material supplier; we are a partner in the transition to a circular economy. From
              sourcing sustainable raw materials to ensuring proper end-of-life solutions (composability, recyclability,
              or biodegradability), SESESN is dedicated to delivering integrity—one pellet at a time.
            </p>
            <p className="section-copy">
              When you choose SESESN, you aren’t just buying bioplastic. You are choosing to Save Earth, Save
              Environment, Save Nature.
            </p>
          </div>
        </div>
      </section>

      <section className="eco-shell pb-8 lg:pb-10">
        <div className="max-w-3xl">
          <p className="section-badge">What We Do</p>
          <h2 className="section-title mt-5">What We Do.</h2>

          <div className="mt-8">
            <p className="section-copy">
              We manufacture advanced bioplastic solutions—from raw pellets to customized compounds—designed for
              real-world applications without the environmental guilt. Whether it&apos;s packaging that returns to the earth
              or agricultural films that enrich the soil, every product we create is engineered to close the loop.
            </p>
          </div>
        </div>
      </section>
      
      <section className="eco-shell pb-10 lg:pb-12">
        <div className="max-w-3xl">
          <p className="section-badge">What we offer</p>
          <h2 className="section-title mt-5">Designed for brands, converters, and product teams.</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Material guidance for product selection',
              'Application-oriented technical discussions',
              'Responsible sustainability storytelling',
              'Premium visual identity support',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eco-shell pb-24">
        <div className="max-w-3xl">
          <p className="section-badge">Save Earth philosophy</p>
          <h2 className="section-title mt-5">Better materials should feel as premium as the brands they serve.</h2>
          <p className="section-copy mt-5">
            SESESN exists to make the transition to sustainable packaging look and feel intentional, scientific, and
            future-ready.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
            Learn our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
