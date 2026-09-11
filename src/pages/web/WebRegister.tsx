import { Link, useNavigate } from "react-router-dom";
import {
  Mail, Lock, User, BookOpen, ArrowRight, Eye, EyeOff,
  GraduationCap, Users, Briefcase, Compass, Phone, ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { WebLogo } from "@/components/web/WebLogo";
import heroStudents from "@/assets/landing-students.jpg";

type RoleType = "student" | "parent" | "tutor" | "counselor";

export default function WebRegister() {
  const [role, setRole] = useState<RoleType>("student");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "student") {
      navigate("/web-app/onboarding?role=student");
    } else if (role === "parent") {
      navigate("/web-app/onboarding-parent");
    } else if (role === "tutor") {
      navigate("/web-app/onboarding-repetiteur");
    } else if (role === "counselor") {
      navigate("/web-app/onboarding-conseiller");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left panel — identité visuelle */}
      <div
        className="hidden lg:flex lg:w-5/12 relative items-center justify-center p-12"
        style={{
          backgroundImage: `url(${heroStudents})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/75 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-md text-center text-white">
          <WebLogo size={48} variant="full" onDark />
          <h2 className="font-display text-3xl font-black mt-8">
            L'Écosystème Éducatif Togolais d'Excellence
          </h2>
          <p className="text-white/80 mt-4 text-sm leading-relaxed">
            Élèves, parents, répétiteurs certifiés et conseillers d'orientation réunis sur une même plateforme pour la réussite scolaire et professionnelle au Togo.
          </p>
          <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/20 text-left space-y-3 text-xs text-white/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Répétiteurs vérifiés (CNI & Diplômes archivés)</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Cours Série D, C4, A4 & Collège</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-primary" />
              <span>Orientation scolaire & avis de conseillers certifiés</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 overflow-y-auto">
        <div className="w-full max-w-lg">
          {/* Logo mobile */}
          <div className="lg:hidden mb-6 flex justify-center">
            <WebLogo size={36} variant="full" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-black text-foreground">
            Créer un compte
          </h1>
          <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 mb-6">
            Sélectionne ton profil pour démarrer ton expérience personnalisée.
          </p>

          {/* Sélecteur de Rôles — 4 profils distincts */}
          <div className="mb-6">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
              Tu rejoins Kpékpé en tant que :
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {/* 1. Élève */}
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  role === "student"
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-foreground">Élève</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">Collège & Lycée (Série D, C4, A4)</div>
                </div>
              </button>

              {/* 2. Parent */}
              <button
                type="button"
                onClick={() => setRole("parent")}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  role === "parent"
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-foreground">Parent d'Élève</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">Suivi d'orientation & Répétiteurs</div>
                </div>
              </button>

              {/* 3. Répétiteur */}
              <button
                type="button"
                onClick={() => setRole("tutor")}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  role === "tutor"
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-foreground">Répétiteur</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">Enseignant certifié à Lomé</div>
                </div>
              </button>

              {/* 4. Conseiller */}
              <button
                type="button"
                onClick={() => setRole("counselor")}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  role === "counselor"
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-foreground">Conseiller d'Orientation</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">Validation d'orientation & Bilans</div>
                </div>
              </button>
            </div>
          </div>

          {/* Formulaire dynamique selon le rôle */}
          <form onSubmit={handleRegister} className="space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Prénom *</label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="text"
                    placeholder="Kofi"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Nom *</label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="text"
                    placeholder="Mensah"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Numéro de téléphone (+228) *</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="tel"
                    placeholder="90 XX XX XX"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Email (optionnel)</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="kofi@exemple.tg"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Champ spécifique pour les élèves */}
            {role === "student" && (
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Classe actuelle *</label>
                <div className="relative">
                  <BookOpen size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select
                    required
                    defaultValue="Terminale D"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none"
                  >
                    <optgroup label="Lycée (Séries officielles Togo)">
                      <option value="Terminale D">Terminale D (Sciences de la Vie & Terre)</option>
                      <option value="Terminale C4">Terminale C4 (Maths & Sciences Physiques)</option>
                      <option value="Terminale A4">Terminale A4 (Lettres & Philosophie)</option>
                      <option value="Première D">Première D</option>
                      <option value="Première C4">Première C4</option>
                      <option value="Première A4">Première A4</option>
                      <option value="Seconde S">Seconde S (Scientifique)</option>
                      <option value="Seconde L">Seconde L (Littéraire)</option>
                    </optgroup>
                    <optgroup label="Collège">
                      <option value="3ème">3ème (Préparation BEPC)</option>
                      <option value="4ème">4ème</option>
                      <option value="5ème">5ème</option>
                      <option value="6ème">6ème</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            )}

            {/* Champ spécifique pour les répétiteurs */}
            {role === "tutor" && (
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground space-y-1">
                <div className="font-semibold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>Certification Répétiteur Lomé</span>
                </div>
                <p>À l'étape suivante, vous renseignerez vos quartiers de Lomé, vos matières et téléchargerez votre CNI pour la vérification.</p>
              </div>
            )}

            {/* Champ spécifique pour les conseillers */}
            {role === "counselor" && (
              <div className="p-3 rounded-xl bg-accent/20 border border-accent/40 text-xs text-muted-foreground space-y-1">
                <div className="font-semibold text-foreground flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-accent-foreground" />
                  <span>Agrément Conseiller d'Orientation</span>
                </div>
                <p>Votre compte vous donnera accès aux demandes d'accompagnement payantes soumises par les familles togolaises.</p>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Mot de passe *</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="8 caractères minimum"
                  className="w-full h-10 pl-9 pr-10 rounded-xl border border-input bg-background text-xs sm:text-sm focus:ring-2 focus:ring-ring outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-primary/90 transition-colors mt-2"
            >
              <span>Continuer vers mon espace</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-5">
            Déjà inscrit sur Kpékpé ?{" "}
            <Link to="/web-app/login" className="text-primary font-semibold hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
