import { Box, Typography } from "@mui/material";
import React from "react";

function HeroHeader(props: {
  white?: boolean;
  heading: string;
  tagline: string;
}) {
  return (
    <Box
      sx={{
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h5" color={props.white ? "white" : "black"}>
        {props.heading}
      </Typography>
      <Typography
        variant="body1"
        color={props.white ? "white" : "black"}
        sx={{
          textAlign: "justify",
        }}
      >
        {props.tagline}
      </Typography>
    </Box>
  );
}

export default HeroHeader;
