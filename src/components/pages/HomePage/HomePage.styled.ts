import { Box, Container, styled } from "@mui/material";

export const StyledBox = styled(Container)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  maxWidth: "500px",
  backgroundColor:  "#f0f0f0", // Fallback color
}));
export const StyledDescriptionBox = styled(Box)(({ theme }) => ({
  width: "50%",
  height: theme.spacing(100),
  backgroundColor:  "#f0f0f0", // Fallback color
  borderRadius: theme.shape.borderRadius, // Use a default borderRadius
}));
export const StyledNavigatorContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));
