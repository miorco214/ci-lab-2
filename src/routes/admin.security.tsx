import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/security")({
  head: () => ({
    meta: [
      { title: "Sécurité — CHRONOS ADMIN" },
      { name: "description", content: "Audit, permissions et accès." },
      { property: "og:title", content: "Sécurité — CHRONOS ADMIN" },
      { property: "og:description", content: "Audit, permissions et accès." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSecurity,
});

function AdminSecurity() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Administration" title="Sécurité" />
      <PlannedSection
        title="Sections prévues"
        description="Le journal d'audit sera alimenté par les opérations sensibles réellement effectuées côté serveur."
        items={["Connexions", "Modifications sensibles", "Téléchargements", "Exports", "Permissions"]}
      />
    </PageContainer>
  );
}
