import API_ENDPOINTS from "../../../lib/api/apiendpoints";
import { apiRequest } from "../../../lib/api/apiclient";

export async function getEventInfoAndAuthorProfileById<T>(
  id: string
): Promise<typeof response> {
  const response = await apiRequest<T>({
    url: API_ENDPOINTS.events.getById(id),
  });

  return response;
}
