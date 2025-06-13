import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import API_ENDPOINTS from "../../../lib/api/apiendpoints";

const baseURL = "https://event-2-h3bg.onrender.com/api";

export const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return client;
};
const apiClient = createApiClient();
const apiRequest = async <T>({
  method = "GET",
  url,
  data,
  params,
  headers,
}: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({ method, url, data, params, headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.detail || error.message || "API request failed."
      );
    }
    throw error;
  }
};
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
  const response: AxiosResponse = await apiRequest({ url: API_ENDPOINTS.events.getAll });
  // console.log("data", data);

  return response.data;
};
