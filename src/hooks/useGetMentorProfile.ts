import { useQuery } from "@tanstack/react-query";
import { getMentorsProfileById } from "./api/tanstack-query/mentor-route";
import { IMentor } from "../interfaces/Mentor";


export const useGetMentorProfile = (id:string) => {
  const { data, error } = useQuery({
    queryKey: ["mentors"],
    queryFn:  ()=>getMentorsProfileById(id),
  });
  
  return {data:{...data} as IMentor, isError:error};
};