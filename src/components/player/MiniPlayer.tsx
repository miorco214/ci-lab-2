import { Link } from "@tanstack/react-router";

import { usePlayer } from "@/components/player/PlayerProvider";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Mini-player global, monté une seule fois dans le shell.
 *
 * Tant qu'aucun beat n'est chargé, il ne rend rien du tout: pas de lecteur
 * fictif, pas d'espace réservé visible. Sur mobile il se place au-dessus de la
 * bottom bar (jamais par-dessus) et respecte les safe areas.
 */
export function MiniPlayer({ withTabBar = false }: { withTabBar?: boolean }) {
  const { track, isPlaying, positionSeconds, durationSeconds, toggle, close } = usePlayer();

  if (!track) return null;

  const progress =
    durationSeconds > 0 ? Math.min(100, (positionSeconds / durationSeconds) * 100) : 0;

  return (
    <div
      role="region"
      aria-label="Lecteur audio"
      className={cn(
        "fixed inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur animate-fade-in",
        withTabBar
          ? "bottom-[calc(var(--spacing-tabbar)+env(safe-area-inset-bottom))] md:bottom-0"
          : "bottom-0",
      )}
    >
      {/* Progression réelle branchée ultérieurement sur le flux audio unique. */}
      <div className="h-0.5 w-full bg-border" aria-hidden>
        <div className="h-full bg-primary transition-[width]" style={{ width: `${progress}%` }} />
      </div>

      <div className="container-page grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:pb-2">
        <div className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-md surface-raised">
          {track.coverUrl ? (
            <img src={track.coverUrl} alt="" width={80} height={80} className="size-full object-cover" />
          ) : (
            <Icon name="waveform" size="sm" className="text-muted-foreground" />
          )}
        </div>

        <div className="min-w-0">
          <Link
            to="/beat/$slug"
            params={{ slug: track.slug }}
            className="block truncate text-nav text-foreground transition-control hover:text-primary"
          >
            {track.title}
          </Link>
          <p className="text-meta text-muted-foreground">
            {formatTime(positionSeconds)} / {formatTime(durationSeconds)}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <IconButton
            icon={isPlaying ? "pause" : "play"}
            label={isPlaying ? "Mettre en pause" : "Lire"}
            onClick={toggle}
          />
          <IconButton icon="close" label="Fermer le lecteur" variant="ghost" onClick={close} />
        </div>
      </div>
    </div>
  );
}
