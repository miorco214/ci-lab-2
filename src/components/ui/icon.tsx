import { HugeiconsIcon } from "@hugeicons/react";

import { icons, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

/** Tailles d'icône alignées sur les tokens du design system. */
const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type IconSize = keyof typeof sizeMap;

/**
 * Icône unique du projet: même famille (Hugeicons Stroke), même épaisseur,
 * même alignement. Un icône purement décoratif est masqué aux lecteurs
 * d'écran; sinon `label` fournit le nom accessible.
 */
export function Icon({
  name,
  size = "md",
  label,
  className,
}: {
  name: IconName;
  size?: IconSize;
  label?: string;
  className?: string;
}) {
  return (
    <HugeiconsIcon
      icon={icons[name]}
      size={sizeMap[size]}
      strokeWidth={1.5}
      className={cn("shrink-0", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

/** Indicateur d'activité cohérent (respecte prefers-reduced-motion via CSS). */
export function Spinner({
  size = "md",
  className,
  label = "Chargement",
}: {
  size?: IconSize;
  className?: string;
  label?: string;
}) {
  return (
    <span role="status" className="inline-flex items-center">
      <span className="sr-only">{label}</span>
      <Icon name="loading" size={size} className={cn("animate-spin", className)} />
    </span>
  );
}
