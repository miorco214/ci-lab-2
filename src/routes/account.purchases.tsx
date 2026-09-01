import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

export const Route = createFileRoute("/account/purchases")({
  head: () => ({
    meta: [
      { title: "Mes achats — CHRONOS INSTRU LAB" },
      { name: "description", content: "Historique des licences achetées." },
      { property: "og:title", content: "Mes achats — CHRONOS INSTRU LAB" },
      { property: "og:description", content: "Historique des licences achetées." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PurchasesPage,
});

function PurchasesPage() {
  return (
    <>
      <PageHeader eyebrow="Compte" title="Achats" />
      <EmptyState
        title="Aucun achat"
        description="Vos licences achetées apparaîtront ici une fois le paiement activé."
      />
    </>
  );
}
