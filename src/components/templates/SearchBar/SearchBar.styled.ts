import { styled } from "@mui/material";

export const StyledSearchBarContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  maxWidth: "1034px",
  width: "400px",
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));

export const StyledInput = styled("input")({
  display: "inline-block",
  width: "100%",
  padding: "10px 48px",
  fontsize: "16px",
  lineHeight: "18px",
  color: "#202020",
  border: "0",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "#bcbcbc",
  },
});

export const StyledBodyComponent = styled("div")({
  padding: "36px 16px",
  background: "white",
  zIndex: 1000,
  position: "absolute",
  left: "0",
  width: "100%",
});
