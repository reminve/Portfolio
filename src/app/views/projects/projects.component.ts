import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../components/svg-icon.component';

interface Project {
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

interface Filter {
  id: string;
  name: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeFilter = signal<string>('all');
  selectedProject = signal<Project | null>(null);

  filters: Filter[] = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Dekal',
      description: 'Portage du jeu de société Dekal.',
      detailedDescription: 'Un projet web complet qui reproduit fidèlement l\'expérience du jeu de société Dekal dans un format numérique. Les joueurs peuvent rejoindre des parties et jouer en ligne contre d\'autres utilisateurs ou des IAs.',
      features: [
        'Création et gestion de parties',
        'Interface de jeu interactive',
        'Système de classement des joueurs',
        'Intelligence artificielle pour jouer contre l\'ordinateur'
      ],
      challenges: 'La principale difficulté était de reproduire les mécaniques complexes du jeu tout en offrant une interface utilisateur intuitive et réactive.',
      tags: ['PHP', 'JavaScript', 'web'],
      techLogos: ['php', 'javascript'],
      img: 'logo_dekal.jpg',
      // demoLink: 'https://codefirst.iut.uca.fr/containers/dekal_sae_2a-webapp/user/accueil',
      codeLink: 'https://codefirst.iut.uca.fr/gitlab/IUT_INF63/migration2025/dekal_sae_2a/applicationDekal',
      category: 'web'
    },
    {
      id: 2,
      title: 'Dekal Mobile',
      description: 'Portage du jeu de société Dekal pour faire des 1vs1 sur mobile.',
      detailedDescription: 'Version mobile du jeu Dekal spécialement optimisée pour les duels 1 contre 1. Cette application native Android permet de jouer au Dekal n\'importe où, même hors ligne.',
      features: [
        'Mode 1vs1 contre l\'ordinateur ou un autre joueur',
        'Interface adaptée aux écrans mobiles',
        'Notifications pour les tours de jeu',
        'Statistiques de jeu détaillées'
      ],
      challenges: 'Adapter l\'expérience de jeu pour les petits écrans tout en conservant toutes les fonctionnalités essentielles a nécessité une refonte complète de l\'interface utilisateur.',
      tags: ['Kotlin', 'Android', 'Room', 'mobile'],
      techLogos: ['kotlin', 'android', 'sqlite'],
      img: 'logo_dekal_duel.png',
      codeLink: 'https://codefirst.iut.uca.fr/gitlab/IUT_INF63/migration2025/dekal_sae_2a/androidApp',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Trek-12',
      description: 'Portage du jeu de société Trek-12.',
      detailedDescription: 'Adaptation numérique du jeu de société Trek-12, un jeu de dés et de stratégie. Cette application Windows permet de jouer seul sur votre ordinateur.',
      features: [
        'Mode solo',
        'Interface graphique immersive',
        'Tutoriel intégré pour apprendre les règles',
        'Système de scores et de leaderboard'
      ],
      challenges: 'Prendre en main le XAML en un temps limité dans une équipe de 3 personnes.',
      tags: ['C#', 'XAML'],
      techLogos: ['csharp', 'xaml', 'dotnet'],
      img: 'logo_trek12.png',
      codeLink: 'https://codefirst.iut.uca.fr/gitlab/IUT_INF63/migration2025/Trek_Prod/Trek12_API'
    },
  ];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.category === filter || project.tags.includes(filter)
    );
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
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetails(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
