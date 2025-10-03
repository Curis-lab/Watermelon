import { Google } from "@mui/icons-material";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import IconDescription from "../../molecules/IconDescription/IconDescription";
import ProfileAvatar from "../../atoms/avatars";
import { Box, Chip } from "@mui/material";

interface IMentorProfileHeader {
  navigator: (path:string) => void;
  expertise?: string[];
  imgURL?: string;
  company?: string;
  name?: string;
  role?: string;
}

function MentorProfileHeader(props: IMentorProfileHeader) {
  console.log(props);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
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
      </Box>
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
