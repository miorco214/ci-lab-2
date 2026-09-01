import { useRouterState } from "@tanstack/react-router";

/**
 * Indicateur de navigation: fin, discret, non bloquant.
 * Il ne masque jamais le contenu et disparaît dès que la route est prête.
 * L'animation est neutralisée par `prefers-reduced-motion` (styles.css).
 */
export function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-label="Chargement de la page"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden bg-transparent"
    >
      <div className="h-full w-1/3 animate-[route-progress_900ms_ease-in-out_infinite] bg-primary" />
    </div>
  );
}
