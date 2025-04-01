import { NavbarWrapper } from "./Navbar.styled";
import logo from "../../../static/images/logo.svg";
// import NavbarAvatar from "../../atoms/ProfileAvatar";
import { Link } from "react-router-dom";
import RoundedButton from "../../atoms/Bottom/RoundedBottom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </Link>
        <input placeholder="Search.." style={{width: '300px', height: '30px', borderRadius: '5px', border: '1px solid #000', padding: '15px'}}/>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <RoundedButton label="Login" />
        <RoundedButton label="Sign Up" />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
