import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

/**
 * État global du lecteur audio CHRONOS.
 *
 * Cette étape prépare uniquement l'architecture: un seul flux audio global,
 * une seule source de vérité. Aucune lecture n'est simulée, aucun fichier de
 * démonstration n'existe. Le vrai moteur audio (élément <audio> unique,
 * progression, buffering) se branchera ici sans toucher aux layouts.
 */

export type PlayerTrack = {
  /** Identifiant du beat (slug), utilisé pour la navigation contextuelle. */
  slug: string;
  title: string;
  /** URL de la cover réelle fournie par l'administrateur. */
  coverUrl?: string;
  /** URL du MP3 réel fourni par l'administrateur — jamais un fichier fictif. */
  previewUrl?: string;
  /** Durée en secondes lorsqu'elle est connue côté serveur. */
  durationSeconds?: number;
};

type PlayerState = {
  track: PlayerTrack | null;
  isPlaying: boolean;
  /** Position de lecture en secondes (0 tant qu'aucun moteur n'est branché). */
  positionSeconds: number;
  durationSeconds: number;
};

type PlayerApi = PlayerState & {
  /** Charge un beat dans le lecteur global (remplace le flux courant). */
  load: (track: PlayerTrack) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (seconds: number) => void;
  /** Ferme le mini-player et libère le flux. */
  close: () => void;
};

const initialState: PlayerState = {
  track: null,
  isPlaying: false,
  positionSeconds: 0,
  durationSeconds: 0,
};

const PlayerContext = createContext<PlayerApi | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlayerState>(initialState);

  const load = useCallback((track: PlayerTrack) => {
    setState({
      track,
      isPlaying: false,
      positionSeconds: 0,
      durationSeconds: track.durationSeconds ?? 0,
    });
  }, []);

  const play = useCallback(() => {
    setState((s) => (s.track ? { ...s, isPlaying: true } : s));
  }, []);

  const pause = useCallback(() => {
    setState((s) => ({ ...s, isPlaying: false }));
  }, []);

  const toggle = useCallback(() => {
    setState((s) => (s.track ? { ...s, isPlaying: !s.isPlaying } : s));
  }, []);

  const seek = useCallback((seconds: number) => {
    setState((s) => ({ ...s, positionSeconds: Math.max(0, seconds) }));
  }, []);

  const close = useCallback(() => setState(initialState), []);

  const value = useMemo<PlayerApi>(
    () => ({ ...state, load, play, pause, toggle, seek, close }),
    [state, load, play, pause, toggle, seek, close],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer(): PlayerApi {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer doit être utilisé à l'intérieur de PlayerProvider.");
  return ctx;
}
