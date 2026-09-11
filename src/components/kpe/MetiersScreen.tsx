import { ArrowLeft, Search, Heart, ChevronRight, TrendingUp, Brain, GraduationCap, BarChart3, Globe, Briefcase } from "lucide-react";

interface MetiersProps {
  onTab: (tab: string) => void;
}

const metiers = [
  { Icon: Brain, name: "Psychologue scolaire", score: 97, tag: "Social", desc: "Accompagner les élèves dans leur développement" },
  { Icon: GraduationCap, name: "Conseiller d'orientation", score: 94, tag: "Éducation", desc: "Guider les jeunes dans leurs choix de parcours" },
  { Icon: BarChart3, name: "Chargé RH", score: 88, tag: "Entreprise", desc: "Gérer et développer le capital humain" },
  { Icon: Globe, name: "Travailleur social", score: 85, tag: "ONG", desc: "Accompagner les populations vulnérables" },
];

const filters = ["Tous", "Social", "Tech", "Éducation", "Santé", "ONG"];

export function MetiersScreen({ onTab }: MetiersProps) {
  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="px-5 pt-3 pb-4 flex items-center gap-3">
        <button onClick={() => onTab("home")} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <div className="flex items-center gap-2 flex-1">
          <Briefcase size={20} className="text-primary" />
          <h1 className="font-display text-lg font-bold text-foreground">Métiers pour toi</h1>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-3 bg-muted rounded-2xl px-4 py-3">
          <Search size={18} className="text-muted-foreground" />
          <input placeholder="Rechercher un métier…" className="flex-1 bg-transparent font-body text-sm outline-none placeholder:text-muted-foreground text-foreground" />
        </div>
      </div>

      {/* Filters */}
      <div className="px-5 mb-4">
        <div className="flex gap-2 overflow-x-auto kpe-scrollbar-hide pb-1">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full font-body text-xs font-semibold whitespace-nowrap transition-colors ${
                i === 0
                  ? "kpe-gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Métiers list */}
      <div className="px-5 pb-4 space-y-3">
        {metiers.map((m, i) => {
          const Icon = m.Icon;
          return (
            <div key={i} className="kpe-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-kpe-green-pale flex items-center justify-center flex-shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-display text-sm font-bold text-foreground truncate">{m.name}</p>
                  <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-kpe-green-pale">
                    <TrendingUp size={10} className="text-primary" />
                    <span className="font-display text-[11px] font-bold text-primary">{m.score}%</span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-muted font-body text-[10px] font-medium text-muted-foreground">
                  {m.tag}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <button>
                  <Heart size={18} className="text-muted-foreground" />
                </button>
                <ChevronRight size={16} className="text-muted-foreground" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
