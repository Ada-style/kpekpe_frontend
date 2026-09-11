import { Link, useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { RadarChart, PolarAngleAxis, PolarGrid, Radar, ResponsiveContainer } from "recharts";
import { ArrowRight, Heart, Sparkles, Circle } from "lucide-react";
import kpeAvatar from "@/assets/icone_ia.png";
import { DIMENSIONS, PROFIL_TYPE, MOTS_CLES, METIERS, FORMATIONS } from "@/data/webMockData";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "profil", label: "Mon profil" },
  { id: "metiers", label: "Métiers recommandés" },
  { id: "formations", label: "Formations recommandées" },
  { id: "conseils", label: "Conseils de Kpékpé" },
];

export default function WebResultats() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "profil";
  const setTab = (id: string) => setParams({ tab: id });

  return (
    <WebLayout breadcrumbs={[{ label: "Mon parcours", to: "/web-app/mon-parcours" }, { label: "Résultats" }]}>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-black">Voilà ce que nous avons compris de toi.</h1>
        <p className="text-muted-foreground mt-2">Prends un moment pour découvrir ton profil, ta reconnaissance vient avant les chiffres.</p>

        {/* Tabs */}
        <div className="mt-8 border-b border-border flex gap-1 overflow-x-auto kpe-scrollbar-hide">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-12 px-5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition",
                tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "profil" && <ProfilView />}
          {tab === "metiers" && <MetiersView />}
          {tab === "formations" && <FormationsView />}
          {tab === "conseils" && <ConseilsView />}
        </div>
      </div>
    </WebLayout>
  );
}

function ProfilView() {
  const data = DIMENSIONS.map((d) => ({ name: d.label, value: d.score }));
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 kpe-card p-6 md:p-8">
        <p className="text-xs uppercase tracking-wide text-primary font-semibold">Ton profil type</p>
        <h2 className="font-display text-4xl font-black mt-1">{PROFIL_TYPE}</h2>
        <p className="mt-4 text-foreground leading-relaxed">
          Tu combines une capacité d'analyse solide avec un vrai sens du contact humain.
          Tu aimes comprendre comment les choses fonctionnent, mais tu n'oublies jamais l'impact
          sur les gens autour de toi. C'est un profil précieux, à la croisée des chemins entre
          technique et social.
        </p>
        <div className="mt-6">
          <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">Mots-clés</p>
          <div className="flex flex-wrap gap-2">
            {MOTS_CLES.map((m) => (
              <span key={m} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{m}</span>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Link to="/web-app/resultats?tab=metiers" className="inline-flex h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold items-center gap-2">
            Voir mes métiers recommandés <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="kpe-card p-6">
        <h3 className="font-display font-bold mb-4">Tes dimensions</h3>
        <div className="h-56">
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 10 }} />
              <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.35} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 mt-4 text-xs">
          {DIMENSIONS.map((d) => (
            <div key={d.key} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-muted-foreground"><Circle className="w-2.5 h-2.5" fill={d.color} stroke="none" />{d.label}</span>
              <span className="font-semibold">{d.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetiersView() {
  return (
    <div>
      <h2 className="font-display text-2xl font-black mb-2">Les métiers qui te correspondent</h2>
      <p className="text-muted-foreground mb-6">Top 3, classés par compatibilité avec ton profil.</p>
      <div className="space-y-4">
        {METIERS.slice(0, 3).map((m, i) => (
          <div key={m.id} className="kpe-card p-6 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="w-14 h-14 rounded-2xl kpe-gradient-primary flex items-center justify-center text-primary-foreground font-display font-black text-xl">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display font-bold text-xl">{m.titre}</h3>
                <span className="text-sm text-primary font-semibold">{m.score}% compatible</span>
              </div>
              <p className="text-xs text-muted-foreground uppercase mt-1">{m.secteur} · {m.niveauMin}</p>
              <p className="mt-3 text-sm text-foreground">« {m.raison} »</p>
            </div>
            <div className="flex md:flex-col gap-2">
              <Link to={`/web-app/explorer/metiers/${m.id}`} className="h-10 px-4 rounded-lg kpe-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
                Découvrir <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <Link to="/web-app/resultats?tab=formations" className="h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
          Voir mes formations recommandées <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/web-app/explorer/metiers" className="h-11 px-5 rounded-xl border border-border font-medium flex items-center">Explorer d'autres métiers</Link>
      </div>
    </div>
  );
}

function FormationsView() {
  return (
    <div>
      <h2 className="font-display text-2xl font-black mb-2">Les formations pour y accéder</h2>
      <p className="text-muted-foreground mb-6">Disponibles au Togo, adaptées à ton niveau.</p>
      <div className="space-y-4">
        {FORMATIONS.slice(0, 3).map((f) => (
          <div key={f.id} className="kpe-card p-6 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg">{f.titre}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.organisation} · {f.ville} · {f.niveau}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {f.score && <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-semibold">{f.score}% pertinent</span>}
                {f.force && <span className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-md font-semibold capitalize">Lien {f.force}</span>}
              </div>
            </div>
            <div className="flex md:flex-col gap-2">
              <Link to={`/web-app/explorer/formations/${f.id}`} className="h-10 px-4 rounded-lg kpe-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
                Voir <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConseilsView() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 kpe-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border flex items-center justify-center bg-card shadow-sm">
            <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
          </div>
          <p className="font-display font-bold text-xl">Un mot personnel de Kpékpé</p>
        </div>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>Kofi, ton profil montre une belle complémentarité : tu es à l'aise avec les chiffres et la logique, mais tu ne perds jamais de vue les personnes autour de toi.</p>
          <p>Trois pistes se dessinent naturellement : le développement web (autonomie et création), la médecine (impact humain fort) ou l'agronomie (science au service du Togo).</p>
          <p>Mon conseil : commence par consulter les fiches métiers, note ce qui te fait vibrer, et n'hésite pas à me demander plus d'infos si un point n'est pas clair.</p>
        </div>
        <button className="mt-6 h-11 px-5 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Poser une question à Kpékpé
        </button>
      </div>
      <div className="space-y-3">
        {[
          { t: "Explorer les fiches métier", to: "/web-app/explorer/metiers" },
          { t: "Voir les formations à Lomé", to: "/web-app/explorer/formations" },
          { t: "Sauvegarder mes coups de cœur", to: "/web-app/favoris" },
        ].map((s) => (
          <Link key={s.t} to={s.to} className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{s.t}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
