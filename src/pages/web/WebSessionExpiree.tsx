import { Link } from "react-router-dom";
import { Clock, LogIn } from "lucide-react";

export default function WebSessionExpiree() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <Clock className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-black">Ta session a expiré</h1>
        <p className="mt-3 text-muted-foreground">Reconnecte-toi pour continuer. Tes données sont sauvegardées.</p>
        <Link to="/web-app/login" className="mt-8 h-12 px-6 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold inline-flex items-center gap-2">
          <LogIn className="w-4 h-4" /> Me reconnecter
        </Link>
      </div>
    </div>
  );
}
