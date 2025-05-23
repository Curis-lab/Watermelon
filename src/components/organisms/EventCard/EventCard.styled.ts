import { Box, styled } from "@mui/material";

export const StyeldDecription = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  paddingInline: "10px",
});

export const StyledCardWrapper = styled("div")(({ theme }) => ({
  padding: "3px",
  borderRadius: "4px",
  backgroundColor: "#D9D9D9",
  display: "flex",
  flexDirection: 'column',
  [theme.breakpoints.up("md")]: {
    width: "674px",
    flexDirection: 'row',
  },
  [theme.breakpoints.up("lg")]: {
    width: "828px",
    flexDirection: 'row'
  },
}));
