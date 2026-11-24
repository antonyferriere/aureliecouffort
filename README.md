# Aurélie Couffort — site vitrine

One-page statique pour la podologie de l’enfant et du sport. Direction « Sauge signature » : hero photographique, deux parcours éditoriaux, soins, consultation, présentation, anatomie, conseils, FAQ et contact. Version de développement à valider ; aucun déploiement en production.

## Démarrer
Node >=22.23.4 (Node 24.22.1 utilisé), npm >=9.6.5.

```sh
npm ci
npm run dev
npm run check
npm run lint
npm run build
npm test
npm run preview
```

Le build produit `dist/`, sans serveur applicatif. `npm test` vérifie le dernier build : lancer build avant test. Aucun secret requis.

## Architecture
- Astro 7, TypeScript strict, CSS moderne, JS natif sans framework client.
- `src/layouts/Layout.astro` : document, SEO, polices locales, header/footer.
- `src/components/` : Header, Logo, Icon, Button, Photo, Expertise.
- `src/data/site.ts` : configuration du cabinet, contenus et FAQ typés.
- `src/pages/index.astro` : composition des 12 séquences éditoriales.
- `src/pages/` : mentions, confidentialité, robots et sitemap.
- `src/styles/global.css` : tokens Material 3 personnalisés, responsive et motion.
- `src/scripts/interactions.ts` : navigation, état actif, scroll et révélations progressives.
- `public/images/`, `public/logos/` : images optimisées et identité provisoire.
- `tests/` : tests des sorties HTML et budgets de poids.
- `docs/screenshots/` : captures de contrôle lorsqu’elles sont disponibles.

Les expertises sont des données et un composant réutilisables pour de futures pages dédiées ; aucune page SEO vide n’est créée.

## Configuration avant publication
`.env.example` documente `SITE_URL` et `PUBLIC_INDEXABLE`. Par défaut : noindex/nofollow, robots Disallow, sitemap sans URL. Une production indexable nécessite explicitement `PUBLIC_INDEXABLE=true` ET une `SITE_URL` HTTPS validée. Le build rejette l’activation sans URL. Ne pas activer avant résolution de CONTENT_TODO.md. Héberger la préproduction avec restriction d’accès si confidentialité nécessaire : robots n’est pas un contrôle d’accès.

Les liens de rendez-vous sont centralisés dans `src/data/site.ts` et pointent vers la réservation Doctolib. Les coordonnées, tarifs, horaires, accès et qualifications proviennent des pièces fournies le 17 novembre 2026. Les informations non documentées restent à confirmer. Ne pas collecter de données de santé via un formulaire générique.

Le host `terminal.local` est autorisé uniquement dans la configuration de développement pour l’aperçu de travail.

## Déploiement en préproduction

Un push sur `preprod` lance le build Astro et ses tests, publie `dist/` via FTPS explicite, puis compare la page d’accueil HTTPS au fichier construit. Le build conserve l’indexation désactivée.

Dans l’environnement GitHub `PREPROD`, renseigner les paramètres suivants.

| Type | Nom | Valeur |
| --- | --- | --- |
| Variable | `FTP_SERVER` | Nom d’hôte FTPS fourni par o2switch, sans protocole ni port. Le certificat doit couvrir ce nom. |
| Variable | `SITE_URL` | URL HTTPS finale de la page d’accueil de préproduction d’Aurélie. |
| Secret | `FTP_USERNAME` | Identifiant complet du compte dédié. |
| Secret | `FTP_PASSWORD` | Mot de passe du compte. |
| Secret | `FTP_DIR` | Dossier distant terminé par `/`. Utiliser `/` si le compte est déjà limité au dossier du site. |
| Secret facultatif | `FTP_PORT` | Port FTPS explicite, par défaut `21`. |

## Documents
- DESIGN_SYSTEM.md : palette, composants, mobile et motion.
- CONTENT_TODO.md : validé / provisoire / manquant / bloquant.
- ASSETS.md : provenance et statut des images.
- REGULATORY_REVIEW.md : références officielles et limites de vérification.
- QA_REPORT.md : contrôles effectivement exécutés et limites.
- CHANGELOG.md : changements livrés.

## Branches
Travail exclusivement sur `dev`. Ne modifier ni `main` ni `preprod`. Aucun déploiement en production.
