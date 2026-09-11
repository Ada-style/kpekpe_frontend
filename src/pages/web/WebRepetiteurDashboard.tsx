import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  Briefcase, ShieldCheck, MapPin, Calendar, Clock, CheckCircle2,
  FileCheck, Phone, User, Award, Plus, Check, Upload, AlertCircle
} from "lucide-react";

export default function WebRepetiteurDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "demandes";

  const [cniUploaded, setCniUploaded] = useState(true);
  const [diplomeUploaded, setDiplomeUploaded] = useState(true);
  const [quartiers, setQuartiers] = useState(["Agoè-Nyivé", "Tokoin", "Hedzranawoé"]);
  const [nouveauQuartier, setNouveauQuartier] = useState("");

  const [disponibilites, setDisponibilites] = useState([
    "Mercredi après-midi (15h - 18h)",
    "Samedi matin (8h - 12h)",
    "Dimanche après-midi (14h - 17h)",
  ]);

  const [demandesContact, setDemandesContact] = useState([
    {
      id: "cont-1",
      parentNom: "Mme Mensah",
      eleveNom: "Koffi (Terminale D)",
      telephone: "+228 90 12 34 56",
      quartier: "Agoè-Nyivé",
      matiere: "SVT (Série D) & PCT",
      statut: "contacté",
      date: "Aujourd'hui à 11h15",
    },
    {
      id: "cont-2",
      parentNom: "M. Lawson",
      eleveNom: "Afiwa (3ème)",
      telephone: "+228 96 78 90 12",
      quartier: "Tokoin",
      matiere: "Mathématiques",
      statut: "nouveau",
      date: "Hier à 16h40",
    },
  ]);

  const handleAjouterQuartier = () => {
    if (nouveauQuartier.trim() && !quartiers.includes(nouveauQuartier.trim())) {
      setQuartiers([...quartiers, nouveauQuartier.trim()]);
      setNouveauQuartier("");
    }
  };

  const handleSupprimerQuartier = (q: string) => {
    setQuartiers(quartiers.filter((item) => item !== q));
  };

  return (
    <WebLayout
      breadcrumbs={[{ label: "Portail Professionnel" }, { label: "Espace Répétiteur" }]}
      kpeContext="Espace Enseignant Certifié Lomé"
      kpeInitialMessage="Bienvenue M. Koffi Amégan. Votre profil est actif et vérifié par l'équipe Kpékpé."
    >
      <div className="max-w-5xl mx-auto pb-12 space-y-8">
        {/* En-tête profil répétiteur avec statut KYC */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary font-black flex items-center justify-center text-xl border border-primary/20">
                KA
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CNI Vérifiée & Archivée chez Kpékpé</span>
                </div>
                <h1 className="font-display text-2xl font-black text-foreground">
                  Koffi Amégan
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Professeur certifié en Mathématiques & Sciences Physiques • 7 ans d'expérience
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-border">
              <span className="text-[11px] text-muted-foreground">Statut d'admissibilité :</span>
              <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                Enseignant Actif sur Lomé
              </span>
            </div>
          </div>
        </div>

        {/* Navigation locale par onglets */}
        <div className="flex border-b border-border gap-2 pb-1">
          <button
            onClick={() => setSearchParams({ tab: "demandes" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "demandes"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Mes Demandes de Cours ({demandesContact.length})</span>
          </button>

          <button
            onClick={() => setSearchParams({ tab: "dispo" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "dispo"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Mes Disponibilités & Quartiers</span>
          </button>

          <button
            onClick={() => setSearchParams({ tab: "kyc" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "kyc"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mes Pièces Officielles (KYC)</span>
          </button>

          <button
            onClick={() => setSearchParams({ tab: "abonnement" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "abonnement"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Mon Abonnement Pro</span>
          </button>
        </div>

        {/* 1. ONGLET : DEMANDES DE CONTACT */}
        {activeTab === "demandes" && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Demandes de contact reçues (Familles de Lomé)</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Ces parents ont demandé à entrer en relation avec vous pour des cours de soutien à domicile.
                </p>
              </div>
              <span className="text-xs font-bold text-foreground px-3 py-1 rounded-full bg-muted">
                {demandesContact.length} demandes
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {demandesContact.map((dem) => (
                <div key={dem.id} className="p-4 rounded-2xl bg-muted/30 border border-border/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">{dem.parentNom}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      dem.statut === "nouveau" ? "bg-accent/30 text-accent-foreground" : "bg-primary/20 text-primary"
                    }`}>
                      {dem.statut === "nouveau" ? "Nouveau contact" : "Appelé"}
                    </span>
                  </div>

                  <div className="text-xs space-y-1 text-muted-foreground">
                    <div>Élève : <strong className="text-foreground">{dem.eleveNom}</strong></div>
                    <div>Quartier : <strong className="text-foreground">{dem.quartier}</strong></div>
                    <div>Matière : <strong className="text-foreground">{dem.matiere}</strong></div>
                    <div>Téléphone parent : <strong className="text-foreground font-mono">{dem.telephone}</strong></div>
                  </div>

                  <div className="pt-2 border-t border-border/50 flex justify-between items-center text-xs">
                    <span className="text-[11px] text-muted-foreground">{dem.date}</span>
                    <a
                      href={`tel:${dem.telephone}`}
                      className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-1.5 hover:bg-primary/90"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Appeler le parent</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ONGLET : DISPONIBILITÉS & QUARTIERS */}
        {activeTab === "dispo" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quartiers de Lomé */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mes Quartiers d'Intervention à Lomé</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Ajoutez ou retirez les zones où vous pouvez vous déplacer pour donner vos cours.
              </p>

              <div className="flex flex-wrap gap-2">
                {quartiers.map((q) => (
                  <span key={q} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-semibold">
                    <span>{q}</span>
                    <button
                      onClick={() => handleSupprimerQuartier(q)}
                      className="w-4 h-4 rounded-full flex items-center justify-center hover:bg-primary/20 text-[10px]"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Ajouter un quartier (ex: Adidogomé, Bè)..."
                  value={nouveauQuartier}
                  onChange={(e) => setNouveauQuartier(e.target.value)}
                  className="flex-1 p-2.5 rounded-xl border border-border bg-background text-xs outline-none"
                />
                <button
                  onClick={handleAjouterQuartier}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                >
                  Ajouter
                </button>
              </div>
            </div>

            {/* Plages horaires de disponibilité */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Mes Créneaux Hebdomadaires Disponibles</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Les familles consultent ces créneaux pour caler leurs séances d'évaluation.
              </p>

              <div className="space-y-2">
                {disponibilites.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/40 border border-border/50 text-xs font-medium text-foreground flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{c}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-primary/15 text-primary font-bold">Actif</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. ONGLET : PIÈCES OFFICIELLES (KYC) */}
        {activeTab === "kyc" && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary" />
                <span>Documents Officiels & Statut de Conformité (KYC)</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                La garantie de sécurité pour les familles de Lomé : vos pièces sont vérifiées et certifiées par Kpékpé.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Carte Nationale d'Identité togolaise</span>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-[11px] bg-primary/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Vérifiée & Archivée</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Numéro CNI : TG-LOM-2024-XXXX • Pièce contrôlée par l'administration Kpékpé.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Diplôme Universitaire (Master)</span>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-[11px] bg-primary/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Conforme</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Master en Mathématiques Appliquées • Université de Lomé.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Upload className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mettre à jour un document ou ajouter une attestation</div>
                  <div className="text-[11px] text-muted-foreground">Casier judiciaire, nouveau diplôme ou attestation CAPES</div>
                </div>
              </div>
              <button
                onClick={() => alert("Formulaire de mise à jour sécurisé ouvert. Vous pouvez déposer votre nouvelle pièce.")}
                className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 font-semibold text-foreground"
              >
                Téléverser
              </button>
            </div>
          </div>
        )}

        {/* 4. ONGLET : MON ABONNEMENT PRO RÉPÉTITEUR (1 mois gratuit puis 2500 FCFA/mois) */}
        {activeTab === "abonnement" && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Formule Visibilité Enseignant Lomé</span>
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Mon Abonnement Professionnel Kpékpé
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Gérez votre référencement auprès des familles togolaises en toute transparence.
              </p>
            </div>

            {/* Statut période d'essai gratuit */}
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-bold text-sm text-foreground">Période d'Essai Gratuit Active (1 Mois)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Il vous reste <strong className="text-primary font-bold">24 jours d'essai 100% gratuit</strong>. Votre profil est visible par tous les parents de Lomé.
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-primary text-primary-foreground flex-shrink-0 text-center">
                Essai Offert
              </span>
            </div>

            {/* Détail du forfait Pro */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-3">
                <span className="font-bold text-muted-foreground text-[11px] uppercase tracking-wider block">
                  Tarif après l'essai gratuit
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-black text-foreground">2 500</span>
                  <span className="text-xs text-muted-foreground font-semibold">FCFA / mois</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Sans engagement de durée. Règlement par Mobile Money (T-Money / Moov Money).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-2">
                <span className="font-bold text-foreground block">Ce que comprend votre abonnement :</span>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Mise en relation directe avec les familles de votre quartier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Badge officiel CNI & Diplômes vérifiés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span><strong>0% de commission</strong> sur le montant de vos cours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action de renouvellement / paiement Mobile Money */}
            <div className="p-4 rounded-2xl bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-foreground block">Prochaine échéance : 1er Octobre 2026</span>
                <span className="text-muted-foreground text-[11px]">Un rappel SMS vous sera envoyé 3 jours avant la fin de l'essai gratuit.</span>
              </div>
              <button
                onClick={() => alert("Paiement anticipé de 2 500 FCFA par T-Money ou Moov Money ouvert.")}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-colors shadow-sm flex-shrink-0"
              >
                Prolonger par Mobile Money (2 500 F)
              </button>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
