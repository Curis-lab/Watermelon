import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AccessTime, VideocamOutlined } from "@mui/icons-material";
import {
  StyledEventDescriptionAndTime,
  StyledEventDiscoveryLayout,
  StyledEventTimeAndCalender,
  StyledEventTimeDescription,
  StyledLinProfile,
} from "./EventDiscovery.styled";
import { getEventInfoAndAuthorProfileById } from "../../../hooks/api/tanstack-query/event-route";

const EventDiscoveryPage = () => {
  //todo: add event details by the page
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: eventInfo } = useQuery({
    queryKey: ["event", id],
    queryFn: getEventInfoAndAuthorProfileById(id),
  });

  return (
    <StyledEventDiscoveryLayout>
      <div style={{ borderBottom: "1px solid #000", paddingBlock: "20px" }}>
        <Typography variant="h1">{eventInfo?.data?.name}</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            style={{
              border: "2px solid #000",
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={
              eventInfo?.data?.hostedBy?.profileImage ||
              "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="image"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography>Hosted by</Typography>
            <StyledLinProfile
              onClick={() =>
                navigate(`/mentor/${eventInfo?.data?.hostedBy.id}`)
              }
            >
              {eventInfo?.data?.hostedBy.name || "Unknown"}
            </StyledLinProfile>
          </div>
        </div>
      </div>
      {/* I want to implement layout for this */}
      <StyledEventDescriptionAndTime>
        <div>
          <img
            src={eventInfo?.data?.imageUrl}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div>{eventInfo?.data.description}</div>
          <div></div>
        </div>
        <div>
          <StyledEventTimeAndCalender>
            <StyledEventTimeDescription>
              <AccessTime />
              <div>
                <Typography>
                  {`${eventInfo?.data?.date} Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday`}
                </Typography>
                <Typography>Add to calendar</Typography>
              </div>
            </StyledEventTimeDescription>
            <StyledEventTimeDescription>
              <VideocamOutlined />
              <div>
                <Typography>Online event</Typography>
                <Typography>Link visiable for attendees</Typography>
              </div>
            </StyledEventTimeDescription>
          </StyledEventTimeAndCalender>
        </div>
      </StyledEventDescriptionAndTime>
    </StyledEventDiscoveryLayout>
  );
};

export default EventDiscoveryPage;
