import { Avatar, styled, Box } from "@mui/material";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  margin: "auto",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.text.primary,
  fontSize: theme.fontSizes.smallerBody,
  fontWeight: theme.fontWeight.bold,
}));

const NavbarAvatar = () => {
  return (
    <Box>
      <StyledAvatar src="" />
    </Box>
  );
};

export default NavbarAvatar;
