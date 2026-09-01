import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Command Center — CHRONOS ADMIN" },
      { name: "description", content: "Administration CHRONOS INSTRU LAB." },
      { property: "og:title", content: "Command Center — CHRONOS ADMIN" },
      { property: "og:description", content: "Administration CHRONOS INSTRU LAB." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminHome,
});

function AdminHome() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Administration"
        title="Command Center"
        description="Espace administrateur non fonctionnel à cette étape. Les accès seront contrôlés côté serveur par rôles et permissions."
      />
      <PlannedSection
        title="Vues prévues"
        description="Aucune statistique n'est affichée tant qu'aucune donnée réelle n'est mesurée."
        items={["Catalogue", "Commerce", "Utilisateurs", "Analytics", "Sécurité et audit"]}
      />
    </PageContainer>
  );
}
