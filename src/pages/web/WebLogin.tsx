import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { WebLogo } from "@/components/web/WebLogo";
import heroStudents from "@/assets/landing-students.jpg";

export default function WebLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left panel — fond sombre avec image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-16"
        style={{
          backgroundImage: `url(${heroStudents})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 max-w-md text-center">
          <WebLogo size={48} variant="full" onDark />
          <h2 className="font-display text-4xl font-black text-white mt-8">
            Bienvenue sur Kpékpé
          </h2>
          <p className="text-white/80 mt-4 leading-relaxed">
            La plateforme qui t'aide à trouver ta voie grâce à la méthode IKIGAI adaptée au Togo.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-white/70">
            <span>✓ 350+ métiers référencés au Togo</span>
            <span>✓ Recommandations personnalisées</span>
            <span>✓ Gratuit, à vie</span>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden mb-8 flex justify-center">
            <WebLogo size={36} variant="full" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">Connexion</h1>
          <p className="font-body text-muted-foreground mt-2">
            Accède à ton espace d'orientation personnalisé.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground block mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="w-full h-11 pl-9 pr-3 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground block mb-1.5">Mot de passe</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-11 pl-9 pr-10 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="/web-app/forgot-password" className="text-sm text-primary hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <Link
              to="/web-app/mon-parcours"
              className="w-full h-12 rounded-xl kpe-gradient-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity"
            >
              Se connecter <ArrowRight size={18} />
            </Link>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Pas encore de compte ?{" "}
            <Link to="/web-app/register" className="text-primary font-semibold hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
