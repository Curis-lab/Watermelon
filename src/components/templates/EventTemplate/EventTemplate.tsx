// import { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import PaginatedEventList from "../../organisms/PaginatedEventList/PaginatedEventList";
import { usePagination } from "../../../hooks/usePagination";
// import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import useAuthInfo from "../../../hooks/api/getters/useAuthInfo/useAuthInfo";
import { IEvent } from "../../../interfaces/Event";
import componentWithLoading from "../../common/componentWithLoading";

const StyledEventsLayout = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

const StyledEventAndCalendarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {},
}));
// const StyledFeatureLayout = styled(Box)(({ theme }) => ({
//   background: "#000",
//   height: "400px",
//   width: "100%",
//   [theme.breakpoints.down('sm')]:{
//     width:'452.62px'
//   }
// }));

interface IEventTemplate {
  /** search props */
  searchQuery?: string;
  handleSearchQuery?: () => void;
  handleInputFocusChange?: () => void;
  handleKeyPress?: () => void;
  /** event props */
  events: IEvent[] | [];
  loading: boolean;
}

function EventList({ events }: { events: IEvent[] }) {
  const { itemsPerPage, currentItems, handleChange, page } = usePagination({
    events: events,
    itemsPerPage: 5,
  });
  return (
    <PaginatedEventList
      events={currentItems}
      page={page}
      count={Math.ceil(Object.values(events).length / itemsPerPage)}
      handleChange={() => handleChange}
    />
  );
}

function EventTemplate({ events, loading }: IEventTemplate) {
  const { user } = useAuthInfo();
  // const [selected, setSelected] = useState<{ from?: Date; to?: Date }>();

  return (
    <StyledEventsLayout>
      <Box
        sx={{
          marginBlock: "1.8rem",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Welcome's {user.name || "Guest"}
        </Typography>
        <Typography>Events from your groups</Typography>
      </Box>
      <StyledEventAndCalendarLayout>
        {/* <StyledFeatureLayout>
          
          <Box
            sx={{
              height: "400px",
              width: "400px",
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
        </StyledFeatureLayout> */}
        {events.length > 0 ? (
          <>
            {componentWithLoading<{ events: IEvent[] }>(EventList)({
              loading,
              events,
            })}
          </>
        ) : (
          <Typography variant="h2">There is No Events</Typography>
        )}
      </StyledEventAndCalendarLayout>
    </StyledEventsLayout>
  );
}

export default EventTemplate;
