import type { Lang } from '../BentoHome/bentoCopy';

export type SkillBrickCategory = 'pm' | 'analytics' | 'mgmt';

export interface SkillBrickItem {
  id: string;
  label: string;
  category: SkillBrickCategory;
}

export interface PersonalPhotoCaption {
  id: string;
  title: string;
  subtitle: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
}

export interface EducationSlide {
  school: string;
  period: string;
  degree: string;
}

export type CareerSlide =
  | { id: 'experience'; eyebrow: string; kind: 'experience'; items: ExperienceItem[] }
  | { id: 'education'; eyebrow: string; kind: 'education'; items: EducationSlide[] }
  | { id: 'upskilling'; eyebrow: string; kind: 'upskilling'; items: string[] };

export const aboutCopy: Record<
  Lang,
  {
    pageTitle: string;
    myStory: string;
    storyText: string;
    whatIDoNow: string;
    whatIDoNowText: string;
    companyName: string;
    companyUrl: string;
    whatIDoNowAfter: string;
    skillsTitle: string;
    skillBricks: SkillBrickItem[];
    careerSlides: CareerSlide[];
    careerCarouselLabel: string;
    viewPhoto: string;
    closePhoto: string;
    personalEyebrow: string;
    personalText: string;
    personalTrackTitle: string;
    personalTrackArtist: string;
    personalTrackNote: string;
    personalListenCta: string;
    personalPhotos: PersonalPhotoCaption[];
  }
