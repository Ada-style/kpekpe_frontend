# Kpékpé — Documentation des Écrans de la Maquette Web

> **Document de référence — Maquette MVP V1**
> À destination de l'équipe produit, design et technique pour comprendre l'architecture, les écrans et les flux utilisateurs de la plateforme Kpékpé.

---

## Vue d'ensemble

La maquette web Kpékpé est une Single Page Application (React + Vite) qui reproduit fidèlement l'expérience utilisateur cible du MVP. Elle utilise des données mockées (fichier `src/data/webMockData.ts`) et simule les flux de navigation réels.

**URL de base :** `/web-app/`

---

## Personas

| Code | Persona | Profil |
|------|---------|--------|
| **VIS** | Visiteur | Non connecté. Découvre la plateforme. |
| **APP** | Apprenant | Connecté. 15–25 ans. Lycéen, étudiant, reconversion. |
| **ADM** | Administrateur | Équipe Kpékpé. Hors scope de cette maquette. |

---

## 🌐 Pages Publiques (accès sans compte)

---

### E01 — Landing page
**URL :** `/web-app/`
**Accessible à :** VIS (principalement), APP

**Qui le consulte :** Tout visiteur arrivant sur la plateforme pour la première fois, via un lien ou une recherche.

**Pourquoi :** Comprendre ce qu'est Kpékpé, se laisser convaincre et s'inscrire (ou se connecter).

**Ce qu'il voit :**
- **Hero** : Phrase d'accroche principale, image d'étudiants togolais, deux CTAs (Commencer gratuitement / Se connecter), aperçu du chatbot Kpé
- **Comment ça marche** : 3 étapes (Réponds → Découvre → Explore)
- **Bandeau photo** : Ancrage académique, lycéens togolais
- **Pourquoi Kpékpé** : 4 avantages clés (données locales, IA, gratuit, personnalisé)
- **Aperçu du catalogue** : 4 cartes métiers clickables
- **Témoignages** : 3 retours d'utilisateurs fictifs représentatifs
- **FAQ** : 5 questions fréquentes en accordéon
- **CTA final** : Invitation à s'inscrire

---

### E02 — Inscription
**URL :** `/web-app/register`
**Accessible à :** VIS

**Qui le consulte :** Un nouveau visiteur qui souhaite créer son compte.

**Pourquoi :** S'inscrire pour accéder aux fonctionnalités personnalisées (orientation, recommandations).

**Ce qu'il voit :**
- **Panneau gauche (desktop)** : Image d'étudiants + logo blanc Kpékpé + bénéfices clés sur fond sombre
- **Panneau droit** : Formulaire d'inscription (Prénom, Nom, Email, Niveau d'études, Mot de passe, CGU)
- Validation des champs, toggle affichage mot de passe
- Lien de retour vers la connexion
- Redirection vers E03 après soumission

---

### E03 — Vérification email
**URL :** `/web-app/verify-email`
**Accessible à :** VIS (juste après inscription)

**Qui le consulte :** L'utilisateur qui vient de créer son compte et attend la confirmation.

**Pourquoi :** Valider son adresse email pour activer son compte.

