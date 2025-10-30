import { styled } from "@mui/material";

export const StyledDisplayProfileLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  paddingBlock: "40px",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingInline: "30px",
  },
  [theme.breakpoints.up("md")]: {
    paddingInline: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

export const StyledDescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
