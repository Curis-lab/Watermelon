import axios, { AxiosResponse } from "axios";
import API_ENDPOINTS from "../../../lib/api/apiendpoints";
import { apiRequest } from "../../../lib/api/apiclient";

const baseURL = "https://event-2-h3bg.onrender.com/api";

export const getEventInfoAndAuthorProfileById = async (id: string) => {
  const response: AxiosResponse = await axios.get(`${baseURL}/${id}`);
  return response.data;
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
    date: date.toISOString(),

    ...(search && { search }),
    ...(location && { location }),
  });
  console.log(queryParams);
  // const url = `${baseRoute}?${queryParams.toString()}`;
  // const data: AxiosResponse = await axios.get(url);
  const response: AxiosResponse = await apiRequest({
    url: API_ENDPOINTS.events.getAll,
  });
  // console.log("data", data);

  return response.data;
};
