import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { NavLink } from "@/components/layout/NavLink";
import { isActivePath, primaryTabs, publicNav } from "@/config/navigation";

/** Marque CHRONOS — Clash Display réservé à l'identité. */
function Wordmark() {
  return (
    <Link to="/" className="font-display text-sm uppercase tracking-[0.28em] text-foreground">
      Chronos<span className="text-primary"> Instru Lab</span>
    </Link>
  );
}

function PublicHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Wordmark />
        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {publicNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              active={isActivePath(pathname, item)}
            />
          ))}
          <NavLink to="/account" label="Compte" active={isActivePath(pathname, { to: "/account" })} />
        </nav>
      </div>
    </header>
  );
}

/** Bottom bar mobile — 4 onglets, sans restructuration future nécessaire. */
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
              variant="stacked"
              active={isActivePath(pathname, item)}
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
        <Wordmark />
        <p>Maison de production digitale — instrumentaux sous licence.</p>
      </div>
    </footer>
  );
}

/**
 * Coquille publique. L'expérience administration ne partage jamais ce layout.
 */
export function AppShell({
  children,
  header,
  footer = true,
}: {
  children: ReactNode;
  header?: ReactNode;
  footer?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {header}
      <main className="flex-1 pb-[calc(var(--spacing-tabbar)+1rem)] md:pb-0">{children}</main>
      {footer ? <PublicFooter /> : null}
      {/* Emplacement réservé au mini-player persistant (étape ultérieure). */}
      <MobileTabBar />
    </div>
  );
}

export function PublicLayout() {
  return (
    <AppShell header={<PublicHeader />}>
      <Outlet />
    </AppShell>
  );
}
