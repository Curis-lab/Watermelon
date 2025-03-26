import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Onboarding = () => {
  const [step, setStep] = useState<
    "role" | "profile" | "role-specific" | "personal-hook" | "complete"
  >("role");

  const [role, setRole] = useState<'attendee'|'mentor'|'organizer'>('attendee');

  const Template = (
    step: "role" | "profile" | "role-specific" | "personal-hook" | "complete"
  ) => {
    if (step === "role") {
      return (
        <div>
          <Button onClick={() =>{ 
            setRole("mentor")
            setStep("profile")}}>Mentor</Button>
          <Button onClick={() => {
            setRole("attendee");
            setStep("profile")}}>Attendee</Button>
          <Button onClick={() => {
            setRole("organizer")
            setStep("profile")}}>Organizer</Button>
        </div>
      );
    } else if (step === "profile") {
      return (
        <div>
          <TextField label="Name" />
          <TextField label="Email" />
          <TextField label="Profile photo" />
          <TextField label="Bio" />
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
      return <div>
  
        <Button href={`${
            role === 'attendee' ? '/dashboard': '/profile-setup'
            }`}>Finished</Button>
      </div>;
    }
  };
  return <div>{Template(step)}</div>;
};

export default Onboarding;
