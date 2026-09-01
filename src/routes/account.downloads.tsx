import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";

export const Route = createFileRoute("/account/downloads")({
  head: () => ({
    meta: [
      { title: "Mes téléchargements — CHRONOS INSTRU LAB" },
      { name: "description", content: "Fichiers accessibles selon vos licences." },
      { property: "og:title", content: "Mes téléchargements — CHRONOS INSTRU LAB" },
      { property: "og:description", content: "Fichiers accessibles selon vos licences." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Compte"
        title="Téléchargements"
        description="Les fichiers seront servis par des accès temporaires générés côté serveur, jamais par des URLs publiques."
      />
      <EmptyState
        title="Aucun téléchargement"
        description="Aucun fichier n'est encore associé à ce compte."
      />
    </>
  );
}
