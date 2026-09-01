# Secrets, clés et credentials

Source principale : The Vault (secrets côté client, clés Supabase).

## Principes
- Tout ce qui atteint le navigateur est public. Un secret dans le code client
  est un secret compromis, même minifié, même dans une variable « privée ».
- Deux catégories de clés : **publiables** (anon / publishable, conçues pour le
  client, protégées par RLS) et **privilégiées** (service role, secret API), qui
  contournent les protections et ne doivent jamais quitter le serveur.
- La clé service role contourne RLS : elle n'appartient qu'au code serveur, et
  jamais dans un chemin importé par le client.

## Exigences de construction
- Les secrets vivent uniquement dans la configuration serveur, lus à
  l'exécution dans un handler serveur, jamais au niveau module partagé.
- Les variables exposées au navigateur sont explicitement préfixées comme
  publiques et ne contiennent que des valeurs publiables.
- Toute clé tierce (paiement, e-mail, IA) s'utilise via un appel serveur ; le
  client n'appelle jamais l'API tierce directement avec la clé.
- Un secret ne se commit jamais ; s'il l'a été, il doit être **révoqué et
  remplacé**, pas seulement retiré du fichier.
- Portée minimale par clé : une clé par usage, avec le moins de droits possible.

## Pièges fréquents du code généré par IA
- Clé d'API en dur dans un composant ou un hook.
- Utilisation de la clé service role pour « simplifier » une lecture.
- Secret placé dans une variable d'environnement exposée au client.
- Secret retiré du code mais toujours présent dans l'historique du dépôt.

## Contrôles à effectuer
- Recherche de motifs de clés dans tout le code, y compris les fichiers de
  configuration, les tests et les fixtures.
- Vérifier le graphe d'import : aucun module serveur privilégié atteignable
  depuis un composant.
- Inspecter le bundle produit et les réponses réseau à la recherche de clés.

## Critères d'implantation correcte
- Aucun secret dans le code source ni dans le bundle client (preuve : recherche
  + inspection du bundle).
- Chaque secret a un emplacement serveur unique et un usage documenté.

## À vérifier dans les sources
- Règles précises anon key vs service role et emplacements autorisés :
  The Vault.
