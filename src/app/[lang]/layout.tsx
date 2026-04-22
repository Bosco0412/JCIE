import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getSiteContent } from '@/content/site';
import { isLocale, Locale, locales } from '@/lib/i18n';

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const content = getSiteContent(lang);
  return {
    title: {
      default: content.siteConfig.title,
      template: `%s | JCIE`
    },
    description: content.siteConfig.description,
    openGraph: {
      title: content.siteConfig.title,
      description: content.siteConfig.description,
      url: `https://bosco0412.github.io/JCIE/${lang}`,
      siteName: content.siteConfig.name,
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}