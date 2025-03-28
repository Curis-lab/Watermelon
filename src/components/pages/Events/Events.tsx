import { useEvent } from "../../../hooks/api/getters/useEvents/useEvents";
import EventList from "../../templates/EventList";

const Events = () => {
  const { events } = useEvent();
  return (
    <div>
      <EventList {...events} />
    </div>
  );
};

export default Events;