**Ce qu'il voit :**
- Icône de mail
- Message d'instruction avec l'email utilisé (simulé)
- Bouton [Renvoyer l'email]
- Bouton de simulation mock [Simuler clic sur le lien validé] → redirige vers E07
- Lien retour vers la connexion

---

### E04 — Connexion
**URL :** `/web-app/login`
**Accessible à :** VIS (retour d'un utilisateur existant)

**Qui le consulte :** Un utilisateur inscrit qui revient sur la plateforme.

**Pourquoi :** S'authentifier pour accéder à son espace personnel.

**Ce qu'il voit :**
- **Panneau gauche (desktop)** : Image d'étudiants + logo blanc + bienvenue sur fond sombre
- **Panneau droit** : Formulaire (Email + Mot de passe), toggle affichage, lien mot de passe oublié
- Lien vers l'inscription
- Redirection vers E11 (Mon parcours) après connexion

---

### E05 — Mot de passe oublié
**URL :** `/web-app/forgot-password`
**Accessible à :** VIS

**Qui le consulte :** Un utilisateur qui ne se souvient plus de son mot de passe.

**Pourquoi :** Demander un email de réinitialisation.

**Ce qu'il voit :**
- Champ email
- Message de confirmation (email envoyé)
- Lien retour vers la connexion

---

### E06 — Réinitialisation du mot de passe
**URL :** `/web-app/reset-password`
**Accessible à :** VIS (via lien email)

**Qui le consulte :** Utilisateur ayant cliqué sur le lien de réinitialisation.

**Pourquoi :** Définir un nouveau mot de passe.

**Ce qu'il voit :**
- Formulaire (nouveau mot de passe + confirmation)
- Message de succès + redirection vers la connexion

---

## 🧭 Onboarding (première connexion uniquement)

---

### E07 — Onboarding étape 1 : Identité
**URL :** `/web-app/onboarding?step=1`
**Accessible à :** APP (nouveau)

**Qui le consulte :** Tout nouvel utilisateur dont l'onboarding n'est pas encore terminé.

**Pourquoi :** Personnaliser l'expérience en capturant le prénom et le nom.

**Ce qu'il voit :**
- Barre de progression (Étape 1/3)
- Message de bienvenue de Kpékpé
- Champs Prénom et Nom
- Bouton [Continuer]

---

### E08 — Onboarding étape 2 : Situation scolaire
**URL :** `/web-app/onboarding?step=2`
**Accessible à :** APP (nouveau)

**Pourquoi :** Adapter les recommandations au contexte géographique et scolaire.

**Ce qu'il voit :**
- Barre de progression (Étape 2/3)
- Message contextuel de Kpé
- Sélecteur Région du Togo (Maritime, Plateaux, Centrale, Kara, Savanes)
- Sélecteur Niveau d'études (Collège, Lycée, Bac, Université, Reconversion)
- Sélecteur Série (conditionnel : si Lycée)
- Boutons [Retour] et [Continuer]

---

### E09 — Onboarding étape 3 : Langues
**URL :** `/web-app/onboarding?step=3`
**Accessible à :** APP (nouveau)

**Pourquoi :** Affiner le profil linguistique.

**Ce qu'il voit :**
- Barre de progression (Étape 3/3)
- Sélection multi-choix de langues (Français, Éwé, Kabiyè, Anglais, Autre)
- Bouton [Retour]
- Bouton [Découvrir mon espace] → redirige vers E10

---

## 🏠 Espace Apprenant — Mon Parcours

---

### E10 — Mon Parcours (avant test)
**URL :** `/web-app/mon-parcours?state=empty`
**Accessible à :** APP (n'ayant pas encore fait l'orientation)

**Qui le consulte :** L'apprenant qui vient de terminer l'onboarding ou revient sans avoir complété le test.

**Pourquoi :** Comprendre ce qui l'attend et lancer le parcours d'orientation.

**Ce qu'il voit :**
- Salutation personnalisée "Bonjour [Prénom] 👋"
- Grande carte hero avec : description du test, durée (~20 min), bouton [Commencer mon orientation]
- Message d'encouragement de Kpékpé
- Bloc "Comment ça marche" en 3 étapes

---

### E11 — Mon Parcours (après test)
**URL :** `/web-app/mon-parcours`
**Accessible à :** APP (ayant complété l'orientation)

**Qui le consulte :** L'apprenant revenant sur la plateforme après avoir obtenu ses résultats.

**Pourquoi :** Avoir une vue synthétique de son orientation et accéder rapidement aux sections importantes.

**Ce qu'il voit :**
- Salutation + profil type IKIGAI résumé ("Analytique-Social")
- Lien [Voir mon résultat complet]
- Suggestion contextuelle de Kpékpé
- Top 3 métiers recommandés (mini-cards avec score)
- Favoris récents (2 éléments)
- Ressources recommandées (3 cartes Learnia)
- Actions rapides (Explorer les métiers, Refaire l'orientation, Parler à Kpékpé)

---

## 🎯 Parcours d'Orientation

---

### E12 — Introduction au parcours
**URL :** `/web-app/orientation`
**Accessible à :** APP

**Qui le consulte :** L'apprenant prêt à démarrer ou reprendre son orientation.

**Pourquoi :** Se préparer mentalement, comprendre ce qui l'attend.

**Ce qu'il voit :**
- Avatar Kpékpé
- Titre et description du parcours
- Durée estimée (20 min) + possibilité de pause
- Bouton [C'est parti !] → redirige vers E13
- Lien [Reprendre là où j'en étais] (si session en cours)

---

### E13 — Question choix unique
### E14 — Question choix multiple
### E15 — Question texte libre
### E16 — Question échelle
**URL :** `/web-app/orientation/questionnaire?step=[N]`
**Accessible à :** APP

**Qui le consulte :** L'apprenant en cours de questionnaire.

**Pourquoi :** Répondre aux questions pour que Kpékpé analyse son profil.

**Ce qu'il voit :**
- Barre de progression (Question N / 18)
- Dimension active (ex. : "Ce que tu aimes faire")
- Question en grand format
- Options interactives selon le type (boutons, checkboxes, textarea, slider 1-5)
- Bouton [Précédente] et [Continuer]
- Sélecteur de type (mock, pour démo)
- Bouton [J'ai besoin d'aide] → ouvre le guidage de Kpé

---

### E17 — Guidage Kpé (panneau)
**URL :** (panneau latéral overlay sur E13-E16)
**Accessible à :** APP (en cours de questionnaire)

**Pourquoi :** Débloquer la réflexion si l'utilisateur ne sait pas quoi répondre.

**Ce qu'il voit :**
- Panneau latéral avec avatar Kpékpé
- Reformulation bienveillante de la question
- Questions ouvertes de relance
- Bouton [Revenir à la question]

---

### E18 — Écran de calcul
**URL :** `/web-app/orientation/calcul`
**Accessible à :** APP (ayant terminé toutes les questions)

**Pourquoi :** Patienter pendant que le scoring IKIGAI est calculé.

**Ce qu'il voit :**
- Animation pulsante avec avatar Kpékpé
- Message "Kpékpé analyse tes réponses…"
- Indicateur de chargement (3 points animés)
- Redirection automatique vers E19 après 6 secondes

---

## 📊 Résultats

---

### E19 — Résultats : Mon Profil
**URL :** `/web-app/resultats?tab=profil`
**Accessible à :** APP (après test)

**Qui le consulte :** L'apprenant qui vient de terminer son test ou revient consulter ses résultats.

**Pourquoi :** Découvrir son profil type IKIGAI et comprendre ce que cela signifie.

**Ce qu'il voit :**
- Onglets : Mon profil | Métiers recommandés | Formations recommandées | Conseils de Kpé
- Profil type en grand (ex. : "Analytique-Social")
- Résumé narratif en 3 phrases bienveillantes
- Mots-clés du profil (chips)
- Graphique radar des 4 dimensions IKIGAI
- CTA [Voir mes métiers recommandés]

---

### E20 — Résultats : Métiers recommandés
**URL :** `/web-app/resultats?tab=metiers`
**Accessible à :** APP

**Pourquoi :** Découvrir les 3 métiers les plus compatibles avec son profil.

**Ce qu'il voit :**
- 3 cartes métiers avec rang, titre, score de compatibilité, raison textuelle du matching
- Boutons [Découvrir] et [♡ Favoris] sur chaque carte
- Liens [Voir mes formations recommandées] et [Explorer d'autres métiers]

---

### E21 — Résultats : Formations recommandées
**URL :** `/web-app/resultats?tab=formations`
**Accessible à :** APP

**Pourquoi :** Savoir concrètement où se former au Togo.

**Ce qu'il voit :**
- 3 cartes formations avec titre, organisation, score de pertinence, force du lien (directe/forte/possible)
- Boutons [Voir] et [♡ Favoris]

---

### E22 — Résultats : Conseils de Kpékpé
**URL :** `/web-app/resultats?tab=conseils`
**Accessible à :** APP

**Pourquoi :** Lire un message personnalisé et obtenir des suggestions d'actions.

**Ce qu'il voit :**
- Bloc avatar Kpékpé + message personnalisé en 3 paragraphes
- Bouton [Poser une question à Kpékpé]
- 3 suggestions de prochaines étapes cliquables

---

## 📚 Catalogues — Explorer (Learnia)

---

### Hub Learnia
**URL :** `/web-app/learnia`
**Accessible à :** APP

**Qui le consulte :** L'apprenant qui souhaite explorer les ressources disponibles.

**Pourquoi :** Accéder rapidement à toutes les sections du catalogue (métiers, formations, organisations, ressources, favoris).

**Ce qu'il voit :**
- Hero avec titre et description de Learnia
- 5 cartes modulaires (Métiers, Formations, Organisations, Ressources, Favoris)
- Bandeau d'invitation à faire le test d'orientation

---

### E23 — Liste des Métiers
**URL :** `/web-app/explorer/metiers`
**Accessible à :** VIS (lecture partielle) et APP

**Qui le consulte :** Tout utilisateur souhaitant découvrir des métiers disponibles au Togo.

**Pourquoi :** Explorer l'offre métiers, filtrer par secteur.

**Ce qu'il voit :**
- Barre de recherche + bouton Filtres
- Badges de filtres par secteur (Tous, Numérique, Santé, etc.)
- Grille de cartes métiers (icône, titre, secteur, niveau min, débouchés)
- Icône ♡ Favoris sur chaque carte

---

### E24 — Fiche Métier
**URL :** `/web-app/explorer/metiers/:id`
**Accessible à :** VIS et APP

**Qui le consulte :** Toute personne voulant en savoir plus sur un métier spécifique.

**Pourquoi :** Comprendre ce que le métier implique, ses débouchés au Togo, les salaires et les formations pour y accéder.

**Ce qu'il voit :**
- En-tête : Titre, badge secteur, niveau minimum, score de compatibilité (si connecté), CTAs
- **Débouchés au Togo** : section mise en avant (encadrée)
- **Salaires** : fourchette en FCFA
- **Compétences** : liste avec niveau d'importance (critique/importante/utile)
- **Mots-clés** : chips/tags
- **Formations associées** : mini-cards cliquables
- **Sidebar Kpékpé** : commentaire personnalisé + bouton "Poser une question"
- Bouton ♡ Ajouter aux favoris

---

### E25 — Liste des Formations
**URL :** `/web-app/explorer/formations`
**Accessible à :** VIS et APP

**Ce qu'il voit :**
- Recherche et filtres (Domaine, Niveau, Statut, Ville)
- Cartes : Titre, Organisation, Ville, Domaine, Durée, Frais (FCFA), Badge statut (ouvert/fermé/complet)

---

### E26 — Fiche Formation
**URL :** `/web-app/explorer/formations/:id`
**Accessible à :** VIS et APP

**Ce qu'il voit :**
- Titre, Organisation, Ville, Niveau, Durée, Statut de candidature
- Description complète + Conditions d'admission
- Frais annuels (FCFA)
- Métiers associés avec force du lien
- Card résumé de l'organisation
- Boutons [Voir l'organisation] et [♡ Favoris]

---

### E27 — Liste des Organisations
**URL :** `/web-app/explorer/organisations`
**Accessible à :** VIS et APP

**Ce qu'il voit :**
- Grille de cards : Logo (initiales), Nom, Sigle, Type, Ville, Badge Partenaire Kpékpé
- Filtres : Type, Statut (public/privé), Ville

---

### E28 — Fiche Organisation
**URL :** `/web-app/explorer/organisations/:id`
**Accessible à :** VIS et APP

**Ce qu'il voit :**
- Nom, Sigle, Type, Statut, Badge partenaire
- Description + Localisation
- Contacts (téléphone, email, site web)
- Liste des formations proposées (liens)

---

### E31 — Liste des Ressources (Learnia)
**URL :** `/web-app/ressources`
**Accessible à :** APP uniquement (ressources réservées aux connectés)

**Qui le consulte :** L'apprenant qui souhaite approfondir ses connaissances.

**Ce qu'il voit :**
- Barre de recherche et filtres (Catégorie, Type)
- Cartes : Image, Titre, Catégorie (badge), Durée de lecture

---

### E32 — Fiche Ressource
**URL :** `/web-app/ressources/:id`
**Accessible à :** APP

**Ce qu'il voit :**
- Titre, Catégorie, Type, Durée de lecture
- Contenu complet (Markdown rendu)
- Métiers associés en bas

---

## ❤️ Favoris

---

### E29 — Mes Favoris : Métiers
### E30 — Mes Favoris : Formations
**URL :** `/web-app/favoris`
**Accessible à :** APP

**Qui le consulte :** L'apprenant qui revient consulter les éléments sauvegardés.

**Pourquoi :** Retrouver rapidement des métiers et formations d'intérêt.

**Ce qu'il voit :**
- Onglets [Métiers (N)] et [Formations (N)]
- Cards avec bouton [Voir la fiche] et [♥ Retirer]
- État vide : Illustration + message + CTA [Explorer les métiers/formations]

---

## 👤 Mon Profil

---

### E33 — Mon Profil : Informations
**URL :** `/web-app/profil?tab=infos`
**Accessible à :** APP

**Qui le consulte :** L'apprenant souhaitant modifier ses informations personnelles.

**Ce qu'il voit :**
- Avatar avec initiales
- Onglets (Informations, Situation scolaire, Préférences, Sécurité)
- Formulaire : Prénom, Nom, Email (lecture seule), Langue

---

### E34 — Mon Profil : Situation Scolaire
**URL :** `/web-app/profil?tab=scolaire`
**Accessible à :** APP

**Ce qu'il voit :**
- Message informatif (mise à jour = recommandations recalculées)
- Formulaire : Région, Niveau, Série
- Bouton [Enregistrer]

---

### E33b — Mon Profil : Préférences
**URL :** `/web-app/profil?tab=prefs`
**Ce qu'il voit :** 3 checkboxes de préférences de notifications

---

### E34b — Mon Profil : Sécurité
**URL :** `/web-app/profil?tab=securite`
**Ce qu'il voit :** Formulaire changement de mot de passe + Zone dangereuse (suppression du compte)

---

## 🤖 Assistant Kpékpé

---

### E35 — Panneau Kpé
**URL :** (panneau latéral superposé à toute page authentifiée)
**Accessible à :** APP

**Qui le consulte :** Tout apprenant ayant besoin d'aide ou de conseils.

**Pourquoi :** Obtenir des réponses contextuelles à ses questions d'orientation sans quitter la page en cours.

**Ce qu'il voit :**
- En-tête avec avatar Kpékpé (icone_ia) + "Ton conseiller"
- Historique de conversation de la session
- Indicateur de contexte (ex : "Métier : Développeur Web")
- Champ de saisie + bouton [Envoyer]
- Fermeture via croix ou clic extérieur

**Sur desktop :** Panneau latéral de 360px à droite
**Sur mobile :** Plein écran avec overlay

---

## ⚠️ Pages d'Erreur et États Spéciaux

---

### E39 — Erreur Réseau
**URL :** `/web-app/erreur-reseau`
**Ce qu'il voit :** Illustration + message explicite + bouton [Réessayer] + [Retour à l'accueil]

---

### E40 — Session Expirée
**URL :** `/web-app/session-expiree`
**Ce qu'il voit :** Message de session expirée (données sauvegardées) + bouton [Se reconnecter]

---

## 📱 Navigation & Layout

---

### Desktop (> 1024px)
- **Sidebar fixe** de 240px à gauche avec logo, navigation principale, sous-menu Learnia en accordéon
- **Sidebar collapsible** à 64px (icônes seules) via bouton toggle
- **TopBar** avec breadcrumbs, barre de recherche, bouton Kpé, cloche
- **Panneau Kpé** : overlay de 360px à droite

### Tablette (768px – 1024px)
- La sidebar est masquée par défaut
- Bouton ☰ dans la TopBar pour ouvrir le drawer
- Grilles à 2 colonnes pour les catalogues

### Mobile (< 768px)
- **Bottom Navigation Bar** : Mon parcours | Explorer | Favoris | Profil | Kpékpé
- Drawer latéral accessible via ☰
- Grille à 1 colonne pour les catalogues
- TopBar simplifiée (menu + logo + actions essentielles)
- Panneau Kpé en plein écran

---

## 🛠️ Données Mockées

Toutes les données sont déclarées dans `src/data/webMockData.ts` :

| Entité | Nombre | Description |
|--------|--------|-------------|
| Métiers | 6 | Développeur Web, Médecin, Agronome, Comptable, Enseignant, Designer |
| Formations | 4 | Licence Info, BTS Info, Doctorat Médecine, Ingénieur Agronome |
| Organisations | 3 | Université de Lomé, ESIG, IAI |
| Ressources | 3 | Guides, articles d'orientation |
| Profil type | 1 | "Analytique-Social" |
| Dimensions IKIGAI | 4 | Passion, Talent, Besoins, Aspiration |

---

*Document généré automatiquement depuis l'analyse de la maquette — Kpékpé MVP V1 — 2026*
