import type { Lang } from '../BentoHome/bentoCopy';

export const caseStudyCopy: Record<
  Lang,
  {
    company: string;
    myRole: string;
    tools: string;
    timeline: string;
    description: string;
    context: string;
    checkApp: string;
    problem: string;
    process: string;
    solution: string;
    keyInsights: string;
  }
> = {
  ru: {
    company: 'Компания',
    myRole: 'Моя роль',
    tools: 'Инструменты',
    timeline: 'Сроки',
    description: 'Описание',
    context: 'Контекст',
    checkApp: 'Открыть приложение',
    problem: 'Проблема',
    process: 'Процесс',
    solution: 'Решение',
    keyInsights: 'Ключевые выводы',
  },
  en: {
    company: 'Company',
    myRole: 'My role',
    tools: 'Tools',
    timeline: 'Timeline',
    description: 'Description',
    context: 'Context',
    checkApp: 'Check the app',
    problem: 'Problem',
    process: 'Process',
    solution: 'Solution',
    keyInsights: 'Key Insights',
  },
};
