import { ReactNode, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home, GraduationCap, User, LogOut, Menu, X,
  Search, Bell, HelpCircle, Settings, ChevronsLeft, ChevronRight,
  Briefcase, BookOpen, Building2, Library, Heart, Users, FileText, CreditCard,
  Compass, ShieldCheck
} from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";
import { WebKpePanel } from "./WebKpePanel";
import kpeAvatar from "@/assets/icone_ia.png";
import { cn } from "@/lib/utils";

export type UserRole = "student" | "parent" | "tutor" | "counselor";

// 1. Navigation exclusive pour l'ÉLÈVE (100% axée sur les études, pas de paiement)
const NAV_STUDENT = [
  { to: "/web-app/mon-parcours", label: "Mon parcours", icon: Home },
  { to: "/web-app/cours", label: "Cours & Révisions", icon: BookOpen },
  { to: "/web-app/learnia", label: "Orientation", icon: GraduationCap, group: "learnia" },
  { to: "/web-app/bulletins", label: "Mes Bulletins & Notes", icon: FileText },
  { to: "/web-app/repetiteurs", label: "Répétiteurs Lomé", icon: Users },
];

// 2. Navigation exclusive pour le PARENT (C'est le parent qui finance la scolarité)
const NAV_PARENT = [
  { to: "/web-app/orientation-parent", label: "Orientation de mon Enfant", icon: Compass },
  { to: "/web-app/repetiteurs", label: "Trouver un Répétiteur", icon: Users },
  { to: "/web-app/abonnements", label: "Abonnement Kpékpé", icon: CreditCard },
];

// 3. Navigation exclusive pour le RÉPÉTITEUR (Espace Pro)
const NAV_TUTOR = [
  { to: "/web-app/repetiteur-dashboard?tab=demandes", label: "Mes Demandes & Cours", icon: Briefcase },
  { to: "/web-app/repetiteur-dashboard?tab=dispo", label: "Mes Disponibilités & Quartiers", icon: Settings },
  { to: "/web-app/repetiteur-dashboard?tab=kyc", label: "Mes Pièces Officielles (KYC)", icon: ShieldCheck },
  { to: "/web-app/repetiteur-dashboard?tab=abonnement", label: "Mon Abonnement Pro", icon: CreditCard },
];

// 4. Navigation exclusive pour le CONSEILLER D'ORIENTATION (Espace Pro)
const NAV_COUNSELOR = [
  { to: "/web-app/conseiller-dashboard?tab=dossiers", label: "Dossiers d'Orientation", icon: Compass },
  { to: "/web-app/conseiller-dashboard?tab=archives", label: "Bilans Validés", icon: FileText },
  { to: "/web-app/conseiller-dashboard?tab=agrement", label: "Mon Agrément & Profil", icon: ShieldCheck },
];

const LEARNIA_SUB = [
  { to: "/web-app/learnia", label: "Vue d'ensemble", icon: GraduationCap, exact: true },
  { to: "/web-app/bulletins", label: "Scanner Bulletin", icon: FileText },
  { to: "/web-app/explorer/metiers", label: "Métiers", icon: Briefcase },
  { to: "/web-app/explorer/formations", label: "Formations", icon: BookOpen },
  { to: "/web-app/explorer/organisations", label: "Organisations", icon: Building2 },
  { to: "/web-app/ressources", label: "Ressources", icon: Library },
  { to: "/web-app/favoris", label: "Mes favoris", icon: Heart },
];

const SECONDARY_NAV = [
  { to: "/web-app/profil", label: "Mon profil", icon: User },
  { to: "#", label: "Aide & Support", icon: HelpCircle },
];

interface Props {
  children: ReactNode;
  breadcrumbs?: { label: string; to?: string }[];
  kpeContext?: string;
  kpeInitialMessage?: string;
}

