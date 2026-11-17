# Validation des contenus — Aurélie Couffort

Version de développement du 17 novembre 2026. Aucun déploiement en production.

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

## Informations intégrées le 17 novembre 2026
Identité professionnelle, RPPS 10006131683, adresse, deux téléphones de la plaque, horaires, accès et transports, tarifs, conventionnement, moyens de paiement, visites à domicile, langues, diplômes et expérience depuis 2013. Liens profil et réservation Doctolib opérationnels. Trois photos du cabinet intégrées en WebP responsive.

## À finaliser avant publication
- Statut juridique, SIREN/SIRET selon situation, email professionnel, informations ordinales et responsable de publication.
- Hébergeur réel (coordonnées et journaux techniques), domaine, politique de conservation applicable.
- Modalités précises d’accessibilité, stationnement, durée des consultations et conditions de prise en charge.
- Relecture médicale des textes proposés et réponses cliniques, validation du logo et des droits sur les visuels.
- Portrait réel, sports pratiqués, interventions et collaborations à documenter.
- Retrait des placeholders avant activation de PUBLIC_INDEXABLE.

## Enfant
Âges accueillis, motifs, déroulement réel du bilan, observation marche/posture, examens et équipements, éventuelles indications des orthèses, modalités de suivi, formations vérifiables. Aucune systématisation des bilans ou des semelles.

## Sport
Sports pratiqués et accompagnés, parcours personnel, expérience de terrain, collaborations publiables, formations vérifiables, examens précis, matériel, semelles et suivi. Le bloc « expérience de terrain » est explicitement en attente : aucun sport ni résultat attribué à Aurélie.

## Médias et pédagogie
Portrait réel, photographies complémentaires du matériel, autorisations des personnes représentées, articles cliniques complets. Les quatre images générées sont des ambiances génériques, pas des photographies de patients ou du cabinet. Les contenus manquants restent signalés, avec lorem ipsum uniquement dans les zones non documentées.

## Où intervenir
`src/data/site.ts` : navigation, configuration, expertises, soins, consultation, conseils, FAQ.
`src/pages/index.astro` : narration et composition des sections complémentaires.
`public/images/` : WebP locaux remplaçables.
`src/components/Logo.astro` et `public/logos/` : identité provisoire.
`src/pages/mentions-legales.astro` et `confidentialite.astro` : informations juridiques à finaliser.
