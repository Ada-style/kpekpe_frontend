import { useState } from "react";
import { Mail, Lock, Eye, ArrowRight, Check, User, Phone, GraduationCap, School } from "lucide-react";
import { KpeLogo } from "./KpeLogo";

interface LoginScreenProps {
  initialMode?: "login" | "register";
}

export function LoginScreen({ initialMode }: LoginScreenProps = {}) {
  const [mode, setMode] = useState<"login" | "register">(initialMode ?? "login");

  return (
    <div className="flex-1 flex flex-col bg-card overflow-y-auto kpe-scrollbar-hide">
      {/* Header */}
      <div className="kpe-gradient-hero px-8 pt-10 pb-14 rounded-b-[40px] text-center">
        <div className="flex justify-center mb-4">
          <KpeLogo size={48} variant="mark" />
        </div>
        <h1 className="font-display text-2xl font-bold text-primary-foreground">
          {mode === "login" ? "Bon retour !" : "Rejoins Kpékpé"}
        </h1>
        <p className="font-body text-primary-foreground/80 text-sm mt-1">
          {mode === "login" ? "Connecte-toi pour continuer" : "Crée ton compte gratuitement"}
        </p>
      </div>

      {/* Toggle buttons */}
      <div className="px-6 -mt-6">
        <div className="kpe-card-elevated p-1.5 flex rounded-2xl">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-3 rounded-xl font-display text-sm font-bold transition-all ${
              mode === "login"
                ? "kpe-gradient-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 py-3 rounded-xl font-display text-sm font-bold transition-all ${
              mode === "register"
                ? "kpe-gradient-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Inscription
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 mt-5 flex-1 flex flex-col gap-3">
        {mode === "register" && (
          <>
            <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
              <User size={20} className="text-muted-foreground" />
              <input type="text" placeholder="Nom complet" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
              <Phone size={20} className="text-muted-foreground" />
              <input type="tel" placeholder="Numéro de téléphone" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
          </>
        )}

        <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
          <Mail size={20} className="text-muted-foreground" />
          <input type="email" placeholder="Adresse email" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
        </div>

        <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
          <Lock size={20} className="text-muted-foreground" />
          <input type="password" placeholder="Mot de passe" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
        </div>

        {mode === "register" && (
          <>
            <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
              <GraduationCap size={20} className="text-muted-foreground" />
              <input type="text" placeholder="Classe (ex: Terminale D)" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="kpe-card-elevated px-4 py-3 flex items-center gap-3">
              <School size={20} className="text-muted-foreground" />
              <input type="text" placeholder="Établissement scolaire" className="flex-1 font-body text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
          </>
        )}

        {mode === "login" && (
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
                <Check size={12} className="text-primary-foreground" />
              </div>
              <span className="font-body text-xs text-muted-foreground">Se souvenir de moi</span>
            </label>
            <button className="font-body text-xs text-primary font-semibold">Mot de passe oublié ?</button>
          </div>
        )}

        <button className="w-full h-14 rounded-2xl kpe-gradient-primary text-primary-foreground font-display font-bold text-base flex items-center justify-center gap-2 shadow-lg mt-2">
          {mode === "login" ? "Se connecter" : "Créer mon compte"} <ArrowRight size={18} />
        </button>

        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-border" />
          <span className="font-body text-xs text-muted-foreground">ou</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <button className="w-full h-12 rounded-2xl border border-border bg-card flex items-center justify-center gap-3 font-body text-sm font-medium text-foreground">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continuer avec Google
        </button>

        <p className="text-center font-body text-sm text-muted-foreground pb-6">
          {mode === "login" ? (
            <>Pas encore de compte ? <button onClick={() => setMode("register")} className="text-primary font-semibold">Inscris-toi</button></>
          ) : (
            <>Déjà un compte ? <button onClick={() => setMode("login")} className="text-primary font-semibold">Connecte-toi</button></>
          )}
        </p>
      </div>
    </div>
  );
}
