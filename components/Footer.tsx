import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MessageSquareText, Sprout, Youtube } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Water-Soluble Bio-plastic', href: '/products/water-soluble' },
  { label: 'Water-Resistant Bio-plastic', href: '/products/water-resistant' },
  { label: 'Product Catalog', href: '/products' },
];

const resourceLinks = [
  { label: 'Compostability vs. Biodegradability', href: '/sustainability' },
  { label: 'Life Cycle Assessment', href: '/sustainability' },
  { label: 'Industry Applications', href: '/applications' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/60 bg-forest text-white">
      <div className="eco-shell py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-forest">
                <Sprout className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sage/80">SESESN</p>
                <p className="text-sm text-white/80">Save Earth Save Environment Save Nature</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/75">
              Scientific bio-plastic solutions for brands looking to replace conventional plastics with credible, premium,
              earth-conscious materials.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:bg-sage hover:text-forest"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-sage">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-sage">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-sage">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sage text-forest">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Green Newsletter</h4>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Receive product updates, sustainability insights, and material science notes.
                  </p>
                </div>
              </div>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-sage"
                />
                <button type="submit" className="btn-primary shrink-0 bg-sage text-forest hover:bg-white">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SESESN. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <MessageSquareText className="h-4 w-4" />
            Built for premium, eco-conscious communication.
          </p>
        </div>
      </div>
    </footer>
  );
}
