export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string;
  tags: string[];
  techLogos?: string[];
  img?: string;
  icon?: string;
  color?: string;
  demoLink?: string;
  codeLink?: string;
  category?: string;
}