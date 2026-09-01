import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

/**
 * Page beat individuelle: toujours accessible directement par son URL,
 * sans redirection vers une page de connexion.
 */
export const Route = createFileRoute("/_public/beat/$slug")({
  head: ({ params }) => {
    const title = `Beat ${params.slug} — CHRONOS INSTRU LAB`;
    const description = `Page du beat ${params.slug} : écoute, licences et téléchargement sur CHRONOS INSTRU LAB.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BeatPage,
});

function BeatPage() {
  const { slug } = Route.useParams();

  return (
    <PageContainer>
      <PageHeader eyebrow="Beat" title={slug} description="Page publique, accessible sans compte." />
      <div className="grid gap-4 md:grid-cols-2">
        <EmptyState
          title="Beat introuvable"
          description="Aucun beat ne correspond encore à cette adresse. Les données réelles seront branchées à l'étape catalogue."
        />
        <PlannedSection
          title="Structure prévue"
          description="Emplacements de la page beat, à remplir avec des données réelles."
          items={[
            "Cover réelle (fichier admin uniquement)",
            "Identité : titre, style, BPM, tonalité, durée",
            "Lecteur audio (source unique)",
            "Like, favori, partage",
            "Licences et prix",
            "Agreement puis paiement",
          ]}
        />
      </div>
    </PageContainer>
  );
}
