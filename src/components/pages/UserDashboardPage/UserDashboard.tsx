import EventList from "../../templates/EventList";
import { DataFetcher } from "../../../lib/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { styled } from "@mui/material";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState } from "react";

/**
 *
 * @returns
 * Dashboard Page
 * List of upcoming and past meetings
 * Quick access to create or join a meeting
 * Personalized meeting recommendations
 *
 */

const StyledContainerWrapper = styled("div")({
  display: "flex",
});

const UserDashboardPage = () => {
  const dataFetcher = new DataFetcher();
  const queryClient = useQueryClient();
  const [date, setDate] = useState<Date>(new Date());
  const {
    data,
    isLoading,
    isError,
    error: errorMessage,
  } = useQuery({
    queryKey: ["events", date],
    queryFn: (date) => {
      const currentDate = new Date();
      const selectedDate = new Date(date.queryKey[1] as string);

      if (selectedDate.toDateString() === currentDate.toDateString()) {
        return dataFetcher.fetchData("/events");
      } else {
        const selectedDate = new Date(date.queryKey[1] as string)
          .toISOString()
          .split("T")[0];

        return dataFetcher.fetchData(
          `/events/search/by-date?date=${selectedDate}`
        );
      }
    },
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (isError) {
    return <div>Error on something: {errorMessage}</div>;
  }

  const handleDateSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e);
    queryClient.invalidateQueries({ queryKey: ["events"] });
  };

  return (
    <StyledContainerWrapper>
      <div>
        <Calendar date={date} onChange={(e) => handleDateSelection(e)} />
      </div>
      <EventList {...data} />
    </StyledContainerWrapper>
  );
};

export default UserDashboardPage;
