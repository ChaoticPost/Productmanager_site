import type { IconSvgElement } from '@hugeicons/react';
import {
  NewTwitterIcon,
  DribbbleIcon,
  InstagramIcon,
  Linkedin01Icon,
  Behance02Icon,
  Mail01Icon,
  ArrowUpRight01Icon,
  Copy01Icon,
  Download01Icon,
  Moon02Icon,
  Sun02Icon,
  ArrowLeft01Icon,
  Home01Icon,
  FigmaIcon,
  Notion01Icon,
  FramerIcon,
  Task01Icon,
  ArcBrowserIcon,
  SlackIcon,
  ChatGptIcon,
  ArrowRight01Icon,
  Tick01Icon,
  Cancel01Icon,
} from '@hugeicons/core-free-icons';

export const socialIconMap: Record<string, IconSvgElement> = {
  x: NewTwitterIcon,
  dribbble: DribbbleIcon,
  instagram: InstagramIcon,
  linkedin: Linkedin01Icon,
  behance: Behance02Icon,
  mail: Mail01Icon,
};

export const stackIconMap = [
  { id: 'figma', label: 'Figma', icon: FigmaIcon },
  { id: 'notion', label: 'Notion', icon: Notion01Icon },
] as const;

export const aboutStackIconMap = [
  { id: 'arc', label: 'Arc Browser', icon: ArcBrowserIcon },
  { id: 'slack', label: 'Slack', icon: SlackIcon },
  { id: 'chatgpt', label: 'ChatGPT', icon: ChatGptIcon },
  { id: 'framer', label: 'Framer', icon: FramerIcon },
  { id: 'figma', label: 'Figma', icon: FigmaIcon },
] as const;

export {
  ArrowUpRight01Icon,
  Copy01Icon,
  Download01Icon,
  Moon02Icon,
  Sun02Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Tick01Icon,
  Home01Icon,
  Cancel01Icon,
};
