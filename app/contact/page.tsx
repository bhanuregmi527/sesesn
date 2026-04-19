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
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="section-badge">Join Us</p>
          <h1 className="section-title mt-5">Join Us</h1>
          <p className="section-copy mt-5">
            We are building a future where plastic no longer pollutes-where materials work in harmony with the Earth,
            the Environment, and Nature.
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

        <form
          className="glass-panel rounded-[2rem] p-8"
          action="mailto:sesesnnepal@gmail.com"
          method="post"
          encType="text/plain"
        >
          <h2 className="text-2xl font-semibold tracking-snug text-forest">Send a message</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Share your requirements, timeline, and application. We will get back to you.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Your Name
              <input
                name="name"
                required
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
            Subject
            <input
              name="subject"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest"
            />
          </label>

          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={7}
              required
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-forest"
            />
          </label>

          <button type="submit" className="btn-primary mt-6 w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
