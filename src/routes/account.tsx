import { createFileRoute } from "@tanstack/react-router";

import { AccountLayout } from "@/components/layout/AccountLayout";

export const Route = createFileRoute("/account")({
  component: AccountLayout,
});
