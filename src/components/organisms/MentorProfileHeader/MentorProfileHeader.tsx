import { Box, Button } from "@mui/material";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";
import { TRoles } from "../../../types/role";

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

interface IOrganizerProfileHeader {
  profilePic: string;
  name: string;
  hostBadge: string;
  tagline: string;
  verified: boolean;
  memberSatisfication: string;
}

interface IMentorProfileHeaderProps {
  userInfo?:
    | IMemberProfileHeader
    | IOrganizerProfileHeader
    | IMentorProfileHeader;
  role: TRoles;
}

function MentorProfileHeader(props: IMentorProfileHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {props.role === "mentor" && (
        <ProfileBanner {...(props.userInfo as IMentorProfileHeader)}>
          <ProfileBanner.Headline />
          <ProfileBanner.Rating />
          <ProfileBanner.SessionCompleted />
        </ProfileBanner>
      )}
      {props.role === "attendee" && (
        <ProfileBanner {...(props.userInfo as IMemberProfileHeader)}>
          <ProfileBanner.Tagline />
          <ProfileBanner.Joined />
          <ProfileBanner.EngagementLevel />
          <ProfileBanner.LookingFor />
        </ProfileBanner>
      )}
      {props.role === "organizer" && (
        <ProfileBanner {...(props.userInfo as IOrganizerProfileHeader)}>
          <ProfileBanner.HostBadge />
          <ProfileBanner.Tagline />
          <ProfileBanner.Verified />
          <ProfileBanner.MemberSatisfaction />
        </ProfileBanner>
      )}

      {/* ["message", "share", "save "] : this is not accepsible for guess*/}
      {props.role === "mentor" &&
        (props.userInfo as IMentorProfileHeader).quickActions && (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-end",
            }}
          >
            {(props.userInfo as IMentorProfileHeader).quickActions.map(
              (label: string) => (
                <Button key={label}>{label}</Button>
              )
            )}
          </Box>
        )}
    </Box>
  );
}

export default MentorProfileHeader;
