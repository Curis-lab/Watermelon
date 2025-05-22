import { ReactNode } from "react";
import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";
// import MUIModel from "../../atoms/Models";
import RegisterModal from "../../molecules/RegisterModal";
import Footer from "../Footer/Footer";

interface Props {
  children: ReactNode;
}

const LandingPage = ({ children }: Props) => (
  <>
    <Navbar />

    {children}
    <Footer />
  </>
);
const GridPage = ({ children }: Props) => (
  <div style={{ display: "grid" }}>
    <Navbar />
    <div>
      {/* <Sidebar /> */}
      {children}
    </div>
    <Footer />
  </div>
);
const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div>
      <RegisterModal />
      {["/", "/homepage", "/start", "/chat"].includes(currentRoute) ? (
        <LandingPage>{children}</LandingPage>
      ) : (
        <GridPage>{children}</GridPage>
      )}
    </div>
  );
};

export default MainLayout;
