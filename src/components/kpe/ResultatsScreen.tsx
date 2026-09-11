import { ArrowLeft, Share2, Lightbulb, ChevronRight, Heart, Zap, Globe, Compass, Sparkles } from "lucide-react";

interface ResultatsProps {
  onTab: (tab: string) => void;
}

const piliers = [
  { Icon: Heart, label: "Passion", color: "border-kpe-passion", bg: "bg-kpe-passion/10", iconColor: "text-kpe-passion", content: "Écoute, accompagnement, psychologie, développement personnel" },
  { Icon: Zap, label: "Talent", color: "border-kpe-talent", bg: "bg-kpe-talent/10", iconColor: "text-kpe-talent", content: "Empathie naturelle, sens de l'organisation, communication orale" },
  { Icon: Globe, label: "Besoins Togo", color: "border-kpe-besoins", bg: "bg-kpe-besoins/10", iconColor: "text-kpe-besoins", content: "Orientation scolaire, conseil RH, travail social, éducation" },
  { Icon: Compass, label: "Aspiration", color: "border-kpe-aspiration", bg: "bg-kpe-aspiration/10", iconColor: "text-kpe-aspiration", content: "Avoir un impact sur la jeunesse togolaise, construire l'avenir" },
];

export function ResultatsScreen({ onTab }: ResultatsProps) {
  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-5 pt-3 pb-6 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onTab("home")} className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
            <ArrowLeft size={18} className="text-primary-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
            <Share2 size={18} className="text-primary-foreground" />
          </button>
        </div>
        <h1 className="font-display text-xl font-bold text-primary-foreground text-center">Ton IKIGAI</h1>
        <p className="font-body text-xs text-primary-foreground/70 text-center mt-1">Résultats de ta séance avec Kpé</p>
      </div>

      <div className="px-5 -mt-4 pb-6 space-y-4">
        {/* Venn diagram */}
        <div className="kpe-card-elevated p-6">
          <div className="relative w-48 h-48 mx-auto">
            {[
              { x: 20, y: 20, color: "bg-kpe-passion/40", label: "Passion" },
              { x: 76, y: 20, color: "bg-kpe-talent/40", label: "Talent" },
              { x: 20, y: 76, color: "bg-kpe-besoins/40", label: "Besoins" },
              { x: 76, y: 76, color: "bg-kpe-aspiration/40", label: "Aspiration" },
            ].map((c, i) => (
              <div
                key={i}
                className={`absolute w-24 h-24 rounded-full ${c.color} flex items-end justify-center pb-2`}
                style={{ left: c.x, top: c.y }}
              >
                <span className="font-body text-[9px] font-semibold text-foreground/70">{c.label}</span>
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full kpe-gradient-primary flex items-center justify-center shadow-lg">
                <Sparkles size={20} className="text-primary-foreground" />
              </div>
            </div>
          </div>
          <p className="text-center font-display text-lg font-bold text-primary mt-4">IKIGAI trouvé à 78% !</p>
        </div>

        {/* Synthèse */}
        <div className="kpe-card p-4 flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-kpe-yellow-pale flex items-center justify-center flex-shrink-0">
            <Lightbulb size={20} className="text-kpe-yellow" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-foreground">Ta synthèse IA</p>
            <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
              Tu es fait pour des métiers alliant accompagnement humain et impact social au Togo. Ton profil Analytique-Social est rare et très recherché.
            </p>
          </div>
        </div>

        {/* Piliers */}
        <div className="space-y-3">
          {piliers.map((p, i) => {
            const Icon = p.Icon;
            return (
              <div key={i} className={`kpe-card p-4 border-l-4 ${p.color}`}>
                <div className="flex items-center gap-2">
                  <Icon size={18} className={p.iconColor} />
                  <p className="font-display text-sm font-bold text-foreground">{p.label}</p>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1">{p.content}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => onTab("recommandations")}
          className="w-full h-14 rounded-2xl kpe-gradient-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
        >
          Voir mes recommandations <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
