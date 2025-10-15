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
  const { data: eventInfo, isSuccess } = useQuery({
    queryKey: ["event", id],
    queryFn: () => getEventInfoAndAuthorProfileById(id as string),
  });

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
            {eventInfo.name}
          </Typography>

          <UserInfo>
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
              src="https://www.vidyard.com/wp-content/uploads/video-for-event-marketing.jpg"
              alt="image"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />

            <ContentSection
              title="Description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid."
            />
            <Box sx={{ display: "flex" }}>
              <Typography>Speaker:</Typography>
              <UserInfo>
                <UserInfo.Name />
                <UserInfo.Description />
              </UserInfo>
            </Box>
          </Box>

          <StyledEventTimeAndCalender>
            <StyledEventTimeDescription>
              <MetadataCard
                Icon={AccessTime}
                title="Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday"
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
                title="Online event"
                sub="Link visible for attendees"
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
