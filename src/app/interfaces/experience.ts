export interface Experience {
  id: number;
  role: string;
  company: string;
  company_link?: string;
  logo?: string;
  location: string;
  map_link?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}