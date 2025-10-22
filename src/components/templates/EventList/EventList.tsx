import { memo } from "react";
import EventCard from "../../organisms/EventCard";
import { Event } from "../../../types/Event";
import { styled } from "@mui/material";

const StyledEventList = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const EventList = ({ events }: { events: Event[] }) => {
  return (
    <StyledEventList>
      {events && events.map((e, idx) => <EventCard key={idx} props={e} />)}
    </StyledEventList>
  );
};

export default memo(EventList);
