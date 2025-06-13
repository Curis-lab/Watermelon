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
  Mentors,
  MentorProfile,
} from "./components/pages";
import MainLayout from "./components/templates/Layout";
import MUIThemeProvider from "./themes/MUIThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./providers/AuthProvider";

function App() {
  const queryClient = new QueryClient();

  console.log(
    "%cAttention!\n%cIf someone instructed you to copy/paste something here, there's a high chance it's a scam.\n%cPasting anything here could compromise your EventGo account.",
    "font-size: 60px; color: #7b7bff; font-weight: bold;",
    "font-size: 20px; color: white;",
    "font-size: 24px; color: red; font-weight: bold;"
  );

  return (
    <AuthContextProvider>
      <MUIThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/event/:id" element={<EventDiscoveryPage />} />
                <Route path="/mentor/:id" element={<MentorProfile />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/profile-setup" element={<ProfileSetup />} />
                <Route path="/inbox" element={<ChatAndNetwork />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/start" element={<CreateEvent />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          </ErrorBoundary>
        </QueryClientProvider>
      </MUIThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
