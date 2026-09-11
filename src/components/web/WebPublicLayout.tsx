import { ReactNode, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";
import { cn } from "@/lib/utils";

/** Layout public — TopBar uniquement, pas de sidebar. */
export function WebPublicLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-40 h-16 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center gap-6">
          <Link to="/web-app" className="flex items-center">
            <WebLogo size={36} variant="full" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm text-foreground">
            <div className="relative" onMouseLeave={() => setDiscoverOpen(false)}>
              <button
                onMouseEnter={() => setDiscoverOpen(true)}
                className="h-16 px-3 flex items-center gap-1 hover:text-primary"
              >
                Découvrir <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {discoverOpen && (
                <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2">
                  {[
                    { to: "/web-app/explorer/metiers", label: "Métiers" },
                    { to: "/web-app/explorer/formations", label: "Formations" },
                    { to: "/web-app/explorer/organisations", label: "Organisations" },
                  ].map((l) => (
                    <Link key={l.to} to={l.to} className="block px-4 py-2 text-sm hover:bg-muted">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="#comment" className="h-16 px-3 flex items-center hover:text-primary">Comment ça marche</a>
            <a href="#pourquoi" className="h-16 px-3 flex items-center hover:text-primary">À propos</a>
          </nav>

          <div className="flex-1" />
          <Link to="/web-app/screens" className="hidden md:block text-xs text-muted-foreground hover:text-primary">
            Voir tous les écrans
          </Link>
          <Link to="/web-app/login" className="hidden sm:inline text-sm font-medium text-foreground hover:text-primary">
            Connexion
          </Link>
          <Link
            to="/web-app/register"
            className="h-10 px-4 rounded-lg kpe-gradient-primary text-primary-foreground text-sm font-semibold flex items-center hover:opacity-90"
          >
            Commencer gratuitement
          </Link>
          <button className="md:hidden ml-2" onClick={() => setMobileOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden fixed inset-0 bg-background z-50 p-6">
            <div className="flex justify-between items-center mb-8">
              <WebLogo size={32} variant="full" />
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <nav className="space-y-3 text-lg">
              {[
                { to: "/web-app/explorer/metiers", label: "Métiers" },
                { to: "/web-app/explorer/formations", label: "Formations" },
                { to: "/web-app/explorer/organisations", label: "Organisations" },
                { to: "/web-app/login", label: "Connexion" },
              ].map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block py-2">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="mb-3">
              <WebLogo size={28} variant="full" />
            </div>
            <p className="text-muted-foreground">
              L'orientation académique et professionnelle des jeunes togolais, en 20 minutes.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">Produit</p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link to="/web-app/explorer/metiers" className="hover:text-primary">Métiers</Link></li>
              <li><Link to="/web-app/explorer/formations" className="hover:text-primary">Formations</Link></li>
              <li><Link to="/web-app/explorer/organisations" className="hover:text-primary">Organisations</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Kpékpé</p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>À propos</li><li>Contact</li><li>Blog</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Légal</p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>Mentions légales</li><li>Confidentialité</li><li>CGU</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © 2026 Kpékpé — Fait au Togo 🇹🇬
        </div>
      </footer>
    </div>
  );
}
