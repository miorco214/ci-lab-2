import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Paramètres — CHRONOS ADMIN" },
      { name: "description", content: "Paramètres de la plateforme." },
      { property: "og:title", content: "Paramètres — CHRONOS ADMIN" },
      { property: "og:description", content: "Paramètres de la plateforme." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Administration"
        title="Paramètres"
        description="Réglages de la plateforme. Toute modification sensible sera auditée côté serveur."
      />
      <PlannedSection
        title="Sections prévues"
        description="Aucun réglage n'est modifiable tant que les contrôles d'accès serveur ne sont pas en place."
        items={["Identité de la marque", "Licences et prix", "Livraison des fichiers", "Journal d'audit"]}
      />
    </PageContainer>
  );
}
