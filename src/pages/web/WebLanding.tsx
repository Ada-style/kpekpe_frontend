import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, MapPin, Wallet, Shield, ClipboardList, Compass, Award,
  ChevronDown, GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { WebPublicLayout } from "@/components/web/WebPublicLayout";
import { METIERS, FORMATIONS } from "@/data/webMockData";
import heroStudents from "@/assets/landing-students.jpg";
import portraitStudent from "@/assets/landing-student-portrait.jpg";
import classroomImg from "@/assets/landing-classroom.jpg";

const STEPS = [
  { n: 1, t: "Réponds aux questions", d: "Une conversation guidée par Kpékpé, 20 minutes maximum." },
  { n: 2, t: "Découvre ton profil", d: "Une analyse claire de ce qui te correspond, expliquée simplement." },
  { n: 3, t: "Explore les opportunités", d: "Top 3 métiers et formations disponibles au Togo, avec débouchés." },
];

const WHY = [
  { icon: MapPin, t: "Données 100% togolaises", d: "Débouchés, salaires en FCFA, formations à Lomé, Kara, Sokodé." },
  { icon: Sparkles, t: "Kpékpé, ton conseiller IA", d: "Un assistant bienveillant qui t'accompagne, sans juger." },
  { icon: Wallet, t: "Gratuit, à vie", d: "Aucune formule payante. Kpékpé restera libre d'accès." },
  { icon: Shield, t: "Basé sur ton profil réel", d: "Pas de généralité. Chaque recommandation est expliquée." },
];

const TESTIMONIALS = [
  { n: "Afi, 17 ans", r: "1ère D — Lomé", t: "J'hésitais entre médecine et laboratoire. Kpékpé m'a montré des métiers auxquels je n'avais pas pensé." },
  { n: "Yao, 19 ans", r: "L1 Économie", t: "Enfin un outil qui parle des vraies formations disponibles ici, pas juste des choses trouvées sur Google." },
  { n: "Adjo, 22 ans", r: "En reconversion", t: "J'ai repris mon orientation à 22 ans. Kpékpé a compris mon parcours sans me juger." },
];

const FAQ = [
  { q: "Kpékpé est-il vraiment gratuit ?", r: "Oui, entièrement. Aucune formule payante, aucune publicité. Le service est financé par nos partenaires." },
  { q: "Combien de temps prend le parcours d'orientation ?", r: "Environ 20 minutes. Tu peux faire une pause et reprendre plus tard." },
  { q: "Est-ce que je dois créer un compte ?", r: "Pour explorer les fiches oui l'accès est libre, mais pour obtenir tes recommandations personnalisées un compte est nécessaire." },
  { q: "Kpékpé fonctionne-t-il sur mobile ?", r: "Oui, l'application est pensée mobile-first et fonctionne même sur les connexions 3G." },
  { q: "Mes données sont-elles protégées ?", r: "Absolument. Tes réponses ne sont jamais partagées et tu peux supprimer ton compte à tout moment." },
];

export default function WebLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <WebPublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroStudents})` }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Découvre les métiers qui te correspondent, <span className="text-primary">et au marché togolais</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              En moins de 20 minutes. Gratuit. Basé sur les données locales du Togo — formations, débouchés, salaires en FCFA.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/web-app/register"
                className="h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center gap-2 shadow-lg hover:opacity-90"
              >
                Commencer gratuitement <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/web-app/login" className="h-12 px-6 rounded-xl border border-border bg-card/80 backdrop-blur font-medium flex items-center hover:bg-muted">
                Je me connecte
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <span>✓ 350+ métiers</span>
              <span>✓ 97+ organisations</span>
              <span>✓ Sans engagement</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={portraitStudent}
                alt="Étudiant togolais souriant devant son campus"
                className="w-full h-full object-cover"
                width={1200}
                height={1400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-primary" /> Étudiant • Lomé
              </div>
            </div>
            <div className="absolute -bottom-6 -left-8 w-72 rounded-2xl bg-card/95 backdrop-blur border border-border p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full kpe-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Kpékpé</p>
                  <p className="text-[10px] text-muted-foreground">En ligne</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 text-sm">Prêt à découvrir ce qui te correspond ?</div>
                <div className="kpe-gradient-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 py-2 text-sm ml-auto max-w-[85%]">Oui, on commence !</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT */}
      <section id="comment" className="bg-muted/40 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-black">Comment ça marche</h2>
            <p className="mt-3 text-muted-foreground">Trois étapes simples, pas de jargon.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="bg-card rounded-2xl p-6 border border-border relative">
                <div className="w-12 h-12 rounded-xl kpe-gradient-primary flex items-center justify-center text-primary-foreground font-display font-black text-lg mb-4">
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
                {i < 2 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BANNER — Ancrage académique */}
      <section className="relative h-[280px] md:h-[360px] overflow-hidden">
        <img
          src={classroomImg}
          alt="Salle de classe au Togo"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
            <div className="max-w-xl text-background">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 mb-2">Ancré dans le réel</p>
              <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground">
                Des recommandations pensées pour les lycéens et étudiants togolais.
              </h2>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/80">
                Séries scientifiques, littéraires, professionnelles ou universitaires — Kpékpé connaît le terrain académique local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="pourquoi" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-black">Pourquoi Kpékpé</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Contrairement aux outils génériques, Kpékpé est pensé pour la réalité togolaise.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map((w) => (
            <div key={w.t} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition">
              <w.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-bold mb-1">{w.t}</h3>
              <p className="text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black">Aperçu du catalogue</h2>
              <p className="mt-2 text-muted-foreground">Explore quelques métiers et formations, même sans compte.</p>
            </div>
            <Link to="/web-app/explorer/metiers" className="text-sm font-semibold text-primary flex items-center gap-1">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {METIERS.slice(0, 4).map((m) => (
              <Link key={m.id} to={`/web-app/explorer/metiers/${m.id}`} className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition">
                <Compass className="w-6 h-6 text-primary mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{m.secteur}</p>
                <p className="font-display font-bold mt-1">{m.titre}</p>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{m.debouches}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-black">Ils l'ont testé</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.n} className="p-6 rounded-2xl border border-border bg-card">
              <Award className="w-6 h-6 text-accent mb-3" />
              <p className="text-sm text-foreground">« {t.t} »</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-sm">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <div key={i} className="bg-card rounded-xl border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium"
                >
                  {f.q}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.r}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-4xl font-black">Prêt à trouver ta voie ?</h2>
        <p className="mt-4 text-muted-foreground">Rejoins des milliers de jeunes togolais qui construisent leur avenir avec Kpékpé.</p>
        <Link to="/web-app/register" className="mt-8 inline-flex h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold items-center gap-2 shadow-lg hover:opacity-90">
          Commencer gratuitement <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </WebPublicLayout>
  );
}
