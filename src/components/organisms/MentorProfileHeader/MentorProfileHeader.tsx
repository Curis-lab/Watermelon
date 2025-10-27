import { Box } from "@mui/material";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";
import { TRoles } from "../../../types/role";

interface IMentorProfileHeader {
  navigator: (path: string) => void;
  expertise?: string[]|string;
  imgURL?: string;
  company?: string;
  name?: string;
  role?: TRoles;
}

function MentorProfileHeader(props: IMentorProfileHeader) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ProfileBanner
        {...props}
        title="Senior UX Designer at Tech Corporate, France"
      >
        <ProfileBanner.JobTitle />
        <ProfileBanner.ExpertiseTags />
        <ProfileBanner.RoleBadge />
      </ProfileBanner>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            backgroundColor: "#333",
            color: "#efefef",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={() => props.navigator("/inbox")}
        >
          Message
        </div>
      </Box>
    </Box>
  );
}

export default MentorProfileHeader;
