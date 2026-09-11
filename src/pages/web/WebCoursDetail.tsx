import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  BookOpen, Sliders, Layers, CheckSquare, MessageCircle,
  ArrowLeft, ArrowRight, RotateCw, CheckCircle2, Sparkles, Send
} from "lucide-react";

export default function WebCoursDetail() {
  const [activeTab, setActiveTab] = useState<"comprendre" | "explorer" | "memoriser" | "entrainer" | "tuteur">("comprendre");

  return (
    <WebLayout
      breadcrumbs={[
        { label: "Apprendre", to: "/web-app/cours" },
        { label: "Mathématiques 3ème" },
        { label: "Fonctions Affines" },
      ]}
      kpeContext="Cours : Fonctions Affines"
      kpeInitialMessage="Tu travailles sur les fonctions affines. Si tu as un doute sur la formule f(x) = ax + b ou sur le calcul de la pente, pose-moi ta question !"
    >
      <div className="max-w-5xl mx-auto pb-12">
        {/* En-tête du chapitre */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
              <span>Mathématiques</span>
              <span>•</span>
              <span>Classe de 3ème / Seconde</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Chapitre 4 : Les Fonctions Affines
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Représentation graphique, coefficient directeur et résolution de problèmes concrets.
            </p>
          </div>
          <Link
            to="/web-app/mon-parcours"
            className="self-start sm:self-auto px-3.5 py-2 rounded-xl border border-border hover:bg-muted text-xs font-semibold text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour au parcours</span>
          </Link>
        </div>

        {/* Onglets des 5 Modes d'Apprentissage Kpékpé */}
        <div className="flex items-center gap-2 p-1.5 bg-muted/60 rounded-2xl mb-8 overflow-x-auto kpe-scrollbar-hide">
          <button
            onClick={() => setActiveTab("comprendre")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "comprendre" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span>1. Comprendre</span>
          </button>
          <button
            onClick={() => setActiveTab("explorer")}
            className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "explorer" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="w-4 h-4 text-primary" />
            <span>2. Explorer</span>
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
            <span>4. S'entraîner</span>
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

        {/* Contenu de chaque mode */}
        {activeTab === "comprendre" && <ModeComprendre />}
        {activeTab === "explorer" && <ModeExplorer />}
        {activeTab === "memoriser" && <ModeMemoriser />}
        {activeTab === "entrainer" && <ModeEntrainer />}
        {activeTab === "tuteur" && <ModeTuteur />}
      </div>
    </WebLayout>
  );
}

// ── 1. COMPRENDRE ──
function ModeComprendre() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Notion fondamentale</span>
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">
          Définition d'une fonction affine
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Une fonction affine est une fonction qui, à tout nombre réel <span className="font-mono text-foreground font-semibold">x</span>, associe le nombre <span className="font-mono text-foreground font-semibold">ax + b</span>, où <span className="font-mono text-foreground font-semibold">a</span> et <span className="font-mono text-foreground font-semibold">b</span> sont deux nombres donnés.
        </p>

        <div className="p-5 rounded-xl bg-muted/40 border border-border font-mono text-base text-center font-bold text-primary">
          f(x) = a · x + b
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border bg-background">
            <span className="text-xs font-bold text-primary block mb-1">Le coefficient directeur (a)</span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Il détermine l'inclinaison (la pente) de la droite. Si <span className="font-semibold">a &gt; 0</span>, la fonction est croissante. Si <span className="font-semibold">a &lt; 0</span>, la fonction est décroissante.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-background">
            <span className="text-xs font-bold text-accent-foreground block mb-1">L'ordonnée à l'origine (b)</span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              C'est le point où la droite coupe l'axe vertical des ordonnées (en x = 0).
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
        <h3 className="font-display text-lg font-bold text-foreground">
          Exemple concret : La course de taxi-moto à Lomé
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Imagine un conducteur de taxi-moto (Zémidjan) qui demande une prise en charge fixe de <span className="font-semibold text-foreground">200 FCFA</span>, puis <span className="font-semibold text-foreground">100 FCFA par kilomètre</span> parcouru.
        </p>
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground space-y-1">
          <p>• Le prix fixe est l'ordonnée à l'origine : <span className="font-mono font-bold">b = 200</span></p>
          <p>• Le prix par kilomètre est le coefficient directeur : <span className="font-mono font-bold">a = 100</span></p>
          <p>• La formule du prix selon la distance <span className="font-mono">x</span> est : <span className="font-mono font-bold text-primary">Prix(x) = 100x + 200</span></p>
        </div>
      </div>
    </div>
  );
}

