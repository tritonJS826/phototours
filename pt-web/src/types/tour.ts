export enum Difficulty {
  BEGINNER = "BEGINNER",
  EXPERIENCED = "EXPERIENCED",
  PRO = "PRO",
  EASY = "EASY",
}

export enum DifficultyLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
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

export interface TourDateView {
  dateFrom: string;
  dateTo: string;
  price: number;
  description: string;
}

export interface TourView {
  id: number;
  starAmount: number;
  reviewAmount: number;
  slug: string;
  title: string;
  description: string;
  singleRoomSupplement?: number;

  location: string;
  startLocation: string;
  endLocation: string;
  durationDays: number;
  languages?: string[];
  difficulty?: Difficulty;
  minAge?: number | null;
  availableMonths?: string[];

  coverUrl: string;
  photos: string[];

  dates: TourDateView[];
  dailyItinerary?: TourDay[];
  faq: FaqItem[];

  activities: TourActivity[];
  included: string[];
  summary: string[];

  groupSize: number;
  spotsLeft: number;
  subtitle: string;

  // VIP and Room fields
  isShowVip: boolean;
  isShowRooms: boolean;
  vipPrice: number;
  roomPrice: number;

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
  coverUrl: string;
  durationDays: string;
  startLocation: string;
  endLocation: string;
  minAge: number;
  languages: string[];
  availableMonths: string[];
  reviewsSectionName: string;
  isShowVip: boolean;
  isShowRooms: boolean;
  vipPrice: number;
  roomPrice: number;
}

export interface AdminTourDate {
  id: string;
  dateFrom: string;
  dateTo: string;
  groupSize: number;
  isAvailable: boolean;
  price: number;
  description: string;
}

export interface AdminTourPhoto {
  id: string;
  url: string;
  alt?: string;
  description?: string;
}

export interface AdminTour {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  coverUrl: string;
  durationDays: string;
  startLocation: string;
  endLocation: string;
  location: string;
  minAge: number;
  languages: string[];
  availableMonths: string[];
  program: { days: TourDay[] };
  faq: { questions: FaqItem[] };
  activities: TourActivity[];
  included: string[];
  summary: string[];
  groupSize: number;
  spotsLeft: number;
  subtitle: string;
  popUp1Title: string;
  popUp1Description: string;
  popUp1ImageUrl: string;
  popUp2Title: string;
  popUp2Description: string;
  popUp2ImageUrl: string;
  ctaTitle: string;
  ctaDescription: string;
  reviewsSectionName: string;
  isShowVip: boolean;
  isShowRooms: boolean;
  vipPrice: number;
  roomPrice: number;
  dates: AdminTourDate[];
  photos: AdminTourPhoto[];
}

export interface UpdateTourAdminData {
  title?: string;
  slug?: string;
  description?: string;
  difficulty?: string;
  coverUrl?: string;
  durationDays?: string;
  startLocation?: string;
  endLocation?: string;
  location?: string;
  minAge?: number;
  program?: { days: TourDay[] };
  faq?: { questions: FaqItem[] };
  languages?: string[];
  availableMonths?: string[];
  activities?: TourActivity[];
  included?: string[];
  summary?: string[];
  groupSize?: number;
  spotsLeft?: number;
  subtitle?: string;
  popUp1Title?: string;
  popUp1Description?: string;
  popUp1ImageUrl?: string;
  popUp2Title?: string;
  popUp2Description?: string;
  popUp2ImageUrl?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  reviewsSectionName?: string;
  isShowVip?: boolean;
  isShowRooms?: boolean;
  vipPrice?: number;
  roomPrice?: number;
  photos?: AdminTourPhoto[];
}
