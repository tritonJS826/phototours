import {fetchData, fileUrl} from "src/api/http";
import type {TourView} from "src/types/tour";

export const TOURS_PATH = "/general/tours";

const ISO_DATE_LENGTH = 10;

export const QUERY_PARAMS = {
  LOCATION: "location",
  START_DATE: "startDate",
  END_DATE: "endDate",
  TRAVELERS: "travelers",
  TAGS: "tags",
} as const;

type UrlObj = { url: string };
type DateObj = { date: string; isAvailable?: boolean };

type TourDTO = {
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
  dates?: Array<string | DateObj>;
  program?: {
    days?: Array<{ day: number; title?: string; description: string; photos?: string[] }>;
    included?: string[];
    activities?: string[];
  };
  guide?: { id: number; name?: string };
  tags?: Array<string | { name: string }>;
  categories?: Array<string | { name: string }>;
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

function mapTourToView(dto: TourDTO): TourView {
  const photoUrls = (dto.photos ?? []).map(x => fileUrl(toUrl(x)));
  const videoUrls = (dto.videos ?? []).map(toUrl);
  const dates = (dto.dates ?? [])
    .map(x => (typeof x === "string" ? x : x.date))
    .filter(Boolean)
    .map(toIsoDate);
  const tags = (dto.tags ?? []).map(toName).filter(Boolean);
  const categories = (dto.categories ?? []).map(toName).filter(Boolean);
  const coverUrl = dto.coverUrl ? fileUrl(dto.coverUrl) : photoUrls[0];
  const dailyItinerary =
    dto.program?.days?.map(d => ({
      day: d.day,
      title: d.title,
      description: d.description,
      photos: (d.photos ?? []).map(fileUrl),
    })) ?? [];
  const included = dto.included ?? dto.program?.included ?? [];
  const activities = dto.activities ?? dto.program?.activities ?? [];
  const priceRaw = dto.price === "" ? undefined : dto.price;
  const priceNum = typeof priceRaw === "number" ? priceRaw : priceRaw ? Number(priceRaw) : undefined;
  const price = Number.isFinite(priceNum) && (priceNum as number) > 0 ? (priceNum as number) : undefined;

  return {
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
    coverUrl,
    photos: photoUrls,
    videos: videoUrls,
    included,
    activities,
    dates,
    dailyItinerary,
    guide: dto.guide ? {id: dto.guide.id, name: dto.guide.name} : undefined,
    tags,
    categories,
  };
}

export type ToursFilter = {
  location?: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
  tags?: string[];
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
  const url = params.toString() ? `${TOURS_PATH}?${params.toString()}` : TOURS_PATH;
  const raw = await fetchData<TourDTO[]>(url);

  return (raw ?? []).map(mapTourToView);
}

export async function getTour(idOrSlug: string): Promise<TourView> {
  const raw = await fetchData<TourDTO>(`${TOURS_PATH}/${idOrSlug}`);

  return mapTourToView(raw);
}
