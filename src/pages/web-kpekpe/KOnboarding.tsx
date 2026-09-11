import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, MapPin, GraduationCap, Languages } from "lucide-react";
import { KPublicLayout } from "@/components/web-kpekpe/KPublicLayout";
import { KButton, KCard, KpeBubble, KProgress } from "@/components/web-kpekpe/KPrimitives";
import { cn } from "@/lib/utils";

/** E07-E09 — Onboarding en 3 étapes */
const REGIONS = ["Maritime", "Plateaux", "Centrale", "Kara", "Savanes"];
const NIVEAUX = ["Collège", "Lycée", "Post-Bac / Université", "Reconversion"];
const SERIES = ["Série A", "Série C", "Série D", "Série G", "Série F"];
const LANGUES = ["Français", "Éwé", "Kabiyè", "Anglais", "Mina", "Autres"];

export default function KOnboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    prenom: "",
    nom: "",
    region: "",
    niveau: "",
    serie: "",
    langues: [] as string[],
  });
  const navigate = useNavigate();
  const showSerie = data.niveau === "Lycée";

  const toggleLangue = (l: string) =>
    setData((d) => ({
      ...d,
      langues: d.langues.includes(l) ? d.langues.filter((x) => x !== l) : [...d.langues, l],
    }));

  const canContinue = [
    () => data.prenom.trim() && data.nom.trim(),
    () => data.region && data.niveau && (!showSerie || data.serie),
    () => data.langues.length > 0,
  ][step]?.();

  const kpeMessages = [
    "Bonjour ! Commençons par faire connaissance.",
    "Merci. Maintenant, parle-moi de ton parcours scolaire.",
    "Dernière étape : quelles langues parles-tu au quotidien ?",
  ];

  return (
    <KPublicLayout>
      <div className="max-w-xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Progression */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Étape {step + 1} sur 3</span>
            <span>{Math.round(((step + 1) / 3) * 100)}%</span>
          </div>
          <KProgress value={step + 1} max={3} />
        </div>

        <KCard className="p-6 md:p-10 space-y-6">
          <KpeBubble>{kpeMessages[step]}</KpeBubble>

          {/* Étape 1 */}
          {step === 0 && (
            <div className="space-y-4">
              <h1 className="font-display text-xl font-black text-foreground">Qui es-tu ?</h1>
              <div>
                <label className="block text-sm font-medium mb-1.5">Prénom</label>
                <input
                  value={data.prenom}
                  onChange={(e) => setData({ ...data, prenom: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Kofi"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Nom</label>
                <input
                  value={data.nom}
                  onChange={(e) => setData({ ...data, nom: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Mensah"
                  required
                />
              </div>
            </div>
          )}

          {/* Étape 2 */}
          {step === 1 && (
            <div className="space-y-4">
              <h1 className="font-display text-xl font-black text-foreground">Ta situation scolaire</h1>
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Ta région</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setData({ ...data, region: r })}
                      className={cn(
                        "h-11 px-3 rounded-lg border text-sm font-medium transition-all",
                        data.region === r
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-input text-foreground hover:border-primary/40"
                      )}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Niveau d'études</label>
                <div className="grid grid-cols-2 gap-2">
                  {NIVEAUX.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setData({ ...data, niveau: n, serie: n === "Lycée" ? data.serie : "" })}
                      className={cn(
                        "h-11 px-3 rounded-lg border text-sm font-medium transition-all",
                        data.niveau === n
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-input text-foreground hover:border-primary/40"
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              {showSerie && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Série</label>
                  <div className="flex flex-wrap gap-2">
                    {SERIES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setData({ ...data, serie: s })}
                        className={cn(
                          "px-4 h-9 rounded-full border text-sm font-medium transition-all",
                          data.serie === s
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-input text-foreground hover:border-primary/40"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Étape 3 */}
          {step === 2 && (
            <div className="space-y-4">
              <h1 className="font-display text-xl font-black text-foreground">Tes langues</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5" /> Sélectionne toutes celles que tu parles.
              </p>
              <div className="flex flex-wrap gap-2">
                {LANGUES.map((l) => {
                  const selected = data.langues.includes(l);
                  return (
                    <button
                      key={l}
                      type="button"
                      onClick={() => toggleLangue(l)}
                      className={cn(
                        "px-4 h-10 rounded-full border-2 text-sm font-medium transition-all flex items-center gap-1.5",
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-input text-foreground hover:border-primary/40"
                      )}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </KCard>

        {/* Actions */}
        <div className="mt-6 flex justify-between gap-3">
          <KButton
            variant="ghost"
            size="md"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ArrowLeft className="w-4 h-4" /> Retour
          </KButton>
          <KButton
            variant="primary"
            size="md"
            disabled={!canContinue}
            onClick={() => {
              if (step < 2) setStep(step + 1);
              else navigate("/web-kpekpe/app/mon-parcours");
            }}
          >
            {step === 2 ? "Découvrir mon espace" : "Continuer"} <ArrowRight className="w-4 h-4" />
          </KButton>
        </div>
      </div>
    </KPublicLayout>
  );
}
