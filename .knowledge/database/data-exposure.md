# Exposition excessive de données

Source principale : The Vault (Module 2), The Pit (optimisation des requêtes).

## Principes
- Une API qui renvoie l'enregistrement complet expose des champs que l'interface
  n'affiche jamais : e-mails, identifiants internes, statuts, métadonnées.
- « L'interface ne l'affiche pas » n'est pas une protection : la réponse réseau
  est lisible.
- Moins de données transférées = moins de risque et meilleures performances.

## Exigences de construction
- Sélection explicite des colonnes pour chaque requête, par cas d'usage.
- Une forme de réponse (DTO) par endpoint, décidée volontairement.
- Pagination et bornes par défaut sur toute liste.
- Les données d'autres utilisateurs ne quittent jamais le serveur, même
  agrégées, sauf si l'agrégat est explicitement public.
- Pour les fonctionnalités IA éventuelles : la portée des données accessibles au
  modèle est restreinte à l'utilisateur courant, appliquée à la couche données
  et non dans le prompt ; filtrer aussi la sortie.

## Pièges fréquents du code généré par IA
- `select *` généralisé.
- Endpoint de liste renvoyant tous les enregistrements sans limite.
- Objet utilisateur complet renvoyé après connexion.
- Filtrage des données réservé fait côté client.

## Contrôles à effectuer
- Comparer chaque réponse réseau réelle avec les champs réellement affichés.
- Vérifier la présence de limites et de pagination sur chaque liste.

## Critères d'implantation correcte
- Aucune réponse ne contient de champ non utilisé par l'interface.
- Chaque liste est bornée.

## À vérifier dans les sources
- Exemples détaillés d'excessive data exposure : The Vault, Module 2.
- Audit de requêtes et de volumes renvoyés : The Pit.
