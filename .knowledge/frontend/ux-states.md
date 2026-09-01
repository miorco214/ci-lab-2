# États d'interface (loading / empty / error / success)

Source principale : The Foundation (Layer 1), The Mastery (dashboards).

## Principes
- Une interface sans état d'attente, de vide ou d'erreur donne l'impression
  d'être cassée. L'utilisateur ne se plaint pas : il part.
- Un échec silencieux est un bug de sécurité perçu comme un bug d'UX.
- Les formulaires doivent préserver la saisie de l'utilisateur en cas d'échec.

## Exigences de construction
- Toute vue chargeant des données implémente les quatre états : `loading`,
  `empty`, `error`, `success`.
- Les erreurs affichées sont compréhensibles et actionnables, sans détail
  interne (voir `backend/error-handling.md`).
- Les formulaires : validation visible, messages par champ, conservation des
  valeurs saisies, protection contre la double soumission.
- Les actions destructives demandent une confirmation explicite.
- Les états de chargement ne provoquent pas de saut de mise en page.

## Pièges fréquents du code généré par IA
- Écran vide quand la liste est vide, sans message.
- Erreur avalée dans un `catch` sans retour utilisateur.
- Formulaire vidé après une erreur de validation serveur.
- Bouton de soumission cliquable plusieurs fois de suite.

## Contrôles à effectuer
- Simuler : réseau lent, réponse vide, erreur serveur, erreur de validation.
- Soumettre un formulaire vide, avec des caractères spéciaux, avec un texte
  très long.

## Critères d'implantation correcte
- Les quatre états sont observables pour chaque vue de données.
- Aucune action ne peut échouer sans retour visible.

## À vérifier dans les sources
- Attentes détaillées sur les formulaires et le feedback : The Foundation,
  Layer 1.
