import { 
  Bell, ChevronRight, GraduationCap, Briefcase, Sparkles, BookOpen, Play, 
  User, School, BookMarked, Target, Flame, TreePine, Award, Users, Share2, FileCheck, CheckCircle2 
} from "lucide-react";
import { KpeLogo } from "./KpeLogo";

interface DashboardProps {
  onTab: (tab: string) => void;
}

export function DashboardScreen({ onTab }: DashboardProps) {
  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header avec Badge Terminale D & Lycée de Tokoin */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-2 py-0.5 rounded-md bg-kpe-green-pale text-primary font-body text-[10px] font-bold">
              Terminale D · Lycée de Tokoin
            </span>
          </div>
          <h1 className="font-display text-xl font-bold text-foreground">Kofi Mensah</h1>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center relative">
            <Bell size={18} className="text-foreground" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-kpe-passion border-2 border-card" />
          </button>
          <div className="w-9 h-9 rounded-full kpe-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xs">K</span>
          </div>
        </div>
      </div>

      {/* Arbre de la Sagesse & Flamme Partagée */}
      <div className="px-5 mb-4 space-y-3">
        {/* Arbre de la Sagesse */}
        <div className="kpe-card-elevated p-4 bg-gradient-to-br from-emerald-500/10 via-background to-card border border-primary/20">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <TreePine size={22} />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-foreground">Arbre de la Sagesse</p>
                <p className="font-body text-xs text-muted-foreground">Promotion BAC 2026 · Étape 4/9 mois</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-primary text-white font-display text-[10px] font-bold">
              14/24 Notions
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "58%" }} />
            </div>
            <span className="font-display text-xs font-bold text-primary">58%</span>
          </div>
          <p className="font-body text-[11px] text-muted-foreground mt-2">
            Prochain fruit : <span className="font-semibold text-foreground">Génétique & SVT Série D</span> (encore 2 révisions)
          </p>
        </div>

        {/* Flamme Partagée (Binôme Afi) */}
        <div className="kpe-card p-3.5 flex items-center justify-between border-amber-500/20 bg-amber-500/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600">
              <Flame size={20} className="fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xs font-bold text-foreground">Flamme de 12 jours</span>
                <span className="text-[10px] font-medium text-amber-600">Partagée avec Afi</span>
              </div>
              <p className="font-body text-[10px] text-muted-foreground">Afi n'a pas encore révisé aujourd'hui</p>
            </div>
          </div>
          <a
            href="https://wa.me/?text=Kofi%20t'attend%20sur%20Kp%C3%A9kp%C3%A9%20pour%20valider%20la%20flamme%20du%20jour%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-card border border-border flex items-center gap-1 text-primary hover:bg-muted font-display text-[11px] font-semibold"
          >
            <Share2 size={12} /> Nudge WhatsApp
          </a>
        </div>
      </div>

      {/* Raccourcis d'action : Série D, Répétiteurs, Bulletin */}
      <div className="px-5 mb-4">
        <h2 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Accès Rapide Série D & Accompagnement
        </h2>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onTab("learnia")}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 flex flex-col items-center text-center gap-1.5"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <BookOpen size={16} />
            </div>
            <span className="font-display text-[11px] font-bold text-foreground">Série D Labs</span>
            <span className="font-body text-[9px] text-muted-foreground">SVT, Maths, PC</span>
          </button>

          <button
            onClick={() => onTab("learnia")}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 flex flex-col items-center text-center gap-1.5"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <Users size={16} />
            </div>
            <span className="font-display text-[11px] font-bold text-foreground">Répétiteurs</span>
            <span className="font-body text-[9px] text-muted-foreground">Lomé Vérifiés</span>
          </button>

          <button
            onClick={() => onTab("suivi")}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary/40 flex flex-col items-center text-center gap-1.5"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <FileCheck size={16} />
            </div>
            <span className="font-display text-[11px] font-bold text-foreground">Mon Bulletin</span>
            <span className="font-body text-[9px] text-muted-foreground">Scan & Moyennes</span>
          </button>
        </div>
      </div>

      {/* Continue Session CTA */}
      <div className="px-5 mb-4">
        <div className="rounded-2xl kpe-gradient-accent p-4 flex items-center gap-3">
          <div className="flex-1">
            <p className="font-display text-sm font-bold text-accent-foreground">Continue ta séance</p>
            <p className="font-body text-xs text-accent-foreground/80 mt-0.5">Série D SVT · Génétique mendélienne</p>
          </div>
          <button
            onClick={() => onTab("conseiller")}
            className="h-10 px-4 rounded-xl bg-card font-display text-sm font-bold text-primary flex items-center gap-1"
          >
            <Play size={14} /> Reprendre
          </button>
        </div>
      </div>

      {/* IKIGAI Mini Card */}
      <div className="px-5 mb-4">
        <div className="kpe-card-elevated p-4 flex items-center gap-4">
          <div className="relative w-14 h-14 flex-shrink-0">
            {[
              { color: "bg-kpe-passion", x: 0, y: 0 },
              { color: "bg-kpe-talent", x: 16, y: 0 },
              { color: "bg-kpe-besoins", x: 0, y: 16 },
              { color: "bg-kpe-aspiration", x: 16, y: 16 },
            ].map((c, i) => (
              <div key={i} className={`absolute w-8 h-8 rounded-full ${c.color} opacity-60`} style={{ left: c.x, top: c.y }} />
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-xs text-muted-foreground">Ton profil IKIGAI</p>
            <div className="flex items-center gap-1.5">
              <p className="font-display text-sm font-bold text-foreground">Scientifique & Médical</p>
              <Target size={14} className="text-primary" />
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full kpe-gradient-primary" style={{ width: "82%" }} />
              </div>
              <span className="font-display text-xs font-bold text-primary">82%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommandations */}
      <div className="px-5 mb-4">
        <h2 className="font-display text-base font-bold text-foreground mb-3">Tes recommandations</h2>
        <div className="grid grid-cols-2 gap-3">
          {recoCards.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={i} className={`rounded-2xl p-4 ${c.bgClass}`}>
                <Icon size={28} className={c.textClass} strokeWidth={1.8} />
                <p className="font-display text-sm font-bold text-foreground mt-2">{c.label}</p>
                <p className="font-body text-xs text-muted-foreground">{c.count}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* News Feed */}
      <div className="px-5 pb-4">
        <h2 className="font-display text-base font-bold text-foreground mb-3">Actualités</h2>
        <div className="space-y-3">
          {news.map((n, i) => {
            const Icon = n.Icon;
            return (
              <div key={i} className="kpe-card p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-foreground truncate">{n.org}</span>
                    <span className="font-body text-[11px] text-muted-foreground flex-shrink-0">{n.time}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{n.msg}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-kpe-green-pale font-body text-[11px] font-medium text-primary">
                    {n.tag}
                  </span>
                </div>
                <ChevronRight size={16} className="text-muted-foreground mt-2 flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
