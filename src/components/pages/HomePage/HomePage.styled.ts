import { Box, Container, styled } from "@mui/material";

export const StyledBox = styled(Container)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  maxWidth: "500px",
  backgroundColor: theme.palette.secondary.light,
}));
export const StyledDescriptionBox = styled(Box)(({ theme }) => ({
  width: "50%",
  height: theme.spacing(100),
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.palette.action.active
}));
