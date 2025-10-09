import { Avatar, Box, Typography } from "@mui/material";

const ChatProfile = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "4px",
      padding: "4px",
      borderRadius: "5px",
      ":hover": {
        backgroundColor: "blue",
      },
      cursor: "pointer",
    }}
  >
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcMhaDYFs7fgKXp0EbLr7eleZa7dUrXq2tg&s" />
    <Typography
      variant="h4"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      Johon
    </Typography>
  </Box>
);

const UserList = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "block" },
        gap: "10px",
      }}
    >
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
    </Box>
  );
};

export default UserList;
