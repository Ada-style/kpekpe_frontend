import { Heart, Target, Lightbulb, BookOpen, Users, Star, ChevronRight, Send, Search, Bell, Trophy, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";
import { KpeLogo } from "@/components/kpe/KpeLogo";

const colors = [
  { name: "Green Primary", token: "--kpe-green", hsl: "145 100% 29%", hex: "#00963F", usage: "Fond principal, headers, CTA primaire" },
  { name: "Green Mid", token: "--kpe-green-mid", hsl: "145 80% 36%", hex: "#12A34D", usage: "Boutons, accents actifs" },
  { name: "Green Soft", token: "--kpe-green-soft", hsl: "145 55% 48%", hex: "#4DB876", usage: "Illustrations, icônes secondaires" },
  { name: "Green Light", token: "--kpe-green-light", hsl: "145 40% 72%", hex: "#A3D4B5", usage: "Badges, tags légers" },
  { name: "Green Pale", token: "--kpe-green-pale", hsl: "145 50% 95%", hex: "#ECFAF1", usage: "Fonds de cartes, surfaces" },
  { name: "Yellow", token: "--kpe-yellow", hsl: "56 99% 50%", hex: "#FEEC01", usage: "Accents, CTA secondaire, badges" },
  { name: "Yellow Warm", token: "--kpe-yellow-warm", hsl: "52 99% 55%", hex: "#FFE619", usage: "Gradients accent" },
  { name: "Yellow Pale", token: "--kpe-yellow-pale", hsl: "54 100% 94%", hex: "#FFFCE0", usage: "Fonds accent légers" },
  { name: "Passion", token: "--kpe-passion", hsl: "4 82% 56%", hex: "#E53935", usage: "Pilier Passion IKIGAI" },
  { name: "Talent", token: "--kpe-talent", hsl: "145 100% 29%", hex: "#00963F", usage: "Pilier Talent IKIGAI" },
  { name: "Besoins", token: "--kpe-besoins", hsl: "56 99% 50%", hex: "#FEEC01", usage: "Pilier Besoins IKIGAI" },
  { name: "Aspiration", token: "--kpe-aspiration", hsl: "230 45% 45%", hex: "#3F4FA6", usage: "Pilier Aspiration IKIGAI" },
  { name: "Noir (Dark)", token: "--kpe-dark", hsl: "0 0% 8%", hex: "#141414", usage: "Textes principaux" },
  { name: "Gris", token: "--kpe-gray", hsl: "0 0% 40%", hex: "#666666", usage: "Textes secondaires" },
  { name: "Gris clair", token: "--kpe-gray-light", hsl: "0 0% 92%", hex: "#EBEBEB", usage: "Bordures, séparateurs" },
  { name: "Blanc", token: "--card", hsl: "0 0% 100%", hex: "#FFFFFF", usage: "Fonds, cartes" },
];

const typographyScale = [
  { name: "Display XL", font: "Poppins", weight: 900, size: "28px", lineHeight: "34px", usage: "Logo, titres splash" },
  { name: "Heading 1", font: "Poppins", weight: 700, size: "22px", lineHeight: "28px", usage: "Titres d'écran" },
  { name: "Heading 2", font: "Poppins", weight: 700, size: "18px", lineHeight: "24px", usage: "Sous-titres de section" },
  { name: "Heading 3", font: "Poppins", weight: 600, size: "16px", lineHeight: "22px", usage: "Titres de cartes" },
  { name: "Body Large", font: "Plus Jakarta Sans", weight: 500, size: "15px", lineHeight: "22px", usage: "Texte principal" },
  { name: "Body", font: "Plus Jakarta Sans", weight: 400, size: "14px", lineHeight: "20px", usage: "Texte courant" },
  { name: "Body Small", font: "Plus Jakarta Sans", weight: 400, size: "12px", lineHeight: "16px", usage: "Labels, métadonnées" },
  { name: "Caption", font: "Plus Jakarta Sans", weight: 500, size: "11px", lineHeight: "14px", usage: "Tags, badges, tab bar" },
];

const spacingScale = [
  { name: "2xs", value: "4px", tailwind: "1" },
  { name: "xs", value: "8px", tailwind: "2" },
  { name: "sm", value: "12px", tailwind: "3" },
  { name: "md", value: "16px", tailwind: "4" },
  { name: "lg", value: "20px", tailwind: "5" },
  { name: "xl", value: "24px", tailwind: "6" },
  { name: "2xl", value: "32px", tailwind: "8" },
  { name: "3xl", value: "48px", tailwind: "12" },
];

const radii = [
  { name: "sm", value: "8px", usage: "Tags, badges" },
  { name: "md", value: "12px", usage: "Inputs, petits boutons" },
  { name: "lg", value: "16px", usage: "Cartes" },
  { name: "xl", value: "20px", usage: "Cartes élevées" },
  { name: "full", value: "9999px", usage: "Pills, avatars" },
];

const shadows = [
  { name: "Card", value: "0 4px 20px -4px hsl(145 100% 29% / 0.08)", usage: "Cartes standard" },
  { name: "Elevated", value: "0 12px 40px -8px hsl(145 100% 29% / 0.15)", usage: "Cartes surélevées, modales" },
  { name: "Glow", value: "0 0 30px hsl(145 100% 29% / 0.2)", usage: "Éléments focus, splash" },
];

const icons = [
  { name: "Heart", icon: Heart, usage: "Passion, favoris" },
  { name: "Target", icon: Target, usage: "IKIGAI, objectifs" },
  { name: "Lightbulb", icon: Lightbulb, usage: "Talent, idées" },
  { name: "Globe", icon: Globe, usage: "Besoins, monde" },
  { name: "Star", icon: Star, usage: "Aspiration, XP" },
  { name: "BookOpen", icon: BookOpen, usage: "Learnia, cours" },
  { name: "Users", icon: Users, usage: "Social, profil" },
  { name: "Send", icon: Send, usage: "Chat, envoi" },
  { name: "Search", icon: Search, usage: "Recherche" },
  { name: "Bell", icon: Bell, usage: "Notifications" },
  { name: "Trophy", icon: Trophy, usage: "Gamification" },
  { name: "GraduationCap", icon: GraduationCap, usage: "Écoles" },
  { name: "Briefcase", icon: Briefcase, usage: "Métiers" },
  { name: "Brain", icon: Brain, usage: "IA, conseiller" },
  { name: "ChevronRight", icon: ChevronRight, usage: "Navigation, listes" },
];

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KpeLogo size={32} variant="full" />
            <span className="text-muted-foreground text-xs ml-2">Design System v3.0</span>
          </div>
          <nav className="hidden md:flex gap-1 text-xs font-medium">
            {["Couleurs", "Typographie", "Espacement", "Composants", "Icônes"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="px-3 py-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">{s}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        {/* Brand colors reference */}
        <section>
          <SectionTitle title="Couleurs de marque" sub="Extraites du logo officiel Kpékpé" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-24" style={{ background: "#00963F" }} />
              <div className="p-3 bg-card"><p className="text-xs font-bold">Vert #00963F</p><p className="text-[10px] text-muted-foreground font-mono">HSL 145 100% 29%</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-24" style={{ background: "#FEEC01" }} />
              <div className="p-3 bg-card"><p className="text-xs font-bold">Jaune #FEEC01</p><p className="text-[10px] text-muted-foreground font-mono">HSL 56 99% 50%</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-24 bg-foreground" />
              <div className="p-3 bg-card"><p className="text-xs font-bold">Noir #141414</p><p className="text-[10px] text-muted-foreground font-mono">HSL 0 0% 8%</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-24 bg-card border-b border-border" />
              <div className="p-3 bg-card"><p className="text-xs font-bold">Blanc #FFFFFF</p><p className="text-[10px] text-muted-foreground font-mono">HSL 0 0% 100%</p></div>
            </div>
          </div>
        </section>

        {/* Logo placeholder */}
        <section>
          <SectionTitle title="Logo & Marque" sub="Espaces réservés — remplacer par le vrai logo dans Figma" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-2xl bg-kpe-dark p-8 flex items-center justify-center">
              <KpeLogo size={48} variant="full-white" />
            </div>
            <div className="rounded-2xl bg-card border border-border p-8 flex items-center justify-center">
              <KpeLogo size={48} variant="full" />
            </div>
          </div>
        </section>

        {/* COULEURS */}
        <section id="couleurs">
          <SectionTitle title="Palette complète" sub="Variantes dérivées des 4 couleurs de base" />

          <h3 className="text-sm font-semibold text-muted-foreground mb-3 mt-6">Verts de marque (#00963F)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {colors.slice(0, 5).map(c => <ColorCard key={c.token} {...c} />)}
          </div>

          <h3 className="text-sm font-semibold text-muted-foreground mb-3 mt-8">Jaunes de marque (#FEEC01)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {colors.slice(5, 8).map(c => <ColorCard key={c.token} {...c} />)}
          </div>

          <h3 className="text-sm font-semibold text-muted-foreground mb-3 mt-8">Piliers IKIGAI</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colors.slice(8, 12).map(c => <ColorCard key={c.token} {...c} />)}
          </div>

          <h3 className="text-sm font-semibold text-muted-foreground mb-3 mt-8">Neutres</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colors.slice(12).map(c => <ColorCard key={c.token} {...c} />)}
          </div>

          <h3 className="text-sm font-semibold text-muted-foreground mb-3 mt-8">Gradients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Primary", css: "linear-gradient(135deg, #00963F, #12A34D)" },
              { name: "Accent", css: "linear-gradient(135deg, #FEEC01, #FFE619)" },
              { name: "Hero", css: "linear-gradient(160deg, #00963F 0%, #12A34D 50%, #4DB876 100%)" },
            ].map(g => (
              <div key={g.name} className="rounded-xl overflow-hidden border border-border">
                <div className="h-16" style={{ background: g.css }} />
                <div className="p-3 bg-card">
                  <p className="text-xs font-semibold">{g.name}</p>
                  <p className="text-[10px] text-muted-foreground font-mono mt-0.5 break-all">{g.css}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHIE */}
        <section id="typographie">
          <SectionTitle title="Typographie" sub="Poppins Black (titres/logo) + Plus Jakarta Sans (corps)" />
          <div className="space-y-1 mt-6">
            {typographyScale.map(t => (
              <div key={t.name} className="flex items-baseline gap-4 py-3 border-b border-border/50">
                <div className="w-28 shrink-0">
                  <p className="text-xs font-semibold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.font} {t.weight}</p>
                </div>
                <p style={{ fontFamily: `'${t.font}', sans-serif`, fontWeight: t.weight, fontSize: t.size, lineHeight: t.lineHeight }} className="flex-1 min-w-0 truncate">
                  Trouve ta voie avec Kpékpé
                </p>
                <div className="hidden sm:block shrink-0 text-right">
                  <p className="text-[10px] text-muted-foreground font-mono">{t.size} / {t.lineHeight}</p>
                  <p className="text-[10px] text-muted-foreground">{t.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ESPACEMENT */}
        <section id="espacement">
          <SectionTitle title="Espacement & Rayons" sub="Système 4px — Tokens Tailwind" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Spacing Scale</h3>
              <div className="space-y-2">
                {spacingScale.map(s => (
                  <div key={s.name} className="flex items-center gap-3">
                    <span className="text-xs font-mono w-8 text-muted-foreground">{s.name}</span>
                    <div className="h-4 rounded bg-primary" style={{ width: s.value }} />
                    <span className="text-xs text-muted-foreground">{s.value} <span className="font-mono text-foreground/50">p-{s.tailwind}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Border Radius</h3>
              <div className="space-y-3">
                {radii.map(r => (
                  <div key={r.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 border-2 border-primary bg-kpe-green-pale" style={{ borderRadius: r.value }} />
                    <div>
                      <p className="text-xs font-semibold">{r.name} — {r.value}</p>
                      <p className="text-[10px] text-muted-foreground">{r.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-semibold mb-3 mt-8">Shadows</h3>
              <div className="space-y-3">
                {shadows.map(s => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-card" style={{ boxShadow: s.value }} />
                    <div>
                      <p className="text-xs font-semibold">{s.name}</p>
                      <p className="text-[10px] text-muted-foreground">{s.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPOSANTS */}
        <section id="composants">
          <SectionTitle title="Composants UI" sub="Bibliothèque de composants principaux" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ComponentCard title="Boutons">
              <div className="flex flex-wrap gap-2">
                <button className="h-11 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ fontFamily: "'Poppins'" }}>Primaire</button>
                <button className="h-11 px-6 rounded-2xl text-sm font-semibold" style={{ fontFamily: "'Poppins'", background: "linear-gradient(135deg, #FEEC01, #FFE619)", color: "#141414" }}>Accent Jaune</button>
                <button className="h-11 px-6 rounded-2xl border-2 border-primary text-primary font-semibold text-sm" style={{ fontFamily: "'Poppins'" }}>Outline</button>
                <button className="h-11 px-6 rounded-2xl bg-muted text-muted-foreground font-semibold text-sm" style={{ fontFamily: "'Poppins'" }}>Ghost</button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Hauteur: 44-54px · Radius: 16px · Font: Poppins 600-700</p>
            </ComponentCard>

            <ComponentCard title="Champs de saisie">
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-muted rounded-xl px-3 h-11">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Rechercher un métier…</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-xl px-3 h-11 ring-2 ring-primary">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Psychologue</span>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard title="Cartes">
              <div className="flex gap-3">
                <div className="flex-1 rounded-2xl bg-card p-3 border border-border/50" style={{ boxShadow: shadows[0].value }}>
                  <div className="w-8 h-8 rounded-xl bg-kpe-green-pale flex items-center justify-center mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">Métiers</p>
                  <p className="text-[10px] text-muted-foreground">12 pour toi</p>
                </div>
                <div className="flex-1 rounded-2xl bg-card p-3 border border-border/50" style={{ boxShadow: shadows[0].value }}>
                  <div className="w-8 h-8 rounded-xl bg-kpe-yellow-pale flex items-center justify-center mb-2">
                    <GraduationCap className="w-4 h-4 text-kpe-yellow" />
                  </div>
                  <p className="text-xs font-semibold">Écoles</p>
                  <p className="text-[10px] text-muted-foreground">8 au Togo</p>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard title="Tags & Badges">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-kpe-green-pale text-primary text-xs font-semibold">Social</span>
                <span className="px-3 py-1 rounded-full bg-kpe-yellow-pale text-kpe-dark text-xs font-semibold">Emploi</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "hsl(230 45% 92%)", color: "hsl(230 45% 45%)" }}>Éducation</span>
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">97%</span>
                <span className="px-2 py-0.5 rounded-full bg-kpe-yellow text-kpe-dark text-[10px] font-bold">+80 XP</span>
              </div>
            </ComponentCard>

            <ComponentCard title="Bulles de chat">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Brain className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 text-xs max-w-[75%]">Salut ! Je suis Kpé, ton conseiller IA.</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[75%]">Écouter & conseiller</div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard title="Tab Bar">
              <div className="flex items-end justify-around bg-card rounded-2xl px-2 py-2 border border-border/50">
                {[
                  { icon: Target, label: "Accueil", active: false },
                  { icon: BookOpen, label: "Suivi", active: false },
                  { icon: Brain, label: "Kpé", special: true },
                  { icon: GraduationCap, label: "Learnia", active: true },
                  { icon: Users, label: "Profil", active: false },
                ].map((t, i) => {
                  const Icon = t.icon;
                  if (t.special) {
                    return (
                      <div key={i} className="flex flex-col items-center -mt-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-[9px] font-semibold text-primary mt-0.5">{t.label}</span>
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <Icon className={`w-5 h-5 ${t.active ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-[9px] ${t.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{t.label}</span>
                    </div>
                  );
                })}
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* ICÔNES */}
        <section id="icônes">
          <SectionTitle title="Icônes" sub="Lucide React — stroke-width 1.5-2.5" />
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4 mt-6">
            {icons.map(({ name, icon: Icon, usage }) => (
              <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <Icon size={24} className="text-foreground" strokeWidth={1.8} />
                <p className="text-[10px] font-semibold text-center">{name}</p>
                <p className="text-[9px] text-muted-foreground text-center">{usage}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground mt-1">{sub}</p>
    </div>
  );
}

function ColorCard({ name, hsl, hex, usage }: { name: string; token: string; hsl: string; hex: string; usage: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-14" style={{ background: hex }} />
      <div className="p-2.5 bg-card">
        <p className="text-xs font-semibold">{name}</p>
        <p className="text-[10px] text-muted-foreground font-mono">{hex}</p>
        <p className="text-[10px] text-muted-foreground font-mono">{hsl}</p>
        <p className="text-[9px] text-muted-foreground mt-1">{usage}</p>
      </div>
    </div>
  );
}

function ComponentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-5">
      <h3 className="font-display text-sm font-bold text-foreground mb-3">{title}</h3>
      {children}
    </div>
  );
}
