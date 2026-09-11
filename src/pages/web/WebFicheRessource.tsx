import { Link, useParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { RESSOURCES, METIERS } from "@/data/webMockData";

export default function WebFicheRessource() {
  const { id } = useParams();
  const r = RESSOURCES.find((x) => x.id === id) || RESSOURCES[0];
  const metiers = METIERS.filter((m) => r.metiersIds.includes(m.id));

  return (
    <WebLayout breadcrumbs={[{ label: "Ressources", to: "/web-app/ressources" }, { label: r.titre }]}>
      <article className="max-w-3xl mx-auto">
        <div className="aspect-[2/1] rounded-3xl kpe-gradient-hero flex items-center justify-center mb-8">
          <BookOpen className="w-16 h-16 text-primary-foreground opacity-70" />
        </div>
        <div className="flex flex-wrap gap-2 mb-3 text-xs">
          <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-md font-semibold">{r.categorie}</span>
          <span className="px-2.5 py-1 bg-muted rounded-md">{r.type}</span>
          <span className="px-2.5 py-1 bg-muted rounded-md flex items-center gap-1"><Clock className="w-3 h-3" />{r.dureeMin} min</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-black">{r.titre}</h1>
        <p className="text-lg text-muted-foreground mt-4">{r.extrait}</p>
        <div className="mt-8 prose prose-sm max-w-none text-foreground leading-relaxed">
          <p>{r.contenu}</p>
          <p className="mt-4">Cette ressource fait partie du programme Learnia, notre bibliothèque de contenus pédagogiques créée pour t'accompagner à chaque étape de ton orientation.</p>
          <p className="mt-4">N'hésite pas à revenir la consulter plusieurs fois : les décisions d'orientation se prennent rarement d'un seul coup.</p>
        </div>

        {metiers.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display font-bold text-lg mb-4">Métiers liés à cette ressource</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {metiers.map((m) => (
                <Link key={m.id} to={`/web-app/explorer/metiers/${m.id}`} className="p-4 rounded-xl border border-border bg-card hover:border-primary transition flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{m.titre}</p>
                    <p className="text-xs text-muted-foreground">{m.secteur}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </WebLayout>
  );
}
