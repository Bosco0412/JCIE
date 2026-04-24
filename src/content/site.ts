import { Locale, withLocale } from '@/lib/i18n';

type LocalizedString = Record<Locale, string>;

const siteConfig = {
  name: 'SZU-UoS JCIE',
  shortName: 'JCIE',
  fullName: {
    zh: '深圳大学-谢菲尔德大学国际合作双创人才培养基地',
    en: 'SZU-UoS Joint Centre for Innovation and Entrepreneurship'
  },
  url: 'https://bosco0412.github.io/JCIE',
  contactEmail: 'baowen435@gmail.com',
  githubUrl: 'https://github.com/Bosco0412/JCIE',
};

const localizedMeta = {
  tagline: { zh: '真实项目、真实论文、真实开源成果', en: 'Real projects, real papers, real open-source output' },
  title: { zh: 'SZU-UoS JCIE | 联合创新与工程中心', en: 'SZU-UoS JCIE | Joint Centre for Innovation and Entrepreneurship' },
  description: {
    zh: '深圳大学-谢菲尔德大学国际合作双创人才培养基地，聚焦 AI for EDA 与 AI for LCA。学生在这里做真实项目、真实论文与真实开源成果。',
    en: 'SZU-UoS Joint Centre for Innovation and Entrepreneurship. Focused on AI for EDA and AI for LCA. Students build real projects, real papers, and real open-source outcomes.',
  },
};

export function getSiteContent(locale: Locale) {
  return {
    locale,
    siteConfig: {
      ...siteConfig,
      tagline: localizedMeta.tagline[locale],
      title: localizedMeta.title[locale],
      description: localizedMeta.description[locale],
      fullName: siteConfig.fullName[locale],
    },
  };
}