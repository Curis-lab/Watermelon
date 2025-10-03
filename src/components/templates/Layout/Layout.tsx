import { ReactNode } from "react";
import Navbar from "../Navbar";
import RegisterModal from "../../molecules/RegisterModal";
import Footer from "../Footer/Footer";
import { Box, styled } from "@mui/material";

interface Props {
  children: ReactNode;
}
/**
 *
 * layout padding inline adjustment..
 * sm: 10px
 * md: 40px
 * lg: 60px
 * xl: 80px
 */

const StyledBodyLayoutInline = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(7.5),
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(10),
  },
}));

const LandingPage = ({ children }: Props) => (
  <>
    <Navbar />
      <StyledBodyLayoutInline>{children}</StyledBodyLayoutInline>
    <Footer />
  </>
);

const MainLayout = ({ children }: Props) => {
  
  return (
    <div>
      <RegisterModal />
      <LandingPage>{children}</LandingPage>
    </div>
  );
};

export default MainLayout;
