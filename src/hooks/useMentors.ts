import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/api/apiclient";
import API_ENDPOINTS from "../lib/api/apiendpoints";
import { IMentor } from "../interfaces/Mentor";

export const useMentors = () => {
  const {
    data: mentors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["mentors"],
    queryFn: () => fetcher(),
  });
  
  return {
    mentors: mentors,
    loading: isLoading,
    error,
  };
};

async function  fetcher():Promise<IMentor[]> {
  const body = await apiRequest<{ data:IMentor[] }>({
    url: `${API_ENDPOINTS.mentors.getAll}`,
  });

  return body.data;
};
