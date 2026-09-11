import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WebLogo } from "@/components/web/WebLogo";
import {
  Briefcase, ShieldCheck, FileCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Upload, MapPin, Award
} from "lucide-react";

export default function WebOnboardingRepetiteur() {
  const [step, setStep] = useState(1);
  const [cniUploaded, setCniUploaded] = useState(false);
  const [diplomeUploaded, setDiplomeUploaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6 justify-between">
        <WebLogo size={28} variant="full" />
        <div className="text-xs text-muted-foreground font-medium">
          Accréditation Enseignant • Étape {step} sur 3
        </div>
      </header>

      <div className="flex-1 max-w-xl w-full mx-auto px-6 py-10">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 1 : Compétences & Séries</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Vos matières et niveaux d'enseignement
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Indiquez les classes togolaises et les matières dans lesquelles vous excellez.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-foreground block mb-1">Diplôme le plus élevé *</label>
                <input
                  type="text"
                  placeholder="Ex: Master en Mathématiques (Université de Lomé)"
                  className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Années d'expérience d'enseignement *</label>
                <select className="w-full p-3 rounded-xl border border-input bg-background outline-none">
                  <option>1 à 3 ans</option>
                  <option>3 à 5 ans</option>
                  <option>5 à 10 ans</option>
                  <option>Plus de 10 ans</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Séries enseignées au Lycée :</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Série D", "Série C4", "Série A4", "Seconde S", "Seconde L", "Collège (BEPC)"].map((s) => (
                    <label key={s} className="p-2.5 rounded-xl border border-border flex items-center gap-2 cursor-pointer hover:border-primary">
                      <input type="checkbox" defaultChecked={s === "Série D" || s === "Collège (BEPC)"} className="rounded" />
                      <span className="font-medium text-foreground">{s}</span>
                    </label>
                  ))}
                </div>
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
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 2 : Zone Géographique</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Vos quartiers d'intervention à Lomé
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Sélectionnez les zones où vous pouvez vous déplacer au domicile des élèves.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <label className="font-semibold text-foreground block mb-2">Quartiers couverts :</label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  "Agoè-Nyivé", "Tokoin", "Bè", "Adidogomé",
                  "Hedzranawoé", "Baguida", "Kégué", "Amoutivé"
                ].map((q) => (
                  <label key={q} className="p-3 rounded-xl border border-border flex items-center gap-2 cursor-pointer hover:border-primary">
                    <input type="checkbox" defaultChecked={q === "Agoè-Nyivé" || q === "Tokoin"} className="rounded" />
                    <span className="font-medium text-foreground">{q}</span>
                  </label>
                ))}
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
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
              >
                <span>Continuer vers le KYC</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 3 : Sécurité & Confiance KYC</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Vérification de vos pièces officielles
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Pour protéger les familles togolaises, chaque répétiteur est validé par notre équipe avant d'être mis en avant.
              </p>
            </div>

            <div className="space-y-4">
              {/* Téléversement CNI */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-border bg-muted/20 space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Carte Nationale d'Identité togolaise (CNI)</div>
                  <div className="text-[11px] text-muted-foreground">Photo nette recto/verso (JPG, PNG ou PDF)</div>
                </div>
                <button
                  type="button"
                  onClick={() => setCniUploaded(true)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    cniUploaded ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {cniUploaded ? "✓ CNI téléversée avec succès" : "Sélectionner ma CNI"}
                </button>
              </div>

              {/* Téléversement Diplôme */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-border bg-muted/20 space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Diplôme universitaire ou d'enseignement</div>
                  <div className="text-[11px] text-muted-foreground">Licence, Master, CAPES ou attestation</div>
                </div>
                <button
                  type="button"
                  onClick={() => setDiplomeUploaded(true)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    diplomeUploaded ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {diplomeUploaded ? "✓ Diplôme téléversé avec succès" : "Sélectionner mon diplôme"}
                </button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Vos documents sont strictement archivés et vérifiés sous 24h par l'administration Kpékpé.</span>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-medium hover:bg-muted"
              >
                Retour
              </button>
              <button
                onClick={() => navigate("/web-app/repetiteur-dashboard")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
              >
                <span>Accéder à mon Espace Répétiteur</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
