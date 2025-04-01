import { Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../static/images/logo.svg";
import { Event, Person } from "@mui/icons-material";


const Onboarding = () => {
  const [step, setStep] = useState<
    "role" | "profile" | "role-specific" | "personal-hook" | "complete"
  >("role");

  const [role, setRole] = useState<"attendee" | "mentor" | "organizer">(
    "attendee"
  );

  const Template = (
    step: "role" | "profile" | "role-specific" | "personal-hook" | "complete"
  ) => {
    if (step === "role") {
      const CardContainerStyled = styled("div")({
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "200px",
        height: "140px",
        padding: "10px",
        border: "1.5px solid #e0e0e0",
        borderRadius: "5px",
        cursor: "pointer",
      });
      return (
        <div style={{marginTop: '20px'}}>
          <div style={{display: 'flex', gap: '14px'}}>
          <CardContainerStyled
           onClick={() => {
            setRole("attendee");
            setStep("profile");
          }}
          
          >
            <Person />
            <Typography variant="h4">Attendee</Typography>
            <Typography variant="caption">
              Attend events, connect with mentors, and build your network.
            </Typography>
          </CardContainerStyled>
          <CardContainerStyled
          
          onClick={() => {
            setRole("mentor");
            setStep("profile");
          }}
          >
            <Event />
            <Typography variant="h4">Mentor</Typography>
            <Typography variant="caption">
              Share your expertise, mentor students, and make a difference.
            </Typography>
          </CardContainerStyled>
          <CardContainerStyled
          onClick={() => {
            setRole("organizer");
            setStep("profile");
          }}
          >
            <Event />
            <Typography variant="h4">Organizer</Typography>
            <Typography variant="caption">
              Create and manage events, connect with attendees, and build your
              community.
            </Typography>
          </CardContainerStyled>
          </div>
        </div>
      );
    } else if (step === "profile") {
      return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '500px', margin: '20px'}}>
          <TextField label="Bio" multiline rows={4} />
          <div style={{
            border: '2px solid #ccd',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <input type="file" id="file-input" accept="image/*" style={{display: 'none'}} onChange={() => {}} />
            <label htmlFor="file-input">Drag drop some file</label>
          </div>
          <Button onClick={() => setStep("role-specific")}>Save</Button>
        </div>
      );
    } else if (step === "role-specific") {
      return (
        <div>
          role specific
          <Button onClick={() => setStep("personal-hook")}>
            Personal Hook
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            href={`${role === "attendee" ? "/dashboard" : "/profile-setup"}`}
          >
            Finished
          </Button>
        </div>
      );
    }
  };
  const StyledContainer = styled("div")({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: '100px'
  });
  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </div>
        <div>Bar</div>
        <Typography variant="h6">How will you use eventGo?</Typography>
        <Typography>
          Please select your role to proceed with the onboarding process. Your
          role will determine the specific information we need to collect from
          you.
        </Typography>
        {Template(step)}
      </div>
    </StyledContainer>
  );
};

export default Onboarding;
