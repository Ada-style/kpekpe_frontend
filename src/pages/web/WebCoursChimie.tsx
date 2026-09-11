import { useState } from "react";
import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  FlaskConical, Sliders, Layers, CheckSquare, MessageCircle,
  ArrowLeft, ArrowRight, RotateCcw, Droplets, Sparkles, CheckCircle2
} from "lucide-react";

export default function WebCoursChimie() {
  const [activeTab, setActiveTab] = useState<"comprendre" | "explorer" | "memoriser" | "entrainer" | "tuteur">("explorer");

  return (
    <WebLayout
      breadcrumbs={[
        { label: "Cours", to: "/web-app/cours" },
        { label: "Chimie Série C4 & D" },
        { label: "Dosage Acido-Basique" },
      ]}
      kpeContext="Chimie Série C4/D : Dosage Acido-Basique"
      kpeInitialMessage="Bienvenue dans le laboratoire virtuel de chimie. Verse la soude depuis la burette graduée pour observer le virage de couleur et le saut de pH à l'équivalence."
    >
      <div className="max-w-5xl mx-auto pb-12">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
              <span>Physique-Chimie • Spécialité Série C4 & D</span>
              <span>•</span>
              <span>Terminale (Programme Togo)</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Dosage Acido-Basique : Titrage pH-métrique & Colorimétrique
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Courbe de pH, point d'équivalence, indicateurs colorés (BBT) et calcul de concentration molaire.
            </p>
          </div>
          <Link
            to="/web-app/cours"
            className="self-start sm:self-auto px-3.5 py-2 rounded-xl border border-border hover:bg-muted text-xs font-semibold text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tous les cours</span>
          </Link>
        </div>

        {/* 5 Modes */}
        <div className="flex items-center gap-2 p-1.5 bg-muted/60 rounded-2xl mb-8 overflow-x-auto kpe-scrollbar-hide">
          <button
            onClick={() => setActiveTab("comprendre")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "comprendre" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FlaskConical className="w-4 h-4 text-primary" />
            <span>1. Comprendre</span>
          </button>
          <button
            onClick={() => setActiveTab("explorer")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "explorer" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="w-4 h-4 text-primary" />
            <span>2. Labo Virtuel (Chimie)</span>
          </button>
          <button
            onClick={() => setActiveTab("memoriser")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "memoriser" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers className="w-4 h-4 text-primary" />
            <span>3. Mémoriser</span>
          </button>
          <button
            onClick={() => setActiveTab("entrainer")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "entrainer" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CheckSquare className="w-4 h-4 text-primary" />
            <span>4. Épreuves BAC</span>
          </button>
          <button
            onClick={() => setActiveTab("tuteur")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "tuteur" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>5. Tuteur Kpé</span>
          </button>
        </div>

        {/* 2. EXPLORER (EXPÉRIENCE CHIMIE INTERACTIVE) */}
        {activeTab === "explorer" && <LaboChimieExperience />}

        {/* 1. COMPRENDRE */}
        {activeTab === "comprendre" && (
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              Le titrage d'un acide fort (HCl) par une base forte (NaOH)
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La réaction de titrage est totale, rapide et exothermique : <span className="font-mono font-bold text-foreground">H3O⁺ + HO⁻ → 2 H2O</span>. À l'équivalence, la quantité de matière d'ions oxonium est égale à celle des ions hydroxyde versés : <span className="font-mono font-bold text-primary">Ca · Va = Cb · VbE</span>.
            </p>
          </div>
        )}

        {/* 3. MÉMORISER */}
        {activeTab === "memoriser" && (
          <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-8 text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase">Flashcard Chimie</span>
            <p className="font-display text-lg font-bold text-foreground">
              Formule à l'équivalence d'un titrage acido-basique 1:1 ?
            </p>
            <p className="text-sm text-primary font-mono font-bold">
              Ca · Va = Cb · VbE  ⟹  Ca = (Cb · VbE) / Va
            </p>
          </div>
        )}

        {/* 4. S'ENTRAÎNER */}
        {activeTab === "entrainer" && (
          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-6 space-y-4">
            <span className="text-xs font-semibold text-primary">Annales BAC Série C4/D</span>
            <h3 className="font-display text-base font-bold text-foreground">
              Quelle est la valeur du pH à l'équivalence lors du titrage d'un acide fort par une base forte à 25°C ?
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl border border-border bg-background">A) pH = 2.5 (Milieu très acide)</div>
              <div className="p-3 rounded-xl border border-primary bg-primary/10 text-primary font-bold">B) pH = 7.0 (Milieu neutre) - Bonne réponse</div>
              <div className="p-3 rounded-xl border border-border bg-background">C) pH = 12.0 (Milieu très basique)</div>
            </div>
          </div>
        )}

        {/* 5. TUTEUR */}
        {activeTab === "tuteur" && (
          <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-6 text-center space-y-3">
            <p className="text-xs text-muted-foreground">
              Kpé t'aide à tracer la méthode des tangentes parallèles pour trouver graphiquement le point d'équivalence (VE, pHE).
            </p>
          </div>
        )}
      </div>
    </WebLayout>
  );
}

// ── EXPÉRIENCE LABO INTERACTIF CHIMIE (BURETTE, BECHER & VIRAGE BBT) ──
function LaboChimieExperience() {
  const [volumeVerse, setVolumeVerse] = useState(0); // mL de soude versés (0 à 25 mL)
  const volumeEquivalence = 10; // 10 mL pour l'équivalence

  // Calcul dynamique du pH selon le volume versé
  const calculerPH = (v: number) => {
    if (v < volumeEquivalence) {
      // Zone acide : de 1.8 à ~3.5
      return (1.8 + (v / volumeEquivalence) * 1.5).toFixed(2);
    } else if (v === volumeEquivalence) {
      // Équivalence exacte
      return "7.00";
    } else {
      // Zone basique : de 10.5 à ~12.2
      const surdose = Math.min((v - volumeEquivalence) / 15, 1);
      return (10.5 + surdose * 1.8).toFixed(2);
    }
  };

  const currentPH = parseFloat(calculerPH(volumeVerse));

  // Couleur du réactif selon l'indicateur coloré BBT
  // Jaune si acide (pH < 6.0), Vert si neutre (6.0 <= pH <= 7.6), Bleu si basique (pH > 7.6)
  let couleurBecher = "#FEEC01"; // Jaune
  let nomCouleur = "Jaune (Milieu acide)";
  if (currentPH >= 6.0 && currentPH <= 7.6) {
    couleurBecher = "#00963F"; // Vert Kpékpé
    nomCouleur = "Vert (Zone de virage / Équivalence)";
  } else if (currentPH > 7.6) {
    couleurBecher = "#1E40AF"; // Bleu foncé
    nomCouleur = "Bleu (Milieu basique en excès)";
  }

  const ajouterVolume = (amount: number) => {
    setVolumeVerse((prev) => Math.min(prev + amount, 25));
  };

  const reinitialiser = () => {
    setVolumeVerse(0);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-start">
      {/* Simulation Visuelle du Dispositif de Laboratoire */}
      <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-primary">Dispositif Expérimental</span>
            <h3 className="font-display text-base font-bold text-foreground">
              Burette graduée & Bécher avec BBT
            </h3>
          </div>
          <button
            onClick={reinitialiser}
            className="px-2.5 py-1 rounded-lg border border-border hover:bg-muted text-xs font-medium inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Rincer le bécher</span>
          </button>
        </div>

        {/* Schéma vectoriel SVG interactif du banc de titrage */}
        <div className="w-full h-72 rounded-xl bg-muted/20 border border-border flex items-center justify-center p-3 relative overflow-hidden">
          <svg viewBox="0 0 300 240" className="w-full h-full">
            {/* Potence de laboratoire */}
            <rect x="50" y="20" width="8" height="200" fill="#6B7280" rx="2" />
            <rect x="30" y="215" width="80" height="10" fill="#4B5563" rx="2" />
            <rect x="54" y="50" width="70" height="6" fill="#6B7280" rx="1" />

            {/* Burette graduée */}
            <rect x="115" y="30" width="16" height="110" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1.5" rx="2" />
            {/* Niveau liquide dans la burette (NaOH) */}
            <rect
              x="117"
              y={30 + (volumeVerse / 25) * 80}
              width="12"
              height={110 - (volumeVerse / 25) * 80}
              fill="#93C5FD"
              opacity="0.8"
            />
            {/* Robinet de la burette */}
            <path d="M123 140 L123 155" stroke="#4B5563" strokeWidth="3" />
            <circle cx="123" cy="148" r="4" fill="#EF4444" />

            {/* Goutte tombante si on verse */}
            {volumeVerse > 0 && volumeVerse < 25 && (
              <circle cx="123" cy="162" r="2.5" fill="#60A5FA" />
            )}

            {/* Bécher avec le mélange et indicateur coloré BBT */}
            <path d="M95 170 L95 210 Q95 215 100 215 L146 215 Q151 215 151 210 L151 170 Z" fill="#F3F4F6" stroke="#4B5563" strokeWidth="2" />
            {/* Solution colorée dans le bécher qui change de couleur en direct ! */}
            <path
              d="M97 182 L97 210 Q97 213 100 213 L146 213 Q149 213 149 210 L149 182 Z"
              fill={couleurBecher}
              opacity="0.85"
              className="transition-colors duration-500"
            />

            {/* Sonde pH-mètre plongée dans le bécher */}
            <rect x="135" y="150" width="5" height="45" fill="#1F2937" rx="1" />
            <line x1="137" y1="150" x2="190" y2="100" stroke="#1F2937" strokeWidth="2" />

            {/* Écran digital du pH-mètre */}
            <rect x="190" y="80" width="85" height="40" fill="#1F2937" rx="6" />
            <text x="200" y="98" fontSize="9" fill="#9CA3AF" fontFamily="sans-serif">pH-mètre</text>
            <text x="200" y="114" fontSize="14" fill="#34D399" fontFamily="monospace" fontWeight="bold">
              pH : {currentPH.toFixed(2)}
            </text>
          </svg>
        </div>

        {/* Indicateur de statut du mélange */}
        <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-muted/40 border border-border/50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border border-border flex-shrink-0" style={{ backgroundColor: couleurBecher }} />
            <span className="font-semibold text-foreground">{nomCouleur}</span>
          </div>
          <span className="text-muted-foreground font-mono">Volume soude versé : {volumeVerse} mL</span>
        </div>
      </div>

      {/* Commandes du Robinet & Détection Équivalence */}
      <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <div>
          <h3 className="font-display text-base font-bold text-foreground">
            Contrôle de la Burette Graduée
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Verse la solution titrante (NaOH à Cb = 0.1 mol/L) au goutte-à-goutte.
          </p>
        </div>

        {/* Boutons d'injection */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-foreground block">Verser de la base :</span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => ajouterVolume(1)}
              disabled={volumeVerse >= 25}
              className="py-2.5 px-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              + 1 mL
            </button>
            <button
              onClick={() => ajouterVolume(2)}
              disabled={volumeVerse >= 25}
              className="py-2.5 px-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              + 2 mL
            </button>
            <button
              onClick={() => ajouterVolume(5)}
              disabled={volumeVerse >= 25}
              className="py-2.5 px-2 rounded-xl border border-primary text-primary text-xs font-bold hover:bg-primary/5 disabled:opacity-50 transition-colors"
            >
              + 5 mL
            </button>
          </div>
        </div>

        {/* Observation scientifique BAC */}
        <div className="p-4 rounded-xl border border-border bg-background space-y-2 text-xs">
          <span className="font-bold text-foreground block">Observation à retenir pour le BAC :</span>
          {volumeVerse < volumeEquivalence && (
            <p className="text-muted-foreground leading-relaxed">
              Avant l'équivalence (<span className="font-mono">V &lt; 10 mL</span>), les ions H3O⁺ sont en excès. Le BBT reste <strong className="text-accent-foreground">jaune</strong>.
            </p>
          )}
          {volumeVerse === volumeEquivalence && (
            <p className="text-primary font-bold leading-relaxed">
              ÉQUIVALENCE ATTEINTE ! (V = 10 mL). Les réactifs sont introduits dans les proportions stœchiométriques. Le BBT vire au vert et pH = 7.00.
            </p>
          )}
          {volumeVerse > volumeEquivalence && (
            <p className="text-blue-600 font-semibold leading-relaxed">
              Après l'équivalence (<span className="font-mono">V &gt; 10 mL</span>), les ions HO⁻ sont en excès. Le milieu devient basique et le BBT vire au <strong>bleu</strong>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
