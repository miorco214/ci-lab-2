# Gestion des erreurs, logs et audit trail

Source principale : The Vault, The Foundation (Layer 2), The Pit (audit log).

## Principes
- Une erreur destinée à l'utilisateur et une erreur destinée au développeur ne
  sont pas la même chose. La première est générique et actionnable, la seconde
  est détaillée et privée.
- Un message d'erreur trop précis est une fuite d'information : nom de colonne,
  requête SQL, chemin de fichier, stack trace, existence d'un compte.
- Une action sensible non journalisée est une action non auditable.

## Exigences de construction
- En production : aucun détail interne renvoyé au client. Catégories d'erreur
  claires (entrée invalide, non authentifié, non autorisé, limite atteinte,
  erreur serveur) avec un identifiant de corrélation.
- Les détails complets vont dans les logs serveur, jamais dans la réponse.
- Messages d'authentification neutres : ne pas confirmer l'existence d'un compte
  lors du login, de l'inscription ou du reset.
- Les logs ne contiennent ni mot de passe, ni token, ni clé, ni donnée
  personnelle non nécessaire (voir `compliance/privacy.md`).
- Audit trail pour les actions sensibles : qui, quoi, quand, valeur avant/après,
  source. Stocké hors de portée de modification par les utilisateurs concernés.
- États d'erreur visibles dans l'UI : jamais d'échec silencieux
  (voir `frontend/ux-states.md`).

## Pièges fréquents du code généré par IA
- Renvoi brut de l'erreur base de données au client.
- `console.log` d'objets complets contenant des données sensibles.
- Message « aucun compte n'existe pour cette adresse ».
- Aucune journalisation des changements de rôle ou de droits.

## Contrôles à effectuer
- Provoquer chaque catégorie d'erreur et lire la réponse réelle en production.
- Relire les logs à la recherche de secrets et de données personnelles.
- Vérifier qu'une action sensible produit bien une entrée d'audit.

## Critères d'implantation correcte
- Aucune stack trace ni nom de table dans une réponse de production.
- Chaque action sensible est retrouvable dans l'audit trail.

## À vérifier dans les sources
- Catégories d'erreur et format « machine-readable / human-readable » :
  The Foundation. Contenu exact de l'audit log admin : The Pit.
