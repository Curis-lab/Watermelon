import EventTemplate from "../../templates/EventTemplate/EventTemplate";
import { useEvents } from "../../../hooks/api/getters/useEvents/useEvents";

const Events = () => {
  const { events, loading, refresh } = useEvents();

  if (loading) {
    return (
      <div style={{
        marginTop: '300px'
      }}>
        <button onClick={() => refresh}>Refresh</button>
      </div>
    );
  }
  return <EventTemplate loading={loading} events={events || []} />;
};

export default Events;
