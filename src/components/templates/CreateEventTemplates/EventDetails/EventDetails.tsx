import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";


const ContentWrapper = ({ title, children }:{title:string, children: React.ReactNode}) => {
  return (
    <Box sx={{
        padding: '4px'
    }}>
      <Typography variant="h2" sx={{
        marginBottom: '8px'
      }}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

function EventDetails() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        },
        gap: "10px",
      }}
    >
      <ContentWrapper title="Event Details">
        <>
          <TextField
            fullWidth
            label="Event Title"
            placeholder="Enter a clear, descriptive name"
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            placeholder="What is this event about?"
          />
          <TextField
            select
            fullWidth
            label="Category"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a category</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="meetup">Meetup</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="online">Online Event</option>
          </TextField>
          <TextField
            fullWidth
            label="Tags"
            placeholder="Enter tags separated by commas (e.g. tech, startup, design)"
          />
        </>
      </ContentWrapper>
      <ContentWrapper title="Timing & Schedule">
        <>
          <TextField
            fullWidth
            type="datetime-local"
            label="Start Date & Time"
          />
          <TextField fullWidth type="datetime-local" label="End Date & Time" />
          <TextField
            fullWidth
            label="Timezone"
            placeholder="Optional for global events"
          />
        </>
      </ContentWrapper>
      <ContentWrapper title="Location Details">
        <>
          <TextField
            select
            fullWidth
            label="Location Type"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select location type</option>
            <option value="physical">Physical Location</option>
            <option value="online">Online</option>
          </TextField>
          <TextField
            fullWidth
            label="Location Details"
            placeholder="Enter venue address or online meeting link"
          />
        </>
      </ContentWrapper>
      <ContentWrapper title="Visual & Branding">
        <Button variant="contained" component="label">
          Upload Banner Image
          <input type="file" hidden accept="image/*" />
        </Button>
      </ContentWrapper>
    </Box>
  );
}

export default EventDetails;
