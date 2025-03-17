import { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const LandingPage = ({ children }: Props) => (
  <div>
    <Navbar />

    {children}
  </div>
);
const GridPage = ({ children }: Props) => (
  <div style={{ display: "grid" }}>
    <Navbar />
    <div>
      <Sidebar />
      {children}
    </div>
  </div>
);
const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div>
      {["/", "/homepage", "/start",'/chat'].includes(currentRoute) ? (
        <LandingPage>{children}</LandingPage>
      ) : (
        <GridPage>{children}</GridPage>
      )}
    </div>
  );
};

export default MainLayout;
