import { useState } from "react";
import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import {
  Compass, CheckCircle2, ShieldCheck, ArrowRight, UserCheck,
  GraduationCap, TrendingUp, AlertCircle, FileText, Send, Sparkles
} from "lucide-react";

export default function WebOrientationParent() {
  const [requestedCounselor, setRequestedCounselor] = useState(false);
  const [phoneParent, setPhoneParent] = useState("+228 90 12 34 56");
  const [parentNote, setParentNote] = useState("");

  const handleRequestCounselor = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestedCounselor(true);
  };

  return (
    <WebLayout
      breadcrumbs={[{ label: "Espace Famille" }, { label: "Orientation de mon Enfant" }]}
      kpeContext="Suivi d'Orientation & Décision Familiale"
      kpeInitialMessage="Voici l'analyse d'orientation de Koffi basée sur ses résultats scolaires et ses intérêts. Vous pouvez faire valider ce parcours par un conseiller d'orientation certifié."
    >
      <div className="max-w-4xl mx-auto pb-12 space-y-8">
        {/* En-tête profil enfant */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary font-black flex items-center justify-center text-xl border border-primary/20">
                KM
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-1">
                  <span>Dossier Élève Actif</span>
                </div>
                <h1 className="font-display text-2xl font-black text-foreground">
                  Koffi Mensah
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Classe : <strong className="text-foreground">Terminale D</strong> • Lycée de Tokoin (Lomé)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1.5 rounded-xl bg-muted text-foreground font-medium">
                Bulletin T1 analysé par IA
              </span>
            </div>
          </div>
        </div>

        {/* 1. Synthèse du profil d'orientation (Visible par le Parent) */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" />
                <span>Recommandation d'Orientation Scolaire</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Calculée à partir des moyennes du bulletin (16/20 en SVT, 14.5 en Maths, 15 en PCT) et des centres d'intérêt.
              </p>
            </div>
            <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
              Série D Confirmée
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
              <div className="text-xs text-muted-foreground font-medium">Filière recommandée</div>
              <div className="text-base font-bold text-foreground mt-1">Médecine & Pharmacie</div>
              <p className="text-[11px] text-muted-foreground mt-1">Faculté des Sciences de la Santé (Université de Lomé)</p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
              <div className="text-xs text-muted-foreground font-medium">Option alternative 1</div>
              <div className="text-base font-bold text-foreground mt-1">Agronomie & Biotechnologie</div>
              <p className="text-[11px] text-muted-foreground mt-1">ESA - Université de Lomé</p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
              <div className="text-xs text-muted-foreground font-medium">Option alternative 2</div>
              <div className="text-base font-bold text-foreground mt-1">Biochimie & Analyses</div>
              <p className="text-[11px] text-muted-foreground mt-1">ESTBA - Lomé</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-start gap-3 text-xs text-foreground leading-relaxed">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong>Analyse Kpékpé :</strong> Koffi dispose d'un profil scientifique solide avec une forte sensibilité pour le vivant et la santé. Les sciences de la vie sont son point fort moteur pour le BAC Série D togolais.
            </div>
          </div>
        </div>

        {/* 2. Zone d'action Parent : Demande de suivi par un Conseiller d'Orientation Certifié */}
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/30 text-accent-foreground text-xs font-bold">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Accompagnement Humain Personnalisé (Sur Demande)</span>
              </div>
              <h3 className="font-display text-xl font-black text-foreground">
                Faire suivre l'orientation de Koffi par un Conseiller Certifié
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                L'IA donne une première direction mathématique, mais le choix de vie d'un enfant mérite un regard humain. Un conseiller d'orientation togolais certifié examine le dossier, vérifie la faisabilité des concours à Lomé et échange avec vous.
              </p>
            </div>
          </div>

          {requestedCounselor ? (
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Demande d'accompagnement transmise avec succès !</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Le conseiller d'orientation référent a reçu une notification immédiate avec le dossier scolaire de Koffi. Il prendra contact avec vous sur le <strong>{phoneParent}</strong> sous 24h ouvrées pour votre premier bilan.
              </p>
              <div className="pt-2 flex gap-3">
                <Link
                  to="/web-app/conseiller-dashboard"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                >
                  Voir la vue du conseiller (Aperçu)
                </Link>
                <button
                  onClick={() => setRequestedCounselor(false)}
                  className="px-4 py-2 rounded-xl border border-border text-xs font-medium hover:bg-muted"
                >
                  Modifier ma demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRequestCounselor} className="space-y-4 pt-2 border-t border-border/80">
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-foreground block mb-1">
                    Numéro de téléphone du parent (pour l'appel du conseiller) :
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneParent}
                    onChange={(e) => setPhoneParent(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-border bg-background outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-semibold text-foreground block mb-1">
                    Prestation de conseil d'orientation certifié :
                  </label>
                  <div className="p-2.5 rounded-xl border border-border bg-muted/30 font-medium text-muted-foreground">
                    Bilan complet + Entretien d'orientation (Sur demande)
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">
                  Une question ou précision particulière pour le conseiller ? (Optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Nous hésitons entre médecine à Lomé et une école d'ingénieur agronome..."
                  value={parentNote}
                  onChange={(e) => setParentNote(e.target.value)}
                  className="w-full p-3 rounded-xl border border-border bg-background text-xs outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Le conseiller est notifié dès validation de votre demande.</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmer la demande de suivi d'orientation</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </WebLayout>
  );
}
