/**
 * Types de données canoniques de l''API Backend Kpékpé Learnia.
 * Synchronisés entre la maquette frontend et le backend (Firestore / Express / PostgreSQL).
 */

export type UserRole = " student\ | \parent\ | \tutor\ | \counselor\;

export interface UserProfile {
 uid: string;
 phone: string;
 email?: string;
 role: UserRole;
 firstName: string;
 lastName: string;
 avatarUrl?: string;
 classLevel?: string; // ex: \Terminale D\
 schoolName?: string; // ex: \Lycée de Tokoin\
 city: string; // ex: \Lomé\
 subscription?: {
 plan: \free\ | \parent_plus\ | \tutor_pro\;
 status: \active\ | \trial\ | \expired\;
 expiresAt: string;
 trialEndsAt?: string;
 };
}

export interface OrientationPillars {
 passion: number;
 talent: number;
 besoins: number;
 aspiration: number;
}

export interface OrientationResult {
 uid: string;
 globalScore: number;
 profilType: string; // ex: \Analytique-Social\
 dimensions: {
 key: keyof OrientationPillars;
 label: string;
 score: number;
 }[];
 keywords: string[];
 recommendedCareers: Metier[];
 recommendedFormations: Formation[];
 updatedAt: string;
}

export interface Metier {
 id: string;
 titre: string;
 secteur: string;
 niveauMin: string;
 debouches: string;
 salaire: string;
 description: string;
 competences: { nom: string; niveau: \critique\ | \importante\ | \utile\ }[];
 tags: string[];
 formationsIds: string[];
 score?: number;
 raison?: string;
}

export interface Formation {
 id: string;
 titre: string;
 organisation: string;
 ville: string;
 domaine: string;
 niveau: string;
 dureeMois: number;
 frais?: string;
 statut: \ouvert\ | \ferme\ | \complet\;
 description: string;
 admission: string;
 metiersIds: string[];
 orgId: string;
 score?: number;
 force?: \directe\ | \forte\ | \possible\;
}

export interface Organisation {
 id: string;
 nom: string;
 sigle: string;
 type: string;
 statut: \public\ | \prive\;
 ville: string;
 partenaire?: boolean;
 description: string;
 telephone?: string;
 email?: string;
 siteWeb?: string;
 formationsIds: string[];
}

export interface Ressource {
 id: string;
 titre: string;
 categorie: string;
 type: string;
 dureeMin: number;
 extrait: string;
 contenu: string;
 metiersIds: string[];
}

export interface TutorProfile {
 id: string;
 name: string;
 specialite: string;
 experienceAnnees: number;
 communes: string[]; // ex: [\Tokoin\, \Agoè\, \Adidogomé\]
 ville: string;
 cniVerified: boolean;
 diplomaVerified: boolean;
 rating: number;
 reviewCount: number;
 bio?: string;
 pricing?: number; // UNIQUEMENT côté tuteur, jamais affiché aux parents/élèves
 proSubscriptionStatus?: \trial\ | \active\ | \expired\;
}

export interface EngagementState {
 uid: string;
 streakDays: number;
 wisdomTree: {
 stage: number; // 1 à 9 mois
 totalNotions: number;
 completedNotions: number;
 percentage: number;
 currentFocus: string;
 };
 sharedFlame: {
 partnerUid: string;
 partnerName: string;
 streakDays: number;
 partnerActiveToday: boolean;
 };
}

export interface BulletinData {
 id: string;
 uid: string;
 trimestre: \T1\ | \T2\ | \T3\;
 anneeScolaire: string;
 classe: string;
 moyenneGenerale: number;
 rang?: string;
 matieres: {
 nom: string;
 coefficient: number;
 moyenne: number;
 appreciation?: string;
 }[];
 statutValidation: \en_attente\ | \valide_conseiller\ | \rejete\;
}
