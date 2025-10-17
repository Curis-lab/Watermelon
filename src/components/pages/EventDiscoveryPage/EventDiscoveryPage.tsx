import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  AccessTime,
  VideocamOutlined,
  EditCalendar,
} from "@mui/icons-material";
import {
  StyledEventTimeAndCalender,
  StyledEventTimeDescription,
} from "./EventDiscovery.styled";
import { getEventInfoAndAuthorProfileById } from "../../../hooks/api/tanstack-query/event-route";
import ContentSection from "../../organisms/ContentSection/ContentSection";
import UserInfo from "../../molecules/UserInfo/UserInfo";
import MetadataCard from "../../organisms/MetadataCard/MetadataCard";
import { useState } from "react";

const EventDescriptionLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const EventDiscoveryPage = () => {
  //todo: add event details by the page
  const { id } = useParams<{ id: string }>();
  const [loading] = useState(true);
  const { data: eventInfo, isSuccess } = useQuery({
    queryKey: ["event", id],
    queryFn: () => getEventInfoAndAuthorProfileById(id as string),
  });

  const c = {
    event: {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgURL:
        "https://www.vidyard.com/wp-content/uploads/video-for-event-marketing.jpg",
      time: "Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday",
    },
    organizer: {
      name: "Desomo",
      company: "Google",
      position: "Senior Web developer",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
    },
    speaker: {
      name: "susu",
      company: "Facebook",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
      position: "Senior Web Engineer",
    },
  };
  /**
   * I need to set loader
   */
  if(loading){
    return <div>...Loading</div>
  }
  
  return (
    <div>
      {isSuccess && (
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
      )}

      {isSuccess && (
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
      )}
    </div>
  );
};

export default EventDiscoveryPage;
