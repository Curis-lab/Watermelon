import { Box, Button } from "@mui/material";
import { NavbarWrapper } from "./Navbar.styled";
import logo from "../../../static/images/logo.svg";
import NavbarAvatar from "../../atoms/ProfileAvatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </Link>
      <Box>SearchBar Option</Box>
      <Box>
        <Button>Find Mentors</Button>
        <Button>Meetups</Button>
        <Button>Community</Button>
        <Button>About</Button>
      </Box>
      <NavbarAvatar />
    </NavbarWrapper>
  );
};

export default Navbar;
