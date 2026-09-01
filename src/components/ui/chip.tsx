import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * Chip: filtre actif ou sélection rapide. Interactif et supprimable.
 * (Badge = information passive, Chip = contrôle.)
 */
const chipVariants = cva(
  [
    "inline-flex items-center gap-2 rounded-full border text-meta transition-control",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-45",
  ].join(" "),
  {
    variants: {
      selected: {
        true: "border-primary bg-primary/12 text-foreground",
        false: "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
      },
    },
    defaultVariants: { selected: false, size: "md" },
  },
);

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect">,
    VariantProps<typeof chipVariants> {
  /** Libellé du filtre. */
  label: string;
  /** Affiche une action de retrait (filtre actif). */
  onRemove?: () => void;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, label, selected, size, onRemove, ...props }, ref) => (
    <span className={cn(chipVariants({ selected, size }), "p-0 pl-0", className)}>
      <button
        ref={ref}
        type="button"
        aria-pressed={selected ?? false}
        className={cn(
          "inline-flex h-full items-center rounded-full pl-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          onRemove ? "pr-2" : "pr-4",
        )}
        {...props}
      >
        {label}
      </button>
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Retirer le filtre ${label}`}
          className="mr-1 inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-control hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Icon name="close" size="sm" />
        </button>
      ) : null}
    </span>
  ),
);
Chip.displayName = "Chip";
