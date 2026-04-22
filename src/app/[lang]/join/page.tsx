import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { isLocale, Locale } from '@/lib/i18n';

export default async function JoinPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  const emailSubject = locale === 'zh' ? '【加入 JCIE】你的名字' : '[Join JCIE] Your Name';

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow={locale === 'zh' ? '加入' : 'Join'}
        title={locale === 'zh' ? '申请加入 JCIE' : 'Apply to JCIE'}
        description={locale === 'zh' ? '加入后不是旁观，而是进入真实项目' : 'Joining means entering real projects, not standing on the side'}
      />

      {/* What you will get */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">{locale === 'zh' ? '你会得到什么' : 'What you will get'}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-base font-medium text-slate-900">{locale === 'zh' ? '一篇你真正参与做出的论文' : 'A paper you truly helped build'}</h3>
            <p className="mt-4 text-sm text-slate-600">{locale === 'zh' ? '从 baseline 到实验到初稿，你参与整个链路' : 'From baselines and experiments to drafts, you participate in the full pipeline'}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-base font-medium text-slate-900">{locale === 'zh' ? '一个真的会被用到的工具' : 'A tool that can be used'}</h3>
            <p className="mt-4 text-sm text-slate-600">{locale === 'zh' ? '代码强调开源与复现，优秀工作会被真正使用' : 'Code is built with openness, strong work will be truly used'}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-base font-medium text-slate-900">{locale === 'zh' ? '一段真正说得出口的经历' : 'A story worth telling'}</h3>
            <p className="mt-4 text-sm text-slate-600">{locale === 'zh' ? '你能讲清楚、别人也能问深入的真实经验' : 'Real experience you can explain clearly and others can ask about deeply'}</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">{locale === 'zh' ? '你需要具备什么' : 'What you need'}</h2>
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
              {locale === 'zh' ? 'Python 能写，英文能读，GitHub 会用' : 'Can write Python, read papers in English, use GitHub'}
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
              {locale === 'zh' ? '遇到问题先自己思考，想不通及时反馈' : 'Think independently first, communicate when stuck'}
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
              {locale === 'zh' ? '愿意在真实项目中接受压力、解决问题、快速成长' : 'Willing to work under pressure, solve problems, grow quickly'}
            </li>
          </ul>
        </div>
      </section>

      {/* First Month */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">{locale === 'zh' ? '进来之后第一件事' : 'First thing after joining'}</h2>
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">
            {locale === 'zh'
              ? '第一个月的任务：把一篇顶会论文的 Baseline 跑通。跑通了，继续做项目；跑不通，我们也能尽早知道这条路适不适合你。这不是考核，这就是项目本身的第一步。'
              : 'First month task: reproduce a baseline from a top conference paper. If you succeed, you continue with the project; if not, we know early if this path fits you. This is not a test, it is the first step of the project itself.'}
          </p>
        </div>
      </section>

      {/* Application */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">{locale === 'zh' ? '如何申请' : 'How to apply'}</h2>
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-600">
            {locale === 'zh'
              ? '发邮件到 baowen435@gmail.com，标题格式：【加入 JCIE】你的名字'
              : 'Send email to baowen435@gmail.com with subject: [Join JCIE] Your Name'}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            {locale === 'zh'
              ? '邮件内容只需要说三件事：你是谁、你做过什么、你为什么想来。不用套模板，说真实的就好。'
              : 'Just tell us three things: who you are, what you have done, why you want to join. Be honest and direct.'}
          </p>
          <Link
            href={`mailto:baowen435@gmail.com?subject=${encodeURIComponent(emailSubject)}`}
            className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            {locale === 'zh' ? '发送申请邮件' : 'Send Application Email'}
          </Link>
        </div>
      </section>

      {/* Note */}
      <section className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-600">
          {locale === 'zh'
            ? '这里没有工资，没有学分。但你能在这里得到的东西，很多人本科四年都未必能真正拿到。'
            : 'There is no salary, no credits. But what you can get here, many students never truly achieve in four years.'}
        </p>
      </section>
    </div>
  );
}