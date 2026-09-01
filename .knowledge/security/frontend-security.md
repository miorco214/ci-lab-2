# Sécurité frontend et hypothèses de confiance

Source principale : The Vault (Module 1), The Mastery (plan-gated UI).

## Principes
- Le client est un environnement hostile : code lisible, requêtes modifiables,
  état manipulable. Rien de ce qu'il affirme n'est une preuve.
- Cacher une fonctionnalité n'est pas la protéger. Un composant premium masqué
  en CSS reste dans le DOM et son endpoint reste appelable.
- Le gating d'interface sert l'UX ; l'autorisation serveur sert la sécurité.
  Les deux doivent exister, et la seconde est obligatoire.

## Exigences de construction
- Pour chaque élément d'UI conditionné par un droit (plan, rôle, achat), écrire
  en même temps la vérification serveur correspondante.
- Ne pas envoyer au client les données d'une fonctionnalité à laquelle il n'a
  pas droit, même masquée.
- Ne pas stocker de décision d'autorisation dans le stockage local ou un état
  client ; la source de vérité est le serveur.
- Ne pas embarquer dans le client de logique métier sensible (calculs de prix
  finaux, règles de licence, quotas) : la calculer côté serveur.

## Pièges fréquents du code généré par IA
- Bouton « télécharger » masqué mais URL du fichier présente dans la réponse.
- Rôle admin lu depuis un champ client ou un stockage navigateur.
- Contrôle d'accès implémenté uniquement dans un composant de route.

## Contrôles à effectuer
- Pour chaque gating d'UI, appeler directement l'endpoint sans le droit et
  vérifier le refus.
- Inspecter les réponses réseau : contiennent-elles des données réservées ?

## Critères d'implantation correcte
- Chaque gating client a un test serveur correspondant qui échoue sans droit.
- Aucune donnée réservée présente dans une réponse destinée à un utilisateur
  non autorisé.

## À vérifier dans les sources
- Détail du plan-gating correct (serveur vs CSS) : The Mastery, Module 1.
