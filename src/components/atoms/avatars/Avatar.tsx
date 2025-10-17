import { Avatar, styled } from "@mui/material";
import React from "react";

const StyledAvatar = styled(Avatar)({
  borderRadius: "50%",
  overflow: "hidden",
  boxShadow: "lg",
  border: "4px solid #fff",
});

type ProfileAvatarProps = {
  imageurl: string;
  size: "sm" | "md" | "lg";
} & React.ComponentProps<typeof Avatar>;

const ProfileAvatar = ({
  imageurl,
  size = "sm",
}: ProfileAvatarProps) => {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 150, height: 150 },
  };
  return <StyledAvatar src={imageurl} alt="avatar" sx={sizeMap[size]} />;
};

export default ProfileAvatar;
