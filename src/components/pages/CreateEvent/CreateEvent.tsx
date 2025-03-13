import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { styled, TextField, Box, Typography } from "@mui/material";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
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
    <Box>
      <Box>
        <Typography variant="h2">Create event</Typography>
        <Typography>Divi Phoenix</Typography>
      </Box>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImageFile(file);
            }
          }}
        />
        <input
          type="text"
          value={collectData.name}
          onChange={(e) => handleInputChange(e, "name")}
          placeholder="Event Name"
        />
        <textarea
          value={collectData.description}
          onChange={(e) => handleInputChange(e, "description")}
          placeholder="Event Description"
        />
        <input
          type="date"
          value={collectData.date}
          onChange={(e) => handleInputChange(e, "date")}
        />
        {/* <input
        type="text"
        value={collectData.location}
        onChange={(e) => handleInputChange(e, "location")}
        placeholder="Event Location"
      /> */}
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
        {/* <input
        type="text"
        value={collectData.hostedId}
        onChange={(e) => handleInputChange(e, "hostedId")}
        placeholder="Hosted ID"
      /> */}
        <button type="submit">Create Event</button>
      </StyledForm>
    </Box>
  );
};

export default CreateEvent;
