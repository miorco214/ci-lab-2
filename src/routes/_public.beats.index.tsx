import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { AsyncSection, EmptyState } from "@/components/states/DataState";

const title = "Catalogue de beats — CHRONOS INSTRU LAB";
const description =
  "Le catalogue complet des instrumentaux CHRONOS : recherche, filtres compacts et tri.";

export const Route = createFileRoute("/_public/beats/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BeatsPage,
});

function BeatsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Catalogue"
        title="Beats"
        description="Recherche, filtres et tri seront branchés sur le catalogue réel à l'étape suivante."
      />
      {/* Aucun beat de démonstration: état vide tant que le catalogue n'existe pas. */}
      <AsyncSection
        status="empty"
        empty={
          <EmptyState
            title="Catalogue vide"
            description="Aucun beat publié pour le moment. Le catalogue apparaîtra ici dès la mise en ligne des premiers instrumentaux."
          />
        }
      >
        {null}
      </AsyncSection>
    </PageContainer>
  );
}
