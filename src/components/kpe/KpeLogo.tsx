/**
 * Logo placeholder — renders an empty background-image container.
 * In Figma, replace this element's background with the real logo image.
 * The container uses a subtle bg so it's visible; in Figma you set background-image.
 */
export function KpeLogo({ size = 40, variant = "mark" }: { size?: number; variant?: "mark" | "full" | "full-white" | "icon" }) {
  if (variant === "mark" || variant === "icon") {
    return (
      <div
        className="rounded-2xl bg-contain bg-center bg-no-repeat"
        style={{
          width: size,
          height: size,
          backgroundColor: "rgba(255,255,255,0.15)",
          backgroundImage: "none", // ← Replace with url('logo.png') in Figma
        }}
        aria-label="Logo Kpékpé"
      />
    );
  }

  const bgColor = variant === "full-white" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)";

  return (
    <div className="flex items-center" style={{ gap: size * 0.3 }}>
      <div
        className="rounded-2xl bg-contain bg-center bg-no-repeat"
        style={{
          width: size,
          height: size,
          backgroundColor: bgColor,
          backgroundImage: "none",
        }}
        aria-label="Logo Kpékpé"
      />
      <div
        className="rounded-lg bg-contain bg-center bg-no-repeat flex items-center justify-center"
        style={{
          height: size * 0.65,
          minWidth: size * 2.2,
          backgroundColor: bgColor,
          backgroundImage: "none",
        }}
        aria-label="Texte Kpékpé"
      />
    </div>
  );
}
