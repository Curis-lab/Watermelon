import { styled } from "@mui/material";

export const StyledEventsLayout = styled("div")(({ theme }) => ({
  paddingInline: "20px",
  [theme.breakpoints.up("md")]: {
    paddingInline: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

export const StyledButton = styled("button")({
  padding: "10px",
  background: "blue",
  color: "white",
  borderRadius: "5px",
  width: "100px",
  textAlign: "center",
  boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 1)",
});

export const StyledPageCount = styled("span")({
  fontSize: "1.13em",
  alignContent: "center",
});

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

export const StyledBodyComponent = styled("div")({
  padding: "36px 16px",
  background: "white",
  zIndex: 1000,
  position: "absolute",
  left: "0",
  width: "100%",
});
