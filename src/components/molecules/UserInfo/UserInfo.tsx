import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

/**
 *
 * sometime, UserInfo is not
 */

function UserInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Avatar  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyawVbjORfalGKAFdWZyJbg8cH12xX-MlLw&s" />
      <Box>
        <Typography variant="h4">Emaily</Typography>
        <Typography variant="caption">Software Engineer at Google</Typography>
      </Box>
    </Box>
  );
}

export default UserInfo;
