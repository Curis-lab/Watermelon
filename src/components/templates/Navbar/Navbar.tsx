import { NavbarWrapper } from "./Navbar.styled";
import logo from "../../../static/images/logo.svg";
import { Link } from "react-router-dom";
import {
  styled,
  Box,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import { Menu, Close, Home } from "@mui/icons-material";
import UserInfo from "../../molecules/UserInfo/UserInfo";
import MetadataCard from "../../organisms/MetadataCard/MetadataCard";
import useRegisterModal from "../../../hooks/useRegisterModal";
import useAuthInfo from "../../../hooks/api/getters/useAuthInfo/useAuthInfo";
import { ProfilePopup } from "../../atoms/PopOver/PopOver";
import ShinyButton from "../../atoms/Bottom/Funcy/Shiny/ShinyButton";

const StyledProfileContainer = styled("div")({
  position: "relative",
  marginLeft: "10px",
  cursor: "pointer",
});

const UserProfile = () => {
  return (
    <StyledProfileContainer>
      <ProfilePopup />
    </StyledProfileContainer>
  );
};
const StyledShowProfileContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  [theme?.breakpoints?.down("sm")]: {
    // Added optional chaining
    display: "none",
  },
}));


const StyledLinked = styled(Link)({
  textDecoration: "none",
  color: "#000",
  fontSize: "1.1rem",
  ":hover": {
    color: "#7b7bff",
    border: "1px solid #7b7bff",
  },
});

const MobileTemplate = () => {
  return (
    <List>
      <UserInfo
        profile={{
          name: "",
          company: "",
          position: "",
          _id: ''
        }}
      >
        <UserInfo.Name />
        <UserInfo.Description />
      </UserInfo>
      <ListItem>
        <MetadataCard
          Icon={Home}
          content={{
            title: "Home",
            sub: "Keep track your connections",
          }}
        >
          <MetadataCard.Text />
        </MetadataCard>
      </ListItem>
      <Divider />
    </List>
  );
};

const Navbar = () => {
  const registerModal = useRegisterModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn } = useAuthInfo();
  return (
    <NavbarWrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </Link>
      <StyledShowProfileContainer>
        <StyledLinked to="/mentors">Mentor</StyledLinked>
        <StyledLinked to="/events">Events</StyledLinked>
        {isLoggedIn ? (
          <UserProfile />
        ) : (
          <ShinyButton handleClick={()=>registerModal.onOpen()}/>
        )}
      </StyledShowProfileContainer>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <Box sx={{ minWidth: "100vw", p: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton size="large" onClick={() => setMobileOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <MobileTemplate />
          </Box>
        </Drawer>
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
