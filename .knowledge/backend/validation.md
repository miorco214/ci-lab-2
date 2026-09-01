# Validation des entrées

Source principale : The Vault (Modules 1 & 2), The Foundation (Layer 2).

## Principes
- Toute entrée est non fiable : corps de requête, paramètres d'URL, en-têtes,
  fichiers, données de webhook, contenus importés.
- La validation côté client est une aide à l'UX ; la validation côté serveur est
  la seule qui protège.
- Valider = accepter uniquement ce qui est attendu (liste blanche), pas
  bloquer ce qui est connu comme dangereux.

## Exigences de construction
- Chaque route serveur et chaque fonction serveur déclare un schéma d'entrée
  explicite : types, bornes, longueurs maximales, valeurs énumérées.
- Rejeter les champs inconnus au lieu de les ignorer silencieusement.
- Valider avant tout accès base de données ou appel tiers.
- Erreurs de validation : messages utiles à l'utilisateur, sans révéler la
  structure interne (voir `error-handling.md`).
- Fichiers : valider type réel, taille, extension, et ne jamais faire confiance
  au nom de fichier fourni (voir `architecture/files-storage.md`).

## Pièges fréquents du code généré par IA
- Validation présente sur le formulaire seulement.
- Schéma défini mais jamais appliqué au handler.
- Absence de longueur maximale, permettant des charges utiles énormes.
- Champs numériques (prix, quantité) acceptés tels quels depuis le client.

## Contrôles à effectuer
- Pour chaque endpoint : envoyer un corps vide, un champ de mauvais type, un
  texte très long, des caractères spéciaux, un champ supplémentaire.
- Vérifier que le schéma est bien invoqué sur le chemin d'exécution.

## Critères d'implantation correcte
- Aucun handler n'accède aux données avant validation.
- Les entrées invalides sont rejetées avec un code approprié et sans effet de
  bord.

## À vérifier dans les sources
- Exigences détaillées de validation par type d'endpoint : The Vault, Module 2.
