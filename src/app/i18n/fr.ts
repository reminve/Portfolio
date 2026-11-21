import { TranslationSchema } from './translations.type';

export const fr: TranslationSchema = {
  COMMON: {
    PORTFOLIO_TITLE: 'Mon Portfolio',
    LANGUAGE_SELECTOR: 'Changer de langue',
    LANG_FR: 'Français',
    LANG_EN: 'English',
    CLOSE: 'Fermer',
    FOOTER_COPYRIGHT: 'Neveu Rémi',
    EXTERNAL_LINK: 'Lien externe'
  },
  NAV: {
    TOGGLE_MENU: 'Ouvrir le menu',
    HOME: 'Accueil',
    ABOUT: 'À propos',
    SKILLS: 'Compétences',
    PROJECTS: 'Projets',
    EXPERIENCE: 'Expériences',
    CONTACT: 'Contact'
  },
  THEME: {
    SELECTOR_LABEL: 'Sélecteur de thème',
    SETTINGS_LABEL: 'Paramètres du thème',
    DISPLAY_MODE: "Mode d'affichage",
    AUTO_MODE: 'Auto',
    AUTO_TOOLTIP: 'Suivre les préférences système',
    LIGHT_TOOLTIP: 'Mode clair',
    DARK_TOOLTIP: 'Mode sombre',
    ACCENT_COLOR: "Couleur d'accent"
  },
  HOME: {
    GREETING: 'Bonjour, je suis',
    NAME: 'Rémi Neveu',
    ROLE: 'Développeur Web Full Stack',
    TAGLINE: 'Je développe des solutions web pour les entreprises',
    CTA_PROJECTS: 'Voir mes projets',
    CTA_CONTACT: 'Me contacter',
    CTA_CV: 'Télécharger mon CV',
    KEY_SKILLS_TITLE: 'Mes compétences clés',
    FRONTEND_TITLE: 'Développement Frontend',
    BACKEND_TITLE: 'Développement Backend',
    DATABASE_TITLE: 'Bases de données',
    RECENT_PROJECTS_TITLE: 'Projets récents',
    LEARN_MORE: 'En savoir plus',
    PROJECT_PULSE_DESC: 'Application de gestion de concerts.',
    PROJECT_DEKAL_DESC: 'Portage du jeu de société Dekal.',
    PROJECT_DEKAL_MOBILE_DESC: 'Portage du jeu de société Dekal pour faire des 1vs1 sur mobile.'
  },
  ABOUT: {
    PAGE_TITLE: 'À propos de moi',
    INTRO_1: "Bonjour, je suis <strong>Rémi Neveu</strong>, un développeur passionné par la création d'applications web modernes et performantes.",
    INTRO_2: "Je suis spécialisé dans le développement full stack avec une appétence particulière pour les technologies Javascript et Typescript. Ma passion pour l'apprentissage continu m'incite à toujours rester à jour avec les dernières technologies, frameworks et bonnes pratiques.",
    BACKGROUND_TITLE: 'Parcours',
    BACKGROUND_P: "J'ai commencé à m'intéresser à l'informatique après avoir commencé la spécialité NSI au lycée. Depuis, j'ai travaillé sur divers projets allant des applications web d'entreprise aux applications mobiles, en passant par des jeux.",
    PROFESSIONAL_TITLE: 'Professionnel',
    PROFESSIONAL_P: "J'ai eu l'opportunité de travailler en tant que développeur full stack chez W3Plus, où j'ai pu m'exercer sur un ERP web pour une grande entreprise. Cela m'a permis d'apprendre Angular, de créer de nouvelles fonctionnalités pour l'application, mais également d'apprendre le travail en équipe. En effet, j'ai travaillé en méthode agile et ainsi effectué des sprints de 2 semaines, des réunions et des daily meetings. De plus, j'ai eu l'occasion de voir plusieurs facettes du développement. Ainsi, j'ai pu faire des analyses de fonctionnalités, du développement ou encore la définition de tâches et de PBI.",
    BEYOND_TITLE: 'En dehors du code',
    BEYOND_P1: "Dans ma vie courante, j'aime particulièrement la musique, étant donné que j'en pratique depuis que je suis petit. En effet, je joue de la trompette et j'en ai fait au conservatoire pendant 12 ans, ainsi que 4 ans de clarinette. De plus, j'ai fait partie de plusieurs groupes et orchestres pendant de nombreuses années.",
    BEYOND_P2: "Également, j'ai effectué un mandat d'une année en tant que responsable partenariat pour le bureau des étudiants de ma formation, ce qui me permet d'améliorer mon contact social et d'organiser des sorties.",
    ORCHESTRA_ALT: 'Mon orchestre',
    EDUCATION_TITLE: 'Formation',
    MASTER_DEGREE: 'Master Informatique Appliquée et Systèmes Intelligents',
    MASTER_SCHOOL: 'École du Numérique - Faculté de Gestion, Économie & Sciences',
    MASTER_DESC: 'Approfondissement de mes connaissances en informatique',
    BUT_DEGREE: 'BUT Informatique',
    BUT_SCHOOL: 'Université Clermont Auvergne',
    BUT_DESC: 'Spécialisation en Développement Web',
    BAC_DEGREE: 'Baccalauréat',
    BAC_DESC_1: 'Obtenue avec la mention Bien.',
    BAC_DESC_2: 'Introduction à la programmation grâce à la spécialité NSI'
  },
  SKILLS: {
    PAGE_TITLE: 'Mes compétences',
    FRONTEND_CATEGORY: 'Technologies Frontend',
    BACKEND_CATEGORY: 'Technologies Backend',
    TOOLS_CATEGORY: 'Outils et méthodes',
    CERTIFICATIONS_CATEGORY: 'Certifications'
  },
  PROJECTS: {
    PAGE_TITLE: 'Mes projets',
    FILTER_ALL: 'Tous',
    FILTER_WEB: 'Web',
    FILTER_MOBILE: 'Mobile',
    DEMO_BTN: 'Démo',
    CODE_BTN: 'Code',
    VIEW_DEMO: 'Voir la démo',
    VIEW_CODE: 'Voir le code',
    MODAL_DESCRIPTION: 'Description',
    MODAL_ABOUT: 'À propos du projet',
    MODAL_FEATURES: 'Fonctionnalités',
    MODAL_CHALLENGES: 'Défis relevés',
    MODAL_TECHNOLOGIES: 'Technologies utilisées',
    ITEMS: {
      TREK12: {
        TITLE: 'Trek-12',
        DESC: 'Portage du jeu de société Trek-12.',
        DETAILED: 'Adaptation numérique du jeu de société Trek-12, un jeu de dés et de stratégie. Cette application Windows permet de jouer seul sur votre ordinateur.',
        FEATURES: [
          'Mode solo',
          'Interface graphique immersive',
          'Tutoriel intégré pour apprendre les règles',
          'Système de scores et de leaderboard'
        ],
        CHALLENGES: 'Prendre en main le XAML en un temps limité dans une équipe de 3 personnes.'
      },
      DEKAL_MOBILE: {
        TITLE: 'Dekal Mobile',
        DESC: 'Portage du jeu de société Dekal pour faire des 1vs1 sur mobile.',
        DETAILED: "Version mobile du jeu Dekal spécialement optimisée pour les duels 1 contre 1. Cette application native Android permet de jouer au Dekal n'importe où, même hors ligne.",
        FEATURES: [
          "Mode 1vs1 contre l'ordinateur ou un autre joueur",
          'Interface adaptée aux écrans mobiles',
          'Notifications pour les tours de jeu',
          'Statistiques de jeu détaillées'
        ],
        CHALLENGES: "Adapter l'expérience de jeu pour les petits écrans tout en conservant toutes les fonctionnalités essentielles a nécessité une refonte complète de l'interface utilisateur."
      },
      DEKAL: {
        TITLE: 'Dekal',
        DESC: 'Portage du jeu de société Dekal.',
        DETAILED: "Un projet web complet qui reproduit fidèlement l'expérience du jeu de société Dekal dans un format numérique. Les joueurs peuvent rejoindre des parties et jouer en ligne contre d'autres utilisateurs ou des IAs.",
        FEATURES: [
          'Création et gestion de parties',
          'Interface de jeu interactive',
          'Système de classement des joueurs',
          "Intelligence artificielle pour jouer contre l'ordinateur"
        ],
        CHALLENGES: "La principale difficulté était de reproduire les mécaniques complexes du jeu tout en offrant une interface utilisateur intuitive et réactive."
      },
      PULSE: {
        TITLE: 'Pulse',
        DESC: 'Application de gestion de concerts.',
        DETAILED: "Pulse est une application web en cours de développement pour centraliser les concerts en France. Le projet vise à faciliter la recherche d'évènements musicaux par ville, date et style musical.",
        FEATURES: [
          'Recherche de concerts par ville et date',
          'Filtrage par genres musicaux',
          'Exploration des concerts à venir en France',
          'Ajout progressif de fonctionnalités communautaires',
          "Live d'artistes avec chat en direct"
        ],
        CHALLENGES: "Le principal enjeu est d'apporter une expérience utilisateur fluide avec une gestion de live d'artistes."
      }
    }
  },
  EXPERIENCE: {
    PAGE_TITLE: 'Expérience Professionnelle',
    ITEMS: {
      W3P_INTERN: {
        ROLE: 'Stagiaire en développement Full Stack',
        PERIOD: 'Jui. 2024 - Aou. 2024',
        DESC: "Prise en main d'un ERP web pour une grande entreprise.",
        ACHIEVEMENTS: [
          'Prise en main du framework Angular',
          'Prise en main du langage Typescript',
          "Prise en main de l'application"
        ]
      },
      W3P_DEV: {
        ROLE: 'Développeur Full Stack',
        PERIOD: 'Sept. 2024 - Aou. 2026',
        DESC: "Développement et maintenance d'un ERP web pour une grande entreprise.",
        ACHIEVEMENTS: [
          'Apprentissage du framework de programmation Angular',
          "Création de nouvelles fonctionnalités pour l'application",
          "Prise en main et développement de l'API permettant le bon fonctionnement de l'application",
          'Analyse de fonctionnalités, maquettage et présentations clients'
        ]
      },
      IEMN_DEV: {
        ROLE: 'Développeur',
        PERIOD: 'Oct. 2026 - Présent',
        DESC: "Développement et maintenance d'applications pour des chercheurs.",
        ACHIEVEMENTS: [
          'Apprentissage du framework de programmation Flask',
          'Création de nouvelles fonctionnalités',
          "Prise en main et développement de l'API permettant le bon fonctionnement de l'application",
          'Analyse de fonctionnalités avec des clients finaux'
        ]
      }
    }
  },
  CONTACT: {
    PAGE_TITLE: 'Me contacter',
    STAY_IN_TOUCH: 'Restons en contact',
    SUBTITLE: "N'hésitez pas à me contacter pour discuter d'un projet ou d'une collaboration.",
    EMAIL_LABEL: 'Email',
    LOCATION_LABEL: 'Localisation',
    LOCATION_VALUE: 'Lille, France',
    SOCIAL_NETWORKS: 'Mes réseaux sociaux',
    SEND_MESSAGE: 'Envoyez-moi un message',
    FORM_NAME: 'Nom',
    FORM_NAME_PLACEHOLDER: 'Votre nom',
    ERROR_NAME_REQUIRED: 'Le nom est requis.',
    FORM_EMAIL: 'Email',
    FORM_EMAIL_PLACEHOLDER: 'Votre email',
    ERROR_EMAIL_REQUIRED: "L'email est requis.",
    ERROR_EMAIL_INVALID: "L'adresse email n'est pas valide (ex: nom@domaine.com).",
    FORM_SUBJECT: 'Sujet',
    FORM_SUBJECT_PLACEHOLDER: 'Sujet de votre message',
    ERROR_SUBJECT_REQUIRED: 'Le sujet est requis.',
    FORM_MESSAGE: 'Message',
    FORM_MESSAGE_PLACEHOLDER: 'Votre message',
    ERROR_MESSAGE_REQUIRED: 'Le message est requis.',
    SUBMIT_BTN: 'Envoyer',
    SUBMITTING_BTN: 'Envoi en cours...',
    SUCCESS_MSG: 'Message envoyé avec succès !',
    DEFAULT_ERROR_MSG: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
  }
};
