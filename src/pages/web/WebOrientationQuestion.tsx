import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { WebLayout } from "@/components/web/WebLayout";
import { ArrowLeft, ArrowRight, HelpCircle, Check } from "lucide-react";
import kpeAvatar from "@/assets/icone_ia.png";
import { cn } from "@/lib/utils";

type QType = "unique" | "multiple" | "libre" | "echelle";

const QUESTIONS: { type: QType; dim: string; q: string; opts?: string[] }[] = [
  { type: "unique", dim: "Ce que tu aimes faire", q: "Parmi ces activités, laquelle te ressemble le plus ?", opts: ["Résoudre un problème logique", "Créer quelque chose de mes mains", "Aider quelqu'un", "Convaincre un groupe"] },
  { type: "multiple", dim: "Ce dans quoi tu es bon", q: "Dans quelles matières te sens-tu le plus à l'aise ? (plusieurs choix)", opts: ["Mathématiques", "Français / Littérature", "Sciences naturelles", "Histoire-Géo", "Anglais", "Arts"] },
  { type: "libre", dim: "Ce dont le monde a besoin", q: "Si tu pouvais changer une chose au Togo, laquelle serait-ce ?" },
  { type: "echelle", dim: "Ce pour quoi tu peux être payé", q: "À quel point es-tu prêt à faire des études longues (5+ ans) ?" },
];

export default function WebOrientationQuestion() {
  const [params, setParams] = useSearchParams();
  const stepParam = parseInt(params.get("step") || "1");
  const idx = Math.min(QUESTIONS.length, Math.max(1, stepParam)) - 1;
  const q = QUESTIONS[idx];
  const total = 18;
  const [help, setHelp] = useState(false);

  const setStep = (n: number) => setParams({ step: String(n) });
  const next = () => idx + 1 < QUESTIONS.length ? setStep(idx + 2) : window.location.assign("/web-app/orientation/calcul");

  return (
    <WebLayout breadcrumbs={[{ label: "Orientation", to: "/web-app/orientation" }, { label: `Question ${idx + 1}` }]}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-primary font-semibold">{q.dim}</p>
            <p className="text-sm text-muted-foreground">Question {idx + 1} / {total}</p>
          </div>
          <button onClick={() => setHelp(!help)} className="h-10 px-4 rounded-lg border border-border text-sm flex items-center gap-2 hover:bg-muted">
            <HelpCircle className="w-4 h-4" /> J'ai besoin d'aide
          </button>
        </div>
        <div className="h-1 rounded-full bg-muted mb-8">
          <div className="h-full kpe-gradient-primary rounded-full transition-all" style={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>

        {/* Type switcher (démo) */}
        <div className="mb-4 flex gap-1 text-[10px] p-1 bg-muted rounded-lg w-fit">
          {(["unique", "multiple", "libre", "echelle"] as QType[]).map((t, i) => (
            <Link
              key={t}
              to={`/web-app/orientation/questionnaire?step=${i + 1}`}
              className={cn("px-2 py-1 rounded", idx === i ? "bg-card font-semibold text-foreground" : "text-muted-foreground")}
            >
              {t}
            </Link>
          ))}
        </div>

        {/* Question */}
        <h1 className="font-display text-2xl md:text-3xl font-black leading-snug">{q.q}</h1>

        <div className="mt-8">
          {q.type === "unique" && (
            <div className="space-y-3">
              {q.opts?.map((o, i) => (
                <SingleChoice key={o} label={o} idx={i} />
              ))}
            </div>
          )}
          {q.type === "multiple" && (
            <div className="grid sm:grid-cols-2 gap-3">
              {q.opts?.map((o) => (
                <MultiChoice key={o} label={o} />
              ))}
            </div>
          )}
          {q.type === "libre" && (
            <textarea placeholder="Écris ta réponse ici…" className="w-full min-h-[160px] p-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none resize-none" />
          )}
          {q.type === "echelle" && <Scale />}
        </div>

        <div className="mt-10 flex justify-between">
          <button
            disabled={idx === 0}
            onClick={() => setStep(idx)}
            className="h-12 px-5 rounded-xl border border-border font-medium flex items-center gap-2 disabled:opacity-30 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4" /> Précédente
          </button>
          <button onClick={next} className="h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
            Continuer <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Panneau guidage Kpékpé */}
        {help && (
          <div className="fixed inset-0 bg-foreground/40 z-40" onClick={() => setHelp(false)} />
        )}
        <aside className={cn("fixed top-16 right-0 h-[calc(100vh-4rem)] w-full md:w-[360px] bg-card border-l border-border z-50 p-6 transition-transform", help ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-border flex items-center justify-center bg-card shadow-sm">
              <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold">Kpékpé — Guidage</p>
          </div>
          <p className="text-sm text-foreground">
            Pas d'inquiétude, cette question n'a pas de bonne réponse. Prends un moment et pense à ce que tu ressens vraiment.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Une piste : qu'est-ce qui te plaît quand tu n'es pas à l'école ? Qu'est-ce qui te fait perdre la notion du temps ?
          </p>
          <button onClick={() => setHelp(false)} className="mt-6 w-full h-10 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
            Revenir à la question
          </button>
        </aside>
      </div>
    </WebLayout>
  );
}

function SingleChoice({ label, idx }: { label: string; idx: number }) {
  const [sel, setSel] = useState<number | null>(null);
  const active = sel === idx;
  return (
    <button
      onClick={() => setSel(idx)}
      className={cn(
        "w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition",
        active ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
      )}
    >
      <span className="text-sm font-medium">{label}</span>
      {active && <Check className="w-4 h-4 text-primary" />}
    </button>
  );
}

function MultiChoice({ label }: { label: string }) {
  const [sel, setSel] = useState(false);
  return (
    <button
      onClick={() => setSel(!sel)}
      className={cn(
        "p-4 rounded-xl border-2 text-left flex items-center gap-3 transition",
        sel ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
      )}
    >
      <span className={cn("w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0", sel ? "bg-primary border-primary" : "border-border")}>
        {sel && <Check className="w-3 h-3 text-primary-foreground" />}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function Scale() {
  const [val, setVal] = useState(3);
  return (
    <div>
      <div className="flex justify-between text-xs text-muted-foreground mb-3">
        <span>Pas du tout</span><span>Totalement</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setVal(n)}
            className={cn(
              "flex-1 h-16 rounded-xl border-2 font-display font-black text-xl transition",
              val === n ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"
            )}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
