import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";
import MUIModel from "../../atoms/Models";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
// import logo from "../../../static/images/logo.svg";
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
        sx={{
          minWidth: "80%",
        }}
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

const RegisterFormHandler = ({ url, closeModal, render }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePasswordChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("this is fromData", formData);
    setFormData({
      email: "",
      password: "",
    });

    //I want to change it as a hook
    try {
      const response = await fetch(`${url}`, {
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
    } catch {
      throw new Error("Failed to push");
    }
  };
  return render(handleSubmit, formData, handleChange, handlePasswordChange);
};

const Body = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <RegisterFormHandler
      url="http://localhost:3000/api/auth/login"
      closeModal={closeModal}
      render={(handleSubmit, formData, handleChange, handlePasswordChange) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            minWidth: "21.88rem",
          }}
        >
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            variant="outlined"
            label="Email"
            sx={{
              minWidth: "80%",
            }}
          />

          <PasswordInput value={formData.password} fn={handlePasswordChange} />

          <Button
            type="submit"
            sx={{
              border: "1px solid #000",
            }}
          >
            login
          </Button>
        </form>
      )}
    />
  );
};

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const navigate = useNavigate();
  const title = (
    <div
      style={{
        minWidth: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
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
        {/* <img src={logo} alt="logo" style={{ width: "40px" }} /> */}
        {/* <Typography variant="h2">Let's Get Started</Typography> */}
        <Typography variant="body1">
          Welcome back! Please enter your details.
        </Typography>
      </div>
    </div>
  );

  const footer = (
    <Box sx={{
      display: 'flex',
      gap: '0.5em'
    }}>
      <Typography variant="body2">Don't you have an account? </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "blue",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/onboarding");
          registerModal.onClose();
        }}
      >
        Register it
      </Typography>
    </Box>
  );
  return (
    <MUIModel
      title={title}
      body={<Body closeModal={() => registerModal.onClose()} />}
      footer={footer}
      open={registerModal.isOpen}
      onClose={() => {
        registerModal.onClose();
      }}
    />
  );
};

export default RegisterModal;
