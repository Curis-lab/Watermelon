import React from "react";
import { Box, Typography } from "@mui/material";
interface IContentHeader {
  title: string;
  subtitle?: string;
}

function ContentHeader(props: IContentHeader) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.2em" }}>
      <Typography
        variant="h3"
        sx={{
          textWrap: "wrap",
        }}
      >
        {props.title}
      </Typography>
      {props.subtitle && <Typography>{props.subtitle}</Typography>}
    </Box>
  );
}

export default ContentHeader;
