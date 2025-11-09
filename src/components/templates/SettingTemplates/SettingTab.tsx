import Box from "@mui/material/Box";
import MUITabs from "../../atoms/Tap/Tap";

const SettingsTemplates = {
  "Organizer Profile Information": (
    <div>
      🧭 Organizer Profile Information Purpose: To let the organizer manage
      their personal and business profile details. Typically includes: •
      Organizer name, company name • Profile picture or logo • Bio or short
      description • Contact information (email, phone) • Social links (Facebook,
      Instagram, LinkedIn) 🧩 Purpose: Helps build trust and brand identity for
      event participants.
    </div>
  ),
  "Account Settings": (
    <div>
      ⚙️ Account Settings Purpose: To manage login and security preferences.
      Typically includes: • Email and password change • Two-factor
      authentication (2FA) • Account recovery options • Notification and privacy
      preferences 🧩 Purpose: Keeps the organizer’s account secure and
      customizable.
    </div>
  ),
  "Event Mangement Preferences": (
    <div>
      🎯 Event Management Preferences Purpose: To define how the organizer
      prefers to create, manage, and display events. Typically includes: •
      Default event visibility (public/private) • Ticketing rules • Event
      approval flow • Default templates for event creation 🧩 Purpose:
      Streamlines how organizers handle their events efficiently.
    </div>
  ),
  "Payment & Finance Settings": (
    <div>
      💳 Payment & Finance Settings Purpose: To manage payment methods and
      financial details. Typically includes: • Bank account or PayPal info •
      Payout frequency (weekly, monthly) • Currency preferences • Transaction
      history and invoices 🧩 Purpose: Ensures the organizer can receive ticket
      payments and track revenue.
    </div>
  ),
  "Team & Access Control": (
    <div>
      👥 Team & Access Control Purpose: To control who can access or manage the
      organizer’s workspace. Typically includes: • Add/remove team members •
      Assign roles (admin, editor, viewer) • Define permissions for event
      editing, payments, etc. 🧩 Purpose: Enables teamwork while maintaining
      data security.
    </div>
  ),
  "Communication Settings": (
    <div>
      💬 Communication Settings Purpose: To configure how the organizer
      communicates with attendees and team members. Typically includes: • Email
      or SMS notification preferences • Auto-reply templates • Announcement or
      reminder settings 🧩 Purpose: Improves engagement and automates
      communication.
    </div>
  ),
  "Brand Customization": (
    <div>
      🎨 Brand Customization Purpose: To personalize the look and feel of event
      pages or dashboards. Typically includes: • Upload logo and brand colors •
      Customize event ticket or landing page themes • Fonts and layout
      preferences 🧩 Purpose: Keeps events visually consistent with the
      organizer’s brand.
    </div>
  ),
  "Analytics & Insights": (
    <div>
      📊 Analytics & Insights Purpose: To provide data and performance insights
      about events. Typically includes: • Ticket sales summary • Attendee
      demographics • Engagement rates • Revenue and conversion analytics 🧩
      Purpose: Helps organizers understand what’s working and improve future
      events.
    </div>
  ),
  "Integrations": (
    <div>
      🔗 Integrations Purpose: To connect with external apps or services.
      Typically includes: • Payment gateways (Stripe, PayPal) • Marketing tools
      (Mailchimp, HubSpot) • CRM systems or analytics tools 🧩 Purpose: Expands
      functionality by linking to tools the organizer already uses.
    </div>
  ),
};

export default function VerticalTabs() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", minHeight: "80vh" }}>
      <MUITabs props={SettingsTemplates} isVertical={true} />
    </Box>
  );
}
