import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Search, Filter, Heart, Clock, MapPin } from "lucide-react";
import { FORMATIONS } from "@/data/webMockData";

const DOMAINES = ["Tous", "Informatique", "Santé", "Agriculture", "Éducation"];

const STATUT_STYLES = {
  ouvert: "bg-primary/10 text-primary",
  ferme: "bg-muted text-muted-foreground",
  complet: "bg-destructive/10 text-destructive",
};

export default function WebExplorerFormations() {
  return (
    <WebLayout breadcrumbs={[{ label: "Explorer" }, { label: "Formations" }]}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display text-3xl font-black">Formations</h1>
            <p className="text-muted-foreground mt-1">Trouve la formation qui te correspond, à Lomé ou dans les régions.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Rechercher…" className="h-11 pl-10 pr-4 rounded-xl border border-input bg-background text-sm w-72" />
            </div>
            <button className="h-11 px-4 rounded-xl border border-border flex items-center gap-2 text-sm hover:bg-muted">
              <Filter className="w-4 h-4" /> Filtres
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto kpe-scrollbar-hide">
          {DOMAINES.map((s, i) => (
            <button key={s} className={`h-9 px-4 rounded-full border text-xs font-medium whitespace-nowrap ${i === 0 ? "kpe-gradient-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted"}`}>
              {s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FORMATIONS.map((f) => (
            <Link key={f.id} to={`/web-app/explorer/formations/${f.id}`} className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs px-2 py-1 rounded-md font-semibold capitalize ${STATUT_STYLES[f.statut]}`}>
                  {f.statut === "ouvert" ? "Candidatures ouvertes" : f.statut === "ferme" ? "Fermé" : "Complet"}
                </span>
                <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center" onClick={(e) => e.preventDefault()}>
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-display font-bold group-hover:text-primary transition">{f.titre}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.organisation} · <MapPin className="inline w-3 h-3" /> {f.ville}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-muted rounded-md">{f.niveau}</span>
                <span className="px-2 py-1 bg-muted rounded-md flex items-center gap-1"><Clock className="w-3 h-3" /> {f.dureeMois} mois</span>
                {f.frais && <span className="px-2 py-1 bg-muted rounded-md">{f.frais}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
