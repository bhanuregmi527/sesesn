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
        <p className="section-badge">Contact</p>
        <h1 className="section-title mt-5">Join Us</h1>
        <p className="section-copy mt-5">
          Brands, manufacturers, and investors are invited to start a conversation with SESESN.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-forest p-8 text-white">
          <h2 className="text-3xl font-semibold tracking-snug">SESESN, Kathmandu, Nepal</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            sesesnnepal@gmail.com
          </p>
          <div className="mt-8 space-y-4 text-sm text-white/80">
            <p>• Company partnerships</p>
            <p>• Product sampling discussions</p>
            <p>• Custom formulation conversations</p>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage/90">Join Us</p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              If you are building products, scaling manufacturing, or investing in sustainable materials, we would like
              to hear from you.
            </p>
          </div>
        </div>

        <form className="glass-panel rounded-[2rem] p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Company Name
              <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Interest Type
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest">
                <option>Water-Soluble Bio-plastic</option>
                <option>Water-Resistant Bio-plastic</option>
                <option>Custom Development</option>
                <option>General Partnership</option>
              </select>
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              rows={7}
              placeholder="Tell us about your use case, timeline, and packaging needs."
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest"
            />
          </label>

          <button type="submit" className="btn-primary mt-6 w-full">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
