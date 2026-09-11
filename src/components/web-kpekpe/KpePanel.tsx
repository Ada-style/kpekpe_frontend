import { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  from: "kpe" | "user";
  text: string;
}

interface KpePanelProps {
  open: boolean;
  onClose: () => void;
  contextTitle?: string;
  initialMessage?: string;
}

/**
 * Panneau contextuel Kpé — E35.
 * S'ouvre en drawer latéral droit sur desktop, bottom sheet sur mobile.
 * Réponses courtes (2-3 phrases), pas de listes à puces, ton bienveillant.
 */
export function KpePanel({ open, onClose, contextTitle, initialMessage }: KpePanelProps) {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      from: "kpe",
      text:
        initialMessage ??
        "Bonjour, je suis Kpé, ton conseiller. Je peux t'aider à mieux comprendre ce que tu vois. Pose-moi une question quand tu veux.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "kpe",
          text:
            "C'est une bonne question. Je réfléchis avec toi : ce métier correspond à ce que tu aimes analyser et partager. Prends le temps d'explorer les formations liées.",
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/30 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        className={cn(
          "fixed z-50 bg-card border-l border-border shadow-elevated transition-transform duration-300 ease-out flex flex-col",
          // Desktop: right side panel 320px
          "md:top-0 md:right-0 md:h-screen md:w-[360px]",
          open ? "md:translate-x-0" : "md:translate-x-full",
          // Mobile: bottom sheet
          "bottom-0 left-0 right-0 h-[80vh] rounded-t-3xl md:rounded-none",
          open ? "translate-y-0" : "translate-y-full md:translate-y-0"
        )}
        aria-hidden={!open}
        aria-label="Panneau Kpé"
      >
        {/* Header */}
        <header className="flex items-center gap-3 p-4 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-sm text-foreground">Kpé — Ton conseiller</p>
            {contextTitle && (
              <p className="text-xs text-muted-foreground truncate">À propos de : {contextTitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Fermer le panneau Kpé"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex gap-2", m.from === "user" && "flex-row-reverse")}>
              {m.from === "kpe" && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                  m.from === "kpe"
                    ? "bg-muted text-foreground rounded-tl-md"
                    : "bg-primary text-primary-foreground rounded-tr-md"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted px-4 py-2.5 rounded-2xl rounded-tl-md flex gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50 kpe-dot-anim" />
                <span
                  className="w-2 h-2 rounded-full bg-muted-foreground/50 kpe-dot-anim"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-muted-foreground/50 kpe-dot-anim"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t border-border flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pose ta question à Kpé…"
            className="flex-1 h-11 px-4 rounded-xl border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            aria-label="Envoyer le message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </aside>
    </>
  );
}
