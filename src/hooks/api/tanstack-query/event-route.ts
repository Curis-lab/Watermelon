import API_ENDPOINTS from "../../../lib/api/apiendpoints";
import { apiRequest } from "../../../lib/api/apiclient";

// const baseURL = "https://event-2-h3bg.onrender.com/api";
export const getEventInfoAndAuthorProfileById = async (
  id: string
): Promise<any> => {
  const response = await apiRequest<any>({
    url: API_ENDPOINTS.events.getById(id),
  });
  console.log(response.data);
  return response;
};
