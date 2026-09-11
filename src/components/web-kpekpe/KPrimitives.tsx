import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Card avec radius 12px et ombre légère */
export function KCard({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border/70 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Badge sémantique — secteur, niveau, statut */
export function KBadge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: "neutral" | "primary" | "accent" | "success" | "warning" | "danger";
  className?: string;
}) {
  const variants = {
    neutral: "bg-muted text-muted-foreground",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/20 text-foreground border border-accent/40",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-orange-100 text-orange-800",
    danger: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Bouton primaire */
export function KButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    accent: "bg-accent text-accent-foreground hover:opacity-90",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    outline: "border border-border bg-card text-foreground hover:bg-muted",
    ghost: "text-foreground hover:bg-muted",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm rounded-lg",
    md: "h-11 px-5 text-sm rounded-lg",
    lg: "h-12 px-6 text-base rounded-xl",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Progress bar linéaire */
export function KProgress({ value, max = 100, className }: { value: number; max?: number; className?: string }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("h-1.5 bg-muted rounded-full overflow-hidden", className)}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/** Bulle Kpé — message court, contextuel */
export function KpeBubble({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex gap-3 items-start", className)}>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
          <path d="M12 2l1.5 5h5L14.5 10l1.5 5-4-3-4 3 1.5-5L5 7h5z" />
        </svg>
      </div>
      <div className="flex-1 bg-primary/5 border border-primary/20 rounded-xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  );
}

/** Onglets contextuels — Résultats, Explorer, Favoris, Profil */
export function KTabs<T extends string>({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: { id: T; label: string; count?: number }[];
  active: T;
  onChange: (id: T) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex border-b border-border overflow-x-auto kpe-scrollbar-hide", className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "px-4 h-12 text-sm font-medium relative whitespace-nowrap transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
            aria-selected={isActive}
            role="tab"
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={cn(
                  "ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                  isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}

/** Empty state avec illustration + CTA */
export function KEmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-muted-foreground" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-sm">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

/** Fake data catalogue — pour maquette */
export const CATALOGUE_METIERS = [
  { id: "dev-web", titre: "Développeur Web", secteur: "Tech", niveau: "Bac +2 min.", debouches: "Forte demande à Lomé, Kara.", salaire: "150 000 – 400 000 FCFA/mois", tags: ["Analytique", "Créatif", "Numérique"] },
  { id: "medecin", titre: "Médecin généraliste", secteur: "Santé", niveau: "Bac +7 min.", debouches: "Recherché en zones rurales et urbaines.", salaire: "500 000 – 1 200 000 FCFA/mois", tags: ["Social", "Analytique", "Sciences"] },
  { id: "enseignant", titre: "Enseignant du secondaire", secteur: "Éducation", niveau: "Licence + CAPES", debouches: "Postes ouverts dans toutes les régions.", salaire: "180 000 – 350 000 FCFA/mois", tags: ["Social", "Communication", "Transmission"] },
  { id: "comptable", titre: "Comptable", secteur: "Gestion", niveau: "BTS / Licence", debouches: "PME, banques, ONG.", salaire: "180 000 – 500 000 FCFA/mois", tags: ["Analytique", "Rigueur", "Chiffres"] },
  { id: "agronome", titre: "Ingénieur agronome", secteur: "Agriculture", niveau: "Bac +5", debouches: "Ministère, coopératives, ONG.", salaire: "400 000 – 900 000 FCFA/mois", tags: ["Sciences", "Terrain", "Impact"] },
  { id: "conseiller-orient", titre: "Conseiller d'orientation", secteur: "Éducation", niveau: "Bac +3", debouches: "CNIOSP, établissements privés.", salaire: "250 000 – 500 000 FCFA/mois", tags: ["Social", "Écoute", "Analyse"] },
  { id: "designer-ux", titre: "Designer UX/UI", secteur: "Tech", niveau: "Bac +3", debouches: "Startups, agences digitales.", salaire: "300 000 – 700 000 FCFA/mois", tags: ["Créatif", "Empathique", "Numérique"] },
  { id: "electricien", titre: "Électricien", secteur: "BTP", niveau: "CAP / BEP", debouches: "Très forte demande urbaine.", salaire: "120 000 – 350 000 FCFA/mois", tags: ["Manuel", "Technique", "Terrain"] },
];

export const CATALOGUE_FORMATIONS = [
  { id: "lic-info", titre: "Licence Informatique", org: "Université de Lomé", ville: "Lomé", niveau: "Licence", duree: "3 ans", frais: "35 000 FCFA/an", statut: "Ouvert", domaine: "Numérique" },
  { id: "bts-info", titre: "BTS Informatique", org: "ESIG Global Success", ville: "Lomé", niveau: "BTS", duree: "2 ans", frais: "450 000 FCFA/an", statut: "Ouvert", domaine: "Numérique" },
  { id: "lic-medecine", titre: "Licence de Médecine", org: "Faculté des Sciences de la Santé — UL", ville: "Lomé", niveau: "Licence + Master", duree: "7 ans", frais: "50 000 FCFA/an", statut: "Concours", domaine: "Santé" },
  { id: "cap-elec", titre: "CAP Électricité bâtiment", org: "Centre Régional de Formation Professionnelle", ville: "Sokodé", niveau: "CAP", duree: "2 ans", frais: "80 000 FCFA/an", statut: "Ouvert", domaine: "BTP" },
  { id: "master-agro", titre: "Master Agronomie", org: "École Supérieure d'Agronomie", ville: "Lomé", niveau: "Master", duree: "2 ans", frais: "120 000 FCFA/an", statut: "Ouvert", domaine: "Agriculture" },
  { id: "bts-compta", titre: "BTS Comptabilité et Gestion", org: "IAEC", ville: "Lomé", niveau: "BTS", duree: "2 ans", frais: "380 000 FCFA/an", statut: "Ouvert", domaine: "Gestion" },
];

export const CATALOGUE_ORGS = [
  { id: "ul", nom: "Université de Lomé", sigle: "UL", type: "Université", statut: "Public", ville: "Lomé", partenaire: true, formations: 42 },
  { id: "ucao", nom: "Université Catholique d'Afrique de l'Ouest — UUT", sigle: "UCAO", type: "Université", statut: "Privé", ville: "Lomé", partenaire: false, formations: 24 },
  { id: "esig", nom: "ESIG Global Success", sigle: "ESIG", type: "École supérieure", statut: "Privé", ville: "Lomé", partenaire: true, formations: 18 },
  { id: "iam", nom: "Institut Africain de Management", sigle: "IAM", type: "École supérieure", statut: "Privé", ville: "Lomé", partenaire: false, formations: 12 },
  { id: "crfp", nom: "Centre Régional de Formation Professionnelle", sigle: "CRFP", type: "Centre de formation", statut: "Public", ville: "Sokodé", partenaire: true, formations: 15 },
  { id: "ista", nom: "Institut Supérieur des Techniques Avancées", sigle: "ISTA", type: "École supérieure", statut: "Privé", ville: "Kara", partenaire: false, formations: 9 },
];
