import { Link, Outlet, useRouterState } from "@tanstack/react-router";

import { LogoLink, Logo } from "@/components/brand/Logo";
import { AppShell } from "@/components/layout/AppShell";
import { NavLink } from "@/components/layout/NavLink";
import { Icon } from "@/components/ui/icon";
import { isActivePath, primaryTabs, publicNav } from "@/config/navigation";

/**
 * Header public: logo à gauche (identité), navigation principale, puis
 * emplacements progressifs (recherche, panier, compte). Volontairement sobre.
 */
function PublicHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page grid h-14 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 md:flex md:gap-6">
        {/* Zone de respiration autour du logo, jamais déformé. */}
        <LogoLink size="sm" className="md:hidden" />
        <LogoLink size="md" className="hidden md:inline-flex" />

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {publicNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              active={isActivePath(pathname, item, publicNav)}
            />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1 md:ml-auto">
          {/* Emplacement recherche — activé quand le catalogue réel existera. */}
          <span
            aria-hidden
            className="hidden h-9 w-44 items-center gap-2 rounded-lg border border-border px-3 text-meta text-muted-foreground lg:flex"
          >
            <Icon name="search" size="sm" />
            Recherche bientôt
          </span>

          <Link
            to="/cart"
            aria-label="Panier"
            aria-current={pathname === "/cart" ? "page" : undefined}
            className="inline-flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-control hover:bg-secondary hover:text-foreground"
          >
            <Icon name="cart" size="md" />
          </Link>
          <Link
            to="/account"
            aria-label="Compte"
            aria-current={pathname.startsWith("/account") ? "page" : undefined}
            className="hidden size-11 items-center justify-center rounded-lg text-muted-foreground transition-control hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <Icon name="profile" size="md" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/** Bottom bar mobile — 4 onglets, navigation principale à part entière. */
export function MobileTabBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="flex items-stretch">
        {primaryTabs.map((item) => (
          <li key={item.label} className="flex flex-1">
            <NavLink
              to={item.to}
              label={item.label}
              {...(item.icon ? { icon: item.icon } : {})}
              variant="stacked"
              active={isActivePath(pathname, item, primaryTabs)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PublicFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-2 py-8 text-xs text-muted-foreground">
        <Logo size="sm" />
        <p className="mt-2">Maison de production digitale — instrumentaux sous licence.</p>
      </div>
    </footer>
  );
}

export { PublicFooter, PublicHeader };

export function PublicLayout() {
  return (
    <AppShell header={<PublicHeader />} footer={<PublicFooter />} tabBar={<MobileTabBar />}>
      <Outlet />
    </AppShell>
  );
}
