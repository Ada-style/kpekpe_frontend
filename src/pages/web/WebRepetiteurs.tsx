import { useState } from "react";
import { WebLayout } from "@/components/web/WebLayout";
import {
  ShieldCheck, Star, MapPin, Calendar, Clock, Search,
  Award, CheckCircle2, UserCheck, FileCheck, Phone
} from "lucide-react";

const QUARTIERS = ["Tous les quartiers", "Agoè-Nyivé", "Tokoin", "Bè", "Adidogomé", "Hedzranawoé", "Baguida"];
const MATIERES = ["Toutes matières", "SVT (Série D)", "Mathématiques (Série D)", "Physique-Chimie (Série D)", "Français", "Philosophie"];

const REPETITEURS = [
  {
    id: "rep-1",
    nom: "Koffi Amégan",
    initiales: "KA",
    titre: "Professeur certifié en Mathématiques & Sciences Physiques",
    diplome: "Master en Mathématiques Appliquées (Université de Lomé)",
    quartier: "Agoè-Nyivé",
    experience: "7 ans d'expérience",
    tauxReussite: "98% au BAC Série D & C4",
    tarif: "2 500 FCFA / heure",
    cniVerified: true, // CNI archivée chez Kpékpé
    diplomeVerified: true,
    rating: 4.9,
    reviewsCount: 24,
    matieres: ["Mathématiques (Série D)", "Physique-Chimie (Série D)"],
    classes: ["Première D", "Terminale D", "Terminale C4"],
    disponibilites: ["Mercredi après-midi", "Samedi matin", "Dimanche"],
  },
  {
    id: "rep-2",
    nom: "Messan Lawson",
    initiales: "ML",
    titre: "Enseignant spécialisé en Sciences de la Vie et de la Terre (SVT)",
    diplome: "CAPES Sciences Naturelles (Université de Kara)",
    quartier: "Adidogomé",
    experience: "9 ans d'expérience",
    tauxReussite: "96% de mention au BAC D",
    tarif: "3 000 FCFA / heure",
    cniVerified: true,
    diplomeVerified: true,
    rating: 5.0,
    reviewsCount: 31,
    matieres: ["SVT (Série D)", "Physique-Chimie (Série D)"],
    classes: ["Seconde S", "Première D", "Terminale D"],
    disponibilites: ["Mardi soir", "Vendredi soir", "Samedi après-midi"],
  },
  {
    id: "rep-3",
    nom: "Abla Dossou",
    initiales: "AD",
    titre: "Répétitrice d'excellence en Français & Philosophie",
    diplome: "Licence de Lettres Modernes (Université de Lomé)",
    quartier: "Tokoin",
    experience: "5 ans d'expérience",
    tauxReussite: "95% de réussite",
    tarif: "2 000 FCFA / heure",
    cniVerified: true,
    diplomeVerified: true,
    rating: 4.8,
    reviewsCount: 19,
    matieres: ["Français", "Philosophie"],
    classes: ["3ème", "Première A/D", "Terminale D"],
    disponibilites: ["Lundi soir", "Jeudi soir", "Samedi"],
  },
];

export default function WebRepetiteurs() {
  const [selectedQuartier, setSelectedQuartier] = useState("Tous les quartiers");
  const [selectedMatiere, setSelectedMatiere] = useState("Toutes matières");
  const [selectedRepetiteur, setSelectedRepetiteur] = useState<typeof REPETITEURS[0] | null>(null);

  const filtered = REPETITEURS.filter((r) => {
    const qMatch = selectedQuartier === "Tous les quartiers" || r.quartier === selectedQuartier;
    const mMatch = selectedMatiere === "Toutes matières" || r.matieres.includes(selectedMatiere);
    return qMatch && mMatch;
  });

  return (
    <WebLayout
      breadcrumbs={[{ label: "Répétiteurs Lomé" }]}
      kpeContext="Marketplace vérifiée Lomé"
      kpeInitialMessage="Tous les répétiteurs de cette liste ont fourni leur carte d'identité officielle et leurs diplômes avant d'être validés par Kpékpé."
    >
      <div className="max-w-6xl mx-auto pb-12">
        {/* En-tête avec garantie parent */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 mb-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantie Totale Parents Kpékpé</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Répétiteurs Vérifiés à Domicile — Lomé (Spécial Série D)
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pour rassurer les parents : <span className="font-bold text-foreground">la Carte Nationale d'Identité (CNI)</span> et les diplômes de chaque enseignant sont contrôlés et archivés par l'administration de Kpékpé avant toute publication.
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1">
            <select
              value={selectedQuartier}
              onChange={(e) => setSelectedQuartier(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-xs sm:text-sm font-medium outline-none focus:border-primary"
            >
              {QUARTIERS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <select
              value={selectedMatiere}
              onChange={(e) => setSelectedMatiere(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-xs sm:text-sm font-medium outline-none focus:border-primary"
            >
              {MATIERES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Liste des répétiteurs */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((rep) => (
            <div
              key={rep.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar avec initiales élégantes */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-black flex items-center justify-center text-sm border border-primary/20 flex-shrink-0">
                      {rep.initiales}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {rep.nom}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                          <ShieldCheck className="w-3 h-3" />
                          <span>CNI Vérifiée</span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        {rep.titre}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg bg-accent/20 text-foreground">
                    <Star className="w-3.5 h-3.5 fill-accent-foreground text-accent-foreground" />
                    <span>{rep.rating}</span>
                    <span className="text-muted-foreground font-normal">({rep.reviewsCount})</span>
                  </div>
                </div>

                {/* Badges de conformité officielle */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-[11px] text-muted-foreground space-y-1.5 my-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-primary" />
                    <span>Pièce d'identité officielle vérifiée & archivée chez Kpékpé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5 text-primary" />
                    <span>{rep.diplome}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Lomé • Quartier {rep.quartier} • {rep.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>Taux d'admission : <strong className="text-foreground">{rep.tauxReussite}</strong></span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {rep.matieres.map((m) => (
                    <span key={m} className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-foreground">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Enseignant disponible à domicile</span>
                </div>

                <button
                  onClick={() => setSelectedRepetiteur(rep)}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Demander une mise en relation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de réservation avec mention parent */}
        {selectedRepetiteur && (
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 max-w-md w-full shadow-lg space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Demande de contact avec {selectedRepetiteur.nom}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Lomé ({selectedRepetiteur.quartier}) • CNI vérifiée & archivée chez Kpékpé
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRepetiteur(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary leading-relaxed">
                <strong>Sécurité garantie :</strong> L'enseignant a fait l'objet d'un contrôle de pièce d'identité et de casier judiciaire. Il vous appellera directement pour convenir d'une première séance d'évaluation à domicile.
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-foreground block mb-1">Matière souhaitée (Série D) :</label>
                  <select className="w-full p-2.5 rounded-xl border border-border bg-background outline-none">
                    {selectedRepetiteur.matieres.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-foreground block mb-1">Numéro de téléphone du parent (T-Money / Moov) :</label>
                  <input
                    type="tel"
                    placeholder="+228 90 XX XX XX ou 96 XX XX XX"
                    className="w-full p-2.5 rounded-xl border border-border bg-background outline-none font-mono"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  onClick={() => setSelectedRepetiteur(null)}
                  className="flex-1 py-2.5 rounded-xl border border-border hover:bg-muted text-xs font-semibold"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    alert("Demande transmise au répétiteur ! Vous serez contacté par téléphone sous 24h.");
                    setSelectedRepetiteur(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                >
                  Confirmer la mise en relation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
