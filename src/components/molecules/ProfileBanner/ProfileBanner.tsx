import React, { createContext, useContext } from "react";
import { Box, Chip, Typography } from "@mui/material";
import ProfileAvatar from "../../atoms/avatars";
import { PersonPinCircle } from "@mui/icons-material";

type ProfileBannerContent = {
  profile: IProfileBanner;
};

const ProfileCardContext = createContext<ProfileBannerContent | undefined>(
  undefined
);

function useProfileCardContext() {
  const context = useContext(ProfileCardContext);
  if (!context) {
    throw new Error(
      "useProfileCardContext must be used within a ProfileBanner."
    );
  }
  return context.profile;
}

interface IProfileBanner {
  imgURL?: string;
  name?: string;
  role?: string;
  expertises?: string[];
  company?: string;
  location?:string;
  children?: React.ReactNode;
  title:string;
}

function ProfileBanner(props: IProfileBanner) {
  return (
    <ProfileCardContext.Provider value={{profile:props}}>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
        }}
      >
        <ProfileAvatar
          imageurl={
            props.imgURL
              ? props.imgURL
              : "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          }
          size="lg"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingBlock: "10px",
            gap: "10px",
          }}
        >
          <Typography variant="h2">{props.name}</Typography>
          {props.children}
        </Box>
      </Box>
    </ProfileCardContext.Provider>
  );
}

const JobTitle = () => {
  const { title } = useProfileCardContext();
  return <Typography variant="body2">{title}</Typography>;
};

const Location = () => {
  const { location } = useProfileCardContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <PersonPinCircle />
      <Typography variant="body2">{location}</Typography>
    </Box>
  );
};

const ExpertiseTags = () => {
  const { expertises } = useProfileCardContext();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "3px",
        flexWrap: "wrap",
      }}
    >
      {expertises &&
        expertises.map((v, idx) => (
          <Chip key={idx} size="small" label={v} />
        ))}
    </Box>
  );
};

const RoleBadge = () => {
  const { role } = useProfileCardContext();
  return <Chip color="primary" label={role} />;
};

const Rating = () => {
  return <div>Rating</div>;
};
const VerifiedBadge = () => {
  return <div>Varified</div>;
};
const Joined = () => {
  return <div>Joined</div>;
};

const SessionCompleted = () => {
  return <div>Session Completed</div>;
};
const ResponseTime = () => {
  return <div>ResponseTime</div>;
};

ProfileBanner.JobTitle = JobTitle;
ProfileBanner.Location = Location;
ProfileBanner.ExpertiseTags = ExpertiseTags;
ProfileBanner.RoleBadge = RoleBadge;
ProfileBanner.Rating = Rating;
ProfileBanner.Joined = Joined;
ProfileBanner.SessionCompleted = SessionCompleted;
ProfileBanner.ResponseTime = ResponseTime;
ProfileBanner.VerfriedBadge = VerifiedBadge;

export default ProfileBanner;
