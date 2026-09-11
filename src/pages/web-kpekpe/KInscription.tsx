import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import { KPublicLayout } from "@/components/web-kpekpe/KPublicLayout";
import { KButton, KCard } from "@/components/web-kpekpe/KPrimitives";
import { cn } from "@/lib/utils";

/** E02 — Inscription */
export default function KInscription() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [pwd, setPwd] = useState("");
  const [accepted, setAccepted] = useState(false);

  const strength = pwd.length >= 12 ? 3 : pwd.length >= 8 ? 2 : pwd.length >= 4 ? 1 : 0;
  const strengthLabel = ["Trop court", "Faible", "Correct", "Fort"][strength];
  const strengthColor = ["bg-muted", "bg-destructive", "bg-orange-400", "bg-primary"][strength];

  return (
    <KPublicLayout>
      <div className="max-w-md mx-auto px-4 md:px-8 py-12 md:py-20">
        <KCard className="p-8 md:p-10">
          <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Créer mon compte</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Gratuit et sans engagement — l'orientation qui te correspond, en 20 minutes.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/web-kpekpe/verifier-email");
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  required
                  minLength={8}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Minimum 8 caractères"
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
              {pwd && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={cn("h-1 flex-1 rounded-full", i < strength ? strengthColor : "bg-muted")}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{strengthLabel}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Confirmer le mot de passe</label>
              <input
                type="password"
                required
                placeholder="Retape ton mot de passe"
                className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer pt-2">
              <button
                type="button"
                onClick={() => setAccepted((a) => !a)}
                className={cn(
                  "w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors mt-0.5",
                  accepted ? "bg-primary border-primary" : "border-input hover:border-primary/50"
                )}
                aria-label="Accepter les conditions"
              >
                {accepted && <Check className="w-3 h-3 text-primary-foreground" />}
              </button>
              <span className="text-sm text-muted-foreground">
                J'accepte les <a href="#" className="text-primary hover:underline">conditions générales</a> et la <a href="#" className="text-primary hover:underline">politique de confidentialité</a>.
              </span>
            </label>

            <KButton type="submit" variant="primary" size="lg" className="w-full" disabled={!accepted}>
              Créer mon compte <ArrowRight className="w-4 h-4" />
            </KButton>

            <p className="text-xs text-muted-foreground text-center">
              Un email de vérification te sera envoyé.
            </p>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Déjà un compte ?{" "}
              <Link to="/web-kpekpe/connexion" className="text-primary font-semibold hover:underline">
                Me connecter
              </Link>
            </p>
          </div>
        </KCard>
      </div>
    </KPublicLayout>
  );
}
