import Link from 'next/link';
import { navigation, siteConfig } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-800">{siteConfig.shortName}</p>
          <h2 className="text-2xl font-semibold text-slate-950">{siteConfig.tagline}</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-600">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Navigate</h3>
          <div className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-cyan-800">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-cyan-800">
              {siteConfig.contactEmail}
            </a>
            <span>{siteConfig.location}</span>
            <Link href="/join" className="font-medium text-cyan-800 transition hover:text-cyan-700">
              Recruitment details
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
