import type { Lang } from '../BentoHome/bentoCopy';

export interface SkillSlide {
  title: string;
  text: string;
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
    skillsEyebrow: string;
    skills: SkillSlide[];
    stackTitle: string;
    careerSlides: CareerSlide[];
    careerCarouselLabel: string;
    contactTitle: string;
    copyEmail: string;
    copied: string;
    downloadTitle: string;
    downloadPdf: string;
    downloadFileName: string;
    galleryPrev: string;
    galleryNext: string;
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
      'Я родилась и выросла в Каире, Египет. С детства меня увлекало искусство и дизайн — яркие цвета и детали вокруг вдохновляли меня. Позже я ушла в веб-дизайн, а затем глубже погрузилась в UX и продуктовый дизайн.',
    whatIDoNow: 'Чем занимаюсь сейчас',
    whatIDoNowText: 'Сейчас я Design Lead в',
    companyName: 'mano',
    skillsEyebrow: 'Мои сильные стороны',
    skills: [
      {
        title: 'Digital Design',
        text: 'Инновационные методы решения задач и сильные решения для лучшего пользовательского опыта.',
      },
      {
        title: 'Product Strategy',
        text: 'Связываю пользовательские инсайты с бизнес-целями, чтобы продукт развивался осмысленно.',
      },
      {
        title: 'Design Systems',
        text: 'Строю масштабируемые системы, которые ускоряют команду и сохраняют единый визуальный язык.',
      },
      {
        title: 'Team Leadership',
        text: 'Веду дизайн-команды, выстраиваю процессы и помогаю расти специалистам.',
      },
    ],
    stackTitle: 'Мой стек',
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
            school: 'РТУ МИРЭА · ПИ',
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
    contactTitle: 'Есть проект?',
    copyEmail: 'Email',
    copied: 'Скопировано!',
    downloadTitle: 'Резюме',
    downloadPdf: 'Скачать PDF',
    downloadFileName: 'resume.pdf',
    galleryPrev: 'Предыдущее фото',
    galleryNext: 'Следующее фото',
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
      'I was born and raised in Cairo, Egypt. Ever since I was a child, I have had a passion for art and design. I was captivated by the vibrant colors and intricate details of the things around me, which inspired me to learn web design, where I delved deeper into the world of UX and product design.',
    whatIDoNow: 'What I do now',
    whatIDoNowText: "Today I'm a Design Lead at",
    companyName: 'mano',
    skillsEyebrow: 'What I do best',
    skills: [
      {
        title: 'Digital Design',
        text: 'Providing innovative problem-solving methods and impactful solutions to ensure a better experience.',
      },
      {
        title: 'Product Strategy',
        text: 'Connecting user insights with business goals so the product evolves with purpose.',
      },
      {
        title: 'Design Systems',
        text: 'Building scalable systems that speed up teams and keep a consistent visual language.',
      },
      {
        title: 'Team Leadership',
        text: 'Leading design teams, shaping processes, and helping people grow.',
      },
    ],
    stackTitle: 'Stack I use',
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
    contactTitle: 'Have a project in mind?',
    copyEmail: 'Email',
    copied: 'Copied!',
    downloadTitle: 'Resume',
    downloadPdf: 'Download PDF',
    downloadFileName: 'resume.pdf',
    galleryPrev: 'Previous photo',
    galleryNext: 'Next photo',
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
