import { Link } from "react-router-dom";
import { WebLayout } from "@/components/web/WebLayout";
import { PlayCircle, Clock, Pause } from "lucide-react";
import kpeAvatar from "@/assets/icone_ia.png";

export default function WebOrientationIntro() {
  return (
    <WebLayout breadcrumbs={[{ label: "Mon parcours", to: "/web-app/mon-parcours" }, { label: "Orientation" }]}>
      <div className="max-w-2xl mx-auto text-center py-8">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-border flex items-center justify-center bg-card shadow-sm mb-6">
          <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-black">Ton parcours d'orientation</h1>
        <p className="text-muted-foreground mt-4">
          On va se poser une série de questions ensemble. Il n'y a pas de bonne ou de mauvaise réponse — l'objectif est de mieux te connaître pour te suggérer ce qui te correspond vraiment.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <div className="px-4 py-2 rounded-full bg-muted text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" /> Environ 20 minutes
          </div>
          <div className="px-4 py-2 rounded-full bg-muted text-sm flex items-center gap-2">
            <Pause className="w-4 h-4 text-primary" /> Pause possible à tout moment
          </div>
        </div>

        <Link to="/web-app/orientation/questionnaire" className="mt-10 inline-flex h-14 px-8 rounded-xl kpe-gradient-primary text-primary-foreground font-semibold items-center gap-2 shadow-lg">
          <PlayCircle className="w-5 h-5" /> C'est parti !
        </Link>

        <p className="mt-6 text-xs text-muted-foreground">
          <Link to="/web-app/orientation/questionnaire?step=5" className="hover:text-primary underline">Reprendre là où j'en étais (question 5)</Link>
        </p>
      </div>
    </WebLayout>
  );
}
