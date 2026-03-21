"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, ShieldCheck } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

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

  const display = useMemo(() => value.toFixed(decimals), [decimals, value]);

  return (
    <div ref={ref} className="text-4xl font-semibold tracking-snug text-forest sm:text-5xl">
      {display}
      {suffix}
    </div>
  );
}

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
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(11,36,27,0.92), rgba(27,67,50,0.65)), url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,213,178,0.26),transparent_40%)]" />

        <div className="eco-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div className="max-w-3xl text-white">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="section-badge border-white/15 bg-white/10 text-sage backdrop-blur-md">
                SESESN • Save Earth Save Environment Save Nature
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-snug sm:text-5xl lg:text-7xl">
                Bio-plastic solutions for a cleaner material future.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                We design bio-based, biodegradable, and compostable materials for brands that want premium performance
                with credible environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/products" className="btn-primary bg-sage text-forest hover:bg-white">
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">
                Start an inquiry
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-10 grid max-w-2xl gap-3 text-sm text-white/80 sm:grid-cols-3"
            >
              {['Scientific formulation', 'Premium visual identity', 'Circular economy focus'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-md">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-panel rounded-[2rem] p-4 sm:p-5"
          >
            <div className="overflow-hidden rounded-[1.6rem] bg-forest">
              <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
                <div className="relative min-h-[22rem] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=1200&q=80')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Nature-led materials</p>
                    <h2 className="mt-2 text-2xl font-semibold">Engineered for practical sustainability.</h2>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6 p-6 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Why SESESN?</p>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      A focused partner for brands that need clarity, compliance-minded discussions, and visually premium
                      packaging materials.
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {[
                      ['Bio-based', 'Reduced fossil dependence'],
                      ['Biodegradable', 'Defined degradation pathways'],
                      ['Compostable', 'End-of-life alignment'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">{label}</p>
                        <p className="mt-2 text-sm text-white/78">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="eco-shell py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-badge">Why SESESN</p>
          <h2 className="section-title mt-5">A scientific, clean, premium approach to replacing conventional plastics.</h2>
          <p className="section-copy mt-5">
            We help brands move beyond generic “green” claims with materials and messaging that are grounded in product
            behavior, application fit, and responsible end-of-life thinking.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {principles.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="eco-shell pb-20 lg:pb-28">
        <div className="grid gap-8 rounded-[2rem] bg-forest px-6 py-10 text-white sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Our impact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-snug sm:text-4xl">Progress measured in outcomes, not slogans.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              We build partnerships around material transition goals, allowing teams to communicate progress with confidence.
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
