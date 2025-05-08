import { Button, Divider, Typography } from "@mui/material";
import { useEvent } from "../../../hooks/api/getters/useEvents/useEvents";
import EventList from "../../templates/EventList";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //

import RoundedDropDown from "../../atoms/Dropdown/RoundedDropDown/RoundedDropDown";

const Events = () => {
  const [date, setDate] = useState(new Date());
  const { events } = useEvent();

  const handleDateSelection = (e: any) => {
    console.log(e);
  };
  return (
    <div style={{paddingInline: '100px'}}>
      <Typography variant="h1">Welcome 'Nyan Lin</Typography>
      <Typography variant="h3">Events from your groups</Typography>
      <div style={{ display: "flex", gap:'10px' }}>
        <div>
          <Calendar date={date} onChange={(e) => handleDateSelection(e)} />
        </div>

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <RoundedDropDown />
            <RoundedDropDown />
          </div>
          <Typography sx={{fontSize: '36px', fontWeight:'bold'}}>Today</Typography>
          <Divider sx={{marginBlockEnd: '20px', border:'2px solid #000'}} />
          <EventList {...events} />
        </div>
      </div>
    </div>
  );
};

export default Events;
