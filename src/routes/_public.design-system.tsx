import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  BusyIndicator,
  EmptyState,
  ErrorState,
  LoadingState,
  SuccessState,
  UnavailableState,
} from "@/components/states/DataState";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { icons, type IconName } from "@/lib/icons";

const title = "Design system — CHRONOS INSTRU LAB";
const description =
  "Référence visuelle unique : tokens, typographie, primitives et états de l'interface CHRONOS.";

export const Route = createFileRoute("/_public/design-system")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DesignSystemPage,
});

function Section({ title: heading, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="text-eyebrow mb-6 text-primary">{heading}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function DesignSystemPage() {
  const [selected, setSelected] = useState(true);

  return (
    <PageContainer>
      <PageHeader
        eyebrow="Fondations"
        title="Design system"
        description="Source de vérité visuelle partagée par l'espace public, le compte et l'administration."
      />

      <Section title="Typographie">
        <p className="text-hero">Chronos</p>
        <p className="text-section-title">Titre de section</p>
        <p className="text-body max-w-2xl text-muted-foreground">
          Texte principal Inter, hauteur de ligne généreuse pour la lecture longue.
        </p>
        <p className="text-meta text-muted-foreground">Melodic Drill • 142 BPM • F# Minor</p>
      </Section>

      <Section title="Couleurs & surfaces">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Background", "bg-background border border-border"],
            ["Card", "bg-card"],
            ["Elevated", "bg-elevated"],
            ["Primary", "bg-primary"],
            ["Accent 2", "bg-brand-accent-2"],
            ["Deep", "bg-brand-deep"],
            ["Surface", "bg-surface"],
            ["Muted", "bg-muted"],
          ].map(([label, cls]) => (
            <div key={label} className="space-y-2">
              <div className={`h-16 rounded-lg ${cls}`} />
              <p className="text-meta text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Boutons & contrôles">
        <div className="flex flex-wrap gap-3">
          <Button>Écouter</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="outline">Contour</Button>
          <Button variant="ghost">Discret</Button>
          <Button variant="destructive">Destructif</Button>
          <Button variant="link">Lien</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Petit</Button>
          <Button size="lg">Grand</Button>
          <Button loading>Chargement</Button>
          <Button disabled>Désactivé</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton icon="play" label="Lire l'extrait" variant="primary" />
          <IconButton icon="like" label="Ajouter aux favoris" variant="outline" />
          <IconButton icon="share" label="Partager" />
          <IconButton icon="download" label="Télécharger" loading />
        </div>
      </Section>

      <Section title="Chips & badges">
        <div className="flex flex-wrap gap-2">
          <Chip label="Drill" selected={selected} onClick={() => setSelected((v) => !v)} />
          <Chip label="142 BPM" onRemove={() => undefined} />
          <Chip label="F# Minor" size="sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Brouillon</Badge>
          <Badge variant="brand">Premium</Badge>
          <Badge variant="outline">Archivé</Badge>
          <Badge variant="success">Publié</Badge>
          <Badge variant="warning">Privé</Badge>
          <Badge variant="destructive">Exclusive sold</Badge>
        </div>
      </Section>

      <Section title="Formulaires">
        <div className="grid gap-5 md:max-w-xl">
          <Field id="ds-search" label="Recherche" description="Titre, style ou type beat.">
            {(p) => <Input placeholder="Rechercher un beat…" {...p} />}
          </Field>
          <Field id="ds-notes" label="Description" error="Ce champ est requis." required>
            {(p) => <Textarea placeholder="Décrire l'instrumental…" {...p} />}
          </Field>
          <Field id="ds-license" label="Licence">
            {() => (
              <Select>
                <SelectTrigger id="ds-license">
                  <SelectValue placeholder="Choisir une licence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            )}
          </Field>
        </div>
      </Section>

      <Section title="Surfaces & overlays">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Surface raised</CardTitle>
              <CardDescription>Niveau par défaut des contenus.</CardDescription>
            </CardHeader>
          </Card>
          <Card surface="elevated">
            <CardHeader>
              <CardTitle>Surface elevated</CardTitle>
              <CardDescription>Panneaux, overlays, éléments flottants.</CardDescription>
            </CardHeader>
          </Card>
          <Card surface="quiet">
            <CardHeader>
              <CardTitle>Surface quiet</CardTitle>
              <CardDescription>Emplacement réservé, non implémenté.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Ouvrir un dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agreement &amp; terms</DialogTitle>
                <DialogDescription>
                  Structure d'overlay réutilisable, sans contenu métier à cette étape.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Ouvrir un sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Filtres</SheetTitle>
                <SheetDescription>Bottom-sheet mobile du catalogue.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Plus récents</DropdownMenuItem>
              <DropdownMenuItem>Plus populaires</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconButton icon="info" label="Informations" variant="outline" />
              </TooltipTrigger>
              <TooltipContent>Infobulle</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">Aperçu</TabsTrigger>
            <TabsTrigger value="b">Licences</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="text-body-sm text-muted-foreground">
            Contenu de l'onglet.
          </TabsContent>
          <TabsContent value="b" className="text-body-sm text-muted-foreground">
            Contenu de l'onglet.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="États d'interface">
        <LoadingState rows={2} />
        <div className="grid gap-4 md:grid-cols-2">
          <EmptyState title="Aucun beat" description="Le catalogue n'est pas encore alimenté." />
          <ErrorState onRetry={() => undefined} />
          <SuccessState title="Action confirmée" description="Le retour visuel reste sobre." />
          <UnavailableState />
        </div>
        <BusyIndicator label="Vérification en cours" />
      </Section>

      <Section title="Icônes (Hugeicons Stroke)">
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {(Object.keys(icons) as IconName[]).map((name) => (
            <li key={name} className="flex flex-col items-center gap-2 text-center">
              <Icon name={name} size="lg" className="text-foreground" />
              <span className="text-[0.6875rem] text-muted-foreground">{name}</span>
            </li>
          ))}
        </ul>
      </Section>
    </PageContainer>
  );
}
