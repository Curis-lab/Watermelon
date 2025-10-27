import { styled } from "@mui/material";

export const NavbarWrapper = styled("div")(({ theme }) => ({
  position: 'fixed',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `2px solid ${theme.palette.divider}`,
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: '#c5c5c4',
  paddingInline: theme.spacing(2),
  [theme.breakpoints.up('md')]:{   
    paddingInline: theme.spacing(12),
  },
  minWidth: '100vw',
  paddingBlock: '2px'
}));
