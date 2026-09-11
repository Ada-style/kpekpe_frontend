import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, HelpCircle, Sparkles, Check, Play, Pause } from "lucide-react";
import { KAppLayout } from "@/components/web-kpekpe/KAppLayout";
import { KButton, KCard, KpeBubble, KProgress } from "@/components/web-kpekpe/KPrimitives";
import { cn } from "@/lib/utils";

type QType = "single" | "multi" | "text" | "scale";

const QUESTIONS: { dim: string; type: QType; text: string; options?: string[] }[] = [
  { dim: "Passion", type: "single", text: "Qu'est-ce qui te passionne le plus en dehors de l'école ?", options: ["Créer avec mes mains", "Aider les autres", "Comprendre comment les choses marchent", "Raconter ou écrire des histoires"] },
  { dim: "Passion", type: "multi", text: "Parmi ces activités, lesquelles t'attirent naturellement ?", options: ["Sports", "Musique", "Technologie", "Nature", "Cuisine", "Débats"] },
  { dim: "Talent", type: "single", text: "Dans quel type de tâche te sens-tu le plus à l'aise ?", options: ["Analyser un problème", "Trouver des solutions concrètes", "Convaincre / expliquer", "Créer quelque chose de nouveau"] },
  { dim: "Talent", type: "scale", text: "À quel point te considères-tu à l'aise avec les mathématiques ?" },
  { dim: "Besoins", type: "single", text: "Selon toi, quel besoin est le plus urgent au Togo ?", options: ["Améliorer la santé", "Développer l'éducation", "Créer plus d'emplois", "Protéger l'environnement"] },
  { dim: "Aspiration", type: "text", text: "Où t'imagines-tu dans 10 ans ? Décris en quelques mots." },
];

/** E12-E18 — Flux orientation complet (présentation → questions → traitement) */
export default function KOrientation() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"intro" | "question" | "loading">("intro");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, unknown>>({});
  const [current, setCurrent] = useState<unknown>(null);
  const [showGuide, setShowGuide] = useState(false);

  const q = QUESTIONS[qIdx];
  const answered = current !== null && current !== "" && (Array.isArray(current) ? current.length > 0 : true);

  const next = () => {
    setAnswers({ ...answers, [qIdx]: current });
    setCurrent(null);
    setShowGuide(false);
    if (qIdx + 1 < QUESTIONS.length) {
      setQIdx(qIdx + 1);
    } else {
      setPhase("loading");
      setTimeout(() => navigate("/web-kpekpe/app/resultats"), 3500);
    }
  };

  const prev = () => {
    if (qIdx > 0) {
      setQIdx(qIdx - 1);
      setCurrent(answers[qIdx - 1] ?? null);
    }
  };

  return (
    <KAppLayout
      breadcrumbs={[{ label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" }, { label: "Orientation" }]}
      kpeContext="Parcours d'orientation"
      kpeInitialMessage="Je suis là pour te guider. Si une question te bloque, dis-le moi !"
    >
      {/* E12 — Intro */}
      {phase === "intro" && (
        <div className="max-w-2xl mx-auto text-center py-8">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">Ton parcours d'orientation</h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Je vais te poser environ 18 questions courtes. Il n'y a pas de bonne ou mauvaise réponse — sois juste sincère.
          </p>
          <div className="mt-8">
            <KpeBubble>
              Prends ton temps. Tu peux faire une pause et reprendre plus tard, ta progression est sauvegardée.
            </KpeBubble>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <KButton variant="primary" size="lg" onClick={() => setPhase("question")}>
              <Play className="w-4 h-4" /> C'est parti !
            </KButton>
            <KButton variant="outline" size="lg" onClick={() => navigate("/web-kpekpe/app/mon-parcours")}>
              Plus tard
            </KButton>
          </div>
        </div>
      )}

      {/* E13-E16 — Questions */}
      {phase === "question" && (
        <div className="max-w-2xl mx-auto">
          {/* Progression */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span className="font-semibold text-primary">{q.dim}</span>
              <span>Question {qIdx + 1} sur {QUESTIONS.length}</span>
            </div>
            <KProgress value={qIdx + 1} max={QUESTIONS.length} />
          </div>

          <KCard className="p-6 md:p-10 space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-black text-foreground leading-snug">
              {q.text}
            </h2>

            {/* Choix unique */}
            {q.type === "single" && (
              <div className="space-y-2">
                {q.options!.map((opt) => {
                  const selected = current === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setCurrent(opt)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all flex items-center justify-between",
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-input hover:border-primary/40"
                      )}
                    >
                      {opt}
                      {selected && <Check className="w-5 h-5 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Choix multiple */}
            {q.type === "multi" && (
              <div className="space-y-2">
                {q.options!.map((opt) => {
                  const arr = (current as string[] | null) ?? [];
                  const selected = arr.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() =>
                        setCurrent(selected ? arr.filter((x) => x !== opt) : [...arr, opt])
                      }
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all flex items-center gap-3",
                        selected ? "border-primary bg-primary/10 text-primary" : "border-input hover:border-primary/40"
                      )}
                    >
                      <div className={cn("w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center", selected ? "bg-primary border-primary" : "border-input")}>
                        {selected && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Texte libre */}
            {q.type === "text" && (
              <textarea
                value={(current as string) ?? ""}
                onChange={(e) => setCurrent(e.target.value)}
                rows={5}
                placeholder="Décris ce que tu ressens…"
                className="w-full p-4 rounded-xl border border-input bg-background text-sm resize-none outline-none focus:ring-2 focus:ring-ring"
              />
            )}

            {/* Échelle */}
            {q.type === "scale" && (
              <div>
                <div className="flex gap-2 justify-between">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      onClick={() => setCurrent(v)}
                      className={cn(
                        "flex-1 h-14 rounded-xl border-2 font-display font-bold text-lg transition-all",
                        current === v ? "border-primary bg-primary text-primary-foreground" : "border-input hover:border-primary/40"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Pas du tout</span>
                  <span>Totalement</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowGuide((s) => !s)}
              className="text-sm text-primary font-semibold hover:underline flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" /> J'ai besoin d'aide
            </button>

            {showGuide && (
              <KpeBubble>
                Pas de panique. Prends un instant : pense à un moment récent où tu t'es senti à l'aise. Qu'étais-tu en train de faire ? Réponds simplement avec ce qui te vient d'abord à l'esprit.
              </KpeBubble>
            )}
          </KCard>

          <div className="mt-6 flex justify-between gap-3">
            <KButton variant="ghost" onClick={prev} disabled={qIdx === 0}>
              <ArrowLeft className="w-4 h-4" /> Question précédente
            </KButton>
            <KButton variant="primary" onClick={next} disabled={!answered}>
              {qIdx + 1 === QUESTIONS.length ? "Terminer" : "Continuer"} <ArrowRight className="w-4 h-4" />
            </KButton>
          </div>
        </div>
      )}

      {/* E18 — Traitement */}
      {phase === "loading" && (
        <div className="max-w-lg mx-auto text-center py-20">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <Sparkles className="w-8 h-8 text-primary absolute inset-0 m-auto" />
          </div>
          <h2 className="font-display text-2xl font-black text-foreground">Kpé analyse tes réponses…</h2>
          <p className="mt-2 text-muted-foreground">Nous préparons ton profil personnalisé.</p>
        </div>
      )}
    </KAppLayout>
  );
}
