import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/chronos-logo.webp.asset.json";
import { cn } from "@/lib/utils";

/**
 * Logo CHRONOS INSTRU LAB — fichier original, jamais recréé ni déformé.
 * Le logo contient déjà le nom de la marque: aucun wordmark texte à côté.
 */
const heights = {
  sm: "h-6",
  md: "h-8",
  lg: "h-10",
} as const;

export function Logo({
  size = "md",
  className,
}: {
  size?: keyof typeof heights;
  className?: string;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="CHRONOS INSTRU LAB"
      width={1800}
      height={880}
      className={cn("w-auto max-w-full object-contain", heights[size], className)}
    />
  );
}

/** Logo cliquable ramenant à la destination de marque (accueil ou admin). */
export function LogoLink({
  to = "/",
  size = "md",
  className,
}: {
  to?: string;
  size?: keyof typeof heights;
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      aria-label="CHRONOS INSTRU LAB — accueil"
      className={cn(
        "inline-flex items-center rounded-md px-1 py-1 transition-control hover:opacity-80",
        className,
      )}
    >
      <Logo size={size} />
    </Link>
  );
}
