import React, { createContext, useContext} from "react";
import { Avatar, Box, Typography } from "@mui/material";

type TProfile = {
  name: string;
  position: string;
  company: string;
  url?: string;
};

type TProfileContent = {
  profile: TProfile
}

const UserContext = createContext<TProfileContent | undefined>(undefined);

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within UserInfoElement.");
  }
  return context.profile;
}

interface IUserInfo {
  children: React.ReactNode;
  profile: TProfile;
}

function UserInfo({ children, profile }: IUserInfo) {
  return (
    <UserContext.Provider value={{ profile }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Avatar src={profile?.url || " "} alt="user profile" />
        <Box>{children}</Box>
      </Box>
    </UserContext.Provider>
  );
}

function Name() {
  const name = useUserContext()?.name;
  return <Typography variant="h4">{name}</Typography>;
}

function Description() {
  const position = useUserContext()?.position;
  const company = useUserContext()?.company;
  return (
    <Typography variant="caption">
      {position} at {company}
    </Typography>
  );
}

UserInfo.Name = Name;
UserInfo.Description = Description;

export default UserInfo;
