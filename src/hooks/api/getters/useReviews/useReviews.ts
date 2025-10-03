import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../tanstack-query/review-route";
import { IReview } from "../../../../types/APIEntry/review";


/**
 * 
 * @returns {
 *  data: IReview[],
 * }
 */

export const useReviews = ():{data:IReview[], isLoading:string, error: string} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: (): Promise<IReview[]> => getReviews(),
  });


  return {
    reviews: data || [],
    error: isError,
    loading: isLoading
  }
};
