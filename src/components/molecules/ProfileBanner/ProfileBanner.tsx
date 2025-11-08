import React, { createContext, useContext } from "react";
import { Box, Chip, Typography } from "@mui/material";
import ProfileAvatar from "../../atoms/avatars";
import { VerifiedRounded } from "@mui/icons-material";

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

interface IMentorProfileHeader {
  profilePic: string;
  name: string;
  headline: string;
  starRating: string;
  sessionInfo: string;
  ctaButton: "Book a Session";
  quickActions: string[];
}

interface IMemberProfileHeader {
  profilePic: string;
  tagline: string;
  memberSince: Date | string;
  engagementLevel: "active_member" | "new_member";
  lookingFor: string;
  name: string;
}

export interface IOrganizerProfileHeader {
  profilePic: string;
  name: string;
  hostBadge: string;
  tagline: string;
  verified: boolean;
  memberSatisfication: string;
}

export type IProfileBanner =
  | IMemberProfileHeader
  | IOrganizerProfileHeader
  | IMentorProfileHeader;

function ProfileBanner(props: IProfileBanner & { children: React.ReactNode }) {
  return (
    <ProfileCardContext.Provider value={{ profile: props }}>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
        }}
      >
        <ProfileAvatar
          imageurl={
            props.profilePic
              ? props.profilePic
              : "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          }
          size="lg"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'start',
            paddingBlock: "10px",
            gap: "10px",
          }}
        >
          <Typography variant="h2">{props.name}</Typography>
          {props.children}
        </Box>
      </Box>
      <Box>hello</Box>
    </ProfileCardContext.Provider>
  );
}

/** mentor's components */
const Headline = () => {
  const { headline } = useProfileCardContext() as IMentorProfileHeader;
  return <Typography variant="body2">{headline}</Typography>;
};

const Rating = () => {
  const { starRating } = useProfileCardContext() as IMentorProfileHeader;
  return <Typography>{starRating}</Typography>;
};

const SessionCompleted = () => {
  const { sessionInfo } = useProfileCardContext() as IMentorProfileHeader;
  return <Typography>{sessionInfo}</Typography>;
};
/** end of mentor's components */

/**member's components */
const Tagline = () => {
  const { tagline } = useProfileCardContext() as IMemberProfileHeader;
  return <div>{tagline}</div>;
};
const Joined = () => {
  const { memberSince } = useProfileCardContext() as IMemberProfileHeader;
  return <div>{` ${memberSince}`}</div>;
};

const EngagementLevel = () => {
  const { engagementLevel } = useProfileCardContext() as IMemberProfileHeader;
  return <div>{engagementLevel}</div>;
};

const LookingFor = () => {
  const { lookingFor } = useProfileCardContext() as IMemberProfileHeader;
  return <div>{lookingFor}</div>;
};

/** end of member's components */

/** start of organizer */
const HostBadge = () => {
  const { hostBadge } = useProfileCardContext() as IOrganizerProfileHeader;
  return <Chip label={hostBadge} variant="outlined" size="small"/>;
};

const Verified = () => {
  const { verified } = useProfileCardContext() as IOrganizerProfileHeader;
  return verified ? (
    <Box
      sx={{
        color: "#2c793bdb",
        display: 'flex',
        justifyContent: 'center',
        gap:'5px',
        fontWeight: 'semibold'
      }}
    >
      <VerifiedRounded /> Verified
    </Box>
  ) : (
    <div>None none verifed</div>
  );
};
const MemberSatisfaction = () => {
  const { memberSatisfication } =
    useProfileCardContext() as IOrganizerProfileHeader;
  return <Typography variant="caption" color="text.secondary" >member satisfication: {memberSatisfication}</Typography>;
};

/** end of organizer */

ProfileBanner.Headline = Headline;
ProfileBanner.Rating = Rating;
ProfileBanner.SessionCompleted = SessionCompleted;

/**member's */

ProfileBanner.Joined = Joined;
ProfileBanner.Tagline = Tagline;
ProfileBanner.EngagementLevel = EngagementLevel;
ProfileBanner.LookingFor = LookingFor;

/** organizer */
ProfileBanner.Verified = Verified;
ProfileBanner.HostBadge = HostBadge;
ProfileBanner.MemberSatisfaction = MemberSatisfaction;

export default ProfileBanner;
