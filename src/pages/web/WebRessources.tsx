import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Search, Clock, BookOpen } from "lucide-react";
import { RESSOURCES } from "@/data/webMockData";

const CATEGORIES = ["Toutes", "Orientation", "Formations", "Insertion"];

export default function WebRessources() {
  return (
    <WebLayout breadcrumbs={[{ label: "Ressources" }]}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end mb-6 gap-4">
          <div>
            <h1 className="font-display text-3xl font-black">Ressources</h1>
            <p className="text-muted-foreground mt-1">Guides, articles et tutoriels sélectionnés par l'équipe Learnia.</p>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Rechercher une ressource…" className="h-11 pl-10 pr-4 rounded-xl border border-input bg-background text-sm w-72" />
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto kpe-scrollbar-hide">
          {CATEGORIES.map((c, i) => (
            <button key={c} className={`h-9 px-4 rounded-full border text-xs font-medium whitespace-nowrap ${i === 0 ? "kpe-gradient-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESSOURCES.map((r) => (
            <Link key={r.id} to={`/web-app/ressources/${r.id}`} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition group">
              <div className="aspect-video kpe-gradient-hero flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary-foreground opacity-70" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-primary uppercase">{r.categorie} · {r.type}</p>
                <p className="font-display font-bold mt-2 group-hover:text-primary transition">{r.titre}</p>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.extrait}</p>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1"><Clock className="w-3 h-3" /> {r.dureeMin} min de lecture</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
