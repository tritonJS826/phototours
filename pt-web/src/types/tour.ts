export type Difficulty = "BEGINNER" | "EXPERIENCED" | "PRO" | "EASY";

export interface TourDay {
  day: number;
  title?: string;
  description: string;
  photos: string[];
}

export interface TourView {
  id: number;
  slug?: string;
  title: string;
  description: string;
  region?: string;
  difficulty?: Difficulty;
  price: number;
  languages?: string[];
  durationDays?: number;
  startLocation?: string;
  endLocation?: string;
  availableMonths?: string[];
  coverUrl?: string;
  photos: string[];
  videos?: string[];
  included?: string[];
  activities?: string[];
  dates: string[]; // "YYYY-MM-DD"
  dailyItinerary?: TourDay[];
  guide?: { id: number; name?: string };
  tags?: string[];
  categories?: string[];
}

