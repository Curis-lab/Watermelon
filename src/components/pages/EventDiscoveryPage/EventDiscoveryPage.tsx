import { Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AccessTime, VideocamOutlined } from "@mui/icons-material";

const EventDiscoveryPage = () => {
  //todo: add event details by the page
  const { id } = useParams<{ id: string }>();
  const { data: eventInfo } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/api/events/${id}`
      );
      return response;
    },
  });
  //todo: add join event button
  const handleJoinEvent = async () => {
    try {
      const userId = "67ccfb73b0bdef777700027b";
      await axios.post(`http://localhost:3000/api/events/${id}/join`, {
        userId,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error joining event:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  
  return (
    <div style={{ paddingBlock: "20px", paddingInline: "100px" }}>
      <div style={{ borderBottom: "1px solid #000", padding: "20px" }}>
        <Typography variant="h2">
          {eventInfo?.data?.name}
        </Typography>
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
            src={eventInfo?.data?.hostedBy?.profileImage || "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"}
            alt="image"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography>Hosted by</Typography>
            <Typography variant="h4">
              {eventInfo?.data?.hostedBy.name || 'Unknown'}
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "70%" }}>
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
        <div style={{ width: "30%" }}>
          <Paper>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <AccessTime />
              <div>
                <Typography>
                  {`${eventInfo?.data?.date} Sunday, March 30, 2025, 8:15 to 10:15PM MMT every week on Sunday`}
                </Typography>
                <Typography>Add to calendar</Typography>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <VideocamOutlined />
              <div>
                <Typography>Online event</Typography>
                <Typography>Link visiable for attendees</Typography>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default EventDiscoveryPage;
