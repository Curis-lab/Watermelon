import { Box , styled } from "@mui/material";


export const StyledModelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "35rem",
  width: "90%",
  border: "none",
  background: "#fff",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "80%",
  },
  borderRadius: "0.5rem",
  overflow: "hidden",
}));

export const StyledDivWithBackgroundImage = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  backgroundImage:
    "url(https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  minWidth: "50%",
}));