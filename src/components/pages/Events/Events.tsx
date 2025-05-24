import { Divider, styled, Typography } from "@mui/material";
import EventList from "../../templates/EventList";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../../hooks/api/tanstack-query/event-route";
import { useState } from "react";

const Events = () => {
  // const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const { data: events } = useQuery({
    queryKey: ["event", page, date, search, location, limit],
    queryFn: () => getAllEvents({ page, date, search, location, limit }),
  });
  const handleDateSelection = (selectedDate: Date) => {
    setDate(selectedDate);
    setPage(1); // Reset to first page when date changes
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when search changes
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    setPage(1); // Reset to first page when location changes
  };

  const StyledEventsLayout = styled("div")(({ theme }) => ({
    paddingInline: "20px",
    [theme.breakpoints.up("md")]: {
      paddingInline: "100px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: "100px",
    },
  }));
  return (
    <StyledEventsLayout>
      <Typography variant="h1">Welcome 'Nyan Lin</Typography>
      <Typography variant="h3">Events from your groups</Typography>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="name, description..."
            />
          </div>
          <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
            Today
          </Typography>
          <Divider sx={{ marginBlockEnd: "20px", border: "2px solid #000" }} />
          <EventList {...events} />
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Page {page}</span>
            <button onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </div>
      </div>
    </StyledEventsLayout>
  );
};

export default Events;
