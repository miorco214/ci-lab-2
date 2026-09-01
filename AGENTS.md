<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# CHRONOS INSTRU LAB — Règles du projet

Vente de beats (instrumentaux) en ligne. Ce fichier définit les règles **non
négociables**. Il est volontairement court : les détails opérationnels vivent
dans `.knowledge/` (voir `.knowledge/index.md`), et les documents originaux
complets restent dans `.knowledge/sources/`.

Ces règles sont dérivées des cinq documents de référence (The Foundation, The
Mastery, The Industry, The Vault, The Pit), **transformées en exigences de
construction « build-first »** : on construit correctement dès le départ, on
n'ajoute pas la sécurité après coup.

## 1. Règles non négociables

1. Toujours consulter la fiche `.knowledge` pertinente **avant** d'implanter.
2. Security-by-design : la sécurité fait partie de la conception, jamais d'un
   correctif ultérieur.
3. Aucun secret dans le code client ni dans quoi que ce soit envoyé au
   navigateur (clés de service, secrets d'API, webhooks secrets, tokens).
4. Une protection frontend n'est **jamais** une protection : masquer un bouton,
   une route ou un champ ne protège rien.
5. Authentification **et** autorisation réellement appliquées côté serveur sur
   toute opération protégée.
6. Vérifier l'autorisation sur les ressources appartenant à un utilisateur
   (ownership) avant lecture, modification ou suppression.
7. Interdire la modification de champs non explicitement autorisés
   (pas de mass assignment : liste blanche de champs).
8. Ne retourner au client que les données réellement nécessaires.
9. Valider toutes les entrées côté serveur, avec un schéma explicite.
10. Rate limiting sur les opérations sensibles (auth, e-mail, paiement,
    téléchargement, endpoints coûteux).
11. Jamais de détails internes en production : pas de stack trace, de nom de
    table, de requête SQL ni d'information sensible dans une erreur ou un log.
12. Défense en profondeur : plusieurs couches, jamais une protection unique.
13. Permissions minimales et séparation des responsabilités.
14. Une protection n'existe pas parce qu'un fichier, un middleware, un
    validateur ou un limiter existe : vérifier qu'il est **réellement appliqué
    sur le chemin d'exécution** concerné.
15. Quand un problème de sécurité est trouvé, chercher le **même pattern**
    partout ailleurs dans le projet (défauts répliqués).
16. Posture cohérente entre toutes les parties du projet.
17. États `loading`, `empty`, `error`, `success` imposés partout où pertinent.
18. Architecture server-first quand le framework et le cas d'usage le
    permettent ; ne pas exposer inutilement logique ou données au client.
19. Mesurer les performances avant de prétendre les avoir optimisées.
20. Un résultat d'outil ou une affirmation d'agent n'est pas une preuve.
21. Exiger des preuves quand une protection critique est déclarée fonctionnelle.
22. Ne jamais désactiver une protection pour faire disparaître une erreur.
23. Toute modification sensible doit pouvoir être auditée.
24. Aucune fonctionnalité ne contourne ces règles parce que c'est plus facile.

## 2. Protocole de travail

1. Comprendre la demande.
2. Identifier les domaines concernés.
3. Consulter les fiches `.knowledge` pertinentes (`.knowledge/index.md`).
4. Consulter les documents originaux (`.knowledge/sources/`) lorsque le sujet
   est sensible, ambigu ou insuffisamment couvert par les fiches.
5. Construire la fonctionnalité conformément aux exigences.
6. Vérifier son fonctionnement réel (pas seulement « ça compile »).
7. Lancer les reviewers concernés (`.knowledge/reviewers/`).
8. Analyser leurs rapports.
9. Corriger les problèmes réels.
10. Re-vérifier lorsque nécessaire.
11. Ne considérer l'étape terminée qu'après une vérification satisfaisante.

## 3. Reviewers

Les reviewers sont des sous-agents d'inspection en lecture seule. Ils
**ne modifient jamais le projet** : ils inspectent, cherchent les problèmes et
produisent un rapport exploitable. L'agent principal reste responsable des
corrections.

Après toute implantation ou modification importante :
lancer les reviewers pertinents (en arrière-plan), lire leurs rapports,
corriger les problèmes réels, puis seulement conclure.

| Reviewer | Domaine |
| --- | --- |
| `cipher` | Secrets, credentials, tokens, clés exposés |
| `warden` | Backend, API, autorisation, exposition de données |
| `sentinel` | Authentification, sessions, frontières d'accès |
| `aegis` | Revue sécurité globale, défense en profondeur, surface d'attaque |
| `vault` | Base de données, RLS, isolation, injections, privilèges |
| `throttle` | Rate limiting, anti-abus, endpoints sensibles |
| `atlas` | Bugs de logique, états impossibles, erreurs asynchrones |
| `iris` | UI/UX, responsive, accessibilité, états, design system |
| `vertex` | Performance, rendu, chargement, SEO |
| `forge` | Architecture, organisation du code, cohérence structurelle |
| `ledger` | Commandes, licences, prix, paiements, logique commerciale |
| `courier` | Storage, fichiers, téléchargements, livraison sécurisée |
| `trace` | Analytics, événements, attribution, cohérence des mesures |
| `scribe` | Erreurs, logging, audit trail, fuites dans les logs |
| `prism` | Données personnelles, minimisation, conservation |
| `echo` | Audio, player, prévisualisation, médias |
| `l10n` | Internationalisation, traductions, textes non traduisibles |
| `guardian` | Revue finale transversale, défauts inter-domaines |

Sévérités autorisées : `CRITICAL`, `WARNING`, `SUGGESTION`.

Un reviewer ne déclare pas « sécurisé » parce qu'il ne voit pas de problème
immédiatement : il fournit des éléments vérifiables pour ses conclusions sur
toute protection importante. Les audits sont **systématiques** sur leur
périmètre, pas par échantillonnage.

## 4. Persistance

`AGENTS.md`, `.knowledge/` (fiches, reviewers, sources) sont versionnés dans le
dépôt et doivent être conservés lors d'un remix du projet. Ne pas les déplacer
hors du dépôt, ne pas les ignorer via `.gitignore`, ne pas remplacer les
documents originaux par leurs fiches.
