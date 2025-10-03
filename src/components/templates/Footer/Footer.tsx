import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";
import logo from "../../../static/images/logo.svg";
import { Link } from "react-router-dom";

const StyledFooterContainer = styled("div")(({ theme }) => ({
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 2fr",
  },
}));

const Footer = () => {
  return (
    <Box>
      <StyledFooterContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "50px" }} />
          <Typography
            variant="h5"
          >
            EventGo
          </Typography>
          <Typography
          variant="body1"
          >
            Connecting curious minds through events and mentorship. Join us to
            learn, grow, and connect.
          </Typography>
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
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            gap: "2em", 
            marginTop: "20px",
            justifyContent: {
              xs:"center",
              sm:"flex-end"
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Platform
            </Typography>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Overview
            </Link>
            <Link
              to="/features"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pricing
            </Link>
            <Link
              to="/integrations"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Integrations
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Careers
            </Link>
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Resources
            </Typography>
            <Link
              to="/documentation"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Documentation
            </Link>
            <Link
              to="/support"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Support
            </Link>
            <Link
              to="/guides"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Guides
            </Link>
            <a
              href="http://localhost:3000/docs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              API
            </a>
          </Box>
        </Box>
      </StyledFooterContainer>
      <div style={{ textAlign: "center", paddingBlockEnd: "15px" }}>
        ©2025 EventGo. All rights reserved.
      </div>
    </Box>
  );
};

export default Footer;
