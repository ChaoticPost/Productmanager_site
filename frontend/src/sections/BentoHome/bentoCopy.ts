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
    linkedinBlockedNotice: string;
    switchToLight: string;
    switchToDark: string;
    switchToEn: string;
    switchToRu: string;
    inDevelopmentLabel: string;
    backHome: string;
    backAbout: string;
    backProjects: string;
  }
> = {
  ru: {
    heroTitleBefore: 'Привет! Я -',
    heroName: 'Дарья',
    heroTitleAfter: ',',
    heroSubtitle: 'менеджер продукта с техническим бэкграундом. Сейчас работаю в',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    aboutEyebrow: 'О себе',
    aboutText: 'Люблю понятные\nинтерфейсы и продукты\nс измеримым результатом.',
    //companyName: 'чтобы создавать решения, которые действительно нужны людям..',
    resourcesEyebrow: 'Проекты',
    resourcesText: 'От гипотез\nдо запуска\nцифровых продуктов.',
    downloadTitle: 'Резюме',
    downloadPdf: 'Скачать PDF',
    downloadFileName: 'CV_DariaChugunova_PM.pdf',
    stackEyebrow: 'Мой стек',
    contactTitle: 'Есть проект?',
    copyEmail: 'Email',
    copied: 'Скопировано!',
    linkedinBlockedNotice:
      'Без использования специальных средств открыть указанную ссылку с российского IP-адреса не получится.',
    switchToLight: 'Включить светлую тему',
    switchToDark: 'Включить тёмную тему',
    switchToEn: 'Переключить на английский',
    switchToRu: 'Переключить на русский',
    inDevelopmentLabel: 'В разработке',
    backHome: 'Главная',
    backAbout: 'О себе',
    backProjects: 'Проекты',
  },
  en: {
    heroTitleBefore: "Hi, I'm",
    heroName: 'Daria',
    heroTitleAfter: ',',
    heroSubtitle: 'a product manager with a technical background. Currently working at',
    companyName: 'RTUITLab',
    companyUrl: 'https://rtuitlab.dev',
    aboutEyebrow: 'About',
    aboutText: 'I love clear\ninterfaces and products\nwith measurable impact.',
    resourcesEyebrow: 'Projects',
    resourcesText: 'From hypotheses\nto launching\ndigital products.',
    downloadTitle: 'Resume',
    downloadPdf: 'Download PDF',
    downloadFileName: 'CV_DariaChugunova_PM.pdf',
    stackEyebrow: 'Stack I use',
    contactTitle: 'Have a project in mind?',
    copyEmail: 'Email',
    copied: 'Copied!',
    linkedinBlockedNotice:
      'Without a VPN or other unblock tools, this link can’t be opened from a Russian IP address.',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    switchToEn: 'Switch to English',
    switchToRu: 'Switch to Russian',
    inDevelopmentLabel: 'In development',
    backHome: 'Home',
    backAbout: 'About',
    backProjects: 'Projects',
  },
};
