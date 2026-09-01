import { Outlet, useRouterState } from "@tanstack/react-router";

import { LogoLink } from "@/components/brand/Logo";
import { NavLink } from "@/components/layout/NavLink";
import { AppShell } from "@/components/layout/PublicLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { accountNav, isActivePath } from "@/config/navigation";

function AccountHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <LogoLink size="sm" />
        <span className="text-eyebrow text-muted-foreground">Compte</span>
      </div>
    </header>
  );
}

/**
 * Espace compte: structure propre, séparée du public et de l'administration.
 * Les contrôles d'accès serveur seront ajoutés à l'étape authentification.
 */
export function AccountLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AppShell header={<AccountHeader />} footer={false}>
      <PageContainer>
        <nav
          aria-label="Navigation du compte"
          className="mb-8 -mx-[var(--spacing-gutter)] overflow-x-auto px-[var(--spacing-gutter)]"
        >
          <ul className="flex min-w-max gap-1 border-b border-border pb-2">
            {accountNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} label={item.label} active={isActivePath(pathname, item)} />
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </PageContainer>
    </AppShell>
  );
}
