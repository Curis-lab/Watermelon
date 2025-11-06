import EventTemplate from "../../templates/EventTemplate/EventTemplate";
import { useEvents } from "../../../hooks/api/getters/useEvents/useEvents";

const Events = () => {
  const { events, loading, refresh, error } = useEvents();

  console.log(error);
  if (error) {
    return (
      <div style={{
        marginTop: '300px'
      }}>
        hello
        <button onClick={() => refresh}>Refresh</button>
      </div>
    );
  }
  return <EventTemplate loading={loading} events={events || []} />;
};

export default Events;
