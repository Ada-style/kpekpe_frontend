import { useState } from "react";
import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  Dna, Sliders, Layers, CheckSquare, MessageCircle,
  ArrowLeft, ArrowRight, RotateCw, CheckCircle2, Sparkles, Send, RefreshCw
} from "lucide-react";

export default function WebCoursSVT() {
  const [activeTab, setActiveTab] = useState<"comprendre" | "explorer" | "memoriser" | "entrainer" | "tuteur">("explorer");

  return (
    <WebLayout
      breadcrumbs={[
        { label: "Cours", to: "/web-app/cours" },
        { label: "SVT Série D" },
        { label: "Génétique Mendélienne" },
      ]}
      kpeContext="SVT Série D : Génétique"
      kpeInitialMessage="Bienvenue dans le laboratoire virtuel de génétique SVT Série D. Modifie les allèles parentaux dans l'onglet Explorer pour observer la transmission génétique."
    >
      <div className="max-w-5xl mx-auto pb-12">
        {/* En-tête du cours SVT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
              <span>SVT • Spécialité Série D</span>
              <span>•</span>
              <span>Classe de Terminale D (Togo)</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Génétique : Lois de Mendel & Brassage Allélique
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Transmission des caractères héréditaires, dominance, récessivité et échiquier de croisement.
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

        {/* Onglets des 5 modes */}
        <div className="flex items-center gap-2 p-1.5 bg-muted/60 rounded-2xl mb-8 overflow-x-auto kpe-scrollbar-hide">
          <button
            onClick={() => setActiveTab("comprendre")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "comprendre" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Dna className="w-4 h-4 text-primary" />
            <span>1. Comprendre</span>
          </button>
          <button
            onClick={() => setActiveTab("explorer")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "explorer" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="w-4 h-4 text-primary" />
            <span>2. Labo Virtuel (SVT)</span>
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

        {/* 2. EXPLORER (EXPÉRIENCE LABO VIRTUEL SVT) */}
        {activeTab === "explorer" && <LaboSVTExperience />}

        {/* 1. COMPRENDRE */}
        {activeTab === "comprendre" && (
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              Les principes clés du monohybridisme (BAC D)
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lors de la formation des gamètes par méiose, les deux allèles d'un même gène se séparent (ségrégation indépendante). En génération F1 issue de parents de lignée pure, tous les individus sont identiques (1ère loi de Mendel).
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground space-y-1">
              <p>• <strong>Phénotype dominant [J]</strong> : s'exprime dès qu'au moins un allèle dominant est présent.</p>
              <p>• <strong>Phénotype récessif [v]</strong> : ne s'exprime qu'à l'état homozygote (v//v).</p>
              <p>• <strong>Génération F2</strong> : Croisement F1 x F1 donne une proportion théorique de 3/4 [Dominant] et 1/4 [Récessif].</p>
            </div>
          </div>
        )}

        {/* 3. MÉMORISER */}
        {activeTab === "memoriser" && (
          <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-8 text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase">Flashcard SVT</span>
            <p className="font-display text-lg font-bold text-foreground">
              Définition : Qu'est-ce qu'un individu homozygote ?
            </p>
            <p className="text-xs text-muted-foreground">
              Un individu qui possède deux allèles identiques pour un même gène (ex: J//J ou v//v).
            </p>
          </div>
        )}

        {/* 4. S'ENTRAÎNER */}
        {activeTab === "entrainer" && (
          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-6 space-y-4">
            <span className="text-xs font-semibold text-primary">Annales BAC Série D</span>
            <h3 className="font-display text-base font-bold text-foreground">
              Lors d'un croisement entre deux hétérozygotes (J//v x J//v), quelle est la probabilité d'obtenir un descendant homozygote récessif (v//v) ?
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl border border-border bg-background">A) 100%</div>
              <div className="p-3 rounded-xl border border-border bg-background">B) 50% (1/2)</div>
              <div className="p-3 rounded-xl border border-primary bg-primary/10 text-primary font-bold">C) 25% (1/4) - Bonne réponse</div>
            </div>
          </div>
        )}

        {/* 5. TUTEUR */}
        {activeTab === "tuteur" && (
          <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-6 text-center space-y-3">
            <p className="text-xs text-muted-foreground">
              Kpé est prêt à t'expliquer pas à pas les croisements dihybrides et les gènes liés en Série D.
            </p>
          </div>
        )}
      </div>
    </WebLayout>
  );
}

// ── EXPÉRIENCE LABO INTERACTIF SVT (GÉNÉTIQUE & ÉCHIQUIER DE MENDEL) ──
function LaboSVTExperience() {
  const [parent1Allèle1, setParent1Allèle1] = useState<"J" | "v">("J");
  const [parent1Allèle2, setParent1Allèle2] = useState<"J" | "v">("v");
  const [parent2Allèle1, setParent2Allèle1] = useState<"J" | "v">("J");
  const [parent2Allèle2, setParent2Allèle2] = useState<"J" | "v">("v");

  // Les 4 combinaisons de gamètes
  const cases = [
    { a1: parent1Allèle1, a2: parent2Allèle1 },
    { a1: parent1Allèle1, a2: parent2Allèle2 },
    { a1: parent1Allèle2, a2: parent2Allèle1 },
    { a1: parent1Allèle2, a2: parent2Allèle2 },
  ];

  // Calcul des phénotypes (J est dominant, v est récessif)
  const descendantsJaunes = cases.filter((c) => c.a1 === "J" || c.a2 === "J").length;
  const descendantsVerts = 4 - descendantsJaunes;

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-start">
      {/* Simulateur d'Échiquier de croisement */}
      <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-primary">Simulation Échiquier de Gamètes</span>
            <h3 className="font-display text-lg font-bold text-foreground">
              Génération F2 : Croisement des allèles
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-md bg-accent/25 text-foreground font-semibold">
            Allèle J (Jaune dominant) • v (Vert récessif)
          </span>
        </div>

        {/* Échiquier 2x2 interactif */}
        <div className="overflow-hidden rounded-xl border border-border text-center">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-muted/60">
                <th className="p-3 border-r border-b border-border text-muted-foreground font-medium">Gamètes</th>
                <th className="p-3 border-r border-b border-border font-mono font-bold text-primary">Parent 2 : {parent2Allèle1}</th>
                <th className="p-3 border-b border-border font-mono font-bold text-primary">Parent 2 : {parent2Allèle2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-r border-b border-border font-mono font-bold text-accent-foreground bg-muted/30">
                  Parent 1 : {parent1Allèle1}
                </td>
                <td className="p-4 border-r border-b border-border">
                  <div className="font-mono font-bold text-sm text-foreground">{parent1Allèle1}//{parent2Allèle1}</div>
                  <div className="text-[11px] font-semibold text-primary">Phénotype : {parent1Allèle1 === "J" || parent2Allèle1 === "J" ? "[Jaune]" : "[Vert]"}</div>
                </td>
                <td className="p-4 border-b border-border">
                  <div className="font-mono font-bold text-sm text-foreground">{parent1Allèle1}//{parent2Allèle2}</div>
                  <div className="text-[11px] font-semibold text-primary">Phénotype : {parent1Allèle1 === "J" || parent2Allèle2 === "J" ? "[Jaune]" : "[Vert]"}</div>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-r border-border font-mono font-bold text-accent-foreground bg-muted/30">
                  Parent 1 : {parent1Allèle2}
                </td>
                <td className="p-4 border-r border-border">
                  <div className="font-mono font-bold text-sm text-foreground">{parent1Allèle2}//{parent2Allèle1}</div>
                  <div className="text-[11px] font-semibold text-primary">Phénotype : {parent1Allèle2 === "J" || parent2Allèle1 === "J" ? "[Jaune]" : "[Vert]"}</div>
                </td>
                <td className="p-4 border-border">
                  <div className="font-mono font-bold text-sm text-foreground">{parent1Allèle2}//{parent2Allèle2}</div>
                  <div className="text-[11px] font-semibold text-accent-foreground">Phénotype : {parent1Allèle2 === "J" || parent2Allèle2 === "J" ? "[Jaune]" : "[Vert]"}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Résultats statistiques en temps réel */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-xs">
            <span className="text-muted-foreground block text-[11px]">Graines Jaunes [J] :</span>
            <span className="font-display text-xl font-bold text-primary">{(descendantsJaunes / 4) * 100}%</span>
            <span className="text-[10px] text-muted-foreground block mt-0.5">({descendantsJaunes}/4 descendants)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-accent/15 border border-accent/30 text-xs">
            <span className="text-muted-foreground block text-[11px]">Graines Vertes [v] :</span>
            <span className="font-display text-xl font-bold text-accent-foreground">{(descendantsVerts / 4) * 100}%</span>
            <span className="text-[10px] text-muted-foreground block mt-0.5">({descendantsVerts}/4 descendants)</span>
          </div>
        </div>
      </div>

      {/* Panneau de manipulation des Allèles */}
      <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
        <div>
          <h3 className="font-display text-base font-bold text-foreground">
            Manipuler les Allèles des Parents
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Choisis la constitution génétique pour voir les ratios de Mendel évoluer en temps réel.
          </p>
        </div>

        {/* Parent 1 */}
        <div className="space-y-2 p-3.5 rounded-xl bg-muted/30 border border-border/60 text-xs">
          <span className="font-bold text-foreground block">Génotype Parent 1 :</span>
          <div className="flex gap-2">
            <select
              value={parent1Allèle1}
              onChange={(e) => setParent1Allèle1(e.target.value as "J" | "v")}
              className="flex-1 p-2 rounded-lg border border-border bg-card font-mono font-bold"
            >
              <option value="J">Allèle J (Dominant)</option>
              <option value="v">Allèle v (Récessif)</option>
            </select>
            <select
              value={parent1Allèle2}
              onChange={(e) => setParent1Allèle2(e.target.value as "J" | "v")}
              className="flex-1 p-2 rounded-lg border border-border bg-card font-mono font-bold"
            >
              <option value="J">Allèle J (Dominant)</option>
              <option value="v">Allèle v (Récessif)</option>
            </select>
          </div>
        </div>

        {/* Parent 2 */}
        <div className="space-y-2 p-3.5 rounded-xl bg-muted/30 border border-border/60 text-xs">
          <span className="font-bold text-foreground block">Génotype Parent 2 :</span>
          <div className="flex gap-2">
            <select
              value={parent2Allèle1}
              onChange={(e) => setParent2Allèle1(e.target.value as "J" | "v")}
              className="flex-1 p-2 rounded-lg border border-border bg-card font-mono font-bold"
            >
              <option value="J">Allèle J (Dominant)</option>
              <option value="v">Allèle v (Récessif)</option>
            </select>
            <select
              value={parent2Allèle2}
              onChange={(e) => setParent2Allèle2(e.target.value as "J" | "v")}
              className="flex-1 p-2 rounded-lg border border-border bg-card font-mono font-bold"
            >
              <option value="J">Allèle J (Dominant)</option>
              <option value="v">Allèle v (Récessif)</option>
            </select>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary leading-relaxed">
          <strong>Observation Série D :</strong> Dès qu'au moins un allèle <span className="font-mono font-bold">J</span> est présent, la graine est jaune. C'est l'illustration de la 3ème loi de ségrégation.
        </div>
      </div>
    </div>
  );
}
