import { Paper, styled } from "@mui/material";

export const StyledEventDiscoveryLayout = styled("div")(({ theme }) => ({
  paddingInline: "20px",
  [theme.breakpoints.up("md")]: {
    paddingInline: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

export const StyledEventDescriptionAndTime = styled("div")(({ theme }) => ({
  display: "flex",
  paddingBlockStart:'20px',
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const StyledEventTimeAndCalender = styled(Paper)({
    padding: '20px',
    borderRadius: '10px',
})
export const StyledEventTimeDescription = styled('div')({
    display:'flex',
    gap: '10px',
    paddingBlock:'0.31em'
})

export const StyledLinProfile = styled('div')({
    cursor: 'pointer'
})