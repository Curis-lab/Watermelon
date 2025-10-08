import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import PaginatedEventList from "../../organisms/PaginatedEventList/PaginatedEventList";
import { usePagination } from "../../../hooks/usePagination";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

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
  const [selected, setSelected] = useState<{ from?: Date; to?: Date }>();
  // navigation

  return (
    <StyledEventsLayout>
      <Box
        sx={{
          marginBlock: "1.8rem",
        }}
      >
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
        <Box
          sx={{
            paddingInline: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "12rem",
              borderRadius: "2rem",
              background: "blue",
            }}
          ></Box>
          <DayPicker
            animate
            mode="range"
            selected={selected}
            onSelect={setSelected}
            footer={
              selected?.from
                ? selected.to
                  ? `Selected: ${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
                  : `Selected: ${selected.from.toLocaleDateString()}`
                : "Pick a date range."
            }
          />
        </Box>
      </StyledEventAndCalendarLayout>
    </StyledEventsLayout>
  );
}

export default EventTemplate;
