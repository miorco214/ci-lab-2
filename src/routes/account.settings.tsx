import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/account/settings")({
  head: () => ({
    meta: [
      { title: "Profil et paramètres — CHRONOS INSTRU LAB" },
      { name: "description", content: "Profil, préférences et sécurité du compte." },
      { property: "og:title", content: "Profil et paramètres — CHRONOS INSTRU LAB" },
      { property: "og:description", content: "Profil, préférences et sécurité du compte." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <>
      <PageHeader eyebrow="Compte" title="Profil et paramètres" />
      <PlannedSection
        title="Sections prévues"
        description="Aucune donnée personnelle n'est collectée à cette étape."
        items={["Profil public (nom d'artiste)", "Langue", "Sécurité du compte", "Confidentialité"]}
      />
    </>
  );
}
