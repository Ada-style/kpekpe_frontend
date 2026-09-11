import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WebLogo } from "@/components/web/WebLogo";
import {
  Compass, ShieldCheck, FileCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Building2, Award
} from "lucide-react";

export default function WebOnboardingConseiller() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6 justify-between">
        <WebLogo size={28} variant="full" />
        <div className="text-xs text-muted-foreground font-medium">
          Accréditation Conseiller d'Orientation • Étape {step} sur 2
        </div>
      </header>

      <div className="flex-1 max-w-xl w-full mx-auto px-6 py-10">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 1 : Rattachement Institutionnel</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Votre profil professionnel
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Indiquez votre cadre d'exercice au Togo (Établissement scolaire, Université de Lomé, Cabinet privé).
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-foreground block mb-1">Établissement ou Cabinet d'exercice *</label>
                <input
                  type="text"
                  placeholder="Ex: Centre d'Orientation Universitaire de Lomé (COUL)"
                  className="w-full p-3 rounded-xl border border-input bg-background outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Titre professionnel *</label>
                <select className="w-full p-3 rounded-xl border border-input bg-background outline-none">
                  <option>Conseiller d'Orientation Psychologue (COP)</option>
                  <option>Inspecteur Pédagogique d'Orientation</option>
                  <option>Enseignant Référent Orientation</option>
                  <option>Psychologue de l'Éducation</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">Ville de résidence principale :</label>
                <select className="w-full p-3 rounded-xl border border-input bg-background outline-none">
                  <option>Lomé (Grand Lomé)</option>
                  <option>Kpalimé</option>
                  <option>Atakpamé</option>
                  <option>Sokodé</option>
                  <option>Kara</option>
                  <option>Dapaong</option>
                </select>
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
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Étape 2 : Agrément & Charte Déontologique</span>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-1">
                Engagement de validation d'orientation
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                En tant que conseiller certifié Kpékpé, vous recevez les demandes payantes des parents pour émettre des avis d'orientation fondés et bienveillants.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Missions du Conseiller Kpékpé :</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Analyser les notes du bulletin scolaire togolais (SVT, Maths, PCT, etc.).</li>
                <li>Confirmer ou réorienter les vœux vers les filières adaptées (Série D, C4, A4, Médecine, Ingénierie, Métiers porteurs).</li>
                <li>Répondre aux questions spécifiques posées par les parents lors de leur commande.</li>
              </ul>
            </div>

            <label className="flex items-start gap-3 cursor-pointer text-xs">
              <input type="checkbox" defaultChecked className="mt-0.5 rounded" />
              <span className="text-muted-foreground leading-relaxed">
                J'atteste sur l'honneur être qualifié pour l'orientation scolaire et m'engage à traiter les dossiers sous 24h ouvrées.
              </span>
            </label>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-medium hover:bg-muted"
              >
                Retour
              </button>
              <button
                onClick={() => navigate("/web-app/conseiller-dashboard")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
              >
                <span>Ouvrir mon Tableau de Bord Conseiller</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
