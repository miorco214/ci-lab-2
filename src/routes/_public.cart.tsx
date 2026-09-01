import { createFileRoute, Link } from "@tanstack/react-router";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/states/DataState";
import { Button } from "@/components/ui/button";

const title = "Panier — CHRONOS INSTRU LAB";
const description = "Vos licences sélectionnées avant paiement sur CHRONOS INSTRU LAB.";

export const Route = createFileRoute("/_public/cart")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  return (
    <PageContainer>
      <PageHeader eyebrow="Commande" title="Panier" />
      <EmptyState
        title="Panier vide"
        description="Ajoutez une licence depuis une page beat pour la retrouver ici."
        action={
          <Button asChild variant="secondary">
            <Link to="/beats">Explorer les beats</Link>
          </Button>
        }
      />
    </PageContainer>
  );
}
