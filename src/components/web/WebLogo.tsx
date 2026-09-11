import logoNoir from "@/assets/logo_texte_noir.png";
import logoBlanc from "@/assets/logo_texte_blanc.png";

/**
 * Logo Kpékpé — logo officiel définitif.
 * `variant="mark"` : pictogramme seul.
 * `variant="full"` : logo complet avec wordmark.
 * `onDark` : version fond sombre (wordmark blanc).
 */
export function WebLogo({
  size = 32,
  variant = "full",
  onDark = false,
  className = "",
}: {
  size?: number;
  variant?: "mark" | "full";
  onDark?: boolean;
  className?: string;
}) {
  const src = onDark ? logoBlanc : logoNoir;

  if (variant === "mark") {
    return (
      <img
        src={src}
        alt="Kpékpé"
        className={`object-contain flex-shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
        style={{ height: size, width: size }}
      />
    );
  }

  return (
    <img
      src={src}
      alt="Kpékpé"
      className={`object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ height: size, width: "auto" }}
    />
  );
}
