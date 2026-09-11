import { Link, useParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Heart, ArrowRight, MapPin, Clock, Wallet, GraduationCap, Sparkles } from "lucide-react";
import { FORMATIONS, ORGANISATIONS, METIERS } from "@/data/webMockData";

export default function WebFicheFormation() {
  const { id } = useParams();
  const f = FORMATIONS.find((x) => x.id === id) || FORMATIONS[0];
  const org = ORGANISATIONS.find((o) => o.id === f.orgId);
  const metiers = METIERS.filter((m) => f.metiersIds.includes(m.id));

  return (
    <WebLayout breadcrumbs={[{ label: "Explorer", to: "/web-app/explorer/formations" }, { label: "Formations", to: "/web-app/explorer/formations" }, { label: f.titre }]}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="kpe-card p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-semibold">{f.domaine}</span>
              <span className="text-xs px-2.5 py-1 bg-muted rounded-md">{f.niveau}</span>
              <span className="text-xs px-2.5 py-1 bg-muted rounded-md flex items-center gap-1"><Clock className="w-3 h-3" />{f.dureeMois} mois</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-black">{f.titre}</h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {f.organisation} · {f.ville}</p>
            <p className="mt-4 text-foreground">{f.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {org && (
                <Link to={`/web-app/explorer/organisations/${org.id}`} className="h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
                  Voir l'organisation <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <button className="h-11 px-5 rounded-xl border border-border font-medium flex items-center gap-2 hover:bg-muted">
                <Heart className="w-4 h-4" /> Ajouter aux favoris
              </button>
            </div>
          </div>

          <div className="kpe-card p-6">
            <h2 className="font-display font-bold text-lg mb-2 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />Conditions d'admission</h2>
            <p className="text-sm text-foreground">{f.admission}</p>
          </div>

          {f.frais && (
            <div className="kpe-card p-6">
              <h2 className="font-display font-bold text-lg mb-2 flex items-center gap-2"><Wallet className="w-5 h-5 text-primary" />Frais annuels</h2>
              <p className="text-2xl font-display font-black text-primary">{f.frais}</p>
            </div>
          )}

          {metiers.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-lg mb-4">Métiers accessibles</h2>
              <div className="space-y-2">
                {metiers.map((m) => (
                  <Link key={m.id} to={`/web-app/explorer/metiers/${m.id}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{m.titre}</p>
                        <p className="text-xs text-muted-foreground mt-1">{m.secteur}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-semibold">Lien direct</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {org && (
          <div className="space-y-4">
            <div className="kpe-card p-5">
              <p className="text-xs text-muted-foreground uppercase">Organisation</p>
              <h3 className="font-display font-bold text-lg mt-1">{org.nom}</h3>
              <p className="text-xs text-muted-foreground">{org.type} · {org.statut === "public" ? "Public" : "Privé"} · {org.ville}</p>
              {org.partenaire && (
                <span className="mt-3 inline-block text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-md font-semibold">Partenaire Kpékpé</span>
              )}
              <Link to={`/web-app/explorer/organisations/${org.id}`} className="mt-4 block w-full h-10 rounded-lg border border-border text-sm font-medium flex items-center justify-center hover:bg-muted">
                Voir la fiche
              </Link>
            </div>
            <div className="kpe-card p-5">
              <Sparkles className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm">Kpékpé peut te dire si cette formation correspond à ton profil.</p>
              <button className="w-full mt-3 h-10 rounded-lg bg-primary/10 text-primary text-sm font-semibold">Demander à Kpékpé</button>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
