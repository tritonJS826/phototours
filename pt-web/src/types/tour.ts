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
  price: number;

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

  included?: string[];
  activities?: string[];

  dates: string[];
  dailyItinerary?: TourDay[];

  guide?: { id: number; name?: string };

  tags?: string[];
  categories?: string[];
}
