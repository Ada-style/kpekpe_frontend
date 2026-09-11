import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";

const REGIONS = ["Maritime", "Plateaux", "Centrale", "Kara", "Savanes"];
const NIVEAUX = ["Collège", "Lycée", "Bac obtenu", "Étudiant supérieur", "En reconversion"];
const SERIES = ["A4", "C", "D", "F", "G"];
const LANGUES = ["Français", "Éwé", "Kabiyè", "Anglais", "Autre"];

export default function WebOnboarding() {
  const [params, setParams] = useSearchParams();
  const step = Math.min(3, Math.max(1, parseInt(params.get("step") || "1")));

  const setStep = (n: number) => setParams({ step: String(n) });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6">
        <WebLogo size={28} variant="mark" />
        <div className="ml-auto text-sm text-muted-foreground">Étape {step} / 3</div>
      </header>

      <div className="h-1 bg-muted">
        <div className="h-full kpe-gradient-primary transition-all" style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <div className="flex-1 max-w-xl w-full mx-auto px-6 py-12">
        {/* Message Kpékpé */}
        <div className="flex gap-3 mb-8">
          <div className="w-10 h-10 rounded-full kpe-gradient-primary flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
            {step === 1 && "Commençons par faire connaissance. Comment t'appelles-tu ?"}
            {step === 2 && "Parle-moi un peu de ta situation actuelle. Cela m'aidera à mieux te conseiller."}
            {step === 3 && "Dernière étape ! Dans quelles langues es-tu à l'aise ?"}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-5">
            <h1 className="font-display text-3xl font-black">Qui es-tu ?</h1>
            <Field label="Prénom" placeholder="Kofi" />
            <Field label="Nom" placeholder="Adjovi" />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h1 className="font-display text-3xl font-black">Ta situation scolaire</h1>
            <Select label="Région du Togo" options={REGIONS} />
            <Select label="Niveau d'études" options={NIVEAUX} />
            <Select label="Série (si lycée)" options={SERIES} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h1 className="font-display text-3xl font-black">Tes langues</h1>
            <p className="text-sm text-muted-foreground">Sélectionne toutes celles que tu parles.</p>
            <div className="flex flex-wrap gap-2">
              {LANGUES.map((l) => (
                <button key={l} className="h-11 px-4 rounded-xl border border-input text-sm hover:border-primary hover:bg-primary/5 transition">
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="h-12 px-5 rounded-xl border border-border font-medium flex items-center gap-2 hover:bg-muted">
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
          ) : <div />}
          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} className="h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
              Continuer <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link to="/web-app/mon-parcours?state=empty" className="h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
              Découvrir mon espace <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <input placeholder={placeholder} className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none" />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <select className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none">
        <option value="">Choisir…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
