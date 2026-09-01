import { Outlet, useRouterState } from "@tanstack/react-router";

import { LogoLink } from "@/components/brand/Logo";
import { AppShell } from "@/components/layout/AppShell";
import { MobileTabBar } from "@/components/layout/PublicLayout";
import { NavLink } from "@/components/layout/NavLink";
import { PageContainer } from "@/components/layout/PageContainer";
import { accountNav, isActivePath } from "@/config/navigation";

function AccountHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <LogoLink size="sm" />
        <span className="text-eyebrow text-muted-foreground">Compte</span>
      </div>
    </header>
  );
}

/**
 * Espace compte: structure propre, séparée du public et de l'administration.
 * Séparation uniquement architecturale à cette étape — les contrôles d'accès
 * réels seront appliqués côté serveur.
 */
export function AccountLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AppShell header={<AccountHeader />} tabBar={<MobileTabBar />}>
      <PageContainer>
        <nav
          aria-label="Navigation du compte"
          className="mb-8 -mx-[var(--spacing-gutter)] overflow-x-auto px-[var(--spacing-gutter)]"
        >
          <ul className="flex min-w-max gap-1 border-b border-border pb-2">
            {accountNav.map((item) => (
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
        <Outlet />
      </PageContainer>
    </AppShell>
  );
}
