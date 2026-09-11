import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  Compass, Bell, CheckCircle2, FileText, UserCheck, Check,
  Clock, ShieldCheck, AlertCircle, MessageSquare, Award, ArrowRight,
  Building2, BookOpen, Download
} from "lucide-react";

interface DemandeOrientation {
  id: string;
  eleveNom: string;
  classe: string;
  lycee: string;
  dateDemande: string;
  status: "pending" | "validated";
  recommandationIA: string;
  bulletinResume: {
    svt: number;
    maths: number;
    pct: number;
    francais: number;
    moyenneGenerale: number;
  };
  noteParent: string;
  avisConseiller?: string;
  filiereValidee?: string;
}

const DEMANDES_INITIALES: DemandeOrientation[] = [
  {
    id: "dem-01",
    eleveNom: "Koffi Mensah",
    classe: "Terminale D",
    lycee: "Lycée de Tokoin (Lomé)",
    dateDemande: "Aujourd'hui à 14h20",
    status: "pending",
    recommandationIA: "Médecine & Pharmacie (FSS - Université de Lomé)",
    bulletinResume: {
      svt: 16.0,
      maths: 14.5,
      pct: 15.0,
      francais: 13.0,
      moyenneGenerale: 14.8,
    },
    noteParent: "Nous hésitons entre médecine à Lomé et une école d'ingénieur agronome. Nous voulons un avis officiel sur ses chances au concours de la FSS.",
  },
  {
    id: "dem-02",
    eleveNom: "Afiwa Lawson",
    classe: "3ème",
    lycee: "Collège Protestant Lomé",
    dateDemande: "Hier à 18h45",
    status: "validated",
    recommandationIA: "Seconde S (Filière Scientifique)",
    bulletinResume: {
      svt: 15.5,
      maths: 17.0,
      pct: 16.5,
      francais: 14.0,
      moyenneGenerale: 15.6,
    },
    noteParent: "Afiwa hésitait avec la Seconde L. Vos conseils nous ont permis de la conforter en Seconde S.",
    avisConseiller: "Excellentes aptitudes d'abstraction mathématique. Orientation Seconde S validée à 100%. Recommandation : viser la Première C4 l'an prochain.",
    filiereValidee: "Seconde S (Scientifique)",
  },
];

