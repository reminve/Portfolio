import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../interfaces/experience';
import { SvgIconComponent } from '../../components/svg-icon.component';

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
      role: 'Stagiaire en développement Full Stack',
      company: 'W3Plus',
      company_link: 'https://www.w3plus.fr/',
      logo: 'logo_w3p.png',
      location: 'Creuzier-le-neuf, France',
      map_link: 'https://maps.app.goo.gl/98Q41EHDHuQeoBBZ8',
      period: 'Jui. 2024 - Aou. 2024',
      description: 'Prise en main d\'un ERP web pour une grande entreprise.',
      achievements: [
        'Prise en main du framework Angular',
        'Prise en main du langage Typescript',
        'Prise en main de l\'application'
      ],
      technologies: ['Angular', 'C#', 'SQL Server']
    },
    {
      id: 2,
      role: 'Développeur Full Stack',
      company: 'W3Plus',
      company_link: 'https://www.w3plus.fr/',
      logo: 'logo_w3p.png',
      location: 'Creuzier-le-neuf, France',
      map_link: 'https://maps.app.goo.gl/98Q41EHDHuQeoBBZ8',
      period: 'Sept. 2024 - Aou. 2026',
      description: 'Développement et maintenance d\'un ERP web pour une grande entreprise.',
      achievements: [
        'Apprentissage du framework de programmation Angular',
        'Création de nouvelles fonctionnalités pour l\'application',
        'Prise en main et développement de l\'API permettant le bon fonctionnement de l\'application',
        'Analyse de fonctionnalités, maquettage et présentations clients'
      ],
      technologies: ['Angular', 'C#', 'SQL Server']
    },
    {
      id: 3,
      role: 'Développeur',
      company: 'IEMN',
      company_link: 'https://crow.iemn.fr/',
      logo: 'logo_iemn.png',
      location: 'Villeneuve-d\'Ascq, France',
      map_link: 'https://maps.app.goo.gl/B1uCTWm9ksSw4aVPA',
      period: 'Oct. 2026 - Présent',
      description: 'Développement et maintenance d\'applications pour des chercheurs.',
      achievements: [
        'Apprentissage du framework de programmation Flask',
        'Création de nouvelles fonctionnalités',
        'Prise en main et développement de l\'API permettant le bon fonctionnement de l\'application',
        'Analyse de fonctionnalités avec des clients finaux'
      ],
      technologies: ['Flask', 'PostgreSQL', 'Docker', 'Angular']
    }
  ];

  sortedExperience = [...this.experience].reverse();

  getImageUrl(name: string): string {
    return `assets/${name}`;
  }
}
