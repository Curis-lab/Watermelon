import { Typography, Box } from "@mui/material";
import VerticalTabs from "./SettingTab";

function SettingTemplates() {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          padding: "15px",
        }}
      >
        Settings
      </Typography>
      <VerticalTabs />
    </Box>
  );
}

export default SettingTemplates;
