import type { Lang } from '../BentoHome/bentoCopy';

export const aboutBlog: Record<
  Lang,
  {
    blogTitle: string;
    blogCta: string;
    blogUrl: string;
  }
> = {
  ru: {
    blogTitle: 'Блог',
    blogCta: 'Читать',
    blogUrl: '#',
  },
  en: {
    blogTitle: 'Blog',
    blogCta: 'Read',
    blogUrl: '#',
  },
};
