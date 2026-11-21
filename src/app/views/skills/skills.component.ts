import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../interfaces/skill';
import { Certification } from '../../interfaces/certification';
import { SvgIconComponent } from '../../components/svg-icon.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly translationService = inject(TranslationService);

  openSections = signal<Record<string, boolean>>({
    frontend: true,
    backend: true,
    tools: true,
    certifications: true
  });

  toggleSection(section: string): void {
    this.openSections.update(current => ({
      ...current,
      [section]: !current[section]
    }));
  }

  isSectionOpen(section: string): boolean {
    return !!this.openSections()[section];
  }

  frontendSkills: Skill[] = [
    { name: 'Angular', level: 75, iconName: 'code' },
    { name: 'JavaScript', level: 85, iconName: 'code' },
    { name: 'Vue.js', level: 80, iconName: 'code' },
  ];

  backendSkills: Skill[] = [
    { name: 'Python (Flask)', level: 60, iconName: 'server' },
    { name: 'C#', level: 80, iconName: 'server' },
    { name: 'Java', level: 70, iconName: 'server' },
    { name: 'Ruby', level: 65, iconName: 'server' },
    { name: 'PostGreSQL', level: 90, iconName: 'database' },
    { name: 'SQL Server', level: 75, iconName: 'database' },
    { name: 'MongoDB', level: 50, iconName: 'database' },
    { name: 'Symfony', level: 50, iconName: 'server' },
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 85, iconName: 'code' },
    { name: 'Docker', level: 50, iconName: 'server' },
    { name: 'Agile/Scrum', level: 70, iconName: 'server' },
  ];

  certifications = computed<Certification[]>(() => {
    const isEn = this.translationService.currentLang() === 'en';
    return [
      {
        name: 'TOEIC (C1)',
        issuer: 'ETS Global',
        date: isEn ? 'May 2026' : 'Mai 2026',
        icon: 'fab fa-free-code-camp'
      },
      {
        name: 'Cambridge English: Advanced (B2)',
        issuer: 'Cambridge',
        date: isEn ? 'April 2023' : 'Avril 2023',
        icon: 'fab fa-free-code-camp'
      }
    ];
  });
}
