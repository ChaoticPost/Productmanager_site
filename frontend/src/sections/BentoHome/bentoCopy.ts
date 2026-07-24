export type Lang = 'ru' | 'en';

export const bentoCopy: Record<
  Lang,
  {
    heroTitleBefore: string;
    heroName: string;
    heroTitleAfter: string;
    heroSubtitle: string;
    companyName: string;
    companyUrl: string;
    aboutEyebrow: string;
    aboutText: string;
    resourcesEyebrow: string;
    resourcesText: string;
    downloadTitle: string;
    downloadPdf: string;
    downloadFileName: string;
    stackEyebrow: string;
    contactTitle: string;
    copyEmail: string;
    copied: string;
    switchToLight: string;
    switchToDark: string;
    switchToEn: string;
    switchToRu: string;
  }
> = {
  ru: {
    heroTitleBefore: 'Привет! Я —',
    heroName: 'Дарья',
    heroTitleAfter: ',',
    heroSubtitle: 'менеджер продукта с техническим бэкграундом. Сейчас работаю в',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    aboutEyebrow: 'О себе',
    aboutText: 'Увлечён дизайном и люблю решать задачи.',
    resourcesEyebrow: 'Ресурсы',
    resourcesText: 'Ресурсы, которые ускорят ваш workflow',
    downloadTitle: 'Резюме',
    downloadPdf: 'Скачать PDF',
    downloadFileName: 'resume.pdf',
    stackEyebrow: 'Мой стек',
    contactTitle: 'Есть проект?',
    copyEmail: 'Email',
    copied: 'Скопировано!',
    switchToLight: 'Включить светлую тему',
    switchToDark: 'Включить тёмную тему',
    switchToEn: 'Переключить на английский',
    switchToRu: 'Переключить на русский',
  },
  en: {
    heroTitleBefore: "Hi, I'm",
    heroName: 'Daria',
    heroTitleAfter: ',',
    heroSubtitle: 'a product manager with a technical background. Currently working at',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    aboutEyebrow: 'About',
    aboutText: 'Passionate about design and enjoy solving problems.',
    resourcesEyebrow: 'Resources',
    resourcesText: 'Resources to speed your workflow',
    downloadTitle: 'Resume',
    downloadPdf: 'Download PDF',
    downloadFileName: 'resume.pdf',
    stackEyebrow: 'Stack I use',
    contactTitle: 'Have a project in mind?',
    copyEmail: 'Email',
    copied: 'Copied!',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    switchToEn: 'Switch to English',
    switchToRu: 'Switch to Russian',
  },
};
