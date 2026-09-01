# Authentification

Source principale : The Vault, The Foundation (Layer auth), The Pit (admin).

## Principes
- L'authentification établit **qui** est l'utilisateur. Elle ne dit rien de ce
  qu'il a le droit de faire (voir `authorization.md`).
- La session est la source de vérité côté serveur ; le client ne fait
  qu'en refléter l'état.
- Les endpoints d'authentification sont les plus attaqués du projet.

## Exigences de construction
- Utiliser le mécanisme d'authentification fourni par la plateforme plutôt
  qu'une implémentation maison.
- Vérification de session côté serveur sur chaque opération protégée ; un garde
  de route côté client ne protège rien.
- Rate limiting et verrouillage progressif sur login, inscription, reset
  (voir `backend/rate-limiting.md`).
- Messages neutres : ne jamais révéler qu'un compte existe ou non.
- Liste de redirections autorisées maintenue à jour : retirer les URLs de
  développement avant la mise en production.
- Déconnexion effective : invalidation côté serveur, pas seulement effacement
  local.
- Réinitialisation de mot de passe : jetons à usage unique, expirants, limités
  en fréquence.
- Stockage des secrets d'authentification (TOTP, jetons) chiffré côté serveur.

## Pièges fréquents du code généré par IA
- Route protégée uniquement par une redirection dans un composant.
- Login sans limite de tentatives.
- `localhost` laissé dans les redirections autorisées.
- Statut « connecté » déduit d'une valeur de stockage navigateur.

## Contrôles à effectuer
- Accéder à chaque route et endpoint protégé sans session.
- Réutiliser une session après déconnexion.
- Rafale de tentatives de connexion.

## Critères d'implantation correcte
- Toute opération protégée échoue sans session valide (preuve : test).
- Aucune information d'existence de compte divulguée.

## À vérifier dans les sources
- Détail des flux (MFA, reset, comptes désactivés) : The Vault, The Foundation.
