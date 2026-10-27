# Rapport de contrôle — 27 octobre 2026

## Résultat
Implémentation fonctionnelle sur la branche de travail dev, construite et testée localement. Publication publique bloquée par les données et validations listées dans CONTENT_TODO.md. Aucun déploiement de production effectué.

## Contrôles exécutés
- Installation des dépendances et lockfile npm.
- `npm run check` : 0 erreur, 0 avertissement, 0 indication.
- `npm run lint` : succès.
- `npm run build` : succès, 3 pages statiques + robots.txt et sitemap.xml.
- `npm test` : 7 tests réussis : structure/IDs, ancres, assets/routes, noindex, absence de contacts fictifs/trackers, attributs accessibles et budget images/JS.
- Chrome via l’API Playwright du navigateur de travail : hero, sections enfant/sport, navigation vers ancres, état actif, menu mobile ouverture/fermeture, Escape, fermeture après sélection, accordéon FAQ.
- Rendus mobile contrôlés dans des iframes de 320 et 390 px ; tablette 768 px ; desktop environ 1348 px. Il s’agit de viewports CSS, pas de téléphones physiques.
- Débordements : contrôle DOM à 305 px utiles et 753 px utiles, scrollWidth égal à clientWidth après corrections. Aucun débordement de contenu observé sur les autres vues inspectées.
- Images chargées, cadrages des principales sections inspectés ; images générées clairement distinguées de photos réelles.
- Console : aucune erreur de code applicatif observée ; message indépendant de l’extension du navigateur (`chrome-extension://…`) exclu du diagnostic du site.
- Les CTA de rendez-vous conduisent à la section contact et à son état d’attente explicite.

## Captures
`docs/screenshots/` : hero desktop/mobile, enfant desktop/mobile, sport desktop/mobile, page complète desktop.
La capture complète desktop utilise un cadre de contrôle avec chargement explicite des images différées. Les captures mobiles comportent les marges grises du cadre de contrôle.
La capture mobile complète a été tentée ; le service navigateur a expiré sur la capture de 13 399 px. Les trois captures mobiles par section sont disponibles. Aucun fichier mobile complet n’est annoncé comme livré.

## Correctifs effectués
- Configuration du serveur de développement et autorisation explicite du host d’aperçu.
- Import des polices corrigé ; sources WOFF2 latines locales, vrai italique Fraunces.
- Dépendance ESLint manquante ajoutée, test des alt vides adapté à la sortie HTML valide d’Astro.
- Header compact sur petits écrans ; entrées Enfant/Sport remontées avant les actions sur largeur ≤380 px.
- Motif technique Sport et rotation du fond du hero contenus dans le viewport.
- Page de contrôle responsive retirée des fichiers publics avant le build final.

## Limites explicites
- Firefox, WebKit/Safari, zoom système, lecteurs d’écran et appareils physiques non testés.
- Aucun audit Lighthouse ni mesure terrain LCP/INP/CLS ; les cibles du brief ne sont pas des scores obtenus.
- Reduced motion et absence de JS contrôlés par inspection du code et des structures natives, pas par changement de préférence système dans le navigateur.
- Pas de certification WCAG AA : focus, structure, contrastes de base et contrôles natifs préparés ; audit complet à réaliser avant diffusion.
- Relecture médicale et déontologique finale nécessaire. Références officielles recherchées, mais accès intégral au PDF ONPP 2026 bloqué (403), voir REGULATORY_REVIEW.md.
- Portrait et coordonnées réels manquants, biographie et terrain sportif non inventés, articles/FAQ à compléter.

## Git
Inspection initiale : seul README.md présent ; dev, main et preprod sur a3e5f8101bb2021019fff614e76b837e3a75d2a7. Pas de workflow de déploiement dans le dépôt initial. Changements réservés à dev ; main et preprod préservées. Livraison via API GitHub car le push CLI n’a pas de credential disponible.
