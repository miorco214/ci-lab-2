import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/catalog")({
  head: () => ({
    meta: [
      { title: "Catalogue — CHRONOS ADMIN" },
      { name: "description", content: "Gestion du catalogue de beats." },
      { property: "og:title", content: "Catalogue — CHRONOS ADMIN" },
      { property: "og:description", content: "Gestion du catalogue de beats." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminCatalog,
});

function AdminCatalog() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Administration" title="Catalogue" />
      <PlannedSection
        title="Beat Publishing Studio"
        description="Le workflow de publication en cinq étapes sera implémenté à l'étape administration."
        items={["Identité", "Fichiers", "Licences", "Aperçu", "Publication"]}
      />
    </PageContainer>
  );
}
