import { Injectable, signal, computed, effect } from '@angular/core';
import { ThemeMode, AccentColor, ThemeConfig, ACCENT_COLORS, AccentColorOption } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme-config';
  private readonly mediaQuery: MediaQueryList;

  // Reactive state using Angular signals
  private readonly themeConfig = signal<ThemeConfig>(this.loadThemeConfig());

  // Public readonly signals
  public readonly currentTheme = computed(() => this.themeConfig());
  public readonly effectiveMode = computed(() => this.getEffectiveMode());
  public readonly currentAccent = computed(() => this.themeConfig().accent);

  constructor() {
    this.mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');

    // Apply theme whenever config changes
    effect(() => {
      this.themeConfig(); // Subscribe to changes
      this.applyTheme();
      this.saveThemeConfig();
    });

    // Listen to system preference changes
    this.listenToSystemPreferences();
  }

  /**
   * Set the theme mode (auto, light, or dark)
   */
  public setThemeMode(mode: ThemeMode): void {
    this.themeConfig.update(config => ({ ...config, mode }));
  }

  /**
   * Set the accent color
   */
  public setAccentColor(accent: AccentColor): void {
    this.themeConfig.update(config => ({ ...config, accent }));
  }

  /**
   * Get all available accent colors
   */
  public getAvailableAccents(): AccentColorOption[] {
    return Object.entries(ACCENT_COLORS).map(([key, def]) => ({
      ...def,
      key: key as AccentColor
    }));
  }

  /**
   * Load theme config from localStorage
   */
  private loadThemeConfig(): ThemeConfig {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ThemeConfig;
        // Validate the loaded config
        if (this.isValidThemeConfig(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Failed to load theme config:', error);
    }
    // Return default config
    return { mode: 'auto', accent: 'teal' };
  }

  /**
   * Save theme config to localStorage
   */
  private saveThemeConfig(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.themeConfig()));
    } catch (error) {
      console.warn('Failed to save theme config:', error);
    }
  }

  /**
   * Validate theme config structure
   */
  private isValidThemeConfig(config: any): config is ThemeConfig {
    return (
      config &&
      typeof config === 'object' &&
      ['auto', 'light', 'dark'].includes(config.mode) &&
      ['teal', 'blue', 'purple', 'orange', 'pink', 'lime', 'cyan', 'indigo', 'amber', 'red'].includes(config.accent)
    );
  }

  /**
   * Apply the current theme to the document
   */
  private applyTheme(): void {
    this.updateCSSVariables();
    this.updateThemeClass();
  }

  /**
   * Get the effective mode (resolving 'auto' to 'light' or 'dark')
   */
  private getEffectiveMode(): 'light' | 'dark' {
    const mode = this.themeConfig().mode;
    if (mode === 'auto') {
      return this.mediaQuery.matches ? 'dark' : 'light';
    }
    return mode;
  }

  /**
   * Listen to system preference changes
   */
  private listenToSystemPreferences(): void {
    this.mediaQuery.addEventListener('change', () => {
      if (this.themeConfig().mode === 'auto') {
        this.applyTheme();
      }
    });
  }

  /**
   * Update CSS variables on document root
   */
  private updateCSSVariables(): void {
    const root = document.documentElement;
    const config = this.themeConfig();
    const accentDef = ACCENT_COLORS[config.accent];

    // Parse HSLA values
    const [h, s, l] = accentDef.hsla.split(',').map(v => v.trim());

    // Set CSS variables
    root.style.setProperty('--accent-h', h);
    root.style.setProperty('--accent-s', s);
    root.style.setProperty('--accent-l', l);
  }

  /**
   * Update theme class on document root
   */
  private updateThemeClass(): void {
    const root = document.documentElement;
    const config = this.themeConfig();

    // Remove existing theme classes
    root.classList.remove('theme-light', 'theme-dark');

    // Apply theme class only if not auto (auto uses media query in CSS)
    if (config.mode !== 'auto') {
      root.classList.add(`theme-${config.mode}`);
    }
  }
}
