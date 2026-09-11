import { Link, useParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { MapPin, Phone, Mail, Globe, Award, ArrowRight } from "lucide-react";
import { ORGANISATIONS, FORMATIONS } from "@/data/webMockData";

export default function WebFicheOrganisation() {
  const { id } = useParams();
  const o = ORGANISATIONS.find((x) => x.id === id) || ORGANISATIONS[0];
  const formations = FORMATIONS.filter((f) => o.formationsIds.includes(f.id));

  return (
    <WebLayout breadcrumbs={[{ label: "Explorer", to: "/web-app/explorer/organisations" }, { label: "Organisations", to: "/web-app/explorer/organisations" }, { label: o.nom }]}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="kpe-card p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl kpe-gradient-primary flex items-center justify-center text-primary-foreground font-display font-black text-xl">
                {o.sigle.slice(0, 3)}
              </div>
              <div>
                <h1 className="font-display text-3xl font-black">{o.nom}</h1>
                <p className="text-sm text-muted-foreground">{o.sigle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-semibold">{o.type}</span>
              <span className="text-xs px-2.5 py-1 bg-muted rounded-md">{o.statut === "public" ? "Public" : "Privé"}</span>
              {o.partenaire && (
                <span className="text-xs px-2.5 py-1 bg-accent/20 text-accent-foreground rounded-md font-semibold flex items-center gap-1">
                  <Award className="w-3 h-3" /> Partenaire Kpékpé
                </span>
              )}
            </div>
            <p className="text-foreground">{o.description}</p>
          </div>

          {formations.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-lg mb-4">Formations proposées</h2>
              <div className="space-y-3">
                {formations.map((f) => (
                  <Link key={f.id} to={`/web-app/explorer/formations/${f.id}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{f.titre}</p>
                        <p className="text-xs text-muted-foreground mt-1">{f.niveau} · {f.dureeMois} mois</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="kpe-card p-5 space-y-3 text-sm">
            <p className="font-semibold">Contact</p>
            <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> {o.ville}</p>
            {o.telephone && <p className="flex items-center gap-2 text-muted-foreground"><Phone className="w-4 h-4 text-primary" /> {o.telephone}</p>}
            {o.email && <p className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4 text-primary" /> {o.email}</p>}
            {o.siteWeb && (
              <a href={o.siteWeb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium hover:underline">
                <Globe className="w-4 h-4" /> Site web
              </a>
            )}
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
