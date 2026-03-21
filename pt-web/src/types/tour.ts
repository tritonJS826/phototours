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

export interface TourDay {
  day: number;
  plan: string;
  description: string;
  imgUrl?: string;
}

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

export interface TourActivity {
  activity: string;
  iconName: string;
}

export interface TourView {
  id: number;
  starAmount: number;
  reviewAmount: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  singleRoomSupplement?: number;

  startLocation: string;
  endLocation: string;
  durationDays: number;
  languages?: string[];
  difficulty?: Difficulty;
  minAge?: number | null;
  availableMonths?: string[];

  coverUrl: string;
  photos: string[];

  dates: string[];
  dailyItinerary?: TourDay[];
  faq: FaqItem[];

  activities: TourActivity[];
  included: string[];
  summary: string[];

  groupSize: number;
  spotsLeft: number;
  subtitle: string;

  // Popup-related fields
  popUp1Title: string;
  popUp1Description: string;
  popUp1ImageUrl: string;
  popUp2Title: string;
  popUp2Description: string;
  popUp2ImageUrl: string;

  // CTA fields for feedback block
  ctaTitle: string;
  ctaDescription: string;

  // Reviews section dynamic title
  reviewsSectionName?: string;
}

export interface TourDataFromApi {
  title: string;
  description: string;
  region: string;
  difficulty: DifficultyLevel;
  price: number | "";
  program: string | { text: string };
  dates: string | Array<{ date?: string }>;
  photos: File[];
}

export interface TourData {
  title: string;
  description: string;
  region: string;
  difficulty: DifficultyLevel;
  price: number | "";
  program: string;
  dates: string;
  photos: File[];
  videos: File[];
}
