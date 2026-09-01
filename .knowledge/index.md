# Base de connaissances — CHRONOS INSTRU LAB

Point d'entrée pour déterminer **quelles fiches consulter** avant une
implantation. Lire `AGENTS.md` d'abord (règles non négociables + protocole).

Les fiches sont des extraits opérationnels. **Les documents originaux dans
`.knowledge/sources/` restent la référence complète** : les consulter dès que
le sujet est sensible, ambigu ou insuffisamment couvert par une fiche.

## Routage par demande

| Si la demande touche… | Fiches à lire |
| --- | --- |
| Une page, un composant, un formulaire | `frontend/ux-states.md`, `frontend/accessibility.md`, `security/xss.md`, `security/frontend-security.md` |
| Une route serveur / server function / API | `backend/api-security.md`, `backend/validation.md`, `backend/error-handling.md`, `backend/rate-limiting.md`, `auth/authorization.md` |
| Une table, une migration, une requête | `database/database-security.md`, `database/rls.md`, `database/data-exposure.md` |
| Connexion, session, mot de passe, rôle | `auth/authentication.md`, `auth/authorization.md`, `auth/roles-permissions.md`, `backend/rate-limiting.md` |
| Une clé, un token, une variable d'env | `security/secrets.md`, `security/attack-surface.md` |
| Headers, CSP, iframe, CORS | `security/security-headers.md`, `security/attack-surface.md` |
| Upload, fichier, téléchargement de beat | `architecture/files-storage.md`, `auth/authorization.md`, `database/data-exposure.md` |
| Stripe, webhook, service tiers | `architecture/integrations.md`, `backend/api-security.md`, `backend/error-handling.md` |
| Abonnement, plan, licence, panier | `architecture/saas-patterns.md`, `auth/authorization.md`, `architecture/integrations.md` |
| Lenteur, chargement, SEO, rendu | `frontend/performance.md`, `database/data-exposure.md` |
| Données personnelles, RGPD, hébergement | `compliance/privacy.md`, `compliance/data-residency.md` |
| Erreurs, logs, audit trail | `backend/error-handling.md`, `compliance/privacy.md` |

## Domaines et fiches

### Sécurité — `security/`
- `attack-surface.md` — surface d'attaque, points d'entrée, réduction.
- `secrets.md` — clés, tokens, variables d'environnement, exposition client.
- `xss.md` — rendu de contenu utilisateur, HTML brut, injection.
- `security-headers.md` — CSP, clickjacking, en-têtes de réponse.
- `frontend-security.md` — hypothèses de confiance côté client, gating UI.

### Backend — `backend/`
- `api-security.md` — authn/authz sur endpoints, BOLA, mass assignment.
- `validation.md` — validation d'entrées côté serveur.
- `rate-limiting.md` — limites, endpoints sensibles, anti-abus.
- `error-handling.md` — erreurs sûres, catégories, logs, audit trail.

### Base de données — `database/`
- `database-security.md` — privilèges, clés, injections, index et coût.
- `rls.md` — Row Level Security, couverture, preuve d'activation.
- `data-exposure.md` — sur-exposition de colonnes et de lignes.

### Authentification & autorisation — `auth/`
- `authentication.md` — sessions, login, reset, redirect URLs.
- `authorization.md` — ownership, rôles appliqués côté serveur.
- `roles-permissions.md` — modèle de rôles, admin, séparation.

### Architecture — `architecture/`
- `saas-patterns.md` — plans, gating, abonnements, états de compte.
- `files-storage.md` — buckets, URLs signées, accès aux fichiers.
- `integrations.md` — webhooks, idempotence, clés tierces.

### Frontend — `frontend/`
- `ux-states.md` — loading / empty / error / success, formulaires.
- `performance.md` — chargement, images, requêtes, SEO, mesure.
- `accessibility.md` — sémantique, clavier, contraste, labels.

### Conformité — `compliance/`
- `privacy.md` — minimisation, collecte, conservation, droits.
- `data-residency.md` — résidence vs souveraineté des données.

## Reviewers — quand lancer quoi

`.knowledge/reviewers/` contient 18 fiches. Chacune indique son domaine, son
périmètre d'inspection, ce qu'il ne doit pas modifier, les fiches à consulter,
les défauts prioritaires et le format de rapport (sévérité / emplacement /
problème / preuve / impact / correction recommandée).

| Fiche | Lancer après une modification touchant… |
|---|---|
| `reviewers/cipher.md` | clés, variables d'environnement, config, intégrations |
| `reviewers/warden.md` | route ou fonction serveur, API, autorisation |
| `reviewers/sentinel.md` | authentification, sessions, zones protégées |
| `reviewers/aegis.md` | toute fonctionnalité sensible (revue sécurité globale) |
| `reviewers/vault.md` | schéma, migration, politique RLS, requêtes |
| `reviewers/throttle.md` | endpoint sensible ou coûteux |
| `reviewers/atlas.md` | logique métier, états, asynchrone |
| `reviewers/iris.md` | UI, formulaires, responsive, design system |
| `reviewers/vertex.md` | rendu, chargement, médias, SEO |
| `reviewers/forge.md` | structure du projet, refactor, nouveaux modules |
| `reviewers/ledger.md` | commandes, licences, prix, paiements |
| `reviewers/courier.md` | storage, upload, téléchargement de fichiers |
| `reviewers/trace.md` | analytics, événements, métriques affichées |
| `reviewers/scribe.md` | erreurs, logging, audit trail |
| `reviewers/prism.md` | données personnelles, collecte, conservation |
| `reviewers/echo.md` | audio, player, prévisualisation |
| `reviewers/l10n.md` | textes d'interface, traductions, formats |
| `reviewers/guardian.md` | toujours, en revue finale transversale |

## Sources

`.knowledge/sources/` — documents originaux, non modifiés, référence complète du
projet (voir `.knowledge/sources/README.md`) :
`The_foundation.docx`, `The_mastery.docx`, `The_industry.docx`,
`The_Vault.docx`, `The_Pit.docx`.

