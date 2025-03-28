import { styled } from "@mui/material";

export const NavbarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0.1),
  borderBottom: `2px solid ${theme.palette.divider}`,
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: theme.palette.background.default,
}));
