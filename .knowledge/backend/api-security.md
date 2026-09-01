# Sécurité des API et routes serveur

Source principale : The Vault (Module 2 — API Security Basics).

## Principes
- Chaque endpoint doit répondre à trois questions : **qui** fait la requête,
  **a-t-il le droit** de faire cette action, **sur quelle ressource précise** ?
- Authentification ≠ autorisation : savoir qu'un utilisateur est connecté ne dit
  pas qu'il a le droit d'accéder à cette ressource.
- BOLA (Broken Object-Level Authorization) est la vulnérabilité n°1 des API :
  l'API renvoie ou modifie un objet à partir d'un identifiant fourni par le
  client sans vérifier la propriété.

## Exigences de construction
- Toute opération protégée passe par un middleware d'authentification appliqué
  **sur le chemin d'exécution**, pas seulement défini quelque part.
- Vérifier la propriété de la ressource dans la requête elle-même (filtrer par
  l'identifiant de l'utilisateur authentifié) plutôt qu'après lecture.
- Ne jamais faire confiance à un identifiant d'utilisateur, un rôle, un prix ou
  un statut envoyé par le client : les dériver de la session côté serveur.
- Mass assignment : accepter uniquement une liste blanche de champs par
  opération ; refuser explicitement les champs de statut, rôle, prix, propriété.
- Exposition excessive : sélectionner explicitement les colonnes retournées ;
  jamais « tout l'objet base de données » renvoyé au client.
- Rate limiting sur les endpoints sensibles (voir `rate-limiting.md`).
- Pas de fonction serveur protégée appelée depuis un loader de route publique
  (pas de session pendant le rendu serveur) : l'appeler depuis le composant ou
  la placer sous une frontière authentifiée.
- Endpoints publics destinés à des appelants externes (webhooks, cron) :
  vérifier l'appelant dans le handler (signature, secret), jamais se fier à
  l'obscurité du chemin.

## Pièges fréquents du code généré par IA
- Endpoint qui lit un identifiant d'URL et renvoie la ressource sans contrôle.
- `PATCH` qui applique directement le corps de la requête à l'enregistrement.
- Réponse contenant e-mails, hash, identifiants internes non nécessaires.
- Contrôle d'accès présent sur la route de lecture mais absent sur la mutation.

## Contrôles à effectuer
- Énumérer **tous** les endpoints et, pour chacun, tester : sans session, avec
  session d'un autre utilisateur, avec champ interdit dans le corps.
- Comparer la liste des champs acceptés avec la liste des champs modifiables.
- Inspecter les réponses réelles pour repérer les champs superflus.

## Critères d'implantation correcte
- Chaque endpoint protégé refuse une requête non authentifiée (preuve : test).
- Chaque endpoint portant un identifiant refuse l'accès croisé entre comptes.
- Chaque mutation ignore les champs non autorisés.

## À vérifier dans les sources
- Liste OWASP API référencée et cas d'école détaillés : The Vault, Module 2.
