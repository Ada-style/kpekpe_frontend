import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Search, Filter, Heart, MapPin, Award } from "lucide-react";
import { ORGANISATIONS } from "@/data/webMockData";

const TYPES = ["Tous", "Université", "École supérieure", "Centre de formation", "Bootcamp"];

export default function WebExplorerOrganisations() {
  return (
    <WebLayout breadcrumbs={[{ label: "Explorer" }, { label: "Organisations" }]}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display text-3xl font-black">Organisations</h1>
            <p className="text-muted-foreground mt-1">97+ écoles, universités et centres de formation au Togo.</p>
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
          {TYPES.map((s, i) => (
            <button key={s} className={`h-9 px-4 rounded-full border text-xs font-medium whitespace-nowrap ${i === 0 ? "kpe-gradient-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted"}`}>
              {s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ORGANISATIONS.map((o) => (
            <Link key={o.id} to={`/web-app/explorer/organisations/${o.id}`} className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-12 rounded-xl kpe-gradient-primary flex items-center justify-center text-primary-foreground font-black">
                  {o.sigle.slice(0, 3)}
                </div>
                <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center" onClick={(e) => e.preventDefault()}>
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-display font-bold group-hover:text-primary transition">{o.nom}</h3>
              <p className="text-xs text-muted-foreground mt-1">{o.type} · {o.statut === "public" ? "Public" : "Privé"}</p>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {o.ville}</p>
              {o.partenaire && (
                <span className="mt-3 inline-flex items-center gap-1 text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-md font-semibold">
                  <Award className="w-3 h-3" /> Partenaire Kpékpé
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
