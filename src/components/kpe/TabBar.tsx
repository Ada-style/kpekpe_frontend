import { Home, BarChart3, MessageCircle, BookOpen, User } from "lucide-react";

interface TabBarProps {
  active: string;
  onTab: (tab: string) => void;
}

const tabs = [
  { id: "home", icon: Home, label: "Accueil" },
  { id: "suivi", icon: BarChart3, label: "Suivi" },
  { id: "conseiller", icon: MessageCircle, label: "Kpé", special: true },
  { id: "learnia", icon: BookOpen, label: "Learnia" },
  { id: "profil", icon: User, label: "Profil" },
];

export function TabBar({ active, onTab }: TabBarProps) {
  return (
    <div className="flex items-end justify-around px-2 pb-6 pt-2 bg-card border-t border-border/50">
      {tabs.map((t) => {
        const Icon = t.icon;
        const isActive = active === t.id;

        if (t.special) {
          return (
            <button
              key={t.id}
              onClick={() => onTab(t.id)}
              className="flex flex-col items-center -mt-5"
            >
              <div className="w-14 h-14 rounded-full kpe-gradient-primary flex items-center justify-center shadow-lg">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <span className="text-[10px] font-display font-semibold mt-1 text-primary">
                {t.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={t.id}
            onClick={() => onTab(t.id)}
            className="flex flex-col items-center gap-0.5 relative"
          >
            <Icon
              size={22}
              className={isActive ? "text-primary" : "text-muted-foreground"}
              strokeWidth={isActive ? 2.5 : 1.8}
            />
            <span
              className={`text-[10px] font-body font-medium ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t.label}
            </span>
            {isActive && (
              <div className="absolute -bottom-2 w-5 h-1 rounded-full bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
