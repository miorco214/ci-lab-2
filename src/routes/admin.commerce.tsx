import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/commerce")({
  head: () => ({
    meta: [
      { title: "Commerce — CHRONOS ADMIN" },
      { name: "description", content: "Commandes, paiements et licences." },
      { property: "og:title", content: "Commerce — CHRONOS ADMIN" },
      { property: "og:description", content: "Commandes, paiements et licences." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminCommerce,
});

function AdminCommerce() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Administration" title="Commerce" />
      <PlannedSection
        title="Sections prévues"
        description="Aucune commande n'existe à cette étape."
        items={["Commandes", "Paiements", "Remboursements", "Licences", "Exclusivités"]}
      />
    </PageContainer>
  );
}
