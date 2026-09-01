import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

const title = "Styles — CHRONOS INSTRU LAB";
const description =
  "Drill, trap, rap, Jersey club et type beats : les familles de styles du catalogue CHRONOS.";

export const Route = createFileRoute("/_public/styles/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Navigation"
        title="Styles"
        description="Chaque style disposera de sa propre page indexable, alimentée par le catalogue réel."
      />
      <EmptyState
        title="Aucun style publié"
        description="Les styles apparaîtront ici dès que des beats leur seront associés."
      />
    </PageContainer>
  );
}
