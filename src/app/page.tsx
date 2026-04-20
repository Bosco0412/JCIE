import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import {
  beliefs,
  gains,
  hero,
  joinChecklist,
  mission,
  processSteps,
  researchAreas,
  roles,
  updates,
} from '@/content/site';

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-18 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-cyan-700/15 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
            {hero.eyebrow}
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{hero.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-700 hover:text-cyan-800"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-800">Lab snapshot</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl font-semibold text-slate-950">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-cyan-700/15 bg-cyan-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-800">Core message</p>
            <p className="mt-3 text-base leading-8 text-slate-700">
              JCIE 不是一个只讲概念的组织。它是一套从加入、复现、实验、写作到开源的完整成长路径。
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading eyebrow="Mission" title={mission.title} description={mission.summary} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {mission.points.map((point) => (
            <div key={point} className="rounded-3xl border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Beliefs"
          title="What we believe"
          description="成熟实验室主页通常先建立可信的使命与价值观，再展示研究方向和加入路径。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {beliefs.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tracks" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Two research tracks, one execution standard"
          description="用清晰研究卡片展示方向，是高校实验室网站最常见、也最容易长期扩展的结构。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {researchAreas.map((area) => (
            <article key={area.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">{area.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{area.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How students grow inside JCIE"
          description="参考 Lab 官网常见的“路径说明”模块，把加入后的流程讲清楚，降低陌生学生的理解成本。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-800 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-base leading-8 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {roles.map((role) => (
              <article key={role.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{role.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Outcome"
          title="What students can actually gain"
          description="将学生收益从“招新文案”转成“成果承诺”，更符合 Lab 官网对外展示口径。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {gains.map((gain) => (
            <article key={gain.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{gain.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{gain.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Join"
              title="Who should apply"
              description="我们不要求一开始就很强，但要求愿意自驱、能反馈、能把事情推进。"
            />
            <div className="mt-8 space-y-4">
              {joinChecklist.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-700/15 bg-cyan-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-800">Apply</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Ready to build with us?</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              目前采用邮件申请。请简短说明你是谁、做过什么、为什么想加入 JCIE。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:baowen435@gmail.com?subject=%E3%80%90Join%20JCIE%E3%80%91%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900"
              >
                Apply by email
              </a>
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-full border border-cyan-700/20 bg-white px-6 py-3 text-sm font-semibold text-cyan-900 shadow-sm transition hover:border-cyan-800"
              >
                View research tracks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Updates"
          title="A homepage that can keep publishing"
          description="后续可以像成熟 Lab 官网一样，逐步增加新闻、项目、论文和成员故事。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">{item.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
