import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  AccessTime,
  VideocamOutlined,
  EditCalendar,
} from "@mui/icons-material";
import {
  StyledEventTimeAndCalender,
  StyledEventTimeDescription,
} from "./EventDiscovery.styled";
import ContentSection from "../../organisms/ContentSection/ContentSection";
import UserInfo from "../../molecules/UserInfo/UserInfo";
import MetadataCard from "../../organisms/MetadataCard/MetadataCard";
import { useEvent } from "../../../hooks/api/getters/useEvent/useEvent";

const EventDescriptionLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const EventDiscoveryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { eventDefination, loading } = useEvent(id);

  if (loading) {
    return <div>...Loading</div>;
  }

  const c = {
    event: {
      name: eventDefination.name,
      description: eventDefination.description,
      imgURL: eventDefination.imageUrl,
      time: "Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday",
    },
    organizer: {
      name: eventDefination?.hostedBy.name,
      company: "Google",
      position: "Senior Web developer",
      url: eventDefination?.hostedBy.profileImage,
    },
    speaker: {
      name: eventDefination?.hostedBy.name,
      company: "Facebook",
      url: eventDefination?.hostedBy.profileImage,
      position: "Senior Web Engineer",
    },
  };

  return (
    <div>
      <Box sx={{ borderBottom: "1px solid #000", paddingBlock: "20px" }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "5px",
          }}
        >
          {c.event.name}
        </Typography>

        <UserInfo profile={c.organizer}>
          <UserInfo.Description />
          <UserInfo.Name />
        </UserInfo>
      </Box>
      <EventDescriptionLayout>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img
            src={c.event.imgURL}
            alt="event profile image"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />

          <ContentSection
            title="Description"
            description={c.event.description}
          />
          <Box sx={{ display: "flex" }}>
            <Typography>Speaker:</Typography>
            <UserInfo profile={c.speaker}>
              <UserInfo.Name />
              <UserInfo.Description />
            </UserInfo>
          </Box>
        </Box>

        <StyledEventTimeAndCalender>
          <StyledEventTimeDescription>
            <MetadataCard
              Icon={AccessTime}
              content={{
                title: c.event.time,
              }}
            >
              <MetadataCard.Text />
            </MetadataCard>
            <IconButton color="primary">
              <EditCalendar />
            </IconButton>
          </StyledEventTimeDescription>
          <StyledEventTimeDescription>
            <MetadataCard
              Icon={VideocamOutlined}
              content={{
                title: "Online event",
                sub: "Link visible for attendees",
              }}
            >
              <MetadataCard.Text />
              {/* <MetadataCard.Link url="https://www.google.com" /> */}
            </MetadataCard>
          </StyledEventTimeDescription>
          <Button
            sx={{
              fontSize: "18px",
              borderRadius: "20px",
              border: "1px solid #000",
            }}
          >
            Attend Online
          </Button>
        </StyledEventTimeAndCalender>
      </EventDescriptionLayout>
    </div>
  );
};

export default EventDiscoveryPage;
