# En-têtes de sécurité, CSP et clickjacking

Source principale : The Vault (Module 1), The Foundation (déploiement/traffic).

## Principes
- Les en-têtes de réponse constituent une couche de défense côté navigateur :
  ils limitent ce que la page peut charger, exécuter et à qui elle peut être
  intégrée.
- Le clickjacking consiste à embarquer l'application dans une iframe pour faire
  cliquer l'utilisateur sur un élément qu'il ne voit pas.

## Exigences de construction
- Définir une Content Security Policy explicite dès la mise en place du
  déploiement, plutôt que de la reporter après le lancement.
- Interdire l'intégration en iframe par des origines non autorisées.
- Configurer CORS de manière restrictive : origines explicites, pas de
  joker sur des endpoints authentifiés.
- Les cookies de session : portée la plus étroite possible (voir The Pit sur
  l'héritage de confiance depuis un sous-domaine).

## Pièges fréquents du code généré par IA
- Aucune CSP, ou CSP permissive rendue inutile par des directives trop larges.
- CORS ouvert à toutes les origines pour « faire marcher » un appel.
- Absence de protection contre l'intégration en iframe.

## Contrôles à effectuer
- Inspecter les en-têtes réels d'une réponse de production, pas la
  configuration seule.
- Évaluer la CSP avec un évaluateur dédié.
- Tenter d'intégrer l'application dans une iframe externe.

## Critères d'implantation correcte
- En-têtes présents et vérifiés sur une réponse réelle.
- CSP non contournée par une directive fourre-tout.

## À vérifier dans les sources
- Directives CSP précises recommandées et outil d'évaluation : The Vault.
- Couche « traffic » (sécurité, rate limiting, cache, load balancing) :
  The Foundation.
