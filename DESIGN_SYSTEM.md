# Sauge signature — design system

## Principes
Material Design 3 sert de base aux rôles de couleur, surfaces, états et composants. Implémentation CSS légère, sans bibliothèque Android. Composition éditoriale, hero organique et photographique, deux univers distincts au sein d’une identité unique.

## Tokens
Dans `src/styles/global.css` : primary #365C4C / on-primary blanc (CTA contrasté), primary-container #D7E5DD ; secondary #1E3552 / blanc ; tertiary #8B4936 / blanc ; sauge identité #8FA99A ; terracotta décoratif #C97A62 ; surface #F6F1EA ; surface-container #FFFCF7 ; on-surface #2C2A28 ; outline #7B857C ; or décoratif #B9A37A.
Le sauge moyen n’est pas un fond pour du petit texte blanc.

Fraunces Variable : titres, citations, narration. Manrope Variable : texte et interface. Polices latines auto-hébergées. Titres fluides avec clamp ; paragraphes 12–16 px selon densité, interligne 1.8 ; les labels décoratifs sont plus petits et ne portent pas seuls une information essentielle.

Espacement : base 4/8 px, 12/16/24/32/48/64/96 ; gouttière fluide 24–80 px. Rayons 12/20 px, pilules 99 px, masques organiques localisés. Élévation discrète, bordures de surface.

## Composants
Layout : SEO, polices, header/footer. Header : menu disclosure, Escape, fermeture extérieure et sortie du focus. Logo : monogramme provisoire. Button : primary/secondary, hover/focus/active. Photo : srcset 480/960/1440, eager uniquement hero. Icon : SVG décoratifs cohérents. Expertise : composition réutilisable Enfant/Sport. Soins, conseils et FAQ : details/summary natifs, accessibles sans JS.

## Responsive
Desktop >1050 px : navigation horizontale, hero et sections sur deux colonnes. Tablette 701–1050 : menu compact. Mobile ≤700 : photo raccourcie en tête, expertises côte à côte dans le hero, puis sections et cartes empilées. Menu non modal, ordre clavier naturel. Sans JS, navigation visible.

## Mouvement
Entrée courte au scroll par IntersectionObserver, aucun texte caché. Header sticky avec teinte et flou modéré après 24 px. Photos des expertises : déplacement borné via scroll-driven animations avec fallback statique. Hover photo des cartes. Pas de boucle requestAnimationFrame ; scroll header limité à une frame. Reduced motion désactive toutes animations et transitions ; parallaxe absente en mobile.

## Identité
Neuf SVG (horizontal, vertical, monogramme × sauge, graphite, monochrome), favicon simplifié SVG + PNG 16/32/48/180. À remplacer après validation d’Aurélie. Les fichiers SVG logo utilisent des polices de repli pour le texte : convertir en contours lors de la finalisation imprimerie.
