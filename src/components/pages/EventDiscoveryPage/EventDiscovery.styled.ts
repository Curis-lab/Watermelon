import { Paper, styled } from "@mui/material";

export const StyledEventDescriptionAndTime = styled("div")({
  display: "block",
  paddingBlockStart: "20px",
  gap: "10px",
});

export const StyledEventTimeAndCalender = styled(Paper)({
  padding: "10px",
  borderRadius: "10px",
  minWidth: "30%",
  marginBlock: "20px",
  display: 'flex',
  flexDirection:'column',
  gap: '20px'
});
export const StyledEventTimeDescription = styled("div")({
  display: "flex",
  justifyContent: 'space-between'
});

export const StyledLinProfile = styled("div")({
  cursor: "pointer",
});
