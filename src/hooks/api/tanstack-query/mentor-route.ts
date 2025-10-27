import { apiRequest } from "../../../lib/api/apiclient";
import API_ENDPOINTS from "../../../lib/api/apiendpoints";
import {IMentor} from '../../../interfaces/Mentor';

export const getMentorsProfileById = async (id: string) => {
  const { data, success } = await apiRequest<{ data: IMentor; success: boolean }>({
    url: `${API_ENDPOINTS.mentors.getProfileById(id)}`,
  });
  return success ? data : [];
};
