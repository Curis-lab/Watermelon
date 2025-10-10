import { Box } from "@mui/material";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";

interface IMentorProfileHeader {
  navigator: (path:string) => void;
  expertise?: string[];
  imgURL?: string;
  company?: string;
  name?: string;
  role?: string;
}

function MentorProfileHeader(props: IMentorProfileHeader) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ProfileBanner {...props}/>
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
