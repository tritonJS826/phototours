export enum Difficulty {
  BEGINNER = "BEGINNER",
  EXPERIENCED = "EXPERIENCED",
  PRO = "PRO",
  EASY = "EASY",
}

export enum DifficultyLevel {
  BEGINNER = "BEGINNER",
  EXPERIENCED = "EXPERIENCED",
  PRO = "PRO",
}

export enum MaterialType {
  PDF = "PDF",
  VIDEO = "VIDEO",
  ROUTE = "ROUTE",
  TIPS = "TIPS",
}

export interface TourDay {
  day: number;
  plan: string;
  description: string;
  imgUrl?: string;
}

export interface TourView {
  id: number;
  starAmount: number;
  reviewAmount: number;
  slug?: string;
  title: string;
  description: string;
  price?: number;

  startLocation?: string;
  endLocation?: string;
  durationDays?: number;
  languages?: string[];
  difficulty?: Difficulty;
  minAge?: number | null;
  availableMonths?: string[];

  coverUrl?: string;
  photos: string[];
  videos?: string[];

  dates: string[];
  dailyItinerary?: TourDay[];

  guide?: { id: number; name?: string };

  tags?: string[];
  categories?: string[];

  activities: string[];
  included: string[];
  summary: string[];
}

export interface TourMaterial {
  id?: number;
  file?: File;
  url?: string;
  title: string;
  type: MaterialType;
  isNew?: boolean;
}

export interface TourDataFromApi {
  title: string;
  description: string;
  region: string;
  difficulty: DifficultyLevel;
  price: number | "";
  program: string | { text: string };
  guideId: number | "";
  tags: string | Array<{ name?: string }>;
  dates: string | Array<{ date?: string }>;
  materials: TourMaterial[];
  photos: File[];
  videos: File[];
}

export interface TourData {
  title: string;
  description: string;
  region: string;
  difficulty: DifficultyLevel;
  price: number | "";
  program: string;
  guideId: number | "";
  tags: string;
  dates: string;
  materials: TourMaterial[];
  photos: File[];
  videos: File[];
}

export type Guide = {
  id: number;
  experience: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
  };
};
