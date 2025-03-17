import { Typography } from "@mui/material";
import {
  CardContainer,
  StyledCardWrapper,
  StyeldDecription,
} from "./EventCard.styled";
import { Event } from "../../../types/Event";
import { Link } from "react-router-dom";

const EventCard = ({ props }: { props: Event }) => {
  const { date, name, description, location, imageUrl, _id } = props;
  return (
    <StyledCardWrapper>
      <Link to={`/event/${_id}`}>
        <CardContainer>
          <img src={imageUrl} alt="card" style={{ width: "200px", borderRadius: '5px', border: '1px solid #000' }} />
          <StyeldDecription>
            <Typography color="secondary">
              {new Date(date).toLocaleDateString()}
            </Typography>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4">
              {description.length > 200 ? `${description.substring(0, 80)}...` : description}
            </Typography>
            <Typography variant="caption">{location}</Typography>
          </StyeldDecription>
        </CardContainer>
        <Typography variant="caption">
          {props.attendees.length} attendees
        </Typography>
      </Link>
    </StyledCardWrapper>
  );
};

export default EventCard;
