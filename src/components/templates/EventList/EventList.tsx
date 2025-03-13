import EventCard from "../../organisms/EventCard";
import { Event } from "../../../types/Event";

const EventList = (events: { events: Event[] }) => {
  return (
    <div>
      {Object.keys(events)
        .map((key) => events[key])
        .map((e, idx) => (
          <EventCard key={idx} props={e} />
        ))}
    </div>
  );
};

export default EventList;
