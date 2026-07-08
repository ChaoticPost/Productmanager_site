import type { Lang } from '../BentoHome/bentoCopy';

export interface SkillSlide {
  title: string;
  text: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
}

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
    experienceEyebrow: string;
    experience: ExperienceItem[];
    contactTitle: string;
    copyEmail: string;
    copied: string;
    downloadTitle: string;
    downloadPdf: string;
    downloadFileName: string;
    galleryPrev: string;
    galleryNext: string;
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
    experienceEyebrow: 'Опыт',
    experience: [
      { role: 'Design Lead в Mano', period: 'Сейчас' },
      { role: 'Senior Designer в Shopify', period: '2021 – 2022' },
      { role: 'Product Designer в OLX', period: '2020 – 2021' },
    ],
    contactTitle: 'Есть проект?',
    copyEmail: 'Скопировать email',
    copied: 'Скопировано!',
    downloadTitle: 'Резюме',
    downloadPdf: 'Скачать PDF',
    downloadFileName: 'resume.pdf',
    galleryPrev: 'Предыдущее фото',
    galleryNext: 'Следующее фото',
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
    experienceEyebrow: 'Experience',
    experience: [
      { role: 'Design Lead at Mano', period: 'Current' },
      { role: 'Senior Designer at Shopify', period: '2021 – 2022' },
      { role: 'Product Designer at OLX', period: '2020 – 2021' },
    ],
    contactTitle: 'Have a project in mind?',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    downloadTitle: 'Resume',
    downloadPdf: 'Download PDF',
    downloadFileName: 'resume.pdf',
    galleryPrev: 'Previous photo',
    galleryNext: 'Next photo',
  },
};
