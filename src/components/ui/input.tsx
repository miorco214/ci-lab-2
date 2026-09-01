import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  /** État d'erreur: bordure + annonce via aria-invalid. */
  invalid?: boolean;
}

/** Champ texte: hauteur tactile confortable sur mobile, focus toujours visible. */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, invalid, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-4 text-base transition-control",
        "placeholder:text-muted-foreground",
        "hover:border-border-strong",
        "focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:cursor-not-allowed disabled:opacity-45",
        "aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive",
        "md:text-[0.9375rem]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
