# Résidence et souveraineté des données

Source principale : The Vault / The Foundation (conformité), The Industry.

## Principes
- **Résidence** : où les données sont physiquement stockées.
  **Souveraineté** : quelles lois s'appliquent à ces données, y compris via le
  siège du fournisseur. Les deux ne coïncident pas nécessairement.
- Le choix de région d'un hébergeur est une décision de conformité, pas
  seulement de latence.
- Les sauvegardes, les logs et les services tiers déplacent aussi les données.

## Exigences de construction
- Choisir explicitement la région d'hébergement de la base de données et du
  stockage au moment de la mise en place, et la documenter ici.
- Inventorier les sous-traitants (paiement, e-mail, analytics, CDN) et la
  localisation de leur traitement.
- Vérifier que les sauvegardes et les logs restent dans le périmètre attendu.
- Ne pas dupliquer de données personnelles vers des outils annexes sans
  décision explicite.

## Pièges fréquents du code généré par IA
- Région par défaut acceptée sans décision.
- Copie de données vers un service d'analytics ou de logs non inventorié.
- Sauvegardes stockées dans une autre juridiction sans le savoir.

## Contrôles à effectuer
- Lister la région effective de chaque service de stockage utilisé.
- Lister les tiers recevant des données et leur périmètre.

## Critères d'implantation correcte
- Région d'hébergement décidée, documentée et vérifiée.
- Inventaire des sous-traitants à jour.

## À vérifier dans les sources
- Définitions complètes résidence vs souveraineté et cas d'application : voir
  les documents originaux avant toute décision engageante.
