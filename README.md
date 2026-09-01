# CHRONOS INSTRU LAB 

Nous allons commencer par poser les fondations de CHRONOS INSTRU LAB, une app de vente des beats (instrumentaux) en ligne. Ne construis encore aucune fonctionnalité métier, aucune page de vente, aucun système d’authentification, aucun paiement et aucun dashboard. Cette étape doit uniquement établir une base de projet propre, cohérente, documentée, sécurisée et conçue pour être conservée lors d’un remix.

Le projet doit utiliser les cinq documents de référence déjà fournis dans les sources du projet : The Foundation, The Mastery, The Industry, The Vault et The Pit.

Ces documents constituent la source de référence du projet pour les bonnes pratiques d’architecture, frontend, backend, API, base de données, authentification, autorisation, sécurité, validation, gestion des erreurs, performance, SEO, déploiement, audit, conformité et qualité. Les recommandations écrites dans ces documents sont initialement souvent formulées comme des contrôles ou des audits après implantation. Pour CHRONOS INSTRU LAB, transforme-les en exigences de construction « build-first » : nous voulons construire correctement dès le départ plutôt que construire rapidement puis essayer de sécuriser après.

Crée dans le dépôt une structure de connaissances persistante qui sera conservée avec le projet lors d’un remix :

AGENTS.md

.knowledge/ ├── index.md ├── security/ │ ├── attack-surface.md │ ├── secrets.md │ ├── xss.md │ ├── security-headers.md │ └── frontend-security.md ├── backend/ │ ├── api-security.md │ ├── validation.md │ ├── rate-limiting.md │ └── error-handling.md ├── database/ │ ├── database-security.md │ ├── rls.md │ └── data-exposure.md ├── auth/ │ ├── authentication.md │ ├── authorization.md │ └── roles-permissions.md ├── architecture/ │ ├── saas-patterns.md │ ├── files-storage.md │ └── integrations.md ├── frontend/ │ ├── ux-states.md │ ├── performance.md │ └── accessibility.md └── compliance/ ├── privacy.md └── data-residency.md

.knowledge/reviewers/ ├── cipher.md ├── warden.md ├── sentinel.md ├── aegis.md ├── vault.md ├── throttle.md ├── atlas.md ├── iris.md ├── vertex.md ├── forge.md ├── ledger.md ├── courier.md ├── trace.md ├── scribe.md ├── prism.md ├── echo.md ├── l10n.md └── guardian.md

Conserve également les cinq documents originaux dans un emplacement clairement identifié du projet comme sources de référence complètes, sans les modifier ni les remplacer par les résumés. Si leur emplacement actuel est déjà adapté, conserve-le.

AGENTS.md doit être court, clair et centré sur les règles non négociables du projet. Il doit notamment établir les principes suivants issus des documents :

toujours consulter la base de connaissances pertinente avant une implantation ;

construire avec une approche security-by-design et non ajouter la sécurité après coup ;

ne jamais placer de secrets dans le code client ou dans ce qui est envoyé au navigateur ;

ne jamais considérer une protection frontend comme une protection suffisante ;

authentification et autorisation doivent être réellement appliquées sur les opérations protégées ;

vérifier l’autorisation sur les ressources appartenant à un utilisateur ;

empêcher les modifications de champs non explicitement autorisés ;

ne retourner au client que les données réellement nécessaires ;

valider les entrées ;

appliquer le rate limiting aux opérations sensibles ;

ne jamais exposer les détails internes, stack traces, noms de tables ou informations sensibles dans les erreurs de production ;

appliquer une défense en profondeur plutôt qu’une protection unique ;

privilégier les permissions minimales et la séparation des responsabilités ;

ne jamais considérer qu’une protection existe simplement parce qu’un fichier, middleware, validateur ou limiter existe : vérifier qu’il est réellement utilisé sur le chemin d’exécution concerné ;

lorsqu’un problème de sécurité est découvert, rechercher également les occurrences du même pattern dans le reste du projet afin d’éviter les défauts répliqués ;

maintenir une posture cohérente entre toutes les parties du projet ;

imposer les états loading, empty, error et success lorsque pertinents ;

privilégier une architecture server-first lorsque le framework et le cas d’usage le permettent ;

ne pas exposer inutilement de logique ou de données au client ;

mesurer les performances avant de prétendre les optimiser ;

ne pas considérer un résultat d’outil ou une affirmation d’agent comme une preuve suffisante ;

demander des preuves lorsqu’une protection critique est déclarée fonctionnelle ;

ne jamais désactiver une protection simplement pour faire disparaître une erreur ;

toute modification sensible doit pouvoir être auditée ;

aucune fonctionnalité ne doit contourner les règles du projet simplement parce qu’elle est plus facile à implémenter.

AGENTS.md doit également imposer un protocole de travail général :

comprendre la demande ;

identifier les domaines concernés ;

consulter les fiches .knowledge pertinentes ;

consulter les documents originaux lorsque le sujet est sensible, ambigu ou insuffisamment couvert par les fiches ;

construire la fonctionnalité conformément aux exigences ;

vérifier son fonctionnement réel ;

lancer les reviewers concernés ;

analyser leurs rapports ;

corriger les problèmes réels ;

effectuer une nouvelle vérification lorsque nécessaire ;

ne considérer l’étape terminée qu’après une vérification satisfaisante.

Les reviewers ne doivent pas modifier directement le projet. Leur rôle est d’inspecter, de rechercher les problèmes et de produire des rapports exploitables. L’agent principal reste responsable des corrections.

