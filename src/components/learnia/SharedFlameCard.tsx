import { useState } from "react";
import { Flame, Users, CheckCircle2, Clock, Copy, Check, BellRing, RotateCcw, HeartHandshake, Share2, MessageCircle } from "lucide-react";

interface Props {
  streak?: number;
  partnerName?: string;
  partnerSchool?: string;
  myStatus?: "completed" | "pending";
  partnerStatus?: "completed" | "pending";
  inviteCode?: string;
  graceDaysLeft?: number;
}

export function SharedFlameCard({
  streak = 12,
  partnerName = "Afi",
  partnerSchool = "Lycée de Tokoin",
  myStatus = "completed",
  partnerStatus: initialPartnerStatus = "pending",
  inviteCode = "KP-LOME-8492",
  graceDaysLeft = 3,
}: Props) {
  const [partnerStatus, setPartnerStatus] = useState(initialPartnerStatus);
  const [nudged, setNudged] = useState(false);
  const [copied, setCopied] = useState(false);
  const [flameRestored, setFlameRestored] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [hasPartner, setHasPartner] = useState(true);

  const isBothCompleted = (myStatus === "completed" && partnerStatus === "completed") || flameRestored;
  const isOneCompleted = (myStatus === "completed" || partnerStatus === "completed") && !isBothCompleted;

  const handleNudge = () => {
    setNudged(true);
    setTimeout(() => setNudged(false), 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Partage WhatsApp direct (viralité Lomé / Togo)
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Salut ! Rejoins-moi sur Kpékpé pour qu'on révise nos cours ensemble et qu'on allume notre flamme d'apprentissage quotidienne 🔥.\n\nInstalle l'application et entre mon code binôme : ${inviteCode}\nLien : https://kpekpe.tg`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className={`rounded-2xl border p-6 shadow-sm relative overflow-hidden transition-all duration-300 ${
      isBothCompleted
        ? "border-primary/40 bg-gradient-to-br from-primary/10 via-card to-accent/15"
        : "border-border bg-card"
    }`}>
      {/* Halo chaleureux si flamme active */}
      {isBothCompleted && (
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/30 blur-3xl pointer-events-none animate-pulse" />
      )}

      {/* En-tête : Flamme visuelle */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-500 ${
            isBothCompleted
              ? "bg-accent/30 text-accent-foreground shadow-md ring-2 ring-accent/60"
              : isOneCompleted
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}>
            <Flame
              className={`w-8 h-8 transition-all duration-500 ${
                isBothCompleted
                  ? "text-accent-foreground fill-accent-foreground scale-110 drop-shadow-[0_2px_8px_rgba(254,236,1,0.5)]"
                  : isOneCompleted
                  ? "text-primary fill-primary/40"
                  : "text-muted-foreground"
              }`}
            />
            <span className={`absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full text-[10px] font-black border transition-colors ${
              isBothCompleted
                ? "bg-primary text-primary-foreground border-card"
                : "bg-muted text-muted-foreground border-border"
            }`}>
              {streak}j
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-display text-lg font-bold text-foreground">
                Flamme de Binôme
              </h3>
              {isBothCompleted ? (
                <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-extrabold uppercase">
                  Active aujourd'hui
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                  En attente du duo
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Partenaire : <span className="font-semibold text-foreground">{partnerName}</span> ({partnerSchool})
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-muted-foreground block">Travail d'équipe :</span>
          <span className="text-xs font-bold text-primary">{streak} jours réussis</span>
        </div>
      </div>

      {/* Double statut de validation quotidienne */}
      <div className="p-4 rounded-xl bg-muted/40 border border-border/60 mb-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {myStatus === "completed" ? (
              <CheckCircle2 className="w-4 h-4 text-primary" />
            ) : (
              <Clock className="w-4 h-4 text-muted-foreground" />
            )}
            <span className="font-semibold text-foreground">Ta session</span>
          </div>
          <span className={`text-[11px] font-medium ${myStatus === "completed" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
            {myStatus === "completed" ? "Défi validé aujourd'hui" : "À réaliser quand tu le souhaites"}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs pt-2 border-t border-border/40">
          <div className="flex items-center gap-2">
            {partnerStatus === "completed" || flameRestored ? (
              <CheckCircle2 className="w-4 h-4 text-primary" />
            ) : (
              <Clock className="w-4 h-4 text-accent-foreground" />
            )}
            <span className="font-semibold text-foreground">Session de {partnerName}</span>
          </div>
          <span className={`text-[11px] font-medium ${partnerStatus === "completed" || flameRestored ? "text-primary font-semibold" : "text-muted-foreground"}`}>
            {partnerStatus === "completed" || flameRestored ? "Défi validé aujourd'hui" : "En cours"}
          </span>
        </div>
      </div>

      {/* Bouton Coup de coude d'amitié */}
      {!isBothCompleted && (
        <div className="mb-4">
          <button
            onClick={handleNudge}
            disabled={nudged}
            className="w-full py-2.5 px-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 text-xs font-bold text-primary flex items-center justify-center gap-2 transition-all"
          >
            <BellRing className={`w-3.5 h-3.5 ${nudged ? "animate-bounce" : ""}`} />
            <span>{nudged ? `Coup de coude bienveillant envoyé à ${partnerName} !` : `Envoyer un encouragement à ${partnerName}`}</span>
          </button>
        </div>
      )}

      {/* Droit à l'erreur (3 jours de grâce) */}
      <div className="p-3 rounded-xl bg-accent/15 border border-accent/30 text-xs text-foreground mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-bold text-accent-foreground">
            <HeartHandshake className="w-4 h-4 text-primary" />
            <span>Droit à l'erreur (3 jours de grâce)</span>
          </div>
          <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded-md bg-card">
            {graceDaysLeft} jours restants
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Pas de connexion ou empêchement ? Votre flamme ne s'éteint pas. Vous avez 3 jours pour vous rattraper sans perdre votre série.
        </p>

        {!isBothCompleted && (
          <button
            onClick={() => setFlameRestored(true)}
            className="text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline pt-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Rattraper ma session et restaurer la flamme</span>
          </button>
        )}
      </div>

      {/* Actions virales : Inviter un ami sur WhatsApp & Partager code */}
      <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[11px] text-muted-foreground block">Ton code binôme :</span>
          <span className="font-mono font-bold text-foreground text-xs">{inviteCode}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-[11px] inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Inviter un ami (WhatsApp)</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-[11px] font-semibold text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copié" : "Copier"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
