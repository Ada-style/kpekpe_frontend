import { useState } from "react";
import { Bot, ArrowLeft, Send, Mic, Paperclip, MoreVertical, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ConseillerProps {
  onTab: (tab: string) => void;
}

const pillars = [
  { label: "Passion", color: "bg-kpe-passion", done: true },
  { label: "Talent", color: "bg-kpe-talent", active: true },
  { label: "Besoins", color: "bg-kpe-besoins" },
  { label: "Aspiration", color: "bg-kpe-aspiration" },
];

const initialMessages = [
  { from: "bot" as const, text: "Salut Kofi ! Je suis Kpé, ton conseiller IA. Aujourd'hui on explore ton Talent — ce que tu fais naturellement bien." },
  { from: "bot" as const, text: "Première question : Quand tes ami(e)s ont un problème, vers toi pour quoi ils se tournent ?", choices: ["Écouter & conseiller", "Trouver des solutions", "Organiser les choses", "Créer des idées"] },
  { from: "user" as const, text: "Écouter & conseiller" },
  { from: "bot" as const, text: "Excellent ! L'empathie et l'écoute active sont des talents rares et précieux. Question suivante…" },
  { from: "bot" as const, text: "Dans quelle matière tu te sens le plus à l'aise, sans trop d'efforts ?", choices: ["Sciences / Maths", "Lettres / Langues", "Arts / Créativité", "Commerce / Éco"] },
];

export function ConseillerScreen({ onTab }: ConseillerProps) {
  const [messages] = useState(initialMessages);

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Header */}
      <div className="kpe-gradient-hero px-4 pt-2 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => onTab("home")} className="w-9 h-9 rounded-full bg-card/20 flex items-center justify-center">
            <ArrowLeft size={18} className="text-primary-foreground" />
          </button>
          <div className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
            <Bot size={22} className="text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-bold text-primary-foreground">Kpé — Conseiller IA</p>
            <p className="font-body text-[11px] text-primary-foreground/70">● En ligne · Séance Orientation</p>
          </div>
          <span className="px-2 py-1 rounded-lg bg-card/20 font-display text-xs font-bold text-primary-foreground">Q8/20</span>
          <button className="w-8 h-8 flex items-center justify-center">
            <MoreVertical size={18} className="text-primary-foreground" />
          </button>
        </div>

        {/* Progress pillars */}
        <div className="flex gap-2 mt-3">
          {pillars.map((p, i) => (
            <div key={i} className="flex-1">
              <div className={`h-2 rounded-full ${p.done || p.active ? p.color : "bg-card/20"} ${p.active ? "kpe-pulse" : ""}`} />
              <p className="font-body text-[9px] text-primary-foreground/70 text-center mt-1">{p.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto kpe-scrollbar-hide px-4 py-4 space-y-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} gap-2`}>
              {m.from === "bot" && (
                <div className="w-8 h-8 rounded-full kpe-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={16} className="text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl font-body text-sm leading-relaxed ${
                  m.from === "user"
                    ? "kpe-gradient-primary text-primary-foreground rounded-br-md"
                    : "bg-card border border-border text-foreground rounded-bl-md"
                }`}
              >
                {m.text}
              </div>
            </div>

            {m.choices && (
              <div className="flex flex-wrap gap-2 mt-2 ml-10">
                {m.choices.map((c, j) => (
                  <button
                    key={j}
                    className="px-3 py-2 rounded-xl border-2 border-primary/20 bg-kpe-green-pale font-body text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 bg-card border-t border-border/50">
        <div className="flex items-center gap-2 bg-muted rounded-2xl px-4 py-2">
          <button>
            <Paperclip size={18} className="text-muted-foreground" />
          </button>
          <input
            placeholder="Écris ta réponse..."
            className="flex-1 bg-transparent font-body text-sm outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button>
            <Mic size={18} className="text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full kpe-gradient-primary flex items-center justify-center">
            <Send size={16} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
