# Confidentialité et données personnelles

Source principale : The Vault / The Foundation (conformité), The Industry
(populations réglementées).

## Principes
- Les obligations dépendent de **qui** sont les utilisateurs, pas de l'endroit
  où se trouve le constructeur : un projet peut être soumis à des règles
  étrangères sans y avoir de bureau.
- S'arrêter à la première réglementation identifiée laisse les autres non
  traitées.
- Minimisation : la donnée la plus sûre est celle qui n'est pas collectée.

## Exigences de construction
- Avant d'ajouter un champ, justifier sa finalité, sa durée de conservation et
  qui peut le lire.
- Ne pas collecter de données non nécessaires à la vente de beats (pas de
  données sensibles, pas de champs « au cas où »).
- Durées de conservation définies par type de donnée ; suppression ou
  anonymisation effective à l'échéance.
- Droits des personnes prévus dès la conception : accès, export, suppression du
  compte et des données associées.
- Pas de données personnelles dans les logs, l'analytics ou les messages
  d'erreur (voir `backend/error-handling.md`).
- Tout partage avec un tiers (paiement, e-mail, analytics) est identifié et
  limité au minimum nécessaire.

## Pièges fréquents du code généré par IA
- Table utilisateur qui accumule des champs jamais utilisés.
- Journalisation d'objets complets contenant e-mails et adresses.
- Aucune procédure de suppression de compte.
- Traceurs tiers ajoutés sans contrôle du périmètre transmis.

## Contrôles à effectuer
- Inventorier les données personnelles collectées, leur finalité et leur durée.
- Vérifier la présence effective d'un parcours de suppression.
- Rechercher les données personnelles dans les logs et l'analytics.

## Critères d'implantation correcte
- Inventaire des données à jour, chaque champ justifié.
- Suppression de compte prouvée par un test de bout en bout.

## À vérifier dans les sources
- Table de correspondance réglementation ↔ déclencheur (RGPD, CCPA/CPRA, COPPA,
  FERPA, HIPAA) et durées de conservation : voir les documents originaux avant
  toute décision de conformité.
