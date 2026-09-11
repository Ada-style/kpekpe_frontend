import { Link, useParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { Heart, MapPin, Wallet, ArrowRight, Sparkles, Circle } from "lucide-react";
import kpeAvatar from "@/assets/icone_ia.png";
import { METIERS, FORMATIONS } from "@/data/webMockData";

export default function WebFicheMetier() {
  const { id } = useParams();
  const metier = METIERS.find((m) => m.id === id) || METIERS[0];
  const formations = FORMATIONS.filter((f) => metier.formationsIds.includes(f.id));

  return (
    <WebLayout
      breadcrumbs={[{ label: "Explorer", to: "/web-app/explorer/metiers" }, { label: "Métiers", to: "/web-app/explorer/metiers" }, { label: metier.titre }]}
      kpeContext={metier.titre}
      kpeInitialMessage={`Tu regardes le métier de ${metier.titre}. Pose-moi une question sur ce parcours si tu veux !`}
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="kpe-card p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-semibold">{metier.secteur}</span>
              <span className="text-xs px-2.5 py-1 bg-muted rounded-md">Niveau min. {metier.niveauMin}</span>
              {metier.score && <span className="text-xs px-2.5 py-1 bg-accent/20 text-accent-foreground rounded-md font-semibold">Compatibilité {metier.score}%</span>}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-black">{metier.titre}</h1>
            <p className="text-muted-foreground mt-3">{metier.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={`/web-app/explorer/formations`} className="h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
                Voir les formations associées <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="h-11 px-5 rounded-xl border border-border font-medium flex items-center gap-2 hover:bg-muted">
                <Heart className="w-4 h-4" /> Ajouter aux favoris
              </button>
            </div>
          </div>

          {/* Débouchés Togo */}
          <div className="rounded-2xl p-6 border-2 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-lg">Débouchés au Togo</h2>
            </div>
            <p className="text-sm text-foreground">{metier.debouches}</p>
          </div>

          {/* Salaires */}
          <div className="kpe-card p-6">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-lg">Salaires observés</h2>
            </div>
            <p className="text-2xl font-display font-black text-primary">{metier.salaire}</p>
            <p className="text-xs text-muted-foreground mt-1">Estimation basée sur les données locales.</p>
          </div>

          {/* Compétences */}
          <div className="kpe-card p-6">
            <h2 className="font-display font-bold text-lg mb-4">Compétences requises</h2>
            <ul className="space-y-2">
              {metier.competences.map((c) => (
                <li key={c.nom} className="flex items-center justify-between p-3 rounded-lg bg-muted/40">
                  <span className="text-sm">{c.nom}</span>
                  <span className={`text-xs font-semibold uppercase ${
                    c.niveau === "critique" ? "text-destructive" : c.niveau === "importante" ? "text-primary" : "text-muted-foreground"
                  }`}>{c.niveau}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h2 className="font-display font-bold text-lg mb-3">Mots-clés</h2>
            <div className="flex flex-wrap gap-2">
              {metier.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Formations associées */}
          {formations.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-lg mb-4">Formations pour y accéder</h2>
              <div className="space-y-3">
                {formations.map((f) => (
                  <Link key={f.id} to={`/web-app/explorer/formations/${f.id}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition">
                    <p className="font-semibold">{f.titre}</p>
                    <p className="text-xs text-muted-foreground mt-1">{f.organisation} · {f.ville} · {f.niveau}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Kpékpé */}
        <div className="space-y-4">
          <div className="kpe-card p-5 sticky top-24">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border flex items-center justify-center bg-card shadow-sm">
                <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
              </div>
              <p className="font-semibold text-sm">Kpékpé</p>
            </div>
            <p className="text-sm text-foreground">
              {metier.raison || `Ce métier semble correspondre à ton profil parce que tu apprécies l'analyse et l'autonomie.`}
            </p>
            <button className="w-full mt-4 h-10 rounded-lg bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/15">
              <Sparkles className="w-4 h-4" /> Poser une question à Kpékpé
            </button>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
