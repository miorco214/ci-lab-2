# Patterns produit / SaaS

Source principale : The Mastery (dashboards, plans, abonnements, facturation).

## Principes
- Un droit commercial (plan, licence, achat) est un état serveur, pas une
  préférence d'interface.
- L'état d'un compte (actif, en essai, impayé, suspendu) doit être explicite et
  unique ; les états dérivés se calculent, ne se dupliquent pas.
- Les données de tarification proviennent d'une source unique, pas de valeurs en
  dur dans l'interface.

## Exigences de construction (pour les fonctionnalités futures)
- Le prix facturé et les droits accordés sont déterminés côté serveur ; le
  client ne transmet jamais un prix.
- Les fonctionnalités réservées à un plan sont gatées côté serveur ; le gating
  d'interface est un complément d'UX (voir `security/frontend-security.md`).
- Les licences de beats (droits d'usage, exclusivité, limites) sont modélisées
  explicitement et vérifiées à chaque action qui en dépend (téléchargement,
  facture, revente).
- Les transitions d'état de commande et de licence sont journalisées.
- Onboarding, réglages, facturation : parcours définis avant génération d'UI.

## Pièges fréquents du code généré par IA
- Page de tarifs avec des plans codés en dur, désynchronisée du backend.
- Fonctionnalité premium simplement masquée.
- Statut d'abonnement recalculé différemment à plusieurs endroits.
- Confirmation d'achat basée sur la redirection de succès plutôt que sur un
  événement serveur vérifié.

## Contrôles à effectuer
- Vérifier qu'un compte sans droit ne peut pas déclencher l'action réservée.
- Vérifier l'unicité de la source de vérité pour les plans et statuts.

## Critères d'implantation correcte
- Un test serveur prouve le refus pour un compte sans droit.
- Aucune donnée de prix ou de droit dupliquée en dur dans le client.

## À vérifier dans les sources
- Cycle de vie d'abonnement, états et bonnes pratiques de facturation :
  The Mastery, Modules 1 & 2.
