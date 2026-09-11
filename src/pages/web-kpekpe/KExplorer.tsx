import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, Heart, Filter, ArrowRight, MapPin, ArrowLeft, Building2, Clock, Calendar } from "lucide-react";
import { KAppLayout } from "@/components/web-kpekpe/KAppLayout";
import { KPublicLayout } from "@/components/web-kpekpe/KPublicLayout";
import {
  KCard, KBadge, KButton, KTabs, KEmptyState, KpeBubble,
  CATALOGUE_METIERS, CATALOGUE_FORMATIONS, CATALOGUE_ORGS
} from "@/components/web-kpekpe/KPrimitives";
import { cn } from "@/lib/utils";

type ExploreTab = "metiers" | "formations" | "organisations";

/** E23-E28 — Explorer (public + auth), 3 catalogues + fiches détails */
export function KExplorer({ initial }: { initial: ExploreTab }) {
  const [tab, setTab] = useState<ExploreTab>(initial);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filteredMetiers = useMemo(
    () => CATALOGUE_METIERS.filter((m) =>
      (!q || m.titre.toLowerCase().includes(q.toLowerCase())) &&
      (!filter || m.secteur === filter)
    ),
    [q, filter]
  );

  const secteursMetiers = Array.from(new Set(CATALOGUE_METIERS.map((m) => m.secteur)));
  const domainesFormations = Array.from(new Set(CATALOGUE_FORMATIONS.map((f) => f.domaine)));
  const typesOrgs = Array.from(new Set(CATALOGUE_ORGS.map((o) => o.type)));

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" },
        { label: "Explorer" },
        { label: tab === "metiers" ? "Métiers" : tab === "formations" ? "Formations" : "Organisations" },
      ]}
      kpeContext="Catalogue"
    >
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Explorer</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Parcours le catalogue complet — 350+ métiers, 200+ formations, 97 organisations.
        </p>
      </div>

      <div className="mb-6">
        <KTabs
          tabs={[
            { id: "metiers" as ExploreTab, label: "Métiers", count: CATALOGUE_METIERS.length },
            { id: "formations" as ExploreTab, label: "Formations", count: CATALOGUE_FORMATIONS.length },
            { id: "organisations" as ExploreTab, label: "Organisations", count: CATALOGUE_ORGS.length },
          ]}
          active={tab}
          onChange={(t) => { setTab(t); setFilter(null); setQ(""); }}
        />
      </div>

      {/* Recherche + filtres */}
      <div className="mb-6 space-y-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg h-11 px-3.5">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Rechercher un ${tab.slice(0, -1)}…`}
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(null)}
            className={cn(
              "px-3 h-8 rounded-full text-xs font-semibold border transition-colors",
              !filter ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            Tous
          </button>
          {(tab === "metiers" ? secteursMetiers : tab === "formations" ? domainesFormations : typesOrgs).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "px-3 h-8 rounded-full text-xs font-semibold border transition-colors",
                filter === s ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Grille — Métiers */}
      {tab === "metiers" && (
        filteredMetiers.length === 0 ? (
          <KEmptyState
            icon={Search}
            title="Aucun métier trouvé"
            description="Essaie d'autres termes ou réinitialise les filtres."
            action={<KButton variant="outline" onClick={() => { setQ(""); setFilter(null); }}>Réinitialiser</KButton>}
          />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMetiers.map((m) => (
              <Link key={m.id} to={`/web-kpekpe/app/explorer/metiers/${m.id}`}>
                <KCard className="p-5 h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <KBadge variant="primary">{m.secteur}</KBadge>
                    <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center" aria-label="Favori" onClick={(e) => { e.preventDefault(); }}>
                      <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-foreground mt-3">{m.titre}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-1">{m.debouches}</p>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                    <span>{m.niveau}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </KCard>
              </Link>
            ))}
          </div>
        )
      )}

      {/* Grille — Formations */}
      {tab === "formations" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATALOGUE_FORMATIONS.filter((f) => (!q || f.titre.toLowerCase().includes(q.toLowerCase())) && (!filter || f.domaine === filter)).map((f) => (
            <Link key={f.id} to={`/web-kpekpe/app/explorer/formations/${f.id}`}>
              <KCard className="p-5 h-full flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <KBadge variant="accent">{f.domaine}</KBadge>
                  <KBadge variant={f.statut === "Ouvert" ? "success" : "warning"}>{f.statut}</KBadge>
                </div>
                <h3 className="font-display font-bold text-foreground mt-3">{f.titre}</h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {f.org}</p>
                <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                  <span>{f.niveau} · {f.duree}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </KCard>
            </Link>
          ))}
        </div>
      )}

      {/* Grille — Organisations */}
      {tab === "organisations" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATALOGUE_ORGS.filter((o) => (!q || o.nom.toLowerCase().includes(q.toLowerCase())) && (!filter || o.type === filter)).map((o) => (
            <Link key={o.id} to={`/web-kpekpe/app/explorer/organisations/${o.id}`}>
              <KCard className="p-5 h-full flex flex-col hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-display font-black flex items-center justify-center flex-shrink-0">
                    {o.sigle.slice(0, 3)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground line-clamp-2">{o.nom}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{o.sigle}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <KBadge variant="neutral">{o.type}</KBadge>
                  <KBadge variant={o.statut === "Public" ? "primary" : "neutral"}>{o.statut}</KBadge>
                  {o.partenaire && <KBadge variant="accent">Partenaire</KBadge>}
                </div>
                <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {o.ville}</span>
                  <span>{o.formations} formations</span>
                </div>
              </KCard>
            </Link>
          ))}
        </div>
      )}
    </KAppLayout>
  );
}

/** E24 — Fiche métier */
export function KFicheMetier() {
  const { id } = useParams();
  const m = CATALOGUE_METIERS.find((x) => x.id === id) ?? CATALOGUE_METIERS[0];

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Explorer", to: "/web-kpekpe/app/explorer/metiers" },
        { label: "Métiers", to: "/web-kpekpe/app/explorer/metiers" },
        { label: m.titre },
      ]}
      kpeContext={m.titre}
      kpeInitialMessage={`Tu regardes le métier de ${m.titre}. Veux-tu savoir pourquoi il correspond à ton profil ?`}
    >
      <Link to="/web-kpekpe/app/explorer/metiers" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <KCard className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <KBadge variant="primary" className="mb-2">{m.secteur}</KBadge>
                <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">{m.titre}</h1>
                <p className="text-sm text-muted-foreground mt-2">{m.niveau}</p>
              </div>
              <div className="flex gap-2">
                <KButton variant="outline" size="sm"><Heart className="w-4 h-4" /> Sauver</KButton>
                <KButton variant="primary" size="sm">Formations liées <ArrowRight className="w-4 h-4" /></KButton>
              </div>
            </div>
          </KCard>

          <KCard className="p-6">
            <h2 className="font-display text-lg font-bold mb-3">Description</h2>
            <p className="text-foreground leading-relaxed">
              Le métier de {m.titre.toLowerCase()} consiste à mettre en œuvre des compétences techniques et humaines pour répondre à des besoins spécifiques.
              Il combine analyse, action de terrain et travail en équipe.
            </p>
          </KCard>

          <KCard className="p-6 bg-accent/10 border-accent/30">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Débouchés au Togo</h2>
            </div>
            <p className="text-foreground leading-relaxed">{m.debouches}</p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">Salaire indicatif :</span> {m.salaire}
            </p>
          </KCard>

          <KCard className="p-6">
            <h2 className="font-display text-lg font-bold mb-3">Compétences requises</h2>
            <div className="flex flex-wrap gap-2">
              {m.tags.map((t) => <KBadge key={t} variant="primary">{t}</KBadge>)}
              {["Rigueur", "Autonomie", "Adaptabilité"].map((t) => <KBadge key={t} variant="neutral">{t}</KBadge>)}
            </div>
          </KCard>

          <KCard className="p-6">
            <h2 className="font-display text-lg font-bold mb-3">Formations associées</h2>
            <div className="space-y-3">
              {CATALOGUE_FORMATIONS.slice(0, 3).map((f) => (
                <Link key={f.id} to={`/web-kpekpe/app/explorer/formations/${f.id}`} className="block">
                  <div className="p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-muted/50 transition-all flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{f.titre}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.org} — {f.ville}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </KCard>
        </div>

        <div className="space-y-4">
          <KCard className="p-5">
            <KBadge variant="primary" className="mb-2">Ton score</KBadge>
            <p className="font-display text-4xl font-black text-primary">92%</p>
            <p className="text-xs text-muted-foreground mt-1">Ce métier correspond fortement à ton profil.</p>
          </KCard>
          <KCard className="p-5">
            <KpeBubble>
              Ce métier te correspond parce que tu apprécies analyser et échanger avec les autres. Je peux te suggérer des formations locales.
            </KpeBubble>
          </KCard>
        </div>
      </div>
    </KAppLayout>
  );
}

/** E26 — Fiche formation */
export function KFicheFormation() {
  const { id } = useParams();
  const f = CATALOGUE_FORMATIONS.find((x) => x.id === id) ?? CATALOGUE_FORMATIONS[0];

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Explorer", to: "/web-kpekpe/app/explorer/formations" },
        { label: "Formations", to: "/web-kpekpe/app/explorer/formations" },
        { label: f.titre },
      ]}
      kpeContext={f.titre}
    >
      <Link to="/web-kpekpe/app/explorer/formations" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <KCard className="p-6 md:p-8 mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex gap-2 mb-3">
              <KBadge variant="accent">{f.domaine}</KBadge>
              <KBadge variant="success">{f.statut}</KBadge>
              <KBadge variant="neutral">{f.niveau}</KBadge>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">{f.titre}</h1>
            <p className="mt-2 text-muted-foreground flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {f.org} — {f.ville}</p>
          </div>
          <div className="flex gap-2">
            <KButton variant="outline" size="sm"><Heart className="w-4 h-4" /> Sauver</KButton>
            <KButton variant="primary" size="sm">Voir l'organisation <ArrowRight className="w-4 h-4" /></KButton>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
          {[
            { icon: Clock, label: "Durée", val: f.duree },
            { icon: Calendar, label: "Rentrée", val: "Septembre" },
            { icon: MapPin, label: "Ville", val: f.ville },
            { icon: Building2, label: "Frais", val: f.frais },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 rounded-lg bg-muted/50">
              <s.icon className="w-4 h-4 mx-auto text-muted-foreground mb-1" />
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="font-semibold text-sm">{s.val}</p>
            </div>
          ))}
        </div>
      </KCard>

      <div className="grid md:grid-cols-2 gap-6">
        <KCard className="p-6">
          <h2 className="font-display text-lg font-bold mb-3">Conditions d'admission</h2>
          <ul className="space-y-2 text-sm text-foreground">
            <li>• {f.niveau === "BTS" || f.niveau === "CAP" ? "BEPC" : "Baccalauréat"} obligatoire</li>
            <li>• Dossier scolaire + entretien</li>
            <li>• Test d'entrée pour certaines filières</li>
          </ul>
        </KCard>
        <KCard className="p-6">
          <h2 className="font-display text-lg font-bold mb-3">Métiers accessibles</h2>
          <div className="space-y-2">
            {CATALOGUE_METIERS.slice(0, 3).map((m) => (
              <Link key={m.id} to={`/web-kpekpe/app/explorer/metiers/${m.id}`} className="block p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-muted/50">
                <p className="font-semibold text-sm">{m.titre}</p>
                <KBadge variant="neutral" className="mt-1">Lien direct</KBadge>
              </Link>
            ))}
          </div>
        </KCard>
      </div>
    </KAppLayout>
  );
}

/** E28 — Fiche organisation */
export function KFicheOrganisation() {
  const { id } = useParams();
  const o = CATALOGUE_ORGS.find((x) => x.id === id) ?? CATALOGUE_ORGS[0];

  return (
    <KAppLayout
      breadcrumbs={[
        { label: "Explorer", to: "/web-kpekpe/app/explorer/organisations" },
        { label: "Organisations", to: "/web-kpekpe/app/explorer/organisations" },
        { label: o.nom },
      ]}
    >
      <Link to="/web-kpekpe/app/explorer/organisations" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <KCard className="p-6 md:p-8 mb-6">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary font-display font-black text-2xl flex items-center justify-center flex-shrink-0">
            {o.sigle.slice(0, 3)}
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex gap-2 mb-2 flex-wrap">
              <KBadge variant="neutral">{o.type}</KBadge>
              <KBadge variant="primary">{o.statut}</KBadge>
              {o.partenaire && <KBadge variant="accent">Partenaire Kpékpé</KBadge>}
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">{o.nom}</h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {o.ville}, Togo</p>
          </div>
          <KButton variant="primary" size="sm">Voir formations <ArrowRight className="w-4 h-4" /></KButton>
        </div>
      </KCard>

      <div className="grid md:grid-cols-3 gap-6">
        <KCard className="md:col-span-2 p-6">
          <h2 className="font-display text-lg font-bold mb-3">Formations proposées</h2>
          <div className="space-y-3">
            {CATALOGUE_FORMATIONS.slice(0, 4).map((f) => (
              <Link key={f.id} to={`/web-kpekpe/app/explorer/formations/${f.id}`} className="block">
                <div className="p-4 rounded-lg border border-border hover:border-primary/40 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm">{f.titre}</p>
                    <p className="text-xs text-muted-foreground">{f.niveau} · {f.duree}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </KCard>
        <KCard className="p-6 space-y-3 text-sm">
          <h3 className="font-display font-bold text-base mb-2">Contact</h3>
          <p><span className="text-muted-foreground">Adresse :</span> {o.ville}, Togo</p>
          <p><span className="text-muted-foreground">Téléphone :</span> +228 22 XX XX XX</p>
          <p><span className="text-muted-foreground">Email :</span> contact@{o.sigle.toLowerCase()}.tg</p>
          <a href="#" className="text-primary font-semibold hover:underline">Visiter le site web →</a>
        </KCard>
      </div>
    </KAppLayout>
  );
}
