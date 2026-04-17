import Link from 'next/link';
import { Facebook, Instagram, MessageSquareText, Music2, Sprout, Twitter, Youtube } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/products#faq' },
];

const productLinks = [
  { label: 'Water-Soluble Bioplastic', href: '/products/water-soluble' },
  { label: 'Water-Resistant Bioplastic', href: '/products/water-resistant' },
  { label: 'Product Catalog', href: '/products' },
];

const resourceLinks = [
  { label: 'Compostability vs. Biodegradability', href: '/products#faq' },
  { label: 'Life Cycle Assessment', href: '/products#faq' },
  { label: 'Industry Applications', href: '/applications' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Sesesn/61577668777633/', icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com/@sesesn', icon: Youtube },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@sesesn1?_r=1&_d=secCgYIASAHKAESPgo83iYp6%2FU9PJSuZq7pqM8ccJUCK2RaW51P%2FBe3kokzl9shMH%2F49y1zwxNkW4oA8zKVs9NQ94JdnfBSulrPGgA%3D&_svg=1&checksum=b8a79fb1416e1306114a56a49c3850653e1624198f26132e2a2c01807dbc9733&item_author_type=1&sec_uid=MS4wLjABAAAACTb4UQXlgNG8S8ufmmbVgh4fADYznvs421fSAeP4ficJ3FJblWbgPiJXCHfEwtGI&sec_user_id=MS4wLjABAAAACTb4UQXlgNG8S8ufmmbVgh4fADYznvs421fSAeP4ficJ3FJblWbgPiJXCHfEwtGI&share_app_id=1233&share_author_id=7617684050261574676&share_link_id=b01fe96a-39ef-492b-bc0c-499e43bed80e&share_region=NP&share_scene=1&sharer_language=en&social_share_type=5&source=h5_m&timestamp=1774493710&u_code=f2dm688ajkjiim&ug_btm=b8727%2Cb7360&ugbiz_name=ACCOUNT&user_id=7617684050261574676&utm_campaign=client_share&utm_medium=android&utm_source=copy',
    icon: Music2,
  },
  { label: 'X', href: 'https://x.com/sesesnnepal', icon: Twitter },
  { label: 'Instagram', href: 'https://www.instagram.com/sesesnnepal', icon: Instagram },
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
              Scientific Bioplastic solutions built around the SESESN promise: Save Earth, Save Environment, Save Nature.
            </p>
            <div className="space-y-1 text-sm text-white/75">
              <p>SESESN, Kathmandu, Nepal</p>
              <p>sesesnnepal@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
