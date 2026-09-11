import { useState } from "react";
import { WebLayout } from "@/components/web/WebLayout";
import { Check, Smartphone, ArrowRight } from "lucide-react";

export default function WebPaiementsAbonnements() {
  const [selectedPlan, setSelectedPlan] = useState<"mensuel" | "annuel" | "repetiteur">("annuel");
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState<"tmoney" | "moov">("tmoney");
  const [showModal, setShowModal] = useState(false);

  const handlePay = () => {
    if (!phone) {
      alert("Veuillez saisir votre numéro de téléphone T-Money ou Moov Money.");
      return;
    }
    setShowModal(true);
  };

  return (
    <WebLayout
      breadcrumbs={[{ label: "Abonnements & Paiements" }]}
      kpeContext="Formules d'abonnement Kpékpé"
      kpeInitialMessage="Choisis ta formule d'abonnement pour débloquer l'accès illimité à tous les cours et au suivi de ton Arbre de Sagesse."
    >
      <div className="max-w-5xl mx-auto pb-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-black text-foreground">
            Formules d'Abonnement Kpékpé
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Paiement sécurisé par Mobile Money (T-Money ou Moov Money). Sans engagement.
          </p>
        </div>

        {/* Grille des formules scolaires (Pour la famille) */}
        <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-6 mb-10 items-stretch">
          {/* Mensuel élève */}
          <div
            onClick={() => setSelectedPlan("mensuel")}
            className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all ${
              selectedPlan === "mensuel"
                ? "border-primary bg-primary/5 shadow-md ring-2 ring-primary/20"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                Formule Mensuelle
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display text-3xl font-black text-foreground">599</span>
                <span className="text-xs text-muted-foreground font-semibold">FCFA / mois</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Accès complet pour réviser avant un devoir ou tester la plateforme.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tous les cours & labos virtuels (SVT, Chimie)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Arbre de Sagesse & Flammes d'apprentissage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tuteur IA Kpé illimité</span>
                </li>
              </ul>
            </div>
            <button className={`w-full py-2.5 rounded-xl text-xs font-bold mt-6 transition-colors ${
              selectedPlan === "mensuel" ? "bg-primary text-primary-foreground" : "border border-border text-foreground"
            }`}>
              Choisir Mensuel
            </button>
          </div>

          {/* Annuel élève (Le plus populaire) */}
          <div
            onClick={() => setSelectedPlan("annuel")}
            className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all relative ${
              selectedPlan === "annuel"
                ? "border-primary bg-primary/10 shadow-lg ring-2 ring-primary"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-wider">
              Le plus populaire (-23%)
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                Formule Annuelle Scolaire
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display text-3xl font-black text-foreground">5 499</span>
                <span className="text-xs text-muted-foreground font-semibold">FCFA / an</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Couvre l'intégralité de l'année scolaire (moins de 460 F/mois).
              </p>
              <ul className="space-y-2.5 text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tout le catalogue de cours, quiz & simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Croissance de l'Arbre de sagesse sur 9 mois</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fiches téléchargeables hors-ligne</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Rapport d'orientation officiel</span>
                </li>
              </ul>
            </div>
            <button className={`w-full py-2.5 rounded-xl text-xs font-bold mt-6 transition-colors ${
              selectedPlan === "annuel" ? "bg-primary text-primary-foreground shadow-sm" : "border border-border text-foreground"
            }`}>
              Choisir Annuel
            </button>
          </div>
        </div>

        {/* Formulaire Mobile Money sans mention d'agrégateur */}
        <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground">
                Règlement par Mobile Money
              </h3>
              <p className="text-xs text-muted-foreground">
                T-Money (Togocel) & Moov Money
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-foreground block mb-2">Choisis ton opérateur :</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setOperator("tmoney")}
                  className={`p-3 rounded-xl border text-center font-bold transition-all ${
                    operator === "tmoney" ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"
                  }`}
                >
                  T-Money (Togocel)
                </button>
                <button
                  onClick={() => setOperator("moov")}
                  className={`p-3 rounded-xl border text-center font-bold transition-all ${
                    operator === "moov" ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"
                  }`}
                >
                  Moov Money
                </button>
              </div>
            </div>

            <div>
              <label className="font-semibold text-foreground block mb-1">Numéro de téléphone :</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+228 90 XX XX XX ou 96 XX XX XX"
                className="w-full p-3 rounded-xl border border-border bg-background text-sm font-mono outline-none focus:border-primary"
              />
            </div>
          </div>

          <button
            onClick={handlePay}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Payer par {operator === "tmoney" ? "T-Money" : "Moov Money"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Modal de confirmation USSD */}
        {showModal && (
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 max-w-md w-full shadow-lg text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Notification envoyée sur votre téléphone
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Veuillez confirmer la transaction sur votre téléphone en saisissant votre code secret <span className="font-bold text-foreground">{operator.toUpperCase()}</span>.
              </p>
              <div className="p-3.5 rounded-xl bg-muted text-xs font-mono text-muted-foreground">
                Référence transaction : KP-TX-{Date.now().toString().slice(-6)}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
              >
                J'ai validé mon paiement
              </button>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
