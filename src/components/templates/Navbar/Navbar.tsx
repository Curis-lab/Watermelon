import { NavbarWrapper } from "./Navbar.styled";
import logo from "../../../static/images/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import {
  Button,
  ClickAwayListener,
  Avatar,
  styled,
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react"; // Removed useEffect as it is not used
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ConditionallyRender } from "../../common/ConditionallyRender";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";

const StyledProfileContainer = styled("div")({
  position: "relative",
  marginLeft: "10px",
  cursor: "pointer",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  position: "absolute",
  zIndex: 5000,
  minWidth: "200px",
  right: "0px",
  marginTop: "10px",
});

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  color: "black",
  fontWeight: "500px",
});

const StyledLogoutButton = styled(Button)({
  width: "100%",
  height: "30px",
  background: "red",
});
const StyledDivider = styled(Divider)({
  width: "100%",
  height: "2px",
  backgroundColor: "black",
  margin: "10px 0px",
});

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const Logout = () => {
    fetch('http://localhost:3000/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    })
  }
  return (
    <ClickAwayListener onClickAway={() => setShowProfile(false)}>
      <StyledProfileContainer>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setShowProfile((prev) => !prev)}
        >
          <Avatar alt="name" src='' />
          <Box>
            <Typography>tuntun</Typography>
          </Box>
          {showProfile ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <ConditionallyRender
          condition={showProfile}
          show={
            <StyledPaper>
              <StyledLink to="/profile">View profile settings</StyledLink>
              <StyledDivider />
              <StyledLogoutButton onClick={Logout}>Logout</StyledLogoutButton>
            </StyledPaper>
          }
        />
      </StyledProfileContainer>
    </ClickAwayListener>
  );
};
const StyledShowProfileContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  [theme?.breakpoints?.down("sm")]: { // Added optional chaining
    display: "none",
  },
}));

const StyledLoginBtn = styled("div")`
  border: 2px solid ${({ theme }) => theme?.palette?.common?.black || 'black'};
  color: white;
  width: 100px;
  text-align: center;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  padding-block: ${({ theme }) => theme?.spacing(1) || '8px'};
  padding-inline: ${({ theme }) => theme?.spacing(2) || '16px'};
  font-size: ${({ theme }) => theme?.typography?.h3?.fontSize || '1.5rem'};
  font-weight: ${({ theme }) => theme?.typography?.fontWeightBold || 'bold'};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme?.palette?.common?.white || 'white'};
  }
`;

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const registerModal = useRegisterModal();

  return (
    <NavbarWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </Link>
        <input
          placeholder="Search.."
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "5px",
            border: "1px solid #000",
            padding: "15px",
          }}
        />
      </div>

      <StyledShowProfileContainer>
        {isAuthenticated() ? (
          <UserProfile />
        ) : (
          <StyledLoginBtn onClick={() => registerModal.onOpen()}>
            login
          </StyledLoginBtn>
        )}
      </StyledShowProfileContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
