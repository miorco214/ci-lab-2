# Accessibilité

Source principale : The Foundation (Layer 1), The Industry (exigences
d'accessibilité renforcées).

## Principes
- L'accessibilité n'est jamais ajoutée automatiquement par un outil d'IA : elle
  doit être demandée et vérifiée.
- HTML sémantique d'abord : les bons éléments donnent gratuitement le clavier,
  le focus et le support des lecteurs d'écran.

## Exigences de construction
- Éléments corrects : bouton pour une action, lien pour une navigation.
- Navigation complète au clavier, ordre de tabulation logique, focus visible.
- Textes alternatifs sur les images porteuses de sens ; images décoratives
  marquées comme telles.
- Labels associés à chaque champ de formulaire ; erreurs annoncées et reliées au
  champ concerné.
- Structure de titres cohérente : un seul H1, hiérarchie sans saut.
- Contraste suffisant, taille de cible tactile suffisante sur mobile.
- Contrôles média (lecteur audio) accessibles au clavier et étiquetés.

## Pièges fréquents du code généré par IA
- `div` cliquable au lieu d'un bouton.
- Icônes seules sans nom accessible.
- Focus supprimé pour des raisons esthétiques.
- Messages d'erreur uniquement visuels (couleur).

## Contrôles à effectuer
- Parcourir l'application entière au clavier seul.
- Passer un outil d'audit d'accessibilité et traiter les résultats.
- Vérifier chaque formulaire avec un lecteur d'écran ou l'arbre d'accessibilité.

## Critères d'implantation correcte
- Chaque parcours principal réalisable sans souris.
- Aucun contrôle interactif sans nom accessible.

## À vérifier dans les sources
- Exigences détaillées et outils recommandés : The Foundation, The Industry.
