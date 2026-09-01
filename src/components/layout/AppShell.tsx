import type { ReactNode } from "react";

import { MiniPlayer } from "@/components/player/MiniPlayer";
import { usePlayer } from "@/components/player/PlayerProvider";
import { RouteProgress } from "@/components/layout/RouteProgress";
import { cn } from "@/lib/utils";

/**
 * Coquille unique de l'application: header, contenu, footer optionnel,
 * navigation mobile optionnelle et mini-player global.
 *
 * Aucun layout ne réimplémente cette structure: header, bottom bar et
 * mini-player coexistent ici, avec l'espace réservé sous le contenu calculé
 * une seule fois (safe areas incluses).
 */
function bottomSpacing(hasTabBar: boolean, hasPlayer: boolean): string {
  if (hasTabBar && hasPlayer)
    return "pb-[calc(var(--spacing-tabbar)+var(--spacing-miniplayer)+env(safe-area-inset-bottom))] md:pb-[calc(var(--spacing-miniplayer)+1rem)]";
  if (hasTabBar)
    return "pb-[calc(var(--spacing-tabbar)+env(safe-area-inset-bottom))] md:pb-0";
  if (hasPlayer)
    return "pb-[calc(var(--spacing-miniplayer)+env(safe-area-inset-bottom))]";
  return "";
}

export function AppShell({
  children,
  header,
  footer,
  tabBar,
  className,
}: {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  tabBar?: ReactNode;
  className?: string;
}) {
  const { track } = usePlayer();

  return (
    <div className={cn("flex min-h-screen flex-col bg-background", className)}>
      <RouteProgress />
      {header}
      <main className={cn("flex-1", bottomSpacing(Boolean(tabBar), Boolean(track)))}>
        {children}
      </main>
      {footer}
      <MiniPlayer withTabBar={Boolean(tabBar)} />
      {tabBar}
    </div>
  );
}
