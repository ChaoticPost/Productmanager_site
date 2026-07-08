import type { Lang } from '../BentoHome/bentoCopy';
import { bentoImages } from '../BentoHome/bentoImages';

export interface ResourceProject {
  id: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  image: string;
  href: string;
  previewUrl: string;
  description: Record<Lang, string>;
  features: Record<Lang, string[]>;
  previewImages: string[];
}

export const resourcesCopy: Record<
  Lang,
  {
    freeLabel: string;
    getForFree: string;
    livePreview: string;
    backToResources: string;
    galleryPrev: string;
    galleryNext: string;
  }
> = {
  ru: {
    freeLabel: 'Бесплатно',
    getForFree: 'Получить бесплатно',
    livePreview: 'Live preview',
    backToResources: 'Resources',
    galleryPrev: 'Предыдущий слайд',
    galleryNext: 'Следующий слайд',
  },
  en: {
    freeLabel: 'Free',
    getForFree: 'Get it for free',
    livePreview: 'Live preview',
    backToResources: 'Resources',
    galleryPrev: 'Previous slide',
    galleryNext: 'Next slide',
  },
};

export const resourceProjects: ResourceProject[] = [
  {
    id: 'benbox',
    title: {
      ru: 'BenBox – Portfolio Template',
      en: 'BenBox – Portfolio Template',
    },
    subtitle: {
      ru: 'Framer Template',
      en: 'Framer Template',
    },
    image: bentoImages.portrait,
    href: 'https://bentox.framer.website/resource/benbox-portfolio-template',
    previewUrl: 'https://bentox.framer.website/resource/benbox-portfolio-template',
    description: {
      ru: 'Шаблон портфолио на основе bento-сетки. Подходит для дизайнеров, разработчиков и креаторов, которым нужен современный и гибкий сайт.',
      en: 'A portfolio template based on the bento box concept. Perfect for designers, developers, and creators who need a modern and flexible website.',
    },
    features: {
      ru: ['Bento-grid Layout', 'Dark & Light Modes', 'Shop Pages', 'Page Transitions'],
      en: ['Bento-grid Layout', 'Dark & Light Modes', 'Shop Pages', 'Page Transitions'],
    },
    previewImages: [bentoImages.portrait, bentoImages.laptop, bentoImages.jobPortal, bentoImages.cashless],
  },
  {
    id: 'klear',
    title: {
      ru: 'Klear – Portfolio Template',
      en: 'Klear – Portfolio Template',
    },
    subtitle: {
      ru: 'Framer Template',
      en: 'Framer Template',
    },
    image: bentoImages.laptop,
    href: 'https://bentox.framer.website/resource/klear-portfolio-template',
    previewUrl: 'https://bentox.framer.website/resource/klear-portfolio-template',
    description: {
      ru: 'Минималистичный шаблон с акцентом на типографику и визуальные кейсы.',
      en: 'A minimalist template focused on typography and visual case studies.',
    },
    features: {
      ru: ['Bento-grid Layout', 'Dark & Light Modes', 'CMS Ready', 'Page Transitions'],
      en: ['Bento-grid Layout', 'Dark & Light Modes', 'CMS Ready', 'Page Transitions'],
    },
    previewImages: [bentoImages.laptop, bentoImages.portrait, bentoImages.cashless],
  },
  {
    id: 'robin',
    title: {
      ru: 'Robin James – Portfolio',
      en: 'Robin James – Portfolio',
    },
    subtitle: {
      ru: 'Framer Template',
      en: 'Framer Template',
    },
    image: bentoImages.jobPortal,
    href: 'https://bentox.framer.website/resource/robin-james-portfolio',
    previewUrl: 'https://bentox.framer.website/resource/robin-james-portfolio',
    description: {
      ru: 'Портфолио для креативных специалистов с упором на проекты и storytelling.',
      en: 'A creative portfolio with a strong focus on projects and storytelling.',
    },
    features: {
      ru: ['Bento-grid Layout', 'Dark & Light Modes', 'Blog Pages', 'Page Transitions'],
      en: ['Bento-grid Layout', 'Dark & Light Modes', 'Blog Pages', 'Page Transitions'],
    },
    previewImages: [bentoImages.jobPortal, bentoImages.laptop, bentoImages.portrait],
  },
  {
    id: 'anderson',
    title: {
      ru: 'Anderson – Portfolio',
      en: 'Anderson – Portfolio',
    },
    subtitle: {
      ru: 'Framer Template',
      en: 'Framer Template',
    },
    image: bentoImages.cashless,
    href: 'https://bentox.framer.website/resource/anderson-portfolio',
    previewUrl: 'https://bentox.framer.website/resource/anderson-portfolio',
    description: {
      ru: 'Современный шаблон для продуктовых дизайнеров и менеджеров.',
      en: 'A modern template for product designers and managers.',
    },
    features: {
      ru: ['Bento-grid Layout', 'Dark & Light Modes', 'Case Studies', 'Page Transitions'],
      en: ['Bento-grid Layout', 'Dark & Light Modes', 'Case Studies', 'Page Transitions'],
    },
    previewImages: [bentoImages.cashless, bentoImages.jobPortal, bentoImages.laptop],
  },
];

export const getResourceProject = (projectId: string): ResourceProject | undefined =>
  resourceProjects.find((project) => project.id === projectId);
