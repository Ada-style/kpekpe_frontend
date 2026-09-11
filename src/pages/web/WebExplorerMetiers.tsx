import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Search, Filter, Heart, MapPin } from "lucide-react";
import { METIERS } from "@/data/webMockData";

const SECTEURS = ["Tous", "Numérique", "Santé", "Agriculture", "Éducation", "Finance", "Créatif"];

export default function WebExplorerMetiers() {
  return (
    <WebLayout breadcrumbs={[{ label: "Explorer" }, { label: "Métiers" }]}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-black">Métiers</h1>
              <p className="text-muted-foreground mt-1 text-sm">350+ métiers disponibles au Togo.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Rechercher un métier…" className="w-full h-10 pl-10 pr-4 rounded-xl border border-input bg-background text-sm" />
            </div>
            <button className="h-10 px-3 rounded-xl border border-border flex items-center gap-2 text-sm hover:bg-muted flex-shrink-0">
              <Filter className="w-4 h-4" /> <span className="hidden sm:inline">Filtres</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto kpe-scrollbar-hide">
          {SECTEURS.map((s, i) => (
            <button key={s} className={`h-9 px-4 rounded-full border text-xs font-medium whitespace-nowrap ${i === 0 ? "kpe-gradient-primary text-primary-foreground border-transparent" : "border-border text-foreground hover:bg-muted"}`}>
              {s}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {METIERS.map((m) => (
            <Link key={m.id} to={`/web-app/explorer/metiers/${m.id}`} className="p-4 sm:p-5 rounded-2xl border border-border bg-card hover:shadow-md transition group">
              <div className="flex justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-semibold">{m.secteur}</span>
                <button className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" onClick={(e) => { e.preventDefault(); }}>
                  <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg group-hover:text-primary transition">{m.titre}</h3>
              <p className="text-xs text-muted-foreground mt-1">Niveau min. : {m.niveauMin}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2 flex gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                {m.debouches}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
