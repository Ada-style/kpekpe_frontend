import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DesignSystem from "./pages/DesignSystem.tsx";
import FigmaExport from "./pages/FigmaExport.tsx";
import NotFound from "./pages/NotFound.tsx";

// Web-app (blueprint MVP V1)
import WebLanding from "./pages/web/WebLanding.tsx";
import WebLogin from "./pages/web/WebLogin.tsx";
import WebRegister from "./pages/web/WebRegister.tsx";
import WebVerifyEmail from "./pages/web/WebVerifyEmail.tsx";
import WebForgotPassword from "./pages/web/WebForgotPassword.tsx";
import WebResetPassword from "./pages/web/WebResetPassword.tsx";
import WebOnboarding from "./pages/web/WebOnboarding.tsx";
import WebMonParcours from "./pages/web/WebMonParcours.tsx";
import WebExplorerMetiers from "./pages/web/WebExplorerMetiers.tsx";
import WebFicheMetier from "./pages/web/WebFicheMetier.tsx";
import WebExplorerFormations from "./pages/web/WebExplorerFormations.tsx";
import WebFicheFormation from "./pages/web/WebFicheFormation.tsx";
import WebExplorerOrganisations from "./pages/web/WebExplorerOrganisations.tsx";
import WebFicheOrganisation from "./pages/web/WebFicheOrganisation.tsx";
import WebOrientationIntro from "./pages/web/WebOrientationIntro.tsx";
import WebOrientationQuestion from "./pages/web/WebOrientationQuestion.tsx";
import WebOrientationCalcul from "./pages/web/WebOrientationCalcul.tsx";
import WebResultats from "./pages/web/WebResultats.tsx";
import WebFavoris from "./pages/web/WebFavoris.tsx";
import WebRessources from "./pages/web/WebRessources.tsx";
import WebFicheRessource from "./pages/web/WebFicheRessource.tsx";
import WebProfil from "./pages/web/WebProfil.tsx";
import WebErreurReseau from "./pages/web/WebErreurReseau.tsx";
import WebSessionExpiree from "./pages/web/WebSessionExpiree.tsx";
import WebScreens from "./pages/web/WebScreens.tsx";
import WebLearnia from "./pages/web/WebLearnia.tsx";
import WebCoursHub from "./pages/web/WebCoursHub.tsx";
import WebCoursDetail from "./pages/web/WebCoursDetail.tsx";
import WebCoursSVT from "./pages/web/WebCoursSVT.tsx";
import WebCoursChimie from "./pages/web/WebCoursChimie.tsx";
import WebRepetiteurs from "./pages/web/WebRepetiteurs.tsx";
import WebBulletinsExamens from "./pages/web/WebBulletinsExamens.tsx";
import WebPaiementsAbonnements from "./pages/web/WebPaiementsAbonnements.tsx";
import WebOrientationParent from "./pages/web/WebOrientationParent.tsx";
import WebConseillerDashboard from "./pages/web/WebConseillerDashboard.tsx";
import WebRepetiteurDashboard from "./pages/web/WebRepetiteurDashboard.tsx";
import WebOnboardingRepetiteur from "./pages/web/WebOnboardingRepetiteur.tsx";
import WebOnboardingConseiller from "./pages/web/WebOnboardingConseiller.tsx";
import WebOnboardingParent from "./pages/web/WebOnboardingParent.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLanding />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/figma-export" element={<FigmaExport />} />

          {/* Web App — Public */}
          <Route path="/web-app" element={<WebLanding />} />
          <Route path="/web-app/screens" element={<WebScreens />} />
          <Route path="/web-app/login" element={<WebLogin />} />
          <Route path="/web-app/register" element={<WebRegister />} />
          <Route path="/web-app/verify-email" element={<WebVerifyEmail />} />
          <Route path="/web-app/forgot-password" element={<WebForgotPassword />} />
          <Route path="/web-app/reset-password" element={<WebResetPassword />} />

          {/* Web App — Onboardings spécialisés par rôle */}
          <Route path="/web-app/onboarding" element={<WebOnboarding />} />
          <Route path="/web-app/onboarding-repetiteur" element={<WebOnboardingRepetiteur />} />
          <Route path="/web-app/onboarding-conseiller" element={<WebOnboardingConseiller />} />
          <Route path="/web-app/onboarding-parent" element={<WebOnboardingParent />} />

          {/* Web App — Espaces Métiers & Famille */}
          <Route path="/web-app/orientation-parent" element={<WebOrientationParent />} />
          <Route path="/web-app/conseiller-dashboard" element={<WebConseillerDashboard />} />
          <Route path="/web-app/repetiteur-dashboard" element={<WebRepetiteurDashboard />} />

          {/* Web App — Authentifié */}
          <Route path="/web-app/mon-parcours" element={<WebMonParcours />} />
          <Route path="/web-app/cours" element={<WebCoursHub />} />
          <Route path="/web-app/cours/maths-fonctions-affines" element={<WebCoursDetail />} />
          <Route path="/web-app/cours/svt-genetique-bac" element={<WebCoursSVT />} />
          <Route path="/web-app/cours/chimie-dosage-bac" element={<WebCoursChimie />} />
          <Route path="/web-app/cours/:id" element={<WebCoursDetail />} />
          <Route path="/web-app/repetiteurs" element={<WebRepetiteurs />} />
          <Route path="/web-app/bulletins" element={<WebBulletinsExamens />} />
          <Route path="/web-app/abonnements" element={<WebPaiementsAbonnements />} />
          <Route path="/web-app/learnia" element={<WebLearnia />} />
          <Route path="/web-app/explorer/metiers" element={<WebExplorerMetiers />} />
          <Route path="/web-app/explorer/metiers/:id" element={<WebFicheMetier />} />
          <Route path="/web-app/explorer/formations" element={<WebExplorerFormations />} />
          <Route path="/web-app/explorer/formations/:id" element={<WebFicheFormation />} />
          <Route path="/web-app/explorer/organisations" element={<WebExplorerOrganisations />} />
          <Route path="/web-app/explorer/organisations/:id" element={<WebFicheOrganisation />} />
          <Route path="/web-app/orientation" element={<WebOrientationIntro />} />
          <Route path="/web-app/orientation/questionnaire" element={<WebOrientationQuestion />} />
          <Route path="/web-app/orientation/calcul" element={<WebOrientationCalcul />} />
          <Route path="/web-app/resultats" element={<WebResultats />} />
          <Route path="/web-app/favoris" element={<WebFavoris />} />
          <Route path="/web-app/ressources" element={<WebRessources />} />
          <Route path="/web-app/ressources/:id" element={<WebFicheRessource />} />
          <Route path="/web-app/profil" element={<WebProfil />} />

          {/* Web App — États */}
          <Route path="/web-app/erreur-reseau" element={<WebErreurReseau />} />
          <Route path="/web-app/session-expiree" element={<WebSessionExpiree />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
