import Loading from "../../common/Loading";
import EventTemplate from "../../templates/EventTemplate/EventTemplate";
import { useEvents } from "../../../hooks/api/getters/useEvents/useEvents";

const Events = () => {
  const { events, loading } = useEvents();

  if (loading) {
    return <Loading />;
  }
  return <EventTemplate events={events} />;
};

export default Events;
