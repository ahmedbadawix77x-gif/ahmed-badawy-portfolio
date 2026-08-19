export type ProjectCategory =
  | 'All'
  | 'AI'
  | 'Data Engineering'
  | 'Web Development'
  | 'Automation'
  | 'Education';

export type ProjectStatus =
  | 'Completed'
  | 'Completed / Ongoing Improvements'
  | 'In Development'
  | 'In Progress'
  | 'Coming Soon'
  | 'Ongoing';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  secondaryCategories?: ProjectCategory[];
  status: ProjectStatus;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  imageAccent?: string;
  details: {
    problem: string;
    idea: string;
    solution: string;
    role: string;
    challenges: string;
    howISolvedThem: string;
    whatILearned: string;
    futureImprovements: string;
    highlights: string[];
  };
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  badge: string;
  description: string;
  details: string;
  proofNote?: string;
  iconName: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface JourneyStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  status: 'Completed' | 'Currently Learning' | 'Next Direction';
  focusTopics: string[];
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  focus: string[];
  description: string;
  skillsAcquired: string[];
  category: 'Technical' | 'AI & Data' | 'Professional & Leadership';
  status: 'Verified' | 'Completed' | 'In Progress';
  image?: string;
  date?: string;
  issuer?: string;
}

export interface LearningItem {
  id: string;
  title: string;
  source: string;
  status: string;
  description: string;
  tags: string[];
  timeline?: string;
}
