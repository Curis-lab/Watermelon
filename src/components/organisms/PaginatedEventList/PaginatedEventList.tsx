import { memo } from "react";
import { Box, Pagination } from "@mui/material";
import EventList from "../../templates/EventList";

interface IPaginatedEventList {
  events: Event[];
  page: number;
  count: number;
  handleChange: () => void;
}

function PaginatedEventList(props: IPaginatedEventList) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* somtime  they don't change any props */}
      <EventList events={props.events} />
      <Pagination
        count={props.count}
        page={props.page}
        onChange={props.handleChange}
        color="primary"
        variant="outlined"
      />
    </Box>
  );
}

export default memo(PaginatedEventList);
