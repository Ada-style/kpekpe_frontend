/**
 * Client API universel pour Kpékpé Learnia.
 * Permet de basculer en toute transparence entre les données Mock (Vite)
 * et le vrai backend d'API (Express / Cloud Functions / Firestore).
 */

import {
  METIERS,
  FORMATIONS,
  ORGANISATIONS,
  RESSOURCES,
  DIMENSIONS,
  PROFIL_TYPE,
  MOTS_CLES,
} from "@/data/webMockData";

import type {
  Metier,
  Formation,
  Organisation,
  Ressource,
  OrientationResult,
  TutorProfile,
  EngagementState,
  BulletinData,
  UserProfile,
} from "@/types/api";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";
const USE_REAL_BACKEND = Boolean(import.meta.env.VITE_USE_BACKEND === "true" && API_BASE_URL);

/**
 * Wrapper de requête avec fallback automatique vers les mocks
 */
async function fetchWithFallback<T>(endpoint: string, mockData: T, options?: RequestInit): Promise<T> {
  if (!USE_REAL_BACKEND) {
    return Promise.resolve(mockData);
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) {
      console.warn(`[API] Erreur ${res.status} sur ${endpoint}, retour aux données locales.`);
      return mockData;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[API] Impossible de joindre le backend sur ${endpoint}, utilisation du mock.`, err);
    return mockData;
  }
}

export const KpekpeApi = {
  // --- MÉTIERS ---
  async getMetiers(): Promise<Metier[]> {
    return fetchWithFallback<Metier[]>("/api/metiers", METIERS as Metier[]);
  },

  async getMetierById(id: string): Promise<Metier | undefined> {
    const all = await this.getMetiers();
    return all.find((m) => m.id === id);
  },

  // --- FORMATIONS ---
  async getFormations(): Promise<Formation[]> {
    return fetchWithFallback<Formation[]>("/api/formations", FORMATIONS as Formation[]);
  },

  async getFormationById(id: string): Promise<Formation | undefined> {
    const all = await this.getFormations();
    return all.find((f) => f.id === id);
  },

  // --- ORGANISATIONS & UNIVERSITÉS ---
  async getOrganisations(): Promise<Organisation[]> {
    return fetchWithFallback<Organisation[]>("/api/organisations", ORGANISATIONS as Organisation[]);
  },

  // --- RESSOURCES & GUIDES ---
  async getRessources(): Promise<Ressource[]> {
    return fetchWithFallback<Ressource[]>("/api/ressources", RESSOURCES as Ressource[]);
  },

  // --- ORIENTATION IKIGAI ---
  async getOrientationResult(userId = "user_kofi"): Promise<OrientationResult> {
    const mockResult: OrientationResult = {
      uid: userId,
      globalScore: 78,
      profilType: PROFIL_TYPE,
      dimensions: DIMENSIONS.map((d) => ({
        key: d.key as "passion" | "talent" | "besoins" | "aspiration",
        label: d.label,
        score: d.score,
      })),
      keywords: MOTS_CLES,
      recommendedCareers: METIERS.slice(0, 3) as Metier[],
      recommendedFormations: FORMATIONS.slice(0, 2) as Formation[],
      updatedAt: new Date().toISOString(),
    };

    return fetchWithFallback<OrientationResult>(`/api/orientation/${userId}`, mockResult);
  },

  // --- RÉPÉTITEURS LOMÉ (MARKETPLACE) ---
  async getTutors(): Promise<TutorProfile[]> {
    const mockTutors: TutorProfile[] = [
      {
        id: "tut_1",
        name: "M. Mawuli Agbeko",
        specialite: "SVT & Biologie Médicale",
        experienceAnnees: 8,
        communes: ["Tokoin", "Agoè", "Bè"],
        ville: "Lomé",
        cniVerified: true,
        diplomaVerified: true,
        rating: 4.9,
        reviewCount: 22,
        bio: "Professeur certifié en lycée à Lomé, spécialiste de la préparation au BAC Série D.",
      },
      {
        id: "tut_2",
        name: "Mme Afi Mensah",
        specialite: "Mathématiques & Statistiques",
        experienceAnnees: 5,
        communes: ["Adidogomé", "Nukafu", "Klikamé"],
        ville: "Lomé",
        cniVerified: true,
        diplomaVerified: true,
        rating: 4.8,
        reviewCount: 16,
      },
      {
        id: "tut_3",
        name: "Dr. Koffi Lawson",
        specialite: "Sciences Physiques & Chimie",
        experienceAnnees: 10,
        communes: ["Hédzranawoé", "Agoè", "Baguida"],
        ville: "Lomé",
        cniVerified: true,
        diplomaVerified: true,
        rating: 5.0,
        reviewCount: 31,
      },
    ];

    return fetchWithFallback<TutorProfile[]>("/api/tutors", mockTutors);
  },

  // --- ENGAGEMENT (ARBRE & FLAMME PARTAGÉE) ---
  async getEngagement(userId = "user_kofi"): Promise<EngagementState> {
    const mockEngagement: EngagementState = {
      uid: userId,
      streakDays: 12,
      wisdomTree: {
        stage: 4,
        totalNotions: 24,
        completedNotions: 14,
        percentage: 58,
        currentFocus: "Génétique & SVT Série D",
      },
      sharedFlame: {
        partnerUid: "user_afi",
        partnerName: "Afi",
        streakDays: 12,
        partnerActiveToday: false,
      },
    };

    return fetchWithFallback<EngagementState>(`/api/engagement/${userId}`, mockEngagement);
  },
};
