import { Box, styled } from "@mui/material";

export const StyledContainer = styled("div")({
  minWidth: "100%",
  minHeight: "100vh",
  backgroundImage:
    "url(https://i.pinimg.com/1200x/00/32/70/003270ad0273b9628256d88a1492ff5e.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  paddingTop: "5rem",
  paddingBottom: "4rem",
  display: "flex",
  justifyContent: "flex-end",
  borderRadius: "10px",
});

export const StyledSubmitButton = styled("button")({
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#000",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "20px",
  "&:disabled": {
    backgroundColor: "#ccc",
    color: "#666",
    cursor: "not-allowed",
  },
});

export const StyledForm = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.4em",
  paddingBlock: "1em",
});
export const StyledContent = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  alignItems: "flex-end",
  maxWidth: "50%",
}));
