import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, Share2, Sparkles, MessageCircle, MapPin, Clock } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { KAppLayout } from "@/components/web-kpekpe/KAppLayout";
import { KCard, KBadge, KButton, KTabs, KpeBubble, CATALOGUE_METIERS, CATALOGUE_FORMATIONS } from "@/components/web-kpekpe/KPrimitives";

type Tab = "profil" | "metiers" | "formations" | "conseils";

const RADAR = [
  { dim: "Passion", value: 82 },
  { dim: "Talent", value: 68 },
  { dim: "Besoins", value: 74 },
  { dim: "Aspiration", value: 90 },
];

/** E19-E22 — Résultats en 4 sous-vues */
export default function KResultats() {
  const [tab, setTab] = useState<Tab>("profil");

  return (
    <KAppLayout
      breadcrumbs={[{ label: "Mon parcours", to: "/web-kpekpe/app/mon-parcours" }, { label: "Mon résultat" }]}
      kpeContext="Tes résultats"
      kpeInitialMessage="Voici ce que j'ai compris de toi. Prends le temps de lire, puis explore les métiers qui te correspondent."
    >
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Ton résultat</h1>
          <p className="text-sm text-muted-foreground mt-1">Test complété — session #1</p>
        </div>
        <KButton variant="outline" size="sm">
          <Share2 className="w-4 h-4" /> Partager
        </KButton>
      </div>

      <div className="mb-6">
        <KTabs
          tabs={[
            { id: "profil" as Tab, label: "Mon profil" },
            { id: "metiers" as Tab, label: "Métiers recommandés", count: 3 },
            { id: "formations" as Tab, label: "Formations recommandées", count: 3 },
            { id: "conseils" as Tab, label: "Conseils de Kpé" },
          ]}
          active={tab}
          onChange={(id) => setTab(id as Tab)}
        />
      </div>

      {/* E19 — Profil */}
      {tab === "profil" && (
        <div className="grid md:grid-cols-3 gap-6">
          <KCard className="md:col-span-2 p-6 md:p-10">
            <p className="text-sm text-muted-foreground">Voilà ce que nous avons compris de toi.</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-primary mt-2">Analytique-Social</h2>
            <p className="mt-4 text-foreground leading-relaxed max-w-2xl">
              Tu es quelqu'un qui aime comprendre les choses en profondeur, tout en restant très à l'écoute des autres.
              Tu prends du plaisir à analyser des problèmes concrets, à imaginer des solutions, et à les partager avec
              les personnes qui t'entourent. Tu es à l'aise dans les projets qui allient réflexion et impact humain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Analyse", "Empathie", "Impact social", "Curiosité", "Communication"].map((tag) => (
                <KBadge key={tag} variant="primary">{tag}</KBadge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <KButton variant="primary" onClick={() => setTab("metiers")}>
                Voir mes métiers recommandés <ArrowRight className="w-4 h-4" />
              </KButton>
            </div>
          </KCard>

          <KCard className="p-6">
            <h3 className="font-display font-bold mb-4">Ton profil en un coup d'œil</h3>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={RADAR}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="dim" tick={{ fontSize: 11, fill: "hsl(var(--foreground))" }} />
                  <Radar name="Toi" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {RADAR.map((d) => (
                <div key={d.dim} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{d.dim}</span>
                  <span className="font-bold text-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </KCard>
        </div>
      )}

      {/* E20 — Métiers */}
      {tab === "metiers" && (
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-foreground">Les métiers qui te correspondent</h2>
          {CATALOGUE_METIERS.slice(0, 3).map((m, i) => (
            <KCard key={m.id} className="p-6">
              <div className="flex gap-4 items-start flex-wrap">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display text-lg font-black flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-[240px]">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-xl font-black text-foreground">{m.titre}</h3>
                    <KBadge variant="primary">{95 - i * 4}% de compatibilité</KBadge>
                  </div>
                  <KBadge variant="neutral" className="mt-2">{m.secteur}</KBadge>
                  <p className="mt-3 text-sm text-foreground italic">
                    « Parce que tu apprécies analyser des problèmes et partager tes idées avec bienveillance. »
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{m.debouches}</p>
                </div>
                <div className="flex gap-2 items-start">
                  <button className="w-9 h-9 rounded-lg border border-border hover:bg-muted flex items-center justify-center" aria-label="Favori">
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link to={`/web-kpekpe/app/explorer/metiers/${m.id}`}>
                    <KButton variant="primary" size="sm">Découvrir <ArrowRight className="w-4 h-4" /></KButton>
                  </Link>
                </div>
              </div>
            </KCard>
          ))}
          <div className="flex justify-between pt-4">
            <KButton variant="outline" onClick={() => setTab("profil")}>Retour au profil</KButton>
            <KButton variant="primary" onClick={() => setTab("formations")}>Voir les formations <ArrowRight className="w-4 h-4" /></KButton>
          </div>
        </div>
      )}

      {/* E21 — Formations */}
      {tab === "formations" && (
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-foreground">Les formations pour y accéder</h2>
          {CATALOGUE_FORMATIONS.slice(0, 3).map((f, i) => (
            <KCard key={f.id} className="p-6">
              <div className="flex gap-4 items-start flex-wrap">
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-display text-lg font-black flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-[240px]">
                  <h3 className="font-display text-xl font-black text-foreground">{f.titre}</h3>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {f.org} — {f.ville}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {f.duree}</span>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <KBadge variant="primary">Lien direct</KBadge>
                    <KBadge variant="neutral">{f.niveau}</KBadge>
                    <KBadge variant="success">{f.statut}</KBadge>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <button className="w-9 h-9 rounded-lg border border-border hover:bg-muted flex items-center justify-center" aria-label="Favori">
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link to={`/web-kpekpe/app/explorer/formations/${f.id}`}>
                    <KButton variant="primary" size="sm">Voir <ArrowRight className="w-4 h-4" /></KButton>
                  </Link>
                </div>
              </div>
            </KCard>
          ))}
        </div>
      )}

      {/* E22 — Conseils de Kpé */}
      {tab === "conseils" && (
        <div className="max-w-3xl space-y-4">
          <KpeBubble>
            Tu as un profil rare et précieux : celui de quelqu'un capable d'analyser en profondeur tout en restant profondément humain.
            Ce genre de posture est très recherché dans les métiers qui touchent à l'éducation, à la santé et à la technologie éthique.
          </KpeBubble>
          <KpeBubble>
            Mon conseil : ne te limite pas au premier métier qui te plaît. Explore aussi les formations à Lomé — elles peuvent ouvrir
            des portes que tu n'imaginais pas.
          </KpeBubble>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              { label: "Explore les fiches métiers", to: "/web-kpekpe/app/explorer/metiers" },
              { label: "Regarde les formations à Lomé", to: "/web-kpekpe/app/explorer/formations" },
              { label: "Consulte les ressources", to: "/web-kpekpe/app/ressources" },
              { label: "Sauvegarde tes favoris", to: "/web-kpekpe/app/favoris" },
            ].map((s) => (
              <Link key={s.to} to={s.to}>
                <KCard className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold flex-1">{s.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </KCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </KAppLayout>
  );
}
