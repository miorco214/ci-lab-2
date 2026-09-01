# Row Level Security (RLS)

Source principale : The Vault.

## Principes
- RLS applique l'isolation **à la couche données** : c'est l'enforcement le plus
  fort, car il s'applique quel que soit le chemin applicatif utilisé.
- Une table sans RLS, exposée via l'API de données avec une clé publique, est
  lisible et modifiable par n'importe qui.
- La clé de service contourne RLS : son usage doit être exceptionnel, justifié
  et strictement serveur.

## Exigences de construction
- `ENABLE ROW LEVEL SECURITY` dans **chaque** migration de création de table,
  sans exception, y compris pour les tables « internes » ou « temporaires ».
- Politiques explicites par opération (select / insert / update / delete) et par
  rôle, fondées sur l'identité authentifiée.
- Les rôles ne sont jamais stockés sur la table de profil : table de rôles
  dédiée + fonction de vérification à privilège défini
  (voir `auth/roles-permissions.md`).
- L'accès admin passe par une politique, pas par la désactivation de RLS ni par
  la clé de service dans un chemin ordinaire.
- Les abonnements temps réel doivent être protégés par RLS, pas par un filtre
  côté client.

## Pièges fréquents du code généré par IA
- Dix tables protégées, puis une nouvelle table ajoutée sans RLS.
- RLS activé mais aucune politique → fonctionnalité cassée, puis RLS désactivé
  « pour débloquer ».
- Politique récursive lisant la table de rôles sans fonction à privilège défini.
- Filtrage temps réel effectué côté client seulement.

## Contrôles à effectuer
- Lister toutes les tables et leurs politiques via le catalogue ; comparer avec
  la liste des tables existantes.
- Tester l'accès avec un compte A aux données d'un compte B.
- Tester une lecture anonyme sur chaque table.

## Critères d'implantation correcte
- Couverture RLS à 100 % des tables, prouvée par une requête catalogue.
- Test croisé entre deux comptes réels : aucune fuite.

## À vérifier dans les sources
- Formulation exacte du « Standing RLS Prompt Block » et des requêtes de preuve :
  The Vault.
