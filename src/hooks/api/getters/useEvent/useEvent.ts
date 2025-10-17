import { useQuery } from "@tanstack/react-query";
import { IEvent } from "../../../../interfaces/Event";
import { getEventInfoAndAuthorProfileById } from "../../tanstack-query/event-route";

interface IUseEventOutput {
  eventDefination?: IEvent;
  loading: boolean;
  error?: Error;
}


/**
 * 
 * @param id 
 * @returns 
 * 
 *     const eventDetails = {
      id: existingEvent._id,
      name: existingEvent.name,
      description: existingEvent.description,
      date: existingEvent.date,
      location: existingEvent.location,
      imageUrl: existingEvent.imageUrl,
      hostedBy: hoster
        ? {
            id: hoster._id,
            name: hoster.name,
            email: hoster.email,
            profileImage: hoster.profileImage,
          }
        : defaultUser,
    };
 */
export const useEvent = (id: string): IUseEventOutput => {
  const { data: eventInfo, isSuccess, isLoading, error } = useQuery({
    queryKey: ["event", id],
    queryFn: () => getEventInfoAndAuthorProfileById(id as string),
  });

  return {
    eventDefination:eventInfo.result,
    loading: isLoading,
    error: error
  };
};
