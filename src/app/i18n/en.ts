import { TranslationSchema } from './translations.type';

export const en: TranslationSchema = {
  COMMON: {
    PORTFOLIO_TITLE: 'My Portfolio',
    LANGUAGE_SELECTOR: 'Change language',
    LANG_FR: 'Français',
    LANG_EN: 'English',
    CLOSE: 'Close',
    FOOTER_COPYRIGHT: 'Rémi Neveu',
    EXTERNAL_LINK: 'External link'
  },
  NAV: {
    TOGGLE_MENU: 'Toggle menu',
    HOME: 'Home',
    ABOUT: 'About',
    SKILLS: 'Skills',
    PROJECTS: 'Projects',
    EXPERIENCE: 'Experience',
    CONTACT: 'Contact'
  },
  THEME: {
    SELECTOR_LABEL: 'Theme selector',
    SETTINGS_LABEL: 'Theme settings',
    DISPLAY_MODE: 'Display mode',
    AUTO_MODE: 'Auto',
    AUTO_TOOLTIP: 'Follow system preferences',
    LIGHT_TOOLTIP: 'Light mode',
    DARK_TOOLTIP: 'Dark mode',
    ACCENT_COLOR: 'Accent color'
  },
  HOME: {
    GREETING: 'Hello, I am',
    NAME: 'Rémi Neveu',
    ROLE: 'Full Stack Web Developer',
    TAGLINE: 'I build web solutions for businesses',
    CTA_PROJECTS: 'View my projects',
    CTA_CONTACT: 'Contact me',
    CTA_CV: 'Download my CV',
    KEY_SKILLS_TITLE: 'Key skills',
    FRONTEND_TITLE: 'Frontend Development',
    BACKEND_TITLE: 'Backend Development',
    DATABASE_TITLE: 'Databases',
    RECENT_PROJECTS_TITLE: 'Recent projects',
    LEARN_MORE: 'Learn more',
    PROJECT_PULSE_DESC: 'Concert management and discovery application.',
    PROJECT_DEKAL_DESC: 'Digital adaptation of the Dekal board game.',
    PROJECT_DEKAL_MOBILE_DESC: 'Port of the board game Dekal for 1v1 mobile duels.'
  },
  ABOUT: {
    PAGE_TITLE: 'About me',
    INTRO_1: "Hello, I am <strong>Rémi Neveu</strong>, a developer passionate about creating modern and performant web applications.",
    INTRO_2: 'I specialize in full-stack development with a strong passion for JavaScript and TypeScript technologies. My dedication to continuous learning drives me to constantly stay up to date with the latest technologies, frameworks, and best practices.',
    BACKGROUND_TITLE: 'Background',
    BACKGROUND_P: 'I first became interested in computer science through the NSI specialty in high school. Since then, I have worked on diverse projects ranging from enterprise web applications to mobile apps and games.',
    PROFESSIONAL_TITLE: 'Professional Journey',
    PROFESSIONAL_P: 'I had the opportunity to work as a full-stack developer at W3Plus, contributing to a web ERP for a major enterprise. This allowed me to master Angular, develop new features for the platform, and experience agile teamwork through two-week sprints, sprint reviews, and daily meetings. Additionally, I explored diverse aspects of software engineering, including feature analysis, software development, and defining tasks and PBIs.',
    BEYOND_TITLE: 'Beyond Coding',
    BEYOND_P1: 'Outside of coding, I have a deep passion for music, which I have practiced since childhood. I play the trumpet, having studied at the music conservatory for 12 years, along with 4 years of clarinet. I have also performed with several bands and orchestras for many years.',
    BEYOND_P2: "Additionally, I served a one-year term as Head of Partnerships on my university program's student union, helping me hone my interpersonal skills and organize student outings and events.",
    ORCHESTRA_ALT: 'My orchestra',
    EDUCATION_TITLE: 'Education',
    MASTER_DEGREE: 'Master in Applied Computer Science and Intelligent Systems',
    MASTER_SCHOOL: 'School of Digital Technology - Faculty of Management, Economics, Sciences',
    MASTER_DESC: 'Deepening my computer science and intelligent systems expertise',
    BUT_DEGREE: 'Bachelor of Technology in Computer Science (BUT)',
    BUT_SCHOOL: 'Clermont Auvergne University',
    BUT_DESC: 'Specialization in Web Development',
    BAC_DEGREE: 'High School Diploma (Baccalauréat)',
    BAC_DESC_1: 'Graduated with honors (Mention Bien).',
    BAC_DESC_2: 'Introduction to programming through the NSI specialty'
  },
  SKILLS: {
    PAGE_TITLE: 'My Skills',
    FRONTEND_CATEGORY: 'Frontend Technologies',
    BACKEND_CATEGORY: 'Backend Technologies',
    TOOLS_CATEGORY: 'Tools & Methodologies',
    CERTIFICATIONS_CATEGORY: 'Certifications'
  },
  PROJECTS: {
    PAGE_TITLE: 'My Projects',
    FILTER_ALL: 'All',
    FILTER_WEB: 'Web',
    FILTER_MOBILE: 'Mobile',
    DEMO_BTN: 'Demo',
    CODE_BTN: 'Code',
    VIEW_DEMO: 'View Demo',
    VIEW_CODE: 'View Code',
    MODAL_DESCRIPTION: 'Description',
    MODAL_ABOUT: 'About the Project',
    MODAL_FEATURES: 'Features',
    MODAL_CHALLENGES: 'Challenges Overcome',
    MODAL_TECHNOLOGIES: 'Technologies Used',
    ITEMS: {
      TREK12: {
        TITLE: 'Trek-12',
        DESC: 'Digital adaptation of the Trek-12 board game.',
        DETAILED: 'Digital adaptation of the board game Trek-12, a dice and strategy game. This Windows desktop application allows solo play on your computer.',
        FEATURES: [
          'Solo game mode',
          'Immersive graphical interface',
          'Integrated tutorial to learn the rules',
          'Scoring system and leaderboard'
        ],
        CHALLENGES: 'Mastering XAML within a limited timeframe in a team of 3 developers.'
      },
      DEKAL_MOBILE: {
        TITLE: 'Dekal Mobile',
        DESC: 'Port of the board game Dekal for 1v1 mobile duels.',
        DETAILED: 'Mobile version of the Dekal game specially optimized for 1v1 duels. This native Android application lets you play Dekal anywhere, even offline.',
        FEATURES: [
          '1v1 mode against computer or another player',
          'Interface tailored for mobile screens',
          'Turn notifications during gameplay',
          'Detailed gameplay statistics'
        ],
        CHALLENGES: 'Adapting the gameplay experience for small screens while preserving all core mechanics required a complete UI overhaul.'
      },
      DEKAL: {
        TITLE: 'Dekal',
        DESC: 'Digital adaptation of the Dekal board game.',
        DETAILED: 'A comprehensive web project faithfully replicating the Dekal board game experience in a digital format. Players can create or join matches and play online against other users or AI.',
        FEATURES: [
          'Match creation and lobby management',
          'Interactive game board interface',
          'Player ranking and rating system',
          'Artificial intelligence for playing against the computer'
        ],
        CHALLENGES: 'The main challenge was accurately reproducing complex game mechanics while delivering an intuitive, responsive user interface.'
      },
      PULSE: {
        TITLE: 'Pulse',
        DESC: 'Concert management and discovery application.',
        DETAILED: 'Pulse is a web application currently in development to centralize concerts across France. The project aims to make finding live music events effortless by city, date, and musical genre.',
        FEATURES: [
          'Search concerts by city and date',
          'Filter by musical genres',
          'Discover upcoming concerts throughout France',
          'Progressive rollout of community features',
          'Artist live streams with real-time chat'
        ],
        CHALLENGES: 'The primary challenge is delivering a smooth user experience alongside live artist streaming capabilities.'
      }
    }
  },
  EXPERIENCE: {
    PAGE_TITLE: 'Professional Experience',
    ITEMS: {
      W3P_INTERN: {
        ROLE: 'Full Stack Developer Intern',
        PERIOD: 'Jul. 2024 - Aug. 2024',
        DESC: 'Onboarding and feature work on a web ERP for a large enterprise.',
        ACHIEVEMENTS: [
          'Getting started with the Angular framework',
          'Learning and applying TypeScript',
          'Comprehensive onboarding on the enterprise application'
        ]
      },
      W3P_DEV: {
        ROLE: 'Full Stack Developer',
        PERIOD: 'Sep. 2024 - Aug. 2026',
        DESC: 'Development and maintenance of a web ERP for a large enterprise.',
        ACHIEVEMENTS: [
          'Advanced mastery of the Angular framework',
          'Building new features and modules for the application',
          'Development and enhancement of the backend API powering the application',
          'Feature specifications, wireframing, and client presentations'
        ]
      },
      IEMN_DEV: {
        ROLE: 'Software Developer',
        PERIOD: 'Oct. 2026 - Present',
        DESC: 'Development and maintenance of scientific applications for researchers.',
        ACHIEVEMENTS: [
          'Learning and applying the Flask web framework',
          'Implementing new application features',
          'Developing and maintaining backend APIs ensuring system reliability',
          'Feature requirement analysis with scientific end-users'
        ]
      }
    }
  },
  CONTACT: {
    PAGE_TITLE: 'Contact Me',
    STAY_IN_TOUCH: "Let's Connect",
    SUBTITLE: 'Feel free to reach out to discuss a project or collaboration.',
    EMAIL_LABEL: 'Email',
    LOCATION_LABEL: 'Location',
    LOCATION_VALUE: 'Lille, France',
    SOCIAL_NETWORKS: 'My Social Networks',
    SEND_MESSAGE: 'Send Me a Message',
    FORM_NAME: 'Name',
    FORM_NAME_PLACEHOLDER: 'Your name',
    ERROR_NAME_REQUIRED: 'Name is required.',
    FORM_EMAIL: 'Email',
    FORM_EMAIL_PLACEHOLDER: 'Your email',
    ERROR_EMAIL_REQUIRED: 'Email is required.',
    ERROR_EMAIL_INVALID: 'Email address is invalid (e.g. name@domain.com).',
    FORM_SUBJECT: 'Subject',
    FORM_SUBJECT_PLACEHOLDER: 'Subject of your message',
    ERROR_SUBJECT_REQUIRED: 'Subject is required.',
    FORM_MESSAGE: 'Message',
    FORM_MESSAGE_PLACEHOLDER: 'Your message',
    ERROR_MESSAGE_REQUIRED: 'Message is required.',
    SUBMIT_BTN: 'Send',
    SUBMITTING_BTN: 'Sending...',
    SUCCESS_MSG: 'Message sent successfully!',
    DEFAULT_ERROR_MSG: 'An error occurred while sending your message. Please try again.'
  }
};
