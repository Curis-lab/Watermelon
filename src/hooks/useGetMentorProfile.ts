import { useQuery } from "@tanstack/react-query";
import { getMentorsProfileById } from "./api/tanstack-query/mentor-route";

export const useGetMentorProfile = (id:string) => {
  const { data, error } = useQuery({
    queryKey: ["mentors"],
    queryFn:  ()=>getMentorsProfileById(id),
  });
  //I should set business logic on this route
  
  return {data:{...data}, isError:error};
};
