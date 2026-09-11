import { useState } from "react";
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
import { KpeLogo } from "@/components/kpe/KpeLogo";

const SCREENS = [
  { id: "splash", label: "1. Splash" },
  { id: "onboarding", label: "2. Onboarding" },
  { id: "login", label: "3. Connexion / Inscription" },
  { id: "app", label: "4. Application" },
];

const TABS_LABELS: Record<string, string> = {
  home: "5. Accueil",
  suivi: "6. Suivi",
  conseiller: "7. Chat Kpékpé",
  learnia: "8. Learnia",
  profil: "9. Profil",
  resultats: "10. Résultats IKIGAI",
  recommandations: "11. Recommandations",
};

const COLOR_LEGEND = [
  { className: "bg-primary", label: "Vert #00963F" },
  { className: "bg-accent", label: "Jaune #FEEC01" },
  { className: "bg-kpe-passion", label: "Passion" },
  { className: "bg-kpe-talent", label: "Talent" },
  { className: "bg-kpe-besoins", label: "Besoins" },
  { className: "bg-kpe-aspiration", label: "Aspiration" },
];

const Index = () => {
  const [screen, setScreen] = useState("splash");
  const [tab, setTab] = useState("home");

  const showTabs = screen === "app" && !["resultats", "recommandations"].includes(tab);

  function renderContent() {
    if (screen === "splash") return <SplashScreen />;
    if (screen === "onboarding") return <OnboardingScreen />;
    if (screen === "login") return <LoginScreen />;
    if (screen === "app") {
      const props = { onTab: setTab };
      switch (tab) {
        case "home": return <DashboardScreen {...props} />;
        case "suivi": return <SuiviScreen {...props} />;
        case "conseiller": return <ConseillerScreen {...props} />;
        case "resultats": return <ResultatsScreen {...props} />;
        case "recommandations": return <RecommandationsScreen {...props} />;
        case "learnia": return <LearniaScreen {...props} />;
        case "profil": return <ProfilScreen {...props} />;
        default: return <DashboardScreen {...props} />;
      }
    }
    return <DashboardScreen onTab={setTab} />;
  }

  return (
    <div className="min-h-screen bg-kpe-dark flex flex-col items-center py-8 px-4">
      {/* Title */}
      <div className="mb-6">
        <KpeLogo size={28} variant="full-white" />
      </div>
      <p className="font-body text-sm text-primary-foreground/50 mb-6">
        Maquette Interactive — 11 écrans
      </p>

      {/* Screen selector */}
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {SCREENS.map((s) => (
          <button
            key={s.id}
            onClick={() => { setScreen(s.id); if (s.id === "app") setTab("home"); }}
            className={`px-5 py-2 rounded-full font-display text-sm font-bold transition-all ${
              screen === s.id
                ? "bg-card text-primary shadow-lg"
                : "bg-card/10 text-primary-foreground/70 hover:bg-card/20"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Tab selector */}
      {screen === "app" && (
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          {Object.entries(TABS_LABELS).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-4 py-1.5 rounded-full font-display text-xs font-semibold transition-all ${
                tab === k
                  ? "bg-accent text-accent-foreground"
                  : "bg-card/10 text-primary-foreground/60 hover:bg-card/20"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      )}

      {/* Phone */}
      <Phone>
        {renderContent()}
        {showTabs && <TabBar active={tab} onTab={setTab} />}
      </Phone>

      {/* Color legend */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {COLOR_LEGEND.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${c.className}`} />
            <span className="font-body text-xs text-primary-foreground/50">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
