import { Link } from "react-router-dom";
import { useEffect } from "react";
import kpeAvatar from "@/assets/icone_ia.png";

export default function WebOrientationCalcul() {
  useEffect(() => {
    const t = setTimeout(() => window.location.assign("/web-app/resultats"), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full kpe-gradient-primary kpe-pulse" />
        <div className="absolute inset-2 rounded-full overflow-hidden border border-border bg-card flex items-center justify-center shadow-sm">
          <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-black">Kpékpé analyse tes réponses…</h1>
      <p className="mt-3 text-muted-foreground max-w-md">Nous préparons ton profil personnalisé et tes recommandations. Cela prend quelques secondes.</p>
      <div className="mt-6 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-2.5 h-2.5 rounded-full bg-primary kpe-dot-anim" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <p className="mt-10 text-xs text-muted-foreground">
        <Link to="/web-app/resultats" className="hover:text-primary underline">Passer à mes résultats →</Link>
      </p>
    </div>
  );
}
