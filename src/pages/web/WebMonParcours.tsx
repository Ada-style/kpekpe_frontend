import { Link, useSearchParams } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { ArrowRight, Sparkles, Heart, BookOpen, Compass, Clock, GraduationCap } from "lucide-react";
import { METIERS, PROFIL_TYPE, RESSOURCES } from "@/data/webMockData";
import { WisdomTreeVisual } from "@/components/learnia/WisdomTreeVisual";
import { SharedFlameCard } from "@/components/learnia/SharedFlameCard";
import { DailyObjectiveCard } from "@/components/learnia/DailyObjectiveCard";

export default function WebMonParcours() {
  const [params] = useSearchParams();
  const hasResult = params.get("state") !== "empty";

  return (
    <WebLayout breadcrumbs={[{ label: "Mon parcours" }]}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* En-tête de bienvenue */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Classe de 3ème • Collège Protestant de Lomé</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              Bonjour Koffi
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Voici ta progression d'apprentissage et ton parcours d'orientation.
            </p>
          </div>

          <div className="flex gap-2 text-xs">
            <Link
              to="/web-app/cours"
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs inline-flex items-center gap-1.5 hover:bg-primary/90 transition-colors shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Accéder à mes cours</span>
            </Link>
          </div>
        </div>

        {/* 1. Objectif quotidien d'apprentissage */}
        <DailyObjectiveCard completed={false} />

        {/* 2. Arbre de la Sagesse & Flammes Sociales (Côte à côte) */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <WisdomTreeVisual level={4} xp={840} nextLevelXp={1200} />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <SharedFlameCard
              streak={12}
              partnerName="Afi"
              partnerSchool="Lycée de Tokoin"
              myStatus="completed"
              partnerStatus="pending"
              inviteCode="KP-LOME-8492"
            />
            {/* Résumé profil d'orientation */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary">Profil d'Orientation</span>
                <span className="text-xs text-muted-foreground">Test complété</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{PROFIL_TYPE}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Affinité marquée avec les sciences, les nouvelles technologies et la résolution de problèmes.
              </p>
              <Link
                to="/web-app/resultats"
                className="mt-4 text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline"
              >
                <span>Consulter mes recommandations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Recommandations de métiers récents */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Métiers adaptés à ton profil
              </h3>
              <p className="text-xs text-muted-foreground">
                Basés sur tes résultats d'orientation et tes points forts en sciences.
              </p>
            </div>
            <Link to="/web-app/explorer/metiers" className="text-xs text-primary font-semibold hover:underline">
              Tout explorer
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {METIERS.slice(0, 3).map((m, i) => (
              <Link
                key={m.id}
                to={`/web-app/explorer/metiers/${m.id}`}
                className="p-4 rounded-xl border border-border/80 hover:border-primary/40 hover:bg-muted/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-primary block mb-1">
                    {m.secteur}
                  </span>
                  <p className="font-bold text-sm text-foreground">{m.titre}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.niveauMin}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                  <span className="font-semibold text-primary">Score : {m.score}%</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Répétiteurs & Soutien scolaire */}
        <div className="rounded-2xl border border-border bg-gradient-to-r from-card via-card to-accent/10 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-foreground">
              Besoin d'un accompagnement personnalisé à Lomé ?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Découvre nos professeurs certifiés en Maths, Physique et Français vérifiés par Kpékpé.
            </p>
          </div>
          <Link
            to="/web-app/repetiteurs"
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs inline-flex items-center gap-1.5 hover:bg-primary/90 transition-colors shadow-sm self-start sm:self-auto flex-shrink-0"
          >
            <span>Trouver un répétiteur</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </WebLayout>
  );
}
