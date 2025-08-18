import {listTours} from "src/api/tours";
import {useAsync} from "src/hooks/useAsync";
import type {TourView} from "src/types/tour";

export function useTours() {
  const fetchTours = () => listTours();

  return useAsync<TourView[]>(fetchTours, []);
}
