import { useState } from "react";
import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { FileText, Camera, Shield, UserCheck, ArrowRight, Check, Sparkles, Loader2, RefreshCw } from "lucide-react";

export default function WebBulletinsExamens() {
  const [photoState, setPhotoState] = useState<"empty" | "analyzing" | "extracted">("empty");
  const [allowCounselorAccess, setAllowCounselorAccess] = useState(false);

  // Simulation de l'extraction IA après la prise de photo
  const handleTakePhoto = () => {
    setPhotoState("analyzing");
    setTimeout(() => {
      setPhotoState("extracted");
    }, 2000);
  };

  const handleReset = () => {
    setPhotoState("empty");
  };

  return (
    <WebLayout
      breadcrumbs={[{ label: "Bulletins & Notes" }]}
      kpeContext="Numérisation sécurisée du bulletin"
      kpeInitialMessage="Prends en photo ton bulletin scolaire officiel. L'IA de Kpékpé extrait automatiquement tes moyennes pour affiner tes recommandations d'orientation."
    >
      <div className="max-w-4xl mx-auto pb-12">
        {/* En-tête */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Dossier confidentiel de l'apprenant</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
            Numérisation de mon Bulletin Scolaire
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Seule la photo de ton bulletin compte : l'intelligence artificielle analyse tes notes pour ton orientation.
          </p>
        </div>

        {/* 1. Zone de prise de photo (État initial) */}
        {photoState === "empty" && (
          <div className="rounded-3xl border-2 border-dashed border-border bg-card p-10 sm:p-14 text-center shadow-sm space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <Camera className="w-10 h-10" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h3 className="font-display text-xl font-bold text-foreground">
                Prendre en photo ton bulletin trimestriel
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Place ton bulletin officiel bien à plat à la lumière. L'IA de Kpékpé détectera automatiquement ta classe, tes moyennes et tes matières fortes.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleTakePhoto}
                className="px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm inline-flex items-center gap-2.5"
              >
                <Camera className="w-4 h-4" />
                <span>Prendre en photo / Importer mon bulletin</span>
              </button>
            </div>

            <div className="pt-4 border-t border-border/50 max-w-sm mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Document 100% privé et sécurisé sur ton compte</span>
            </div>
          </div>
        )}

        {/* 2. Analyse de la photo par l'IA en cours */}
        {photoState === "analyzing" && (
          <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent-foreground flex items-center justify-center mx-auto animate-pulse">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              L'IA de Kpékpé analyse la photo de ton bulletin...
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Reconnaissance des matières, détection de la série togolaise et calcul automatique du profil d'orientation.
            </p>
          </div>
        )}

        {/* 3. Résultat extrait par l'IA */}
        {photoState === "extracted" && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Carte Photo analysée avec succès */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    Photo numérisée avec succès par l'IA
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Bulletin détecté : Collège Protestant de Lomé • Classe de 3ème / Seconde
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold hover:bg-muted text-foreground inline-flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reprendre une autre photo</span>
              </button>
            </div>

            {/* Impact immédiat sur l'Orientation IA */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Diagnostic de l'IA pour ton Orientation</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                À partir des notes analysées sur la photo, tes points forts majeurs se situent en <span className="font-bold text-primary">Sciences de la Vie et de la Terre</span> et en <span className="font-bold text-primary">Mathématiques</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-xs space-y-1">
                  <span className="font-bold text-foreground block">Série recommandée au Lycée :</span>
                  <span className="text-primary font-black text-sm">Série D (Sciences Biologiques & Physiques)</span>
                  <p className="text-muted-foreground text-[11px] pt-1">
                    Profil solide pour les filières médicales, agronomiques et environnementales au Togo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-xs space-y-1">
                  <span className="font-bold text-foreground block">Option alternative conseillée :</span>
                  <span className="text-foreground font-black text-sm">Série C4 (Maths & Sciences Physiques)</span>
                  <p className="text-muted-foreground text-[11px] pt-1">
                    Idéal si tu souhaites t'orienter vers les écoles d'ingénieurs (ENSI, IAEC Lomé).
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/web-app/explorer/formations"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-primary/90"
                >
                  <span>Voir les formations supérieures adaptées</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Interrupteur Confidentialité & Partage Conseiller */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground">
                    Autoriser l'accès au conseiller d'orientation certifié ?
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-lg leading-relaxed">
                    Par défaut, la photo reste strictement confidentielle. En activant cette option, tu permets à un conseiller humain d'examiner les notes de ton bulletin pour valider ton dossier.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-center bg-muted/40 px-4 py-2 rounded-xl border border-border">
                <span className="text-xs font-semibold text-foreground">Partager :</span>
                <button
                  onClick={() => setAllowCounselorAccess(!allowCounselorAccess)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    allowCounselorAccess ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${
                      allowCounselorAccess ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {allowCounselorAccess && (
              <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary font-medium flex items-center gap-2 animate-in fade-in">
                <UserCheck className="w-4 h-4 flex-shrink-0" />
                <span>Accès autorisé : Le conseiller d'orientation Kpékpé peut consulter la photo de ton bulletin pour t'accompagner.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </WebLayout>
  );
}
