"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const topLinks = [
  { label: 'About', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/50 bg-white/65 backdrop-blur-xl">
        <div className="eco-shell flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white shadow-eco transition group-hover:-translate-y-0.5">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-forest/60">
                SESESN
              </span>
              <span className="block text-sm font-medium text-forest">Bio-plastic Solutions</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex">
            <Link href="/" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-forest/5 hover:text-forest">
              Home
            </Link>
            <Link href="/products" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-forest/5 hover:text-forest">
              Products
            </Link>
            {topLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-forest/5 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-[0.2em]">
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-forest shadow-sm transition hover:bg-forest hover:text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/60 bg-white/95 px-4 py-4 shadow-eco backdrop-blur-xl lg:hidden">
            <div className="eco-shell grid gap-3">
              <Link href="/" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sand" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sand" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
              {topLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sand"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
