import Link from 'next/link';
import { navigation, siteConfig } from '@/content/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-950">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white shadow-sm">
            JC
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">{siteConfig.shortName}</span>
            <span className="text-base font-semibold tracking-tight">{siteConfig.name}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-cyan-800">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join"
          className="inline-flex items-center justify-center rounded-full bg-cyan-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}
