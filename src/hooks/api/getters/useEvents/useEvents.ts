import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "../../../../lib/api/apiendpoints";
import { apiRequest } from "../../../../lib/api/apiclient";

export const useEvents = () => {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: () => fetcher(),
  });
  
  return {
    events: events,
    loading: isLoading,
    error,
  };
};

async function fetcher(): Promise<IEvent[]> {
  const response: AxiosResponse = await apiRequest<{ body: IEvent[] }>({
    url: `${API_ENDPOINTS.events.getAll}?page=1&limit=10`,
  });

  return response.body;
}
