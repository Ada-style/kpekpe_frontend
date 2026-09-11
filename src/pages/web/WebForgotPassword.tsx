import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";

export default function WebForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6"><WebLogo size={40} variant="mark" /></div>
        <h1 className="font-display text-3xl font-black text-center">Mot de passe oublié</h1>
        <p className="mt-2 text-center text-muted-foreground">
          Entre ton email, nous t'enverrons un lien pour créer un nouveau mot de passe.
        </p>
        <form className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium block mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="ton@email.com" className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-ring outline-none" />
            </div>
          </div>
          <button className="w-full h-12 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2">
            Envoyer le lien <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link to="/web-app/login" className="text-primary hover:underline">Retour à la connexion</Link>
        </p>
      </div>
    </div>
  );
}
