import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Clock, Heart, BookOpen, Compass, Play, RefreshCw } from "lucide-react";
import { KAppLayout } from "@/components/web-kpekpe/KAppLayout";
import { KCard, KButton, KBadge, KpeBubble, CATALOGUE_METIERS } from "@/components/web-kpekpe/KPrimitives";
import { useState } from "react";

/** E10 (avant test) + E11 (après test) — bascule via toggle démo */
export default function KMonParcours() {
  const [hasResults, setHasResults] = useState(true);

  return (
    <KAppLayout
      breadcrumbs={[{ label: "Mon parcours" }]}
      kpeContext="Mon parcours"
      kpeInitialMessage="Bonjour Kofi ! Je suis là si tu veux explorer davantage tes résultats ou reprendre ton orientation."
    >
      {/* Toggle démo */}
      <div className="mb-6 flex items-center gap-2 text-xs">
        <span className="text-muted-foreground">Aperçu :</span>
        <button
          onClick={() => setHasResults(false)}
          className={`px-3 py-1 rounded-full ${!hasResults ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
        >
          Avant test
        </button>
        <button
          onClick={() => setHasResults(true)}
          className={`px-3 py-1 rounded-full ${hasResults ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
        >
          Après test
        </button>
      </div>

      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Bonjour Kofi 👋</h1>
        <p className="text-muted-foreground mt-1">
          {hasResults ? "Voici ton parcours d'orientation." : "Ton aventure d'orientation commence ici."}
        </p>
      </div>

      {!hasResults ? (
        <div className="grid md:grid-cols-3 gap-6">
          <KCard className="md:col-span-2 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-black">Commence ton orientation</h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                Réponds à quelques questions guidées par Kpé et découvre les métiers qui correspondent à ton profil.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Environ 20 minutes</span>
                <span>Reprise possible à tout moment</span>
              </div>
              <Link to="/web-kpekpe/app/orientation" className="inline-block mt-6">
                <KButton variant="primary" size="lg">
                  Commencer mon orientation <ArrowRight className="w-4 h-4" />
                </KButton>
              </Link>
            </div>
          </KCard>
          <KCard className="p-6 space-y-4">
            <h3 className="font-display font-bold">Comment ça marche</h3>
            {[
              { n: 1, t: "Réponds", d: "Questions guidées par Kpé" },
              { n: 2, t: "Découvre", d: "Ton profil personnalisé" },
              { n: 3, t: "Explore", d: "Métiers et formations réels" },
            ].map((s) => (
              <div key={s.n} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">{s.n}</div>
                <div>
                  <p className="font-semibold text-sm">{s.t}</p>
                  <p className="text-xs text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </KCard>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Résumé */}
          <KCard className="md:col-span-2 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <KBadge variant="primary" className="mb-2">Ton profil</KBadge>
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">Analytique-Social</h2>
                <p className="text-sm text-muted-foreground mt-1">Dernier test : il y a 3 jours</p>
              </div>
              <Link to="/web-kpekpe/app/resultats">
                <KButton variant="primary" size="md">Voir mon résultat complet <ArrowRight className="w-4 h-4" /></KButton>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[{ l: "Passion", v: 82 }, { l: "Talent", v: 68 }, { l: "Besoins", v: 74 }, { l: "Aspiration", v: 90 }].map((d) => (
                <div key={d.l} className="p-3 rounded-lg bg-muted/50">
                  <p className="text-xs text-muted-foreground">{d.l}</p>
                  <p className="font-display text-xl font-black text-primary">{d.v}%</p>
                  <div className="mt-1.5 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${d.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </KCard>

          {/* Kpé */}
          <KCard className="p-6">
            <KpeBubble>
              Tu as exploré le métier de développeur. Veux-tu voir les formations disponibles à Lomé ?
            </KpeBubble>
            <Link to="/web-kpekpe/app/explorer/formations" className="mt-4 inline-flex text-sm text-primary font-semibold hover:underline items-center gap-1">
              Voir les formations <ArrowRight className="w-3 h-3" />
            </Link>
          </KCard>

          {/* Recos */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg">Tes recommandations récentes</h3>
              <Link to="/web-kpekpe/app/resultats" className="text-sm text-primary font-semibold hover:underline">Voir tout</Link>
            </div>
            {CATALOGUE_METIERS.slice(0, 3).map((m, i) => (
              <Link key={m.id} to={`/web-kpekpe/app/explorer/metiers/${m.id}`}>
                <KCard className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold truncate">{m.titre}</p>
                    <p className="text-xs text-muted-foreground truncate">{m.debouches}</p>
                  </div>
                  <KBadge variant="primary">{95 - i * 4}%</KBadge>
                </KCard>
              </Link>
            ))}
          </div>

          {/* Favoris */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg">Mes favoris</h3>
              <Link to="/web-kpekpe/app/favoris" className="text-sm text-primary font-semibold hover:underline">Voir tout</Link>
            </div>
            {CATALOGUE_METIERS.slice(3, 5).map((m) => (
              <KCard key={m.id} className="p-3 flex items-center gap-3">
                <Heart className="w-4 h-4 fill-destructive text-destructive flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{m.titre}</p>
                  <p className="text-xs text-muted-foreground truncate">{m.secteur}</p>
                </div>
              </KCard>
            ))}
          </div>

          {/* Actions rapides */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-lg mb-3">Actions rapides</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { to: "/web-kpekpe/app/explorer/metiers", icon: Compass, label: "Explorer d'autres métiers" },
                { to: "/web-kpekpe/app/orientation", icon: RefreshCw, label: "Refaire l'orientation" },
                { to: "/web-kpekpe/app/ressources", icon: BookOpen, label: "Lire des ressources" },
              ].map((a) => (
                <Link key={a.to} to={a.to}>
                  <KCard className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">{a.label}</span>
                  </KCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </KAppLayout>
  );
}
