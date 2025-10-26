import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../tanstack-query/review-route";
import { IReview } from "../../../../types/APIEntry/review";

export const useReviews = (): {
  reviews: IReview[] | undefined;
  loading: boolean;
  error: boolean;
} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: (): Promise<IReview[] | undefined> => getReviews(),
  });

  return {
    reviews: data || [],
    error: isError,
    loading: isLoading,
  };
};
