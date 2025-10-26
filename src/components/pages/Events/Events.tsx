import EventTemplate from "../../templates/EventTemplate/EventTemplate";
import { useEvents } from "../../../hooks/api/getters/useEvents/useEvents";

const Events = () => {
  const { events, loading } = useEvents();
  
  return <EventTemplate loading={loading} events={events || []} />;
};

export default Events;
