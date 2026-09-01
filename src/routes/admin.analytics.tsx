import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — CHRONOS ADMIN" },
      { name: "description", content: "Acquisition, écoute, conversion." },
      { property: "og:title", content: "Analytics — CHRONOS ADMIN" },
      { property: "og:description", content: "Acquisition, écoute, conversion." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminAnalytics,
});

function AdminAnalytics() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Administration"
        title="Analytics"
        description="Aucune métrique n'est affichée tant qu'aucun événement réel n'est mesuré."
      />
      <PlannedSection
        title="Mesures prévues"
        description="Les événements d'écoute seront distingués des simples clics."
        items={["Acquisition et sources", "Écoute significative", "Engagement", "Conversion", "Rétention", "Géographie"]}
      />
    </PageContainer>
  );
}
