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

  tags?: string[];
  categories?: string[];

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
  tags: string;
  dates: string;
  materials: TourMaterial[];
  photos: File[];
  videos: File[];
}
