/* ==========================================================================
   CNG Company - main.js
   Navigation, multilingue (FR/EN), accordéon, carrousel, compteurs, form
   ========================================================================== */

"use strict";

/* ---------- Traductions FR / EN ---------- */
const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.project": "Projets",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Réserver",

    "hero.s1.title": "Technologies Innovantes pour la Construction <em>Moderne</em>",
    "hero.s1.text": "Nous utilisons des technologies de pointe — impression 3D, drones, BIM — pour livrer des constructions plus rapides, plus sûres et plus durables.",
    "hero.s2.title": "Bâtiment résidentiel de <em>haut standing</em>",
    "hero.s2.text": "Des villas et immeubles d'habitation pensés pour le confort, la sécurité et la durabilité, avec un suivi de chantier rigoureux.",
    "hero.s3.title": "Bâtiments commerciaux <em>et bureaux</em>",
    "hero.s3.text": "Des espaces de travail et de commerce modernes, conçus pour la performance, l'accessibilité et l'attractivité de votre activité.",
    "hero.s4.title": "Travaux publics <em>et infrastructures</em>",
    "hero.s4.text": "Routes, ouvrages d'art et aménagements urbains réalisés dans le respect des normes, pour des territoires mieux connectés.",
    "hero.s5.title": "Rénovation et <em>valorisation</em> de biens",
    "hero.s5.text": "Redonnez vie à vos espaces : rénovation, extension et réhabilitation avec des matériaux durables et un rendu impeccable.",
    "hero.rating": "4,9 / 5 · Recommandé par nos clients",
    "hero.cta1": "Contact rapide",
    "hero.cta2": "Appelez-nous",

    "stats.s1": "Projets réalisés",
    "stats.s2": "Membres de l'équipe",
    "stats.s3": "Avis clients",
    "stats.s4": "Prix gagnés",

    "services.title": "Des Services Taillés Sur Mesure",
    "services.s1.title": "Rénovation de bâtiment",
    "services.s1.desc": "Rénovation complète de bâtiments avec des matériaux modernes et durables.",
    "services.s2.title": "Finition intérieure",
    "services.s2.desc": "Finitions intérieures raffinées : cloisons, plafonds, revêtements.",
    "services.s3.title": "Solutions de toiture",
    "services.s3.desc": "Solutions de toiture étanches, isolées et esthétiques.",
    "services.s4.title": "Réparation de fondations",
    "services.s4.desc": "Réparation et renforcement de fondations pour la stabilité de vos ouvrages.",
    "services.learn": "En savoir plus",

    "about.title": "À propos de notre entreprise",
    "about.text": "Nous concevons et réalisons des ouvrages durables grâce à une équipe d'ingénieurs et de techniciens passionnés.",
    "about.cta": "En savoir plus",
    "about.m1.title": "Notre Mission",
    "about.m1.body": "Notre mission est de transformer vos idées en réalisations concrètes, en alliant innovation technologique, sécurité et respect des délais.",
    "about.m2.title": "Notre Vision",
    "about.m2.body": "Devenir la référence de la construction moderne, en plaçant la technologie et le développement durable au cœur de chaque chantier.",
    "about.m3.title": "Notre Histoire",
    "about.m3.body": "Depuis plus de 10 ans, CNG Company accumule une expertise solide et une réputation de fiabilité auprès de centaines de clients.",

    "quality.title": "Une Qualité Qui Parle d'Elle-Même",
    "quality.l1": "Excellence dans chaque détail",
    "quality.l2": "Expertise et expérience de confiance",
    "quality.l3": "Solutions innovantes pour chaque défi",
    "quality.l4": "Votre vision est notre priorité",
    "quality.cta": "En savoir plus",

    "project.title": "Projets de Construction en Vedette",
    "project.text": "Découvrez quelques-unes de nos réalisations les plus marquantes.",
    "project.cta": "Voir les projets",
    "project.location": "Lieu",
    "project.date": "Date",
    "project.scope": "Domaine",
    "project.see": "Voir le projet",
    "project.p1.title": "Résidences Harbor View",
    "project.p1.loc": "Bord de mer",
    "project.p1.date": "2025",
    "project.p1.scope": "Résidentiel",
    "project.p2.title": "Développement Sunset Ridge",
    "project.p2.loc": "Colline",
    "project.p2.date": "2024",
    "project.p2.scope": "Commercial",

    "testi.title": "Ce Que Disent Nos Clients",
    "testi.sub": "Ils nous font confiance et partagent leur expérience.",
    "testi.c1.name": "Alice Martin",
    "testi.c1.text": "Une équipe professionnelle et à l'écoute. Notre villa a été livrée à temps et avec une finition impeccable.",
    "testi.c2.name": "David Kane",
    "testi.c2.text": "CNG Company a su transformer notre espace commercial. Communication claire et outils innovants au rendez-vous.",
    "testi.c3.name": "Sophia Nguyen",
    "testi.c3.text": "Qualité exceptionnelle et respect du budget. Je recommande vivement pour tous vos projets de construction.",

    "blog.title": "Construire Mieux Ensemble",
    "blog.cta": "Voir le blog",
    "blog.a1.title": "L'impression 3D dans la construction",
    "blog.a2.title": "La révolution des drones sur chantier",
    "blog.a3.title": "Matériaux durables pour le futur",
    "blog.author.name": "Marc Dubois",
    "blog.author.role": "Auteur",

    "cta.title": "Créons Votre Espace Idéal",
    "cta.text": "Rejoignez notre newsletter pour des astuces de construction et nos offres exclusives.",
    "cta.btn": "S'abonner",

    "footer.desc": "Entreprise de construction et d'innovation technologique. Qualité, délais et professionnalisme.",
    "footer.nav": "Navigation",
    "footer.utility": "Pages utilitaires",
    "footer.contact": "Contact",
    "footer.u1": "Propriété",
    "footer.u2": "404 Non trouvée",
    "footer.terms": "Conditions d'utilisation",
    "footer.privacy": "Politique de confidentialité",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.project": "Project",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Book Now",

    "hero.s1.title": "Innovative Technologies for Modern <em>Construction</em>",
    "hero.s1.text": "We use cutting-edge technologies — 3D printing, drones, BIM — to deliver faster, safer and more sustainable constructions.",
    "hero.s2.title": "High-end <em>residential</em> building",
    "hero.s2.text": "Homes and residential buildings designed for comfort, safety and durability, with rigorous site supervision.",
    "hero.s3.title": "Commercial buildings <em>and offices</em>",
    "hero.s3.text": "Modern work and retail spaces, designed for performance, accessibility and the attractiveness of your activity.",
    "hero.s4.title": "Public works <em>and infrastructure</em>",
    "hero.s4.text": "Roads, structures and urban developments built to standard, for better connected territories.",
    "hero.s5.title": "Renovation and <em>property</em> enhancement",
    "hero.s5.text": "Give new life to your spaces: renovation, extension and rehabilitation with durable materials and an impeccable finish.",
    "hero.rating": "4.9 / 5 · Trusted by clients",
    "hero.cta1": "Quick Note",
    "hero.cta2": "Call us",

    "stats.s1": "Complete Projects",
    "stats.s2": "Team Members",
    "stats.s3": "Client Reviews",
    "stats.s4": "Winning Awards",

    "services.title": "Services Tailored to You",
    "services.s1.title": "Building Renovation",
    "services.s1.desc": "Complete building renovation with modern and durable materials.",
    "services.s2.title": "Interior Finishing",
    "services.s2.desc": "Refined interior finishing: partitions, ceilings, coatings.",
    "services.s3.title": "Roofing Solutions",
    "services.s3.desc": "Waterproof, insulated and aesthetic roofing solutions.",
    "services.s4.title": "Foundation Repair",
    "services.s4.desc": "Foundation repair and reinforcement for structure stability.",
    "services.learn": "Learn More",

    "about.title": "About Our Company",
    "about.text": "We design and build durable structures thanks to a passionate team of engineers and technicians.",
    "about.cta": "Learn More",
    "about.m1.title": "Our Mission",
    "about.m1.body": "Our mission is to turn your ideas into concrete achievements, combining innovation, safety and deadline respect.",
    "about.m2.title": "Our Vision",
    "about.m2.body": "Become the benchmark of modern construction, placing technology and sustainability at the heart of every site.",
    "about.m3.title": "Our History",
    "about.m3.body": "For over 10 years, CNG Company has built solid expertise and a reputation for reliability with hundreds of clients.",

    "quality.title": "Quality That Speaks for Itself",
    "quality.l1": "Excellence in Every Detail",
    "quality.l2": "Trusted Expertise & Experience",
    "quality.l3": "Innovative Solutions for Any Challenge",
    "quality.l4": "Your Vision Is Our Priority",
    "quality.cta": "Learn More",

    "project.title": "Featured Construction Projects",
    "project.text": "Discover some of our most remarkable achievements.",
    "project.cta": "Go Project Page",
    "project.location": "Location",
    "project.date": "Date",
    "project.scope": "Scope",
    "project.see": "See Project",
    "project.p1.title": "Harbor View Residences",
    "project.p1.loc": "Waterfront",
    "project.p1.date": "2025",
    "project.p1.scope": "Residential",
    "project.p2.title": "Sunset Ridge Development",
    "project.p2.loc": "Hillside",
    "project.p2.date": "2024",
    "project.p2.scope": "Commercial",

    "testi.title": "Why Say Our Customers",
    "testi.sub": "They trust us and share their experience.",
    "testi.c1.name": "Alice Martin",
    "testi.c1.text": "A professional and attentive team. Our villa was delivered on time with impeccable finishing.",
    "testi.c2.name": "David Kane",
    "testi.c2.text": "CNG Company transformed our commercial space. Clear communication and innovative tools throughout.",
    "testi.c3.name": "Sophia Nguyen",
    "testi.c3.text": "Exceptional quality and budget adherence. I highly recommend for all your construction projects.",

    "blog.title": "Building Better Together",
    "blog.cta": "Go Blog Page",
    "blog.a1.title": "3D printing in the construction industry",
    "blog.a2.title": "The drone revolution on construction sites",
    "blog.a3.title": "Sustainable materials for the future",
    "blog.author.name": "Marc Dubois",
    "blog.author.role": "Author",

    "cta.title": "Let's Create Your Ideal Space",
    "cta.text": "Join our newsletter for construction tips and exclusive offers.",
    "cta.btn": "Subscribe",

    "footer.desc": "Construction and technological innovation company. Quality, deadlines and professionalism.",
    "footer.nav": "Navigation",
    "footer.utility": "Utility Pages",
    "footer.contact": "Contact",
    "footer.u1": "Property",
    "footer.u2": "404 Not Found",
    "footer.terms": "Terms of services",
    "footer.privacy": "Privacy policy",
  },
};

