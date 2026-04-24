import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { isLocale, Locale } from '@/lib/i18n';

export const publicationsData = [
  {
    id: 'dac-2024-every-failure',
    title: 'Every Failure Is a Lesson: Utilizing All Failure Samples to Deliver Tuning-Free Efficient Yield Evaluation',
    authors: ['Wei Xing', 'Yanfang Liu', 'Weijian Fan', 'Lei He'],
    venue: 'DAC',
    year: 2024,
    area: 'EDA',
    link: 'https://dl.acm.org/doi/abs/10.1145/3649329.3657381',
  },
  {
    id: 'dac-2024-kato',
    title: 'Kato: Knowledge Alignment and Transfer for Transistor Sizing of Different Design and Technology',
    authors: ['Wei W. Xing', 'Weijian Fan', 'Zhuohua Liu', 'Yuan Yao', 'Yuanqi Hu'],
    venue: 'DAC',
    year: 2024,
    area: 'EDA',
    link: 'https://dl.acm.org/doi/abs/10.1145/3649329.3657380',
  },
  {
    id: 'iccd-2025-openyield',
    title: 'OpenYield: An Open-Source SRAM Yield Analysis and Optimization Benchmark Suite',
    authors: ['Shan Shen', 'Xingyang Li', 'Zhuohua Liu', 'Junhao Ma', 'Yikai Wang', 'Yiheng Wu', 'Yuquan Sun', 'Wei W. Xing'],
    venue: 'ICCD',
    year: 2025,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/11310974/',
  },
  {
    id: 'iccad-2025-astra',
    title: 'ASTRA: Automatic Sizing of Transistors with Reasoning Agents',
    authors: ['Wei W. Xing', 'Baowen Ou', 'Yuxuan Zhang', 'Zhuohua Liu', 'Yuanqi Hu'],
    venue: 'ICCAD',
    year: 2025,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/11240675/',
  },
  {
    id: 'iccad-2025-dive',
    title: 'DIVE: Dynamic Information-Guided Variable Expansion for Deeper Analog Circuit Optimization',
    authors: ['Zhuohua Liu', 'Weilun Xie', 'Yuxuan Zhang', 'Chen Wang', 'Yuanqi Hu', 'Wei W. Xing'],
    venue: 'ICCAD',
    year: 2025,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/11240976/',
  },
  {
    id: 'iseda-2025-design-space-folding',
    title: 'Design Space Folding: A "Free-lunch" Add-on for Efficient Design Convergence in Transistor Sizing',
    authors: ['Zhuohua Liu', 'Yuxuan Zhang', 'Weilun Xie', 'Yuanqi Hu', 'Wei W. Xing'],
    venue: 'ISEDA',
    year: 2025,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/11100880/',
  },
  {
    id: 'iccad-2024-aro',
    title: 'Aro: Autoregressive Operator Learning for Transferable and Multi-fidelity 3D-IC Thermal Analysis with Active Learning',
    authors: ['Mingyue Wang', 'Yuanqing Cheng', 'Weiheng Zeng', 'Zhenjie Lu', 'Vasilis F. Pavlidis', 'Wei Xing'],
    venue: 'ICCAD',
    year: 2024,
    area: 'EDA',
    link: 'https://dl.acm.org/doi/abs/10.1145/3676536.3676713',
  },
  {
    id: 'iccad-2023-opt',
    title: 'OPT: Optimal Proposal Transfer for Efficient Yield Optimization for Analog and SRAM Circuits',
    authors: ['Yanfang Liu', 'Guohao Dai', 'Yuanqing Cheng', 'Wang Kang', 'Wei W. Xing'],
    venue: 'ICCAD',
    year: 2023,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/10323689/',
  },
  {
    id: 'ijhe-2023-sofc',
    title: 'Multi-fidelity Design Optimization of Solid Oxide Fuel Cells Using a Bayesian Feature Enhanced Stochastic Collocation',
    authors: ['Wei W. Xing', 'Akeel A. Shah', 'Guohao Dai', 'Ziyang Zhang', 'Ting Guo', 'Hong Qiu', 'Puiki Leung', 'Qian Xu', 'Xun Zhu', 'Qiang Liao'],
    venue: 'IJHE',
    year: 2023,
    area: 'EDA',
    link: 'https://www.sciencedirect.com/science/article/pii/S0360319923017007',
  },
  {
    id: 'procedia-cirp-2025-adaptive-lci',
    title: 'Adaptive LCI Data Completion: Integrating Neural Processes and Active Learning for Enhanced Life Cycle Assessment',
    authors: ['Wei W. Xing', 'Hong Chen', 'Zidong Chen', 'Zhishan Quan', 'Bertrand Laratte', 'Mark Walsh', 'Jing Pu', 'Jose L. Casamayor'],
    venue: 'Procedia CIRP',
    year: 2025,
    area: 'EDA',
    link: 'https://doi.org/10.1016/j.procir.2025.01.046',
  },
  {
    id: 'est-semanet',
    title: 'SemaNet: Bridging Words and Numbers for Predicting Missing Environmental Data in Life Cycle Assessment',
    authors: ['Bin Chen', 'Hong Chen', 'Zhishan Quan', 'Wei He', 'Visakan Kadirkamanathan', 'Jose L. Casamayor', 'Wei W. Xing'],
    venue: 'Environmental Science & Technology',
    year: 2025,
    area: 'LCA',
    link: 'https://doi.org/10.1021/acs.est.5c07557',
  },
  {
    id: 'dac-2026-breaking-tuning-barrier',
    title: 'Breaking the Tuning Barrier: Zero-Hyperparameters Yield Multi-Corner Analysis Via Learned Priors',
    authors: ['Wei W. Xing', 'Hong Chen', 'Zidong Chen', 'Zhishan Quan', 'Bertrand Laratte', 'Mark Walsh', 'Jing Pu', 'Jose L. Casamayor'],
    venue: 'DAC',
    year: 2026,
    area: 'EDA',
    link: '#',
  },
  {
    id: 'dac-2026-openacmv2',
    title: 'OpenACMv2: An Accuracy-Constrained Co-Optimization Framework for Approximate DCiM',
    authors: ['Yiqi Zhou', 'Yue Yuan', 'Yikai Wang', 'Bohao Liu', 'Qinxin Mei', 'Zhuohua Liu', 'Shan Shen', 'Wei Xing', 'Daying Sun', 'Li Li', 'Guozhu Liu'],
    venue: 'DAC',
    year: 2026,
    area: 'EDA',
    link: '#',
  },
  {
    id: 'dac-2023-yield-barrier',
    title: 'Seeking the Yield Barrier: High-dimensional SRAM Evaluation Through Optimal Manifold',
    authors: ['Yanfang Liu', 'Guohao Dai', 'Wei W. Xing'],
    venue: 'DAC',
    year: 2023,
    area: 'EDA',
    link: 'https://ieeexplore.ieee.org/abstract/document/10247952/',
  },
  {
    id: 'aspdac-2023-entropy-reduction',
    title: 'High-dimensional Yield Estimation Using Shrinkage Deep Features and Maximization of Integral Entropy Reduction',
    authors: ['Shuo Yin', 'Guohao Dai', 'Wei W. Xing'],
    venue: 'ASP-DAC',
    year: 2023,
    area: 'EDA',
    link: 'https://dl.acm.org/doi/abs/10.1145/3566097.3567907',
  },
];

export default async function PublicationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  const edaPubs = publicationsData
    .filter((p) => p.area === 'EDA')
    .toSorted((a, b) => (b.year - a.year) || a.venue.localeCompare(b.venue) || a.title.localeCompare(b.title));
  const lcaPubs = publicationsData
    .filter((p) => p.area === 'LCA')
    .toSorted((a, b) => (b.year - a.year) || a.venue.localeCompare(b.venue) || a.title.localeCompare(b.title));

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow={locale === 'zh' ? '论文' : 'Publications'}
        title={locale === 'zh' ? '发表论文' : 'Published Papers'}
        description={locale === 'zh' ? '在 DAC、ICCAD、EST 等国际顶会顶刊发表' : 'Published at DAC, ICCAD, EST and other top venues'}
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
