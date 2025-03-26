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
  Onboarding,
  ProfileSetup,
  Events,
} from "./components/pages";
import MainLayout from "./components/templates/Layout";
import MUIThemeProvider from "./theme/MUIThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./providers/AuthProvider";
import SWRProvider from "./providers/SWRProvider/SWRProvider";

function App() {
  const queryClient = new QueryClient();

  return (
    <SWRProvider>
      <AuthContextProvider>
        <MUIThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/events"
                    element={<Events/>}
                  />
                  <Route path="/mentors" element={<div>on the mentors</div>} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/inbox" element={<ChatAndNetwork />} />
                  <Route path="/profile-setup" element={<ProfileSetup />} />
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/event/:id" element={<EventDiscoveryPage />} />
                  <Route
                    path="/mentor/:id"
                    element={<div>Mentor Details</div>}
                  />
                  <Route
                    path="/mentor/schedule"
                    element={<div>Mentor Schedule</div>}
                  />
                  <Route
                    path="/mentor/edit"
                    element={<div>Mentor Profile Edit</div>}
                  />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/start" element={<CreateEvent />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </MainLayout>
            </ErrorBoundary>
          </QueryClientProvider>
        </MUIThemeProvider>
      </AuthContextProvider>
    </SWRProvider>
  );
}

export default App;
