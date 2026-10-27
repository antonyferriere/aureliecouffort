# Validation des contenus — Aurélie Couffort

Version de développement du 24 octobre 2026. Aucun déploiement en production.

## Intentions confirmées par les sources
- Nom : Aurélie Couffort ; activité de pédicurie-podologie dans le brief.
- Deux axes prioritaires : enfant et sport (positionnements éditoriaux, pas qualifications reconnues).
- Direction Sauge signature : chaleur, rigueur, clarté pédagogique.
- Couleurs et Fraunces/Manrope : propositions de formalisation de la DA.
- Citation sur la complexité du pied : questionnaire fourni, ponctuation normalisée.

## Propositions à relire
- Promesse du hero et formulation narrative ; aucun résultat de soins garanti.
- Textes des expertises, soins et déroulement de consultation.
- Réponses non systématiques sur les semelles, conseils et FAQ.
- Monogramme AC provisoire : validation professionnelle et déontologique nécessaire.
- Illustration historique anatomique : usage et légendes à valider, pas diagnostic.

## Bloquants avant publication
- Titre professionnel définitif, identité et inscription ordinale, RPPS, informations requises.
- Adresse, ville (non supposée), téléphone, email, horaires, accès PMR, stationnement, transports.
- Prestations exactes, tarifs, remboursements, conventionnement et modalités d’ordonnance.
- URL réelle de prise de rendez-vous, durée des consultations.
- Responsable de publication, hébergeur, domaine et mentions légales complètes.
- Politique de confidentialité liée à l’hébergement réel et aux éventuels outils tiers.
- Relecture médicale des textes, validation du logo et des droits sur tous les visuels.
- Retrait de tous les placeholders ; ne pas activer PUBLIC_INDEXABLE avant cette validation.

## Enfant
Âges accueillis, motifs, déroulement réel du bilan, observation marche/posture, examens et équipements, éventuelles indications des orthèses, modalités de suivi, formations vérifiables. Aucune systématisation des bilans ou des semelles.

## Sport
Sports pratiqués et accompagnés, parcours personnel, expérience de terrain, collaborations publiables, formations vérifiables, examens précis, matériel, semelles et suivi. Le bloc « expérience de terrain » est explicitement en attente : aucun sport ni résultat attribué à Aurélie.

## Médias et pédagogie
Portrait réel, photographies du cabinet et matériel, autorisations des personnes représentées, articles cliniques complets. Les quatre images générées sont des ambiances génériques, pas des photographies de patients ou du cabinet. Les contenus manquants restent signalés, avec lorem ipsum uniquement dans les zones non documentées.

## Où intervenir
`src/data/site.ts` : navigation, configuration, expertises, soins, consultation, conseils, FAQ.
`src/pages/index.astro` : narration et composition des sections complémentaires.
`public/images/` : WebP locaux remplaçables.
`src/components/Logo.astro` et `public/logos/` : identité provisoire.
`src/pages/mentions-legales.astro` et `confidentialite.astro` : informations juridiques à finaliser.
