import EventCard from "../../organisms/EventCard";
import { Event } from "../../../types/Event";
import { styled } from "@mui/material";

const StyledEventList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const EventList = ({ events }: { events: Event[] }) => {
  console.log('events',events);
  return (
    <StyledEventList>
      {events && events.map((e, idx) => (
        <EventCard key={idx} props={e} />
      ))}
    </StyledEventList>
  );
};

export default EventList;
