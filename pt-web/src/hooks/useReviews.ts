import {useQuery} from "@tanstack/react-query";
import {getRandomReviews} from "src/services/reviewsService";

const REVIEW_KEYS = {
  all: ["reviews"] as const,
  random: () => [...REVIEW_KEYS.all, "random"] as const,
};

export function useReviews() {
  return useQuery({
    queryKey: REVIEW_KEYS.random(),
    queryFn: getRandomReviews,
  });
}
