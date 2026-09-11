import { useState } from "react";
import { 
  Search, ChevronRight, BookOpen, MapPin, Star, GraduationCap, Building2, 
  Wrench, Globe, Heart, Clock, Users, ShieldCheck, CheckCircle2, Award, 
  Sparkles, FlaskConical, Calculator, Dna 
} from "lucide-react";

interface LearniaProps {
  onTab: (tab: string) => void;
}

const serieDModules = [
  { id: "svt", title: "SVT : Génétique & Hérédité", icon: Dna, progress: 65, tag: "Terminale D", badgeColor: "bg-emerald-500/15 text-emerald-700" },
  { id: "maths", title: "Maths : Nombres Complexes & Intégrales", icon: Calculator, progress: 40, tag: "Terminale D", badgeColor: "bg-blue-500/15 text-blue-700" },
  { id: "pc", title: "Physique-Chimie : Cinétique & Dosage", icon: FlaskConical, progress: 50, tag: "Terminale D", badgeColor: "bg-purple-500/15 text-purple-700" },
];

const repetiteursLome = [
  { name: "M. Mawuli Agbeko", specialite: "SVT & Biologie Médicale", exp: "8 ans d'expérience", zone: "Tokoin, Agoè, Bè", kyc: true, rating: 4.9 },
  { name: "Mme Afi Mensah", specialite: "Mathématiques & Statistiques", exp: "5 ans d'expérience", zone: "Adidogomé, Nukafu", kyc: true, rating: 4.8 },
  { name: "Dr. Koffi Lawson", specialite: "Sciences Physiques & Chimie", exp: "10 ans d'expérience", zone: "Hédzranawoé, Agoè", kyc: true, rating: 5.0 },
];

const featured = [
  { title: "Formation en Développement Web", org: "UCAO — Lomé", duration: "6 mois", Icon: Globe, tag: "Tech" },
  { title: "Techniques de Communication", org: "WOEZON Academy", duration: "3 mois", Icon: Users, tag: "Soft Skills" },
  { title: "Gestion de Projet", org: "ISM Lomé", duration: "4 mois", Icon: Wrench, tag: "Management" },
];

const categories = [
  { Icon: Dna, label: "Série D Togo", count: "3 matières" },
  { Icon: Users, label: "Répétiteurs Lomé", count: "18 vérifiés" },
  { Icon: Building2, label: "Écoles & Univ.", count: "28" },
  { Icon: BookOpen, label: "Tutoriels BAC", count: "120+" },
];

const tutorials = [
  { title: "Comment réussir son BAC D au Togo", views: "2.3K vues", Icon: GraduationCap, tag: "Examen" },
  { title: "SVT Terminale D : Méthode du raisonnement", views: "1.8K vues", Icon: BookOpen, tag: "Orientation" },
  { title: "Les métiers scientifiques au Togo", views: "3.1K vues", Icon: Building2, tag: "Carrière" },
];

const schools = [
  { name: "Université de Lomé (FSS)", type: "Public", programs: "Médecine & Pharmacie", rating: 4.8 },
  { name: "UCAO-UUT Lomé", type: "Privé", programs: "Génie Logiciel & Agronomie", rating: 4.6 },
  { name: "ESGIS Lomé", type: "Privé", programs: "Informatique & Réseaux", rating: 4.3 },
];

