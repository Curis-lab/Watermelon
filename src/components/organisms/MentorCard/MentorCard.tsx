import { Box, styled, Typography } from "@mui/material";
import { ChatBubbleOutline, WorkOutline } from "@mui/icons-material";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import IconDescription from "../../molecules/IconDescription/IconDescription";

const StyledContainerBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "rgba(255, 255, 255)",
  padding: "8px",
  transition: "opacity 0.3s",
  borderRadius: "4px",
  minWidth: "100%",
  minHeight: "100%",
});

const StateItem = (props: { label: string; value: string }) => (
  <Box>
    <Typography variant="caption">{props.label}</Typography>
    <Typography variant="h4">{props.value}</Typography>
  </Box>
);

interface IMentor {
  _id: string;
  name: string;
  navigator: () => void;
}

function MentorCard(user: IMentor) {
  return (
    <StyledContainerBox
      onClick={() => user.navigator(`/mentor/${user._id}`)}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "3px",
          overflow: "hidden",
          minHeight: "40%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s"
          alt="mentor"
        />
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ContentHeader title={user.name} />
        <>
          <IconDescription
            Icon={WorkOutline}
            description="Program Manager, Product Manger at google"
          />
          <IconDescription
            Icon={ChatBubbleOutline}
            description=" 41 sessions,(5 reviews)"
          />
        </>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(16, 14, 14, 0.43)",
            padding: "0.41em",
            borderRadius: "3px",
          }}
        >
          <StateItem {...{ label: "Experiences", value: "4 years" }} />
          <StateItem {...{ label: "Avg.Attendees", value: "100%" }} />
        </div>
      </div>
    </StyledContainerBox>
  );
}

export default MentorCard;
