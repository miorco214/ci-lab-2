import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/users")({
  head: () => ({
    meta: [
      { title: "Utilisateurs — CHRONOS ADMIN" },
      { name: "description", content: "Comptes, acheteurs et activité." },
      { property: "og:title", content: "Utilisateurs — CHRONOS ADMIN" },
      { property: "og:description", content: "Comptes, acheteurs et activité." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminUsers,
});

function AdminUsers() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Administration"
        title="Utilisateurs"
        description="Les données affichées seront limitées au strict nécessaire."
      />
      <PlannedSection
        title="Sections prévues"
        description="Aucun utilisateur n'existe à cette étape."
        items={["Comptes", "Acheteurs", "Activité", "Rôles et permissions"]}
      />
    </PageContainer>
  );
}
