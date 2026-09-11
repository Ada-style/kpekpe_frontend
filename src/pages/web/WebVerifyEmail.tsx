import { Link } from "react-router-dom";
import { MailCheck } from "lucide-react";
import { WebLogo } from "@/components/web/WebLogo";

export default function WebVerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6"><WebLogo size={40} variant="mark" /></div>
        <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
          <MailCheck className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-black">Vérifie ta boîte mail</h1>
        <p className="mt-3 text-muted-foreground">
          Un lien de confirmation a été envoyé à <span className="text-foreground font-medium">kofi@example.com</span>.
          Clique dessus pour activer ton compte.
        </p>
        <div className="mt-8 space-y-3">
          <button className="w-full h-12 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold">
            Renvoyer l'email
          </button>
          <button className="w-full h-12 rounded-xl border border-border font-medium hover:bg-muted">
            Changer d'adresse email
          </button>
          <div className="pt-4 border-t border-border mt-4">
            <Link to="/web-app/onboarding" className="w-full h-12 rounded-xl bg-green-500/10 text-green-600 font-medium flex items-center justify-center hover:bg-green-500/20">
              [Mock] Simuler clic sur le lien validé
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          <Link to="/web-app/login" className="hover:text-primary">← Retour à la connexion</Link>
        </p>
      </div>
    </div>
  );
}
