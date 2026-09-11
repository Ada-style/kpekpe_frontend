import { ReactNode, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home, Compass, Heart, BookOpen, User, LogOut, ChevronRight, Menu, X,
  Search, Bell, Sparkles, HelpCircle, Settings, ChevronsLeft
} from "lucide-react";
import { KpeLogo } from "./KpeLogo";
import { KpePanel } from "./KpePanel";
import { cn } from "@/lib/utils";

const MAIN_NAV = [
  { to: "/web-kpekpe/app/mon-parcours", label: "Mon parcours", icon: Home },
  { to: "/web-kpekpe/app/explorer/metiers", label: "Explorer", icon: Compass, group: "explorer" },
  { to: "/web-kpekpe/app/favoris", label: "Mes favoris", icon: Heart },
  { to: "/web-kpekpe/app/ressources", label: "Ressources", icon: BookOpen },
];

const SECONDARY_NAV = [
  { to: "/web-kpekpe/app/profil", label: "Mon profil", icon: User },
  { to: "#", label: "Paramètres", icon: Settings },
  { to: "#", label: "Aide", icon: HelpCircle },
];

interface KAppLayoutProps {
  children: ReactNode;
  breadcrumbs?: { label: string; to?: string }[];
  kpeContext?: string;
  kpeInitialMessage?: string;
}

/**
 * Layout authentifié — sidebar 240px + topbar 64px + panneau Kpé contextuel.
 * Respecte : sidebar repliable, breadcrumbs desktop, drawer mobile.
 */
export function KAppLayout({ children, breadcrumbs, kpeContext, kpeInitialMessage }: KAppLayoutProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [kpeOpen, setKpeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isExplorerActive = location.pathname.startsWith("/web-kpekpe/app/explorer");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Overlay mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-foreground/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border flex flex-col z-50 transition-all duration-300",
          collapsed ? "w-16" : "w-60",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-border justify-between">
          <Link to="/web-kpekpe/app/mon-parcours" className="flex-shrink-0">
            {collapsed ? <KpeLogo size={28} variant="mark" /> : <KpeLogo size={28} variant="full" />}
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
            aria-label="Fermer le menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main nav */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {MAIN_NAV.map((item) => {
            const Icon = item.icon;
            const active = item.group === "explorer" ? isExplorerActive : location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 h-11 rounded-lg text-sm font-medium transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-muted"
                )}
                aria-current={active ? "page" : undefined}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="w-4.5 h-4.5 flex-shrink-0" size={18} />
                {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
              </NavLink>
            );
          })}

          {/* Explorer sub-nav */}
          {isExplorerActive && !collapsed && (
            <div className="ml-6 pl-3 border-l border-border space-y-0.5 py-1">
              {[
                { to: "/web-kpekpe/app/explorer/metiers", label: "Métiers" },
                { to: "/web-kpekpe/app/explorer/formations", label: "Formations" },
                { to: "/web-kpekpe/app/explorer/organisations", label: "Organisations" },
              ].map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-1.5 rounded-md text-sm transition-colors",
                      isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          )}
        </nav>

        {/* Bottom nav */}
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
            to="/web-kpekpe/connexion"
            className="flex items-center gap-3 px-3 h-10 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            title={collapsed ? "Déconnexion" : undefined}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {!collapsed && <span>Déconnexion</span>}
          </Link>

          {/* Profile chip */}
          {!collapsed && (
            <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
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

      {/* Main */}
      <div
        className={cn(
          "flex-1 flex flex-col min-h-screen transition-[margin] duration-300",
          kpeOpen && "md:mr-[360px]"
        )}
      >
        {/* TopBar */}
        <header className="sticky top-0 z-30 h-16 bg-card/95 backdrop-blur border-b border-border flex items-center px-4 md:px-8 gap-3">
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-muted"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Fil d'ariane">
              {breadcrumbs.map((crumb, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={i === breadcrumbs.length - 1 ? "text-foreground font-medium" : ""}>
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          )}

          <div className="flex-1" />

          {/* Search */}
          <div className="hidden md:block relative">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 h-10 w-72">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Rechercher métiers, formations…"
                  className="flex-1 bg-transparent text-sm outline-none"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-lg hover:bg-muted flex items-center justify-center"
                aria-label="Recherche"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Kpé button */}
          <button
            onClick={() => setKpeOpen(true)}
            className="h-10 px-3 rounded-lg bg-primary/10 text-primary text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/15 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Parler à Kpé</span>
          </button>

          {/* Notifs */}
          <button
            className="w-10 h-10 rounded-lg hover:bg-muted flex items-center justify-center relative"
            aria-label="Notifications"
            title="Bientôt disponible"
          >
            <Bell className="w-4 h-4" />
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      {/* Kpé panel */}
      <KpePanel
        open={kpeOpen}
        onClose={() => setKpeOpen(false)}
        contextTitle={kpeContext}
        initialMessage={kpeInitialMessage}
      />

      {/* Floating Kpé button (mobile) */}
      {!kpeOpen && (
        <button
          onClick={() => setKpeOpen(true)}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center z-30"
          aria-label="Ouvrir Kpé"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
