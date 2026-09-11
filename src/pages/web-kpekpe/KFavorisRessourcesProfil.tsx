import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2, Compass, ArrowRight, BookOpen, Search, Clock, User, Mail, Lock, MapPin } from "lucide-react";
import { KAppLayout } from "@/components/web-kpekpe/KAppLayout";
import {
  KCard, KBadge, KButton, KTabs, KEmptyState,
  CATALOGUE_METIERS, CATALOGUE_FORMATIONS
} from "@/components/web-kpekpe/KPrimitives";

/** E29-E30 — Mes favoris (Métiers | Formations) */
export function KFavoris() {
  const [tab, setTab] = useState<"metiers" | "formations">("metiers");
  const metiersFav = CATALOGUE_METIERS.slice(0, 3);
  const formationsFav = CATALOGUE_FORMATIONS.slice(0, 2);

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" },
        { label: "Mes favoris" },
      ]}
    >
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Mes favoris</h1>
        <p className="text-sm text-muted-foreground mt-1">Retrouve tout ce que tu as sauvegardé.</p>
      </div>

      <div className="mb-6">
        <KTabs
          tabs={[
            { id: "metiers" as const, label: "Métiers", count: metiersFav.length },
            { id: "formations" as const, label: "Formations", count: formationsFav.length },
          ]}
          active={tab}
          onChange={(id) => setTab(id as "metiers" | "formations")}
        />
      </div>

      {tab === "metiers" && (
        metiersFav.length === 0 ? (
          <KEmptyState
            icon={Heart}
            title="Aucun métier sauvegardé"
            description="Explore le catalogue pour découvrir et sauvegarder des métiers qui te plaisent."
            action={<Link to="/web-kpekpe/app/explorer/metiers"><KButton variant="primary"><Compass className="w-4 h-4" /> Explorer les métiers</KButton></Link>}
          />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metiersFav.map((m) => (
              <KCard key={m.id} className="p-5">
                <div className="flex items-start justify-between">
                  <KBadge variant="primary">{m.secteur}</KBadge>
                  <button className="w-8 h-8 rounded-lg hover:bg-destructive/10 text-destructive flex items-center justify-center" aria-label="Retirer">
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <h3 className="font-display font-bold text-foreground mt-3">{m.titre}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{m.debouches}</p>
                <Link to={`/web-kpekpe/app/explorer/metiers/${m.id}`}>
                  <KButton variant="outline" size="sm" className="w-full mt-4">Voir la fiche <ArrowRight className="w-3 h-3" /></KButton>
                </Link>
              </KCard>
            ))}
          </div>
        )
      )}

      {tab === "formations" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {formationsFav.map((f) => (
            <KCard key={f.id} className="p-5">
              <div className="flex items-start justify-between">
                <KBadge variant="accent">{f.domaine}</KBadge>
                <button className="w-8 h-8 rounded-lg hover:bg-destructive/10 text-destructive flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
              <h3 className="font-display font-bold text-foreground mt-3">{f.titre}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.org} — {f.niveau}</p>
              <Link to={`/web-kpekpe/app/explorer/formations/${f.id}`}>
                <KButton variant="outline" size="sm" className="w-full mt-4">Voir la fiche <ArrowRight className="w-3 h-3" /></KButton>
              </Link>
            </KCard>
          ))}
        </div>
      )}
    </KAppLayout>
  );
}

/** E31 — Ressources Learnia (lecture seule) */
const RESSOURCES = [
  { id: "r1", titre: "Comment choisir entre BAC C et BAC D", cat: "Orientation", duree: "5 min", extrait: "Les critères à considérer avant de choisir ta série au lycée…" },
  { id: "r2", titre: "Les métiers du numérique au Togo", cat: "Métiers", duree: "8 min", extrait: "Panorama des opportunités en tech dans l'écosystème local…" },
  { id: "r3", titre: "Comment financer ses études", cat: "Vie étudiante", duree: "6 min", extrait: "Bourses, aides, mécénats : les solutions disponibles au Togo…" },
  { id: "r4", titre: "Rédiger un bon CV quand on débute", cat: "Vie professionnelle", duree: "10 min", extrait: "Conseils pratiques pour ton premier CV, même sans expérience…" },
  { id: "r5", titre: "Les études courtes qui recrutent", cat: "Formations", duree: "7 min", extrait: "BTS, CAP, Bac Pro : des cursus courts avec de vrais débouchés…" },
  { id: "r6", titre: "Comprendre l'orientation IKIGAI", cat: "Méthode", duree: "4 min", extrait: "Découvre la méthode qui guide Kpékpé pour t'accompagner…" },
];