Crée ensuite .knowledge/index.md. Ce fichier doit permettre à un agent de déterminer rapidement quelles fiches consulter selon une demande. Il doit relier chaque domaine à ses fiches et indiquer que les documents originaux restent la référence complète.

Les fiches .knowledge/ doivent être de véritables fiches opérationnelles et non de simples résumés. Pour chaque sujet, extrais uniquement ce que les cinq documents permettent d’établir et organise l’information sous une forme facile à appliquer :

principes ;

exigences de construction dès le départ ;

pièges fréquents du code généré par IA ;

contrôles à effectuer ;

critères permettant de considérer l’implantation correcte ;

points nécessitant une vérification plus approfondie dans les documents originaux.

Ne complète pas artificiellement les documents avec des affirmations qui ne sont pas supportées par eux. Lorsque les sources ne permettent pas d’établir une règle précise, indique qu’une vérification supplémentaire est nécessaire.

Les reviewers doivent être spécialisés et complémentaires.

Cipher : recherche les secrets, credentials, tokens, clés et informations sensibles exposés dans le projet, y compris les problèmes liés à leur présence dans le code ou dans l’historique lorsque cela est applicable.

Warden : vérifie backend, API, autorisation, contrôles d’accès, exposition des données et respect des permissions.

Sentinel : vérifie authentification, sessions, frontières d’accès et protections associées.

Aegis : réalise une revue globale de sécurité et recherche les défauts de défense en profondeur, les hypothèses de confiance côté client et les surfaces d’attaque.

Vault : vérifie base de données, isolation des données, RLS ou mécanismes équivalents, injections, privilèges et exposition excessive.

Throttle : vérifie rate limiting, protections contre les abus et les endpoints sensibles.

Atlas : recherche les bugs de logique, états impossibles, erreurs asynchrones, incohérences et défauts fonctionnels.

Iris : vérifie UI, UX, responsive, accessibilité, états d’interface et cohérence du design system.

Vertex : vérifie performance, architecture de rendu, chargement, SEO et risques de régression de performance.

Forge : vérifie architecture générale, organisation du code, cohérence entre modules et qualité structurelle.

Ledger : vérifie les futures fonctionnalités liées aux commandes, licences, prix, paiements et logique commerciale.

Courier : vérifie storage, fichiers, téléchargements, contrôle d’accès aux fichiers et livraison sécurisée.

Trace : vérifie analytics, événements, attribution et cohérence entre les données réellement mesurées et ce que l’interface prétend mesurer.

Scribe : vérifie erreurs, logging, audit trail et absence d’informations sensibles dans les logs.

Prism : vérifie exposition des données personnelles, minimisation, collecte, conservation et cohérence avec les principes de confidentialité présents dans les documents.

Echo : vérifie les futures fonctionnalités audio, player, prévisualisation et téléchargements liés aux médias.

L10n : vérifie internationalisation, cohérence des traductions et absence de texte d’interface impossible à traduire correctement.

Guardian : réalise une revue finale transversale et recherche notamment les défauts qui auraient pu être manqués parce qu’ils se trouvent à la frontière de plusieurs domaines.

Chaque fichier reviewer doit définir :

son domaine ;

ce qu’il doit inspecter ;

ce qu’il ne doit pas modifier ;

les fiches .knowledge qu’il doit consulter ;

les défauts prioritaires à rechercher ;

l’obligation de vérifier l’enforcement réel plutôt que la simple présence de code de sécurité ;

l’obligation de rechercher les patterns similaires ailleurs lorsque cela est pertinent ;

un format de rapport cohérent avec au minimum : sévérité, emplacement, problème, preuve, impact et correction recommandée.

Utilise les niveaux de sévérité suivants :

CRITICAL WARNING SUGGESTION

Un reviewer ne doit pas déclarer « sécurisé » simplement parce qu’il ne voit pas immédiatement de problème. Il doit fournir des éléments vérifiables pour ses conclusions lorsqu’il s’agit d’une protection importante.

Les audits futurs doivent rechercher les problèmes dans leur domaine de manière systématique et non par simple échantillonnage. Lorsqu’un pattern dangereux est découvert, rechercher ses occurrences similaires dans l’ensemble du périmètre pertinent.

Prépare également AGENTS.md pour que les futures demandes sachent que les reviewers pertinents doivent être exécutés après une implantation ou une modification importante, puis que leurs rapports doivent être examinés et que les problèmes réels doivent être corrigés avant de considérer la tâche terminée.

Note: À chaque requête, tu dois lancer ces sous agents en arrière plan avant de terminer la session puis tu fais des corrections selon leurs rapports.

Ne construis aucune fonctionnalité de CHRONOS INSTRU LAB pendant cette étape. Ne crée pas encore l’authentification, Stripe, Supabase, les beats, le catalogue, le player ou les dashboards. Nous préparons uniquement le système de gouvernance, de connaissances et de revue qui servira à construire toutes ces fonctionnalités correctement par la suite.

Avant de terminer, vérifie uniquement que la structure documentaire créée est cohérente, que les références entre AGENTS.md, .knowledge/index.md, les fiches et les reviewers sont cohérentes, et qu’elle est conçue pour rester présente lors d’un remix du projet.

Ne prétends pas avoir effectué une vérification de sécurité complète de l’application : à ce stade, il n’existe pas encore de fonctionnalité métier à auditer.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2005a560-d7d0-4b30-812e-bb57e3bb5baf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
