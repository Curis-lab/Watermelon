import { lazy } from "react";

export const AdminDashboard = lazy(() => import("./AdminDashboard"));
export const ChatAndNetwork = lazy(() => import("./ChatAndNetworkPage"));
export const CreateEvent = lazy(() => import("./CreateEvent"));
export const EventDiscoveryPage = lazy(() => import("./EventDiscoveryPage"));
export const Events = lazy(() => import("./Events"));
export const Home = lazy(() => import("./HomePage"));
export const MentorProfile = lazy(() => import("./MentorProfile"));
export const Mentors = lazy(() => import("./Mentors"));
export const NotFoundPage = lazy(() => import("./NotFoundPage"));
export const Onboarding = lazy(() => import("./Onboarding"));
export const UserDashboard = lazy(() => import("./UserDashboardPage"));

export const Profile = lazy(() => import("./ProfilePage"));

export const ProfileSetup = lazy(() => import("./ProfileSetup"));
export const Settings = lazy(() => import("./Settings"));
