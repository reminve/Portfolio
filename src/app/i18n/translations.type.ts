export type Language = 'fr' | 'en';

export interface TranslationSchema {
  COMMON: {
    PORTFOLIO_TITLE: string;
    LANGUAGE_SELECTOR: string;
    LANG_FR: string;
    LANG_EN: string;
    CLOSE: string;
    FOOTER_COPYRIGHT: string;
    EXTERNAL_LINK: string;
  };
  NAV: {
    TOGGLE_MENU: string;
    HOME: string;
    ABOUT: string;
    SKILLS: string;
    PROJECTS: string;
    EXPERIENCE: string;
    CONTACT: string;
  };
  THEME: {
    SELECTOR_LABEL: string;
    SETTINGS_LABEL: string;
    DISPLAY_MODE: string;
    AUTO_MODE: string;
    AUTO_TOOLTIP: string;
    LIGHT_TOOLTIP: string;
    DARK_TOOLTIP: string;
    ACCENT_COLOR: string;
  };
  HOME: {
    GREETING: string;
    NAME: string;
    ROLE: string;
    TAGLINE: string;
    CTA_PROJECTS: string;
    CTA_CONTACT: string;
    CTA_CV: string;
    KEY_SKILLS_TITLE: string;
    FRONTEND_TITLE: string;
    BACKEND_TITLE: string;
    DATABASE_TITLE: string;
    RECENT_PROJECTS_TITLE: string;
    LEARN_MORE: string;
    PROJECT_PULSE_DESC: string;
    PROJECT_DEKAL_DESC: string;
    PROJECT_DEKAL_MOBILE_DESC: string;
  };
  ABOUT: {
    PAGE_TITLE: string;
    INTRO_1: string;
    INTRO_2: string;
    BACKGROUND_TITLE: string;
    BACKGROUND_P: string;
    PROFESSIONAL_TITLE: string;
    PROFESSIONAL_P: string;
    BEYOND_TITLE: string;
    BEYOND_P1: string;
    BEYOND_P2: string;
    ORCHESTRA_ALT: string;
    EDUCATION_TITLE: string;
    MASTER_DEGREE: string;
    MASTER_DESC: string;
    BUT_DEGREE: string;
    BUT_DESC: string;
    BAC_DEGREE: string;
    BAC_DESC_1: string;
    BAC_DESC_2: string;
  };
  SKILLS: {
    PAGE_TITLE: string;
    FRONTEND_CATEGORY: string;
    BACKEND_CATEGORY: string;
    TOOLS_CATEGORY: string;
    CERTIFICATIONS_CATEGORY: string;
  };
  PROJECTS: {
    PAGE_TITLE: string;
    FILTER_ALL: string;
    FILTER_WEB: string;
    FILTER_MOBILE: string;
    DEMO_BTN: string;
    CODE_BTN: string;
    VIEW_DEMO: string;
    VIEW_CODE: string;
    MODAL_DESCRIPTION: string;
    MODAL_ABOUT: string;
    MODAL_FEATURES: string;
    MODAL_CHALLENGES: string;
    MODAL_TECHNOLOGIES: string;
    ITEMS: {
      TREK12: {
        TITLE: string;
        DESC: string;
        DETAILED: string;
        FEATURES: string[];
        CHALLENGES: string;
      };
      DEKAL_MOBILE: {
        TITLE: string;
        DESC: string;
        DETAILED: string;
        FEATURES: string[];
        CHALLENGES: string;
      };
      DEKAL: {
        TITLE: string;
        DESC: string;
        DETAILED: string;
        FEATURES: string[];
        CHALLENGES: string;
      };
      PULSE: {
        TITLE: string;
        DESC: string;
        DETAILED: string;
        FEATURES: string[];
        CHALLENGES: string;
      };
    };
  };
  EXPERIENCE: {
    PAGE_TITLE: string;
    ITEMS: {
      W3P_INTERN: {
        ROLE: string;
        PERIOD: string;
        DESC: string;
        ACHIEVEMENTS: string[];
      };
      W3P_DEV: {
        ROLE: string;
        PERIOD: string;
        DESC: string;
        ACHIEVEMENTS: string[];
      };
      IEMN_DEV: {
        ROLE: string;
        PERIOD: string;
        DESC: string;
        ACHIEVEMENTS: string[];
      };
    };
  };
  CONTACT: {
    PAGE_TITLE: string;
    STAY_IN_TOUCH: string;
    SUBTITLE: string;
    EMAIL_LABEL: string;
    LOCATION_LABEL: string;
    LOCATION_VALUE: string;
    SOCIAL_NETWORKS: string;
    SEND_MESSAGE: string;
    FORM_NAME: string;
    FORM_NAME_PLACEHOLDER: string;
    ERROR_NAME_REQUIRED: string;
    FORM_EMAIL: string;
    FORM_EMAIL_PLACEHOLDER: string;
    ERROR_EMAIL_REQUIRED: string;
    ERROR_EMAIL_INVALID: string;
    FORM_SUBJECT: string;
    FORM_SUBJECT_PLACEHOLDER: string;
    ERROR_SUBJECT_REQUIRED: string;
    FORM_MESSAGE: string;
    FORM_MESSAGE_PLACEHOLDER: string;
    ERROR_MESSAGE_REQUIRED: string;
    SUBMIT_BTN: string;
    SUBMITTING_BTN: string;
    SUCCESS_MSG: string;
    DEFAULT_ERROR_MSG: string;
  };
}
