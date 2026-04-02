export type ThemeMode = 'auto' | 'light' | 'dark';

export type AccentColor = 'teal' | 'blue' | 'purple' | 'orange' | 'pink' | 'lime' | 'cyan' | 'indigo' | 'amber' | 'red';

export interface AccentColorDefinition {
  name: string;
  hsla: string;
  preview: string;
}

export interface AccentColorOption extends AccentColorDefinition {
  key: AccentColor;
}

export interface ThemeConfig {
  mode: ThemeMode;
  accent: AccentColor;
}

export const ACCENT_COLORS: Record<AccentColor, AccentColorDefinition> = {
  teal: {
    name: 'Vert/Teal',
    hsla: '160, 100%, 37%',
    preview: 'hsla(160, 100%, 37%, 1)',
  },
  blue: {
    name: 'Bleu',
    hsla: '207, 90%, 54%',
    preview: '#2196F3',
  },
  purple: {
    name: 'Violet',
    hsla: '291, 64%, 42%',
    preview: '#9C27B0',
  },
  orange: {
    name: 'Orange',
    hsla: '14, 100%, 60%',
    preview: '#FF6B35',
  },
  pink: {
    name: 'Rose',
    hsla: '338, 81%, 59%',
    preview: '#EC407A',
  },
  lime: {
    name: 'Citron',
    hsla: '88, 81%, 47%',
    preview: '#CDDC39',
  },
  cyan: {
    name: 'Cyan',
    hsla: '186, 100%, 35%',
    preview: '#00BCD4',
  },
  indigo: {
    name: 'Indigo',
    hsla: '231, 48%, 48%',
    preview: '#3F51B5',
  },
  amber: {
    name: 'Ambre',
    hsla: '45, 100%, 51%',
    preview: '#FFC107',
  },
  red: {
    name: 'Rouge',
    hsla: '4, 90%, 58%',
    preview: '#F44336',
  },
};
