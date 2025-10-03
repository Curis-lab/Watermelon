import { useEventSearch } from "../../../hooks/useEventSearch";
import EventTemplate from "../../templates/EventTemplate/EventTemplate";
import Loading from "../../common/Loading";

const Events = () => {
  const { events, isLoading } = useEventSearch({
    initialPage: 1,
    initialLimit: 20,
    initialLocation: "",
  });

  if (isLoading) {
    return <Loading />;
  }

  return <EventTemplate events={events} />;
};

export default Events;
