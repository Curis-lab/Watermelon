import { apiRequest } from "../../../lib/api/apiclient";
import API_ENDPOINTS from "../../../lib/api/apiendpoints";


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

export const getMentorsProfileById = async (id: string) => {
  const { data, success } = await apiRequest<{ data: IMentor; success: boolean }>({
    url: `${API_ENDPOINTS.mentors.getProfileById(id)}`,
  });
  return success ? data : [];
};
