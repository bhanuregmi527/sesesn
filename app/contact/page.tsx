import type { Metadata } from 'next';
import { buildSEO } from '@/components/SEO';

export const metadata: Metadata = buildSEO({
  title: 'Join Us',
  description: 'SESESN, Kathmandu, Nepal — sesesnnepal@gmail.com',
  path: '/contact',
});

export default function Page() {
  return (
    <section className="eco-shell py-20 lg:py-28">
      <div className="max-w-3xl">
        <p className="section-badge">Join Us</p>
        <h1 className="section-title mt-5">Join Us</h1>
        <p className="section-copy mt-5">
          We are building a future where plastic no longer pollutes-where materials work in harmony with the Earth, the
          Environment, and Nature.
        </p>
        <p className="section-copy mt-4">
          Whether you are a brand looking to transition your packaging, a manufacturer seeking sustainable raw
          materials, or an investor who shares our vision, we invite you to join us.
        </p>
        <p className="section-copy mt-4">
          Because when we work together, we don’t just make better products. We make a better world.
        </p>

        <p className="mt-8 text-sm font-semibold tracking-snug text-forest">
          SESESN - Save Earth. Save Environment. Save Nature.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-snug text-forest">Contact</h2>
          <div className="mt-4 space-y-1 text-sm leading-7 text-slate-600">
            <p>SESESN</p>
            <p>Kathmandu, Nepal</p>
            <p>sesesnnepal@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
