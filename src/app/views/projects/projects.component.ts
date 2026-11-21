import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';
import { Filter } from '../../interfaces/filter';
import { SvgIconComponent } from '../../components/svg-icon.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private readonly translationService = inject(TranslationService);

  activeFilter = signal<string>('all');
  selectedProjectId = signal<number | null>(null);

  filters = computed<Filter[]>(() => [
    { id: 'all', name: this.translationService.t('PROJECTS.FILTER_ALL') },
    { id: 'web', name: this.translationService.t('PROJECTS.FILTER_WEB') },
    { id: 'mobile', name: this.translationService.t('PROJECTS.FILTER_MOBILE') },
  ]);

  projects = computed<Project[]>(() => {
    const t = this.translationService.translationsData().PROJECTS.ITEMS;
    return [
      {
        id: 1,
        title: t.TREK12.TITLE,
        description: t.TREK12.DESC,
        detailedDescription: t.TREK12.DETAILED,
        features: t.TREK12.FEATURES,
        challenges: t.TREK12.CHALLENGES,
        tags: ['C#', 'XAML'],
        techLogos: ['csharp', 'xaml', 'dotnet'],
        img: 'logo_trek12.png',
      },
      {
        id: 2,
        title: t.DEKAL_MOBILE.TITLE,
        description: t.DEKAL_MOBILE.DESC,
        detailedDescription: t.DEKAL_MOBILE.DETAILED,
        features: t.DEKAL_MOBILE.FEATURES,
        challenges: t.DEKAL_MOBILE.CHALLENGES,
        tags: ['Kotlin', 'Android', 'Room', 'mobile'],
        techLogos: ['kotlin', 'android', 'sqlite'],
        img: 'logo_dekal_duel.png',
        codeLink: 'https://github.com/DekalSAE/androidApp',
        category: 'mobile'
      },
      {
        id: 3,
        title: t.DEKAL.TITLE,
        description: t.DEKAL.DESC,
        detailedDescription: t.DEKAL.DETAILED,
        features: t.DEKAL.FEATURES,
        challenges: t.DEKAL.CHALLENGES,
        tags: ['PHP', 'JavaScript', 'web'],
        techLogos: ['php', 'javascript'],
        img: 'logo_dekal.jpg',
        codeLink: 'https://github.com/DekalSAE/applicationDekal',
        category: 'web'
      },
      {
        id: 4,
        title: t.PULSE.TITLE,
        description: t.PULSE.DESC,
        detailedDescription: t.PULSE.DETAILED,
        features: t.PULSE.FEATURES,
        challenges: t.PULSE.CHALLENGES,
        tags: ['Angular', 'TypeScript', 'web'],
        techLogos: ['angular', 'typescript'],
        img: 'logo_Pulse.png',
        codeLink: 'https://github.com/PulseSAE/pulse-frontend',
        category: 'web'
      }
    ];
  });

  selectedProject = computed<Project | null>(() => {
    const id = this.selectedProjectId();
    if (!id) return null;
    return this.projects().find(p => p.id === id) ?? null;
  });

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = filter === 'all'
      ? this.projects()
      : this.projects().filter(project =>
          project.category === filter || project.tags.includes(filter)
        );
    return [...list].reverse();
  });

  getImageUrl(name: string): string {
    return `assets/${name}`;
  }

  getTechLogoUrl(tech: string): string {
    return `assets/${tech}.svg`;
  }

  setActiveFilter(filterId: string): void {
    this.activeFilter.set(filterId);
  }

  openProjectDetails(project: Project): void {
    this.selectedProjectId.set(project.id);
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetails(): void {
    this.selectedProjectId.set(null);
    document.body.style.overflow = 'auto';
  }
}
