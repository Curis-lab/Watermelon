import { styled } from "@mui/material";

export const StyledMentorCardLayoutController = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("md")]: {
    paddingOutlined: "10px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "370px",
  },
}));
