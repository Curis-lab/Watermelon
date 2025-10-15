import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

interface IUserInfo {
  children: React.ReactNode;
}

function UserInfo({ children }: IUserInfo) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignContent: "center",
      }}
    >
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyawVbjORfalGKAFdWZyJbg8cH12xX-MlLw&s" />
      <Box>{children}</Box>
    </Box>
  );
}
function Name() {
  return <Typography variant="h4">Emaily</Typography>;
}
function Description() {
  return <Typography variant="caption">Software Engineer at Google</Typography>;
}

UserInfo.Name = Name;
UserInfo.Description = Description;

export default UserInfo;
