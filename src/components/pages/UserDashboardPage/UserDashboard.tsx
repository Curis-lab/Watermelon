import EventList from "../../templates/EventList";
import { DataFetcher } from "../../../lib/axios";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @returns
 * Dashboard Page
 * List of upcoming and past meetings
 * Quick access to create or join a meeting
 * Personalized meeting recommendations
 *
 */

const UserDashboardPage = () => {
  const dataFetcher = new DataFetcher();

  const {
    data,
    isLoading,
    isError,
    error: errorMessage,
  } = useQuery({
    queryKey: ["events"],
    queryFn: () => dataFetcher.fetchData("/events"),
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (isError) {
    return <div>Error on something: {errorMessage}</div>;
  }
  return (
    <div>
      <EventList {...data} />
    </div>
  );
};

export default UserDashboardPage;
