import React, { Children } from "react";
import { Box, Chip } from "@mui/material";
import ProfileAvatar from "../../atoms/avatars";
import ContentHeader from "../ContentHeader/ContentHeader";
import IconDescription from "../IconDescription/IconDescription";
import { Google } from "@mui/icons-material";

interface IProfileBanner {
  imgURL?: string;
  name?: string;
  role?: string;
  expertises?: string[];
  company?: string;
  children?: React.ReactNode;
}

function ProfileBanner(props: IProfileBanner) {
  return (
    <Box
      sx={{
        display: "flex",
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
          paddingBlock: '10px'
        }}
      >
        <ContentHeader
          title={props.name ? props.name : "Emaily Curis"}
          subtitle={props.role ? props.role : "UI/UX Designer"}
        />
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            maxWidth: "350px",
            flexWrap: "wrap",
          }}
        >
          {props.expertise &&
            props.expertise.map((v, idx) => (
              <Chip key={idx} variant="outlined" size="small" label={v} />
            ))}
        </Box>
        <IconDescription
          Icon={Google}
          description={props.company ? props.company : ""}
        />
        <Box>{props.children}</Box>
      </Box>
    </Box>
  );
}

export default ProfileBanner;
