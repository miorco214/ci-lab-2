# Sécurité de la base de données

Source principale : The Vault, The Pit (audit de performance base de données).

## Principes
- La base de données est la dernière ligne de défense : si elle est ouverte,
  aucune protection applicative ne compense.
- Une table exposée via une API de données est publiquement lisible et
  modifiable si aucune politique ne la protège.
- Privilège minimal : chaque rôle n'obtient que les droits nécessaires.

## Exigences de construction
- Chaque migration créant une table dans le schéma public inclut, dans la même
  migration : les `GRANT` nécessaires, l'activation de RLS, puis les politiques.
- Accorder `anon` uniquement quand une politique autorise réellement un accès
  anonyme ; sinon limiter aux rôles authentifiés et de service.
- Requêtes paramétrées uniquement : jamais de SQL construit par concaténation de
  valeurs fournies par l'utilisateur.
- Les fonctions à privilèges élevés (security definer) ont un `search_path` fixé
  et un périmètre minimal.
- Index sur les colonnes utilisées en filtre, jointure, tri — en particulier les
  clés étrangères utilisées par les politiques RLS.
- Sélectionner les colonnes nécessaires et paginer par défaut.

## Pièges fréquents du code généré par IA
- Table créée sans `GRANT` (l'application ne peut plus lire) ou sans RLS
  (tout le monde peut lire).
- Utilisation de la clé privilégiée pour contourner une politique gênante.
- Requêtes sans index qui scannent toute la table dès que le volume monte.
- Absence de `LIMIT` sur des listes destinées à être paginées.

## Contrôles à effectuer
- Interroger le catalogue pour lister les tables et vérifier RLS + politiques
  sur **toutes** (pas un échantillon).
- Analyser le plan d'exécution des requêtes principales avant/après index.
- Rechercher toute construction de SQL par concaténation.

## Critères d'implantation correcte
- Preuve, requête à l'appui, que chaque table a RLS activé et des politiques.
- Requêtes de liste paginées et indexées.

## À vérifier dans les sources
- Requêtes exactes de vérification de couverture RLS et seuils de slow query :
  The Vault, The Pit.
