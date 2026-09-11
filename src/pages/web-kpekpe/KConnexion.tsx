import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { KPublicLayout } from "@/components/web-kpekpe/KPublicLayout";
import { KButton, KCard } from "@/components/web-kpekpe/KPrimitives";

/** E04 — Connexion */
export default function KConnexion() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <KPublicLayout>
      <div className="max-w-md mx-auto px-4 md:px-8 py-12 md:py-20">
        <KCard className="p-8 md:p-10">
          <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Bon retour !</h1>
          <p className="mt-2 text-sm text-muted-foreground">Connecte-toi pour continuer ton orientation.</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/web-kpekpe/app/mon-parcours");
            }}
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Adresse email</label>
              <input
                type="email"
                required
                placeholder="ton@email.com"
                className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-foreground">Mot de passe</label>
                <a href="#" className="text-xs text-primary hover:underline font-semibold">Oublié ?</a>
              </div>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full h-11 px-3.5 pr-10 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground"
                  aria-label={showPwd ? "Masquer" : "Afficher"}
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <KButton type="submit" variant="primary" size="lg" className="w-full mt-2">
              Me connecter <ArrowRight className="w-4 h-4" />
            </KButton>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link to="/web-kpekpe/inscription" className="text-primary font-semibold hover:underline">
                Commencer
              </Link>
            </p>
          </div>
        </KCard>
      </div>
    </KPublicLayout>
  );
}
