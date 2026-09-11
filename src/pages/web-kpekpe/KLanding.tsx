import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, ChartBar, Map, Zap, ChevronRight, Check,
  Compass, MessageCircleHeart, GraduationCap, Building2, Star, Plus, Minus
} from "lucide-react";
import { useState } from "react";
import { KPublicLayout } from "@/components/web-kpekpe/KPublicLayout";
import { KCard, KBadge, KButton, CATALOGUE_METIERS } from "@/components/web-kpekpe/KPrimitives";
import { cn } from "@/lib/utils";

/** E01 — Landing Page publique */
export default function KLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Kpékpé est-il vraiment gratuit ?", a: "Oui, totalement. Kpékpé est une initiative soutenue par l'OIF D-CLIC/HPI et le CNIOSP. Aucune fonctionnalité du MVP n'est payante." },
    { q: "Combien de temps prend le test d'orientation ?", a: "Environ 20 minutes. Tu peux faire une pause et reprendre plus tard, ta progression est sauvegardée automatiquement." },
    { q: "Les métiers proposés sont-ils adaptés au marché togolais ?", a: "Oui. Chaque fiche métier contient les débouchés réels au Togo, les salaires en FCFA et les formations disponibles localement." },
    { q: "Ai-je besoin d'une bonne connexion internet ?", a: "Non. Kpékpé est conçu pour fonctionner sur une connexion 3G. L'interface reste rapide même avec un débit limité." },
  ];

  return (
    <KPublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-center relative">
          <div className="md:col-span-7">
            <KBadge variant="primary" className="mb-5">
              <Sparkles className="w-3 h-3" /> Nouvelle plateforme d'orientation
            </KBadge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
              Découvre les métiers qui correspondent à <span className="text-primary">ton profil</span> et au <span className="text-primary">marché togolais</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              En moins de 20 minutes. Gratuit. Basé sur des données locales. Kpékpé t'accompagne dans ton choix d'orientation avec Kpé, ton conseiller IA bienveillant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/web-kpekpe/inscription">
                <KButton variant="accent" size="lg">
                  Commencer gratuitement <ArrowRight className="w-4 h-4" />
                </KButton>
              </Link>
              <Link to="/web-kpekpe/connexion">
                <KButton variant="outline" size="lg">Je me connecte</KButton>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 350+ métiers</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 97 organisations</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 100% Togo</div>
            </div>
          </div>

          {/* Visuel — carte mockup */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl blur-2xl opacity-60" />
              <KCard className="relative p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ton profil</p>
                    <p className="font-display font-bold">Analytique-Social</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Passion", value: 82 },
                    { label: "Talent", value: 68 },
                    { label: "Besoins", value: 74 },
                    { label: "Aspiration", value: 90 },
                  ].map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{d.label}</span>
                        <span className="font-semibold">{d.value}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${d.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Métiers recommandés</p>
                  {["Développeur Web", "Conseiller d'orientation", "Chargé RH"].map((m, i) => (
                    <div key={m} className="flex items-center justify-between py-1.5">
                      <span className="text-sm">{i + 1}. {m}</span>
                      <KBadge variant="primary">{95 - i * 4}%</KBadge>
                    </div>
                  ))}
                </div>
              </KCard>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 md:py-24 border-y border-border bg-card">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Comment ça marche</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-black text-foreground">
              3 étapes, 20 minutes, un chemin clair
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircleHeart, num: "01", title: "Réponds aux questions", desc: "Kpé te guide à travers une conversation naturelle pour cerner ton profil réel." },
              { icon: Compass, num: "02", title: "Découvre ton profil", desc: "Un profil personnalisé, expliqué avec bienveillance — pas juste des pourcentages." },
              { icon: GraduationCap, num: "03", title: "Explore les opportunités", desc: "Métiers, formations et écoles réellement disponibles au Togo." },
            ].map((s) => (
              <div key={s.num} className="relative">
                <div className="text-6xl font-display font-black text-primary/10 absolute -top-4 -left-2 select-none">{s.num}</div>
                <div className="relative pt-8">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Kpékpé */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pourquoi Kpékpé</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-black text-foreground">
                Une orientation ancrée dans <span className="text-primary">la réalité togolaise</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Kpékpé ne te propose pas de rêves génériques. Chaque recommandation est expliquée, contextualisée et vérifiée pour le marché local.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Map, title: "Données 100% locales", desc: "Débouchés au Togo, salaires en FCFA, formations disponibles à Lomé, Kara, Sokodé…" },
                { icon: ChartBar, title: "Recommandations expliquées", desc: "Chaque métier vient avec la raison — pas juste un score sec." },
                { icon: Zap, title: "Accessible partout", desc: "Fonctionne sur connexion 3G, sur n'importe quel smartphone." },
                { icon: MessageCircleHeart, title: "Kpé, ton conseiller", desc: "Un compagnon IA bienveillant qui t'accompagne sans jamais décider à ta place." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu catalogue */}
      <section className="py-16 md:py-20 border-y border-border bg-card">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Aperçu du catalogue</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-black text-foreground">Découvre déjà des métiers</h2>
            </div>
            <Link to="/web-kpekpe/explorer/metiers" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Voir tous les métiers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATALOGUE_METIERS.slice(0, 4).map((m) => (
              <Link key={m.id} to={`/web-kpekpe/explorer/metiers/${m.id}`}>
                <KCard className="p-5 hover:shadow-md transition-shadow h-full">
                  <KBadge variant="primary" className="mb-3">{m.secteur}</KBadge>
                  <h3 className="font-display font-bold text-foreground mb-1">{m.titre}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{m.debouches}</p>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                    <span>{m.niveau}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </KCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Ils en parlent</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-black">Des jeunes déjà orientés</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ama, 17 ans", ville: "Lomé", quote: "J'hésitais entre médecine et informatique. Kpékpé m'a aidée à comprendre pourquoi le développement web collait à ma personnalité." },
              { name: "Kossi, 19 ans", ville: "Kara", quote: "J'ai découvert des formations proches de chez moi que je ne connaissais pas. C'est concret." },
              { name: "Adjovi, 22 ans", ville: "Atakpamé", quote: "Kpé m'a écoutée sans me juger. J'ai pris confiance dans mon choix de reconversion." },
            ].map((t) => (
              <KCard key={t.name} className="p-6">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-foreground leading-relaxed">« {t.quote} »</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.ville}</p>
                  </div>
                </div>
              </KCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Questions fréquentes</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-black">On répond à tes doutes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <KCard key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display font-bold text-foreground">{f.q}</span>
                  {openFaq === i ? <Minus className="w-4 h-4 text-primary flex-shrink-0" /> : <Plus className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-200", openFaq === i ? "max-h-40" : "max-h-0")}>
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </KCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-black text-primary-foreground">Prêt à trouver ta voie ?</h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
                Rejoins des centaines de jeunes qui ont déjà commencé leur orientation avec Kpékpé.
              </p>
              <Link to="/web-kpekpe/inscription" className="inline-block mt-8">
                <KButton variant="accent" size="lg">
                  Commencer gratuitement <ArrowRight className="w-4 h-4" />
                </KButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </KPublicLayout>
  );
}
