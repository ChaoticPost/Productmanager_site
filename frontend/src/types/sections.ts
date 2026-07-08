export type SectionId =
  | 'intro'
  | 'about'
  | 'resources'
  | 'resource-detail'
  | 'project-case'
  | 'work'
  | 'job'
  | 'education'
  | 'license'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

