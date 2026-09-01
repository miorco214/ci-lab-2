import { createFileRoute, Link } from "@tanstack/react-router";

import { PageContainer, PlannedSection } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";

const title = "CHRONOS INSTRU LAB — Instrumentaux sous licence";
const description =
  "Maison de production digitale : des instrumentaux conçus pour donner une identité à tes morceaux.";

export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageContainer>
      <section className="py-10 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
          Chronos Instru Lab
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
          Des instrumentaux conçus pour donner une identité à tes morceaux.
        </h1>
        <p className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base">
          Du premier play au morceau final : écouter, choisir, licencier, télécharger, créer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/beats">Explorer les beats</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/styles">Parcourir les styles</Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-4 pb-4 md:grid-cols-2">
        <PlannedSection
          title="Découverte"
          description="Emplacements réservés pour les sections d'accueil. Aucun contenu n'est affiché tant que des données réelles n'existent pas."
          items={["Derniers beats", "Styles", "Beats populaires", "Recherche rapide"]}
        />
        <PlannedSection
          title="Parcours d'achat"
          description="La chaîne licence → agreement → paiement → livraison sera branchée aux étapes suivantes."
          items={["Licences", "Agreement & terms", "Checkout", "Livraison sécurisée"]}
        />
      </div>
    </PageContainer>
  );
}
