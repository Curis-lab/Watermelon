import { Box, Typography } from "@mui/material";
// import { StyledBox } from "./HomePage.styled";
// import { useContext, useState } from "react";
// import { loginUser, registerUser } from "../../../lib/api";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
import RoundedButton from "../../atoms/Bottom/RoundedBottom";
import useRegisterModal from "../../../hooks/ModalController/useRegisterModal/useRegisterModal";
import { ArrowCircleUp, OutboundOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import HeroSection from "../../templates/LandingPage/HeroSection";

const navigatorCard = [
  {
    title: "Event",
    number: "01",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#iefie2",
  },
  {
    title: "Mentor",
    number: "02",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#929fff",
  },
  {
    title: "Share Experties",
    number: "03",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#94994",
  },
];

const NavigatorComponent = ({
  title,
  number,
  bgColor,
  fn,
}: {
  title: string;
  number: string;
  bgColor: string;
  fn: () => void;
}) => {
  return (
    <div>
      <h1
        style={{
          WebkitTextStroke: "1px white",
          color: "transparent",
          fontSize: "60px",
        }}
      >
        {number}
      </h1>
      <div
        style={{
          background: 'red',
          height: "300px",
          width: "300px",
          borderTopLeftRadius: "150px",
          borderTopRightRadius: "150px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>
        <p>Live Events & Workshops – Learn with the Community</p>
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={fn}
        >
          <p>Live Workshops & Events</p>
          <div>
            <OutboundOutlined sx={{ fontSize: 60 }} />
          </div>
        </div>
      </div>
    </div>
  );
};


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
  // return (
  //   <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
  //     {/* <RegisterForm /> */}
  //     <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
  //       <Typography variant="h2">
  //         Network at Events or Find 1:1 Mentor_All in One Place
  //       </Typography>
  //       <Typography variant="h5">
  //         Join 10,000+ professionals learning and connecting daily.
  //       </Typography>

  //       <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  //         <RoundedButton  href="/mentors" label="Find Mentors" />
  //         <RoundedButton href="/events" label="Find Events" />
  //         <div>
  //           <div onClick={()=> registerModal.onOpen()} style={{cursor: 'pointer'}}>Login</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#03032B",
      }}
    >
      {/** start for header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          marginTop: "50px",
        }}
      >
        <h1>
          Get 1:1 mentorship or join live events -{" "}
          <span
            style={{
              display: "inline-block",
              background: "#F4B508",
              paddingInline: "20px",
              paddingBlock: "10px",
              borderRadius: "40px 0",
              color: "black",
            }}
          >
            All in one place
          </span>
        </h1>
      </div>
      {/** end for headers*/}

      {/** start for button */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Box
          sx={{
            borderRadius: "40px",
            padding: "16px",
            background: `
          linear-gradient(white, white) padding-box, 
          linear-gradient(135deg,rgb(223, 69, 30),rgb(103, 95, 255),rgb(123, 254, 127)) border-box
        `,
            border: "4px solid transparent",
            backgroundClip: "padding-box, border-box",
            width: "fit-content",
          }}
        >
          <Link to='/onboarding'>
          <Typography
            sx={{
              background: "linear-gradient(135deg, #FF5733, #FFC300)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
            >
            Let's get start
          </Typography>
            </Link>
        </Box>
      </div>

      {/** end for button */}

{/** should know the size the div that can change grid of the row */}
      <div style={{ display: "flex", gap: "20px", minWidth: '940px'}}>
        {navigatorCard.map((item, idx) => (
          <NavigatorComponent
            key={idx}
            title={item.title}
            number={item.number}
            fn={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
