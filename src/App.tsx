import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "./context/SessionContext";
import { routes } from "./components/common/routes";
import ErrorBoundary from "./components/ErrorBoundary";
import MainLayout from "./components/templates/Layout";
import MUIThemeProvider from "./themes/MUIThemeProvider";
import "./themes/app.css";
import ProtectedRoute from "./components/common/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  const availabelRoutes = routes;

  console.log(
    "%cAttention!\n%cIf someone instructed you to copy/paste something here, there's a high chance it's a scam.\n%cPasting anything here could compromise your EventGo account.",
    "font-size: 60px; color: #7b7bff; font-weight: bold;",
    "font-size: 20px; color: white;",
    "font-size: 24px; color: red; font-weight: bold;"
  );

  return (
    <SessionProvider>
      <MUIThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router basename="/">
            <ErrorBoundary>
              <MainLayout>
                <Routes>
                  {availabelRoutes.map((route) => (
                    <Route
                      path={route.path}
                      element={<ProtectedRoute route={route} />}
                      key={route.path}
                    />
                  ))}
                </Routes>
              </MainLayout>
            </ErrorBoundary>
          </Router>
        </QueryClientProvider>
      </MUIThemeProvider>
    </SessionProvider>
  );
}

export default App;
