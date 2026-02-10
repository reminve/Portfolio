import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../components/svg-icon.component';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience: Experience[] = [
    {
      id: 1,
      role: 'Développeur Full Stack',
      company: 'W3Plus',
      location: 'Creuzier-le-neuf, France',
      period: 'Sept 2024 - Présent',
      description: 'Développement et maintenance d\'une ERP web pour une grande entreprise.',
      achievements: [
        'Apprentissage du langage de programation Angular',
        'Création de nouvelles fonctionnalités pour l\'application',
        'Prise en main développement de l\'API permettant le bon fonctionnement de l\'application',
      ],
      technologies: ['Angular', 'C#', 'SQL Server']
    },
    {
      id: 2,
      role: 'Stagiaire en développement Full Stack',
      company: 'W3Plus',
      location: 'Creuzier-le-neuf, France',
      period: 'Jui 2024 - Aou 2024',
      description: 'Prise en main d\'un ERP web pour une grande entreprise.',
      achievements: [
        'Prise en main du langage Angular',
        'Prise en main de l\'application'
      ],
      technologies: ['Angular', 'C#', 'SQL Server']
    }
  ];
}
