import { createFileRoute, redirect } from "@tanstack/react-router";

/** Alias francophone stable — conserve les liens partagés vers /compte. */
export const Route = createFileRoute("/compte")({
  beforeLoad: () => {
    throw redirect({ to: "/account", replace: true });
  },
});
