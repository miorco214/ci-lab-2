import { createFileRoute, Link } from "@tanstack/react-router";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";
import { Button } from "@/components/ui/button";

/** Catalogue filtré par genre — page publique, indexable, deep-linkable. */
export const Route = createFileRoute("/_public/beats/$genre")({
  head: ({ params }) => {
    const title = `Beats ${params.genre} — CHRONOS INSTRU LAB`;
    const description = `Instrumentaux ${params.genre} du catalogue CHRONOS INSTRU LAB.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: GenrePage,
});

function GenrePage() {
  const { genre } = Route.useParams();

  return (
    <PageContainer>
      <PageHeader
        eyebrow="Catalogue"
        title={genre}
        description="Sélection filtrée par genre, alimentée par le catalogue réel à l'étape suivante."
      />
      <EmptyState
        title="Aucun beat pour ce genre"
        description="Ce genre ne contient encore aucun instrumental publié."
        action={
          <Button asChild variant="secondary">
            <Link to="/beats">Voir tout le catalogue</Link>
          </Button>
        }
      />
    </PageContainer>
  );
}
