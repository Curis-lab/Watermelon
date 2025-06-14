import { AxiosResponse } from "axios";
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

export const getAllEvents = async ({
  page,
  date,
  search,
  location,
  limit,
}: {
  page: number;
  date: Date;
  search: string;
  location: string;
  limit: number;
}): Promise<any> => {
  console.log(date);
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    // date: date.toISOString(),

    ...(search && { search }),
    ...(location && { location }),
  });

  const response: AxiosResponse = await apiRequest<any>({
    url: `${API_ENDPOINTS.events.getAll}?${queryParams.toString()}`,
  });

  return response.data;
};
