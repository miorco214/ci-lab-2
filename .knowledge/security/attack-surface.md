# Surface d'attaque

Source principale : The Vault (Module 1). Voir aussi The Pit (admin panel, DNS).

## Principes
- La surface d'attaque est **tout point où une entrée non fiable entre dans le
  système** : formulaires, paramètres d'URL, en-têtes, uploads, webhooks,
  routes API, bundle client.
- Ce qui est envoyé au navigateur est public : routes, noms d'endpoints,
  logique de gating, valeurs intégrées au bundle.
- Défense en profondeur : une seule barrière ne compte pas comme protection.

## Exigences de construction (dès le départ)
- Inventorier les points d'entrée à chaque ajout de fonctionnalité (route,
  formulaire, upload, webhook) et décider explicitement de leur protection.
- Aucune route « secrète » : une URL non devinable n'est pas un contrôle
  d'accès, seulement une réduction de bruit. L'authentification reste requise.
- Réduire la surface : pas de route, d'endpoint, de champ ou de fonctionnalité
  laissés en place « au cas où ».
- Pour les zones d'administration : authentification + vérification de rôle
  explicite ; répondre 404 plutôt que 403 pour ne pas confirmer l'existence.
- Ne pas laisser de sous-domaines / enregistrements DNS orphelins pointant vers
  des plateformes tierces (risque de subdomain takeover, cookies du domaine
  parent lisibles, redirections d'auth détournables).

## Pièges fréquents du code généré par IA
- Panneau d'admin fonctionnel sans écran de connexion.
- Routes API référencées dans le bundle client, y compris des routes admin.
- Fonctionnalités de démo/test laissées actives en production.
- Hypothèse « personne ne connaît cette URL ».

## Contrôles à effectuer
- Lister toutes les routes produites par l'arborescence des routes et dire
  lesquelles sont publiques, authentifiées, réservées à un rôle.
- Chercher dans le bundle client les références d'endpoints sensibles.
- Tenter d'accéder à chaque route protégée sans session.

## Critères d'implantation correcte
- Chaque route a une classification d'accès écrite et appliquée côté serveur.
- Aucune route sensible accessible sans session valide, prouvé par un test.
- Aucun sous-domaine/DNS orphelin connu.

## À vérifier dans les sources
- Détail des scanners recommandés et de leur usage : The Vault, Module 1.
- Procédure complète d'audit DNS et de nettoyage : The Pit.
