import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../components/svg-icon.component';

interface Skill {
  name: string;
  level: number;
  iconName: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 75, iconName: 'code' },
    { name: 'JavaScript', level: 85, iconName: 'code' },
    { name: 'Vue.js', level: 80, iconName: 'code' },
  ];

  backendSkills: Skill[] = [
    { name: 'C#', level: 80, iconName: 'server' },
    { name: 'Java', level: 70, iconName: 'server' },
    { name: 'Ruby', level: 65, iconName: 'server' },
    { name: 'PostGresSQL', level: 90, iconName: 'database' },
    { name: 'SQL Server', level: 75, iconName: 'database' },
    { name: 'MongoDB', level: 50, iconName: 'database' },
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 85, iconName: 'code' },
    { name: 'Docker', level: 50, iconName: 'server' },
    { name: 'Agile/Scrum', level: 70, iconName: 'server' },
  ];

  certifications: Certification[] = [
    {
      name: 'Cambridge English: Advanced (B2)',
      issuer: 'Cambridge',
      date: 'Avril 2023',
      icon: 'fab fa-free-code-camp'
    }
  ];
}
