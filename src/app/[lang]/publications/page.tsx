import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { isLocale, Locale } from '@/lib/i18n';

export const publicationsData = [
  {
    id: 'pub-1',
    title: 'Paper Title 1',
    authors: ['Author A', 'Author B', 'Wei'],
    venue: 'DAC 2025',
    year: 2025,
    area: 'EDA',
    link: '#',
  },
  {
    id: 'pub-2',
    title: 'Paper Title 2',
    authors: ['Author C', 'Author D'],
    venue: 'ICCAD 2024',
    year: 2024,
    area: 'EDA',
    link: '#',
  },
  {
    id: 'pub-3',
    title: 'Paper Title 3',
    authors: ['Author E', 'Author F'],
    venue: 'NeurIPS 2024',
    year: 2024,
    area: 'LCA',
    link: '#',
  },
];

export default async function PublicationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  const edaPubs = publicationsData.filter((p) => p.area === 'EDA');
  const lcaPubs = publicationsData.filter((p) => p.area === 'LCA');

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow={locale === 'zh' ? '论文' : 'Publications'}
        title={locale === 'zh' ? '发表论文' : 'Published Papers'}
        description={locale === 'zh' ? '在 DAC、ICCAD、NeurIPS 等国际顶会顶刊发表' : 'Published at DAC, ICCAD, NeurIPS and other top venues'}
      />

      {/* AI for EDA */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">AI for EDA</h2>
        {edaPubs.length > 0 ? (
          <div className="mt-6 space-y-4">
            {edaPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">{locale === 'zh' ? 'EDA 论文待补充' : 'EDA publications to be added'}</p>
          </div>
        )}
      </section>

      {/* AI for LCA */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">AI for LCA</h2>
        {lcaPubs.length > 0 ? (
          <div className="mt-6 space-y-4">
            {lcaPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">{locale === 'zh' ? 'LCA 论文待补充' : 'LCA publications to be added'}</p>
          </div>
        )}
      </section>

      {/* Note */}
      <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-600">
          {locale === 'zh'
            ? '以上论文由 JCIE 成员参与完成，从 baseline 到实验到初稿全程参与。具体论文信息请联系相关负责人更新。'
            : 'Papers listed above were completed with JCIE member participation from baselines to experiments to drafts. Contact relevant leads for updates.'}
        </p>
      </section>
    </div>
  );
}

function PublicationCard({ pub, locale }: { pub: typeof publicationsData[0]; locale: Locale }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-medium text-slate-900">{pub.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{pub.authors.join(', ')}</p>
          <p className="mt-1 text-xs text-slate-500">{pub.venue}, {pub.year}</p>
        </div>
        {pub.link && pub.link !== '#' && (
          <Link href={pub.link} className="rounded px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100">
            {locale === 'zh' ? '查看' : 'View'}
          </Link>
        )}
      </div>
    </article>
  );
}