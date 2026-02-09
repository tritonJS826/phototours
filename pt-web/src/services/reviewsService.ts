import {fetchData} from "src/services/httpHelper";

export interface Review {
  id: string;
  userId: string;
  tourId: string;
  rating: number;
  comment: string;
  userName: string;
  link: string;
  image: string;
  createdAt: string;
}

export async function getRandomReviews(): Promise<Review[]> {
  return await fetchData<Review[]>("general/reviews/random", {
    method: "GET",
  });
}