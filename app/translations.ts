export type Language = "es" | "en";

export const translations = {
  es: {
    // Profile
    brand: "SamuelSantamaria.dev",
    name: "Samuel Santamaria",
    title: "Full-Stack Developer • CS @ EAFIT",
    location: "Medellín, Colombia",
    email: "ssantamars@eafit.edu.co",

    // Navigation
    projects: "Proyectos",
    experience: "Experiencia",
    about: "Sobre mí",
    contact: "Contacto",
    letsTalk: "Hablemos",

    // Hero section
    heroTitle: "Diseño y construyo productos digitales",
    heroSubtitle:
      "centrados en la experiencia y el rendimiento.",
    heroDescription:
      "Full-stack dev enfocado en UI, performance y features reales. Django/Node, React/Next/Angular, SQL/MongoDB, Docker.",
    downloadCV: "Descargar CV",

    // Command palette
    commandPaletteTip: "Tip: Ctrl+K / Cmd+K",
    commandPaletteHint: "Navega rápido como VSCode ✨",

    // Sections
    projectsHeading: "Proyectos",
    projectsSubheading: "Selección corta para mostrar impacto y stack real.",
    experienceHeading: "Experiencia",
    experienceSubheading: "Roles y trabajos relevantes.",
    aboutHeading: "Sobre mí",
    aboutSubheading: "Educación, skills e intereses.",
    contactHeading: "Contacto",
    contactSubheading: "Conecta conmigo",

    // Experience section
    experienceCompany: "Empresa",
    experienceRole: "Rol",
    experiencePeriod: "Período",
    experienceLocation: "Ubicación",

    // Skills
    languages: "Lenguajes",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de Datos",
    tools: "Herramientas",
    spoken: "Idiomas",
    interests: "Intereses",

    // Education
    education: "Educación",
    gpa: "GPA",
    coursework: "Cursos Relevantes",
    studyAbroad: "Intercambio",

    // Leadership
    leadership: "Liderazgo",
    volunteer: "Voluntariado",

    // Command palette actions
    goProjects: "Proyectos",
    goProjectsSubtitle: "Sección de proyectos",
    goExp: "Experiencia",
    goExpSubtitle: "Trabajo y roles",
    goAbout: "Acerca de",
    goAboutSubtitle: "Educación, skills, liderazgo",
    goContact: "Contacto",
    goContactSubtitle: "Email y links",
    openResume: "Abrir CV (PDF)",
    openGithub: "Abrir GitHub",
    openLinkedin: "Abrir LinkedIn",
    openNexClass: "Abrir repo NexClass",
    sendEmail: "Enviar email",

    // Copy to clipboard
    copied: "Copiado!",
    copy: "Copiar",

    // Projects
    project1Title: "NexClass — Full-Stack Django Web App",
    project1Desc:
      "Plataforma educativa tipo marketplace: usuarios/roles, búsqueda, favoritos, mensajería, blog de profesores y sistema de reviews/ranking (arquitectura multi-app).",
    project1Impact1: "Arquitectura modular multi-app (users, search, favorites, reviews, teacher_blog)",
    project1Impact2: "Features: búsqueda + favoritos + mensajería interna + inscripciones",
    project1Impact3: "Sistema de reviews/ranking + extensible",

    project2Title: "Zoho CRM ↔ Siigo ERP Sync (Python + APIs)",
    project2Desc: "Integración y automatización: sincronización de datos clave y flujos de outreach basados en triggers.",
    project2Impact1: "1,500+ registros",
    project2Impact2: "5 procesos automatizados",
    project2Impact3: "Workflows de emails",

    project3Title: "Portfolio (Next.js) — UI Premium",
    project3Desc: "Este sitio: glass + neon, motion, componentes reutilizables, performance y SEO.",
    project3Impact1: "UI system",
    project3Impact2: "Motion",
    project3Impact3: "Rápido + SEO",

    // Experience bullets
    exp1Bullet1: "Implementé Zoho CRM para fortalecer gestión de clientes y control comercial.",
    exp1Bullet2: "Integré Zoho CRM con Siigo ERP usando Python + APIs para sincincronizar datos clave.",
    exp1Bullet3: "Migré y validé 1,500+ registros de clientes, mejorando visibilidad y calidad de datos.",
    exp1Bullet4: "Automaticé 5 procesos core, reduciendo tareas manuales y mejorando eficiencia.",
    exp1Bullet5: "Automaticé outreach con email workflows basados en triggers.",

    exp2Bullet1: "Capturo y valido tracking y play-by-play en vivo (basketball/football).",
    exp2Bullet2: "Verifico datos de jugadores/equipos para asegurar feeds y reportes confiables.",
    exp2Bullet3: "Monitoreo eventos end-to-end, detecto anomalías y escalo bajo presión.",
    exp2Bullet4: "Mantengo alta precisión y detalle en escenarios de tiempo real.",

    leadership1Bullet1:
      "Participé en jornadas de apoyo comunitario entregando alimentos y regalos a familias de bajos recursos.",
    leadership1Bullet2:
      "Coordiné rutas y logística con voluntarios para cubrir varios barrios de manera eficiente.",
    leadership1Bullet3:
      "Impulsé conciencia social mediante interacción directa con comunidades vulnerables.",
  },
  en: {
    // Profile
    brand: "SamuelSantamaria.dev",
    name: "Samuel Santamaria",
    title: "Full-Stack Developer • CS @ EAFIT",
    location: "Medellín, Colombia",
    email: "ssantamars@eafit.edu.co",

    // Navigation
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    letsTalk: "Let's Talk",

    // Hero section
    heroTitle: "I design and build digital products",
    heroSubtitle: "focused on experience and performance.",
    heroDescription:
      "Full-stack dev focused on UI, performance and real features. Django/Node, React/Next/Angular, SQL/MongoDB, Docker.",
    downloadCV: "Download CV",

    // Command palette
    commandPaletteTip: "Tip: Ctrl+K / Cmd+K",
    commandPaletteHint: "Navigate fast like VSCode ✨",

    // Sections
    projectsHeading: "Projects",
    projectsSubheading: "A short selection to showcase impact and real stack.",
    experienceHeading: "Experience",
    experienceSubheading: "Relevant roles and work.",
    aboutHeading: "About",
    aboutSubheading: "Education, skills and interests.",
    contactHeading: "Contact",
    contactSubheading: "Connect with me",

    // Experience section
    experienceCompany: "Company",
    experienceRole: "Role",
    experiencePeriod: "Period",
    experienceLocation: "Location",

    // Skills
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    tools: "Tools",
    spoken: "Spoken",
    interests: "Interests",

    // Education
    education: "Education",
    gpa: "GPA",
    coursework: "Relevant Coursework",
    studyAbroad: "Study Abroad",

    // Leadership
    leadership: "Leadership",
    volunteer: "Volunteer",

    // Command palette actions
    goProjects: "Projects",
    goProjectsSubtitle: "Projects section",
    goExp: "Experience",
    goExpSubtitle: "Work and roles",
    goAbout: "About",
    goAboutSubtitle: "Education, skills, leadership",
    goContact: "Contact",
    goContactSubtitle: "Email and links",
    openResume: "Open Resume (PDF)",
    openGithub: "Open GitHub",
    openLinkedin: "Open LinkedIn",
    openNexClass: "Open NexClass repo",
    sendEmail: "Send email",

    // Copy to clipboard
    copied: "Copied!",
    copy: "Copy",

    // Projects
    project1Title: "NexClass — Full-Stack Django Web App",
    project1Desc:
      "Educational marketplace platform: users/roles, search, favorites, messaging, teacher blog and reviews/ranking system (multi-app architecture).",
    project1Impact1: "Modular multi-app architecture (users, search, favorites, reviews, teacher_blog)",
    project1Impact2: "Features: search + favorites + internal messaging + enrollments",
    project1Impact3: "Reviews/ranking system + extensible",

    project2Title: "Zoho CRM ↔ Siigo ERP Sync (Python + APIs)",
    project2Desc: "Integration and automation: key data synchronization and outreach workflows based on triggers.",
    project2Impact1: "1,500+ records",
    project2Impact2: "5 automated processes",
    project2Impact3: "Email workflows",

    project3Title: "Portfolio (Next.js) — Premium UI",
    project3Desc: "This site: glass + neon, motion, reusable components, performance and SEO.",
    project3Impact1: "UI system",
    project3Impact2: "Motion",
    project3Impact3: "Fast + SEO",

    // Experience bullets
    exp1Bullet1: "Implemented Zoho CRM to strengthen customer management and commercial control.",
    exp1Bullet2: "Integrated Zoho CRM with Siigo ERP using Python + APIs to synchronize key data.",
    exp1Bullet3: "Migrated and validated 1,500+ customer records, improving visibility and data quality.",
    exp1Bullet4: "Automated 5 core processes, reducing manual tasks and improving efficiency.",
    exp1Bullet5: "Automated outreach with email workflows based on triggers.",

    exp2Bullet1: "Capture and validate live tracking and play-by-play (basketball/football).",
    exp2Bullet2: "Verify player/team data to ensure reliable feeds and reports.",
    exp2Bullet3: "Monitor end-to-end events, detect anomalies and escalate under pressure.",
    exp2Bullet4: "Maintain high accuracy and detail in real-time scenarios.",

    leadership1Bullet1:
      "Participated in community support initiatives delivering food and gifts to low-income families.",
    leadership1Bullet2:
      "Coordinated routes and logistics with volunteers to cover multiple neighborhoods efficiently.",
    leadership1Bullet3:
      "Promoted social awareness through direct interaction with vulnerable communities.",
  },
} as const;

export function t(lang: Language, key: keyof (typeof translations)["es"]): string {
  return translations[lang][key] || "";
}