export function WebLayout({ children, breadcrumbs, kpeContext, kpeInitialMessage }: Props) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [kpeOpen, setKpeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Détection du rôle selon la page consultée (comme l'app Gozem Client vs Gozem Champion)
  const isCounselor = location.pathname.includes("conseiller");
  const isTutor = location.pathname.includes("repetiteur-dashboard");
  const isParent = location.pathname.includes("parent");

  const currentNav = isCounselor
    ? NAV_COUNSELOR
    : isTutor
    ? NAV_TUTOR
    : isParent
    ? NAV_PARENT
    : NAV_STUDENT;

  const currentRoleBadge = isCounselor
    ? "Conseiller d'Orientation"
    : isTutor
    ? "Répétiteur Certifié"
    : isParent
    ? "Espace Parent"
    : "Élève (Série D)";

  const isLearniaActive =
    location.pathname.startsWith("/web-app/learnia") ||
    location.pathname.startsWith("/web-app/explorer") ||
    location.pathname.startsWith("/web-app/ressources") ||
    location.pathname.startsWith("/web-app/favoris");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Overlay mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-foreground/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* SIDEBAR — masquée sur mobile, remplacée par le drawer */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border flex flex-col z-50 transition-all duration-300",
          collapsed ? "w-16" : "w-60",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-16 flex items-center px-4 border-b border-border justify-between">
          <Link to="/web-app/mon-parcours" className="flex items-center flex-shrink-0">
            {collapsed ? <WebLogo size={26} variant="mark" /> : <WebLogo size={30} variant="full" />}
          </Link>
          <button
            className="hidden lg:flex w-7 h-7 rounded-md items-center justify-center hover:bg-muted"
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Replier la sidebar"
          >
            <ChevronsLeft className={cn("w-4 h-4 transition-transform", collapsed && "rotate-180")} />
          </button>
          <button
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Badge d'espace actif (Style Gozem Client / Champion) */}
        {!collapsed && (
          <div className="px-4 py-2 border-b border-border/50 bg-muted/20">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
              Espace actif :
            </span>
            <span className="text-xs font-bold text-primary">
              {currentRoleBadge}
            </span>
          </div>
        )}

        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {currentNav.map((item) => {
            const Icon = item.icon;
            const active = item.group === "learnia" ? isLearniaActive : location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 h-11 rounded-lg text-sm font-medium transition-all",
                  active ? "kpe-gradient-primary text-primary-foreground shadow-sm" : "text-foreground hover:bg-muted"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon size={18} className="flex-shrink-0" />
                {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
              </NavLink>
            );
          })}

          {isLearniaActive && !collapsed && (
            <div className="ml-6 pl-3 border-l border-border space-y-0.5 py-1">
              {LEARNIA_SUB.map((sub) => {
                const SubIcon = sub.icon;
                const active = sub.exact
                  ? location.pathname === sub.to
                  : location.pathname.startsWith(sub.to);
                return (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors",
                      active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <SubIcon size={14} className="flex-shrink-0" />
                    {sub.label}
                  </NavLink>
                );
              })}
            </div>
          )}
        </nav>

        <div className="py-3 px-2 border-t border-border space-y-1">
          {SECONDARY_NAV.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 h-10 rounded-lg text-sm font-medium",
                  active ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon size={18} className="flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
          <Link
            to="/web-app/login"
            className="flex items-center gap-3 px-3 h-10 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            title={collapsed ? "Déconnexion" : undefined}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {!collapsed && <span>Déconnexion</span>}
          </Link>

          {!collapsed && (
            <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full kpe-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                K
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">Kofi</p>
                <p className="text-[10px] text-muted-foreground truncate">Terminale D</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <div className={cn("flex-1 flex flex-col min-h-screen transition-[margin] duration-300", kpeOpen && "md:mr-[360px]")}>
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 h-14 md:h-16 bg-card/95 backdrop-blur border-b border-border flex items-center px-3 md:px-6 gap-2 md:gap-3">
          {/* Bouton hamburger mobile */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-muted flex-shrink-0"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Breadcrumbs — desktop uniquement */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground flex-1 min-w-0">
              {breadcrumbs.map((crumb, i) => (
                <div key={i} className="flex items-center gap-1.5 min-w-0">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-primary transition-colors truncate">{crumb.label}</Link>
                  ) : (
                    <span className={cn("truncate", i === breadcrumbs.length - 1 ? "text-foreground font-medium" : "")}>{crumb.label}</span>
                  )}
                </div>
              ))}
            </nav>
          )}

          <div className="flex-1" />

          {/* Barre de recherche — desktop */}
          <div className="hidden md:block relative">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 h-9 w-64">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Rechercher métiers, formations…"
                  className="flex-1 bg-transparent text-sm outline-none"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="w-9 h-9 rounded-lg hover:bg-muted flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bouton Kpé — version desktop avec libellé, mobile juste l'icône */}
          <button
            onClick={() => setKpeOpen(true)}
            className="h-9 md:h-10 px-2 md:px-3 rounded-lg bg-primary/10 text-primary text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/15 transition-colors"
          >
            <img src={kpeAvatar} alt="Kpé" className="w-5 h-5 rounded-full object-cover" />
            <span className="hidden sm:inline text-xs md:text-sm">Parler à Kpékpé</span>
          </button>

          <button className="w-9 h-9 rounded-lg hover:bg-muted flex items-center justify-center relative" title="Bientôt disponible">
            <Bell className="w-4 h-4" />
          </button>
        </header>

        {/* PAGE CONTENT — avec padding bas pour éviter la Bottom Nav sur mobile */}
        <main className="flex-1 p-3 md:p-6 lg:p-8 pb-24 lg:pb-6">{children}</main>
      </div>

      {/* PANNEAU KPE */}
      <WebKpePanel open={kpeOpen} onClose={() => setKpeOpen(false)} contextTitle={kpeContext} initialMessage={kpeInitialMessage} />

      {/* BOTTOM NAVIGATION — mobile uniquement (< lg), adaptée au rôle actif */}
      {!mobileOpen && !kpeOpen && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-card/95 backdrop-blur border-t border-border z-30 flex items-center">
          {currentNav.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to || (item.group === "learnia" && isLearniaActive);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center gap-1 h-full text-[10px] font-medium transition-colors",
                  active ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={18} className={cn(active && "scale-110 transition-transform")} />
                <span className="truncate max-w-[70px]">{item.label}</span>
              </Link>
            );
          })}
          {/* Bouton Kpé central */}
          <button
            onClick={() => setKpeOpen(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 h-full"
          >
            <img src={kpeAvatar} alt="Kpé" className="w-8 h-8 rounded-full object-cover border-2 border-primary shadow-sm" />
            <span className="text-[10px] font-medium text-primary">Kpékpé</span>
          </button>
        </nav>
      )}
    </div>
  );
}
