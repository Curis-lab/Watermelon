import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";
import MUIModel from "../../atoms/Models";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../static/images/logo.svg";
import { useState } from "react";
import { useUserApi } from "../../../hooks/api/actions/useUserApi/useUserApi";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/api";

// I need to pass the value
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const _handleClickShowPassword = () => setShowPassword((show) => !show);

  const _handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const _handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              onClick={_handleClickShowPassword}
              onMouseDown={_handleMouseDownPassword}
              onMouseUp={_handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

const Body = () => {
  const { loading } = useUserApi();
  const { login } = useApi();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const registerModal = useRegisterModal();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      email: "",
      name: "",
      password: "",
    });

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });
      console.log("this is response token", response);
      if (response.token) {
        registerModal.onClose();

        navigate("/onboarding");
      }
    } catch (error) {
      console.error("Error: Failed to fetch", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        width: "310px",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <TextField
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        variant="outlined"
        label="Email"
      />

      <PasswordInput />
      <TextField
        name="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        variant="outlined"
      />
      <Button disabled type="submit" variant="contained">
        {loading ? "loading..." : "register"}
      </Button>
    </form>
  );
};

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const title = (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ marginLeft: "auto" }}
          onClick={() => registerModal.onClose()}
        >
          <Close />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        <Typography variant="h2">Let's Get Started</Typography>
        <Typography variant="caption">
          Welcome back! Please enter your details.
        </Typography>
      </div>
    </>
  );

  const footer = (
    <div>
      {/* Not a member yet? <span style={{color: 'blue', cursor:'pointer'}}>Sign Up</span> */}
      Don't you have an account?{" "}
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => setIsLogin((e) => !e)}
      >
        {isLogin ? "Login" : "Create one"}
      </span>
    </div>
  );
  return (
    <MUIModel
      title={title}
      body={<Body />}
      footer={footer}
      open={registerModal.isOpen}
      onClose={() => {
        // registerModal.onClose();
      }}
    />
  );
};

export default RegisterModal;