export function LearniaScreen({ onTab }: LearniaProps) {
  const [activeSection, setActiveSection] = useState<"tous" | "seried" | "repetiteurs">("seried");

  return (
    <div className="flex-1 flex flex-col bg-background overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-5 pt-3 pb-5 rounded-b-[32px]">
        <div className="flex items-center gap-2">
          <BookOpen size={22} className="text-primary-foreground" />
          <h1 className="font-display text-xl font-bold text-primary-foreground">Learnia</h1>
        </div>
        <p className="font-body text-xs text-primary-foreground/70 mt-1">Programme Terminale D Togo & Répétiteurs Lomé</p>
        
        {/* Toggle subtabs */}
        <div className="flex gap-1.5 mt-3 bg-card/20 p-1 rounded-xl">
          <button 
            onClick={() => setActiveSection("seried")}
            className={`flex-1 py-1.5 rounded-lg font-display text-xs font-bold transition-all ${
              activeSection === "seried" ? "bg-card text-primary shadow" : "text-primary-foreground/70"
            }`}
          >
            Série D (BAC)
          </button>
          <button 
            onClick={() => setActiveSection("repetiteurs")}
            className={`flex-1 py-1.5 rounded-lg font-display text-xs font-bold transition-all ${
              activeSection === "repetiteurs" ? "bg-card text-primary shadow" : "text-primary-foreground/70"
            }`}
          >
            Répétiteurs
          </button>
          <button 
            onClick={() => setActiveSection("tous")}
            className={`flex-1 py-1.5 rounded-lg font-display text-xs font-bold transition-all ${
              activeSection === "tous" ? "bg-card text-primary shadow" : "text-primary-foreground/70"
            }`}
          >
            Formations
          </button>
        </div>

        <div className="flex items-center gap-3 bg-card/20 rounded-2xl px-4 py-2 mt-3 backdrop-blur-sm">
          <Search size={16} className="text-primary-foreground/70" />
          <input placeholder="Chercher un cours, un répétiteur…" className="flex-1 bg-transparent font-body text-xs outline-none text-primary-foreground placeholder:text-primary-foreground/50" />
        </div>
      </div>

      <div className="px-5 -mt-3 pb-6 space-y-5">
        {/* Section 1: Série D (BAC Togo) */}
        {activeSection === "seried" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200/60 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <p className="font-display text-xs font-bold text-emerald-900">Spécialiste Baccalauréat Série D (Togo)</p>
              </div>
              <p className="font-body text-xs text-emerald-800/80">
                Modules conformes aux épreuves de SVT, Mathématiques et Sciences Physiques du Togo.
              </p>
            </div>

            <div className="space-y-3">
              {serieDModules.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id} className="kpe-card p-4 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-0.5 rounded-md font-body text-[10px] font-bold ${m.badgeColor}`}>
                            {m.tag}
                          </span>
                          <span className="font-display text-xs font-bold text-primary">{m.progress}%</span>
                        </div>
                        <h3 className="font-display text-sm font-bold text-foreground mt-1.5">{m.title}</h3>
                        <div className="w-full h-1.5 rounded-full bg-muted mt-2 overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${m.progress}%` }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between">
                      <span className="font-body text-[11px] text-muted-foreground">3 leçons interactives · 12 QCM</span>
                      <button 
                        onClick={() => onTab("conseiller")}
                        className="px-3 py-1 rounded-lg bg-primary text-white font-display text-xs font-semibold flex items-center gap-1"
                      >
                        S'entraîner
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 2: Répétiteurs Lomé Vérifiés (sans prix) */}
        {activeSection === "repetiteurs" && (
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200/60 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={16} className="text-blue-600" />
                <p className="font-display text-xs font-bold text-blue-900">Répétiteurs Certifiés Kpékpé</p>
              </div>
              <p className="font-body text-xs text-blue-800/80">
                Pièce d'identité (CNI/Passeport) et diplômes vérifiés par notre équipe pédagogique à Lomé.
              </p>
            </div>

            {repetiteursLome.map((rep, idx) => (
              <div key={idx} className="kpe-card p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-sm font-bold text-foreground">{rep.name}</h3>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-body text-[9px] font-bold">
                        <ShieldCheck size={10} /> CNI Vérifiée
                      </span>
                    </div>
                    <p className="font-body text-xs text-primary font-semibold mt-0.5">{rep.specialite}</p>
                    <p className="font-body text-[11px] text-muted-foreground mt-0.5">{rep.exp} · {rep.zone}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/50">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    <span className="font-display text-xs font-bold text-amber-700">{rep.rating}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                  <span className="font-body text-[10px] text-muted-foreground">Disponible en présentiel & visio</span>
                  <button 
                    onClick={() => alert(`Demande de mise en relation envoyée pour ${rep.name} !`)}
                    className="px-3 py-1.5 rounded-lg bg-primary text-white font-display text-xs font-semibold hover:bg-primary/90"
                  >
                    Demander un cours
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 3: Toutes les Formations & Écoles */}
        {activeSection === "tous" && (
          <>
            {/* Categories grid */}
            <div className="grid grid-cols-2 gap-3">
              {categories.map((c, i) => {
                const Icon = c.Icon;
                return (
                  <button key={i} className="kpe-card-elevated p-4 flex flex-col items-start gap-2">
                    <div className="w-10 h-10 rounded-xl bg-kpe-green-pale flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <p className="font-display text-sm font-bold text-foreground">{c.label}</p>
                    <p className="font-body text-xs text-muted-foreground">{c.count}</p>
                  </button>
                );
              })}
            </div>

            {/* Featured formations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-base font-bold text-foreground">Formations populaires</h2>
                <button className="font-body text-xs text-primary font-semibold">Voir tout</button>
              </div>
              <div className="flex gap-3 overflow-x-auto kpe-scrollbar-hide pb-1">
                {featured.map((f, i) => {
                  const Icon = f.Icon;
                  return (
                    <div key={i} className="flex-shrink-0 w-56 kpe-card p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-kpe-green-pale flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <button>
                          <Heart size={18} className="text-muted-foreground" />
                        </button>
                      </div>
                      <p className="font-display text-sm font-bold text-foreground leading-tight">{f.title}</p>
                      <p className="font-body text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <MapPin size={12} /> {f.org}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="px-2 py-0.5 rounded-full bg-kpe-green-pale font-body text-[10px] font-medium text-primary">{f.tag}</span>
                        <span className="font-body text-[11px] text-muted-foreground flex items-center gap-1">
                          <Clock size={11} /> {f.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schools */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-base font-bold text-foreground">Écoles & Universités</h2>
                <button className="font-body text-xs text-primary font-semibold">Voir tout</button>
              </div>
              <div className="space-y-3">
                {schools.map((s, i) => (
                  <div key={i} className="kpe-card p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-kpe-green-pale flex items-center justify-center flex-shrink-0">
                      <Building2 size={22} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-bold text-foreground">{s.name}</p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{s.programs}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-muted font-body text-[10px] text-muted-foreground">{s.type}</span>
                        <div className="flex items-center gap-0.5">
                          <Star size={11} className="text-kpe-yellow fill-kpe-yellow" />
                          <span className="font-body text-[10px] text-foreground font-semibold">{s.rating}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
