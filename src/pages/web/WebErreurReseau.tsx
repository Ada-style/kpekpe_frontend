import { Link } from "react-router-dom";
import { WifiOff, RefreshCw } from "lucide-react";

export default function WebErreurReseau() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-6">
          <WifiOff className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="font-display text-3xl font-black">Pas de connexion</h1>
        <p className="mt-3 text-muted-foreground">Vérifie ta connexion internet et réessaie.</p>
        <div className="mt-8 space-y-3">
          <button className="w-full h-12 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" /> Réessayer
          </button>
          <Link to="/web-app" className="block h-12 rounded-xl border border-border font-medium flex items-center justify-center hover:bg-muted">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
