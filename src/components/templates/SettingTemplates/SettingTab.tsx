import Box from "@mui/material/Box";
import MUITabs from "../../atoms/Tap/Tap";

const SettingsTemplates = {
  "Organizer Profile Information": <div>Hello</div>,
  "Account Settings": <div>Hello</div>,
  "Event Mangement Preferences": <div>Hello</div>,
  "Payment & Finance Settings": <div>Hello</div>,
  "Team & Access Control": <div>Hello</div>,
  "Communication Settings": <div>Hello</div>,
  "Brand Customization": <div>Hello</div>,
  "Analytics & Insights": <div>Hello</div>,
  "Integrations": <div>Hello</div>,
};

export default function VerticalTabs() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", minHeight: "80vh" }}>
      <MUITabs props={SettingsTemplates} isVertical={true} />
    </Box>
  );
}
