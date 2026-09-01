import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

export const Route = createFileRoute("/account/favorites")({
  head: () => ({
    meta: [
      { title: "Mes favoris — CHRONOS INSTRU LAB" },
      { name: "description", content: "Les beats enregistrés dans votre bibliothèque." },
      { property: "og:title", content: "Mes favoris — CHRONOS INSTRU LAB" },
      { property: "og:description", content: "Les beats enregistrés dans votre bibliothèque." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  return (
    <>
      <PageHeader eyebrow="Compte" title="Favoris" />
      <EmptyState
        title="Aucun favori"
        description="Enregistrez un beat pour le retrouver ici."
      />
    </>
  );
}
