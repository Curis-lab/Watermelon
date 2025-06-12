import { Avatar, styled, Box } from "@mui/material";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  margin: "auto",
  backgroundColor:  "#f0f0f0", // Default to light gray if undefined
  color: "#000", // Default to black if undefined
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
