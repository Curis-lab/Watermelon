import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/api/apiclient";
import API_ENDPOINTS from "../lib/api/apiendpoints";

interface IMentor {
  _id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  expertise: string;
  availability: boolean;
  profileImage: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UseMentorsReturn {
  mentors: { _id: number; name: string }[];
  isLoading: boolean;
  error: string | null | boolean;
}

/**
 * I want to centralize on this keys
 */

export const useMentors = (): UseMentorsReturn => {
  const {
    data: mentors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mentors"],
    queryFn: () => fetcher(),
    staleTime: 600000,
  });

  return {
    mentors: mentors || [],
    loading: isLoading,
    error: isError,
  };
};

const fetcher = async () => {
  const { data } = await apiRequest<{ data: Array<IMentor> }>({
    url: `${API_ENDPOINTS.mentors.getAll}`,
  });

  return data;
};
