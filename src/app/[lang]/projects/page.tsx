import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { isLocale, Locale } from '@/lib/i18n';

export const projectsData = [
  {
    id: 'proj-1',
    title: 'TabPFN Architecture Enhancement',
    titleZh: 'TabPFN 架构性能增强',
    summary: 'Exploring novel architectures to enhance TabPFN performance for EDA applications.',
    summaryZh: '探索新架构以增强 TabPFN 在 EDA 应用中的性能表现。',
    area: 'EDA',
    status: 'ongoing',
    statusZh: '进行中',
    lead: 'Lead Name',
    github: '#',
  },
  {
    id: 'proj-2',
    title: 'EDA Yield Database',
    titleZh: 'EDA 良率数据库',
    summary: 'Building and open-sourcing a comprehensive EDA yield database.',
    summaryZh: '构建并开源一个完整的 EDA 良率数据库。',
    area: 'EDA',
    status: 'ongoing',
    statusZh: '进行中',
    lead: 'Lead Name',
    github: '#',
  },
  {
    id: 'proj-3',
    title: 'LCA Data Prediction',
    titleZh: 'LCA 数据预测',
    summary: 'Using AI to predict and match LCA data more efficiently.',
    summaryZh: '利用 AI 更高效地预测和匹配 LCA 数据。',
    area: 'LCA',
    status: 'ongoing',
    statusZh: '进行中',
    lead: 'Lead Name',
    github: '#',
  },
  {
    id: 'proj-4',
    title: 'EPD Intelligent Retrieval',
    titleZh: 'EPD 智能检索',
    summary: 'Developing an intelligent EPD retrieval system.',
    summaryZh: '开发智能 EPD 检索体系。',
    area: 'LCA',
    status: 'planning',
    statusZh: '规划中',
    lead: 'Lead Name',
    github: '#',
  },
];

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  const edaProjects = projectsData.filter((p) => p.area === 'EDA');
  const lcaProjects = projectsData.filter((p) => p.area === 'LCA');

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow={locale === 'zh' ? '项目' : 'Projects'}
        title={locale === 'zh' ? '研究项目' : 'Research Projects'}
        description={locale === 'zh' ? '学生从加入第一天就进入真实项目' : 'Students enter real projects from day one'}
      />

      {/* AI for EDA */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">AI for EDA</h2>
        {edaProjects.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {edaProjects.map((proj) => (
              <ProjectCard key={proj.id} proj={proj} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">{locale === 'zh' ? 'EDA 项目待补充' : 'EDA projects to be added'}</p>
          </div>
        )}
      </section>

      {/* AI for LCA */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">AI for LCA</h2>
        {lcaProjects.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {lcaProjects.map((proj) => (
              <ProjectCard key={proj.id} proj={proj} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">{locale === 'zh' ? 'LCA 项目待补充' : 'LCA projects to be added'}</p>
          </div>
        )}
      </section>

      {/* Process */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">{locale === 'zh' ? '项目流程' : 'Project Process'}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-sm font-medium text-white">1</div>
            <h3 className="mt-4 text-sm font-medium text-slate-900">{locale === 'zh' ? 'Baseline 复现' : 'Baseline Reproduction'}</h3>
            <p className="mt-2 text-xs text-slate-500">{locale === 'zh' ? '第一个月跑通 Lead 已验证的 baseline' : 'First month: reproduce Lead-verified baseline'}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-sm font-medium text-white">2</div>
            <h3 className="mt-4 text-sm font-medium text-slate-900">{locale === 'zh' ? '核心实验' : 'Core Experiments'}</h3>
            <p className="mt-2 text-xs text-slate-500">{locale === 'zh' ? '进入核心实验、结果分析' : 'Core experiments and analysis'}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-sm font-medium text-white">3</div>
            <h3 className="mt-4 text-sm font-medium text-slate-900">{locale === 'zh' ? '论文写作' : 'Paper Writing'}</h3>
            <p className="mt-2 text-xs text-slate-500">{locale === 'zh' ? '参与初稿撰写，全程参与' : 'Participate in draft writing'}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-sm font-medium text-white">4</div>
            <h3 className="mt-4 text-sm font-medium text-slate-900">{locale === 'zh' ? '开源整理' : 'Open Source'}</h3>
            <p className="mt-2 text-xs text-slate-500">{locale === 'zh' ? '整理代码，开源发布' : 'Organize code and open-source release'}</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-slate-900">{locale === 'zh' ? '想参与这些项目' : 'Want to work on these projects'}</h2>
        <p className="mt-4 text-sm text-slate-600">
          {locale === 'zh' ? '加入后直接进入真实项目，没有练手期' : 'Join and enter real projects immediately, no sandbox period'}
        </p>
        <Link href={`/${locale}/join`} className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
          {locale === 'zh' ? '申请加入' : 'Apply Now'}
        </Link>
      </section>
    </div>
  );
}

function ProjectCard({ proj, locale }: { proj: typeof projectsData[0]; locale: Locale }) {
  const title = locale === 'zh' ? proj.titleZh : proj.title;
  const summary = locale === 'zh' ? proj.summaryZh : proj.summary;
  const status = locale === 'zh' ? proj.statusZh : proj.status;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${proj.status === 'ongoing' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
            {status}
          </span>
          <h3 className="mt-3 text-base font-medium text-slate-900">{title}</h3>
          <p className="mt-3 text-sm text-slate-600">{summary}</p>
          {proj.lead && <p className="mt-4 text-xs text-slate-500">{locale === 'zh' ? '负责人' : 'Lead'}: {proj.lead}</p>}
        </div>
        {proj.github && proj.github !== '#' && (
          <Link href={proj.github} className="rounded px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100">
            GitHub
          </Link>
        )}
      </div>
    </article>
  );
}