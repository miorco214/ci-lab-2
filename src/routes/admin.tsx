import { createFileRoute } from "@tanstack/react-router";

import { AdminLayout } from "@/components/layout/AdminLayout";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  component: AdminLayout,
});
