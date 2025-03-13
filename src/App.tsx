import { Routes, Route } from "react-router-dom";
import {
  ChatAndNetwork,
  Home,
  NotFoundPage,
  UserDashboard,
  AdminDashboard,
  EventDiscoveryPage,
  Profile,
  CreateEvent,
} from "./components/pages";
import MainLayout from "./components/templates/Layout";
import MUIThemeProvider from "./theme/MUIThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <MUIThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/chat" element={<ChatAndNetwork />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/event/:id" element={<EventDiscoveryPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/start" element={<CreateEvent />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainLayout>
        </ErrorBoundary>
      </QueryClientProvider>
    </MUIThemeProvider>
  );
}

export default App;
