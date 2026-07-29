import type { Lang } from '../BentoHome/bentoCopy';
import { bentoImages } from '../BentoHome/bentoImages';

export type ProjectCaseId = 'campus-care' | 'cashless' | 'job-portal' | 'laptop';

export const projectCaseIds: ProjectCaseId[] = ['campus-care', 'cashless', 'job-portal', 'laptop'];

export interface CaseTool {
  id: string;
  label: string;
}

export interface ProjectCase {
  id: ProjectCaseId;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  company: Record<Lang, string>;
  role: Record<Lang, string>;
  tools: CaseTool[];
  timeline: string;
  description: Record<Lang, string>;
  context: Record<Lang, string>;
  /** Omit or leave empty for concept / unreleased projects */
  appUrl?: string;
  heroImage: string;
  problem: Record<Lang, string>;
  problemImage: string;
  processIntro: Record<Lang, string>;
  processSteps: Record<Lang, string[]>;
  valueBlocks?: Array<{
    title: Record<Lang, string>;
    text: Record<Lang, string>;
  }>;
  solution: Record<Lang, string>;
  metrics?: Record<Lang, string[]>;
  insights: Record<Lang, string>;
  showcaseMain: string;
}

const sharedTools: CaseTool[] = [
  { id: 'figma', label: 'Figma' },
  { id: 'framer', label: 'Framer' },
  { id: 'notion', label: 'Notion' },
];

export const projectCases: ProjectCase[] = [
  {
    id: 'campus-care',
    title: { ru: 'Campus Care', en: 'Campus Care' },
    subtitle: { ru: 'Веб-сервис для университета', en: 'University web service' },
    company: {
      ru: 'Проект для РТУ МИРЭА',
      en: 'Сoncept for RTU MIREA',
    },
    role: { ru: 'Product Manager', en: 'Product Manager' },
    tools: [
      { id: 'anytype', label: 'Anytype' },
      { id: 'yandex-forms', label: 'Яндекс формы' },
      { id: 'excel', label: 'Excel' },
      { id: 'miro', label: 'Miro' },
      { id: 'figma-stitch', label: 'Figma / Stitch' },
    ],
    timeline: '2026',
    description: {
      ru: 'Сервис для фиксации неисправностей в университете и отслеживания процесса их устранения.',
      en: 'A service for reporting campus facility issues and tracking how they get resolved.',
    },
    context: {
      ru: 'Campus Care помогает студентам и сотрудникам сообщать о неисправностях в вузе. Пользователь загружает фото, указывает место и описание проблемы, после чего отслеживает статус и результат её устранения.',
      en: 'Campus Care helps students and staff report problems across campus buildings. A user can photograph an issue, specify the building and classroom, add a description, and send the request to the responsible department — from broken outlets and monitors to projectors, furniture, lighting, plumbing, and more. After submitting, they can see status, processing timelines, and the outcome of the work.',
    },
    heroImage: bentoImages.campusCareList,
    problem: {
      ru: 'Студентам и сотрудникам не всегда понятно, куда сообщать о неисправностях, а обращения через разные каналы могут теряться. По результатам опроса и личных наблюдений я выявила потребность в едином сервисе, где можно быстро создать заявку и отследить её до устранения проблемы.',
      en: 'Students and staff often do not know where to report facility issues. Requests go verbally or through scattered channels, so information gets lost and people cannot tell whether a problem was accepted for work. Based on personal observation and a user survey, the university lacks a single transparent service for these requests. The goal was to design a solution that makes it easy to report an issue and follow the full path from submission to resolution.',
    },
    problemImage: bentoImages.campusCareCreate,
    processIntro: {
      ru: '',
      en: '',
    },
    processSteps: {
      ru: [
        'Провела опрос среди потенциальных пользователей и собрала примеры ситуаций в корпусах вуза.',
        'Определила основные роли: студент или преподаватель, сотрудник ответственного подразделения, исполнитель и администратор.',
        'Составила пользовательские сценарии и основной путь: заметить неисправность → сфотографировать → указать место → отправить → отслеживать статус.',
        'Спроектировала структуру веб-сервиса, экраны, статусы обращений и логику взаимодействия между пользователями и сотрудниками вуза.',
        'Подготовила архитектуру frontend-приложения с расчётом на реализацию на React и TypeScript.',
      ],
      en: [
        'Ran a survey with potential users and collected real campus issue examples.',
        'Defined core roles: student or lecturer, responsible department staff, assignee, and admin.',
        'Mapped user scenarios and the main path: notice an issue → photograph it → set location → submit → track status.',
        'Designed the service structure, screens, request statuses, and interaction logic between users and university staff.',
        'Prepared the frontend architecture with React and TypeScript in mind for later implementation.',
      ],
    },
    valueBlocks: [
      {
        title: { ru: 'Студенты и преподаватели', en: 'Students & lecturers' },
        text: {
          ru: 'Понятный способ сообщить о проблеме, прозрачный статус обращения, обратная связь от сотрудников вуза и контроль результата.',
          en: 'A clear way to report an issue, transparent request status, feedback from university staff, and control over the outcome.',
        },
      },
      {
        title: { ru: 'Университет', en: 'University' },
        text: {
          ru: 'Единая база неисправностей, меньше потерянных обращений, контроль сроков и ответственных, данные о проблемных корпусах и приоритеты на основе реальной потребности.',
          en: 'A single issues database, fewer lost requests, control of deadlines and owners, data on problem buildings, and prioritization based on real demand.',
        },
      },
    ],
    solution: {
      ru: 'Пользователь создаёт обращение с фото, описанием и местоположением, затем отслеживает статус и подтверждает результат. Карта помогает избежать дубликатов, а сотрудники через админ-панель назначают исполнителей, управляют сроками и фиксируют выполнение.',
      en: 'The core is a simple request form: photo, category, building, floor, room, description, and urgency. After submit, the request appears in a personal cabinet — users track status, get notifications, answer follow-ups, and confirm the fix. An issues map reduces duplicates: people can see requests in a building and mark that the same problem affects them too. For staff, an admin area covers new requests, assignee allocation, priority and status, deadlines, and recording outcomes.',
    },
    metrics: {
      ru: [
        'Количество созданных обращений',
        'Доля принятых в работу заявок',
        'Среднее время первичной реакции',
        'Среднее время устранения проблемы',
        'Доля обращений, решённых в срок',
        'Количество повторных обращений',
        'Доля подтверждённых пользователями решений',
        'Оценка качества выполненных работ',
        'CSAT после закрытия заявки',
      ],
      en: [
        'Number of created requests',
        'Share of requests accepted into work',
        'Average first-response time',
        'Average time to resolve',
        'Share of requests resolved on time',
        'Number of duplicate / repeat requests',
        'Share of user-confirmed resolutions',
        'Work quality rating',
        'CSAT after request closure',
      ],
    },
    insights: {
      ru: 'Даже бытовая неисправность требует понятного процесса между пользователем и организацией. Главная ценность Campus Care — не только фото проблемы, но и видимость работы с обращением: заявка зарегистрирована, кто отвечает, на каком этапе решение. Сервис может сократить потери обращений, систематизировать данные об инфраструктуре и сделать среду комфортнее для студентов и сотрудников.',
      en: 'Even a small facility issue needs a clear process between the user and the organization. Campus Care’s main value is not only capturing a photo, but making follow-up visible: the request is registered, who owns it, and where resolution stands. The service can reduce lost requests, systematize infrastructure data, and make campus life more comfortable for students and staff.',
    },
    showcaseMain: bentoImages.campusCareMap,
  },
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
