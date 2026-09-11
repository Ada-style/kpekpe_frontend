import { Link } from "react-router-dom";
import { Lock, Check } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";

export default function WebResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6"><WebLogo size={40} variant="mark" /></div>
        <h1 className="font-display text-3xl font-black text-center">Nouveau mot de passe</h1>
        <p className="mt-2 text-center text-muted-foreground">Choisis un mot de passe sûr, minimum 8 caractères.</p>
        <form className="mt-8 space-y-4">
          {["Nouveau mot de passe", "Confirmer le mot de passe"].map((l) => (
            <div key={l}>
              <label className="text-sm font-medium block mb-2">{l}</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="password" placeholder="••••••••" className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none" />
              </div>
            </div>
          ))}
          <button className="w-full h-12 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2">
            <Check className="w-4 h-4" /> Mettre à jour
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link to="/web-app/login" className="text-primary hover:underline">Retour à la connexion</Link>
        </p>
      </div>
    </div>
  );
}
