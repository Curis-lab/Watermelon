import { Box, styled } from "@mui/material";

export const StyeldDecription = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  paddingInline: "10px",
});

export const StyledCardWrapper = styled("div")(({ theme }) => ({
  padding: "5px",
  borderRadius: "4px",
  backgroundColor: "#D9D9D9",
  display: "grid",
  gap:'5px',
  [theme.breakpoints.up("md")]: {
    width: "674px",
    gridTemplateColumns: '1fr 2fr'
  },
  [theme.breakpoints.up("lg")]: {
    width: "828px",
    gridTemplateColumns: '1fr 2fr'
  },
}));
