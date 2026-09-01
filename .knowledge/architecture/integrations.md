# Intégrations et webhooks

Source principale : The Mastery (webhooks, idempotence), The Vault, The Pit
(versioning d'API).

## Principes
- Un webhook est un endpoint public : n'importe qui peut l'appeler. Sa
  protection est la **vérification de signature**, pas l'obscurité de l'URL.
- Tout événement peut arriver plusieurs fois et dans le désordre : le traitement
  doit être idempotent, indexé sur l'identifiant d'événement.
- Une redirection de succès côté navigateur n'est pas une preuve de paiement :
  la vérité vient de l'événement serveur vérifié.

## Exigences de construction (pour les fonctionnalités futures)
- Vérifier la signature du fournisseur avant toute lecture du contenu.
- Stocker les identifiants d'événements traités et ignorer les doublons.
- Ne jamais accorder un droit (licence, téléchargement) sur la base d'un
  paramètre d'URL de retour.
- Les clés tierces restent serveur ; les appels sortants passent par le serveur.
- Erreurs d'intégration : réponse neutre au fournisseur, détails en logs.
- API destinée à des tiers : versionner dès la première version publique,
  documenter les changements de rupture et prévoir une politique de retrait.

## Pièges fréquents du code généré par IA
- Webhook qui parse le corps avant de vérifier la signature.
- Traitement non idempotent : double attribution de licence, double envoi
  d'e-mail.
- Clé du fournisseur utilisée côté client.
- Endpoint webhook placé derrière l'auth du site, donc jamais appelé.

## Contrôles à effectuer
- Rejouer deux fois le même événement et vérifier l'absence d'effet double.
- Envoyer un événement avec une signature invalide et vérifier le rejet.

## Critères d'implantation correcte
- Signature vérifiée en premier, prouvé par un test de rejet.
- Rejeu sans effet de bord, prouvé par un test.

## À vérifier dans les sources
- Détail des flux Stripe (états d'abonnement, idempotence) : The Mastery.
- Stratégie de versioning et de sunset : The Pit.
