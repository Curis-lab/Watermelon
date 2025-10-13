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
  error: string | null;
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

  /**
   * add some Business logci
   */
  console.log("mentors", mentors);
  console.log("status", status);
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
