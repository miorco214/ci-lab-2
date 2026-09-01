import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * États d'interface partagés: loading / empty / error / success.
 * Aucune page ne doit réinventer ces comportements.
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
    <div
      className={cn("space-y-3", className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">{label}</span>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full rounded-lg" />
      ))}
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
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 py-12 text-center",
        className,
      )}
    >
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
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
    <div
      role="alert"
      className={cn(
        "rounded-xl border border-border bg-card px-6 py-8 text-center",
        className,
      )}
    >
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      {/* Jamais de détail technique destiné à l'utilisateur. */}
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {onRetry ? (
        <Button className="mt-5" variant="secondary" onClick={onRetry}>
          Réessayer
        </Button>
      ) : null}
    </div>
  );
}

export type AsyncStatus = "loading" | "empty" | "error" | "success";

/**
 * Rendu déclaratif d'une vue de données, avec récupération gracieuse.
 */
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