/* ---------- Gestion de la langue ---------- */
let currentLang = localStorage.getItem("cng-lang") || "en";

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict && dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  document.getElementById("langLabel").textContent = lang === "en" ? "FR" : "EN";
  localStorage.setItem("cng-lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  applyLanguage(currentLang);
});

/* ---------- Navigation mobile ---------- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((a) => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Scroll-spy ---------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNav() {
  let current = "";
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 130;
    if (top >= offset) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

/* ---------- Compteurs animés ---------- */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  });
}

/* ---------- Carrousel Héro ---------- */
const heroTrack = document.getElementById("heroTrack");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroDots = document.getElementById("heroDots");

let currentSlide = 0;
let heroSlides = [];
let heroInterval = null;

function initHeroCarousel() {
  if (!heroTrack) return;
  heroSlides = Array.from(heroTrack.querySelectorAll(".hero-slide"));

  // Créer les points
  heroSlides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    dot.addEventListener("click", () => goToSlide(i));
    heroDots.appendChild(dot);
  });

  startAutoPlay();
}

function goToSlide(index) {
  const total = heroSlides.length;
  currentSlide = (index + total) % total;
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
  document.querySelectorAll(".hero-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
  resetAutoPlay();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoPlay() {
  heroInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(heroInterval);
  startAutoPlay();
}

if (heroNext) heroNext.addEventListener("click", nextSlide);
if (heroPrev) heroPrev.addEventListener("click", prevSlide);

/* ---------- Carrousel Services ---------- */
const track = document.getElementById("servicesTrack");
const prevBtn = document.getElementById("servicesPrev");
const nextBtn = document.getElementById("servicesNext");

function scrollServices(dir) {
  if (!track) return;
  const card = track.querySelector(".service-card");
  if (!card) return;
  const step = card.offsetWidth + 20;
  track.scrollBy({ left: dir * step, behavior: "smooth" });
}

if (nextBtn) nextBtn.addEventListener("click", () => scrollServices(1));
if (prevBtn) prevBtn.addEventListener("click", () => scrollServices(-1));

/* ---------- Accordion ---------- */
document.querySelectorAll(".acc-head").forEach((head) => {
  head.addEventListener("click", () => {
    const item = head.parentElement;
    const isOpen = item.classList.contains("open");
    const body = item.querySelector(".acc-body");

    // Ferme tous
    document.querySelectorAll(".acc-item").forEach((it) => {
      it.classList.remove("open");
      it.querySelector(".acc-body").style.maxHeight = null;
      it.querySelector(".acc-icon").textContent = "+";
      it.querySelector(".acc-head").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
      head.querySelector(".acc-icon").textContent = "−";
      head.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------- Reveal au scroll ---------- */
function handleReveal() {
  const targets = document.querySelectorAll(
    ".section-head, .service-card, .about-grid, .quality-grid, .project-block, .testi-card, .blog-card"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.06 + "s";
    observer.observe(el);
  });

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  const statsRow = document.querySelector(".stats-row");
  if (statsRow) statsObserver.observe(statsRow);
}

/* ---------- Formulaire d'abonnement ---------- */
const subForm = document.getElementById("subscribeForm");
if (subForm) {
  subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("subscribeEmail");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.value = "";
      email.setAttribute("placeholder", "Merci ! / Thank you!");
      setTimeout(() => {
        email.setAttribute("placeholder", currentLang === "en" ? "Enter your email" : "Entrez votre email");
      }, 3000);
    } else {
      email.classList.add("invalid");
      setTimeout(() => email.classList.remove("invalid"), 2000);
    }
  });
}

/* ---------- Année footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Init ---------- */
function init() {
  applyLanguage(currentLang);
  handleReveal();
  initHeroCarousel();
  window.addEventListener("scroll", () => {
    highlightNav();
  });
}

document.addEventListener("DOMContentLoaded", init);
