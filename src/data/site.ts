// Données centrales du site : profil, chiffres clés, parcours, compétences.
// Les modifier ici met à jour toutes les pages.

export const site = {
  name: "Théo Grosjean",
  url: "https://theogrsjn.fr",
  title: "Théo Grosjean · Étudiant ingénieur en systèmes embarqués",
  description:
    "Portfolio de Théo Grosjean, étudiant ingénieur en systèmes embarqués à l'ECE Paris : électronique, code embarqué, applications web et infrastructure auto-hébergée.",
  email: "contact@theogrsjn.fr",
  linkedin: "https://www.linkedin.com/in/theogrsjn/",
  cv: "/cv/TheoGROSJEAN_CV.pdf",
  location: "Paris et périphérie",
  availability: {
    short: "Stage dès avril 2027",
    title: "Disponible en stage",
    detail: "4 à 5 mois · début entre le 19 avril et le 17 mai 2027 · Paris et périphérie",
    sectors: "Défense, aéronautique, spatial, robotique, objets connectés ou télécoms.",
  },
};

export const nav = [
  { href: "/projets/", label: "Projets" },
  { href: "/parcours/", label: "Parcours" },
  { href: "/homelab/", label: "Homelab" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/contact/", label: "Contact" },
];

export const stats = [
  { value: "6", sup: "e", label: "mondial au Hydrogen Grand Prix 2026" },
  { value: "800+", label: "utilisateurs inscrits sur CoreXtension" },
];

export type Entry = {
  period: string;
  title: string;
  org: string;
  place?: string;
  points: string[];
};

export const experience: Entry[] = [
  {
    period: "Mars 2026 → aujourd'hui",
    title: "Co-fondateur et responsable mécanique / CAO",
    org: "H2 Racing ECE Paris",
    place: "Paris",
    points: [
      "Véhicule à l'échelle 1/10 sur pile à combustible hydrogène pour la finale mondiale du Hydrogen Grand Prix 2026 (Suisse) : 6e place mondiale, 520 tours en 4 h d'endurance.",
      "Conception CAO, prototypage rapide et intégration du véhicule.",
      "Coordination technique de l'équipe, recherche de sponsors et de partenariats.",
    ],
  },
  {
    period: "Sept. 2025 → aujourd'hui",
    title: "Fondateur",
    org: "CoreXtension",
    points: [
      "Éditeur de 4 logiciels (NoteXtension, LaTeXtension, WeSignXtension, PlayXtension) réunis par un compte unique : 800+ utilisateurs inscrits, 50+ actifs par jour.",
      "Développement complet : back-end, front-end et extensions navigateur (Chrome, Firefox, Edge).",
      "Service d'identité maison (OAuth2 / OpenID Connect), déploiement conteneurisé et auto-hébergé, conformité RGPD, SEO.",
    ],
  },
  {
    period: "Janv. 2026 → fév. 2026",
    title: "Stagiaire annotation d'images",
    org: "Thales",
    place: "Élancourt",
    points: [
      "Service de Traitement d'Images, département Techniques Optroniques.",
      "Annotation et classification d'images aériennes du pod TALIOS pour l'entraînement d'algorithmes d'IA.",
      "Relecture et validation des annotations de l'équipe, vérification et correction d'une base de données d'images.",
    ],
  },
  {
    period: "Sept. 2024 → aujourd'hui",
    title: "Ambassadeur FabLab",
    org: "ECE Paris",
    place: "Paris",
    points: [
      "Équipe d'une dizaine d'étudiants qui gère le FabLab de l'école.",
      "Formations hebdomadaires entre étudiants : impression 3D (FDM/SLA), découpe laser CO2 Trotec, fabrication de PCB.",
      "Permanences et accueil lors des journées portes ouvertes.",
    ],
  },
  {
    period: "Sept. 2024 → sept. 2026",
    title: "Assistant de TP",
    org: "ECE Paris",
    place: "Paris",
    points: [
      "Assistance aux enseignants pendant les travaux pratiques des étudiants d'ING1 et ING2 : réponses aux questions techniques, aide à la prise en main des outils et des sujets.",
    ],
  },
  {
    period: "Janv. 2025 → fév. 2025",
    title: "Stagiaire DevOps HPC",
    org: "Institut Pasteur",
    place: "Paris",
    points: [
      "Stage dans une équipe d'infrastructure de calcul haute performance.",
      "Déploiement de Posit Workbench (ex-RStudio) sur serveur Linux RHEL 8, configuration automatisée avec des playbooks Ansible.",
      "Intégration avec VMware et le stockage réseau NFS.",
    ],
  },
  {
    period: "Avr. 2023 → mars 2025",
    title: "Services à la demande (freelance)",
    org: "Yoojo",
    place: "Paris et périphérie",
    points: [
      "Bricolage, jardinage, montage de meubles et cours particuliers de mathématiques (collège) pour plus de 30 clients.",
    ],
  },
];

export const education: Entry[] = [
  {
    period: "Sept. 2023 → juin 2028",
    title: "Diplôme d'ingénieur (CTI), majeure systèmes embarqués",
    org: "ECE Paris",
    place: "Paris",
    points: [
      "2 ans de classe préparatoire intégrée puis 3 ans de spécialisation. Actuellement en ING4 SE (M1).",
      "Projets : rover ECEPILOT, Fruit Ninja sur FPGA, robot DrawBot PID, clone LinkedIn, simulation de réseaux trophiques, jeu ECECooked, mini-console ATTiny.",
    ],
  },
  {
    period: "Sept. 2025 → déc. 2025",
    title: "Échange universitaire, GPA 3.63",
    org: "Hanyang University",
    place: "Ansan, Corée du Sud",
    points: [
      "Machine learning, vision par ordinateur, programmation système (Linux, C, C++), gestion de projet.",
    ],
  },
];

export const skills = [
  { group: "Électronique & fabrication", items: ["KiCad", "Routage PCB/PCBA", "OnShape", "SolidWorks", "Bambu Studio", "Cura", "Découpe laser Trotec"] },
  { group: "Systèmes embarqués", items: ["C/C++", "ESP32", "ATmega328P", "ATTiny", "Raspberry Pi", "FPGA (VHDL, Quartus)"] },
  { group: "Programmation & web", items: ["Python", "JavaScript", "Node.js", "React", "PHP", "SQL", "HTML/CSS"] },
  { group: "Systèmes & infra", items: ["Linux (RHEL, Ubuntu)", "Docker", "Proxmox", "Ansible", "VMware", "Cloudflare", "Tailscale", "WireGuard", "Grafana"] },
  { group: "Bases de données", items: ["PostgreSQL", "MySQL"] },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2 · TOEIC 855, IELTS 6.0" },
];
