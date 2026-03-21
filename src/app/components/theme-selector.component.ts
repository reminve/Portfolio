import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ThemeMode, AccentColor } from '../models/theme.model';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  protected readonly themeService = inject(ThemeService);
  protected isOpen = signal(false);
  protected readonly accents = this.themeService.getAvailableAccents();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.theme-selector');

    if (!clickedInside && this.isOpen()) {
      this.isOpen.set(false);
    }
  }

  toggleDropdown(): void {
    this.isOpen.update(v => !v);
  }

  setMode(mode: ThemeMode): void {
    this.themeService.setThemeMode(mode);
  }

  setAccent(accent: AccentColor): void {
    this.themeService.setAccentColor(accent);
  }
}
