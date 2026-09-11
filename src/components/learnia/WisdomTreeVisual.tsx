import { useState } from "react";
import { Sparkles, Award, Info, Sprout, CheckCircle2 } from "lucide-react";

interface Props {
  hasSubscription?: boolean;
  notionsMaitrisees?: number;
  totalNotionsProgramme?: number;
}

const STAGES_CROISSANCE = [
  { level: 1, nom: "La Graine Plantée", desc: "Abonnement activé : ta graine de sagesse prend racine.", fruits: [] },
  { level: 2, nom: "La Germination", desc: "Tes premières fiches et quiz sont validés.", fruits: [] },
  { level: 3, nom: "La Pousse Solide", desc: "Régularité confirmée : le tronc s'épaissit.", fruits: ["SVT (Cellule)"] },
  { level: 4, nom: "Le Jeune Baobab", desc: "Le tuteur IA valide tes progrès réguliers.", fruits: ["SVT", "Maths (Algèbre)"] },
  { level: 5, nom: "L'Arbre Épanoui", desc: "Matières dominées : les branches s'étendent.", fruits: ["SVT", "Maths", "Physique"] },
  { level: 6, nom: "L'Arbre de Réussite", desc: "Excellence : l'arbre est couvert des fruits de ton travail.", fruits: ["SVT", "Maths", "Physique", "Français", "BAC D"] },
];

