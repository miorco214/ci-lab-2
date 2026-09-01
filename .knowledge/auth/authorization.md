# Autorisation

Source principale : The Vault (Module 2), The Mastery (plan gating).

## Principes
- L'autorisation répond à : cet utilisateur authentifié a-t-il le droit de faire
  **cette action** sur **cette ressource précise** ?
- BOLA : la faille la plus fréquente est l'absence de vérification de propriété
  sur un objet identifié par un paramètre client.
- Défense en profondeur : contrôle applicatif **et** politique au niveau données.

## Exigences de construction
- Filtrer par l'identité de la session directement dans la requête, plutôt que
  de lire puis comparer.
- Vérifier l'autorisation sur chaque opération, y compris les mutations, les
  suppressions, les exports et les téléchargements.
- Les droits dépendant d'un achat, d'une licence ou d'un plan sont vérifiés
  côté serveur au moment de l'action, pas au moment de l'affichage.
- Les identifiants de ressource ne doivent pas être un contrôle d'accès : un
  UUID non devinable ne remplace pas une vérification.
- Refuser par défaut : une action sans règle d'autorisation explicite est
  interdite.

## Pièges fréquents du code généré par IA
- Contrôle présent sur `GET` mais absent sur `DELETE` de la même ressource.
- Vérification de rôle effectuée avec un client à privilèges élevés qui
  contourne les politiques.
- Autorisation déduite d'un champ envoyé par le client.
- Endpoint d'admin protégé, endpoint de données sous-jacent non protégé.

## Contrôles à effectuer
- Test croisé systématique entre deux comptes sur **chaque** endpoint portant un
  identifiant.
- Vérifier que la même règle existe sur toutes les opérations d'une ressource.
- Quand une faille est trouvée, chercher le même pattern sur les autres
  ressources.

## Critères d'implantation correcte
- Aucun accès croisé possible entre comptes (preuve : test avec deux comptes).
- Chaque action sensible a une règle explicite et testée.

## À vérifier dans les sources
- Cas détaillés de BOLA et de vérification de propriété : The Vault, Module 2.
