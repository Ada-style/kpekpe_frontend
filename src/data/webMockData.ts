// Données fictives pour toute la maquette /web-app.

export type Metier = {
  id: string;
  titre: string;
  secteur: string;
  niveauMin: string;
  debouches: string;
  salaire: string;
  description: string;
  competences: { nom: string; niveau: "critique" | "importante" | "utile" }[];
  tags: string[];
  formationsIds: string[];
  score?: number;
  raison?: string;
};

export type Formation = {
  id: string;
  titre: string;
  organisation: string;
  ville: string;
  domaine: string;
  niveau: string;
  dureeMois: number;
  frais?: string;
  statut: "ouvert" | "ferme" | "complet";
  description: string;
  admission: string;
  metiersIds: string[];
  orgId: string;
  score?: number;
  force?: "directe" | "forte" | "possible";
};

export type Organisation = {
  id: string;
  nom: string;
  sigle: string;
  type: string;
  statut: "public" | "prive";
  ville: string;
  partenaire?: boolean;
  description: string;
  telephone?: string;
  email?: string;
  siteWeb?: string;
  formationsIds: string[];
};

export type Ressource = {
  id: string;
  titre: string;
  categorie: string;
  type: string;
  dureeMin: number;
  extrait: string;
  contenu: string;
  metiersIds: string[];
};

export const METIERS: Metier[] = [
  {
    id: "dev-web",
    titre: "Développeur Web",
    secteur: "Numérique",
    niveauMin: "Bac+2",
    debouches: "Fort demande à Lomé, startups, banques, agences digitales, ONG.",
    salaire: "150 000 – 600 000 FCFA / mois",
    description:
      "Le développeur web conçoit et maintient des sites internet et applications. Il travaille avec des langages comme HTML, CSS, JavaScript, Python.",
    competences: [
      { nom: "Résolution de problèmes", niveau: "critique" },
      { nom: "Rigueur logique", niveau: "critique" },
      { nom: "Anglais technique", niveau: "importante" },
      { nom: "Travail en équipe", niveau: "utile" },
    ],
    tags: ["Analytique", "Créatif", "Numérique"],
    formationsIds: ["licence-info", "bts-info"],
    score: 87,
    raison: "Tu apprécies résoudre des problèmes concrets et travailler en autonomie.",
  },
  {
    id: "medecin",
    titre: "Médecin généraliste",
    secteur: "Santé",
    niveauMin: "Bac+7",
    debouches: "Hôpitaux publics, cliniques privées, ONG santé, cabinets ruraux.",
    salaire: "400 000 – 1 500 000 FCFA / mois",
    description:
      "Le médecin diagnostique, traite et prévient les maladies. Il joue un rôle central dans la santé publique togolaise.",
    competences: [
      { nom: "Sens du soin", niveau: "critique" },
      { nom: "Endurance", niveau: "critique" },
      { nom: "Écoute active", niveau: "importante" },
    ],
    tags: ["Social", "Scientifique", "Impact"],
    formationsIds: ["med-lome"],
    score: 74,
    raison: "Tu veux aider les autres et tu es à l'aise avec les matières scientifiques.",
  },
  {
    id: "agronome",
    titre: "Ingénieur agronome",
    secteur: "Agriculture",
    niveauMin: "Bac+5",
    debouches: "Ministère, coopératives, ONG, exploitations, entreprises agroalimentaires.",
    salaire: "250 000 – 800 000 FCFA / mois",
    description:
      "L'ingénieur agronome optimise les cultures et les élevages. Un métier clé pour la sécurité alimentaire du Togo.",
    competences: [
      { nom: "Sciences du vivant", niveau: "critique" },
      { nom: "Terrain", niveau: "importante" },
    ],
    tags: ["Scientifique", "Nature", "Impact"],
    formationsIds: ["esa-lome"],
    score: 68,
    raison: "Tu es sensible à la nature et à l'impact concret sur ton pays.",
  },
  {
    id: "compta",
    titre: "Comptable",
    secteur: "Finance",
    niveauMin: "Bac+2",
    debouches: "PME, banques, cabinets comptables, ONG.",
    salaire: "120 000 – 500 000 FCFA / mois",
    description: "Le comptable enregistre les opérations financières et produit les états comptables.",
    competences: [{ nom: "Rigueur", niveau: "critique" }, { nom: "Chiffres", niveau: "critique" }],
    tags: ["Analytique", "Organisé"],
    formationsIds: ["bts-info"],
  },
  {
    id: "enseignant",
    titre: "Enseignant du secondaire",
    secteur: "Éducation",
    niveauMin: "Bac+3",
    debouches: "Collèges et lycées publics et privés partout au Togo.",
    salaire: "100 000 – 350 000 FCFA / mois",
    description: "L'enseignant transmet ses connaissances et accompagne les élèves vers la réussite.",
    competences: [{ nom: "Pédagogie", niveau: "critique" }, { nom: "Patience", niveau: "importante" }],
    tags: ["Social", "Transmission"],
    formationsIds: ["licence-info"],
  },
  {
    id: "designer",
    titre: "Designer graphique",
    secteur: "Créatif",
    niveauMin: "Bac+2",
    debouches: "Agences de communication, studios, freelance, presse, ONG.",
    salaire: "100 000 – 450 000 FCFA / mois",
    description: "Le designer graphique crée des identités visuelles, affiches, logos et supports digitaux.",
    competences: [{ nom: "Créativité", niveau: "critique" }, { nom: "Suite Adobe", niveau: "importante" }],
    tags: ["Créatif", "Numérique"],
    formationsIds: ["bts-info"],
  },
];

