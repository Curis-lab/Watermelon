import { styled } from "@mui/material";

export const LayoutWrapper = styled("div")({
  display: "flex",
  height: "100vh",
  width: "100vw",
});

export const ListOfUserWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "200px",
});

export const ChatWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  background: 'red'
});
