import {
  Settings, ChevronRight, Edit3, ClipboardList, Heart, Bell, Lock, Crown, LogOut,
  CheckCircle, Target, Star, UserCircle,
} from "lucide-react";

interface ProfilProps {
  onTab: (tab: string) => void;
}

const stats = [
  { val: "3", label: "Tests passés", Icon: CheckCircle, color: "text-primary" },
  { val: "78%", label: "IKIGAI Score", Icon: Target, color: "text-kpe-yellow" },
  { val: "840", label: "XP Learnia", Icon: Star, color: "text-kpe-aspiration" },
];

const menuItems = [
  { Icon: Edit3, label: "Mes informations", sub: "Modifier mon profil" },
  { Icon: ClipboardList, label: "Historique des tests", sub: "3 tests réalisés" },
  { Icon: Heart, label: "Mes favoris", sub: "12 métiers · 5 écoles" },
  { Icon: Bell, label: "Notifications", sub: "Gérer les alertes" },
  { Icon: Lock, label: "Mot de passe", sub: "Modifier la sécurité" },
  { Icon: Crown, label: "Passer à Premium", sub: "Fonctionnalités avancées", highlight: true },
];

export function ProfilScreen({ onTab }: ProfilProps) {
  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-5 pt-3 pb-10 rounded-b-[32px] flex flex-col items-center text-center">
        <div className="flex items-center justify-end w-full mb-4">
          <button className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
            <Settings size={18} className="text-primary-foreground" />
          </button>
        </div>
        <div className="w-20 h-20 rounded-full bg-card/20 flex items-center justify-center mb-3">
          <span className="font-display text-3xl font-bold text-primary-foreground">K</span>
        </div>
        <h1 className="font-display text-xl font-bold text-primary-foreground">Kofi Mensah</h1>
        <p className="font-body text-xs text-primary-foreground/70 mt-1">kofi.mensah@email.com</p>
        <span className="mt-2 px-3 py-1 rounded-full bg-card/20 font-body text-[11px] font-medium text-primary-foreground flex items-center gap-1.5">
          <UserCircle size={12} /> Compte Gratuit
        </span>
      </div>

      <div className="px-5 -mt-6 pb-6 space-y-4">
        {/* Stats */}
        <div className="kpe-card-elevated p-4 grid grid-cols-3 gap-2">
          {stats.map((s, i) => {
            const Icon = s.Icon;
            return (
              <div key={i} className="text-center">
                <Icon size={22} className={s.color} />
                <p className="font-display text-lg font-bold text-foreground mt-1">{s.val}</p>
                <p className="font-body text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Menu */}
        <div className="kpe-card overflow-hidden divide-y divide-border/50">
          {menuItems.map((item, i) => {
            const Icon = item.Icon;
            return (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left ${
                  item.highlight ? "bg-kpe-yellow-pale" : ""
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  item.highlight ? "bg-kpe-yellow/10" : "bg-muted"
                }`}>
                  <Icon size={18} className={item.highlight ? "text-kpe-yellow-warm" : "text-muted-foreground"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-sm font-semibold ${
                    item.highlight ? "text-kpe-dark" : "text-foreground"
                  }`}>{item.label}</p>
                  <p className="font-body text-[11px] text-muted-foreground">{item.sub}</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-destructive/20 text-destructive font-display text-sm font-semibold">
          <LogOut size={18} />
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
