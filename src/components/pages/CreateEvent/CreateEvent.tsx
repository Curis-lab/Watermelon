import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import {
  styled,
  TextField,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const StyledCreateEventWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));
const StyledFormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  padding: "30px",
  gap: "10px",
});
const StyledLinkWrapper = styled("div")({
  display: "flex",
});
const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "10px",
});

const CreateEvent = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [collectData, setCollectData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    hostedId: "67cbf0f7a9a9b1e660780438",
  });
  const mutation = useMutation({
    mutationFn: async (newEvent: FormData) => {
      const response = await axios.post(
        "http://localhost:3000/api/events",
        newEvent,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      // Handle success (e.g., show a success message, redirect, etc.)
    },
    onError: (error: Error) => {
      console.error(
        "An error occurred while creating the event:",
        error.message
      );
      // Handle error (e.g., show an error message)
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) {
      console.log("Image file is required");
      return;
    }
    const formData = new FormData();
    const { name, description, date, location, hostedId } = collectData;
    formData.append("name", name);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("hostedId", hostedId);
    formData.append("image", imageFile);

    mutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setCollectData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <StyledCreateEventWrapper>
      <StyledFormWrapper>
        <Box>
          <Typography variant="h2">Create event</Typography>
          <Typography>Divi Phoenix</Typography>
        </Box>
        <Divider />
        <StyledForm onSubmit={handleSubmit}>
          <Typography variant="h4">Title (required)</Typography>
          <TextField
            type="text"
            value={collectData.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Event title"
            size="small"
          />
          <Typography variant="h4">Date and time</Typography>
          <input
            type="date"
            value={collectData.date}
            onChange={(e) => handleInputChange(e, "date")}
          />
          <Typography variant="h4">Featured photo</Typography>
          {/* start file */}
          <Box
            sx={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <input
                id="file-input"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                }
              }}
              style={{display: 'none'}}
            />
            <label htmlFor="file-input">Drag drop some file</label>
          </Box>
          {/* end file */}
          <Typography variant="h4">Description</Typography>
          <Typography variant="caption">
            Let your attendess know what to expect, icluding the agenda, what
            they need to bring and how to find the group.
          </Typography>
          <TextField
            multiline
            rows={4}
            size="small"
            value={collectData.description}
            onChange={(e) => handleInputChange(e, "description")}
            placeholder="Event Description"
          />
          <Typography variant="h4">Location</Typography>
          <TextField
            type="text"
            value={collectData.location}
            onChange={(e) => handleInputChange(e, "location")}
            placeholder="Event Location"
            size="small"
          />
          <TextField
            type="text"
            value={collectData.hostedId}
            onChange={(e) => handleInputChange(e, "hostedId")}
            placeholder="hostedId"
            size="small"
          />
          <Button type="submit" variant="contained">
            Publish
          </Button>
        </StyledForm>
      </StyledFormWrapper>
      <Box>
        <StyledPaper>
          <Typography variant="h2">Tips for a great event</Typography>
          <>
            <Typography variant="h4">Be descriptive</Typography>
            <Typography>
              A good title immediately gives people an idea of what the event is
              about.
            </Typography>
          </>
          <>
            <Typography variant="h4">Get oragnized</Typography>
            <Typography>
              Describe things in a clear order so it's easy to digest. Start
              with an overall description of the event and include a basic
              agenda, before you move into really specific details.
            </Typography>
          </>

          <>
            <Typography variant="h4">Add an Image</Typography>
            <Typography>
              Upload a photo or iamge to give member a better feel for the
              event.
            </Typography>
          </>
          <StyledLinkWrapper>
            <OpenInNew />
            <Typography>Get more tip the Organizer Guide</Typography>
          </StyledLinkWrapper>
        </StyledPaper>
      </Box>
    </StyledCreateEventWrapper>
  );
};

export default CreateEvent;
