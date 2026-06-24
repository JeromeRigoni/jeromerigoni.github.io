(function () {
  const translations = {
    fr: {
      "nav.projects": "// projets",
      "nav.stack": "// stack",
      "nav.about": "// parcours",
      "nav.contact": "// contact",
      "hero.tag": "// 00 — hello",
      "hero.tagline": 'Étudiant en informatique — spécialisation <span class="accent">IA &amp; Data</span>.<br>En recherche d\'alternance.',
      "hero.status": "status: open to work",
      "projects.tag": "// 01 — projets",
      "projects.title": "Projets sélectionnés",
      "projects.desc": "Une sélection autour de l'IA, du machine learning et de l'apprentissage par renforcement.",
      "projects.status.done": "terminé",
      "projects.status.wip": "en cours",
      "projects.snake.subtitle": "Apprentissage par renforcement / Q-Learning",
      "projects.snake.desc": "Agent autonome qui apprend à jouer à Snake via Q-Learning. Encoding d'état à 11 features, stratégie epsilon-greedy, decay progressif d'exploration.",
      "projects.p2.title": "Vision Classifier",
      "projects.p2.subtitle": "Classification d'images dans le navigateur",
      "projects.p2.desc": "Drag &amp; drop d'une image, prédiction temps réel via MobileNet pré-entraîné. 100% client-side, aucun serveur. Top-5 classes affichées avec score de confiance.",
      "projects.p3.title": "Markov Mimic",
      "projects.p3.subtitle": "Chatbot style-mimic / chaînes de Markov",
      "projects.p3.desc": "Tu colles un texte (un livre, des paroles, tes tweets), le bot apprend le style et génère des phrases dans le même ton. Modèle n-gram avec température réglable.",
      "projects.cta.study": "étude de cas →",
      "projects.cta.code": "code →",
      "projects.cta.soon": "bientôt",
      "stack.tag": "// 02 — stack",
      "stack.title": "Stack technique",
      "stack.desc": "Outils et technos avec lesquels je travaille, organisés par domaine.",
      "stack.cat.langages": "Langages",
      "stack.cat.frontend": "Front-end",
      "stack.cat.backend": "Back-end & API",
      "stack.cat.devops": "DevOps & Virtu",
      "stack.cat.networks": "Réseaux",
      "stack.cat.tools": "Outils",
      "journey.tag": "// 03 — parcours",
      "journey.title": "Parcours",
      "journey.desc": "Formations, stage et alternance.",
      "journey.type.formation": "formation",
      "journey.type.alternance": "alternance",
      "journey.type.stage": "stage",
      "journey.esgi.year": "2024 — en cours",
      "journey.esgi.role": 'Bachelor Informatique — spécialisation IA &amp; Data',
      "journey.esgi.place": "Paris · Promo 2027",
      "journey.esgi.desc": "Spécialisation orientée machine learning, data engineering et statistiques. Projets autour de l'IA appliquée.",
      "journey.coyali.role": "Développeur mobile — alternance",
      "journey.coyali.place": 'Flutter · iOS &amp; Android',
      "journey.coyali.desc": "Coder une application qui permet aux personnes âgées de simplifier<br>la navigation sur leurs téléphones et de savoir utiliser internet.",
      "journey.etna.role": "Bac+2 Informatique",
      "journey.etna.place": "Paris",
      "journey.etna.desc": "Formation par projet : dev web, mobile, base de données, architecture logicielle. Pédagogie learning-by-doing.",
      "journey.ifp.role": "Stage électricien — 8 mois",
      "journey.ifp.place": "Rueil-Malmaison",
      "journey.ifp.desc": "Maintenance et installation électrique sur un centre de recherche. Lecture de schémas, raccordements, tests et mise en sécurité.",
      "journey.lycee.role": "Bac Pro MELEC",
      "journey.lycee.place": "Rueil-Malmaison",
      "journey.lycee.desc": "Bac Pro Métiers de l'Électricité et de ses Environnements Connectés. Bases solides en logique électrique et systèmes embarqués.",
      "journey.cta.cv": "Télécharger le CV complet",
      "contact.tag": "// 04 — contact",
"contact.copy.idle": "[clic pour copier]",
"contact.copy.done": "[copié ✓]",
"contact.cta.cv": "Télécharger le CV",
"contact.aria.copy.email": "Copier l'email",
"contact.aria.copy.phone": "Copier le numéro",
"a11y.skip": "Aller au contenu principal",
      "aria.home": "Accueil",
      "aria.lang": "Changer de langue",
      "aria.nav": "Navigation principale",
      "meta.description": "Portfolio de Jérôme Rigoni — étudiant en informatique, spécialisation IA & Data. En recherche d'alternance."
    },
    en: {
      "nav.projects": "// projects",
      "nav.stack": "// stack",
      "nav.about": "// path",
      "nav.contact": "// contact",
      "hero.tag": "// 00 — hello",
      "hero.tagline": 'CS student — specialization in <span class="accent">AI &amp; Data</span>.<br>Looking for an apprenticeship.',
      "hero.status": "status: open to work",
      "projects.tag": "// 01 — projects",
      "projects.title": "Selected projects",
      "projects.desc": "A selection around AI, machine learning, and reinforcement learning.",
      "projects.status.done": "shipped",
      "projects.status.wip": "in progress",
      "projects.snake.subtitle": "Reinforcement learning / Q-Learning",
      "projects.snake.desc": "Autonomous agent that learns to play Snake via Q-Learning. 11-feature state encoding, epsilon-greedy strategy, progressive exploration decay.",
      "projects.p2.title": "Vision Classifier",
      "projects.p2.subtitle": "In-browser image classification",
      "projects.p2.desc": "Drag &amp; drop an image, real-time prediction via pre-trained MobileNet. 100% client-side, no server. Top-5 classes shown with confidence score.",
      "projects.p3.title": "Markov Mimic",
      "projects.p3.subtitle": "Style-mimic chatbot / Markov chains",
      "projects.p3.desc": "Paste a text (a book, lyrics, your tweets), the bot learns the style and generates sentences in the same tone. n-gram model with adjustable temperature.",
      "projects.cta.study": "case study →",
      "projects.cta.code": "code →",
      "projects.cta.soon": "soon",
      "stack.tag": "// 02 — stack",
      "stack.title": "Tech stack",
      "stack.desc": "Tools and tech I work with, organized by domain.",
      "stack.cat.langages": "Languages",
      "stack.cat.frontend": "Front-end",
      "stack.cat.backend": "Back-end & API",
      "stack.cat.devops": "DevOps & Virt",
      "stack.cat.networks": "Networks",
      "stack.cat.tools": "Tools",
      "journey.tag": "// 03 — path",
      "journey.title": "Path",
      "journey.desc": "Education, internship and apprenticeship.",
      "journey.type.formation": "education",
      "journey.type.alternance": "apprenticeship",
      "journey.type.stage": "internship",
      "journey.esgi.year": "2024 — ongoing",
      "journey.esgi.role": 'Bachelor in CS — <span class="accent">AI &amp; Data</span> specialization',
      "journey.esgi.place": "Paris · Class of 2027",
      "journey.esgi.desc": "Specialization in machine learning, data engineering and statistics. Projects around applied AI.",
      "journey.coyali.role": "Mobile developer — apprenticeship",
      "journey.coyali.place": 'Flutter · iOS &amp; Android',
      "journey.coyali.desc": "Coding an app that helps elderly people simplify<br>navigation on their phones and learn to use the internet.",
      "journey.etna.role": "2-year CS degree",
      "journey.etna.place": "Paris",
      "journey.etna.desc": "Project-based program: web, mobile, databases, software architecture. Learning-by-doing pedagogy.",
      "journey.ifp.role": "Electrician internship — 8 months",
      "journey.ifp.place": "Rueil-Malmaison",
      "journey.ifp.desc": "Electrical maintenance and installation on a research site. Schematics reading, wiring, testing and safety lockout.",
      "journey.lycee.role": "Vocational electrical degree (Bac Pro MELEC)",
      "journey.lycee.place": "Rueil-Malmaison",
      "journey.lycee.desc": "Vocational diploma in electrical engineering and connected environments. Solid foundations in electrical logic and embedded systems.",
      "journey.cta.cv": "Download full CV",
      "contact.tag": "// 04 — contact",
"contact.copy.idle": "[click to copy]",
"contact.copy.done": "[copied ✓]",
"contact.cta.cv": "Download CV",
"contact.aria.copy.email": "Copy email",
"contact.aria.copy.phone": "Copy phone number",
"a11y.skip": "Skip to main content",
      "aria.home": "Home",
      "aria.lang": "Switch language",
      "aria.nav": "Main navigation",
      "meta.description": "Portfolio of Jérôme Rigoni — computer science student, specialization in AI & Data. Looking for an apprenticeship."
    }
  };

  const STORAGE_KEY = "portfolio-lang";

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
    const browser = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return browser === "fr" ? "fr" : "en";
  }

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
        if (el.hasAttribute("data-text")) el.setAttribute("data-text", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.dataset.i18nAriaLabel;
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.description"]) {
      metaDesc.setAttribute("content", dict["meta.description"]);
    }

    document.documentElement.lang = lang;

    const active = document.querySelector(".lang-active");
    const inactive = document.querySelector(".lang-inactive");
    if (active && inactive) {
      active.textContent = lang.toUpperCase();
      inactive.textContent = lang === "fr" ? "EN" : "FR";
    }

    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function init() {
    const lang = getInitialLang();
    applyLang(lang);

    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = localStorage.getItem(STORAGE_KEY) || "fr";
        applyLang(current === "fr" ? "en" : "fr");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();