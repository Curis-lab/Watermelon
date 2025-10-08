import { Box, Typography } from "@mui/material";
import { StyledCardWrapper, StyeldDecription } from "./EventCard.styled";
import { Event } from "../../../types/Event";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import defaultImage from "../../../assets/default.webp";
import { memo } from "react";

/**
 *
 * @param param0 can I avoid template rendering
 * @returns
 */



const EventCard = ({ props }: { props: Event }) => {
  const { name, location, id, imageUrl, attendees } = props;
  const navigate = useNavigate();
  //this is render at least 2*10 times how can I reduce it

  console.log("this is event render");

  return (
    <StyledCardWrapper onClick={() => navigate(`/event/${id}`)}>
      <img
        src={imageUrl || defaultImage}
        alt="event"
        style={{
          width: "100%",
          height: "160px",
          borderRadius: "3px",
          objectFit: "cover",
        }}
      />
      {/* <Box sx={{width: '100%'}}>

      <StyledSkeleton variant="rectangular" animation="wave"/>
      </Box>   */}
      <StyeldDecription>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            WEB, APR 16.10:30 PM MMT
            {/* {new Date(date).toLocaleDateString()} */}
          </Typography>
          <Typography variant="caption">Suggestion</Typography>
        </Box>
        <ContentHeader {...{ title: name, subtitle: location }} />
        <Typography variant="caption">{attendees.length} attendees</Typography>
      </StyeldDecription>
    </StyledCardWrapper>
  );
};

export default memo(EventCard);
