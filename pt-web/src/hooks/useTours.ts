import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getSimilarToursByTourId, getTourBySlug, listTours, type ToursFilter} from "src/services/toursService";
import type {TourView} from "src/types/tour";

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
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: TOUR_KEYS.detail(slug),
    queryFn: async () => {
      const cachedTours = queryClient.getQueryData<TourView[]>(TOUR_KEYS.list());
      const cachedTour = cachedTours?.find((tour) => tour.slug === slug);
      if (cachedTour) {
        return cachedTour;
      }

      return getTourBySlug(slug);
    },
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
