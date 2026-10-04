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
  { value: "600+", label: "étudiants inscrits sur CoreXtension" },
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
    title: "Co-fondateur et responsable mécanique CAO",
    org: "ECE Paris H2 Racing",
    place: "Paris",
    points: [
      "Prototype à pile à combustible hydrogène pour la finale mondiale du Hydrogen Grand Prix 2026 (Suisse).",
      "6e place mondiale, 520 tours en 4 h d'endurance, 1,5 mois de la conception à la mise au point.",
    ],
  },
  {
    period: "Janv. 2026 → fév. 2026",
    title: "Stagiaire annotation d'images",
    org: "Thales",
    place: "Élancourt",
    points: [
      "Annotation et classification d'images aériennes du pod TALIOS pour l'entraînement d'algorithmes d'IA.",
    ],
  },
  {
    period: "Janv. 2025 → fév. 2025",
    title: "Stagiaire DevOps HPC",
    org: "Institut Pasteur",
    place: "Paris",
    points: [
      "Déploiement d'un environnement Posit Workbench sur serveur Linux (RHEL 8) en infrastructure HPC, avec Ansible et gestion de configuration.",
    ],
  },
  {
    period: "Sept. 2024 → aujourd'hui",
    title: "Ambassadeur FabLab et assistant de TP",
    org: "ECE Paris",
    place: "Paris",
    points: [
      "Formations entre pairs : impression FDM/SLA, découpe laser CO2, fabrication de PCB sur DCT Hybrido.",
      "Coordination des événements avec 6 ambassadeurs.",
      "Assistance aux professeurs et étudiants ING1/ING2 pendant les travaux pratiques.",
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
      "Projets : site full-stack (JavaScript, PHP), FPGA (Intel Quartus), console ATTiny, reconnaissance vocale (PyTorch).",
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
  { group: "Programmation", items: ["C", "Python", "JavaScript", "PHP", "HTML/CSS"] },
  { group: "Systèmes & infra", items: ["Linux (RHEL, Ubuntu)", "Docker", "Proxmox", "Ansible", "Cloudflare", "Ubiquiti", "Grafana"] },
  { group: "Bases de données", items: ["PostgreSQL", "MySQL"] },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2 · TOEIC 855, IELTS 6.0" },
];

export const schoolProjects = [
  { title: "Interface utilisateur tangible", context: "FabLab ECE", desc: "Surface de formes actionnées inspirée du projet inFORM du MIT." },
  { title: "Console de jeu ATTiny", context: "ECE Paris", desc: "Console portable sur microcontrôleur ATTiny." },
  { title: "Reconnaissance vocale", context: "ECE Paris", desc: "Modèle de reconnaissance vocale entraîné avec PyTorch." },
  { title: "Conception FPGA", context: "ECE Paris", desc: "Projets de logique numérique sous Intel Quartus." },
];
