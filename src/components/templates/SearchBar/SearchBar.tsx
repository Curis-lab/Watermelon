import { useState, useEffect, useCallback } from "react";
import { StyledSearchBarContainer, StyledInput, StyledBodyComponent } from "./SearchBar.styled";
import { SearchOutlined } from "@mui/icons-material";
import {
    Chip,
    Typography,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
// Assuming you are using a different library for data fetching
import { useQuery } from "@tanstack/react-query"; // Updated import for react-query
import { getAllEvents } from "../../../hooks/api/tanstack-query/event-route";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchQuery);
      setPage(1); // Reset to first page when search changes
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { isLoading } = useQuery({
    queryKey: ["event", page, search, location, limit],
    queryFn: () => getAllEvents({ page:1, date: new Date(), search:'apple', location:"yangon", limit:1}),
  });

  // Get search results for the dropdown
  const { data: searchResults } = useQuery({
    queryKey: ["event-search", searchQuery],
    queryFn: () =>
      getAllEvents({ page:1, date: new Date(), search:'apple', location:"yangon", limit:1}),
    enabled: searchQuery.length > 0 && isFocused,
  });

  const _handleInputFocusChange = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsFocused(true);
    },
    [setIsFocused]
  );

  const _handleFocusChange = useCallback(() => {
    setIsFocused((prev) => !prev);
  }, [setIsFocused]);

  const _handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
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

  const handleEventSelect = () => {
    // You can implement navigation to event details here
    setIsFocused(false);
  };

  return (
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
        component="div"
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
                      component="li"
                      onClick={() => handleEventSelect()}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={event.title}
                        secondary={event.description?.substring(0, 100) + "..."}
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
  );
}
