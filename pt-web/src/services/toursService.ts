import {fetchData, fileUrl} from "src/services/httpHelper";
import type {TourView} from "src/types/tour";

export const TOURS_PATH = "/general/tours";

const ISO_DATE_LENGTH = 10;

export const QUERY_PARAMS = {
  LOCATION: "location",
  START_DATE: "startDate",
  END_DATE: "endDate",
  TRAVELERS: "travelers",
  TAGS: "tags",
  MONTH: "month",
} as const;

type UrlObj = { url: string };
type DatesObj = { dateFrom: string; dateTo: string };

type TourDTO = {
  reviewAmount: number;
  start: number;
  id: number;
  slug?: string;
  title: string;
  description: string;
  price?: number | string;
  startLocation?: string;
  endLocation?: string;
  durationDays?: number;
  languages?: string[];
  difficulty?: TourView["difficulty"];
  minAge?: number | null;
  availableMonths?: string[];
  coverUrl?: string;
  photos?: Array<string | UrlObj>;
  videos?: Array<string | UrlObj>;
  included?: string[];
  activities?: string[];
  summary?: string[];
  dates: Array<DatesObj>;
  program?: {
    days?: Array<{ day: number; plan: string; description: string; imgUrl: string }>;
    included?: string[];
    activities?: string[];
  };
  guide?: { id: number; name?: string };
  tags?: Array<string | { name: string }>;
  categories?: Array<string | { name: string }>;
  starAmount: number;
  groupSize: number;
  spotsLeft: number;
  subtitle: string;
};

function toUrl(v: string | UrlObj): string {
  return typeof v === "string" ? v : v.url;
}

function toName(v: string | { name?: string }): string {
  return typeof v === "string" ? v : v.name ?? "";
}

function toIsoDate(value: string): string {
  const ts = Date.parse(value);
  if (!Number.isNaN(ts)) {
    return new Date(ts).toISOString().slice(0, ISO_DATE_LENGTH);
  }
  const i = value.indexOf("T");

  return i >= 0 ? value.slice(0, i) : value;
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
  const videoUrls = (dto.videos ?? []).map(toUrl);
  const dates = (dto.dates ?? [])
    .map((d) => {
      const from = d.dateFrom;
      const to = d.dateTo;
      if (from && to) {
        return `${toShortDate(from)} — ${toShortDate(to)}`;
      }
      if (from) {
        return toShortDate(from);
      }
      if (to) {
        return toShortDate(to);
      }

      return undefined;
    })
    .filter(Boolean) as string[];
  const tags = (dto.tags ?? []).map(toName).filter(Boolean);
  const categories = (dto.categories ?? []).map(toName).filter(Boolean);
  const dailyItinerary =
    dto.program?.days?.map(d => ({
      day: d.day,
      plan: d.plan,
      description: d.description,
      imgUrl: d.imgUrl,
    })) ?? [];
  const priceRaw = dto.price === "" ? undefined : dto.price;
  const priceNum = typeof priceRaw === "number" ? priceRaw : priceRaw ? Number(priceRaw) : undefined;
  const price = Number.isFinite(priceNum) && (priceNum as number) > 0 ? (priceNum as number) : undefined;

  const STUB_NUMBER = 4.3;

  return {
    reviewAmount: dto.reviewAmount ?? STUB_NUMBER,
    starAmount: dto.starAmount ?? STUB_NUMBER,
    id: dto.id,
    slug: dto.slug,
    title: dto.title,
    description: dto.description,
    price,
    startLocation: dto.startLocation,
    endLocation: dto.endLocation,
    durationDays: dto.durationDays,
    languages: dto.languages ?? [],
    difficulty: dto.difficulty,
    minAge: dto.minAge ?? null,
    availableMonths: dto.availableMonths ?? [],
    coverUrl: dto.coverUrl,
    photos: photoUrls,
    videos: videoUrls,
    dates,
    dailyItinerary,
    guide: dto.guide ? {id: dto.guide.id, name: dto.guide.name} : undefined,
    tags,
    categories,
    activities: dto.activities ?? [],
    included: dto.included ?? [],
    summary: dto.summary ?? [],
    groupSize: dto.groupSize ?? 10,
    spotsLeft: dto.spotsLeft ?? 1,
    subtitle: dto.subtitle ?? "About",
  };
}

export type ToursFilter = {
  location?: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
  tags?: string[];
  month?: string;
  season?: string;
};

export async function listTours(filter?: ToursFilter): Promise<TourView[]> {
  const params = new URLSearchParams();
  if (filter?.location) {
    params.set(QUERY_PARAMS.LOCATION, filter.location);
  }
  if (filter?.startDate) {
    params.set(QUERY_PARAMS.START_DATE, filter.startDate);
  }
  if (filter?.endDate) {
    params.set(QUERY_PARAMS.END_DATE, filter.endDate);
  }
  if (filter?.travelers) {
    params.set(QUERY_PARAMS.TRAVELERS, String(filter.travelers));
  }
  if (filter?.tags?.length) {
    params.set(QUERY_PARAMS.TAGS, filter.tags.join(","));
  }
  if (filter?.month) {
    params.set(QUERY_PARAMS.MONTH, filter.month);
  }
  const url = params.toString() ? `${TOURS_PATH}?${params.toString()}` : TOURS_PATH;
  const raw = await fetchData<TourDTO[]>(url);

  return (raw ?? []).map(mapTourToView);
}

export async function getTourBySlag(slug: string): Promise<TourView> {
  const raw = await fetchData<TourDTO>(`${TOURS_PATH}/slug/${slug}`);

  return mapTourToView(raw);
}
