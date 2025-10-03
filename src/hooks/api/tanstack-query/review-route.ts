import { apiRequest } from "../../../lib/api/apiclient";
import API_ENDPOINTS from "../../../lib/api/apiendpoints";

interface IReview {
  mentorId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export const getReviews = async () => {
  const { data, success } = await apiRequest<{
    data: IReview[];
    success: boolean;
  }>({
    url: `${API_ENDPOINTS.reviews.getAll}`,
  });

  return success ? data : [];
};