export function KRessources() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const cats = Array.from(new Set(RESSOURCES.map((r) => r.cat)));
  const filtered = RESSOURCES.filter((r) => (!q || r.titre.toLowerCase().includes(q.toLowerCase())) && (!cat || r.cat === cat));

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" },
        { label: "Ressources" },
      ]}
    >
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Ressources — Learnia</h1>
        <p className="text-sm text-muted-foreground mt-1">Guides et articles pour t'aider dans tes choix d'orientation.</p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg h-11 px-3.5">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher une ressource…"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat(null)}
            className={`px-3 h-8 rounded-full text-xs font-semibold border ${!cat ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
          >
            Toutes
          </button>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 h-8 rounded-full text-xs font-semibold border ${cat === c ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <KCard key={r.id} className="p-5 hover:shadow-md transition-shadow flex flex-col">
            <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary/60" />
            </div>
            <KBadge variant="primary" className="w-fit">{r.cat}</KBadge>
            <h3 className="font-display font-bold text-foreground mt-2">{r.titre}</h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-1">{r.extrait}</p>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.duree}</span>
              <span className="text-primary font-semibold hover:underline cursor-pointer">Lire →</span>
            </div>
          </KCard>
        ))}
      </div>
    </KAppLayout>
  );
}

/** E33-E34 — Mon profil (4 onglets) */
export function KProfil() {
  const [tab, setTab] = useState<"infos" | "scolaire" | "prefs" | "securite">("infos");

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" },
        { label: "Mon profil" },
      ]}
    >
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Mon profil</h1>
      </div>

      <div className="mb-6">
        <KTabs
          tabs={[
            { id: "infos" as const, label: "Informations" },
            { id: "scolaire" as const, label: "Situation scolaire" },
            { id: "prefs" as const, label: "Préférences" },
            { id: "securite" as const, label: "Sécurité" },
          ]}
          active={tab}
          onChange={(id) => setTab(id as "infos" | "scolaire" | "prefs" | "securite")}
        />
      </div>

      <KCard className="p-6 md:p-8 max-w-2xl">
        {tab === "infos" && (
          <form className="space-y-4">
            <h2 className="font-display text-lg font-bold">Informations personnelles</h2>
            {[
              { icon: User, label: "Prénom", value: "Kofi" },
              { icon: User, label: "Nom", value: "Mensah" },
              { icon: Mail, label: "Email", value: "kofi.mensah@email.com", disabled: true },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                <div className="relative">
                  <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    defaultValue={f.value}
                    disabled={f.disabled}
                    className="w-full h-11 pl-10 pr-3.5 rounded-lg border border-input bg-background text-sm disabled:opacity-60"
                  />
                </div>
                {f.disabled && <p className="text-xs text-muted-foreground mt-1">L'email n'est pas modifiable ici.</p>}
              </div>
            ))}
            <KButton variant="primary">Enregistrer les modifications</KButton>
          </form>
        )}

        {tab === "scolaire" && (
          <form className="space-y-4">
            <h2 className="font-display text-lg font-bold">Situation scolaire</h2>
            <p className="text-sm text-muted-foreground">Ces informations personnalisent tes recommandations.</p>
            {[
              { icon: MapPin, label: "Région", value: "Maritime" },
              { icon: User, label: "Niveau d'études", value: "Lycée" },
              { icon: User, label: "Série", value: "Série D" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                <div className="relative">
                  <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input defaultValue={f.value} className="w-full h-11 pl-10 pr-3.5 rounded-lg border border-input bg-background text-sm" />
                </div>
              </div>
            ))}
            <KButton variant="primary">Enregistrer</KButton>
          </form>
        )}

        {tab === "prefs" && (
          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold">Préférences</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Langues parlées</label>
              <div className="flex flex-wrap gap-2">
                {["Français", "Éwé", "Kabiyè"].map((l) => (
                  <KBadge key={l} variant="primary">{l}</KBadge>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Notifications</label>
              <p className="text-sm text-muted-foreground">Bientôt disponible.</p>
            </div>
          </div>
        )}

        {tab === "securite" && (
          <form className="space-y-4">
            <h2 className="font-display text-lg font-bold">Sécurité</h2>
            {[
              { label: "Mot de passe actuel" },
              { label: "Nouveau mot de passe" },
              { label: "Confirmer le nouveau mot de passe" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input type="password" placeholder="••••••••" className="w-full h-11 pl-10 pr-3.5 rounded-lg border border-input bg-background text-sm" />
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <KButton variant="primary">Mettre à jour</KButton>
              <Link to="/web-kpekpe/connexion">
                <KButton variant="outline">Se déconnecter</KButton>
              </Link>
            </div>
          </form>
        )}
      </KCard>
    </KAppLayout>
  );
}

/** Page "Comment ça marche" publique */
export function KCommentCaMarche() {
  return null; // renvoyée vers landing
}
