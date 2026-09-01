# Rate limiting et protection contre les abus

Source principale : The Vault (Module 2), The Pit (admin brute force),
The Foundation (couche traffic).

## Principes
- Sans limite, un attaquant peut tester des milliers d'identifiants, inonder
  l'envoi d'e-mails, ou faire exploser le coût d'un endpoint lourd.
- Le rate limiting est une protection de disponibilité **et** de sécurité.
- Limiter par identité **et** par source : un seul axe se contourne.

## Exigences de construction
- Endpoints à limiter dès leur création : connexion, inscription,
  réinitialisation de mot de passe, envoi d'e-mail, paiement/checkout,
  téléchargement de fichier, recherche coûteuse, endpoints IA.
- Verrouillage progressif ou blocage après un nombre d'échecs sur une fenêtre
  de temps pour les endpoints d'authentification.
- Limitation par IP en complément, pour les rafales de requêtes.
- Le stockage des compteurs doit être partagé entre instances (pas en mémoire
  d'un seul processus) pour rester efficace en environnement distribué.
- Les limites doivent être lisibles pour le client : code de statut approprié
  et en-têtes explicites, sans révéler de détail interne.

## Pièges fréquents du code généré par IA
- Limiter défini dans un fichier mais jamais appliqué à la route d'auth.
- Limitation globale unique : un utilisateur bruyant dégrade tout le monde.
- Compteurs en mémoire, réinitialisés à chaque déploiement ou par instance.
- Rate limiting absent sur les endpoints de reset e-mail (flood).

## Contrôles à effectuer
- Envoyer une rafale de requêtes réelles sur chaque endpoint sensible et
  observer le blocage effectif.
- Vérifier que le limiter est bien branché sur le chemin d'exécution.

## Critères d'implantation correcte
- Chaque endpoint sensible a une limite prouvée par un test de rafale.
- Le comportement au dépassement est explicite et ne fuit pas d'information.

## À vérifier dans les sources
- Seuils recommandés (tentatives/fenêtre) et stratégies par tier : The Vault,
  The Pit.
