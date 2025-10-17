import { FormControlLabel, styled, TextField } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";

const AccountSetup = () => {
  return (
    <div>
      <h1>Welcome! First things first...</h1>
      <p>you can always changae them later.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField label="Name" placeholder="Enter your full name" />

        <TextField label="Email" placeholder="stephen@gmail.com" />
        <TextField label="Password" placeholder="*****" />
      </div>
    </div>
  );
};
const RoleSelection = () => {
  return (
    <div>
      <h1>Now, let's add some details about your account.</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>Mentor</div>
        <div>Organizer</div>
        <div>Attendee</div>
      </div>
    </div>
  );
};
const MentorDetails = () => {
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#fff",
        ...theme.applyStyles("dark", {
          color: "#fff",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <div>
      <h1>Mentor Profile Setup</h1>
      <p>help mentees find you by sharing your expertise and avilaility.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="What's your primary experties?"
          placeholder="e.g. React, Node.js, etc."
        />
        <p>Mentees will see this status when browsing profiles.</p>
        <div>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="I'm available"
          />
        </div>
      </div>
    </div>
  );
};
const LearnerInterest = () => {
  return (
    <div>
      <h1>Define Your leaning Goals</h1>
      <p>Seelct Topics to match with the right mentors and reouserces.</p>
      <TextField label="What are you looking to learn?" />
    </div>
  );
};
const PersonalProfile = () => {
  return <div>Personal Profile</div>;
};
const Confirmation = () => {
  return (
    <div>
      <h1>You're All Set! 🎉</h1>
    </div>
  );
};

export const Template = (step: number) => {
  const ExtractedTemplate = [
    <AccountSetup />,
    <RoleSelection />,
    <MentorDetails />,
    <LearnerInterest />,
    <PersonalProfile />,
    <Confirmation />,
  ];
  return ExtractedTemplate[step];
};
