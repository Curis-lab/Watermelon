import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return client;
};

export const apiClient = createApiClient();
export const apiRequest = async <T>({
  method = "GET",
  url,
  data,
  params,
  headers,
}: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
      params,
      headers,
    });
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
