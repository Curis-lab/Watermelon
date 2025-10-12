import { Box, IconButton, styled, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
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
import ProfileAvatar from "../../atoms/avatars";
import ContentSection from "../../organisms/ContentSection/ContentSection";
import UserInfo from "../../molecules/UserInfo/UserInfo";
import MetadataCard from "../../organisms/MetadataCard/MetadataCard";

/**
 * this page only for render
 */

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
  const navigate = useNavigate();
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ProfileAvatar
              imageurl="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              size="md"
            />

            <Box>
              <Typography sx={{ fontSize: "0.8rem" }}>Hosted by</Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
                onClick={() => navigate(`/mentor/${eventInfo.hostedBy.id}`)}
              >
                {eventInfo.hostedBy.name || "Tun Tun"}
              </Typography>
            </Box>
          </Box>
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
              <UserInfo />
            </Box>
          </Box>

          <StyledEventTimeAndCalender>
            <StyledEventTimeDescription>
              <MetadataCard
                icon={
                  <AccessTime
                    sx={{
                      fontSize: 40,
                      color: "#C71E64",
                    }}
                  />
                }
                title="Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday"
              ></MetadataCard>
              <IconButton color="primary">
                <EditCalendar />
              </IconButton>
            </StyledEventTimeDescription>
            <StyledEventTimeDescription>
              <MetadataCard
                icon={
                  <VideocamOutlined
                    sx={{
                      fontSize: 40,
                      color: "#C71E64",
                    }}
                  />
                }
                title="Online event"
                sub="Link visible for attendees"
              >
                {/* <MetadataCard.Text /> */}
                <MetadataCard.Link url="https://www.google.com" />
              </MetadataCard>
            </StyledEventTimeDescription>
          </StyledEventTimeAndCalender>
        </EventDescriptionLayout>
      )}
    </div>
  );
};

export default EventDiscoveryPage;
