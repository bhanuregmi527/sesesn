"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, FlaskConical } from 'lucide-react';

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  badge: string;
  specs: Array<{ label: string; value: string }>;
};

export default function ProductCard({ title, description, href, badge, specs }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-6 shadow-sm transition hover:shadow-eco"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage via-leaf to-forest" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-forest/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
            <FlaskConical className="h-3.5 w-3.5" />
            {badge}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-snug text-forest">{title}</h3>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/30 text-forest transition group-hover:scale-105">
          <BadgeCheck className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {specs.map((spec) => (
          <div key={spec.label} className="rounded-2xl border border-slate-200 bg-sand/70 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest/50">{spec.label}</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest/55">Technical overview</span>
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition group-hover:translate-x-0.5">
          Explore <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
