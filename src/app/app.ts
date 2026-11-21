import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSelectorComponent } from './components/theme-selector.component';
import { LanguageSelectorComponent } from './components/language-selector.component';
import { ThemeService } from './services/theme.service';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  isMenuOpen = false;

  // Initialize services early
  private readonly themeService = inject(ThemeService);
  private readonly translationService = inject(TranslationService);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
