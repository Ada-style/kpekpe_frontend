import { useState } from "react";
import { X, Send } from "lucide-react";
import kpeAvatar from "@/assets/icone_ia.png";
import { cn } from "@/lib/utils";

interface Msg { role: "kpe" | "user"; text: string }

export function WebKpePanel({
  open, onClose, contextTitle, initialMessage,
}: {
  open: boolean;
  onClose: () => void;
  contextTitle?: string;
  initialMessage?: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "kpe", text: initialMessage || "Bonjour ! Je suis Kpékpé, ton conseiller. Pose-moi une question sur ton orientation." },
  ]);
  const [input, setInput] = useState("");

  function send(text?: string) {
    const msg = (text || input).trim();
    if (!msg) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: msg },
      { role: "kpe", text: "Merci pour ta question. Je vais t'aider à y voir plus clair — n'hésite pas à me préciser ce que tu cherches." },
    ]);
    setInput("");
  }

  return (
    <>
      {open && <div className="md:hidden fixed inset-0 bg-foreground/50 z-40" onClick={onClose} />}
      <aside
        className={cn(
          "fixed top-0 right-0 h-screen w-full md:w-[360px] bg-card border-l border-border z-50 flex flex-col transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-border flex items-center justify-center bg-card shadow-sm">
              <img src={kpeAvatar} alt="Kpé" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Kpékpé</p>
              <p className="text-[11px] text-muted-foreground">Ton conseiller</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>

        {contextTitle && (
          <div className="px-4 py-2 text-xs text-muted-foreground border-b border-border bg-muted/40">
            Contexte : <span className="text-foreground font-medium">{contextTitle}</span>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                m.role === "kpe"
                  ? "bg-muted text-foreground rounded-tl-sm"
                  : "kpe-gradient-primary text-primary-foreground ml-auto rounded-tr-sm"
              )}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-border flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ta question à Kpékpé…"
            className="flex-1 h-10 px-3 rounded-lg bg-muted text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={() => send()}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-lg kpe-gradient-primary text-primary-foreground flex items-center justify-center disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </>
  );
}
