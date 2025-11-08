import { Close, Facebook, Google } from "@mui/icons-material";
import MUIModel from "../../atoms/Modal";
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
import {
  StyledModelContainer,
  StyledDivWithBackgroundImage,
} from "./LoginModal.styled";
import HeroHeader from "../HeroHeader/HeroHeader";
import { hero } from "../../../contents/loginModelConfig.json";
import logo from "../../../static/images/logo.svg";
interface ILoginFormData {
  email: string;
  password: string;
}

const footer = (navigateToRegister: () => void) => (
  <Box
    sx={{
      display: "flex",
      gap: "0.5em",
      justifyContent: "center",
    }}
  >
    <Typography variant="body2">Don't you have an account?</Typography>
    <Typography
      variant="body2"
      sx={{
        color: "blue",
        cursor: "pointer",
      }}
      onClick={navigateToRegister}
    >
      Register it
    </Typography>
  </Box>
);
export const LoginTemplate = ({
  body,
  footer,
  title,
}: {
  body: React.ReactNode;
  footer: React.ReactNode;
  title: React.ReactNode;
}) => (
  <StyledModelContainer>
    <StyledDivWithBackgroundImage>
      <HeroHeader {...hero} />
    </StyledDivWithBackgroundImage>
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: "50%",
        display: "flex",
        flexDirection: "column",
        paddingBlock: "1em",
        paddingInline: "2em",
        gap: "12px",
      }}
    >
      {title}
      <div style={{ flex: 1 }}>{body}</div>
      {footer}
    </div>
  </StyledModelContainer>
);

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
    <Typography variant="caption">
      <input
        type="checkbox"
        name="availability"
        checked
        onChange={inputHandler}
      />
      I agree the terms and plicy
    </Typography>
    <Button
      type="submit"
      sx={{
        border: "1px solid #000",
      }}
    >
      Log in
    </Button>
  </form>
);

const LoginModal = () => {
  const navigate = useNavigate();

  const registerModal = useRegisterModal();
  const { login } = useSession() as ISessionContextPros;
  const loginToDB = useLogin();

  async function AuthenticationProcess(formData: ILoginFormData) {
    const res = await loginToDB(formData);
    login(res.data);
    if (!res.data.isMfaActive) {
      navigate("/profile");
    } else {
      navigate("/");
    }
    registerModal.onClose();
  }

  const body = (
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

  const title = (
    <Box
      sx={{
        minWidth: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        gap: "0.5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "4px",
          marginBlock: "10px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "45px",
          }}
        />
        <Typography variant="h2">Get Started</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.800",
          }}
        >
          Welcome to EventGo - Let's get started.
        </Typography>
      </Box>

      <IconButton onClick={() => registerModal.onClose()}>
        <Close />
      </IconButton>
    </Box>
  );

  const navigateToRegister = () => {
    navigate("/onboarding");
    registerModal.onClose();
  };

  return (
    <MUIModel
      open={registerModal.isOpen}
      onClose={() => {
        registerModal.onClose();
      }}
    >
      <LoginTemplate
        title={title}
        footer={footer(navigateToRegister)}
        body={body}
      />
    </MUIModel>
  );
};

export default LoginModal;
