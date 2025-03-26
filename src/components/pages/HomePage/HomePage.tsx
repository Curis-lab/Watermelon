import { Box, Typography, Button, TextField } from "@mui/material";
import { StyledBox } from "./HomePage.styled";
import { useContext, useState } from "react";
import { loginUser, registerUser } from "../../../lib/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import HeroSection from "../../templates/LandingPage/HeroSection";

const HomePage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [isMentee, setIsMentee] = useState(false);
  const navigate = useNavigate();
  //this is for the register form
  const [roleFormData, setRoleFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "attendee",
  });

  //this is use context for the auth
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setRoleFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
    updateRegisterInfo({ [field]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let response;
      if (isRegister) {
        response = await registerUser({
          ...roleFormData,
          role: isMentee ? "mentor" : "attendee",
        });
      } else {
        response = await loginUser({
          email: roleFormData.email,
          password: roleFormData.password,
        });
      }

      console.log("Success:", response);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const RegisterForm = () => (
    <StyledBox>
      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
        {JSON.stringify(registerInfo)}
        <Typography variant="h6">Subscribe to our newsletter</Typography>
        {isRegister ? (
          <Button
            onClick={() => setIsMentee((prev) => !prev)}
            variant="outlined"
          >
            Become a {isMentee ? "attendee" : "mentee"}
          </Button>
        ) : (
          <></>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          {isRegister && (
            <>
              <TextField
                size="small"
                required
                id="username"
                label="Enter your username"
                type="text"
                variant="outlined"
                value={roleFormData.username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "username")
                }
              />
            </>
          )}
          <TextField
            size="small"
            required
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            value={roleFormData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "email")
            }
          />
          <TextField
            size="small"
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={roleFormData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "password")
            }
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>

        <Button
          onClick={() => setIsRegister((prev) => !prev)}
          variant="outlined"
          color="secondary"
        >
          {isRegister ? "Login" : "Register"}
        </Button>
      </Box>
    </StyledBox>
  );
  return (
    <>
    <RegisterForm/>
      <div>
        <div>Network at Events or Find 1:1 Mentor_All in One Place</div>
        <div>Join 10,000+ professionals learning and connecting daily.</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            component="a"
            href="/mentors"
            variant="contained"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            Find Mentors
          </Button>
          <Button
            component="a"
            href="/events"
            variant="contained"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            Find Events
          </Button>
        </div>
        <Button variant="contained" href="/onboarding" color="primary" component="a" style={{textDecoration: 'none'}}>Login</Button>
      </div>
    </>
  );
};

export default HomePage;
