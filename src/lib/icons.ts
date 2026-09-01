/**
 * Registre d'icônes CHRONOS — Hugeicons Stroke uniquement.
 *
 * Règle: aucun composant n'importe directement un icône depuis le paquet.
 * Tout passe par ce registre afin de conserver une sémantique stable
 * (icône → fonction) et de pouvoir remplacer un pictogramme partout en une
 * seule modification.
 */
import {
  Album02Icon,
  Alert02Icon,
  Analytics01Icon,
  ArrowRight01Icon,
  AudioWave01Icon,
  Bookmark02Icon,
  Cancel01Icon,
  DiscoverCircleIcon,
  Download04Icon,
  FavouriteIcon,
  FilterHorizontalIcon,
  InformationCircleIcon,
  LicenseIcon,
  Loading03Icon,
  Menu09Icon,
  PauseIcon,
  PlayIcon,
  SecurityCheckIcon,
  Search01Icon,
  Settings02Icon,
  Share08Icon,
  ShoppingBag03Icon,
  SortingAZ01Icon,
  Tick02Icon,
  UserCircleIcon,
  Vynil03Icon,
} from "@hugeicons/core-free-icons";

export const icons = {
  // Identité / navigation
  home: DiscoverCircleIcon,
  beats: Vynil03Icon,
  styles: Album02Icon,
  library: Bookmark02Icon,
  profile: UserCircleIcon,
  menu: Menu09Icon,
  settings: Settings02Icon,

  // Audio
  play: PlayIcon,
  pause: PauseIcon,
  waveform: AudioWave01Icon,

  // Catalogue
  search: Search01Icon,
  filter: FilterHorizontalIcon,
  sort: SortingAZ01Icon,

  // Commerce
  cart: ShoppingBag03Icon,
  license: LicenseIcon,
  download: Download04Icon,

  // Social
  like: FavouriteIcon,
  share: Share08Icon,

  // Administration
  analytics: Analytics01Icon,
  security: SecurityCheckIcon,

  // Système / états
  next: ArrowRight01Icon,
  close: Cancel01Icon,
  success: Tick02Icon,
  error: Alert02Icon,
  info: InformationCircleIcon,
  loading: Loading03Icon,
} as const;

export type IconName = keyof typeof icons;
