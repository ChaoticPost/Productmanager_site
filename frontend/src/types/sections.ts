export type SectionId = 'intro' | 'work' | 'job' | 'education' | 'license' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

