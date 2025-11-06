import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Autocomplete,
} from "@mui/material";
import { IEventAPIAcceptor } from "../../../../interfaces/Event";
import LimitTags from "../../../atoms/AutocompleteLimitTags/AutocompleteLimitTags";

const ContentWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        padding: "4px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>
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

function EventDetails({
  formData,
  inputHandler,
}: {
  formData: IEventAPIAcceptor;
  inputHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.SyntheticEvent<Element, Event>
  ) => void;
}) {
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
            value={formData.title}
            onChange={inputHandler}
            name="title"
            fullWidth
            label="Event Title"
            placeholder="Enter a clear, descriptive name"
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            placeholder="What is this event about?"
            value={formData.description}
            onChange={inputHandler}
          />
          <LimitTags tagsValue={formData.tags} inputHandler={inputHandler} />
        </>
      </ContentWrapper>
      <ContentWrapper title="Timing & Schedule">
        <>
          <TextField
            fullWidth
            type="datetime-local"
            label="Start Date & Time"
            value={formData.date}
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            type="datetime-local"
            label="End Date & Time"
            value={formData.date}
            onChange={inputHandler}
          />
        </>
      </ContentWrapper>
      <ContentWrapper title="Location Details">
        <>
          <Autocomplete
            value={formData.location || "Online"}
            onChange={inputHandler}
            options={["Physical Location", "Online"]}
            defaultValue={"Online"}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            value={formData.address}
            onChange={inputHandler}
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
