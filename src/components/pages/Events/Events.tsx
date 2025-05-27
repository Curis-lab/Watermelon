import { Chip, Divider, styled, Typography } from "@mui/material";
import EventList from "../../templates/EventList";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../../hooks/api/tanstack-query/event-route";
import { MouseEvent, useCallback, useState } from "react";
import { SearchOutlined, WidthFull } from "@mui/icons-material";



const StyledEventsLayout = styled("div")(({ theme }) => ({
  paddingInline: "20px",
  [theme.breakpoints.up("md")]: {
    paddingInline: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

const StyledButton = styled("button")({
  padding: "10px",
  background: "blue",
  color: "white",
  borderRadius: "5px",
  width: "100px",
  textAlign: "center",
  boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 1)",
});

const StyledPageCount = styled("span")({
  fontSize: "1.13em",
  alignContent: "center",
});

/** Serch Input Box */
const StyledInput = styled("input")({
  display: "inline-block",
  width: "100%",
  padding: "10px 48px",
  fontsize: "16px",
  lineHeight: "18px",
  color: "#202020",
  border: "0",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "#bcbcbc",
  },
});

const StyledSearchBarContainer = styled("div")(({theme})=>({
  position: "absolute",
  maxWidth: "1034px",
  width: '400px',
  [theme.breakpoints.up('md')]:{
    width: '70%'
  },
  [theme.breakpoints.up('lg')]:{
    width: '100%'
  }
}));

const StyledBodyComponent = styled("div")({
  padding: "36px 16px",
  background: "white",
});
/** End for Serach Input Box */


const Events = () => {
  // const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  /**this is only for input box */
  const [isFocused, setIsFocused] = useState(false);
  /** end for input box */

  const { data: events } = useQuery({
    queryKey: ["event", page, date, search, location, limit],
    queryFn: () => getAllEvents({ page, date, search, location, limit }),
  });
  const [input, setInput] = useState('');

  /** this function is for input box */
  const _handleInputFocusChange = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsFocused(true);
    },
    [isFocused, setIsFocused]
  );
  const _handleFocusChange = useCallback((e: MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    setIsFocused(e=>!e);
  },[isFocused, setIsFocused])
  /** end for input box */

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

  

  return (
    <StyledEventsLayout>
      <Typography variant="h1" sx={{paddingBlockEnd: '3px', paddingBlockStart: '20px'}}>Welcome 'Nyan Lin</Typography>
      <Typography variant="h3" sx={{paddingBlockEnd: '30px'}}>Events from your groups</Typography>
      <StyledSearchBarContainer>
        <StyledInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="name, description..."
          onClick={_handleInputFocusChange}
        />
        <SearchOutlined onClick={_handleFocusChange} sx={{position: 'absolute', left:'10px', top: '7px', width: '25px', height: '25px'}}/>
        {isFocused && (
          <StyledBodyComponent>
            <div>
              <h3>Organizers</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <Chip label="Mg Mg" variant="outlined" onClick={() => {}} />
                <Chip label="Min Min" variant="outlined" onClick={() => {}} />
                <Chip label="Tun lin" variant="outlined" onClick={() => {}} />
                <Chip label="Tun Kyaw" variant="outlined" onClick={() => {}} />
              </div>
            </div>
          </StyledBodyComponent>
        )}
      </StyledSearchBarContainer>
      <div style={{ display: "flex", flexDirection: 'column',  gap: "10px" , marginBlockStart: '70px'}}>
          <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
            Today
          </Typography>
          <Divider sx={{ marginBlockEnd: "20px", border: "2px solid #000" }} />
          <EventList {...events} />
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <StyledButton
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </StyledButton>
            <StyledPageCount>Page {page}</StyledPageCount>
            <StyledButton onClick={() => setPage((p) => p + 1)}>
              Next
            </StyledButton>
        </div>
      </div>
    </StyledEventsLayout>
  );
};

export default Events;
