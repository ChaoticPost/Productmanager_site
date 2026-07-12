import type { Lang } from '../BentoHome/bentoCopy';
import { bentoImages } from '../BentoHome/bentoImages';

export type ProjectCaseId = 'cashless' | 'job-portal' | 'laptop';

export const projectCaseIds: ProjectCaseId[] = ['cashless', 'job-portal', 'laptop'];

export interface ProjectCase {
  id: ProjectCaseId;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  company: Record<Lang, string>;
  role: Record<Lang, string>;
  tools: string[];
  timeline: string;
  description: Record<Lang, string>;
  context: Record<Lang, string>;
  appUrl: string;
  heroImage: string;
  problem: Record<Lang, string>;
  problemImage: string;
  processIntro: Record<Lang, string>;
  processSteps: Record<Lang, string[]>;
  solution: Record<Lang, string>;
  insights: Record<Lang, string>;
  showcaseMain: string;
}

const sharedTools = ['Figma', 'Framer', 'Arc', 'Notion'];

export const projectCases: ProjectCase[] = [
  {
    id: 'cashless',
    title: { ru: 'Cashless', en: 'Cashless' },
    subtitle: { ru: 'Мобильное приложение', en: 'Mobile App' },
    company: { ru: 'Shrink', en: 'Shrink' },
    role: { ru: 'Design Lead', en: 'Design Lead' },
    tools: sharedTools,
    timeline: '2020 – 2021',
    description: {
      ru: 'Управление финансами с инструментами для отслеживания расходов и бюджета.',
      en: 'Managing finances with tools for tracking expenses and budgeting.',
    },
    context: {
      ru: 'Cashless — мобильное приложение, которое помогает пользователям отслеживать кредитные карты, управлять транзакциями и контролировать расходы в одном месте.',
      en: 'Cashless is a mobile app that helps users track credit cards, manage transactions, and control spending in one place.',
    },
    appUrl: 'https://example.com/cashless',
    heroImage: bentoImages.cashless,
    problem: {
      ru: 'Людям с множеством финансовых обязательств нужна единая платформа для эффективного управления деньгами. Она должна помогать сокращать лишние траты и достигать финансовых целей через удобное мобильное приложение.',
      en: 'As people have many financial obligations, they require a single platform to assist in managing their finances effectively. This platform should help limit unnecessary expenses and enable users to reach their financial objectives through a user-friendly mobile application.',
    },
    problemImage: bentoImages.cashless,
    processIntro: {
      ru: 'Мы использовали user-centric подход, итеративный дизайн и тестирование, чтобы продукт соответствовал потребностям аудитории.',
      en: "We've adopted a user-centric approach, iterative design, and rigorous testing, ensuring that the app met the target audience's needs and preferences effectively.",
    },
    processSteps: {
      ru: [
        'Провели исследование аудитории через опросы и интервью, чтобы понять финансовые привычки пользователей.',
        'Создали wireframes и прототипы на основе инсайтов, уточняя дизайн по обратной связи.',
        'Протестировали приложение с пользователями и улучшили UX на основе результатов.',
      ],
      en: [
        "We've conducted studies with our audience's finances and preferences through surveys and research, giving us valuable insights.",
        'The team created wireframes and prototypes based on research insights, refining the designs with user feedback to improve the overall user experience.',
        'Testing the app with users and used their feedback to improve usability and design.',
      ],
    },
    solution: {
      ru: 'Интерфейс приложения интуитивен: пользователи отслеживают финансы в реальном времени, видят историю транзакций и получают напоминания о платежах. Можно ставить цели по бюджету и получать персональные рекомендации.',
      en: "The app's user-friendly interface and intuitive design make it easy for users to track their financial activities in real-time, view their transaction history, and receive alerts for upcoming bills and payments. Users can also set budget goals and receive personalized financial advice based on their spending patterns, helping them stay on track and achieve their financial objectives.",
    },
    insights: {
      ru: 'Успех приложения во многом связан с user-centric процессом. Команда провела исследования и тестирование, чтобы продукт соответствовал ожиданиям пользователей.',
      en: "The app's success was due in part to its user-centric design process. The team conducted extensive research and user testing to ensure that the app met users' needs and preferences, resulting in a highly effective and user-friendly platform.",
    },
    showcaseMain: bentoImages.cashless,
  },
  {
    id: 'job-portal',
    title: { ru: 'Job Portal', en: 'Job Portal' },
    subtitle: { ru: 'Веб-платформа', en: 'Web Platform' },
    company: { ru: 'Boom', en: 'Boom' },
    role: { ru: 'Product Designer', en: 'Product Designer' },
    tools: sharedTools,
    timeline: '2021 – 2022',
    description: {
      ru: 'Платформа для поиска работы с фокусом на простоту отклика и прозрачность вакансий.',
      en: 'A job search platform focused on simple applications and transparent listings.',
    },
    context: {
      ru: 'Job Portal объединяет кандидатов и работодателей: от поиска вакансий до отслеживания статуса откликов в одном интерфейсе.',
      en: 'Job Portal connects candidates and employers — from job discovery to application tracking in a single interface.',
    },
    appUrl: 'https://example.com/job-portal',
    heroImage: bentoImages.jobPortal,
    problem: {
      ru: 'Кандидатам сложно отслеживать отклики на разных площадках, а работодателям — быстро оценивать релевантность профилей без лишних шагов.',
      en: 'Candidates struggle to track applications across platforms, while employers need a faster way to evaluate relevant profiles without friction.',
    },
    problemImage: bentoImages.jobPortal,
    processIntro: {
      ru: 'Команда выстроила процесс вокруг реальных сценариев поиска работы и найма, проверяя гипотезы на прототипах.',
      en: 'The team built the process around real hiring and job-search scenarios, validating hypotheses through prototypes.',
    },
    processSteps: {
      ru: [
        'Интервью с соискателями и рекрутерами для карты боли в текущих инструментах.',
        'Прототипирование ключевых флоу: поиск, отклик, статус заявки.',
        'Юзабилити-тесты и итерации по результатам сессий.',
      ],
      en: [
        'Interviews with candidates and recruiters to map pain points in existing tools.',
        'Prototyping core flows: search, apply, and application status.',
        'Usability testing and iterations based on session results.',
      ],
    },
    solution: {
      ru: 'Единый дашборд для кандидатов и HR: фильтры, сохранённые вакансии, статусы откликов и быстрые действия без перегруженного интерфейса.',
      en: 'A unified dashboard for candidates and HR: filters, saved jobs, application statuses, and quick actions without a cluttered interface.',
    },
    insights: {
      ru: 'Сокращение шагов до отклика и прозрачные статусы дали наибольший прирост вовлечённости на ранних этапах.',
      en: 'Reducing steps to apply and making statuses transparent drove the biggest early engagement gains.',
    },
    showcaseMain: bentoImages.jobPortal,
  },
  {
    id: 'laptop',
    title: { ru: 'BoostPro', en: 'BoostPro' },
    subtitle: { ru: 'Маркетинговый сайт', en: 'Marketing Website' },
    company: { ru: 'BoostPro', en: 'BoostPro' },
    role: { ru: 'Lead Designer', en: 'Lead Designer' },
    tools: sharedTools,
    timeline: '2022 – 2023',
    description: {
      ru: 'Лендинг для привлечения клиентов и демонстрации ценности продукта.',
      en: 'A landing page to attract customers and communicate product value.',
    },
    context: {
      ru: 'BoostPro — B2B-сервис для роста продаж. Сайт должен был быстро объяснять выгоду и конвертировать трафик в заявки.',
      en: 'BoostPro is a B2B service for sales growth. The site needed to explain value quickly and convert traffic into leads.',
    },
    appUrl: 'https://example.com/boostpro',
    heroImage: bentoImages.laptop,
    problem: {
      ru: 'Старый сайт не отражал позиционирование продукта и не давал понятного пути к демо или заявке.',
      en: 'The previous site did not reflect the product positioning and lacked a clear path to demo or contact.',
    },
    problemImage: bentoImages.laptop,
    processIntro: {
      ru: 'Работали итеративно: от структуры и messaging до визуальной системы и анимаций на ключевых блоках.',
      en: 'We worked iteratively from structure and messaging to the visual system and motion on key sections.',
    },
    processSteps: {
      ru: [
        'Аудит текущего сайта и конкурентов, формулировка value proposition.',
        'Wireframes и дизайн-система для лендинга и внутренних страниц.',
        'A/B-тесты CTA и финальная полировка перед запуском.',
      ],
      en: [
        'Audit of the current site and competitors, defining the value proposition.',
        'Wireframes and a design system for the landing and inner pages.',
        'CTA A/B tests and final polish before launch.',
      ],
    },
    solution: {
      ru: 'Новый лендинг с чёткой иерархией, социальным доказательством и заметными CTA — конверсия в заявку выросла без увеличения трафика.',
      en: 'A new landing with clear hierarchy, social proof, and prominent CTAs — lead conversion improved without increasing traffic.',
    },
    insights: {
      ru: 'Простая структура и один главный CTA на экран работают лучше, чем перегруженные блоки с несколькими целями.',
      en: 'A simple structure and one primary CTA per screen outperform crowded blocks with multiple goals.',
    },
    showcaseMain: bentoImages.laptop,
  },
];

export const isProjectCaseId = (id: string): id is ProjectCaseId =>
  projectCaseIds.includes(id as ProjectCaseId);

export const getProjectCase = (id: string): ProjectCase | undefined =>
  projectCases.find((project) => project.id === id);
