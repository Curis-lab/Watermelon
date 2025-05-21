import { styled } from "@mui/material";

const StyledFooterContainer = styled("div")(({ theme }) => ({
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 2fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

const StyledFooterCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
}));

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyledFooterCard>
          <h1>Explore </h1>
          <div>
            <p>Popular Categories</p>
            <p>Trending Cities</p>
            <p>Online Events</p>
            <p>Gift Cards</p>
          </div>
        </StyledFooterCard>
        <StyledFooterCard>
          <h1>Hosting</h1>
          <div>
            <p>Create an Event</p>
            <p>Pricing Plans</p>
            <p>Host Resources</p>
            <p>Success Stories</p>
          </div>
        </StyledFooterCard>
        <StyledFooterCard>
          <h1>Company</h1>
          <div>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Center</p>
            <p>Blog</p>
          </div>
        </StyledFooterCard>
        <StyledFooterCard>
          <h1>Support</h1>
          <div>
            <p>Help Center</p>
            <p>Safety Guidelines</p>
            <p>Contact Us</p>
            <p>Accessibility</p>
          </div>
        </StyledFooterCard>
      </StyledFooterContainer>
    </>
  );
};

export default Footer;
