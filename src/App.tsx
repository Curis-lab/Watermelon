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
import Register from "./components/pages/Register/Register";
import MainLayout from "./components/templates/Layout";
import MUIThemeProvider from "./themes/MUIThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./providers/AuthProvider";
import SWRProvider from "./providers/SWRProvider/SWRProvider";

function App() {
  const queryClient = new QueryClient();

  console.log(
    "%cHold Up!\n%cIf someone told you to copy/paste something here you have an 11/10 chance you're being scammed.\n%cPasting anything in here could give attackers access to your Discord account.",
    "font-size: 60px; color: #7b7bff; font-weight: bold;",
    "font-size: 20px; color: white;",
    "font-size: 24px; color: red; font-weight: bold;"
  );
  console.log(
    "\x1b[34m\x1b[1mHold Up!\x1b[0m\n" +
      "If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.\n" +
      "\x1b[31m\x1b[1mPasting anything in here could give attackers access to your Discord account.\x1b[0m"
  );
  return (
    <SWRProvider>
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
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/inbox" element={<ChatAndNetwork />} />
                  <Route path="/profile-setup" element={<ProfileSetup />} />
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/event/:id" element={<EventDiscoveryPage />} />
                  <Route path="/mentor/:id" element={<MentorProfile />} />
                  <Route
                    path="/mentor/schedule"
                    element={<div>Mentor Schedule</div>}
                  />
                  <Route path="/mentor/edit" element={<div>Mentor Edit</div>} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/start" element={<CreateEvent />} />
                  <Route path="/register" element={<Register />} />
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
