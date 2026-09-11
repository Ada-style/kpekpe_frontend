import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, MessageCircle, Rocket, ArrowRight } from "lucide-react";
import { KpeLogo } from "./KpeLogo";

const slides = [
  {
    icon: Compass,
    title: "Découvre ton IKIGAI",
    sub: "Une méthode japonaise adaptée à la réalité togolaise pour trouver ta voie idéale.",
    bgGradient: "from-kpe-green-pale to-kpe-green-light/30",
    dotActive: "bg-primary",
    dotInactive: "bg-primary/30",
    iconBg: "kpe-gradient-primary",
  },
  {
    icon: MessageCircle,
    title: "Parle avec Kpékpé",
    sub: "Notre IA conversationnelle t'accompagne comme un vrai conseiller d'orientation.",
    bgGradient: "from-kpe-green-pale to-kpe-green-light/20",
    dotActive: "bg-primary",
    dotInactive: "bg-primary/30",
    iconBg: "kpe-gradient-primary",
  },
  {
    icon: Rocket,
    title: "C'est parti !",
    sub: "Lance ton premier test IKIGAI et découvre les métiers, écoles et parcours faits pour toi.",
    bgGradient: "from-kpe-yellow-pale to-kpe-green-pale",
    dotActive: "bg-kpe-yellow",
    dotInactive: "bg-kpe-yellow/30",
    iconBg: "kpe-gradient-accent",
  },
];

interface OnboardingProps {
  initialSlide?: number;
}

export function OnboardingScreen({ initialSlide }: OnboardingProps = {}) {
  const [slide, setSlide] = useState(initialSlide ?? 0);
  const s = slides[slide];
  const Icon = s.icon;

  return (
    <div className="flex-1 flex flex-col bg-card">
      {/* Top logo placeholder */}
      <div className="flex justify-center pt-6 pb-2">
        <KpeLogo size={28} variant="full" />
      </div>

      {/* Illustration area */}
      <div className={`flex-1 flex items-center justify-center bg-gradient-to-br ${s.bgGradient}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-32 h-32 rounded-[32px] ${s.iconBg} flex items-center justify-center shadow-xl`}
          >
            <Icon size={56} className="text-primary-foreground" strokeWidth={1.5} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === slide ? `w-6 ${s.dotActive}` : `w-2 ${s.dotInactive}`
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="px-8 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
            <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">{s.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="px-8 pb-8 space-y-3">
        {slide < 2 ? (
          <button
            onClick={() => setSlide(slide + 1)}
            className="w-full h-14 rounded-2xl kpe-gradient-primary text-primary-foreground font-display font-bold text-base flex items-center justify-center gap-2 shadow-lg"
          >
            Suivant <ArrowRight size={18} />
          </button>
        ) : (
          <button className="w-full h-14 rounded-2xl kpe-gradient-accent text-accent-foreground font-display font-bold text-base flex items-center justify-center gap-2 shadow-lg">
            Commencer <Rocket size={18} />
          </button>
        )}
        <button className="w-full text-center text-muted-foreground font-body text-sm">
          Passer →
        </button>
      </div>
    </div>
  );
}
