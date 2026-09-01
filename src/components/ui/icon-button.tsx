import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Icon, Spinner } from "@/components/ui/icon";
import type { IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Bouton icône: nom accessible obligatoire, zone tactile ≥ 44px par défaut.
 */
const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-lg press",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-45",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-brand-accent-2 active:bg-brand-deep",
        secondary: "bg-secondary text-secondary-foreground hover:bg-elevated",
        outline: "border border-border-strong text-foreground hover:bg-secondary",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
      },
      size: {
        sm: "size-9",
        md: "size-11",
        lg: "size-[3.25rem]",
      },
    },
    defaultVariants: { variant: "ghost", size: "md" },
  },
);

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof iconButtonVariants> {
  icon: IconName;
  /** Nom accessible du contrôle — jamais optionnel. */
  label: string;
  loading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, label, variant, size, loading = false, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      aria-busy={loading || undefined}
      disabled={props.disabled || loading}
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    >
      {loading ? <Spinner size={size === "sm" ? "sm" : "md"} /> : <Icon name={icon} size={size === "sm" ? "sm" : "md"} />}
    </button>
  ),
);
IconButton.displayName = "IconButton";
