import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TwoFAAuth from "./TwoFAAuth";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", minHeight: "80vh" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={()=>handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tab
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase',
          background: '#f00'
        }}
        label="Organizer Profile Information" {...a11yProps(0)} />
        <Tab
        sx={{
          // textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase',
          background: '#f00'
        }}
        label="Account Settings" {...a11yProps(1)} />
        <Tab
          sx={{
            textAlign: "start",
            fontWeight: '500',
            textTransform: 'lowercase'
          }}
          label="Event Mangement Preferences"
          {...a11yProps(2)}
        />
        <Tab
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        
        label="Payment & Finance Settings" {...a11yProps(3)} />
        <Tab
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        label="Team & Access Control" {...a11yProps(4)} />
        <Tab
        
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        label="Communication Settings" {...a11yProps(5)} />
        <Tab
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        label="Brand Customization" {...a11yProps(6)} />
        <Tab
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        label="Analytics & Insights" {...a11yProps(6)} />
        <Tab 
        sx={{
          textAlign: "start",
          fontWeight: '500',
          textTransform: 'lowercase'
        }}
        label="Integrations" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        • Organizer name or company name • Profile photo / logo • Bio or
        description • Contact info (email, phone) • Website / social media links
        • Location (city, country)
      </TabPanel>
      <TabPanel value={value} index={1}>
        • Username, email, password update • Two-factor authentication (security
        option) • Notification preferences (email or app alerts) • Subscription
        or membership plan (if your platform has tiers) • Language & timezone
        settings
        <TwoFAAuth />
      </TabPanel>
      <TabPanel value={value} index={2}>
        • Default event visibility (public/private) • Event approval workflow
        (auto-approve vs manual) • Default ticket type and pricing template •
        Event category defaults (music, tech, sports, etc.) • Venue preferences
        (online, physical, hybrid) • Refund & cancellation policy template
      </TabPanel>
      <TabPanel value={value} index={3}>
        • Payout method (PayPal, Stripe, bank transfer) • Tax information •
        Currency preferences • Commission overview (platform fee rate) •
        Financial summary (earnings, withdrawals, pending balance)
      </TabPanel>
      <TabPanel value={value} index={4}>
        • Invite team members • Assign roles (admin, editor, viewer) • Manage
        permissions (who can create/edit events) • Activity logs (who made what
        changes)
      </TabPanel>
      <TabPanel value={value} index={5}>
        • Default event email templates (confirmation, reminder) • Automated
        message schedules • Chat or Q&A settings for events • Customer support
        email or ticket system
      </TabPanel>
      <TabPanel value={value} index={6}>
        • Brand colors, fonts, and banner upload • Logo and favicon • Custom
        domain (if supported) • Theme selection (light/dark or custom templates)
      </TabPanel>
      <TabPanel value={value} index={7}>
        Brand colors, fonts, and banner upload • Logo and favicon • Custom
        domain (if supported) • Theme selection (light/dark or custom templates)
      </TabPanel>
      <TabPanel value={value} index={8}>
        • Event views, ticket sales, attendee stats • Engagement metrics
        (clicks, registrations, check-ins) • Feedback and rating summary •
        Downloadable reports
      </TabPanel>
      <TabPanel value={value} index={6}>
        • Connect Google Calendar or Outlook • CRM tools (HubSpot, Notion, etc.)
        • Marketing tools (Mailchimp, Meta Ads, etc.) • Webhooks or API keys
      </TabPanel>
    </Box>
  );
}
