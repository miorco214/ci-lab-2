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
  const hasPlayer = Boolean(track);

  return (
    <div className={cn("flex min-h-screen flex-col bg-background", className)}>
      <RouteProgress />
      {header}
      <main
        className="flex-1"
        style={{
          paddingBottom: [
            tabBar ? "var(--spacing-tabbar)" : "0px",
            hasPlayer ? "var(--spacing-miniplayer)" : "0px",
            "env(safe-area-inset-bottom)",
          ].join(" + ") as unknown as string,
        }}
      >
        {children}
      </main>
      {footer}
      <MiniPlayer withTabBar={Boolean(tabBar)} />
      {tabBar}
    </div>
  );
}
