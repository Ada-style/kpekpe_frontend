import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WebLogo } from "@/components/web/WebLogo";
import {
  Users, Compass, ShieldCheck, ArrowRight, ArrowLeft,
  GraduationCap, CheckCircle2, HeartHandshake
} from "lucide-react";

export default function WebOnboardingParent() {
  const [step, setStep] = useState(1);
  const [enfantClasse, setEnfantClasse] = useState("Terminale D");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6 justify-between">
        <WebLogo size={28} variant="full" />
        <div className="text-xs text-muted-foreground font-medium">
          Espace Parents d'Élèves • Étape {step} sur 2
        </div>
      </header>

      <div className="flex-1 max-w-xl w-full mx-auto px-6 py-10">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 1 : Votre Enfant</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                La scolarité de votre enfant
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Indiquez les informations de l'élève que vous souhaitez accompagner sur Kpékpé.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-foreground block mb-1">Prénom de l'enfant *</label>
                  <input
                    type="text"
                    defaultValue="Koffi"
                    className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                  />
                </div>
                <div>
                  <label className="font-semibold text-foreground block mb-1">Nom de famille *</label>
                  <input
                    type="text"
                    defaultValue="Mensah"
                    className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Classe actuelle *</label>
                <select
                  value={enfantClasse}
                  onChange={(e) => setEnfantClasse(e.target.value)}
                  className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                >
                  <optgroup label="Lycée">
                    <option value="Terminale D">Terminale D (BAC D)</option>
                    <option value="Terminale C4">Terminale C4 (BAC C4)</option>
                    <option value="Terminale A4">Terminale A4 (BAC A4)</option>
                    <option value="Première D">Première D</option>
                    <option value="Seconde S">Seconde S</option>
                  </optgroup>
                  <optgroup label="Collège">
                    <option value="3ème">3ème (Prépa BEPC)</option>
                    <option value="4ème">4ème</option>
                    <option value="5ème">5ème</option>
                    <option value="6ème">6ème</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Établissement scolaire :</label>
                <input
                  type="text"
                  placeholder="Ex: Lycée de Tokoin, Collège Protestant Lomé..."
                  className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
              >
                <span>Continuer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 2 : Vos Accès Parents</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Ce que vous pouvez faire dès maintenant
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Votre espace parent est gratuit et vous donne un contrôle total sur l'orientation et le soutien de votre enfant.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Suivre son orientation scolaire</div>
                  <div className="text-muted-foreground leading-relaxed mt-0.5">
                    Consultez l'analyse de son bulletin et les filières conseillées. Vous pouvez à tout moment demander l'avis d'un conseiller agréé.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Trouver un répétiteur certifié à Lomé</div>
                  <div className="text-muted-foreground leading-relaxed mt-0.5">
                    Contactez directement des enseignants vérifiés (CNI et diplômes archivés) dans votre quartier sans engagement immédiat.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-medium hover:bg-muted"
              >
                Retour
              </button>
              <button
                onClick={() => navigate("/web-app/orientation-parent")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
              >
                <span>Accéder à l'orientation de mon enfant</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