// ── 2. EXPLORER (SIMULATION INTERACTIVE) ──
function ModeExplorer() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);

  // Points du tracé SVG pour x entre -5 et 5
  // Coordonnées graphiques : centre en (150, 120), échelle 20px par unité
  const x1 = -4;
  const y1 = a * x1 + b;
  const x2 = 4;
  const y2 = a * x2 + b;

  const svgX1 = 150 + x1 * 25;
  const svgY1 = 120 - y1 * 20;
  const svgX2 = 150 + x2 * 25;
  const svgY2 = 120 - y2 * 20;

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">
          Graphe interactif : f(x) = {a}x {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}
        </h3>

        <div className="w-full h-64 rounded-xl bg-muted/30 border border-border flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 300 240" className="w-full h-full">
            {/* Grille */}
            <line x1="0" y1="120" x2="300" y2="120" stroke="#9CA3AF" strokeWidth="1.5" />
            <line x1="150" y1="0" x2="150" y2="240" stroke="#9CA3AF" strokeWidth="1.5" />
            {/* Graduations */}
            {[-4, -2, 2, 4].map((pt) => (
              <g key={pt}>
                <line x1={150 + pt * 25} y1="116" x2={150 + pt * 25} y2="124" stroke="#6B7280" />
                <text x={150 + pt * 25 - 4} y="136" fontSize="9" fill="#6B7280">{pt}</text>
              </g>
            ))}
            {/* Droite affine */}
            <line
              x1={svgX1}
              y1={svgY1}
              x2={svgX2}
              y2={svgY2}
              stroke="#00963F"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Point ordonnée à l'origine (0, b) */}
            <circle cx="150" cy={120 - b * 20} r="5" fill="#FEEC01" stroke="#00963F" strokeWidth="2" />
          </svg>
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          Le point doré représente l'ordonnée à l'origine <span className="font-semibold">b = {b}</span>.
        </p>
      </div>

      <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 space-y-6 shadow-sm">
        <h3 className="font-display text-lg font-bold text-foreground">
          Modifie les paramètres
        </h3>

        {/* Curseur Pente (a) */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-foreground">Pente / Coefficient directeur (a) :</span>
            <span className="font-mono font-bold text-primary">{a}</span>
          </div>
          <input
            type="range"
            min="-4"
            max="4"
            step="0.5"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <p className="text-[11px] text-muted-foreground">
            {a > 0 ? "La droite monte (croissante)." : a < 0 ? "La droite descend (décroissante)." : "La droite est horizontale (constante)."}
          </p>
        </div>

        {/* Curseur Ordonnée (b) */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-semibold text-foreground">Ordonnée à l'origine (b) :</span>
            <span className="font-mono font-bold text-accent-foreground">{b}</span>
          </div>
          <input
            type="range"
            min="-4"
            max="4"
            step="1"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <p className="text-[11px] text-muted-foreground">
            Fait monter ou descendre la droite le long de l'axe vertical.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── 3. MÉMORISER (FLASHCARDS) ──
function ModeMemoriser() {
  const cards = [
    {
      recto: "Quelle est la forme générale d'une fonction affine ?",
      verso: "f(x) = ax + b, où a est le coefficient directeur et b l'ordonnée à l'origine.",
    },
    {
      recto: "Que se passe-t-il si a = 0 dans f(x) = ax + b ?",
      verso: "La fonction devient f(x) = b. C'est une fonction constante, sa représentation graphique est une droite horizontale.",
    },
    {
      recto: "Que se passe-t-il si b = 0 dans f(x) = ax + b ?",
      verso: "La fonction devient f(x) = ax. C'est une fonction linéaire, sa droite passe obligatoirement par l'origine (0, 0).",
    },
  ];

  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setIdx((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center">
        <span className="text-xs text-muted-foreground font-semibold">
          Carte {idx + 1} sur {cards.length}
        </span>
      </div>

      {/* Flashcard interactive */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="h-64 rounded-2xl border border-border bg-card p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:border-primary/40 transition-all select-none relative group"
      >
        <div className="absolute top-4 right-4 text-xs text-muted-foreground inline-flex items-center gap-1">
          <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
          <span>Cliquer pour retourner</span>
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
          {flipped ? "Réponse" : "Question"}
        </p>

        <p className="font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
          {flipped ? cards[idx].verso : cards[idx].recto}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={nextCard}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <span>Carte suivante</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ── 4. S'ENTRAÎNER (QUIZ) ──
function ModeEntrainer() {
  const [selected, setSelected] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);

  const question = {
    titre: "Soit f(x) = -3x + 6. Quelle est l'ordonnée à l'origine de cette droite ?",
    choix: ["-3", "6", "2", "0"],
    correct: 1, // '6'
    explication: "Dans l'expression f(x) = ax + b, l'ordonnée à l'origine est la valeur de b, soit ici 6.",
  };

  return (
    <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-primary">Question 1 sur 3</span>
        <span className="text-muted-foreground">+20 XP à la clé</span>
      </div>

      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
        {question.titre}
      </h3>

      <div className="space-y-2.5">
        {question.choix.map((c, i) => {
          const isSelected = selected === i;
          let styleClass = "border-border hover:bg-muted/40";
          if (isSelected) styleClass = "border-primary bg-primary/10 text-primary";
          if (validated) {
            if (i === question.correct) styleClass = "border-primary bg-primary/20 text-primary font-bold";
            else if (isSelected) styleClass = "border-destructive/40 bg-destructive/10 text-destructive";
          }

          return (
            <button
              key={c}
              disabled={validated}
              onClick={() => setSelected(i)}
              className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${styleClass}`}
            >
              <span>{c}</span>
              {validated && i === question.correct && <CheckCircle2 className="w-4 h-4 text-primary" />}
            </button>
          );
        })}
      </div>

      {validated && (
        <div className="p-4 rounded-xl bg-muted/50 border border-border text-xs text-muted-foreground leading-relaxed">
          <p className="font-bold text-foreground mb-1">Explication :</p>
          <p>{question.explication}</p>
        </div>
      )}

      <div className="pt-2">
        {!validated ? (
          <button
            disabled={selected === null}
            onClick={() => setValidated(true)}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm disabled:opacity-50 hover:bg-primary/90 transition-colors shadow-sm"
          >
            Valider ma réponse
          </button>
        ) : (
          <button
            onClick={() => {
              setSelected(null);
              setValidated(false);
            }}
            className="w-full py-3 rounded-xl border border-border hover:bg-muted font-semibold text-sm transition-colors"
          >
            Question suivante
          </button>
        )}
      </div>
    </div>
  );
}

// ── 5. TUTEUR KPÉ (CHAT SOCRATIQUE) ──
function ModeTuteur() {
  const [messages, setMessages] = useState([
    {
      sender: "kpe",
      text: "Bonjour ! Je suis Kpé, ton tuteur en ligne. Qu'est-ce qui te pose le plus de difficultés sur les fonctions affines ?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "kpe",
          text: `Excellente question sur "${userMsg}". Pense au graphique : si le coefficient a augmente, comment la droite va-t-elle pivoter selon toi ?`,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card shadow-sm flex flex-col h-[460px] overflow-hidden">
      {/* En-tête chat */}
      <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
            K
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Kpé Tuteur</p>
            <p className="text-[10px] text-primary font-medium">En ligne • Pédagogie active</p>
          </div>
        </div>
        <span className="text-[11px] text-muted-foreground">Méthode socratique</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-5 overflow-y-auto space-y-3.5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                m.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground border border-border/50"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Saisie */}
      <div className="p-3 border-t border-border bg-background flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Pose une question à Kpé..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-card text-xs sm:text-sm outline-none focus:border-primary transition-colors"
        />
        <button
          onClick={handleSend}
          className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
