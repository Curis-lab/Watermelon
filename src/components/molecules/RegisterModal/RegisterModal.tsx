import { Close } from "@mui/icons-material";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";
import MUIModel from "../../atoms/Models";
import { Button, TextField, Typography } from "@mui/material";
import logo from "../../../static/images/logo.svg";
import { useState } from "react";
import { useUserApi } from "../../../hooks/api/actions/useUserApi/useUserApi";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/api";

const Body = ({ isLogin }: { isLogin: boolean }) => {
  const { loading } = useUserApi();
  const { login } = useApi();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {isLogin && (
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          size="small"
          placeholder="Name"
          variant="outlined"
        />
      )}
      <TextField
        name="email"
        value={formData.email}
        onChange={handleChange}
        size="small"
        placeholder="Email"
        variant="outlined"
      />
      <TextField
        name="password"
        value={formData.password}
        onChange={handleChange}
        size="small"
        placeholder="Password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
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
      body={<Body isLogin={isLogin} />}
      footer={footer}
      open={registerModal.isOpen}
      onClose={() => {}}
    />
  );
};

export default RegisterModal;
