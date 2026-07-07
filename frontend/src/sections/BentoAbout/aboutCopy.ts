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
    galleryPrev: string;
    galleryNext: string;
  }
> = {
  ru: {
    pageTitle: 'Кто я?',
    myStory: 'Моя история',
    storyText:
      'Я вырос в Каире, Египет, и с детства увлекался искусством. Позже меня затянуло в веб-дизайн, а затем в UX и продуктовый дизайн.',
    whatIDoNow: 'Чем занимаюсь сейчас',
    whatIDoNowText: 'Сейчас я Design Lead в',
    companyName: 'mano',
    skillsEyebrow: 'Мои сильные стороны',
    skills: [
      {
        title: 'Digital Design',
        text: 'Простые методы для решения задач и создания сильных решений для вашего бренда.',
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
    galleryPrev: 'Предыдущее фото',
    galleryNext: 'Следующее фото',
  },
  en: {
    pageTitle: "What I'm about?",
    myStory: 'My story',
    storyText:
      'I grew up in Cairo, Egypt, and have been passionate about art since childhood. Later, I got into web design, then UX and product design.',
    whatIDoNow: 'What I do now',
    whatIDoNowText: "Today I'm a Design Lead at",
    companyName: 'mano',
    skillsEyebrow: 'What I do best',
    skills: [
      {
        title: 'Digital Design',
        text: 'Providing straightforward methods to solve problems and build impactful solutions for your brand.',
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
    galleryPrev: 'Previous photo',
    galleryNext: 'Next photo',
  },
};
