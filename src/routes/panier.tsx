import { createFileRoute, redirect } from "@tanstack/react-router";

/** Alias francophone stable — conserve les liens partagés vers /panier. */
export const Route = createFileRoute("/panier")({
  beforeLoad: () => {
    throw redirect({ to: "/cart", replace: true });
  },
});
