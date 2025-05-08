import EventCard from "../../organisms/EventCard";
import { Event } from "../../../types/Event";
import { styled } from "@mui/material";

const StyledEventList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxHeight: '80vh',
})


const EventList = (events: { events: Event[] }) => {
  return (
    <StyledEventList>
      {Object.keys(events)
        .map((key) => events[key])
        .map((e, idx) => (
          <EventCard key={idx} props={e} />
        ))}
    </StyledEventList>
  );
};

export default EventList;
