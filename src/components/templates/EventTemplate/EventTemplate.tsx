import React from "react";
import { Box, styled, Typography } from "@mui/material";
import PaginatedEventList from "../../organisms/PaginatedEventList/PaginatedEventList";
import { usePagination } from "../../../hooks/usePagination";

const StyledEventsLayout = styled("div")(({ theme }) => ({
  paddingInline: "20px",
  [theme.breakpoints.up("md")]: {
    paddingInline: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

const StyledEventAndCalendarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

interface IEventTemplate {
  /** search props */
  searchQuery: string;
  handleSearchQuery: () => void;
  handleInputFocusChange: () => void;
  handleKeyPress: () => void;
  /** event props */
  events: [];
  isLoading: boolean;
}

function EventTemplate({ events }: IEventTemplate) {
  const { itemsPerPage, currentItems, handleChange, page } = usePagination({
    events: events,
    itemsPerPage: 5,
  });

  return (
    <StyledEventsLayout>
      <Box>
        <Typography variant="h2">Welcome's Nyan Lin</Typography>
        <Typography>Events from your groups</Typography>
      </Box>
      <StyledEventAndCalendarLayout>
        {events && (
          <PaginatedEventList
            events={currentItems}
            page={page}
            count={Math.ceil(Object.values(events).length / itemsPerPage)}
            handleChange={handleChange}
          />
        )}
        <Box>This is for calendar</Box>
      </StyledEventAndCalendarLayout>
    </StyledEventsLayout>
  );
}

export default EventTemplate;
