import { cn } from "@/lib/utils";

/** Skeleton: préféré aux gros loaders, jamais de faux contenu textuel. */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-lg bg-secondary", className)}
      {...props}
    />
  );
}

export { Skeleton };
