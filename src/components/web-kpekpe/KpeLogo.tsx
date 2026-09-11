/**
 * Placeholder logo Kpékpé — à remplacer par le vrai logo (background-image) lors de l'export Figma.
 * Variantes : mark (icône seule), full (icône + wordmark), full-white (sur fond sombre).
 */
export function KpeLogo({ size = 32, variant = "full" }: { size?: number; variant?: "mark" | "full" | "full-white" }) {
  const bgColor = variant === "full-white" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)";
  const borderColor = variant === "full-white" ? "border-white/30" : "border-foreground/20";

  if (variant === "mark") {
    return (
      <div
        className={`rounded-lg border-2 border-dashed ${borderColor}`}
        style={{ width: size, height: size, backgroundColor: bgColor }}
        aria-label="Logo Kpékpé"
      />
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={`rounded-lg border-2 border-dashed ${borderColor} flex-shrink-0`}
        style={{ width: size, height: size, backgroundColor: bgColor }}
        aria-label="Logo Kpékpé"
      />
      <span
        className={`font-display font-black tracking-tight ${variant === "full-white" ? "text-white" : "text-foreground"}`}
        style={{ fontSize: size * 0.6 }}
      >
        Kpékpé
      </span>
    </div>
  );
}
