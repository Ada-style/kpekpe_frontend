import { useState } from "react";
import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { GraduationCap, ArrowRight, Clock, Sparkles, User, Lock, Filter } from "lucide-react";

// Profil simulé de l'apprenant connecté (extrait de son inscription / abonnement)
const USER_PROFIL = {
  nom: "Koffi",
  classe: "Terminale D",
  filiere: "Série D (Sciences Biologiques & Physiques)",
  niveauId: "serie-d",
  etablissement: "Lycée de Tokoin (Lomé)",
};

const NIVEAUX_DISPONIBLES = [
  { id: "serie-d", label: "Terminale D (Ma classe)", badge: "Inscrit" },
  { id: "serie-c4", label: "Terminale C4 (Maths & Physiques)", badge: "Lycée" },
  { id: "serie-a4", label: "Terminale A4 (Lettres & Philo)", badge: "Lycée" },
  { id: "3eme", label: "Classe de 3ème (Collège)", badge: "Collège" },
];

const CHAPITRES_PAR_NIVEAU: Record<string, any[]> = {
  "serie-d": [
    {
      id: "svt-genetique-bac",
      matiere: "SVT (Série D)",
      titre: "Génétique : Lois de Mendel & Brassage Chromosomique",
      desc: "Expérience interactive de croisement génétique et simulation des lois de transmission chez les végétaux et l'Homme.",
      typeExp: "Labo SVT interactif",
      duree: "50 min",
      url: "/web-app/cours/svt-genetique-bac",
    },
    {
      id: "chimie-dosage-bac",
      matiere: "Physique-Chimie (Série D)",
      titre: "Chimie : Dosage Acido-Basique & Virage Coloré",
      desc: "Expérience de laboratoire virtuel : manipulation de la burette graduée, virage du BBT et courbe de pH en direct.",
      typeExp: "Labo Chimie interactif",
      duree: "45 min",
      url: "/web-app/cours/chimie-dosage-bac",
    },
  ],
  "serie-c4": [
    {
      id: "chimie-dosage-bac",
      matiere: "Physique-Chimie (Série C4)",
      titre: "Chimie : Dosage Acido-Basique & Titrage de précision",
      desc: "Calculs stœchiométriques et tracé de la méthode des tangentes parallèles pour l'équivalence.",
      typeExp: "Labo Chimie interactif",
      duree: "45 min",
      url: "/web-app/cours/chimie-dosage-bac",
    },
  ],
  "serie-a4": [
    {
      id: "philo-conscience-a4",
      matiere: "Philosophie (Série A4)",
      titre: "Philosophie : La Conscience et l'Inconscient",
      desc: "Analyse de textes d'auteurs du programme officiel, fiches synthétiques et dialogue avec Kpé Tuteur.",
      typeExp: "Atelier Socratique",
      duree: "45 min",
      url: "/web-app/cours/maths-fonctions-affines",
    },
  ],
  "3eme": [
    {
      id: "maths-fonctions-affines",
      matiere: "Mathématiques (3ème)",
      titre: "Les Fonctions Affines & Représentation Graphique",
      desc: "Simulation graphique en temps réel : manipulation de la pente (a) et de l'ordonnée à l'origine (b).",
      typeExp: "Labo Maths interactif",
      duree: "40 min",
      url: "/web-app/cours/maths-fonctions-affines",
    },
  ],
};

export default function WebCoursHub() {
  // Par défaut, l'application verrouille directement sur la classe de l'élève
  const [selectedNiveau, setSelectedNiveau] = useState(USER_PROFIL.niveauId);
  const [showAllClasses, setShowAllClasses] = useState(false);

  const chapitres = CHAPITRES_PAR_NIVEAU[selectedNiveau] || CHAPITRES_PAR_NIVEAU["serie-d"];

  return (
    <WebLayout
      breadcrumbs={[{ label: "Mes Cours" }]}
      kpeContext="Programme officiel de ma classe"
      kpeInitialMessage={`Bonjour ${USER_PROFIL.nom}, voici l'espace de cours officiel de ta classe (${USER_PROFIL.classe}). Chaque chapitre comporte ses fiches, son labo virtuel et ses quiz d'entraînement.`}
    >
      <div className="max-w-6xl mx-auto pb-12">
        {/* Bandeau de la classe de l'élève */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 mb-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Mon Espace de Classe Officiel</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
                Programme de {USER_PROFIL.classe} • {USER_PROFIL.filiere}
              </h1>
              <p className="text-sm text-muted-foreground">
                Établissement : <strong className="text-foreground">{USER_PROFIL.etablissement}</strong> • Les cours sont calibrés sur tes épreuves officielles du BAC.
              </p>
            </div>

            {/* Sélecteur de prévisualisation d'autres classes (pour tests) */}
            <div className="self-start sm:self-center">
              <button
                onClick={() => setShowAllClasses(!showAllClasses)}
                className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-foreground hover:bg-muted inline-flex items-center gap-1.5 transition-colors"
              >
                <Filter className="w-3.5 h-3.5 text-primary" />
                <span>{showAllClasses ? "Masquer les autres niveaux" : "Voir un autre niveau"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sélecteur si l'utilisateur souhaite changer de niveau */}
        {showAllClasses && (
          <div className="p-4 rounded-2xl bg-muted/40 border border-border mb-6 animate-in fade-in space-y-2">
            <span className="text-xs font-bold text-foreground block">
              Changer de classe de prévisualisation :
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 kpe-scrollbar-hide">
              {NIVEAUX_DISPONIBLES.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNiveau(n.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedNiveau === n.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grille des chapitres dédiés à la classe */}
        <div className="grid md:grid-cols-2 gap-5">
          {chapitres.map((ch) => (
            <div
              key={ch.id}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">
                    {ch.matiere}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ch.duree}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {ch.titre}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {ch.desc}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/15">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{ch.typeExp}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">
                  Fiche • Labo • Quiz • Tuteur Kpé
                </span>

                <Link
                  to={ch.url}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <span>Lancer le cours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
