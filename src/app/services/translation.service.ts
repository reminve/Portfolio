import { Injectable, signal, computed, effect } from '@angular/core';
import { Language, TranslationSchema } from '../i18n/translations.type';
import { fr } from '../i18n/fr';
import { en } from '../i18n/en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly STORAGE_KEY = 'portfolio-language';

  private readonly translations: Record<Language, TranslationSchema> = {
    fr,
    en
  };

  // Signal holding the active language
  public readonly currentLang = signal<Language>(this.loadInitialLanguage());

  // Computed signals for convenience
  public readonly translationsData = computed<TranslationSchema>(() => this.translations[this.currentLang()]);

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      this.saveLanguage(lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    });
  }

  /**
   * Set active language
   */
  public setLanguage(lang: Language): void {
    if (lang === 'fr' || lang === 'en') {
      this.currentLang.set(lang);
    }
  }

  /**
   * Toggle between French and English
   */
  public toggleLanguage(): void {
    this.setLanguage(this.currentLang() === 'fr' ? 'en' : 'fr');
  }

  /**
   * Translate a dotted path key (e.g. 'NAV.HOME') with optional string interpolation
   */
  public t(key: string, params?: Record<string, string | number>): string {
    const activeTranslations = this.translationsData();
    let value = this.resolvePath(activeTranslations, key);

    // Fallback to French if missing
    if (value === undefined && this.currentLang() !== 'fr') {
      value = this.resolvePath(this.translations.fr, key);
    }

    if (value === undefined) {
      return key;
    }

    if (typeof value !== 'string') {
      return key;
    }

    if (params) {
      return Object.entries(params).reduce(
        (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)),
        value
      );
    }

    return value;
  }

  private resolvePath(obj: any, path: string): any {
    if (!obj || !path) return undefined;
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      current = current[part];
    }
    return current;
  }

  private loadInitialLanguage(): Language {
    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored === 'fr' || stored === 'en') {
          return stored;
        }
      }
      if (typeof navigator !== 'undefined' && navigator.language) {
        if (navigator.language.toLowerCase().startsWith('en')) {
          return 'en';
        }
      }
    } catch (e) {
      console.warn('Failed to read preferred language:', e);
    }
    return 'fr';
  }

  private saveLanguage(lang: Language): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    } catch (e) {
      console.warn('Failed to save preferred language:', e);
    }
  }
}
