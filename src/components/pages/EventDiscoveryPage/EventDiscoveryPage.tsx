import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      const userId = '67ccfb73b0bdef777700027b';
      await axios.post(`http://localhost:3000/api/events/${id}/join`, { userId });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error joining event:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
  return (
    <Box>
      {eventInfo !== null ? (
        <>
          <Box>
            <Typography variant="h2">{eventInfo?.data?.name}</Typography>
          </Box>
          <Box>
            <img
              src={eventInfo?.data?.imageUrl}
              alt="image"
              style={{ width: "50%" }}
            />
            <Typography>{eventInfo?.data?.description}</Typography>
          </Box>
          <Box>
            <Typography>Location: {eventInfo?.data?.location}</Typography>
            <Typography>
              Date: {new Date(eventInfo?.data?.date).toLocaleDateString()}
            </Typography>
          </Box>
        </>
      ) : (
        <></>
      )}
      <Button onClick={handleJoinEvent}>Join Event</Button>
    </Box>
  );
};

export default EventDiscoveryPage;
