import { memo } from "react";
import EventCard from "../../organisms/EventCard";
import { styled } from "@mui/material";
import { IEvent } from "../../../interfaces/Event";

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

const EventList = ({ events }: { events: IEvent[] }) => {
  return (
    <StyledEventList>
      {events && events.map((e, idx) => <EventCard key={idx} props={e} />)}
    </StyledEventList>
  );
};

export default memo(EventList);
