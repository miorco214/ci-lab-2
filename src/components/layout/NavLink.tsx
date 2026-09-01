import { Link } from "@tanstack/react-router";

import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Lien de navigation unique et cohérent (une seule variante visuelle).
 * `to` est volontairement typé large: les routes sont créées progressivement.
 */
export function NavLink({
  to,
  label,
  icon,
  active,
  variant = "inline",
}: {
  to: string;
  label: string;
  icon?: IconName;
  active?: boolean;
  variant?: "inline" | "stacked" | "sidebar";
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg text-nav transition-control",
        variant === "inline" && "px-3 py-2 text-muted-foreground hover:text-foreground",
        variant === "stacked" &&
          "flex min-h-[var(--size-touch)] flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-[0.6875rem] text-muted-foreground hover:text-foreground",
        variant === "sidebar" &&
          "flex min-h-[var(--size-touch)] items-center gap-2.5 px-3 py-2 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        active && "text-foreground",
        active && variant === "stacked" && "text-primary",
        active && variant === "sidebar" && "bg-sidebar-accent text-sidebar-accent-foreground",
      )}
    >
      {icon && variant !== "inline" ? <Icon name={icon} size="md" /> : null}
      {label}
    </Link>
  );
}
