# KPEKPE_USER_STORIES_MVP.md

> **Document officiel des User Stories — MVP V1**
> Format : `En tant que [persona], je veux [action] afin de [bénéfice]`
> Statut : Référence Produit & Développement — 2026
> Priorités : 🔴 P0 (bloquant MVP) · 🟠 P1 (important) · 🟡 P2 (utile)

---

## Index

- [US-AUTH — Authentification](#us-auth--authentification)
- [US-ONBOARD — Onboarding](#us-onboard--onboarding)
- [US-PARCOURS — Mon parcours](#us-parcours--mon-parcours)
- [US-ORIENT — Parcours d'orientation](#us-orient--parcours-dorientation)
- [US-KPE — Assistant Kpé](#us-kpe--assistant-kpé)
- [US-RESULT — Résultats](#us-result--résultats)
- [US-RECO — Recommandations](#us-reco--recommandations)
- [US-METIER — Catalogue Métiers](#us-metier--catalogue-métiers)
- [US-FORM — Catalogue Formations](#us-form--catalogue-formations)
- [US-ORGA — Catalogue Organisations](#us-orga--catalogue-organisations)
- [US-FAVORI — Favoris](#us-favori--favoris)
- [US-LEARNIA — Ressources Learnia](#us-learnia--ressources-learnia)
- [US-PROFIL — Profil utilisateur](#us-profil--profil-utilisateur)
- [US-SEARCH — Recherche globale](#us-search--recherche-globale)
- [US-NAV — Navigation et expérience globale](#us-nav--navigation-et-expérience-globale)
- [US-ERROR — Gestion des erreurs et cas limites](#us-error--gestion-des-erreurs-et-cas-limites)
- [US-ADMIN — Administration](#us-admin--administration)

---

## Personas

| Code | Persona | Description |
|---|---|---|
| **VIS** | Visiteur | Non connecté. Arrive via Google, réseau social ou bouche-à-oreille. |
| **APP** | Apprenant | Connecté. 15–25 ans. Lycéen, étudiant, reconversion. Persona principal. |
| **ADM** | Administrateur | Équipe Kpékpé. Gère le contenu et les données. |

---

## Critères d'acceptation — Convention

Pour chaque User Story, les critères d'acceptation (CA) décrivent les conditions précises qui permettent de valider que la fonctionnalité est correctement implémentée.

---

## US-AUTH — Authentification

---

### US-AUTH-01 🔴
**En tant que visiteur**, je veux créer un compte avec mon adresse email et un mot de passe, afin d'accéder à mon espace personnel et commencer mon orientation.

**Critères d'acceptation :**
- CA1 : Le formulaire contient les champs : Email, Mot de passe, Confirmation du mot de passe, case CGU
- CA2 : L'email doit être au format valide (validation côté client et serveur)
- CA3 : Le mot de passe doit contenir au minimum 8 caractères
- CA4 : Les deux mots de passe doivent être identiques
- CA5 : La case CGU doit être cochée pour que le bouton soit actif
- CA6 : Si l'email est déjà utilisé, un message d'erreur clair est affiché : « Un compte existe déjà avec cet email. »
- CA7 : Après soumission réussie, l'utilisateur reçoit un email de vérification et voit l'écran E03 (vérification email)
- CA8 : Le bouton affiche un état de chargement pendant l'appel API
- CA9 : Le mot de passe est masqué par défaut avec une option toggle pour le voir

**Pages concernées :** E02 — Inscription

---

### US-AUTH-02 🔴
**En tant que visiteur**, je veux vérifier mon adresse email en cliquant sur un lien envoyé par Kpékpé, afin d'activer mon compte.

**Critères d'acceptation :**
- CA1 : Un email contenant un lien de vérification est envoyé dans les 2 minutes suivant l'inscription
- CA2 : Le lien de vérification est valide pendant 24 heures
- CA3 : Après clic sur le lien valide : le compte est activé, l'utilisateur est redirigé vers l'onboarding (E07)
- CA4 : Si le lien est expiré : un message d'erreur s'affiche avec un bouton [Renvoyer l'email]
- CA5 : L'utilisateur peut demander le renvoi de l'email depuis l'écran E03, avec un délai de 60 secondes entre deux envois
- CA6 : Si l'utilisateur tente de se connecter sans avoir vérifié son email, un message clair lui indique qu'il doit d'abord vérifier son email

**Pages concernées :** E03 — Vérification email

---

### US-AUTH-03 🔴
**En tant qu'utilisateur inscrit**, je veux me connecter avec mon email et mon mot de passe, afin d'accéder à mon espace personnel.

**Critères d'acceptation :**
- CA1 : Le formulaire contient les champs Email et Mot de passe
- CA2 : En cas d'identifiants incorrects : message d'erreur « Email ou mot de passe incorrect. »
- CA3 : En cas de compte non vérifié : message « Vérifie ta boîte mail pour activer ton compte. » avec lien [Renvoyer l'email]
- CA4 : Après connexion réussie : redirection vers Mon parcours (E10 ou E11 selon état)
- CA5 : Si l'utilisateur venait d'une page protégée, il est redirigé vers cette page après connexion
- CA6 : Un lien « Mot de passe oublié ? » est présent et fonctionnel
- CA7 : Le bouton affiche un état de chargement pendant l'appel API
- CA8 : Le JWT access token (15 min) et refresh token (7 jours) sont stockés de façon sécurisée

**Pages concernées :** E04 — Connexion

---

### US-AUTH-04 🔴
**En tant qu'utilisateur**, je veux réinitialiser mon mot de passe via mon email, afin de retrouver l'accès à mon compte si je l'ai oublié.

**Critères d'acceptation :**
- CA1 : L'utilisateur saisit son email sur la page E05
- CA2 : Si l'email existe en base : un email de réinitialisation est envoyé dans les 2 minutes
- CA3 : Si l'email n'existe pas : le message affiché est identique (ne pas révéler qu'un compte n'existe pas)
- CA4 : Le lien de réinitialisation est valide pendant 1 heure
- CA5 : Sur la page E06 : l'utilisateur saisit un nouveau mot de passe (8 caractères minimum) et sa confirmation
- CA6 : Après réinitialisation réussie : l'utilisateur est redirigé vers la page de connexion avec un message de succès
- CA7 : Le lien de réinitialisation ne peut être utilisé qu'une seule fois

**Pages concernées :** E05 — Mot de passe oublié · E06 — Réinitialisation

---

### US-AUTH-05 🔴
**En tant qu'utilisateur connecté**, je veux que ma session soit maintenue automatiquement, afin de ne pas être obligé de me reconnecter à chaque visite.

**Critères d'acceptation :**
- CA1 : L'access token est renouvelé automatiquement à l'aide du refresh token avant expiration
- CA2 : Si le refresh token est expiré, l'utilisateur est redirigé vers la connexion avec le message E40
- CA3 : Le message de session expirée indique que ses données sont sauvegardées
- CA4 : Après reconnexion, l'utilisateur est redirigé vers la page sur laquelle il était

**Pages concernées :** E40 — Session expirée

---

### US-AUTH-06 🟠
**En tant qu'utilisateur connecté**, je veux me déconnecter de mon compte, afin de sécuriser mon accès sur un appareil partagé.

**Critères d'acceptation :**
- CA1 : Un bouton [Déconnexion] est accessible depuis la sidebar et le menu Mon profil
- CA2 : Après déconnexion : les tokens sont invalidés (blacklist du refresh token)
- CA3 : L'utilisateur est redirigé vers la Landing page
- CA4 : Aucune donnée personnelle n'est conservée en cache navigateur après déconnexion

**Pages concernées :** Sidebar · E33 Mon profil

---

## US-ONBOARD — Onboarding

---

### US-ONBOARD-01 🔴
**En tant que nouvel utilisateur**, je veux être guidé pour compléter mon profil en 3 étapes simples, afin que Kpékpé puisse personnaliser mon expérience dès le départ.

**Critères d'acceptation :**
- CA1 : L'onboarding est déclenché automatiquement après la vérification email si `onboarding_termine = false`
- CA2 : L'onboarding ne peut pas être ignoré ou contourné
- CA3 : Une barre de progression (Étape X/3) est visible en haut de chaque étape
- CA4 : Un message court de Kpé est affiché en haut de chaque étape pour guider et rassurer
- CA5 : Le bouton [Retour] est disponible à partir de l'étape 2
- CA6 : À la fin de l'étape 3, `onboarding_termine` passe à `true` et l'utilisateur est redirigé vers E10

**Pages concernées :** E07 · E08 · E09 — Onboarding

---

### US-ONBOARD-02 🔴
**En tant que nouvel utilisateur**, je veux saisir mon prénom et mon nom à la première étape de l'onboarding, afin que l'interface me parle personnellement.

**Critères d'acceptation :**
- CA1 : Les champs Prénom et Nom sont obligatoires
- CA2 : Chaque champ accepte entre 2 et 100 caractères
- CA3 : La validation est effectuée à la soumission de l'étape
- CA4 : Le prénom est utilisé dans les messages personnalisés dès l'étape suivante

**Pages concernées :** E07 — Onboarding étape 1

---

### US-ONBOARD-03 🔴
**En tant que nouvel utilisateur**, je veux renseigner ma région, mon niveau d'études et ma série (si lycéen), afin que Kpékpé puisse adapter ses recommandations à ma situation géographique et scolaire réelle.

**Critères d'acceptation :**
- CA1 : La Région est un sélecteur avec les régions du Togo (Maritime, Distric du Grand Lomé,,Plateaux;Centrale,Kara,Savanes)
- CA2 : Le Niveau d'études est un sélecteur : Collège · Lycée · Baccalauréat · Université · Reconversion professionnelle
- CA3 : Le champ Série (A4, C, D, F, G) s'affiche uniquement si le niveau sélectionné est « Lycée »
- CA4 : Région et Niveau sont obligatoires. Série est obligatoire si Lycée est sélectionné.
- CA5 : La logique conditionnelle (affichage de la Série) fonctionne en temps réel sans rechargement

**Pages concernées :** E08 — Onboarding étape 2

---

### US-ONBOARD-04 🟠
**En tant que nouvel utilisateur**, je veux sélectionner les langues que je parle, afin que Kpékpé puisse affiner mon profil.

**Critères d'acceptation :**
- CA1 : Les langues disponibles sont au minimum : Français, Éwé, Kabiyè, Anglais, Autres
- CA2 : La sélection est en multi-choix (plusieurs langues possibles)
- CA3 : Français est présélectionné par défaut
- CA4 : Au moins une langue doit être sélectionnée

**Pages concernées :** E09 — Onboarding étape 3

---

## US-PARCOURS — Mon parcours

---

### US-PARCOURS-01 🔴
**En tant qu'utilisateur sans résultat**, je veux voir une page d'accueil personnelle qui m'invite à commencer mon orientation, afin de comprendre ce que je dois faire en premier.

**Critères d'acceptation :**
- CA1 : La salutation affiche « Bonjour [Prénom] 👋 »
- CA2 : Une card principale explique le parcours d'orientation avec la durée estimée (20 min)
- CA3 : Un bouton [Commencer mon orientation] est bien visible et centré
- CA4 : Un message de Kpékpé donne envie de commencer
- CA5 : Cette page est affichée uniquement si aucun `ResultatOrientation` n'existe pour l'utilisateur

**Pages concernées :** E10 — Mon parcours (avant test)

---

### US-PARCOURS-02 🔴
**En tant qu'utilisateur ayant complété son orientation**, je veux voir un tableau de bord synthétique de mon parcours, afin d'avoir une vue d'ensemble et accéder rapidement aux éléments importants.

**Critères d'acceptation :**
- CA1 : Le profil type et le score global sont affichés sous forme de résumé compact
- CA2 : Le Top 3 métiers recommandés est affiché sous forme de mini-cards avec titre et score
- CA3 : Les 2–3 derniers favoris sont affichés avec un lien vers la liste complète
- CA4 : 2–3 ressources Learnia liées aux métiers recommandés sont suggérées
- CA5 : Un bloc suggestions de Kpé propose une prochaine action contextuelle
- CA6 : Les boutons [Voir mon résultat complet], [Explorer d'autres métiers] et [Refaire l'orientation] sont accessibles
- CA7 : La date du dernier test est affichée

**Pages concernées :** E11 — Mon parcours (après test)

---

### US-PARCOURS-03 🟠
**En tant qu'utilisateur avec une session d'orientation interrompue**, je veux voir une invitation à reprendre là où j'en étais, afin de ne pas perdre ma progression.

**Critères d'acceptation :**
- CA1 : Si une `SessionOrientation` avec `statut = en_cours` existe, une card de reprise est affichée en premier sur Mon parcours
- CA2 : La card indique le nombre de questions déjà répondues et le nombre restant
- CA3 : Le bouton [Reprendre là où j'en étais] recharge le questionnaire à la question `index_question` sauvegardée
- CA4 : Un lien [Recommencer depuis le début] est disponible en secondaire
- CA5 : Si l'utilisateur choisit de recommencer, une confirmation est demandée : « Ton avancement actuel sera perdu. »

**Pages concernées :** E10 · E11 · E12

---

## US-ORIENT — Parcours d'orientation

---

### US-ORIENT-01 🔴
**En tant qu'utilisateur**, je veux voir une présentation claire du parcours d'orientation avant de commencer, afin de savoir ce qui m'attend et me préparer mentalement.

**Critères d'acceptation :**
- CA1 : L'écran affiche : description du parcours, durée estimée (20 min), rappel que je peux faire une pause
- CA2 : L'avatar ou l'illustration de Kpé est présent pour introduire le personnage
- CA3 : Si une session est en cours, deux options sont proposées : [Reprendre] ou [Recommencer]
- CA4 : Si aucune session en cours, un unique bouton [C'est parti !] est affiché
- CA5 : Le clic sur [C'est parti !] crée une `SessionOrientation` en base avec `statut = en_cours`

**Pages concernées :** E12 — Présentation du parcours

---

### US-ORIENT-02 🔴
**En tant qu'utilisateur**, je veux répondre aux questions d'orientation une par une dans une interface claire, afin de me concentrer sur chaque question sans être distrait.

**Critères d'acceptation :**
- CA1 : Une seule question est affichée à la fois, jamais plus
- CA2 : Le texte de la question est affiché en typographie lisible et de grande taille
- CA3 : Le numéro de question est visible (ex. : « Question 6 sur 18 »)
- CA4 : Le label de la dimension active est affiché (ex. : « Ce que tu aimes faire »)
- CA5 : Le bouton [Continuer] n'est actif qu'après qu'une réponse ait été fournie
- CA6 : Le bouton [Question précédente] permet de revenir en arrière (sauf à la première question)
- CA7 : La réponse précédemment saisie est pré-remplie quand l'utilisateur revient en arrière
- CA8 : La progression est sauvegardée en base à chaque réponse validée (`index_question` mis à jour)

**Pages concernées :** E13 · E14 · E15 · E16 — Questions

---

### US-ORIENT-03 🔴
**En tant qu'utilisateur**, je veux répondre à une question à choix unique en sélectionnant une option parmi une liste, afin d'exprimer ma préférence clairement.

**Critères d'acceptation :**
- CA1 : Les options sont affichées sous forme de boutons ou cards sélectionnables
- CA2 : Un seul choix peut être actif à la fois
- CA3 : L'option sélectionnée est visuellement distinguée (couleur, coche, bordure)
- CA4 : Après sélection, le bouton [Continuer] devient actif
- CA5 : La réponse est envoyée à l'API uniquement au clic sur [Continuer], pas au clic sur l'option

**Pages concernées :** E13 — Question choix unique

---

### US-ORIENT-04 🔴
**En tant qu'utilisateur**, je veux répondre à une question à choix multiple en sélectionnant plusieurs options, afin de pouvoir exprimer des préférences qui ne s'excluent pas.

**Critères d'acceptation :**
- CA1 : Plusieurs options peuvent être sélectionnées simultanément
- CA2 : Chaque option sélectionnée est visuellement distinguée
- CA3 : Un compteur optionnel indique combien d'options sont sélectionnées
- CA4 : Au moins une option doit être sélectionnée pour activer [Continuer]
- CA5 : Si un nombre maximum de sélections est défini, il est indiqué clairement (ex. : « Sélectionne jusqu'à 3 »)

**Pages concernées :** E14 — Question choix multiple

---

### US-ORIENT-05 🔴
**En tant qu'utilisateur**, je veux répondre à une question ouverte en saisissant librement ma réponse dans un champ texte, afin de m'exprimer avec mes propres mots.

**Critères d'acceptation :**
- CA1 : Un textarea est affiché avec un placeholder contextuel (ex. : « Décris ce qui te passionne... »)
- CA2 : La saisie doit contenir au minimum 3 caractères pour activer [Continuer]
- CA3 : Un compteur de caractères est visible (limite : 500 caractères)
- CA4 : La réponse est sauvegardée dans `ReponseUtilisateur.texte_libre`

**Pages concernées :** E15 — Question texte libre

---

### US-ORIENT-06 🔴
**En tant qu'utilisateur**, je veux répondre à une question sur une échelle de 1 à 5, afin d'exprimer un niveau d'intensité ou d'accord.

**Critères d'acceptation :**
- CA1 : L'échelle est représentée par 5 boutons ou un slider
- CA2 : Les labels des extrémités sont toujours affichés (ex. : « Pas du tout » — « Totalement »)
- CA3 : La valeur sélectionnée est mise en évidence
- CA4 : Une valeur doit être sélectionnée pour activer [Continuer]
- CA5 : La valeur est sauvegardée dans `ReponseUtilisateur.valeur_echelle`

**Pages concernées :** E16 — Question échelle

---

### US-ORIENT-07 🟠
**En tant qu'utilisateur bloqué sur une question**, je veux pouvoir demander l'aide de Kpé, afin de débloquer ma réflexion et continuer mon parcours.

**Critères d'acceptation :**
- CA1 : Un bouton [J'ai besoin d'aide] est visible sur chaque écran de question
- CA2 : Si l'utilisateur reste inactif plus de 30 secondes, le bouton pulse légèrement pour attirer l'attention
- CA3 : Le clic ouvre le mode guidage E17 (panneau latéral desktop / bottom sheet mobile)
- CA4 : Le mode guidage affiche une reformulation bienveillante de la question par Kpé
- CA5 : Des questions ouvertes de relance sont proposées
- CA6 : L'utilisateur peut fermer le guidage et revenir à la question initiale sans perdre sa saisie

**Pages concernées :** E17 — Mode guidage Kpé

---

### US-ORIENT-08 🔴
**En tant qu'utilisateur ayant répondu à toutes les questions**, je veux voir un écran de calcul me confirmant que mon profil est en cours d'analyse, afin de patienter avec une attente positive.

**Critères d'acceptation :**
- CA1 : L'écran affiche une animation douce (non anxiogène) et un message de Kpé (ex. : « Kpé analyse tes réponses... »)
- CA2 : L'écran dure entre 3 et 10 secondes (temps réel du scoring backend)
- CA3 : L'appel API de scoring (`POST /api/v1/orientation/sessions/{id}/finish/`) est déclenché
- CA4 : Après réponse de l'API : redirection automatique vers E19 (Résultats — Mon profil)
- CA5 : En cas d'erreur API : message d'erreur avec bouton [Réessayer] — les réponses ne sont pas perdues

**Pages concernées :** E18 — Traitement / Calcul

---

### US-ORIENT-09 🟠
**En tant qu'utilisateur**, je veux pouvoir interrompre mon orientation et la reprendre plus tard, afin de ne pas être obligé de tout faire d'une seule traite.

**Critères d'acceptation :**
- CA1 : La progression est sauvegardée automatiquement après chaque réponse validée
- CA2 : Quand l'utilisateur quitte la page (navigation, fermeture d'onglet), aucun message de perte de données n'est affiché
- CA3 : À la prochaine connexion, Mon parcours affiche la card de reprise (US-PARCOURS-03)
- CA4 : La reprise charge exactement la question à l'index `index_question` sauvegardé

**Pages concernées :** E10 · E11 · E12 · E13–E16

---

## US-KPE — Assistant Kpékpé

---

### US-KPE-01 🔴
**En tant qu'utilisateur**, je veux pouvoir poser une question à Kpé depuis n'importe quelle page de l'application, afin d'obtenir de l'aide sur mon orientation sans quitter mon contexte.

**Critères d'acceptation :**
- CA1 : Un bouton [Poser une question à Kpé] ou une icône flottante discrète est accessible depuis toutes les pages authentifiées
- CA2 : Le clic ouvre un panneau latéral (desktop : 320px à droite) ou une bottom sheet (mobile)
- CA3 : Le panneau affiche un en-tête avec l'avatar de Kpé et la mention « Kpé — Ton conseiller »
- CA4 : L'historique des échanges de la session est affiché
- CA5 : Un champ de saisie avec bouton [Envoyer] est disponible en bas du panneau
- CA6 : Le panneau se ferme via une croix ou un clic en dehors (desktop)

**Pages concernées :** E35 — Panneau Kpé

---

### US-KPE-02 🔴
**En tant qu'utilisateur**, je veux recevoir des réponses de Kpé en lien avec mon orientation, afin d'obtenir des clarifications adaptées à ma situation.

**Critères d'acceptation :**
- CA1 : Kpé répond en français, avec des phrases courtes (2–3 maximum par réponse)
- CA2 : Les réponses de Kpé sont contextualisées selon la page en cours (ex. : sur la fiche d'un métier, Kpé peut en parler)
- CA3 : Un indicateur d'écriture (3 points animés) s'affiche pendant que Kpé génère sa réponse
- CA4 : Si la question est hors du périmètre orientation, Kpé redirige poliment : « Je suis ici pour t'aider sur ton orientation. Peut-être que tu pourrais me demander... »
- CA5 : En cas d'indisponibilité du LLM, une réponse fallback prédéfinie est affichée sans message d'erreur technique

**Pages concernées :** E35 — Panneau Kpé

---

### US-KPE-03 🟠
**En tant qu'utilisateur qui consulte une fiche métier**, je veux que Kpé me dise si ce métier correspond à mon profil, afin d'avoir un avis personnalisé en contexte.

**Critères d'acceptation :**
- CA1 : Sur la fiche métier, si l'utilisateur a un résultat IKIGAI, un bloc Kpé affiche automatiquement un commentaire court (1–2 phrases)
- CA2 : Le commentaire est basé sur la compatibilité entre les mots-clés du profil et ceux du métier
- CA3 : Si l'utilisateur n'a pas encore de résultat, le bloc Kpé invite à faire le test : « Fais ton orientation pour savoir si ce métier te correspond. »
- CA4 : Le bloc Kpé est distinct visuellement du reste du contenu de la fiche

**Pages concernées :** E24 — Fiche métier

---

### US-KPE-04 🟠
**En tant qu'utilisateur en cours d'orientation**, je veux que Kpé m'accompagne avec des messages contextuels à chaque étape, afin de me sentir guidé et pas seul.

**Critères d'acceptation :**
- CA1 : Un message de Kpé est affiché sur l'écran de présentation du parcours (E12)
- CA2 : Un message de Kpé est affiché pendant l'écran de calcul (E18)
- CA3 : Un message de Kpé est affiché sur chaque étape de l'onboarding (E07–E09)
- CA4 : Les messages de Kpé sont courts, bienveillants et adaptés au contexte
- CA5 : Ces messages sont prédéfinis (templates), pas générés dynamiquement

**Pages concernées :** E07–E09 · E12 · E18 · E22

---

## US-RESULT — Résultats

---

### US-RESULT-01 🔴
**En tant qu'utilisateur ayant complété l'orientation**, je veux voir mon profil type et un résumé narratif de qui je suis, afin de me reconnaître dans les résultats avant de voir les recommandations.

**Critères d'acceptation :**
- CA1 : Le profil type est affiché en grand (ex. : « Analytique-Social »)
- CA2 : Un résumé en 2–3 phrases décrit le profil de façon personnalisée et bienveillante
- CA3 : Une visualisation des scores par dimension est affichée (barres horizontales ou graphique radar)
- CA4 : Les labels des dimensions utilisent le vocabulaire utilisateur (pas les codes techniques)
- CA5 : Les scores sont affichés en secondaire — le texte explicatif est prioritaire visuellement
- CA6 : Les mots-clés du profil sont affichés sous forme de chips/tags
- CA7 : Des onglets ou boutons permettent d'accéder aux sous-vues : Métiers · Formations · Conseils de Kpé
- CA8 : Un bouton [Explorer mes recommandations] est visible en CTA principal

**Pages concernées :** E19 — Résultats — Mon profil

---

### US-RESULT-02 🔴
**En tant qu'utilisateur**, je veux voir les 3 métiers les plus compatibles avec mon profil, avec leur score et l'explication du matching, afin de comprendre pourquoi ces métiers me correspondent.

**Critères d'acceptation :**
- CA1 : Exactement 3 métiers sont affichés, ordonnés par score décroissant
- CA2 : Chaque card affiche : rang (1er, 2ème, 3ème), titre du métier, score de compatibilité, raison textuelle
- CA3 : La raison textuelle est toujours présente (ex. : « Parce que tu aimes résoudre des problèmes et que tu as le sens du contact. »)
- CA4 : Un bouton [Découvrir ce métier] redirige vers la fiche métier complète (E24)
- CA5 : Une icône [♡] permet d'ajouter le métier aux favoris depuis la card
- CA6 : Un lien [Explorer d'autres métiers] est disponible en bas de la liste

**Pages concernées :** E20 — Résultats — Métiers recommandés

---

### US-RESULT-03 🔴
**En tant qu'utilisateur**, je veux voir les 3 formations les plus pertinentes pour mon profil, avec leur organisation et leur lien avec mes métiers recommandés, afin de savoir concrètement où me former au Togo.

**Critères d'acceptation :**
- CA1 : Exactement 3 formations sont affichées, ordonnées par score de pertinence
- CA2 : Chaque card affiche : titre de la formation, organisation (nom + ville), score de pertinence, force du lien avec le métier recommandé (directe / forte / possible)
- CA3 : Un bouton [Voir la formation] redirige vers la fiche formation (E26)
- CA4 : Une icône [♡] permet d'ajouter la formation aux favoris
- CA5 : Un lien [Explorer d'autres formations] est disponible en bas de la liste

**Pages concernées :** E21 — Résultats — Formations recommandées

---

### US-RESULT-04 🟠
**En tant qu'utilisateur**, je veux lire les conseils personnalisés de Kpé sur mes résultats, afin de mieux comprendre mon profil et savoir quoi faire ensuite.

**Critères d'acceptation :**
- CA1 : Kpé produit un texte de 2–4 paragraphes expliquant le profil et les recommandations
- CA2 : Des suggestions de prochaines étapes sont proposées (ex. : « Explore les fiches des métiers recommandés »)
- CA3 : Un bouton [Poser une question à Kpé] est disponible pour ouvrir le panneau de chat
- CA4 : Le contenu est affiché dans une mise en page lisible avec un ton chaleureux

**Pages concernées :** E22 — Résultats — Conseils de Kpé

---

### US-RESULT-05 🟠
**En tant qu'utilisateur**, je veux accéder à mes résultats passés depuis Mon parcours, afin de pouvoir les consulter à tout moment.

**Critères d'acceptation :**
- CA1 : Mon parcours (E11) affiche un lien [Voir mon résultat complet] qui redirige vers E19
- CA2 : La date du dernier test est affichée
- CA3 : L'utilisateur peut décider de refaire le test avec le bouton [Refaire l'orientation]
- CA4 : Si l'utilisateur refait le test, l'ancien résultat est conservé en base (historique)

**Pages concernées :** E11 · E19

---

## US-RECO — Recommandations

---

### US-RECO-01 🔴
**En tant que système backend**, je veux générer automatiquement les recommandations dès la fin du scoring, afin que l'utilisateur voit ses recommandations sans étape supplémentaire.

**Critères d'acceptation :**
- CA1 : L'endpoint `POST /api/v1/recommandations/generer/` est appelé automatiquement après la création de `ResultatOrientation`
- CA2 : L'algorithme de matching utilise les `mots_cles` du résultat vs les `mots_cles_matching` des métiers
- CA3 : Le `score_global` et le `score_par_dimension` sont calculés et stockés dans `RecommandationMetier`
- CA4 : La raison textuelle du matching est générée et stockée
- CA5 : En cas d'indisponibilité du LLM, le scoring déterministe produit tout de même les 3 métiers (fallback)
- CA6 : Les recommandations sont créées dans un délai < 10 secondes

---

### US-RECO-02 🟠
**En tant qu'utilisateur**, je veux que mes recommandations soient recalculées si je mets à jour mon profil scolaire, afin d'avoir des résultats toujours pertinents.

**Critères d'acceptation :**
- CA1 : Si l'utilisateur modifie son niveau d'études ou sa série dans Mon profil, un message lui indique que ses recommandations peuvent être mises à jour
- CA2 : Un bouton [Refaire mon orientation] lui est proposé
- CA3 : Les anciennes recommandations restent accessibles jusqu'à ce qu'un nouveau test soit complété

---

## US-METIER — Catalogue Métiers

---

### US-METIER-01 🔴
**En tant que visiteur ou utilisateur**, je veux parcourir la liste des métiers disponibles dans le catalogue, afin de découvrir des opportunités professionnelles.

**Critères d'acceptation :**
- CA1 : La liste est accessible sans compte (lecture partielle)
- CA2 : Les métiers sont affichés en grille de cards (4 colonnes desktop / 2 tablet / 1 mobile)
- CA3 : Chaque card affiche : icône secteur, titre, secteur (badge), niveau minimum, extrait des débouchés
- CA4 : Skeleton loaders affichés pendant le chargement
- CA5 : La pagination ou le scroll infini permet de naviguer dans les 350+ métiers

**Pages concernées :** E23 — Liste métiers

---

### US-METIER-02 🔴
**En tant que visiteur ou utilisateur**, je veux filtrer les métiers par secteur, niveau minimum requis et dimension IKIGAI dominante, afin de trouver rapidement les métiers pertinents.

**Critères d'acceptation :**
- CA1 : Les filtres sont affichés sous forme de badges toggle (actif/inactif) en haut de la liste
- CA2 : Les filtres disponibles : Secteur · Niveau minimum · Dimension dominante
- CA3 : Les filtres sont combinables (ET logique entre filtres actifs)
- CA4 : Un bouton [Réinitialiser les filtres] apparaît quand au moins un filtre est actif
- CA5 : L'application des filtres met à jour la liste sans rechargement de la page
- CA6 : Le nombre de résultats est affiché (ex. : « 23 métiers »)

**Pages concernées :** E23 — Liste métiers

---

### US-METIER-03 🔴
**En tant que visiteur ou utilisateur**, je veux consulter la fiche complète d'un métier, afin de comprendre en détail ce qu'il implique et ses débouchés au Togo.

**Critères d'acceptation :**
- CA1 : La fiche affiche : Titre, Secteur (badge), Niveau minimum requis, Description complète
- CA2 : Une section « Débouchés au Togo » est distinctement mise en avant
- CA3 : Une section « Salaires » affiche la fourchette en FCFA (si disponible, sinon masquée)
- CA4 : Une section « Compétences requises » affiche les compétences avec leur importance (critique / importante / utile)
- CA5 : Une section « Formations associées » affiche les formations liées sous forme de mini-cards cliquables
- CA6 : Si l'utilisateur est connecté et a un résultat, son score de compatibilité avec ce métier est affiché
- CA7 : Si l'utilisateur est connecté et a un résultat, un bloc Kpé affiche un commentaire court sur ce métier
- CA8 : Icône [♡ Ajouter aux favoris] toujours visible (invitant à se connecter si visiteur)

**Pages concernées :** E24 — Fiche métier

---

### US-METIER-04 🟠
**En tant qu'utilisateur**, je veux voir des métiers similaires en bas de la fiche, afin de découvrir d'autres opportunités proches.

**Critères d'acceptation :**
- CA1 : 3–4 métiers du même secteur ou ayant des compétences similaires sont affichés en bas de la fiche
- CA2 : Chaque suggestion est une mini-card cliquable

**Pages concernées :** E24 — Fiche métier

---

## US-FORM — Catalogue Formations

---

### US-FORM-01 🔴
**En tant que visiteur ou utilisateur**, je veux parcourir le catalogue des formations disponibles au Togo, afin de connaître les options de formation accessibles.

**Critères d'acceptation :**
- CA1 : La liste est accessible sans compte (lecture partielle)
- CA2 : Chaque card affiche : titre de la formation, organisation (nom + ville), domaine, niveau, durée, frais annuels (FCFA si disponible), statut candidature (badge coloré : ouvert / fermé / complet)
- CA3 : Skeleton loaders pendant le chargement
- CA4 : Pagination ou scroll infini

**Pages concernées :** E25 — Liste formations

---

### US-FORM-02 🔴
**En tant que visiteur ou utilisateur**, je veux filtrer les formations par domaine, niveau, statut de candidature et ville, afin de trouver rapidement celles qui correspondent à ma situation.

**Critères d'acceptation :**
- CA1 : Filtres disponibles : Domaine · Niveau · Statut candidature · Ville
- CA2 : Filtres combinables, avec [Réinitialiser les filtres]
- CA3 : Nombre de résultats affiché

**Pages concernées :** E25 — Liste formations

---

### US-FORM-03 🔴
**En tant que visiteur ou utilisateur**, je veux consulter la fiche complète d'une formation, afin de connaître tous les détails utiles pour ma décision.

**Critères d'acceptation :**
- CA1 : La fiche affiche : Titre, Organisation (nom + ville + type), Niveau, Durée, Statut candidature
- CA2 : Description complète de la formation
- CA3 : Conditions d'admission
- CA4 : Frais annuels en FCFA (si disponible, sinon affiché « Non renseigné »)
- CA5 : Section « Métiers associés » avec la force du lien (directe / forte / possible)
- CA6 : Card résumé de l'organisation proposant la formation
- CA7 : Bouton [Voir l'organisation] et icône [♡ Ajouter aux favoris]

**Pages concernées :** E26 — Fiche formation

---

## US-ORGA — Catalogue Organisations

---

### US-ORGA-01 🔴
**En tant que visiteur ou utilisateur**, je veux parcourir l'annuaire des établissements d'enseignement, afin de connaître les écoles, universités et centres de formation présents au Togo.

**Critères d'acceptation :**
- CA1 : La liste est accessible sans compte
- CA2 : Chaque card affiche : Logo ou initiales, Nom, Sigle, Type (badge), Ville, Badge « Partenaire Kpékpé » si applicable
- CA3 : Filtres disponibles : Type (université / lycée / centre de formation / bootcamp) · Statut (public / privé) · Ville

**Pages concernées :** E27 — Liste organisations

---

### US-ORGA-02 🔴
**En tant que visiteur ou utilisateur**, je veux consulter la fiche d'un établissement, afin de connaître ses formations, ses contacts et ses conditions d'admission.

**Critères d'acceptation :**
- CA1 : La fiche affiche : Nom, Sigle, Type, Statut, Badge partenaire, Description
- CA2 : Localisation (ville, adresse si disponible)
- CA3 : Contacts : téléphone, email, site web (lien externe, s'ouvre dans un nouvel onglet)
- CA4 : Liste des formations proposées avec lien vers chaque fiche formation

**Pages concernées :** E28 — Fiche organisation

---

## US-FAVORI — Favoris

---

### US-FAVORI-01 🔴
**En tant qu'utilisateur**, je veux ajouter un métier à mes favoris depuis n'importe quel endroit où il est affiché, afin de le retrouver facilement plus tard.

**Critères d'acceptation :**
- CA1 : L'icône [♡] est présente sur toutes les cards métier et sur la fiche métier
- CA2 : Le clic sur [♡] bascule l'état favori (optimistic update : l'icône change immédiatement)
- CA3 : Un toast success confirme l'ajout : « Métier ajouté à tes favoris »
- CA4 : Si l'utilisateur n'est pas connecté et clique sur [♡], une invite de connexion est affichée
- CA5 : L'état favori est synchronisé entre toutes les pages (si favorisé sur la fiche, la card en liste reflète l'état)

---

### US-FAVORI-02 🔴
**En tant qu'utilisateur**, je veux ajouter une formation à mes favoris, afin de constituer une liste de formations qui m'intéressent.

**Critères d'acceptation :**
- CA1 : Même comportement que US-FAVORI-01 mais pour les formations
- CA2 : Toast : « Formation ajoutée à tes favoris »

---

### US-FAVORI-03 🔴
**En tant qu'utilisateur**, je veux consulter la liste de tous mes favoris regroupés par type, afin de retrouver rapidement les éléments que j'ai sauvegardés.

**Critères d'acceptation :**
- CA1 : La page Mes favoris est organisée en onglets : Métiers | Formations
- CA2 : Chaque élément favori est affiché sous forme de card avec bouton [Voir la fiche] et icône [♥ Retirer]
- CA3 : Le retrait est confirmé par un toast : « Retiré de tes favoris »
- CA4 : L'état vide de chaque onglet est géré avec un message invitant à explorer le catalogue

**Pages concernées :** E29 · E30 — Mes favoris

---

### US-FAVORI-04 🟠
**En tant qu'utilisateur**, je veux voir mes derniers favoris directement sur Mon parcours, afin d'y accéder rapidement sans passer par la page Favoris.

**Critères d'acceptation :**
- CA1 : Les 2–3 derniers favoris (tous types confondus) sont affichés sur E11 Mon parcours
- CA2 : Un lien [Voir tous mes favoris] est présent

**Pages concernées :** E11 — Mon parcours

---

## US-LEARNIA — Ressources Learnia

---

### US-LEARNIA-01 🔴
**En tant qu'utilisateur**, je veux parcourir la liste des ressources pédagogiques disponibles, afin d'enrichir mes connaissances sur les métiers et les parcours d'orientation.

**Critères d'acceptation :**
- CA1 : Les ressources sont accessibles uniquement aux utilisateurs connectés
- CA2 : Chaque card affiche : Image, Titre, Catégorie (badge), Durée de lecture estimée
- CA3 : Filtres disponibles : Catégorie · Type de ressource
- CA4 : Barre de recherche disponible
- CA5 : Skeleton loaders pendant le chargement

**Pages concernées :** E31 — Liste ressources

---

### US-LEARNIA-02 🔴
**En tant qu'utilisateur**, je veux lire le contenu complet d'une ressource pédagogique, afin d'approfondir mes connaissances sur un sujet lié à mon orientation.

**Critères d'acceptation :**
- CA1 : La fiche affiche : Titre, Catégorie, Type, Durée de lecture, Image de couverture, Contenu complet (Markdown rendu)
- CA2 : Les métiers associés à la ressource sont affichés en bas avec liens vers leurs fiches
- CA3 : Un lien de navigation permet de revenir à la liste des ressources

**Pages concernées :** E32 — Fiche ressource

---

### US-LEARNIA-03 🟠
**En tant qu'utilisateur**, je veux voir des ressources recommandées en lien avec mes métiers recommandés sur Mon parcours, afin de découvrir du contenu pertinent sans chercher.

**Critères d'acceptation :**
- CA1 : 2–3 ressources sont affichées sur E11 Mon parcours, filtrées selon les métiers du Top 3
- CA2 : Les ressources suggérées sont différentes à chaque visite (rotation)

**Pages concernées :** E11 — Mon parcours

---

## US-PROFIL — Profil utilisateur

---

### US-PROFIL-01 🔴
**En tant qu'utilisateur**, je veux modifier mes informations personnelles (prénom, nom, langue), afin de maintenir mon profil à jour.

**Critères d'acceptation :**
- CA1 : Le formulaire est pré-rempli avec les valeurs actuelles
- CA2 : L'email n'est pas modifiable depuis cette page (champ lecture seule)
- CA3 : Le bouton [Enregistrer les modifications] déclenche l'API et affiche un toast success
- CA4 : Les erreurs de validation sont affichées inline sous chaque champ concerné

**Pages concernées :** E33 — Mon profil — Informations

---

### US-PROFIL-02 🟠
**En tant qu'utilisateur**, je veux mettre à jour ma situation scolaire (région, niveau, série), afin que mes futures recommandations restent pertinentes.

**Critères d'acceptation :**
- CA1 : Le formulaire est pré-rempli avec les valeurs actuelles
- CA2 : La logique conditionnelle (champ Série si Lycée) est appliquée
- CA3 : Après enregistrement, un message indique que l'orientation peut être refaite pour recalculer les recommandations
- CA4 : Toast success après sauvegarde

**Pages concernées :** E34 — Mon profil — Situation scolaire

---

### US-PROFIL-03 🟠
**En tant qu'utilisateur**, je veux changer mon mot de passe depuis mon espace profil, afin de sécuriser mon compte.

**Critères d'acceptation :**
- CA1 : Le formulaire contient : Mot de passe actuel, Nouveau mot de passe, Confirmation
- CA2 : Le nouveau mot de passe doit faire au moins 8 caractères
- CA3 : Si le mot de passe actuel est incorrect : message d'erreur « Mot de passe actuel incorrect »
- CA4 : Toast success après modification réussie

**Pages concernées :** E34 — Mon profil — Sécurité

---

## US-SEARCH — Recherche globale

---

### US-SEARCH-01 🟠
**En tant qu'utilisateur**, je veux effectuer une recherche globale depuis n'importe quelle page, afin de trouver rapidement un métier, une formation ou une organisation.

**Critères d'acceptation :**
- CA1 : La recherche est accessible via l'icône 🔍 dans la TopBar
- CA2 : Le clic ouvre un overlay de recherche ou déplie un champ inline selon le breakpoint
- CA3 : Les résultats s'affichent en temps réel à partir de 3 caractères saisis
- CA4 : Les résultats sont groupés par type : Métiers / Formations / Organisations
- CA5 : Chaque résultat est cliquable et redirige vers la fiche correspondante
- CA6 : Si aucun résultat : message « Aucun résultat pour "[terme]". »
- CA7 : La touche Échap ferme le champ/overlay de recherche

**Pages concernées :** E36 — Recherche globale

---

## US-NAV — Navigation et expérience globale

---

### US-NAV-01 🔴
**En tant qu'utilisateur**, je veux une sidebar de navigation fixe sur desktop, afin d'accéder à toutes les sections de l'application sans perdre mon contexte.

**Critères d'acceptation :**
- CA1 : La sidebar est fixe, largeur 240px, visible sur desktop
- CA2 : L'entrée active est visuellement distinguée
- CA3 : Les sous-menus (Explorer) se déplient en accordéon
- CA4 : La sidebar peut être repliée (64px, icônes seules) via un bouton toggle
- CA5 : L'état replié/déplié est mémorisé pour la session

---

### US-NAV-02 🔴
**En tant qu'utilisateur sur mobile**, je veux accéder à la navigation depuis un menu tiroir (Drawer), afin d'avoir accès à toutes les sections sans que la navigation n'occupe de l'espace permanent.

**Critères d'acceptation :**
- CA1 : Sur mobile (< 768px), la sidebar est remplacée par un Drawer
- CA2 : Le Drawer s'ouvre via le bouton ☰ dans la TopBar
- CA3 : Le Drawer se ferme via un clic sur la croix ou en dehors du Drawer
- CA4 : Une Bottom Navigation Bar optionnelle avec 4 entrées (Mon parcours · Explorer · Favoris · Profil) est disponible sur mobile

---

### US-NAV-03 🟠
**En tant qu'utilisateur**, je veux voir un fil d'Ariane (breadcrumb) sur desktop, afin de savoir où je suis dans l'arborescence du site.

**Critères d'acceptation :**
- CA1 : Le breadcrumb est affiché dans la TopBar sur desktop
- CA2 : Il est masqué sur mobile
- CA3 : Chaque niveau est cliquable et redirige vers la page correspondante
- CA4 : Format : Mon parcours > Résultats > Développeur Web

---

### US-NAV-04 🔴
**En tant que visiteur**, je veux accéder à la navigation publique depuis toutes les pages publiques, afin de me repérer et naviguer vers l'inscription ou les contenus.

**Critères d'acceptation :**
- CA1 : La TopBar publique est présente sur toutes les pages non authentifiées
- CA2 : Elle contient : Logo · Menu Découvrir (dropdown) · Comment ça marche · À propos · [Connexion] · [Commencer gratuitement]
- CA3 : Sur mobile, les liens se regroupent dans un menu hamburger

---

## US-ERROR — Gestion des erreurs et cas limites

---

### US-ERROR-01 🔴
**En tant qu'utilisateur**, je veux voir un message d'erreur clair en cas de perte de connexion internet, afin de savoir quoi faire pour continuer.

**Critères d'acceptation :**
- CA1 : L'écran E39 s'affiche avec une illustration, un message explicite et un bouton [Réessayer]
- CA2 : Si l'erreur survient pendant le questionnaire d'orientation, les réponses saisies ne sont pas perdues
- CA3 : Le bouton [Retour à l'accueil] est également disponible

**Pages concernées :** E39 — Erreur réseau

---

### US-ERROR-02 🔴
**En tant qu'utilisateur**, je veux voir les états vides avec un message clair et une action proposée, afin de ne jamais me retrouver face à une page blanche.

**Critères d'acceptation :**
- CA1 : Favoris vides (Métiers) → illustration + « Tu n'as pas encore sauvegardé de métiers. » + [Explorer les métiers]
- CA2 : Favoris vides (Formations) → illustration + « Tu n'as pas encore sauvegardé de formations. » + [Explorer les formations]
- CA3 : Résultats absent → E38 → illustration + [Commencer mon orientation]
- CA4 : Aucun résultat de recherche → illustration + message + [Réinitialiser les filtres]
- CA5 : Aucun résultat de catalogue après filtre → même traitement que CA4

**Pages concernées :** E37 · E38 · E23 · E25 · E27

---

### US-ERROR-03 🔴
**En tant qu'utilisateur**, je veux voir des skeleton loaders pendant le chargement des données, afin de ne pas voir de page blanche ou de saut brutal de contenu.

**Critères d'acceptation :**
- CA1 : Skeleton loaders présents sur toutes les listes du catalogue (métiers, formations, organisations, ressources)
- CA2 : Skeleton loaders présents sur les fiches détail pendant le premier chargement
- CA3 : Skeleton loaders présents sur les cards de Mon parcours
- CA4 : L'animation du skeleton est douce (pulse)

---

### US-ERROR-04 🟠
**En tant qu'utilisateur**, je veux que les données nullables soient gérées proprement dans l'interface, afin de ne pas voir de champs vides ou de textes « undefined ».

**Critères d'acceptation :**
- CA1 : Si les frais annuels d'une formation ne sont pas renseignés → afficher « Non renseigné »
- CA2 : Si l'adresse d'une organisation n'est pas renseignée → masquer le champ (ne pas afficher de ligne vide)
- CA3 : Si l'avatar d'un utilisateur n'est pas défini → afficher ses initiales dans un cercle coloré
- CA4 : Si la photo d'une card ressource n'est pas disponible → afficher un placeholder

---

## US-ADMIN — Administration

---

### US-ADMIN-01 🔴
**En tant qu'administrateur**, je veux accéder à une interface d'administration séparée pour gérer le contenu, afin de maintenir les données à jour sans toucher au code.

**Critères d'acceptation :**
- CA1 : L'interface admin est accessible via `/admin/` (Django admin)
- CA2 : L'accès est restreint aux utilisateurs avec `role = admin`
- CA3 : L'admin permet de : créer / modifier / supprimer des métiers, formations, organisations, ressources

---

### US-ADMIN-02 🔴
**En tant qu'administrateur**, je veux gérer les questions du parcours d'orientation depuis l'admin, afin de modifier le questionnaire sans intervention technique.

**Critères d'acceptation :**
- CA1 : Les questions sont modifiables dans l'admin avec leurs options et poids
- CA2 : Un seul test peut être actif à la fois (validation dans l'admin)
- CA3 : L'ordre des questions est modifiable via un champ `ordre`

---

### US-ADMIN-03 🟠
**En tant qu'administrateur**, je veux gérer les prompts système de Kpé depuis l'admin, afin de faire évoluer le comportement de l'IA sans modifier le code.

**Critères d'acceptation :**
- CA1 : Les prompts sont modifiables dans l'admin avec leur usage, version et statut actif
- CA2 : Un seul prompt actif par usage à la fois (validation dans l'admin)
- CA3 : L'historique des versions de prompt est conservé

---

## Récapitulatif des User Stories par priorité

### 🔴 P0 — Bloquant MVP (à livrer obligatoirement)

| ID | Titre court |
|---|---|
| US-AUTH-01 | Inscription |
| US-AUTH-02 | Vérification email |
| US-AUTH-03 | Connexion |
| US-AUTH-04 | Mot de passe oublié |
| US-AUTH-05 | Maintien de session JWT |
| US-ONBOARD-01 | Onboarding guidé |
| US-ONBOARD-02 | Étape 1 — Identité |
| US-ONBOARD-03 | Étape 2 — Situation scolaire |
| US-PARCOURS-01 | Mon parcours avant test |
| US-PARCOURS-02 | Mon parcours après test |
| US-ORIENT-01 | Présentation du parcours |
| US-ORIENT-02 | Questions une par une |
| US-ORIENT-03 | Question choix unique |
| US-ORIENT-04 | Question choix multiple |
| US-ORIENT-05 | Question texte libre |
| US-ORIENT-06 | Question échelle |
| US-ORIENT-08 | Écran de calcul |
| US-KPE-01 | Panneau Kpé accessible |
| US-KPE-02 | Réponses de Kpé |
| US-RESULT-01 | Profil type et résumé |
| US-RESULT-02 | Top 3 métiers recommandés |
| US-RESULT-03 | Top 3 formations recommandées |
| US-RECO-01 | Génération automatique des recommandations |
| US-METIER-01 | Liste des métiers |
| US-METIER-02 | Filtres métiers |
| US-METIER-03 | Fiche métier complète |
| US-FORM-01 | Liste des formations |
| US-FORM-02 | Filtres formations |
| US-FORM-03 | Fiche formation complète |
| US-ORGA-01 | Liste des organisations |
| US-ORGA-02 | Fiche organisation |
| US-FAVORI-01 | Ajouter métier aux favoris |
| US-FAVORI-02 | Ajouter formation aux favoris |
| US-FAVORI-03 | Page Mes favoris |
| US-LEARNIA-01 | Liste des ressources |
| US-LEARNIA-02 | Fiche ressource |
| US-PROFIL-01 | Modifier informations personnelles |
| US-NAV-01 | Sidebar desktop |
| US-NAV-02 | Drawer mobile |
| US-NAV-04 | Navigation publique |
| US-ERROR-01 | Erreur réseau |
| US-ERROR-02 | États vides |
| US-ERROR-03 | Skeleton loaders |
| US-ADMIN-01 | Interface admin contenu |
| US-ADMIN-02 | Gestion questions d'orientation |

### 🟠 P1 — Important (à livrer dans le MVP si possible)

| ID | Titre court |
|---|---|
| US-AUTH-06 | Déconnexion |
| US-ONBOARD-04 | Étape 3 — Langues |
| US-PARCOURS-03 | Reprise session interrompue |
| US-ORIENT-07 | Mode guidage Kpé |
| US-ORIENT-09 | Interruption et reprise |
| US-KPE-03 | Commentaire Kpé sur fiche métier |
| US-KPE-04 | Messages contextuels Kpé |
| US-RESULT-04 | Conseils de Kpé sur résultats |
| US-RESULT-05 | Accès aux résultats depuis Mon parcours |
| US-RECO-02 | Recalcul après mise à jour profil |
| US-METIER-04 | Métiers similaires en bas de fiche |
| US-FAVORI-04 | Favoris récents sur Mon parcours |
| US-LEARNIA-03 | Ressources recommandées sur Mon parcours |
| US-PROFIL-02 | Modifier situation scolaire |
| US-PROFIL-03 | Changer mot de passe |
| US-SEARCH-01 | Recherche globale |
| US-NAV-03 | Breadcrumb desktop |
| US-ERROR-04 | Gestion données nullables |
| US-ADMIN-03 | Gestion prompts Kpé |

---

*KPEKPE_USER_STORIES_MVP.md — Document officiel Produit — MVP V1 — 2026*
*Ce document est la référence pour le backlog de développement.*
*Toute modification doit être validée par le Lead Product et le Lead Tech.*
