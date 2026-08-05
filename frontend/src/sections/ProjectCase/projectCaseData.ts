import type { Lang } from '../BentoHome/bentoCopy';
import { bentoImages } from '../BentoHome/bentoImages';

export type ProjectCaseId = 'campus-care' | 'cashless' | 'sorting-center' | 'laptop';

export const projectCaseIds: ProjectCaseId[] = ['campus-care', 'cashless', 'sorting-center', 'laptop'];

export interface CaseTool {
  id: string;
  label: string;
}

export type ProcessStepIcon = 'research' | 'roles' | 'journey' | 'design';

export interface ProcessStep {
  title: string;
  text?: string;
  chips?: string[];
  flow?: string[];
  icon?: ProcessStepIcon;
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
  processSteps: Record<Lang, ProcessStep[]>;
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
      ru: 'Продуктовый и user-centric подход: от исследования до проектирования сервиса.',
      en: 'A product and user-centric approach: from research to service design.',
    },
    processSteps: {
      ru: [
        {
          icon: 'research',
          title: 'Исследование',
          text: 'Опрос пользователей и реальные кейсы из корпусов.',
        },
        {
          icon: 'roles',
          title: 'Роли',
          chips: ['Студент', 'Сотрудник', 'Исполнитель', 'Админ'],
        },
        {
          icon: 'journey',
          title: 'Путь заявки',
          flow: ['Заметить', 'Фото', 'Место', 'Отправить', 'Статус'],
        },
        {
          icon: 'design',
          title: 'Проектирование',
          text: 'Экраны, статусы и логика взаимодействия.',
        },
      ],
      en: [
        {
          icon: 'research',
          title: 'Research',
          text: 'User survey and real campus issue examples.',
        },
        {
          icon: 'roles',
          title: 'Roles',
          chips: ['Student', 'Staff', 'Assignee', 'Admin'],
        },
        {
          icon: 'journey',
          title: 'Request path',
          flow: ['Notice', 'Photo', 'Place', 'Submit', 'Status'],
        },
        {
          icon: 'design',
          title: 'Design',
          text: 'Screens, statuses, and interaction logic.',
        },
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
        { icon: 'research', title: 'Исследование', text: 'Опросы и интервью о финансовых привычках.' },
        { icon: 'design', title: 'Прототипы', text: 'Wireframes и итерации по обратной связи.' },
        { icon: 'journey', title: 'Тесты', text: 'Проверка UX с пользователями и доработки.' },
      ],
      en: [
        { icon: 'research', title: 'Research', text: 'Surveys and interviews on financial habits.' },
        { icon: 'design', title: 'Prototypes', text: 'Wireframes refined with user feedback.' },
        { icon: 'journey', title: 'Testing', text: 'UX tests with users and follow-up fixes.' },
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
    id: 'sorting-center',
    title: {
      ru: 'Конструктор сортировочного центра',
      en: 'Sorting Center Constructor',
    },
    subtitle: { ru: 'Веб-платформа', en: 'Web Platform' },
    company: {
      ru: 'Ozon (хакатон Роботон)',
      en: 'Ozon (Roboton hackathon)',
    },
    role: {
      ru: 'Product Manager / Frontend-разработчик',
      en: 'Product Manager / Frontend Developer',
    },
    tools: [
      { id: 'figma', label: 'Figma' },
      { id: 'figjam', label: 'FigJam' },
      { id: 'notion', label: 'Notion' },
      { id: 'stitch', label: 'Stitch' },
    ],
    timeline: '2026',
    description: {
      ru: 'Веб-платформа для проектирования цифровых моделей сортировочных центров, расчёта их производительности и сравнения разных вариантов организации процессов.',
      en: 'A web platform for designing digital models of sorting centers, calculating throughput, and comparing alternative process layouts.',
    },
    context: {
      ru: 'Сервис позволяет собрать схему сортировочного центра из готовых технологических блоков, настроить параметры оборудования и товарных потоков, запустить расчёт или симуляцию и изучить результаты в едином интерфейсе. Пользователь может проверить, справится ли выбранная конфигурация с целевым потоком, где появятся очереди и сколько потребуется оборудования, площади и персонала.',
      en: 'The service lets users assemble a sorting-center scheme from ready technological blocks, configure equipment and goods-flow parameters, run a calculation or simulation, and review results in one interface. Users can check whether a configuration handles the target flow, where queues form, and how much equipment, floor space, and staff are required.',
    },
    heroImage: bentoImages.jobPortal,
    problem: {
      ru: 'Проектирование сортировочного центра требует большого количества взаимосвязанных расчётов. Специалистам сложно быстро оценивать разные конфигурации, находить узкие места и сравнивать сценарии без разрозненных таблиц и специализированного программного обеспечения.',
      en: 'Designing a sorting center involves many interdependent calculations. Specialists struggle to quickly evaluate configurations, find bottlenecks, and compare scenarios without scattered spreadsheets and specialized software.',
    },
    problemImage: bentoImages.jobPortal,
    processIntro: {
      ru: 'Команда выстроила работу вокруг полного сценария инженера: от создания проекта и сборки технологической схемы до запуска модели, анализа результатов и выбора оптимальной конфигурации.',
      en: 'The team structured the work around the full engineer journey: from creating a project and assembling the process scheme to running the model, analyzing results, and choosing the optimal configuration.',
    },
    processSteps: {
      ru: [
        {
          icon: 'research',
          title: 'Исследование',
          text: 'Изучили процессы сортировочного центра, основные типы оборудования, потоки товаров, ограничения и показатели эффективности.',
        },
        {
          icon: 'roles',
          title: 'Проектирование',
          text: 'Сформировали структуру сервиса, пользовательские сценарии, библиотеку технологических блоков и логику редактора модели.',
        },
        {
          icon: 'design',
          title: 'Прототипирование',
          text: 'Спроектировали экраны проектов, редактора схемы, настройки параметров, запусков, аналитики и сравнения сценариев.',
        },
        {
          icon: 'journey',
          title: 'Проверка модели',
          text: 'Сопоставили аналитические расчёты с результатами SimPy-симуляции и подготовили V&V-тесты для проверки корректности модели.',
        },
      ],
      en: [
        {
          icon: 'research',
          title: 'Research',
          text: 'Studied sorting-center processes, equipment types, goods flows, constraints, and performance metrics.',
        },
        {
          icon: 'roles',
          title: 'Product design',
          text: 'Defined the service structure, user scenarios, technology-block library, and model editor logic.',
        },
        {
          icon: 'design',
          title: 'Prototyping',
          text: 'Designed screens for projects, scheme editor, parameter setup, runs, analytics, and scenario comparison.',
        },
        {
          icon: 'journey',
          title: 'Model validation',
          text: 'Aligned analytical calculations with SimPy simulation results and prepared V&V tests to verify model correctness.',
        },
      ],
    },
    solution: {
      ru: 'Единый инженерный сервис, в котором пользователь создаёт проект, собирает технологическую схему из готовых блоков и настраивает параметры каждого участка. После запуска система рассчитывает производительность, загрузку оборудования, очереди, площадь и численность персонала. Результаты нескольких сценариев можно сравнить в таблицах и на графиках, а автоматический вывод помогает определить лучший вариант и основные ограничения.',
      en: 'A single engineering service where the user creates a project, assembles a process scheme from ready blocks, and configures each section. After a run, the system calculates throughput, equipment load, queues, floor space, and staffing. Multiple scenarios can be compared in tables and charts, and automated insights help identify the best option and key constraints.',
    },
    insights: {
      ru: 'Наибольшую ценность для пользователя дают не отдельные расчёты, а возможность пройти весь путь в одном интерфейсе: собрать модель, проверить её корректность, увидеть узкие места и сравнить альтернативные сценарии. Визуальный редактор делает сложную инженерную модель понятнее, а единый формат результатов ускоряет принятие решений по конфигурации сортировочного центра.',
      en: 'The highest value is not isolated calculations, but walking the full path in one interface: build a model, validate it, spot bottlenecks, and compare alternatives. A visual editor makes a complex engineering model clearer, and a unified results format speeds decisions on sorting-center configuration.',
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
        { icon: 'research', title: 'Аудит', text: 'Сайт, конкуренты и value proposition.' },
        { icon: 'design', title: 'Дизайн-система', text: 'Wireframes для лендинга и страниц.' },
        { icon: 'journey', title: 'Запуск', text: 'A/B CTA и финальная полировка.' },
      ],
      en: [
        { icon: 'research', title: 'Audit', text: 'Site, competitors, and value proposition.' },
        { icon: 'design', title: 'Design system', text: 'Wireframes for landing and pages.' },
        { icon: 'journey', title: 'Launch', text: 'CTA A/B tests and final polish.' },
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
