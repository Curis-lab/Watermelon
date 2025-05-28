import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";

const StyledFooterContainer = styled("div")(({ theme }) => ({
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 2fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const StyledFooterCard = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyledFooterCard>
          <h3>Company Info</h3>
          <ul>
            <li>Careers</li>
            <li>Press Center</li>
            <li>Trust & Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <h3>Community Resources</h3>
          <ul>
            <li>Help Center</li>
            <li>FAQs, Contact Support</li>
            <li>Blog</li>
            <ul>
              <li>Tips for hosts, Mentorship guides</li>
            </ul>
            <li>Feedback</li>
            <ul>
              <li>Share your ideas</li>
            </ul>
          </ul>
        </StyledFooterCard>
        <StyledFooterCard>
          <h3>Quick Links</h3>
          <ul>
            <li>For Members</li>
            <ul>
              <li>Browse Events</li>
              <li>Find Mentors</li>
              <li>Start a Group</li>
              <li>Success Stories</li>
            </ul>
            <li>For Hosts/Mentors</li>
            <ul>
              <li>Create an Event</li>
              <li>Offer Mentorship</li>
              <li>Hosting Resources</li>
              <li>Community Guidelines</li>
            </ul>
          </ul>
        </StyledFooterCard>
        <StyledFooterCard>
          <Typography variant="h2">Social & Contact</Typography>
          <Box sx={{ display: "flex", gap: 1, marginBlock: 2 }}>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </Box>
          <Typography variant="body1">
            Connecting curious minds through events and mentorship. Whether
            you’re learning, networking, or sharing expertise, our platform
            bridges the gap between Meetup’s community power and ADPList’s
            knowledge-sharing spirit.
          </Typography>
        </StyledFooterCard>
      </StyledFooterContainer>
      <div style={{ textAlign: "center", paddingBlockEnd: "15px" }}>
        ©2025 EventGo. Bringing people together to learn, grow, and connect—one
        event or mentorship session at a time."
      </div>
    </>
  );
};

export default Footer;
