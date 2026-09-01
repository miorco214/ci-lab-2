# Performance, rendu et SEO

Source principale : The Foundation (Layer 1, où le code s'exécute), The Pit
(performance base de données), The Mastery (chargement de dashboard).

## Principes
- Mesurer avant d'optimiser : une affirmation de performance sans mesure n'est
  pas une preuve.
- Architecture server-first quand le framework et le cas d'usage le permettent :
  moins de code et moins de données envoyés au client.
- La performance perçue dépend surtout du premier rendu et du poids des médias.

## Exigences de construction
- Charger côté serveur ce qui peut l'être ; n'envoyer au client que ce dont
  il a besoin pour interagir.
- Images : formats adaptés, dimensions explicites, chargement différé hors du
  premier écran.
- Audio : ne pas précharger les pistes ; ne charger la prévisualisation qu'à la
  demande.
- Listes : pagination et requêtes indexées (voir `database/database-security.md`).
- Éviter les requêtes en cascade et les appels redondants au montage.
- SEO : titre < 60 caractères avec mot-clé, description < 160, un seul H1,
  HTML sémantique, textes alternatifs, balise canonique, viewport responsive,
  données structurées lorsque pertinent. Chaque page de contenu a ses propres
  métadonnées.

## Pièges fréquents du code généré par IA
- Tout le contenu rendu côté client, y compris ce qui est statique.
- Images non optimisées et non dimensionnées.
- Requêtes non paginées sur des listes destinées à grandir.
- Métadonnées génériques dupliquées sur toutes les pages.

## Contrôles à effectuer
- Mesurer avant/après avec un outil de mesure réel, pas une impression.
- Vérifier le nombre et la taille des requêtes réseau au chargement.
- Vérifier les métadonnées page par page.

## Critères d'implantation correcte
- Toute optimisation revendiquée est accompagnée d'une mesure avant/après.
- Aucune page de contenu sans métadonnées propres.

## À vérifier dans les sources
- Détails sur le rendu serveur/client et le chargement d'images :
  The Foundation, Layer 1.
