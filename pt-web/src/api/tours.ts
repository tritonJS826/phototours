import {fetchData, fileUrl} from "src/api/http";
import type {TourView} from "src/types/tour";

const API = "/tours";
const FIRST = 0 as const;

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
  difficulty?: "BEGINNER" | "EXPERIENCED" | "PRO" | "EASY";
  minAge?: number | null;
  availableMonths?: string[];

  coverUrl?: string;
  photos?: Array<string | {url: string}>;
  videos?: Array<string | {url: string}>;

  included?: string[];
  activities?: string[];

  dates?: Array<string | {date: string; isAvailable?: boolean}>;

  program?: {
    days?: Array<{day: number; title?: string; description: string; photos?: string[]}>;
    included?: string[];
    activities?: string[];
  };

  guide?: {id: number; name?: string};
  tags?: Array<string | {name: string}>;
  categories?: Array<string | {name: string}>;
};

function mapTourToView(t: TourDTO): TourView {
  const photos = (t.photos ?? []).map(p => fileUrl(typeof p === "string" ? p : p.url));
  const videos = (t.videos ?? []).map(v => (typeof v === "string" ? v : v.url));

  const dates = (t.dates ?? [])
    .map(d => (typeof d === "string" ? d : d.date ?? ""))
    .map(d => d.split("T")[FIRST] ?? d)
    .filter(Boolean);

  const tags = (t.tags ?? []).map(x => (typeof x === "string" ? x : x.name));
  const categories = (t.categories ?? []).map(x => (typeof x === "string" ? x : x.name));
  const coverUrl = t.coverUrl ? fileUrl(t.coverUrl) : photos[FIRST];

  const dailyItinerary =
    t.program?.days?.map(d => ({
      day: d.day,
      title: d.title,
      description: d.description,
      photos: (d.photos ?? []).map(fileUrl),
    })) ?? undefined;

  const included = t.included ?? t.program?.included ?? undefined;
  const activities = t.activities ?? t.program?.activities ?? undefined;

  return {
    id: t.id,
    slug: t.slug,
    title: t.title,
    description: t.description,
    price: Number(t.price ?? 0),

    startLocation: t.startLocation,
    endLocation: t.endLocation,
    durationDays: t.durationDays,
    languages: t.languages,
    difficulty: t.difficulty as TourView["difficulty"],
    minAge: t.minAge ?? null,
    availableMonths: t.availableMonths ?? [],

    coverUrl,
    photos,
    videos,

    included,
    activities,

    dates,
    dailyItinerary,

    guide: t.guide ? {id: t.guide.id, name: t.guide.name} : undefined,

    tags,
    categories,
  };
}

export async function listTours(): Promise<TourView[]> {
  try {
    const raw = await fetchData<TourDTO[]>(API);

    return (raw ?? []).map(mapTourToView);
  } catch {
    const mod = await import("./tours.mock");

    return (mod.mockTours as TourView[]) ?? [];
  }
}

export async function getTour(idOrSlug: string): Promise<TourView> {
  try {
    const raw = await fetchData<TourDTO>(`${API}/${idOrSlug}`);

    return mapTourToView(raw);
  } catch {
    const mod = await import("./tours.mock");
    const found = (mod.mockTours as TourView[]).find(
      t => String(t.id) === idOrSlug || t.slug === idOrSlug,
    );
    if (!found) {
      throw new Error("Tour not found");
    }

    return found;
  }
}
