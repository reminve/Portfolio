import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./views/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./views/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./views/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./views/experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./views/contact/contact.component').then(m => m.ContactComponent)
  }
];
