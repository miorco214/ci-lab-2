import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, PlannedSection } from "@/components/layout/PageContainer";

const title = "Bibliothèque — CHRONOS INSTRU LAB";
const description = "Vos achats, téléchargements et favoris CHRONOS INSTRU LAB.";

export const Route = createFileRoute("/account/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountHome,
});

function AccountHome() {
  return (
    <>
      <PageHeader
        eyebrow="Compte"
        title="Bibliothèque"
        description="L'authentification n'est pas encore activée. Cet espace restera vide tant qu'aucune donnée réelle n'existe."
      />
      <PlannedSection
        title="Contenu prévu"
        description="Chaque section sera alimentée par des données appartenant à l'utilisateur connecté, vérifiées côté serveur."
        items={["Achats", "Téléchargements", "Favoris", "Profil", "Paramètres"]}
      />
    </>
  );
}
