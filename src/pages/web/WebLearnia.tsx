import { Link } from "react-router-dom";
import { Briefcase, BookOpen, Building2, Library, Heart, ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { WebLayout } from "@/components/web/WebLayout";

const MODULES = [
  {
    to: "/web-app/explorer/metiers",
    icon: Briefcase,
    title: "Métiers",
    desc: "Explore plus de 350 métiers réels adaptés au marché togolais avec débouchés, salaires et compétences.",
    tone: "from-primary/15 to-primary/5",
  },
  {
    to: "/web-app/explorer/formations",
    icon: BookOpen,
    title: "Formations",
    desc: "Cursus, filières, séries et parcours disponibles au Togo et à l'international.",
    tone: "from-accent/25 to-accent/5",
  },
  {
    to: "/web-app/explorer/organisations",
    icon: Building2,
    title: "Organisations",
    desc: "Universités, centres de formation, écoles et instituts partenaires près de chez toi.",
    tone: "from-primary/10 to-transparent",
  },
  {
    to: "/web-app/ressources",
    icon: Library,
    title: "Ressources",
    desc: "Articles, tutoriels, vidéos et guides pratiques pour approfondir tes choix d'orientation.",
    tone: "from-accent/20 to-transparent",
  },
  {
    to: "/web-app/favoris",
    icon: Heart,
    title: "Mes favoris",
    desc: "Retrouve tous les métiers, formations, écoles et ressources que tu as sauvegardés.",
    tone: "from-primary/10 to-accent/10",
  },
];

/** Learnia — hub central regroupant Explorer, Ressources et Favoris. */
export default function WebLearnia() {
  return (
    <WebLayout
      breadcrumbs={[{ label: "Learnia" }]}
      kpeContext="Learnia"
      kpeInitialMessage="Learnia est le catalogue de Kpékpé. Dis-moi ce que tu cherches — un métier, une école, une formation — et je te guide."
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="rounded-3xl overflow-hidden relative kpe-gradient-hero p-8 md:p-12 mb-10">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Module Kpékpé Learnia
            </div>
            <h1 className="mt-4 font-display text-3xl md:text-4xl font-black text-primary-foreground leading-tight">
              Le catalogue qui rassemble toute ton orientation
            </h1>
            <p className="mt-3 text-primary-foreground/85 text-base md:text-lg leading-relaxed">
              Métiers, formations, écoles, tutoriels et ressources utiles — tout ce qu'il te faut pour construire ton
              parcours, dans un seul endroit. Learnia est distinct du moteur d'orientation et de l'assistant Kpékpé.
            </p>
          </div>
        </section>

        {/* Bandeau info */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-accent/20 text-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-foreground">Besoin d'aide pour choisir&nbsp;?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Passe le test d'orientation IKIGAI pour recevoir des recommandations personnalisées à explorer dans Learnia.
            </p>
          </div>
          <Link
            to="/web-app/orientation"
            className="h-11 px-5 rounded-lg kpe-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90"
          >
            Démarrer le test <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <br />

        {/* Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.to}
                to={m.to}
                className={`group relative rounded-2xl border border-border bg-card p-6 hover:shadow-md hover:border-primary/30 transition-all bg-gradient-to-br ${m.tone}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{m.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Ouvrir <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>


      </div>
    </WebLayout>
  );
}
