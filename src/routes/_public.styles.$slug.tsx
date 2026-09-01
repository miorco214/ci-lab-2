import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

export const Route = createFileRoute("/_public/styles/$slug")({
  head: ({ params }) => {
    const title = `Beats ${params.slug} — CHRONOS INSTRU LAB`;
    const description = `Instrumentaux ${params.slug} du catalogue CHRONOS INSTRU LAB.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: StylePage,
});

function StylePage() {
  const { slug } = Route.useParams();

  return (
    <PageContainer>
      <PageHeader eyebrow="Style" title={slug} description="Page de style indexable individuellement." />
      <EmptyState
        title="Aucun beat pour ce style"
        description="Ce style ne contient encore aucun instrumental publié."
      />
    </PageContainer>
  );
}