export default function WebConseillerDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "dossiers";

  const [demandes, setDemandes] = useState<DemandeOrientation[]>(DEMANDES_INITIALES);
  const [selectedDemande, setSelectedDemande] = useState<DemandeOrientation | null>(DEMANDES_INITIALES[0]);
  const [avisTexte, setAvisTexte] = useState(
    "Dossier très favorable pour la Faculté des Sciences de la Santé (FSS Lomé). Moyennes scientifiques bien équilibrées. Je préconise de maintenir l'effort en PCT pour maximiser les points au BAC D."
  );
  const [filiereChoisie, setFiliereChoisie] = useState("Médecine & Pharmacie (FSS Lomé)");
  const [notificationBanner, setNotificationBanner] = useState(true);

  const handleValiderOrientation = (id: string) => {
    setDemandes((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              status: "validated",
              avisConseiller: avisTexte,
              filiereValidee: filiereChoisie,
            }
          : d
      )
    );
    if (selectedDemande && selectedDemande.id === id) {
      setSelectedDemande({
        ...selectedDemande,
        status: "validated",
        avisConseiller: avisTexte,
        filiereValidee: filiereChoisie,
      });
    }
    alert("L'orientation a été validée et le bilan officiel certifié a été transmis à la famille !");
  };

  return (
    <WebLayout
      breadcrumbs={[{ label: "Portail Professionnel" }, { label: "Tableau de Bord Conseiller" }]}
      kpeContext="Espace Conseiller d'Orientation Agréé"
      kpeInitialMessage="Bienvenue M. Mawuli. Vous avez 1 nouvelle demande d'orientation payante soumise par une famille à examiner."
    >
      <div className="max-w-6xl mx-auto pb-12 space-y-6">
        {/* Bannière notification en direct */}
        {notificationBanner && (
          <div className="p-4 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-foreground text-background flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-foreground">
                  Nouvelle demande d'orientation payante reçue
                </div>
                <div className="text-xs text-muted-foreground">
                  La famille de <strong>Koffi Mensah (Terminale D)</strong> a commandé un accompagnement personnalisé.
                </div>
              </div>
            </div>
            <button
              onClick={() => setNotificationBanner(false)}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-1 rounded-lg hover:bg-muted"
            >
              Ignorer
            </button>
          </div>
        )}

        {/* En-tête profil conseiller */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conseiller d'Orientation Psychologue Agréé • Lomé</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Validation des Dossiers d'Orientation
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Examinez les bulletins officiels, validez les séries et orientez les élèves togolais vers les filières porteuses.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-card border border-border text-center">
              <span className="text-muted-foreground block">En attente</span>
              <span className="font-bold text-base text-accent-foreground">
                {demandes.filter((d) => d.status === "pending").length}
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-card border border-border text-center">
              <span className="text-muted-foreground block">Validés</span>
              <span className="font-bold text-base text-primary">
                {demandes.filter((d) => d.status === "validated").length}
              </span>
            </div>
          </div>
        </div>

        {/* Barre d'onglets Conseiller */}
        <div className="flex border-b border-border gap-2 pb-1">
          <button
            onClick={() => setSearchParams({ tab: "dossiers" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "dossiers"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Dossiers d'Orientation ({demandes.filter(d => d.status === "pending").length})</span>
          </button>

          <button
            onClick={() => setSearchParams({ tab: "archives" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "archives"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Bilans Validés & Archives ({demandes.filter(d => d.status === "validated").length})</span>
          </button>

          <button
            onClick={() => setSearchParams({ tab: "agrement" })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "agrement"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mon Agrément & Profil</span>
          </button>
        </div>

        {/* 1. ONGLET : DOSSIERS D'ORIENTATION EN ATTENTE */}
        {activeTab === "dossiers" && (
          <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Liste des demandes (5 colonnes) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
              Dossiers élèves reçus
            </h3>

            {demandes.map((dem) => {
              const isSelected = selectedDemande?.id === dem.id;
              return (
                <button
                  key={dem.id}
                  onClick={() => setSelectedDemande(dem)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all space-y-2 ${
                    isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/20 shadow-sm"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">{dem.eleveNom}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        dem.status === "pending"
                          ? "bg-accent/30 text-accent-foreground"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {dem.status === "pending" ? "À traiter" : "Avis émis"}
                    </span>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {dem.classe} • {dem.lycee}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/50">
                    <span>Reçue : {dem.dateDemande}</span>
                    <span className="font-bold text-foreground">
                      Moyenne : {dem.bulletinResume.moyenneGenerale}/20
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fiche d'examen et validation (7 colonnes) */}
          <div className="lg:col-span-7">
            {selectedDemande ? (
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {selectedDemande.eleveNom}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {selectedDemande.classe} • {selectedDemande.lycee}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-muted-foreground block">Statut du dossier :</span>
                    <span
                      className={`text-xs font-bold inline-flex items-center gap-1 ${
                        selectedDemande.status === "pending" ? "text-accent-foreground" : "text-primary"
                      }`}
                    >
                      {selectedDemande.status === "pending" ? (
                        <>
                          <Clock className="w-3.5 h-3.5" />
                          <span>En attente de votre avis</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Orientation certifiée</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* 1. Extraction des notes officielles */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-primary" />
                    <span>Notes extraites du bulletin scolaire (T1) :</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">SVT</span>
                      <strong className="text-foreground text-sm">{selectedDemande.bulletinResume.svt}/20</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">Maths</span>
                      <strong className="text-foreground text-sm">{selectedDemande.bulletinResume.maths}/20</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">PCT</span>
                      <strong className="text-foreground text-sm">{selectedDemande.bulletinResume.pct}/20</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">Français</span>
                      <strong className="text-foreground text-sm">{selectedDemande.bulletinResume.francais}/20</strong>
                    </div>
                  </div>
                </div>

                {/* 2. Message de la famille */}
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 text-xs space-y-1">
                  <span className="font-semibold text-foreground block">Demande & question de la famille :</span>
                  <p className="text-muted-foreground italic">"{selectedDemande.noteParent}"</p>
                </div>

                {/* 3. Formulaire de validation par le Conseiller */}
                <div className="space-y-4 pt-2 border-t border-border">
                  <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <span>Avis officiel d'orientation certifié Kpékpé</span>
                  </h3>

                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">
                      Filière / Série validée par vos soins :
                    </label>
                    <select
                      value={filiereChoisie}
                      onChange={(e) => setFiliereChoisie(e.target.value)}
                      disabled={selectedDemande.status === "validated"}
                      className="w-full p-2.5 rounded-xl border border-border bg-background text-xs font-medium outline-none disabled:opacity-70"
                    >
                      <option value="Médecine & Pharmacie (FSS Lomé)">Médecine & Pharmacie (FSS Lomé)</option>
                      <option value="Agronomie & Biotechnologie (ESA Lomé)">Agronomie & Biotechnologie (ESA Lomé)</option>
                      <option value="Classes Préparatoires Scientifiques">Classes Préparatoires Scientifiques</option>
                      <option value="Seconde S (Scientifique)">Seconde S (Scientifique)</option>
                      <option value="Terminale D (Sciences Naturelles)">Terminale D (Sciences Naturelles)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">
                      Vos recommandations & conseils pour la famille :
                    </label>
                    <textarea
                      rows={4}
                      value={selectedDemande.status === "validated" ? selectedDemande.avisConseiller : avisTexte}
                      onChange={(e) => setAvisTexte(e.target.value)}
                      disabled={selectedDemande.status === "validated"}
                      className="w-full p-3 rounded-xl border border-border bg-background text-xs leading-relaxed outline-none disabled:opacity-70"
                    />
                  </div>

                  {selectedDemande.status === "pending" ? (
                    <button
                      onClick={() => handleValiderOrientation(selectedDemande.id)}
                      className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary/90 transition-colors"
                    >
                      <Check className="w-4 h-4" />
                      <span>Valider officiellement et notifier la famille</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary font-semibold text-center flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Bilan d'orientation certifié et archivé</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-muted-foreground border border-dashed rounded-3xl">
                Sélectionnez un dossier élève pour examiner son orientation.
              </div>
            )}
          </div>
        </div>
        )}

        {/* 2. ONGLET : BILANS VALIDÉS & HISTORIQUE ARCHIVÉ */}
        {activeTab === "archives" && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Historique des Bilans d'Orientation Certifiés</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Retrouvez l'ensemble des orientations officielles que vous avez validées pour les familles togolaises.
              </p>
            </div>

            <div className="space-y-4">
              {demandes.filter(d => d.status === "validated").map((dem) => (
                <div key={dem.id} className="p-5 rounded-2xl bg-muted/30 border border-border/70 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-foreground">{dem.eleveNom}</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Certifié conforme</span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{dem.classe} • {dem.lycee}</p>
                    </div>

                    <span className="text-xs text-muted-foreground">{dem.dateDemande}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-card border border-border/60">
                      <span className="text-muted-foreground block text-[11px]">Filière officiellement retenue :</span>
                      <strong className="text-foreground text-sm">{dem.filiereValidee}</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-card border border-border/60">
                      <span className="text-muted-foreground block text-[11px]">Moyenne générale officielle :</span>
                      <strong className="text-foreground text-sm">{dem.bulletinResume.moyenneGenerale}/20</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground leading-relaxed">
                    <strong>Votre avis transmis à la famille :</strong> {dem.avisConseiller}
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => alert(`Téléchargement de l'attestation d'orientation officielle pour ${dem.eleveNom}`)}
                      className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 hover:bg-primary/90"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Télécharger l'Attestation Officielle (PDF)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. ONGLET : MON AGRÉMENT & PROFIL PROFESSIONNEL */}
        {activeTab === "agrement" && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Mon Agrément Professionnel & Charte Déontologique</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Informations légales d'exercice reconnues sur le territoire togolais.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>Cadre Institutionnel</span>
                </div>
                <div className="text-muted-foreground">Centre d'Orientation Universitaire de Lomé (COUL)</div>
                <div className="text-muted-foreground">Université de Lomé • Campus Nord</div>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Accréditation Kpékpé</span>
                </div>
                <div className="text-foreground font-semibold">Conseiller d'Orientation Psychologue Agréé</div>
                <div className="text-muted-foreground">N° Homologation : TG-COP-2023-089</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-foreground space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Charte de Qualité & Déontologie de l'Orientation au Togo</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Les avis émis engagent l'autorité du conseiller et visent à aligner le projet scolaire de l'élève avec les réalités économiques et universitaires du Togo (FSS, ESA, ESTBA, CPGE, Séries D, C4, A4). Chaque bilan payant validé donne lieu à une attestation numérique opposable.
              </p>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
