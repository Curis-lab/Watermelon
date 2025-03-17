import { Box, styled } from "@mui/material";
export const CardContainer = styled(Box)({
  display: "flex",
  gap: '20px'
});

export const StyeldDecription = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center'
});

export const StyledCardWrapper = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadiusLarge,
}));
