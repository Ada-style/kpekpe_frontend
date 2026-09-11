import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";

const GROUPS: { title: string; items: { name: string; to: string; note?: string }[] }[] = [
  {
    title: "Public",
    items: [
      { name: "E01 — Landing page", to: "/web-app" },
      { name: "E23 — Explorer métiers (public)", to: "/web-app/explorer/metiers" },
      { name: "E24 — Fiche métier", to: "/web-app/explorer/metiers/dev-web" },
      { name: "E25 — Explorer formations", to: "/web-app/explorer/formations" },
      { name: "E26 — Fiche formation", to: "/web-app/explorer/formations/licence-info" },
      { name: "E27 — Explorer organisations", to: "/web-app/explorer/organisations" },
      { name: "E28 — Fiche organisation", to: "/web-app/explorer/organisations/ul" },
    ],
  },
  {
    title: "Authentification",
    items: [
      { name: "E02 — Inscription", to: "/web-app/register" },
      { name: "E03 — Vérification email", to: "/web-app/verify-email" },
      { name: "E04 — Connexion", to: "/web-app/login" },
      { name: "E05 — Mot de passe oublié", to: "/web-app/forgot-password" },
      { name: "E06 — Réinitialisation mot de passe", to: "/web-app/reset-password" },
    ],
  },
  {
    title: "Onboarding",
    items: [
      { name: "E07 — Onboarding étape 1", to: "/web-app/onboarding?step=1" },
      { name: "E08 — Onboarding étape 2", to: "/web-app/onboarding?step=2" },
      { name: "E09 — Onboarding étape 3", to: "/web-app/onboarding?step=3" },
    ],
  },
  {
    title: "Mon parcours",
    items: [
      { name: "E10 — Mon parcours (avant test)", to: "/web-app/mon-parcours?state=empty" },
      { name: "E11 — Mon parcours (après test)", to: "/web-app/mon-parcours" },
    ],
  },
  {
    title: "Orientation",
    items: [
      { name: "E12 — Présentation du parcours", to: "/web-app/orientation" },
      { name: "E13 — Question choix unique", to: "/web-app/orientation/questionnaire?step=1" },
      { name: "E14 — Question choix multiple", to: "/web-app/orientation/questionnaire?step=2" },
      { name: "E15 — Question texte libre", to: "/web-app/orientation/questionnaire?step=3" },
      { name: "E16 — Question échelle", to: "/web-app/orientation/questionnaire?step=4" },
      { name: "E18 — Traitement / Calcul", to: "/web-app/orientation/calcul" },
    ],
  },
  {
    title: "Résultats (sous-vues séquentielles)",
    items: [
      { name: "E19 — Mon profil", to: "/web-app/resultats?tab=profil" },
      { name: "E20 — Métiers recommandés", to: "/web-app/resultats?tab=metiers" },
      { name: "E21 — Formations recommandées", to: "/web-app/resultats?tab=formations" },
      { name: "E22 — Conseils de Kpékpé", to: "/web-app/resultats?tab=conseils" },
    ],
  },
  {
    title: "Favoris & Ressources",
    items: [
      { name: "E29 — Favoris métiers", to: "/web-app/favoris?tab=metiers" },
      { name: "E30 — Favoris formations (état vide)", to: "/web-app/favoris?tab=formations" },
      { name: "E31 — Ressources (liste)", to: "/web-app/ressources" },
      { name: "E32 — Fiche ressource", to: "/web-app/ressources/choisir-serie" },
    ],
  },
  {
    title: "Profil",
    items: [
      { name: "E33 — Informations personnelles", to: "/web-app/profil?tab=infos" },
      { name: "Situation scolaire", to: "/web-app/profil?tab=scolaire" },
      { name: "Préférences", to: "/web-app/profil?tab=prefs" },
      { name: "E34 — Sécurité", to: "/web-app/profil?tab=securite" },
    ],
  },
  {
    title: "États d'erreur",
    items: [
      { name: "E39 — Erreur réseau", to: "/web-app/erreur-reseau" },
      { name: "E40 — Session expirée", to: "/web-app/session-expiree" },
    ],
  },
];

export default function WebScreens() {
  return (
    <div className="min-h-screen bg-background">
      <header className="h-16 border-b border-border bg-card sticky top-0 z-30">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center gap-3">
          <WebLogo size={28} variant="mark" />
          <span className="font-display font-bold">Kpékpé — Écrans MVP</span>
          <div className="flex-1" />
          <Link to="/web-app" className="text-sm text-muted-foreground hover:text-primary">Retour à l'app</Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl font-black">Tous les écrans</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Annuaire complet des 40 écrans du blueprint MVP V1, organisés par parcours utilisateur.
          Clique sur un écran pour l'ouvrir dans l'app.
        </p>

        <div className="mt-12 space-y-10">
          {GROUPS.map((g) => (
            <section key={g.title}>
              <h2 className="font-display text-xl font-bold border-b border-border pb-2 mb-4">{g.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map((it) => (
                  <Link
                    key={it.to + it.name}
                    to={it.to}
                    className="p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-sm">{it.name}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{it.to}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
