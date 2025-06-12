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
import { useState } from "react"; // Removed useEffect
import { useNavigate } from "react-router-dom"; // Removed unused imports

// I need to pass the value
const PasswordInput = ({
  value,
  fn,
}: {
  value: string;
  fn: (value: string) => void;
}) => {
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

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    fn(e.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ width: "100%" }}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChangePassword}
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

const Body = ({ closeModal }: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("this is fromData", formData);
    setFormData({
      email: "",
      password: "",
    });

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      if (response.ok) {
        console.log("this is return pending", await response.json());
      }
      closeModal();
    } catch (error) {
      throw new Error("Failed to push");
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

      <PasswordInput
        value={formData.password}
        fn={(value) => {
          setFormData((prevFormData) => ({ ...prevFormData, password: value }));
        }}
      />

      <Button type="submit" variant="contained">
        login
      </Button>
    </form>
  );
};

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const navigate = useNavigate();
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
      Don't you have an account?{" "}
      <span
        style={{
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => {
          navigate("/onboarding");
          registerModal.onClose();
        }}
      >
        Register it
      </span>
    </div>
  );
  return (
    <MUIModel
      title={title}
      body={<Body closeModal={() => registerModal.onClose()} />}
      footer={footer}
      open={registerModal.isOpen}
      onClose={() => {
        // registerModal.onClose();
      }}
    />
  );
};

export default RegisterModal;
