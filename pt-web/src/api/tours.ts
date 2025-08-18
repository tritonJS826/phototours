import {fetchData, fileUrl, USE_MOCK} from "src/api/http";
import {mockTours} from "src/api/tours.mock";
import type {TourView} from "src/types/tour";

const ZERO_PRICE = 0 as const;
const FIRST_INDEX = 0 as const;
const DEFAULT_LANGUAGES = Object.freeze(["English"]);

type TourDTO = {
  id: number;
  slug?: string;
  title: string;
  description: string;
  difficulty?: string;
  price?: number | string;
  languages?: string[];
  durationDays?: number;
  startLocation?: string;
  endLocation?: string;
  availableMonths?: string[];
  coverUrl?: string;
  photos?: Array<string | { url: string }>;
  videos?: Array<string | { url: string }>;
  included?: string[];
  activities?: string[];
  dates?: Array<string | { date: string }>;
  dailyItinerary?: unknown;
  guide?: { id: number; name?: string };
  tags?: Array<string | { name: string }>;
  categories?: Array<string | { name: string }>;
};

function mapTourToView(t: TourDTO): TourView {
  const photos = (t.photos ?? []).map((p) =>
    fileUrl(typeof p === "string" ? p : p.url),
  );

  const videos = (t.videos ?? []).map((v) =>
    typeof v === "string" ? v : v.url,
  );

  const dates = (t.dates ?? [])
    .map((d) => (typeof d === "string" ? d : d.date ?? ""))
    .map((d) => d.split("T")[FIRST_INDEX] ?? d);

  const tags = (t.tags ?? []).map((x) =>
    typeof x === "string" ? x : x.name,
  );

  const categories = (t.categories ?? []).map((x) =>
    typeof x === "string" ? x : x.name,
  );

  const coverUrl = t.coverUrl ? fileUrl(t.coverUrl) : photos[FIRST_INDEX];

  return {
    id: t.id,
    slug: t.slug,
    title: t.title,
    description: t.description,
    difficulty: t.difficulty as TourView["difficulty"],
    price: Number(t.price ?? ZERO_PRICE),
    languages: t.languages ?? [...DEFAULT_LANGUAGES],
    durationDays: t.durationDays ?? undefined,
    startLocation: t.startLocation,
    endLocation: t.endLocation,
    availableMonths: t.availableMonths ?? [],
    coverUrl,
    photos,
    videos,
    included: t.included ?? [],
    activities: t.activities ?? [],
    dates,
    dailyItinerary: (t.dailyItinerary as TourView["dailyItinerary"]) ?? [],
    guide: t.guide ? {id: t.guide.id, name: t.guide.name} : undefined,
    tags,
    categories,
  };
}

export async function listTours(): Promise<TourView[]> {
  if (USE_MOCK) {
    return mockTours;
  }

  const raw = await fetchData<TourDTO[]>("/tours");

  return (raw ?? []).map(mapTourToView);
}

export async function getTour(idOrSlug: string): Promise<TourView> {
  if (USE_MOCK) {
    const found = mockTours.find(
      (x) => String(x.id) === idOrSlug || x.slug === idOrSlug,
    );
    if (!found) {
      throw new Error("Tour not found");
    }

    return found;
  }

  const raw = await fetchData<TourDTO>(`/tours/${idOrSlug}`);

  return mapTourToView(raw);
}
