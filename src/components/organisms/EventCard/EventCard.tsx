import { Skeleton, Typography, styled ,Box} from "@mui/material";
import {
  StyledCardWrapper,
  StyeldDecription,
} from "./EventCard.styled";
import { Event } from "../../../types/Event";
import { useNavigate } from "react-router-dom";

const StyledSkeleton = styled(Skeleton)(({theme})=>({
  width:'100%',
  height: '100%',
  padding: '30px',
  borderRadius: '3px',
  [theme.breakpoints.down('md')]:{
    height: '200px'
  },
}))

const EventCard = ({ props }: { props: Event }) => {
  const { name,  location, _id } = props;
  const navigate = useNavigate();
  return (
    <StyledCardWrapper onClick={() => navigate(`/event/${_id}`)}>
      {/* <img
        src={imageUrl}
        alt="card"
        style={{
          width: "239px",
          height: "160px",
          borderRadius: "3px",
          objectFit: "cover",
        }}
      /> */}
      <Box sx={{width: '100%'}}>

      <StyledSkeleton variant="rectangular" animation="wave"/>
      </Box>  
      <StyeldDecription>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#644D1A",
              opacity: 0.8,
            }}
          >
            WEB, APR 16.10:30 PM MMT
            {/* {new Date(date).toLocaleDateString()} */}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Suggestion
          </Typography>
        </div>
        <div style={{ paddingBlock: "20px", flex: 1 }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#000", paddingBlock:'3px' }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: "16px", opacity: '0.8' }}>{location}</Typography>
        </div>
        {/* <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {description.length > 200
              ? `${description.substring(0, 80)}...`
              : description}
          </Typography> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{fontSize: '16px', opacity: '0.5'}}>299 attendees</Typography>
        </div>
      </StyeldDecription>
    </StyledCardWrapper>
  );
};

export default EventCard;
