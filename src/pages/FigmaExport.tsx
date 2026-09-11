import { useSearchParams } from "react-router-dom";
import { Phone } from "@/components/kpe/Phone";
import { TabBar } from "@/components/kpe/TabBar";
import { SplashScreen } from "@/components/kpe/SplashScreen";
import { OnboardingScreen } from "@/components/kpe/OnboardingScreen";
import { LoginScreen } from "@/components/kpe/LoginScreen";
import { DashboardScreen } from "@/components/kpe/DashboardScreen";
import { ConseillerScreen } from "@/components/kpe/ConseillerScreen";
import { ResultatsScreen } from "@/components/kpe/ResultatsScreen";
import { RecommandationsScreen } from "@/components/kpe/RecommandationsScreen";
import { LearniaScreen } from "@/components/kpe/LearniaScreen";
import { ProfilScreen } from "@/components/kpe/ProfilScreen";
import { SuiviScreen } from "@/components/kpe/SuiviScreen";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const ALL_SCREENS = [
  { id: "splash", label: "1. Splash Screen", hasTabs: false },
  { id: "onboarding-1", label: "2a. Onboarding — Découvre ton IKIGAI", hasTabs: false },
  { id: "onboarding-2", label: "2b. Onboarding — Parle avec Kpékpé", hasTabs: false },
  { id: "onboarding-3", label: "2c. Onboarding — C'est parti", hasTabs: false },
  { id: "login", label: "3. Connexion", hasTabs: false },
  { id: "register", label: "4. Inscription", hasTabs: false },
  { id: "home", label: "5. Accueil", hasTabs: true },
  { id: "suivi", label: "6. Suivi", hasTabs: true },
  { id: "conseiller", label: "7. Chat Kpékpé", hasTabs: true },
  { id: "learnia", label: "8. Learnia", hasTabs: true },
  { id: "profil", label: "9. Profil", hasTabs: true },
  { id: "resultats", label: "10. Résultats IKIGAI", hasTabs: false },
  { id: "recommandations-metiers", label: "11a. Recommandations — Métiers", hasTabs: false },
  { id: "recommandations-education", label: "11b. Recommandations — Éducation", hasTabs: false },
  { id: "recommandations-sante", label: "11c. Recommandations — Santé", hasTabs: false },
];

function ScreenContent({ id }: { id: string }) {
  const noop = () => {};
  switch (id) {
    case "splash": return <SplashScreen />;
    case "onboarding-1": return <OnboardingScreen initialSlide={0} />;
    case "onboarding-2": return <OnboardingScreen initialSlide={1} />;
    case "onboarding-3": return <OnboardingScreen initialSlide={2} />;
    case "login": return <LoginScreen initialMode="login" />;
    case "register": return <LoginScreen initialMode="register" />;
    case "home": return <DashboardScreen onTab={noop} />;
    case "suivi": return <SuiviScreen onTab={noop} />;
    case "conseiller": return <ConseillerScreen onTab={noop} />;
    case "resultats": return <ResultatsScreen onTab={noop} />;
    case "recommandations-metiers": return <RecommandationsScreen onTab={noop} initialTab="metiers" />;
    case "recommandations-education": return <RecommandationsScreen onTab={noop} initialTab="education" />;
    case "recommandations-sante": return <RecommandationsScreen onTab={noop} initialTab="sante" />;
    case "learnia": return <LearniaScreen onTab={noop} />;
    case "profil": return <ProfilScreen onTab={noop} />;
    default: return <SplashScreen />;
  }
}

export default function FigmaExport() {
  const [params] = useSearchParams();
  const screenId = params.get("screen");

  if (screenId) {
    const screen = ALL_SCREENS.find((s) => s.id === screenId);
    if (!screen) return <div className="p-8 text-center">Écran introuvable</div>;

    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-8">
        <Phone>
          <ScreenContent id={screen.id} />
          {screen.hasTabs && <TabBar active={screen.id} onTab={() => {}} />}
        </Phone>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kpe-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors">
            <ArrowLeft size={20} className="text-primary-foreground" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold text-primary-foreground flex items-center gap-2">
              <Download size={24} className="text-kpe-green-soft" />
              Export Figma — {ALL_SCREENS.length} Écrans
            </h1>
            <p className="font-body text-sm text-primary-foreground/50 mt-1">
              Chaque état interactif a sa propre URL. Clique sur un écran pour l'ouvrir seul, puis utilise <strong>html.to.design</strong> dans Figma.
            </p>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-card/10">
          <h2 className="font-display text-sm font-bold text-accent mb-2">Mode d'emploi</h2>
          <ol className="font-body text-sm text-primary-foreground/70 space-y-1.5 list-decimal list-inside">
            <li>Clique sur un écran ci-dessous → il s'ouvre seul sur une page dédiée</li>
            <li>Copie l'URL de cette page</li>
            <li>Dans Figma → Plugins → <strong>html.to.design</strong> → colle l'URL</li>
            <li>Le plugin importe l'écran comme frame Figma éditable</li>
            <li>Remplace les espaces logo par le vrai logo en background-image</li>
          </ol>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ALL_SCREENS.map((screen) => (
            <Link
              key={screen.id}
              to={`/figma-export?screen=${screen.id}`}
              className="group"
            >
              <div className="bg-card/5 rounded-2xl p-3 border border-card/10 hover:border-kpe-green-soft/50 hover:bg-card/10 transition-all">
                <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-background relative pointer-events-none scale-[0.99]">
                  <div className="absolute inset-0 flex flex-col" style={{ transform: "scale(0.28)", transformOrigin: "top left", width: "357%", height: "357%" }}>
                    <ScreenContent id={screen.id} />
                    {screen.hasTabs && <TabBar active={screen.id} onTab={() => {}} />}
                  </div>
                </div>
                <p className="font-display text-xs font-bold text-primary-foreground/80 text-center mt-3 group-hover:text-kpe-green-soft transition-colors">
                  {screen.label}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-card/10 backdrop-blur-sm rounded-2xl p-5 border border-card/10">
          <h2 className="font-display text-sm font-bold text-primary-foreground mb-3">URLs directes à copier</h2>
          <div className="space-y-2">
            {ALL_SCREENS.map((screen) => (
              <div key={screen.id} className="flex items-center gap-3">
                <span className="font-display text-xs font-semibold text-primary-foreground/60 w-56 truncate">{screen.label}</span>
                <code className="font-mono text-xs text-kpe-green-soft bg-card/10 px-3 py-1.5 rounded-lg flex-1 select-all">
                  {typeof window !== "undefined" ? window.location.origin : ""}/figma-export?screen={screen.id}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
