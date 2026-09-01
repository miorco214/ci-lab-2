import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/**
 * Lien de navigation unique et cohérent (une seule variante visuelle).
 * `to` est volontairement typé large: les routes sont créées progressivement.
 */
export function NavLink({
  to,
  label,
  active,
  variant = "inline",
}: {
  to: string;
  label: string;
  active?: boolean;
  variant?: "inline" | "stacked" | "sidebar";
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-md text-sm transition-colors",
        variant === "inline" && "px-3 py-2 text-muted-foreground hover:text-foreground",
        variant === "stacked" &&
          "flex flex-1 flex-col items-center gap-1 px-2 py-2 text-[0.6875rem] text-muted-foreground hover:text-foreground",
        variant === "sidebar" &&
          "block px-3 py-2 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        active && "text-foreground",
        active && variant === "sidebar" && "bg-sidebar-accent text-sidebar-accent-foreground",
      )}
    >
      {variant === "stacked" ? (
        <span
          aria-hidden
          className={cn(
            "size-1.5 rounded-full",
            active ? "bg-primary" : "bg-transparent",
          )}
        />
      ) : null}
      {label}
    </Link>
  );
}
