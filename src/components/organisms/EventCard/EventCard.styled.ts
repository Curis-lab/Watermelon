import { Box, styled } from "@mui/material";

export const StyeldDecription = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  paddingInline: "10px",
  minHeight: '100%',
});

export const StyledCardWrapper = styled("div")(({ theme }) => ({
  padding: "5px",
  borderRadius: "4px",
  backgroundColor: "#D9D9D9",
  display: "grid",
  gap:'5px',
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: '1fr 2fr'
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: '1fr 2fr'
  },
}));
