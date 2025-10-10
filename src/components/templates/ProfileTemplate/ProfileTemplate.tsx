/**
 * page: combination of mentor, attendees and organizer
 */

import { Box } from "@mui/material";
import React from "react";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";

function ProfileTemplate() {
  return (
    <Box>
      <img
        src="https://t4.ftcdn.net/jpg/04/89/68/23/360_F_489682374_ckc0OVyT6Av0NGcuYbwBSCxy62blF4CQ.jpg"
        alt="background Image"
        style={{
          minWidth: "100%",
          maxHeight: "200px",
        }}
      />
      <Box
        sx={{
          translate: "6.25rem -20px",
        }}
      >
        <ProfileBanner
          {...{
            name: "Min Min",
            role: "mentee",
            expertise: ["web development"],
            company: "Google",
          }}
        >
          <Box>Hello</Box>
        </ProfileBanner>
      </Box>
    </Box>
  );
}

export default ProfileTemplate;
