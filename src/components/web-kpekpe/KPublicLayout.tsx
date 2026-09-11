import { Link, NavLink } from "react-router-dom";
import { ReactNode, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { KpeLogo } from "./KpeLogo";
import { cn } from "@/lib/utils";

/**
 * Layout public — E01, Explorer public, Comment ça marche, À propos.
 * TopBar unique, menu Découvrir déroulant, CTAs Connexion + Commencer gratuitement.
 */
export function KPublicLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* TopBar */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-[1280px] mx-auto h-16 px-4 md:px-8 flex items-center justify-between gap-4">
          <Link to="/web-kpekpe" className="flex-shrink-0">
            <KpeLogo size={32} variant="full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setDiscoverOpen(true)}
              onMouseLeave={() => setDiscoverOpen(false)}
            >
              <button className="px-3 h-10 rounded-lg text-sm font-medium text-foreground hover:bg-muted flex items-center gap-1 transition-colors">
                Découvrir <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {discoverOpen && (
                <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                  <div className="bg-card border border-border rounded-xl shadow-elevated p-2">
                    {[
                      { to: "/web-kpekpe/explorer/metiers", label: "Métiers", desc: "350+ métiers du Togo" },
                      { to: "/web-kpekpe/explorer/formations", label: "Formations", desc: "Cursus disponibles" },
                      { to: "/web-kpekpe/explorer/organisations", label: "Organisations", desc: "97 établissements" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/web-kpekpe/comment-ca-marche"
              className={({ isActive }) =>
                cn(
                  "px-3 h-10 rounded-lg text-sm font-medium flex items-center transition-colors",
                  isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                )
              }
            >
              Comment ça marche
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/web-kpekpe/connexion"
              className="h-10 px-4 rounded-lg text-sm font-semibold text-foreground hover:bg-muted flex items-center transition-colors"
            >
              Connexion
            </Link>
            <Link
              to="/web-kpekpe/inscription"
              className="h-10 px-4 rounded-lg text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 flex items-center transition-opacity"
            >
              Commencer gratuitement
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-muted"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
            {[
              { to: "/web-kpekpe/explorer/metiers", label: "Métiers" },
              { to: "/web-kpekpe/explorer/formations", label: "Formations" },
              { to: "/web-kpekpe/explorer/organisations", label: "Organisations" },
              { to: "/web-kpekpe/comment-ca-marche", label: "Comment ça marche" },
              { to: "/web-kpekpe/connexion", label: "Connexion" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/web-kpekpe/inscription"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold bg-accent text-accent-foreground text-center"
            >
              Commencer gratuitement
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <KpeLogo size={28} variant="full" />
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                La plateforme d'orientation gratuite pour les jeunes du Togo et d'Afrique de l'Ouest.
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground mb-3">Découvrir</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/web-kpekpe/explorer/metiers" className="hover:text-primary">Métiers</Link></li>
                <li><Link to="/web-kpekpe/explorer/formations" className="hover:text-primary">Formations</Link></li>
                <li><Link to="/web-kpekpe/explorer/organisations" className="hover:text-primary">Organisations</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground mb-3">À propos</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/web-kpekpe/comment-ca-marche" className="hover:text-primary">Comment ça marche</Link></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
            © 2026 Kpékpé — Soutenu par OIF D-CLIC/HPI en partenariat avec le CNIOSP.
          </div>
        </div>
      </footer>
    </div>
  );
}
