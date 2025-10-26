import { Close, Facebook, Google } from "@mui/icons-material";
import MUIModel from "../../atoms/Models";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/api/actions/useRegister/userRegister";
import { ISessionContextPros, useSession } from "../../../hooks/useSession";
import useRegisterModal from "../../../hooks/useRegisterModal";
import FormHandler, { IRender } from "../../common/FormHandler";
import PasswordBox from "../../atoms/TextBox/PasswordBox/PasswordBox";

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginFormTemplate = ({
  formData,
  submitHandler,
  inputHandler,
}: IRender<ILoginFormData>) => (
  <form
    onSubmit={submitHandler}
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
      onChange={inputHandler}
      placeholder="Email"
      variant="outlined"
      label="Email"
      sx={{
        minWidth: "80%",
      }}
    />

    <PasswordBox
      {...{ value: formData.password, handleChangeInput: inputHandler }}
    />
    <Button
      type="submit"
      sx={{
        border: "1px solid #000",
      }}
    >
      login
    </Button>
  </form>
);

const Body = () => {
  const navigate = useNavigate();
  const { login } = useSession() as ISessionContextPros;
  const loginToDB = useLogin();

  async function AuthenticationProcess(formData:ILoginFormData) {
    const res = await loginToDB(formData);
  
    login(res.data);
    if (!res.data.isMfaActive) {
      navigate("/settings");
    } else {
      navigate("/");
    }
  }
  
  return (
    <Box>
      <FormHandler<ILoginFormData>
        initial={{
          email: "",
          password: "",
        }}
        process={AuthenticationProcess}
        render={LoginFormTemplate}
      />
      <Divider
        sx={{
          marginBlock: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton color="primary">
          <Google />
        </IconButton>
        <IconButton color="primary">
          <Facebook />
        </IconButton>
      </Box>
    </Box>
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
        <Typography variant="body1">
          Welcome back! Please enter your details.
        </Typography>
      </div>
    </div>
  );

  const footer = (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
      }}
    >
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
      body={<Body/>}
      footer={footer}
      open={registerModal.isOpen}
      onClose={() => {
        registerModal.onClose();
      }}
    />
  );
};

export default RegisterModal;