export function WisdomTreeVisual({
  hasSubscription = true,
  notionsMaitrisees = 14,
  totalNotionsProgramme = 24,
}: Props) {
  // On dérive le stade de l'arbre selon le nombre de notions maîtrisées
  const [selectedStage, setSelectedStage] = useState(4);
  const currentStage = STAGES_CROISSANCE[selectedStage - 1] || STAGES_CROISSANCE[3];
  const pourcentageMaitrise = Math.round((notionsMaitrisees / totalNotionsProgramme) * 100);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden relative">
      {/* En-tête sans stress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sprout className="w-3.5 h-3.5" />
            <span>Graine plantée le 5 Octobre 2025</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-black text-foreground mt-1.5">
            L'Arbre de la Sagesse
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            {currentStage.desc}
          </p>
        </div>

        {/* Sélecteur de stade pour tester l'évolution */}
        <div className="flex items-center gap-1.5 p-1 bg-muted/60 rounded-xl self-start sm:self-auto">
          {STAGES_CROISSANCE.map((s) => (
            <button
              key={s.level}
              onClick={() => setSelectedStage(s.level)}
              title={s.nom}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                selectedStage === s.level
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background"
              }`}
            >
              {s.level}
            </button>
          ))}
        </div>
      </div>

      {/* Rendu Visuel SVG Organique de l'Arbre */}
      <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-primary/5 via-background to-muted/30 flex items-center justify-center p-4 border border-border/50">
        <svg
          viewBox="0 0 400 320"
          className="w-full h-full max-h-64 transition-all duration-700 ease-out"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sol nourricier */}
          <ellipse cx="200" cy="285" rx="140" ry="18" fill="#00963F" fillOpacity="0.08" />
          <ellipse cx="200" cy="285" rx="90" ry="10" fill="#00963F" fillOpacity="0.15" />
          <path d="M170 280 Q 200 288 230 280" stroke="#1D3E2F" strokeWidth="3" strokeLinecap="round" />

          {/* Stade 1 : La Graine tout juste plantée */}
          {selectedStage === 1 && (
            <g>
              <ellipse cx="200" cy="272" rx="12" ry="8" fill="#7A4B24" />
              <circle cx="200" cy="270" r="4" fill="#FEEC01" fillOpacity="0.8" />
              <path d="M200 264 Q 202 258 206 254" stroke="#00963F" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          )}

          {/* Stade 2 : La Germination */}
          {selectedStage === 2 && (
            <g>
              <ellipse cx="200" cy="276" rx="14" ry="7" fill="#7A4B24" opacity="0.6" />
              <path d="M200 274 Q 198 245 200 230" stroke="#00963F" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M200 240 Q 182 232 186 218 Q 200 226 200 240" fill="#00963F" />
              <path d="M200 234 Q 218 226 214 212 Q 200 220 200 234" fill="#00963F" />
            </g>
          )}

          {/* Stade 3 : La Pousse */}
          {selectedStage === 3 && (
            <g>
              <path d="M196 280 L198 200 Q200 170 200 160" stroke="#5A3E26" strokeWidth="7" strokeLinecap="round" />
              <path d="M198 220 Q180 205 170 200" stroke="#5A3E26" strokeWidth="4" strokeLinecap="round" />
              <circle cx="200" cy="150" r="32" fill="#00963F" fillOpacity="0.85" />
              <circle cx="168" cy="195" r="20" fill="#00963F" fillOpacity="0.75" />
              <circle cx="230" cy="180" r="22" fill="#00963F" fillOpacity="0.75" />
              {/* Premier fruit SVT */}
              <circle cx="168" cy="195" r="7" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
            </g>
          )}

          {/* Stade 4 : Le Jeune Baobab (Fruits SVT & Maths) */}
          {selectedStage === 4 && (
            <g>
              <path d="M192 280 C194 220 190 180 198 140 C206 180 204 220 208 280 Z" fill="#5A3E26" />
              <path d="M195 190 Q160 165 145 160" stroke="#5A3E26" strokeWidth="6" strokeLinecap="round" />
              <path d="M203 175 Q240 150 255 145" stroke="#5A3E26" strokeWidth="6" strokeLinecap="round" />
              <circle cx="200" cy="115" r="46" fill="#00963F" />
              <circle cx="150" cy="150" r="34" fill="#00963F" fillOpacity="0.9" />
              <circle cx="250" cy="135" r="36" fill="#00963F" fillOpacity="0.9" />
              <circle cx="195" cy="85" r="30" fill="#22C55E" fillOpacity="0.6" />
              {/* Vrais fruits validés par le Tuteur IA */}
              <circle cx="150" cy="145" r="8" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
              <circle cx="250" cy="130" r="8" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
            </g>
          )}

          {/* Stade 5 : L'Arbre Épanoui */}
          {selectedStage === 5 && (
            <g>
              <path d="M188 280 C192 210 185 160 196 120 C208 160 206 210 212 280 Z" fill="#4B331E" />
              <path d="M192 180 Q150 150 130 145" stroke="#4B331E" strokeWidth="8" strokeLinecap="round" />
              <path d="M204 165 Q250 135 270 130" stroke="#4B331E" strokeWidth="8" strokeLinecap="round" />
              <circle cx="200" cy="95" r="58" fill="#00963F" />
              <circle cx="135" cy="135" r="44" fill="#00963F" fillOpacity="0.92" />
              <circle cx="265" cy="120" r="46" fill="#00963F" fillOpacity="0.92" />
              <circle cx="198" cy="65" r="38" fill="#22C55E" fillOpacity="0.5" />
              {/* Fruits SVT, Maths, Physique */}
              <circle cx="135" cy="130" r="9" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
              <circle cx="265" cy="115" r="9" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
              <circle cx="198" cy="65" r="9" fill="#FEEC01" stroke="#00963F" strokeWidth="1.5" />
            </g>
          )}

          {/* Stade 6 : L'Arbre de Réussite complet */}
          {selectedStage === 6 && (
            <g>
              <path d="M184 285 C190 200 180 150 196 110 C212 150 210 200 216 285 Z" fill="#3D2916" />
              <path d="M190 170 Q140 135 120 130" stroke="#3D2916" strokeWidth="10" strokeLinecap="round" />
              <path d="M206 155 Q260 120 280 115" stroke="#3D2916" strokeWidth="10" strokeLinecap="round" />
              <circle cx="200" cy="85" r="68" fill="#007A33" />
              <circle cx="125" cy="125" r="52" fill="#00963F" />
              <circle cx="275" cy="110" r="54" fill="#00963F" />
              <circle cx="200" cy="55" r="44" fill="#22C55E" fillOpacity="0.4" />
              {/* Fruits dorés pour toutes les matières du BAC D */}
              <circle cx="125" cy="120" r="10" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
              <circle cx="275" cy="105" r="10" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
              <circle cx="185" cy="70" r="11" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
              <circle cx="225" cy="115" r="10" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
              <circle cx="170" cy="130" r="9" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
            </g>
          )}
        </svg>

        {/* Badge informatif en bas */}
        <div className="absolute bottom-3 left-4 bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-foreground flex items-center gap-2 shadow-sm">
          <Award className="w-3.5 h-3.5 text-primary" />
          <span>Évolution : {currentStage.nom}</span>
        </div>
      </div>

      {/* Progression concrète de l'année scolaire (sans minuteur) */}
      <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-border text-xs">
        <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
          <span className="text-muted-foreground block text-[11px]">Notions assimilées cette année :</span>
          <span className="font-bold text-primary font-mono text-sm">{notionsMaitrisees} sur {totalNotionsProgramme}</span>
        </div>
        <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
          <span className="text-muted-foreground block text-[11px]">Validation Tuteur IA :</span>
          <span className="font-bold text-foreground text-sm">{pourcentageMaitrise}% du programme</span>
        </div>
      </div>

      {/* Fruits réels portés par l'arbre */}
      {currentStage.fruits.length > 0 && (
        <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-semibold text-foreground">Fruits de réussite portés :</span>
          {currentStage.fruits.map((f) => (
            <span key={f} className="px-2 py-0.5 rounded-md bg-accent/25 text-foreground font-medium text-[11px]">
              • {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
