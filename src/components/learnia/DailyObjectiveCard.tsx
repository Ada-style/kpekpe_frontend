import { Link } from "react-router-dom";
import { Target, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  completed?: boolean;
}

export function DailyObjectiveCard({ completed = false }: Props) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-sm relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Objectif quotidien recommandé</span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-black text-foreground">
            Mathématiques : Les Fonctions Affines
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Comprendre le coefficient directeur et l'ordonnée à l'origine à travers une fiche synthétique et un mini-quiz.
          </p>
          <div className="flex items-center gap-4 pt-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>15 minutes</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-accent-foreground" />
              <span>+60 XP pour ton Arbre</span>
            </span>
          </div>
        </div>

        <div className="flex items-center sm:self-center">
          {completed ? (
            <div className="h-11 px-5 rounded-xl bg-primary/15 text-primary font-semibold text-sm inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Complété aujourd'hui</span>
            </div>
          ) : (
            <Link
              to="/web-app/cours/maths-fonctions-affines"
              className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>Commencer la session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
