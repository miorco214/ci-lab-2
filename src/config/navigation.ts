/**
 * Source unique de la navigation CHRONOS INSTRU LAB.
 * Mobile-first: `primaryTabs` alimente la bottom bar (4 onglets max) et la
 * navigation desktop, sans duplication de layout.
 */

import type { IconName } from "@/lib/icons";

export type NavItem = {
  /** Chemin typé par TanStack Router. */
  to: string;
  label: string;
  /** Correspondance de préfixe pour l'état actif. */
  match?: string;
  /** Icône du registre CHRONOS (navigation mobile). */
  icon?: IconName;
};

/** Bottom bar mobile — exactement 4 onglets. */
export const primaryTabs: NavItem[] = [
  { to: "/", label: "Accueil", icon: "home" },
  { to: "/beats", label: "Beats", icon: "beats" },
  { to: "/account", label: "Bibliothèque", match: "/account", icon: "library" },
  { to: "/account/settings", label: "Profil", icon: "profile" },
];

/** Navigation desktop publique. */
export const publicNav: NavItem[] = [
  { to: "/beats", label: "Beats", icon: "beats" },
  { to: "/styles", label: "Styles", match: "/styles", icon: "styles" },
  { to: "/cart", label: "Panier", icon: "cart" },
];

/** Navigation de l'espace compte. */
export const accountNav: NavItem[] = [
  { to: "/account", label: "Vue d'ensemble" },
  { to: "/account/purchases", label: "Achats" },
  { to: "/account/downloads", label: "Téléchargements" },
  { to: "/account/favorites", label: "Favoris" },
  { to: "/account/settings", label: "Paramètres" },
];

/** Navigation de l'espace administration (strictement séparée du public). */
export const adminNav: NavItem[] = [
  { to: "/admin", label: "Command Center" },
  { to: "/admin/catalog", label: "Catalogue" },
  { to: "/admin/commerce", label: "Commerce" },
  { to: "/admin/users", label: "Utilisateurs" },
  { to: "/admin/analytics", label: "Analytics" },
  { to: "/admin/security", label: "Sécurité" },
];

export function isActivePath(pathname: string, item: NavItem): boolean {
  const base = item.match ?? item.to;
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}
