export type SectionId = 'intro' | 'about' | 'work' | 'job' | 'education' | 'license' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

