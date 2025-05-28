import {
  Chip,
  Divider,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EventList from "../../templates/EventList";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../../hooks/api/tanstack-query/event-route";
import { MouseEvent, useCallback, useState, useEffect } from "react";
import { SearchOutlined } from "@mui/icons-material";
import {
  StyledEventsLayout,
  StyledButton,
  StyledPageCount,
  StyledInput,
  StyledSearchBarContainer,
  StyledBodyComponent,
} from "./Events.styled";

const Events = () => {
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: events, isLoading } = useQuery({
    queryKey: ["event", page, date, search, location, limit],
    queryFn: () => getAllEvents({ page, date, search, location, limit }),
  });

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchQuery);
      setPage(1); // Reset to first page when search changes
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery]);


  // Get search results for the dropdown
  const { data: searchResults } = useQuery({
    queryKey: ["event-search", searchQuery],
    queryFn: () =>
      getAllEvents({
        page: 1,
        date,
        search: searchQuery,
        location: "",
        limit: 3,
      }),
    enabled: searchQuery.length > 0 && isFocused,
  });

  const _handleInputFocusChange = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsFocused(true);
    },
    [setIsFocused]
  );

  const _handleFocusChange = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setIsFocused((e) => !e);
    },
    [setIsFocused]
  );

  const _handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setIsFocused(false);
      }
    },
    [setIsFocused]
  );

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setPage(1);
  };

  const handleEventSelect = (eventId: string) => {
    // You can implement navigation to event details here
    setIsFocused(false);
  };

  return (
    <StyledEventsLayout>
      <Typography sx={{ fontSize: "36px", fontWeight: "bold" , paddingBlockStart: ' 100px'}}>
        Welcome's Nyan Lin 🎉
      </Typography>
      <Typography variant="h3" sx={{ paddingBlockEnd: "30px" }}>
        Events from your groups
      </Typography>
      <StyledSearchBarContainer>
        <StyledInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search events by name, description..."
          onClick={_handleInputFocusChange}
          onKeyPress={_handleKeyPress}
        />
        <SearchOutlined
          onClick={_handleFocusChange}
          sx={{
            position: "absolute",
            left: "10px",
            top: "7px",
            width: "25px",
            height: "25px",
          }}
        />
        {isFocused && (
          <StyledBodyComponent>
            {searchQuery.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <h3>Search Results</h3>
                {isLoading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <CircularProgress size={20} />
                  </div>
                ) : searchResults?.length === 0 ? (
                  <Typography
                    variant="body2"
                    sx={{ padding: "10px", color: "gray" }}
                  >
                    No events found matching "{searchQuery}"
                  </Typography>
                ) : (
                  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {searchResults?.map((event: any) => (
                      <ListItem
                        key={event.id}
                        button
                        onClick={() => handleEventSelect(event.id)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={event.title}
                          secondary={
                            event.description?.substring(0, 100) + "..."
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            )}
            <div>
              <h3>Quick Filters</h3>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Chip
                  label="All Events"
                  variant={location === "" ? "filled" : "outlined"}
                  onClick={() => handleLocationSelect("")}
                />
                <Chip
                  label="Near Me"
                  variant={location === "near" ? "filled" : "outlined"}
                  onClick={() => handleLocationSelect("near")}
                />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>Popular Locations</h3>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Chip
                  label="Yangon"
                  variant={location === "yangon" ? "filled" : "outlined"}
                  onClick={() => handleLocationSelect("yangon")}
                />
                <Chip
                  label="Mandalay"
                  variant={location === "mandalay" ? "filled" : "outlined"}
                  onClick={() => handleLocationSelect("mandalay")}
                />
                <Chip
                  label="Naypyidaw"
                  variant={location === "naypyidaw" ? "filled" : "outlined"}
                  onClick={() => handleLocationSelect("naypyidaw")}
                />
              </div>
            </div>
          </StyledBodyComponent>
        )}
      </StyledSearchBarContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBlockStart: "70px",
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Today
        </Typography>
        <Divider sx={{ marginBlockEnd: "20px", border: "2px solid #000" }} />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <CircularProgress />
          </div>
        ) : events?.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: "20px" }}
          >
            No events found. Try adjusting your search criteria.
          </Typography>
        ) : (
          <EventList {...events} />
        )}
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
