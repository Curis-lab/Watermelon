import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function UserInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Avatar />
      <Box>
        <Typography>Emaily</Typography>
        <Typography variant="caption">Software Engineer at Google</Typography>
      </Box>
    </Box>
  );
}

export default UserInfo;
