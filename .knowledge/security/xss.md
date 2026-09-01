# XSS et rendu de contenu non fiable

Source principale : The Vault (Module 1).

## Principes
- XSS survient quand une application rend du contenu contrôlé par
  l'utilisateur sans échappement, permettant l'exécution de script dans le
  navigateur d'un autre utilisateur.
- Le framework échappe par défaut ; les vulnérabilités viennent des sorties de
  secours (injection de HTML brut, insertion directe dans le DOM, URLs).

## Exigences de construction
- Ne jamais rendre de HTML brut fourni par un utilisateur. Si un format riche
  est requis, définir une liste blanche de balises et assainir côté serveur.
- Traiter comme non fiable : titres de beats, noms d'artistes, descriptions,
  messages, noms de fichiers, paramètres d'URL, contenus importés.
- Valider les URLs avant de les utiliser dans un lien ou une source média
  (schémas autorisés uniquement).
- Valider et normaliser les entrées côté serveur (voir `backend/validation.md`)
  en plus de l'échappement à l'affichage.

## Pièges fréquents du code généré par IA
- Utilisation d'une injection de HTML brut pour afficher du texte formaté.
- Interpolation d'entrée utilisateur dans un attribut de style, de lien ou de
  source média.
- Assainissement effectué uniquement côté client.

## Contrôles à effectuer
- Rechercher systématiquement toutes les injections de HTML brut et
  manipulations directes du DOM, et tracer l'origine de la donnée affichée.
- Tester chaque champ texte avec une charge utile de script et vérifier
  l'affichage littéral.

## Critères d'implantation correcte
- Zéro rendu de HTML non assaini d'origine utilisateur.
- Test de charge utile sur chaque champ libre affiché ailleurs dans l'app.

## À vérifier dans les sources
- Liste complète des vecteurs XSS traités et outils de scan : The Vault.
