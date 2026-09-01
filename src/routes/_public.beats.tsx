import { Outlet, createFileRoute } from "@tanstack/react-router";

/** Zone catalogue: `/beats` et `/beats/$genre` partagent cette branche. */
export const Route = createFileRoute("/_public/beats")({
  component: () => <Outlet />,
});