export const FORMATIONS: Formation[] = [
  {
    id: "licence-info",
    titre: "Licence Informatique",
    organisation: "Université de Lomé",
    ville: "Lomé",
    domaine: "Informatique",
    niveau: "Licence (Bac+3)",
    dureeMois: 36,
    frais: "45 000 FCFA / an",
    statut: "ouvert",
    description:
      "Formation complète en informatique fondamentale : programmation, bases de données, réseaux, génie logiciel.",
    admission: "Baccalauréat série C, D ou F avec mention.",
    metiersIds: ["dev-web"],
    orgId: "ul",
    score: 92,
    force: "directe",
  },
  {
    id: "bts-info",
    titre: "BTS Informatique de gestion",
    organisation: "ESIG Global Success",
    ville: "Lomé",
    domaine: "Informatique",
    niveau: "BTS (Bac+2)",
    dureeMois: 24,
    frais: "600 000 FCFA / an",
    statut: "ouvert",
    description: "Diplôme professionnel court, orienté insertion immédiate en entreprise.",
    admission: "Baccalauréat toutes séries + test d'entrée.",
    metiersIds: ["dev-web", "compta"],
    orgId: "esig",
    score: 84,
    force: "forte",
  },
  {
    id: "med-lome",
    titre: "Doctorat en Médecine",
    organisation: "Faculté des Sciences de la Santé",
    ville: "Lomé",
    domaine: "Santé",
    niveau: "Doctorat (Bac+7)",
    dureeMois: 84,
    frais: "60 000 FCFA / an",
    statut: "ferme",
    description: "Cursus long menant au diplôme d'État de docteur en médecine.",
    admission: "Baccalauréat série D avec mention Bien minimum + concours.",
    metiersIds: ["medecin"],
    orgId: "ul",
    score: 80,
    force: "directe",
  },
  {
    id: "esa-lome",
    titre: "Ingénieur agronome",
    organisation: "École Supérieure d'Agronomie",
    ville: "Lomé",
    domaine: "Agriculture",
    niveau: "Ingénieur (Bac+5)",
    dureeMois: 60,
    statut: "complet",
    description: "Formation d'ingénieurs pour l'agriculture et l'agroalimentaire togolais.",
    admission: "Baccalauréat série C ou D + concours national.",
    metiersIds: ["agronome"],
    orgId: "ul",
  },
];

export const ORGANISATIONS: Organisation[] = [
  {
    id: "ul",
    nom: "Université de Lomé",
    sigle: "UL",
    type: "Université",
    statut: "public",
    ville: "Lomé",
    partenaire: true,
    description:
      "Principale université publique du Togo. Plus de 60 000 étudiants et 50+ formations.",
    telephone: "+228 71 16 23 94",
    email: "info@univ-lome.tg",
    siteWeb: "#",
    formationsIds: ["licence-info", "med-lome", "esa-lome"],
  },
  {
    id: "esig",
    nom: "ESIG Global Success",
    sigle: "ESIG",
    type: "École supérieure",
    statut: "prive",
    ville: "Lomé",
    partenaire: false,
    description: "École privée orientée insertion professionnelle rapide en informatique et gestion.",
    telephone: "+228 71 16 23 94 ",
    siteWeb: "#",
    formationsIds: ["bts-info"],
  },
  {
    id: "iai",
    nom: "Institut Africain d'Informatique",
    sigle: "IAI",
    type: "Centre de formation",
    statut: "prive",
    ville: "Lomé",
    partenaire: true,
    description: "Formations professionnelles courtes en développement, data et cybersécurité.",
    formationsIds: [],
  },
];

export const RESSOURCES: Ressource[] = [
  {
    id: "choisir-serie",
    titre: "Comment bien choisir sa série au lycée",
    categorie: "Orientation",
    type: "Guide",
    dureeMin: 6,
    extrait: "Un guide pratique pour comprendre les différences entre les séries A, C, D, G au Togo.",
    contenu:
      "Choisir sa série est l'une des premières décisions d'orientation. Ce guide te présente chaque série, ses matières phares, les métiers accessibles et les erreurs à éviter.",
    metiersIds: ["dev-web", "medecin"],
  },
  {
    id: "concours-togo",
    titre: "Les concours d'entrée au Togo en 2026",
    categorie: "Formations",
    type: "Article",
    dureeMin: 8,
    extrait: "Calendrier, conditions, épreuves : tout savoir sur les concours publics togolais.",
    contenu: "Chaque année, plusieurs concours nationaux permettent d'accéder à des formations gratuites…",
    metiersIds: ["medecin", "agronome"],
  },
  {
    id: "cv-etudiant",
    titre: "Rédiger son premier CV étudiant",
    categorie: "Insertion",
    type: "Tutoriel",
    dureeMin: 5,
    extrait: "Les 6 sections indispensables d'un CV percutant, même sans expérience.",
    contenu: "Ton premier CV ne raconte pas ce que tu as fait — il raconte ce que tu peux devenir.",
    metiersIds: ["dev-web"],
  },
];

export const DIMENSIONS = [
  { key: "passion", label: "Ce que tu aimes", score: 82, color: "hsl(var(--kpe-passion))" },
  { key: "talent", label: "Ce dans quoi tu es bon", score: 74, color: "hsl(var(--kpe-talent))" },
  { key: "besoins", label: "Ce dont le monde a besoin", score: 68, color: "hsl(var(--kpe-besoins))" },
  { key: "aspiration", label: "Ce pour quoi tu peux être payé", score: 71, color: "hsl(var(--kpe-aspiration))" },
];

export const PROFIL_TYPE = "Analytique-Social";
export const MOTS_CLES = ["Créativité", "Analyse", "Impact social", "Autonomie", "Curiosité"];
