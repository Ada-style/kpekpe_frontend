import { Link, useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Heart, Search, ArrowRight } from "lucide-react";
import { METIERS, FORMATIONS } from "@/data/webMockData";
import { cn } from "@/lib/utils";

export default function WebFavoris() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "metiers";
  const setTab = (id: string) => setParams({ tab: id });

  // Simulation : 2 métiers favoris, 0 formations pour montrer état vide
  const metiersFav = METIERS.slice(0, 2);
  const formationsFav: typeof FORMATIONS = [];

  return (
    <WebLayout breadcrumbs={[{ label: "Mes favoris" }]}>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-3xl font-black">Mes favoris</h1>
        <p className="text-muted-foreground mt-1">Retrouve ici tout ce que tu as sauvegardé.</p>

        <div className="mt-6 border-b border-border flex gap-1">
          {[
            { id: "metiers", label: `Métiers (${metiersFav.length})` },
            { id: "formations", label: `Formations (${formationsFav.length})` },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-12 px-5 text-sm font-semibold border-b-2 -mb-px transition",
                tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "metiers" && (
            metiersFav.length > 0 ? (
              <div className="space-y-3">
                {metiersFav.map((m) => (
                  <div key={m.id} className="kpe-card p-4 flex items-center gap-4">
                    <div className="flex-1">
                      <p className="font-semibold">{m.titre}</p>
                      <p className="text-xs text-muted-foreground">{m.secteur}</p>
                    </div>
                    <button className="w-9 h-9 rounded-lg text-destructive hover:bg-destructive/10 flex items-center justify-center">
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                    <Link to={`/web-app/explorer/metiers/${m.id}`} className="h-9 px-4 rounded-lg kpe-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                      Voir la fiche <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Tu n'as pas encore sauvegardé de métiers"
                subtitle="Ajoute des métiers à tes favoris pour les retrouver ici."
                cta="Explorer les métiers"
                to="/web-app/explorer/metiers"
              />
            )
          )}
          {tab === "formations" && (
            <EmptyState
              title="Tu n'as pas encore sauvegardé de formations"
              subtitle="Ajoute des formations à tes favoris pour les retrouver ici."
              cta="Explorer les formations"
              to="/web-app/explorer/formations"
            />
          )}
        </div>
      </div>
    </WebLayout>
  );
}

function EmptyState({ title, subtitle, cta, to }: { title: string; subtitle: string; cta: string; to: string }) {
  return (
    <div className="text-center py-16 rounded-3xl border-2 border-dashed border-border">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-4">
        <Search className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="font-display font-bold text-lg">{title}</p>
      <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
      <Link to={to} className="mt-6 inline-flex h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold items-center gap-2">
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
