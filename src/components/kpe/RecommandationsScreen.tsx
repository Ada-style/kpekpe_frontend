import { ArrowLeft, Briefcase, GraduationCap, HeartPulse, ChevronRight, TrendingUp, MapPin, Star, BookOpen, Stethoscope, Building2 } from "lucide-react";
import { useState } from "react";

interface RecommandationsProps {
  onTab: (tab: string) => void;
  initialTab?: string;
}

const tabs = [
  { id: "metiers", label: "Métiers", Icon: Briefcase },
  { id: "education", label: "Éducation", Icon: GraduationCap },
  { id: "sante", label: "Santé", Icon: HeartPulse },
];

const metiers = [
  { name: "Psychologue scolaire", score: 97, tag: "Social", desc: "Accompagner les élèves dans leur développement" },
  { name: "Conseiller d'orientation", score: 94, tag: "Éducation", desc: "Guider les jeunes dans leurs choix de parcours" },
  { name: "Chargé RH", score: 88, tag: "Entreprise", desc: "Gérer et développer le capital humain" },
  { name: "Travailleur social", score: 85, tag: "ONG", desc: "Accompagner les populations vulnérables" },
];

const education = [
  {
    category: "Parcours scolaires recommandés",
    items: [
      { title: "Série D — Sciences de la Vie", sub: "Maths, SVT, Physique-Chimie", match: 95 },
      { title: "Série G2 — Gestion", sub: "Comptabilité, Économie, Droit", match: 82 },
    ],
  },
  {
    category: "Écoles & Universités",
    items: [
      { title: "Université de Lomé — Psychologie", sub: "Public · Lomé", match: 96 },
      { title: "UCAO-UUT — Sciences de l'Éducation", sub: "Privé · Lomé", match: 91 },
      { title: "IAM — Ressources Humaines", sub: "Privé · Lomé", match: 87 },
    ],
  },
  {
    category: "Domaines d'études",
    items: [
      { title: "Psychologie & Sciences sociales", sub: "Licence → Master → Doctorat", match: 94 },
      { title: "Sciences de l'éducation", sub: "Licence → Master professionnel", match: 89 },
      { title: "Gestion des Ressources Humaines", sub: "BTS → Licence pro → Master", match: 84 },
    ],
  },
];

const sante = [
  { title: "Gestion du stress", desc: "Techniques de respiration et relaxation pour mieux gérer la pression scolaire", Icon: HeartPulse, tag: "Bien-être" },
  { title: "Hygiène de vie", desc: "Alimentation, sommeil et sport pour une bonne concentration", Icon: Stethoscope, tag: "Santé" },
  { title: "Confiance en soi", desc: "Exercices pratiques pour développer ton assurance au quotidien", Icon: Star, tag: "Mental" },
  { title: "Équilibre études-loisirs", desc: "Organiser son temps pour réussir sans s'épuiser", Icon: BookOpen, tag: "Organisation" },
];

export function RecommandationsScreen({ onTab, initialTab }: RecommandationsProps) {
  const [activeTab, setActiveTab] = useState(initialTab ?? "metiers");

  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-5 pt-3 pb-6 rounded-b-[32px]">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => onTab("resultats")} className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
            <ArrowLeft size={18} className="text-primary-foreground" />
          </button>
          <div>
            <h1 className="font-display text-xl font-bold text-primary-foreground">Recommandations</h1>
            <p className="font-body text-xs text-primary-foreground/70">Basées sur ton profil IKIGAI</p>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mt-2">
          {tabs.map((t) => {
            const Icon = t.Icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-display text-xs font-bold transition-all ${
                  activeTab === t.id
                    ? "bg-card text-primary shadow-md"
                    : "bg-card/20 text-primary-foreground/80"
                }`}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 -mt-3 pb-6 space-y-4">
        {/* Métiers tab */}
        {activeTab === "metiers" && (
          <div className="space-y-3">
            {metiers.map((m, i) => (
              <div key={i} className="kpe-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-kpe-green-pale flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-bold text-foreground truncate">{m.name}</p>
                    <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-kpe-green-pale flex-shrink-0">
                      <TrendingUp size={10} className="text-primary" />
                      <span className="font-display text-[11px] font-bold text-primary">{m.score}%</span>
                    </div>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-muted font-body text-[10px] font-medium text-muted-foreground">{m.tag}</span>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        )}

        {/* Éducation tab */}
        {activeTab === "education" && (
          <div className="space-y-5">
            {education.map((section, si) => (
              <div key={si}>
                <h2 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  {si === 0 && <BookOpen size={16} className="text-primary" />}
                  {si === 1 && <Building2 size={16} className="text-primary" />}
                  {si === 2 && <GraduationCap size={16} className="text-primary" />}
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="kpe-card p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-kpe-yellow-pale flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={18} className="text-kpe-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-sm font-bold text-foreground">{item.title}</p>
                        <p className="font-body text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          {si === 1 && <MapPin size={10} />} {item.sub}
                        </p>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span className="font-display text-xs font-bold text-primary">{item.match}%</span>
                        <span className="font-body text-[9px] text-muted-foreground">match</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Santé tab */}
        {activeTab === "sante" && (
          <div className="space-y-3">
            {sante.map((s, i) => {
              const Icon = s.Icon;
              return (
                <div key={i} className="kpe-card p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-kpe-green-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-sm font-bold text-foreground">{s.title}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-muted font-body text-[10px] font-medium text-muted-foreground">{s.tag}</span>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
