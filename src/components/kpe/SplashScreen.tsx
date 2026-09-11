import { motion } from "framer-motion";
import { KpeLogo } from "./KpeLogo";

export function SplashScreen() {
  return (
    <div className="flex-1 kpe-gradient-hero flex flex-col items-center justify-center gap-6">
      {/* Logo placeholder */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="w-28 h-28 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center shadow-lg">
          <KpeLogo size={44} variant="mark" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <KpeLogo size={36} variant="full-white" />
        <p className="font-body text-primary-foreground/80 text-sm mt-3">Trouve ta voie</p>
      </motion.div>

      {/* Loader dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-2 mt-8"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-primary-foreground kpe-dot-anim"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
