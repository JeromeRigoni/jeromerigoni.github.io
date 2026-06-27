(function () {
  const translations = {
    fr: {
      "nav.projects": "// projets",
      "nav.stack": "// stack",
      "nav.about": "// parcours",
      "nav.contact": "// contact",
      "hero.tag": "// 00 — hello",
      "hero.tagline": 'Étudiant en informatique — spécialisation <span class="accent">IA & Data</span>.<br>En recherche d\'alternance.',
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
      "projects.p2.desc": "Drag & drop d'une image, prédiction temps réel via MobileNet pré-entraîné. 100% client-side, aucun serveur. Top-5 classes affichées avec score de confiance.",
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
      "journey.esgi.role": 'Bachelor Informatique — spécialisation IA & Data',
      "journey.esgi.place": "Paris · Promo 2027",
      "journey.esgi.desc": "Spécialisation orientée machine learning, data engineering et statistiques. Projets autour de l'IA appliquée.",
      "journey.coyali.role": "Développeur mobile — alternance",
      "journey.coyali.place": 'Flutter · iOS & Android',
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
"vc.cta.demo": "démo live →",
"vc.tag": "// démo — projet 02",
"vc.subtitle": "Classification d'images dans le navigateur · TensorFlow.js · MobileNet v2",
"vc.meta.stack": "Stack",
"vc.meta.where": "Où",
"vc.meta.model": "Modèle",
"vc.tldr.label": "TL;DR",
"vc.tldr.text": 'Tu glisses une image, MobileNet v2 (CNN pré-entraîné sur 1.4M d\'images ImageNet) tourne <strong>dans ton navigateur</strong> via WebGL, et te renvoie les 5 classes les plus probables avec leur score. Zéro upload, zéro serveur, zéro tracking.',
"vc.nav.demo": "// démo",
"vc.nav.how": "// comment",
"vc.nav.limits": "// limites",
"vc.demo.tag": "// 01 — démo",
"vc.demo.title": "Glisse une image",
"vc.demo.desc": "Photo, screenshot, illustration. Premier chargement plus lent (téléchargement du modèle), ensuite quasi-instantané.",
"vc.drop.main": "Glisse une image ici ou clique pour parcourir",
"vc.drop.hint": "PNG · JPG · WebP — analyse 100% locale",
"vc.status.idle": "[idle — en attente d'une image]",
"vc.reset": "[ analyser une autre image ]",
"vc.how.tag": "// 02 — comment ça marche",
"vc.how.title": "MobileNet v2, en 30 secondes",
"vc.how.p1": 'MobileNet est un CNN conçu par Google (2018) pour tourner efficacement sur mobile. Comparé à un VGG16 traditionnel (~138M paramètres), MobileNet v2 en a seulement <strong>~3.5M</strong>, grâce à des convolutions séparables en profondeur.',
"vc.how.pipe.title": "Pipeline d'inférence",
"vc.how.pipe.s1": "L'image est redimensionnée en 224×224",
"vc.how.pipe.s2": "Les pixels sont normalisés ([-1, 1])",
"vc.how.pipe.s3": "Forward pass dans le réseau (WebGL)",
"vc.how.pipe.s4": "Softmax → 1000 probabilités",
"vc.how.pipe.s5": "Top-5 sélectionné et affiché",
"vc.how.why.title": "Pourquoi côté client ?",
"vc.how.why.r1": '<strong>Privacy</strong> — aucune image n\'est uploadée',
"vc.how.why.r2": '<strong>Latence</strong> — pas de round-trip serveur',
"vc.how.why.r3": '<strong>Coût</strong> — 0€ d\'infra à provisionner',
"vc.how.why.r4": '<strong>Offline-ready</strong> — marche après le premier chargement',
"vc.lim.tag": "// 03 — limites",
"vc.lim.title": "Ce que ce modèle ne sait pas faire",
"vc.lim.l1": '<strong>Labels anglais uniquement</strong> — ImageNet n\'est pas localisé',
"vc.lim.l2": '<strong>1000 classes seulement</strong> — et certaines très spécifiques',
"vc.lim.l3": '<strong>Pas de détection multi-objet</strong> — répond « qu\'est-ce que c\'est ? », pas « où est quoi ? »',
"vc.lim.l4": '<strong>Souffre sur les images hors-distribution</strong> — sketches, captures d\'écran, memes',
"vc.lim.l5": '<strong>Premier chargement ~14 Mo</strong> — le modèle est mis en cache ensuite',
"vc.lim.next": 'Pour aller plus loin : fine-tuner sur un dataset custom (Teachable Machine, ou transfer learning manuel), ou passer à un modèle de détection type COCO-SSD pour identifier <em>plusieurs</em> objets dans une même image.',
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
      "hero.tagline": 'CS student — specialization in <span class="accent">AI & Data</span>.<br>Looking for an apprenticeship.',
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
      "projects.p2.desc": "Drag & drop an image, real-time prediction via pre-trained MobileNet. 100% client-side, no server. Top-5 classes shown with confidence score.",
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
      "journey.esgi.role": 'Bachelor in CS — <span class="accent">AI & Data</span> specialization',
      "journey.esgi.place": "Paris · Class of 2027",
      "journey.esgi.desc": "Specialization in machine learning, data engineering and statistics. Projects around applied AI.",
      "journey.coyali.role": "Mobile developer — apprenticeship",
      "journey.coyali.place": 'Flutter · iOS & Android',
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
"vc.cta.demo": "live demo →",
"vc.tag": "// demo — project 02",
"vc.subtitle": "In-browser image classification · TensorFlow.js · MobileNet v2",
"vc.meta.stack": "Stack",
"vc.meta.where": "Where",
"vc.meta.model": "Model",
"vc.tldr.label": "TL;DR",
"vc.tldr.text": 'Drop an image, MobileNet v2 (CNN pre-trained on 1.4M ImageNet images) runs <strong>inside your browser</strong> via WebGL, and returns the top-5 most likely classes with confidence scores. Zero upload, zero server, zero tracking.',
"vc.nav.demo": "// demo",
"vc.nav.how": "// how",
"vc.nav.limits": "// limits",
"vc.demo.tag": "// 01 — demo",
"vc.demo.title": "Drop an image",
"vc.demo.desc": "Photo, screenshot, illustration. First load is slower (downloading the model), then near-instant.",
"vc.drop.main": "Drop an image here or click to browse",
"vc.drop.hint": "PNG · JPG · WebP — 100% local processing",
"vc.status.idle": "[idle — waiting for an image]",
"vc.reset": "[ analyze another image ]",
"vc.how.tag": "// 02 — how it works",
"vc.how.title": "MobileNet v2, in 30 seconds",
"vc.how.p1": 'MobileNet is a CNN designed by Google (2018) for efficient mobile inference. Versus a traditional VGG16 (~138M params), MobileNet v2 only has <strong>~3.5M</strong>, thanks to depthwise separable convolutions.',
"vc.how.pipe.title": "Inference pipeline",
"vc.how.pipe.s1": "Image is resized to 224×224",
"vc.how.pipe.s2": "Pixels are normalized to [-1, 1]",
"vc.how.pipe.s3": "Forward pass through the network (WebGL)",
"vc.how.pipe.s4": "Softmax → 1000 probabilities",
"vc.how.pipe.s5": "Top-5 selected and displayed",
"vc.how.why.title": "Why client-side?",
"vc.how.why.r1": '<strong>Privacy</strong> — no image is ever uploaded',
"vc.how.why.r2": '<strong>Latency</strong> — no server round-trip',
"vc.how.why.r3": '<strong>Cost</strong> — €0 infra to provision',
"vc.how.why.r4": '<strong>Offline-ready</strong> — works after the first load',
"vc.lim.tag": "// 03 — limits",
"vc.lim.title": "What this model cannot do",
"vc.lim.l1": '<strong>English labels only</strong> — ImageNet is not localized',
"vc.lim.l2": '<strong>1000 classes only</strong> — some very specific',
"vc.lim.l3": '<strong>No multi-object detection</strong> — answers "what is it?", not "what is where?"',
"vc.lim.l4": '<strong>Struggles on out-of-distribution images</strong> — sketches, screenshots, memes',
"vc.lim.l5": '<strong>First load ~14 MB</strong> — the model is cached after that',
"vc.lim.next": 'Going further: fine-tune on a custom dataset (Teachable Machine, or manual transfer learning), or switch to a detection model like COCO-SSD to identify <em>multiple</em> objects in the same image.',
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