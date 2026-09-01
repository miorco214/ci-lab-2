import { createFileRoute } from "@tanstack/react-router";

import { PageContainer, PageHeader, PlannedSection } from "@/components/layout/PageContainer";

const title = "Checkout — CHRONOS INSTRU LAB";
const description = "Finalisation de commande CHRONOS INSTRU LAB.";

export const Route = createFileRoute("/_public/checkout")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Commande" title="Checkout" />
      <PlannedSection
        title="Paiement non disponible"
        description="Le paiement n'est pas encore activé. La commande sera créée côté serveur à partir de la confirmation du prestataire de paiement, jamais depuis le navigateur."
        items={["Beat", "Licence", "Prix", "Agreement accepté", "Paiement", "Livraison sécurisée"]}
      />
    </PageContainer>
  );
}
