import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/api/apiclient";
import API_ENDPOINTS from "../lib/api/apiendpoints";
import { IMentor } from "../interfaces/Mentor";

interface UseMentorsReturn {
  mentors: IMentor[];
  loading: boolean;
  error: Error | null;
  status: "loading" | "error" | "success" | "pending";
}

export const useMentors = (): UseMentorsReturn => {
  const {
    data: mentors,
    isLoading,
    error,
    status,
  } = useQuery({
    queryKey: ["mentors"],
    queryFn: () => fetcher(),
    staleTime: 600000,
  });

  return {
    mentors: mentors || [],
    loading: isLoading,
    error,
    status,
  };
};

const fetcher = async () => {
  const { data } = await apiRequest<{ data: Array<IMentor> }>({
    url: `${API_ENDPOINTS.mentors.getAll}`,
  });

  return data;
};
