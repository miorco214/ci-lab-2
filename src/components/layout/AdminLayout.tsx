import { Link, Outlet, useRouterState } from "@tanstack/react-router";

import { LogoLink } from "@/components/brand/Logo";
import { NavLink } from "@/components/layout/NavLink";
import { RouteProgress } from "@/components/layout/RouteProgress";
import { adminNav, isActivePath } from "@/config/navigation";

/**
 * Espace administration: layout dédié, jamais mélangé à l'expérience publique
 * (ni bottom bar visiteur, ni mini-player).
 * Aucune protection ici — l'accès sera contrôlé côté serveur (rôles +
 * permissions) à l'étape RBAC. Masquer une route n'est pas une sécurité.
 */
export function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background md:grid md:grid-cols-[15rem_1fr]">
      <RouteProgress />
      <aside className="border-b border-sidebar-border bg-sidebar md:sticky md:top-0 md:h-screen md:border-r md:border-b-0">
        <div className="container-page grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:px-4">
          <LogoLink to="/admin" size="sm" />
          <Link to="/" className="text-meta text-muted-foreground transition-control hover:text-foreground">
            Site
          </Link>
        </div>
        <nav
          aria-label="Navigation administration"
          className="container-page overflow-x-auto pb-3 md:px-2"
        >
          <ul className="flex min-w-max gap-1 md:min-w-0 md:flex-col">
            {adminNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  label={item.label}
                  {...(item.icon ? { icon: item.icon } : {})}
                  variant="sidebar"
                  active={isActivePath(pathname, item)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="min-w-0 pb-[env(safe-area-inset-bottom)]">
        <Outlet />
      </main>
    </div>
  );
}
