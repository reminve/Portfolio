import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../interfaces/experience';
import { SvgIconComponent } from '../../components/svg-icon.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  private readonly translationService = inject(TranslationService);

  experience = computed<Experience[]>(() => {
    const t = this.translationService.translationsData().EXPERIENCE.ITEMS;
    return [
      {
        id: 1,
        role: t.W3P_INTERN.ROLE,
        company: 'W3Plus',
        company_link: 'https://www.w3plus.fr/',
        logo: 'logo_w3p.png',
        location: 'Creuzier-le-neuf, France',
        map_link: 'https://maps.app.goo.gl/98Q41EHDHuQeoBBZ8',
        period: t.W3P_INTERN.PERIOD,
        description: t.W3P_INTERN.DESC,
        achievements: t.W3P_INTERN.ACHIEVEMENTS,
        technologies: ['Angular', 'C#', 'SQL Server']
      },
      {
        id: 2,
        role: t.W3P_DEV.ROLE,
        company: 'W3Plus',
        company_link: 'https://www.w3plus.fr/',
        logo: 'logo_w3p.png',
        location: 'Creuzier-le-neuf, France',
        map_link: 'https://maps.app.goo.gl/98Q41EHDHuQeoBBZ8',
        period: t.W3P_DEV.PERIOD,
        description: t.W3P_DEV.DESC,
        achievements: t.W3P_DEV.ACHIEVEMENTS,
        technologies: ['Angular', 'C#', 'SQL Server']
      },
      {
        id: 3,
        role: t.IEMN_DEV.ROLE,
        company: 'IEMN',
        company_link: 'https://crow.iemn.fr/',
        logo: 'logo_iemn.png',
        location: 'Villeneuve-d\'Ascq, France',
        map_link: 'https://maps.app.goo.gl/B1uCTWm9ksSw4aVPA',
        period: t.IEMN_DEV.PERIOD,
        description: t.IEMN_DEV.DESC,
        achievements: t.IEMN_DEV.ACHIEVEMENTS,
        technologies: ['Flask', 'PostgreSQL', 'Docker', 'Angular']
      }
    ];
  });

  sortedExperience = computed(() => [...this.experience()].reverse());

  getImageUrl(name: string): string {
    return `assets/${name}`;
  }
}
