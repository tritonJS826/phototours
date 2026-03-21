import {useQuery} from "@tanstack/react-query";
import {getSimilarToursByTourId, getTourBySlug, listTours, type ToursFilter} from "src/services/toursService";

const TOUR_KEYS = {
  all: ["tours"] as const,
  list: (
    // Lets use filter for cache if we will get rid of client-side filtering
    // filter?: ToursFilter
  ) => [
    ...TOUR_KEYS.all, "list",
    // Lets use filter for cache if we will get rid of client-side filtering
    // filter
  ] as const,
  detail: (slug: string) => [...TOUR_KEYS.all, "detail", slug] as const,
  similar: (
    // Lets ise tourId when toursSimilars become different
    // tourId: string
  ) => [
    ...TOUR_KEYS.all, "similar",
    // Lets ise tourId when toursSimilars become different
    // tourId
  ] as const,
};

export function useTours(filter?: ToursFilter) {
  return useQuery({
    queryKey: TOUR_KEYS.list(
      // Lets use filter for cache if we will get rid of client-side filtering
      // filter,
    ),
    queryFn: () => listTours(filter),
  });
}

export function useTourBySlug(slug: string) {
  return useQuery({
    queryKey: TOUR_KEYS.detail(slug),
    queryFn: () => getTourBySlug(slug),
    enabled: !!slug,
  });
}

export function useSimilarTours(tourId: string) {
  return useQuery({
    queryKey: TOUR_KEYS.similar(
      // Lets use tourId when toursSimilars become different
      // tourId
    ),
    queryFn: () => getSimilarToursByTourId(tourId),
    enabled: !!tourId,
  });
}