> = {
  ru: {
    pageTitle: 'Кто я?',
    myStory: 'Моя история',
    storyText:
      'Начала с frontend-разработки, затем погрузилась в UX, исследования и управление цифровыми продуктами. Технический опыт помогает понимать реализацию, а продуктовый подход — превращать проблемы пользователей в полезные для людей и бизнеса сервисы.',
    whatIDoNow: 'Чем занимаюсь сейчас',
    whatIDoNowText: 'Работаю менеджером продукта в',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    whatIDoNowAfter: ': исследую пользователей, проверяю гипотезы и развиваю цифровые сервисы.',
    skillsTitle: 'Ключевые навыки',
    skillBricks: [
      { id: 'product-discovery', label: 'Product Discovery', category: 'pm' },
      { id: 'product-delivery', label: 'Product Delivery', category: 'pm' },
      { id: 'custdev', label: 'CustDev', category: 'pm' },
      { id: 'jtbd', label: 'JTBD', category: 'pm' },
      { id: 'cjm', label: 'CJM', category: 'pm' },
      { id: 'user-flow', label: 'User Flow', category: 'pm' },
      { id: 'ux-research', label: 'UX Research', category: 'pm' },
      { id: 'market-analysis', label: 'анализ рынка', category: 'pm' },
      { id: 'competitor-analysis', label: 'анализ конкурентов', category: 'pm' },
      { id: 'hypotheses', label: 'гипотезы', category: 'pm' },
      { id: 'rice', label: 'RICE', category: 'pm' },
      { id: 'roadmap', label: 'roadmap', category: 'pm' },
      { id: 'backlog', label: 'backlog', category: 'pm' },
      { id: 'user-stories', label: 'user stories', category: 'pm' },
      { id: 'tasking', label: 'задачи', category: 'pm' },
      { id: 'product-metrics', label: 'метрики', category: 'analytics' },
      { id: 'mau', label: 'MAU', category: 'analytics' },
      { id: 'dau', label: 'DAU', category: 'analytics' },
      { id: 'retention', label: 'Retention', category: 'analytics' },
      { id: 'funnels', label: 'воронки', category: 'analytics' },
      { id: 'ab', label: 'A/B', category: 'analytics' },
      { id: 'feedback', label: 'Анализ данных', category: 'analytics' },
      { id: 'viz', label: 'визуализация', category: 'analytics' },
      { id: 'agile', label: 'Agile', category: 'mgmt' },
      { id: 'scrum', label: 'Scrum', category: 'mgmt' },
      { id: 'kanban', label: 'Kanban', category: 'mgmt' },
    ],
    careerCarouselLabel: 'Карьера и образование',
    careerSlides: [
      {
        id: 'experience',
        eyebrow: 'Опыт',
        kind: 'experience',
        items: [
          { role: 'Менеджер продукта в RTUITLab', period: 'май 2023 – н. в.' },
          { role: 'Менеджер продукта в КРОК', period: 'окт – дек 2024' },
        ],
      },
      {
        id: 'education',
        eyebrow: 'Учёба',
        kind: 'education',
        items: [
          {
            school: 'РТУ МИРЭА · ИИТ',
            period: '2021–2025',
            degree: 'Бакалавриат, «Программная инженерия»',
          },
          {
            school: 'РТУ МИРЭА · ПИШ',
            period: '2025 – 2027',
            degree: 'Магистратура, «Цифровая трансформация»',
          },
        ],
      },
      {
        id: 'upskilling',
        eyebrow: 'Повышение квалификации',
        kind: 'upskilling',
        items: [
          'Переподготовка «Менеджмент», РТУ МИРЭА, 2025',
          'ИИ в здравоохранении, РТУ МИРЭА и ЦДиТ ДЗМ, 2025',
          'Переподготовка в сфере дизайна, РТУ МИРЭА, 2026',
        ],
      },
    ],
    viewPhoto: 'Открыть фото',
    closePhoto: 'Закрыть',
    personalEyebrow: 'Personal',
    personalText: 'В свободное время люблю слушать музыку и фотографировать на свою Leica.',
    personalTrackTitle: 'Luna',
    personalTrackArtist: 'Pascal Schumacher, Echo Collective',
    personalTrackNote: 'Больше всего слушала в этом месяце',
    personalListenCta: 'Слушать в Spotify',
    personalPhotos: [
      { id: 'cashless', title: 'Identity', subtitle: 'Единый визуальный язык бренда' },
      { id: 'job-portal', title: 'Travel', subtitle: 'Моменты вне экрана' },
      { id: 'laptop', title: 'Workspace', subtitle: 'Где рождаются идеи' },
      { id: 'portrait', title: 'Portrait', subtitle: 'Жизнь за кадром' },
    ],
  },
  en: {
    pageTitle: "What I'm about?",
    myStory: 'My story',
    storyText:
      'I started in frontend development, then went deeper into UX, research, and digital product management. Technical experience helps me understand implementation, while a product approach turns user problems into services that create value for people and the business.',
    whatIDoNow: 'What I do now',
    whatIDoNowText: "I'm a product manager at",
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    whatIDoNowAfter: ': I research users, validate hypotheses, and grow digital services.',
    skillsTitle: 'Key skills',
    skillBricks: [
      { id: 'product-discovery', label: 'Product Discovery', category: 'pm' },
      { id: 'product-delivery', label: 'Product Delivery', category: 'pm' },
      { id: 'custdev', label: 'CustDev', category: 'pm' },
      { id: 'jtbd', label: 'JTBD', category: 'pm' },
      { id: 'cjm', label: 'CJM', category: 'pm' },
      { id: 'user-flow', label: 'User Flow', category: 'pm' },
      { id: 'ux-research', label: 'UX Research', category: 'pm' },
      { id: 'market-analysis', label: 'market analysis', category: 'pm' },
      { id: 'competitor-analysis', label: 'competitor analysis', category: 'pm' },
      { id: 'hypotheses', label: 'hypotheses', category: 'pm' },
      { id: 'rice', label: 'RICE', category: 'pm' },
      { id: 'roadmap', label: 'roadmap', category: 'pm' },
      { id: 'backlog', label: 'backlog', category: 'pm' },
      { id: 'user-stories', label: 'user stories', category: 'pm' },
      { id: 'tasking', label: 'tasks', category: 'pm' },
      { id: 'product-metrics', label: 'metrics', category: 'analytics' },
      { id: 'mau', label: 'MAU', category: 'analytics' },
      { id: 'dau', label: 'DAU', category: 'analytics' },
      { id: 'retention', label: 'Retention', category: 'analytics' },
      { id: 'funnels', label: 'funnels', category: 'analytics' },
      { id: 'ab', label: 'A/B', category: 'analytics' },
      { id: 'feedback', label: 'Data analysis', category: 'analytics' },
      { id: 'viz', label: 'visualization', category: 'analytics' },
      { id: 'agile', label: 'Agile', category: 'mgmt' },
      { id: 'scrum', label: 'Scrum', category: 'mgmt' },
      { id: 'kanban', label: 'Kanban', category: 'mgmt' },
    ],
    careerCarouselLabel: 'Career and education',
    careerSlides: [
      {
        id: 'experience',
        eyebrow: 'Experience',
        kind: 'experience',
        items: [
          { role: 'Product Manager at RTUITLab', period: 'May 2023 – present' },
          { role: 'Product Manager at CROC', period: 'Oct – Dec 2024' },
        ],
      },
      {
        id: 'education',
        eyebrow: 'Education',
        kind: 'education',
        items: [
          {
            school: 'RTU MIREA · Institute of IT',
            period: '2021–2025',
            degree: "Bachelor's, Software Engineering",
          },
          {
            school: 'RTU MIREA · Applied Informatics',
            period: '2025 – 2027',
            degree: "Master's, SE · digital transformation",
          },
        ],
      },
      {
        id: 'upskilling',
        eyebrow: 'Professional development',
        kind: 'upskilling',
        items: [
          'Professional retraining in Management, RTU MIREA, 2025',
          'AI tech in healthcare, RTU MIREA & CDT Moscow, 2025',
          'Professional retraining in design, RTU MIREA, 2026',
        ],
      },
    ],
    viewPhoto: 'View photo',
    closePhoto: 'Close',
    personalEyebrow: 'Personal',
    personalText: 'In my spare time, I enjoy listening to music and taking photos with my Leica.',
    personalTrackTitle: 'Luna',
    personalTrackArtist: 'Pascal Schumacher, Echo Collective',
    personalTrackNote: 'Most replayed this month',
    personalListenCta: 'Listen on Spotify',
    personalPhotos: [
      { id: 'cashless', title: 'Identity', subtitle: 'Consistent brand presence' },
      { id: 'job-portal', title: 'Travel', subtitle: 'Moments off the screen' },
      { id: 'laptop', title: 'Workspace', subtitle: 'Where ideas take shape' },
      { id: 'portrait', title: 'Portrait', subtitle: 'Life behind the lens' },
    ],
  },
};
