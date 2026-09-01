import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Icon, Spinner } from "@/components/ui/icon";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * États d'interface partagés: loading / empty / error / success /
 * indisponible / action en cours. Aucune page ne réinvente ces comportements
 * et aucun détail technique n'est montré à l'utilisateur.
 */

export function LoadingState({
  rows = 3,
  className,
  label = "Chargement en cours",
}: {
  rows?: number;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("space-y-3", className)} role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">{label}</span>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  );
}

function StateShell({
  tone = "quiet",
  className,
  children,
  role,
}: {
  tone?: "quiet" | "solid";
  className?: string | undefined;
  children: ReactNode;
  role?: "alert" | "status";
}) {
  return (
    <div
      role={role}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl px-6 py-12 text-center animate-fade-in",
        tone === "quiet"
          ? "border border-dashed border-border"
          : "surface-raised",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <StateShell className={className}>
      <Icon name="waveform" size="lg" className="mb-4 text-muted-foreground" />
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-sm text-body-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </StateShell>
  );
}

export function ErrorState({
  title = "Contenu indisponible",
  description = "Une erreur est survenue. Réessayez dans un instant.",
  onRetry,
  className,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <StateShell role="alert" tone="solid" className={className}>
      <Icon name="error" size="lg" className="mb-4 text-destructive" />
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {/* Jamais de détail technique destiné à l'utilisateur. */}
      <p className="mt-2 max-w-sm text-body-sm text-muted-foreground">{description}</p>
      {onRetry ? (
        <Button className="mt-6" variant="outline" onClick={onRetry}>
          Réessayer
        </Button>
      ) : null}
    </StateShell>
  );
}

export function SuccessState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <StateShell role="status" tone="solid" className={className}>
      <Icon name="success" size="lg" className="mb-4 text-primary" />
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-sm text-body-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </StateShell>
  );
}

/** Contenu volontairement indisponible (privé, archivé, exclusivité vendue). */
export function UnavailableState({
  title = "Contenu non disponible",
  description = "Ce contenu n'est plus accessible.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <StateShell role="status" className={className}>
      <Icon name="info" size="lg" className="mb-4 text-muted-foreground" />
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-sm text-body-sm text-muted-foreground">{description}</p>
    </StateShell>
  );
}

/** Action en cours, en ligne (sauvegarde, envoi, vérification). */
export function BusyIndicator({ label = "Action en cours" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-meta text-muted-foreground">
      <Spinner size="sm" label={label} />
      {label}
    </span>
  );
}

export type AsyncStatus = "loading" | "empty" | "error" | "success";

/** Rendu déclaratif d'une vue de données, avec récupération gracieuse. */
export function AsyncSection({
  status,
  loading,
  empty,
  error,
  children,
}: {
  status: AsyncStatus;
  loading?: ReactNode;
  empty?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
}) {
  if (status === "loading") return <>{loading ?? <LoadingState />}</>;
  if (status === "error") return <>{error ?? <ErrorState />}</>;
  if (status === "empty")
    return (
      <>
        {empty ?? (
          <EmptyState
            title="Rien à afficher"
            description="Aucune donnée disponible pour le moment."
          />
        )}
      </>
    );
  return <>{children}</>;
}
