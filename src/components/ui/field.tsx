import * as React from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * Champ de formulaire: label lié, description et erreur annoncées.
 * Aucune page ne réimplémente cette structure.
 */
export function Field({
  id,
  label,
  description,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: (props: {
    id: string;
    "aria-describedby": string | undefined;
    invalid: boolean;
    required: boolean | undefined;
  }) => React.ReactNode;
}) {
  const descId = description ? `${id}-description` : undefined;
  const errId = error ? `${id}-error` : undefined;
  const describedBy = [descId, errId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-meta text-foreground">
        {label}
        {required ? (
          <span className="text-primary" aria-hidden>
            {" *"}
          </span>
        ) : null}
      </label>
      {description ? (
        <p id={descId} className="text-body-sm text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children({
        id,
        "aria-describedby": describedBy,
        invalid: Boolean(error),
        required: required || undefined,
      })}
      {error ? (
        <p id={errId} role="alert" className="flex items-center gap-1.5 text-meta text-destructive">
          <Icon name="error" size="sm" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
