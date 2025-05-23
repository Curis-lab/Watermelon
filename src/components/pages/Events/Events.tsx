import { Divider, styled, Typography } from "@mui/material";
import EventList from "../../templates/EventList";
import { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import RoundedDropDown from "../../atoms/Dropdown/RoundedDropDown/RoundedDropDown";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState();
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

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

  useEffect(() => {
    const base_route = "http://localhost:3000/api/events";
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      // date: date.toISOString(),
      ...(search && { search }),
      ...(location && { location }),
    });

    const url = `${base_route}?${queryParams.toString()}`;
    console.log(url);
    fetch(url)
      .then((data) => data.json())
      .then((data) => setEvents(data.results))
      .catch((error) => console.log(error));
  }, [page, date, search, location]);

  /**
   * select function
   * . date (datepicker)
   * . name, description (input)
   * . location (dropdown)
   */
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
        {/* <div>
          <Calendar date={date} onChange={handleDateSelection} />
        </div> */}

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="name, description..."
            />
            {/* <RoundedDropDown value={location} onChange={handleLocationChange} />
            <RoundedDropDown /> */}
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
