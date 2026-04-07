import {fetchData, fileUrl} from "src/services/httpHelper";
import type {TourView} from "src/types/tour";

export const TOURS_PATH = "/general/tours";

export const QUERY_PARAMS = {
  LOCATION: "location",
  START_DATE: "startDate",
  END_DATE: "endDate",
  TRAVELERS: "travelers",
  MONTH: "month",
} as const;

type UrlObj = { url: string };
type DatesObj = { dateFrom: string; dateTo: string; price: number; description: string };

type TourDTO = {
  reviewAmount: number;
  start: number;
  id: number;
  slug: string;
  title: string;
  description: string;
  location: string;
  startLocation: string;
  endLocation: string;
  durationDays: number;
  languages: string[];
  difficulty?: TourView["difficulty"];
  minAge: number | null;
  availableMonths?: string[];
  coverUrl: string;
  photos: Array<string | UrlObj>;
  included: string[];
  activities: Array<{ activity: string; iconName: string }>;
  summary: string[];
  dates: Array<DatesObj>;
  program: {
    days: Array<{ day: number; plan: string; description: string; imgUrl: string }>;
  };
  faq: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  starAmount: number;
  groupSize: number;
  spotsLeft: number;
  subtitle: string;
  reviewsSectionName: string;

  isShowVip: boolean;
  isShowRooms: boolean;
  vipPrice: number;
  roomPrice: number;

  popUp1Description: string;
  popUp1ImageUrl: string;
  popUp1Title: string;
  popUp2Description: string;
  popUp2ImageUrl: string;
  popUp2Title: string;
  ctaTitle: string;
  ctaDescription: string;
};

function toUrl(v: string | UrlObj): string {
  return typeof v === "string" ? v : v.url;
}

function toShortDate(value: string): string {
  const ts = Date.parse(value);
  if (!Number.isNaN(ts)) {
    const d = new Date(ts);

    return d.toLocaleDateString(undefined, {day: "2-digit", month: "short", year: "numeric"});
  }
  const i = value.indexOf("T");

  return i >= 0 ? value.slice(0, i) : value;
}

function mapTourToView(dto: TourDTO): TourView {
  const photoUrls = (dto.photos ?? []).map(x => fileUrl(toUrl(x)));
  const dates: TourView["dates"] = (dto.dates ?? [])
    .map((d) => {
      const from = d.dateFrom;
      const to = d.dateTo;
      let dateStr = "";
      if (from && to) {
        dateStr = `${toShortDate(from)} — ${toShortDate(to)}`;
      } else if (from) {
        dateStr = toShortDate(from);
      } else if (to) {
        dateStr = toShortDate(to);
      }

      return {
        dateFrom: dateStr,
        dateTo: "",
        price: d.price,
        description: d.description ?? "",

      };
    })
    .filter((d) => d.dateFrom !== "");
  const dailyItinerary =
    dto.program?.days?.map(d => ({
      day: d.day,
      plan: d.plan,
      description: d.description,
      imgUrl: d.imgUrl,
    })) ?? [];

  const faq = dto.faq.questions;

  const STUB_NUMBER = 5;
  const DEFAULT_GROUP_SIZE = 10;
  const DEFAULT_SPOTS_LEFT = 1;

  return {
    reviewAmount: dto.reviewAmount ?? STUB_NUMBER,
    starAmount: dto.starAmount ?? STUB_NUMBER,
    id: dto.id,
    slug: dto.slug,
    title: dto.title,
    description: dto.description,
    location: dto.location,
    startLocation: dto.startLocation,
    endLocation: dto.endLocation,
    durationDays: dto.durationDays,
    languages: dto.languages ?? [],
    difficulty: dto.difficulty,
    minAge: dto.minAge ?? null,
    availableMonths: dto.availableMonths ?? [],
    coverUrl: dto.coverUrl,
    photos: photoUrls,
    dates,
    dailyItinerary,
    reviewsSectionName: dto.reviewsSectionName,
    faq,
    isShowVip: dto.isShowVip ?? false,
    isShowRooms: dto.isShowRooms ?? false,
    vipPrice: dto.vipPrice ?? 0,
    roomPrice: dto.roomPrice ?? 0,
    activities: (dto.activities ?? []).map(a => ({
      activity: typeof a === "string" ? a : a.activity,
      iconName: typeof a === "string" ? "" : a.iconName,
    })),
    included: dto.included ?? [],
    summary: dto.summary ?? [],
    groupSize: dto.groupSize ?? DEFAULT_GROUP_SIZE,
    spotsLeft: dto.spotsLeft ?? DEFAULT_SPOTS_LEFT,
    subtitle: dto.subtitle ?? "About",
    popUp1Description: dto.popUp1Description,
    popUp1ImageUrl: dto.popUp1ImageUrl,
    popUp1Title: dto.popUp1Title,
    popUp2Description: dto.popUp2Description,
    popUp2ImageUrl: dto.popUp2ImageUrl,
    popUp2Title: dto.popUp2Title,
    ctaTitle: dto.ctaTitle,
    ctaDescription: dto.ctaDescription,
  };
}

export type ToursFilter = {
  location?: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
  month?: string;
  season?: string;
};

export async function listTours(filter?: ToursFilter): Promise<TourView[]> {
  const params = new URLSearchParams();
  if (filter?.startDate) {
    params.set(QUERY_PARAMS.START_DATE, filter.startDate);
  }
  if (filter?.endDate) {
    params.set(QUERY_PARAMS.END_DATE, filter.endDate);
  }
  if (filter?.travelers) {
    params.set(QUERY_PARAMS.TRAVELERS, String(filter.travelers));
  }
  if (filter?.month) {
    params.set(QUERY_PARAMS.MONTH, filter.month);
  }
  const url = params.toString() ? `${TOURS_PATH}?${params.toString()}` : TOURS_PATH;
  const raw = await fetchData<TourDTO[]>(url);

  return (raw ?? []).map(mapTourToView);
}

export async function getTourBySlug(slug: string): Promise<TourView> {
  const raw = await fetchData<TourDTO>(`${TOURS_PATH}/slug/${slug}`);

  return mapTourToView(raw);
}

export async function getSimilarToursByTourId(tourId: string): Promise<TourView[]> {
  const raw = await fetchData<TourDTO[]>(`${TOURS_PATH}/${tourId}/similar`);

  const similarTours = (raw ?? []).map(mapTourToView);

  return similarTours;
}
