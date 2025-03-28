import { Typography } from "@mui/material";
// import { StyledBox } from "./HomePage.styled";
// import { useContext, useState } from "react";
// import { loginUser, registerUser } from "../../../lib/api";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
import RoundedButton from "../../atoms/Bottom/RoundedBottom";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";
// import HeroSection from "../../templates/LandingPage/HeroSection";

const HomePage = () => {
  // const [isRegister, setIsRegister] = useState(true);
  // const [isMentee, setIsMentee] = useState(false);
  // const navigate = useNavigate();
  const registerModal = useRegisterModal();
  //this is for the register form
  // const [roleFormData, setRoleFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   role: "attendee",
  // });

  //this is use context for the auth
  // const { registerInfo, updateRegisterInfo } = useContext(AuthContext);

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   field: string
  // ) => {
  //   setRoleFormData((prevData) => ({
  //     ...prevData,
  //     [field]: event.target.value,
  //   }));
  //   updateRegisterInfo({ [field]: event.target.value });
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     let response;
  //     if (isRegister) {
  //       response = await registerUser({
  //         ...roleFormData,
  //         role: isMentee ? "mentor" : "attendee",
  //       });
  //     } else {
  //       response = await loginUser({
  //         email: roleFormData.email,
  //         password: roleFormData.password,
  //       });
  //     }

  //     console.log("Success:", response);
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const RegisterForm = () => (
  //   <StyledBox>
  //     <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
  //       {JSON.stringify(registerInfo)}
  //       <Typography variant="h6">Subscribe to our newsletter</Typography>
  //       {isRegister ? (
  //         <Button
  //           onClick={() => setIsMentee((prev) => !prev)}
  //           variant="outlined"
  //         >
  //           Become a {isMentee ? "attendee" : "mentee"}
  //         </Button>
  //       ) : (
  //         <></>
  //       )}
  //       <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
  //         {isRegister && (
  //           <>
  //             <TextField
  //               size="small"
  //               required
  //               id="username"
  //               label="Enter your username"
  //               type="text"
  //               variant="outlined"
  //               value={roleFormData.username}
  //               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //                 handleChange(e, "username")
  //               }
  //             />
  //           </>
  //         )}
  //         <TextField
  //           size="small"
  //           required
  //           id="email"
  //           label="Email Address"
  //           type="email"
  //           variant="outlined"
  //           value={roleFormData.email}
  //           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //             handleChange(e, "email")
  //           }
  //         />
  //         <TextField
  //           size="small"
  //           required
  //           id="password"
  //           label="Password"
  //           type="password"
  //           variant="outlined"
  //           value={roleFormData.password}
  //           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //             handleChange(e, "password")
  //           }
  //         />
  //         <Button type="submit" variant="contained" color="primary">
  //           Submit
  //         </Button>
  //       </Box>

  //       <Button
  //         onClick={() => setIsRegister((prev) => !prev)}
  //         variant="outlined"
  //         color="secondary"
  //       >
  //         {isRegister ? "Login" : "Register"}
  //       </Button>
  //     </Box>
  //   </StyledBox>
  // );
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
      {/* <RegisterForm /> */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
        <Typography variant="h2">
          Network at Events or Find 1:1 Mentor_All in One Place
        </Typography>
        <Typography variant="h5">
          Join 10,000+ professionals learning and connecting daily.
        </Typography>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <RoundedButton  href="/mentors" label="Find Mentors" />
          <RoundedButton href="/events" label="Find Events" />
          <div>
            <div onClick={()=> registerModal.onOpen()} style={{cursor: 'pointer'}}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
